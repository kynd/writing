#!/usr/bin/env node
/**
 * add-image-sizes.js
 * Reads the original pixel widths from Notion's HTML export and adds size
 * titles ("50" or "75") to matching image references in existing markdown files.
 * Images at full width (~708px) get no title and default to 100% via CSS.
 *
 * Run this after migration to apply sizes without re-generating all content.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'downloaded');
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'docs');

// Notion's content column width in the HTML export
const NOTION_CONTENT_WIDTH = 708;

function widthToBucket(px) {
  const ratio = px / NOTION_CONTENT_WIDTH;
  if (ratio > 0.875) return null; // >= ~620px → 100%, no title needed
  if (ratio > 0.600) return '75'; // >= ~425px → 75%
  return '50';                     // < ~425px → 50%
}

// --- Slug helpers (mirrors migrate.js) ---

function stripNotionId(name) {
  return name.replace(/\s+[0-9a-f]{32}$/i, '').trim();
}

function extractEnglishPart(title) {
  const nonAsciiIdx = title.search(/[^\x00-\x7F]/);
  if (nonAsciiIdx <= 0) return title;
  let english = title.slice(0, nonAsciiIdx).trim();
  english = english.replace(/\s+[A-Z0-9]+$/, '').trim();
  return english || title;
}

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '-')
    .replace(/[\s_]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
}

function titleToSlug(rawName) {
  return toSlug(extractEnglishPart(stripNotionId(rawName)));
}

// --- Build HTML path → url slug map ---

function buildLinkMap(sourceRoot) {
  const map = new Map();
  const entries = fs.readdirSync(sourceRoot, { withFileTypes: true });
  const htmlFiles = entries.filter((e) => e.isFile() && e.name.endsWith('.html') && !e.name.startsWith('.'));
  const dirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith('.'));

  let wrapper = null;
  if (htmlFiles.length === 1 && dirs.length === 1) {
    const hs = titleToSlug(path.basename(htmlFiles[0].name, '.html'));
    const ds = titleToSlug(dirs[0].name);
    if (hs === ds) {
      wrapper = {
        rootHtml: path.join(sourceRoot, htmlFiles[0].name),
        subDir: path.join(sourceRoot, dirs[0].name),
      };
    }
  }

  function walk(dir, segments) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name).normalize('NFC');
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...segments, titleToSlug(entry.name)]);
      } else if (entry.name.endsWith('.html')) {
        const slug = titleToSlug(path.basename(entry.name, '.html'));
        map.set(full, [...segments, slug].join('/'));
      }
    }
  }

  if (wrapper) {
    map.set(wrapper.rootHtml.normalize('NFC'), '');
    walk(wrapper.subDir, []);
  } else {
    walk(sourceRoot, []);
  }
  return map;
}

// --- Find the markdown file for a given slug ---

function findMdFile(slug) {
  if (slug === '') return path.join(CONTENT_DIR, 'index.md');
  const direct = path.join(CONTENT_DIR, `${slug}.md`);
  if (fs.existsSync(direct)) return direct;
  const indexed = path.join(CONTENT_DIR, slug, 'index.md');
  if (fs.existsSync(indexed)) return indexed;
  return null;
}

// --- Process one HTML file, update its corresponding markdown ---

function processHtml(htmlPath, slug) {
  const mdPath = findMdFile(slug);
  if (!mdPath) return false;

  const html = fs.readFileSync(htmlPath, 'utf8');
  const $ = cheerio.load(html);
  const article = $('article.page');
  if (!article.length) return false;

  // Collect size buckets for local images in DOM order (same filter as migrate.js)
  const buckets = [];
  article.find('img').each((_, el) => {
    const src = $(el).attr('src') || '';
    if (!src || src.startsWith('http') || src.startsWith('data:')) return;

    const imgAbsPath = path.resolve(path.dirname(htmlPath), decodeURIComponent(src));
    if (!fs.existsSync(imgAbsPath)) return;

    const style = $(el).attr('style') || '';
    const m = style.match(/width:\s*([\d.]+)px/);
    const px = m ? parseFloat(m[1]) : NOTION_CONTENT_WIDTH;
    buckets.push(widthToBucket(px));
  });

  if (buckets.length === 0) return false;

  let md = fs.readFileSync(mdPath, 'utf8');
  let idx = 0;

  // Match /images/ references in markdown to buckets by position.
  // Handles both ![alt](/images/name.png) and [![alt](/images/name.png)](href).
  // Also handles already-titled images (e.g. from a previous run).
  const newMd = md.replace(
    /!\[([^\]]*)\]\(\/images\/([^)"]*?)(?:\s+"[^"]*")?\)/g,
    (match, alt, imgName) => {
      if (idx >= buckets.length) return match;
      const bucket = buckets[idx++];
      if (bucket === null) return `![${alt}](/images/${imgName})`;
      return `![${alt}](/images/${imgName} "${bucket}")`;
    }
  );

  if (newMd === md) return false;

  fs.writeFileSync(mdPath, newMd);
  console.log(`  ✓ ${path.relative(ROOT, mdPath)} (${buckets.length} image${buckets.length !== 1 ? 's' : ''})`);
  return true;
}

// --- Entry point ---

function main() {
  console.log('📐 Adding image sizes to markdown files...\n');

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  const linkMap = buildLinkMap(SOURCE_DIR);
  let updated = 0;
  let skipped = 0;

  for (const [htmlPath, slug] of linkMap) {
    if (processHtml(htmlPath, slug)) {
      updated++;
    } else {
      skipped++;
    }
  }

  console.log(`\n✅ Done. ${updated} files updated, ${skipped} unchanged.`);
}

main();
