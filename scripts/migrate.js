#!/usr/bin/env node
/**
 * Migration pipeline: Notion HTML export → Astro Markdown content.
 *
 * Converts ./downloaded/ tree into:
 *   src/content/docs/**\/*.md   (markdown articles)
 *   public/images/              (semantic-named images)
 *
 * Safe to re-run: skips already-processed files by overwriting them
 * idempotently (same input → same output).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'downloaded');
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'docs');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');

// --- Slug helpers -----------------------------------------------------------

/** Strip Notion UUID suffix (32 hex chars) from filenames/folder names. */
function stripNotionId(name) {
  return name
    .replace(/\s+[0-9a-f]{32}$/i, '')   // trailing " <uuid>"
    .trim();
}

/**
 * Extract only the English/ASCII portion of a bilingual title.
 * e.g. "Rotation 回転" → "Rotation"
 *      "2D Feedback Systems 2次元フィードバック" → "2D Feedback Systems"
 */
function extractEnglishPart(title) {
  const nonAsciiIdx = title.search(/[^\x00-\x7F]/);
  if (nonAsciiIdx <= 0) return title;
  let english = title.slice(0, nonAsciiIdx).trim();
  // Strip a trailing isolated abbreviation/number repeated from the Japanese
  english = english.replace(/\s+[A-Z0-9]+$/, '').trim();
  return english || title;
}

/**
 * Convert an ASCII title string into a URL-safe kebab-case slug.
 */
function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '-')
    .replace(/[\s_]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
}

/** Slug for output file/directory names — English-only + kebab. */
function titleToSlug(rawName) {
  return toSlug(extractEnglishPart(stripNotionId(rawName)));
}

// --- Image naming -----------------------------------------------------------

/**
 * Derive a meaningful kebab-case filename for an image from context.
 * Uses: figcaption, nearby <p> text, page <h1>, or falls back to the
 * original basename.
 */
function deriveImageName($, imgEl, pageTitle, ext) {
  const figure = $(imgEl).closest('figure');
  const caption = figure.find('figcaption').text().trim();

  // Walk siblings before the figure to find context paragraph
  let contextText = '';
  const prevSib = figure.prev();
  if (prevSib.length) contextText = prevSib.text().trim();

  const raw = caption || contextText || pageTitle || '';
  const base = toSlug(raw.slice(0, 60)) || 'image';

  return `${base}${ext}`;
}

/** Return a deduplicated image filename, appending -N if needed. */
function uniqueImageName(desired, usedNames) {
  const ext = path.extname(desired);
  const stem = desired.slice(0, desired.length - ext.length);
  let name = desired;
  let counter = 1;
  while (usedNames.has(name)) {
    name = `${stem}-${counter}${ext}`;
    counter++;
  }
  usedNames.add(name);
  return name;
}

// --- Link rewriting ---------------------------------------------------------

/**
 * Build a lookup map from every discovered HTML file's source path
 * to the relative markdown URL it will become in /docs/.
 *
 * Detects the single-wrapper pattern so that URLs start at the root:
 * e.g. "downloaded/Index/Drawing with code/Building my own tools.html"
 *  →  "drawing-with-code/building-my-own-tools"
 */
function buildLinkMap(sourceRoot) {
  const map = new Map(); // absolute source path → relative content URL

  // Check for single-wrapper to flatten the URL hierarchy
  const wrapper = (() => {
    const entries = fs.readdirSync(sourceRoot, { withFileTypes: true });
    const htmlFiles = entries.filter((e) => e.isFile() && e.name.endsWith('.html') && !e.name.startsWith('.'));
    const dirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith('.'));
    if (htmlFiles.length === 1 && dirs.length === 1) {
      const hs = titleToSlug(path.basename(htmlFiles[0].name, '.html'));
      const ds = titleToSlug(dirs[0].name);
      if (hs === ds) return { rootHtml: path.join(sourceRoot, htmlFiles[0].name), subDir: path.join(sourceRoot, dirs[0].name) };
    }
    return null;
  })();

  function walk(dir, segments) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      // Normalize to NFC: macOS readdirSync returns NFD; HTML hrefs are NFC
      const full = path.join(dir, entry.name).normalize('NFC');
      if (entry.isDirectory()) {
        const slug = titleToSlug(entry.name);
        walk(path.join(dir, entry.name), [...segments, slug]);
      } else if (entry.name.endsWith('.html')) {
        const slug = titleToSlug(path.basename(entry.name, '.html'));
        const urlPath = [...segments, slug].join('/');
        map.set(full, urlPath);
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

// --- Turndown configuration -------------------------------------------------

function createTurndown() {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    hr: '---',
  });

  // Preserve raw <details>/<summary> (Notion toggle blocks)
  td.addRule('toggle', {
    filter: ['details'],
    replacement(content, node) {
      const summary = node.querySelector('summary');
      const summaryText = summary ? summary.textContent.trim() : 'Details';
      const bodyContent = content.replace(/^\s*.*?\n/, '').trim(); // drop summary line
      return `\n<details>\n<summary>${summaryText}</summary>\n\n${bodyContent}\n\n</details>\n`;
    },
  });

  // Notion callout blocks
  td.addRule('callout', {
    filter(node) {
      return node.classList && node.classList.contains('callout');
    },
    replacement(content) {
      return `\n> ${content.trim().replace(/\n/g, '\n> ')}\n`;
    },
  });

  // Notion "link-to-page" figures → clean markdown links (rewritten later)
  td.addRule('linkToPage', {
    filter(node) {
      return (
        node.nodeName === 'FIGURE' &&
        node.classList &&
        node.classList.contains('link-to-page')
      );
    },
    replacement(content) {
      return `\n${content.trim()}\n`;
    },
  });

  // Bilingual headings: split <br>-separated lines into separate headings of the same level
  td.addRule('bilingualHeading', {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    replacement(content, node) {
      const level = parseInt(node.nodeName[1]);
      const hashes = '#'.repeat(level);
      const lines = content.trim().split(/\n+/).map(l => l.trim().replace(/\*\*/g, '')).filter(Boolean);
      return '\n\n' + lines.map(l => `${hashes} ${l}`).join('\n') + '\n\n';
    },
  });

  return td;
}

// --- Core conversion --------------------------------------------------------

/**
 * Convert a single HTML file to Markdown.
 * Returns { title, markdown } or null if the file should be skipped.
 */
function convertFile(htmlPath, linkMap, usedImageNames) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const $ = cheerio.load(html);

  // Extract page title
  const rawTitle =
    $('h1.page-title').first().text().trim() ||
    $('title').first().text().trim() ||
    stripNotionId(path.basename(htmlPath, '.html'));

  const article = $('article.page');
  if (!article.length) return null;

  // Remove the page header (icon + title + description already in frontmatter)
  article.find('header').remove();

  // Unwrap Notion's display:contents divs inside tables so <tbody>→<tr> is direct
  article.find('table div').each((_, el) => {
    $(el).replaceWith($(el).contents());
  });

  // ---- Simple tables → clean HTML placeholders (Turndown has no table support) ----
  const tablePlaceholders = [];
  article.find('table.simple-table').each((_, el) => {
    const rows = [];
    $(el).find('tr').each((_, tr) => {
      const cells = [];
      $(tr).find('td, th').each((_, td) => cells.push($(td).text().trim()));
      if (cells.length) rows.push(cells);
    });
    if (!rows.length) return;
    const colCount = Math.max(...rows.map(r => r.length));
    const tableHtml = '<table class="matrix-table"><tbody>' +
      rows.map(row => {
        const padded = [...row];
        while (padded.length < colCount) padded.push('');
        return '<tr>' + padded.map(c => `<td>${c}</td>`).join('') + '</tr>';
      }).join('') +
      '</tbody></table>';
    const idx = tablePlaceholders.length;
    tablePlaceholders.push(tableHtml);
    $(el).replaceWith(`<p>TABLEWRAP${idx}END</p>`);
  });

  // ---- KaTeX: strip style imports, preserve rendered HTML via placeholders ----
  article.find('style').each((_, el) => {
    if ($(el).text().includes('katex')) $(el).remove();
  });
  const katexPlaceholders = [];
  article.find('span.katex').each((_, el) => {
    const html = $.html(el);
    const idx = katexPlaceholders.length;
    katexPlaceholders.push(html);
    $(el).replaceWith(`KATEX${idx}END`);
  });

  // ---- Image processing ----
  article.find('img').each((_, imgEl) => {
    const src = $(imgEl).attr('src');
    if (!src) return;

    // Skip external URLs and data URIs
    if (src.startsWith('http') || src.startsWith('data:')) {
      $(imgEl).attr('src', src); // leave as-is
      return;
    }

    // Resolve absolute source path
    const imgAbsPath = path.resolve(path.dirname(htmlPath), decodeURIComponent(src));

    if (!fs.existsSync(imgAbsPath)) {
      console.warn(`  ⚠ Image not found: ${imgAbsPath}`);
      return;
    }

    const ext = path.extname(imgAbsPath).toLowerCase();
    const desired = deriveImageName($, imgEl, rawTitle, ext);
    const finalName = uniqueImageName(desired, usedImageNames);

    // Copy to public/images
    const destPath = path.join(IMAGES_DIR, finalName);
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
    fs.copyFileSync(imgAbsPath, destPath);

    // Rewrite src to public URL
    $(imgEl).attr('src', `/images/${finalName}`);

    // Also fix the parent <a> href if it wraps this image
    const parentA = $(imgEl).closest('a');
    if (parentA.length) {
      const aHref = parentA.attr('href') || '';
      if (!aHref.startsWith('http')) {
        parentA.attr('href', `/images/${finalName}`);
      }
    }
  });

  // ---- Vimeo links → responsive iframes ----
  // Use placeholders so Turndown doesn't strip the iframe HTML
  const videoPlaceholders = [];
  {
    const toReplace = [];
    article.find('a[href]').each((_, aEl) => {
      const href = $(aEl).attr('href') || '';
      const m = href.match(/^https?:\/\/(?:www\.)?vimeo\.com\/(\d+)(?:\/([a-f0-9]+))?(?:[?#].*)?$/);
      if (!m) return;
      const videoId = m[1];
      const hash = m[2];
      const src = hash
        ? `https://player.vimeo.com/video/${videoId}?h=${hash}`
        : `https://player.vimeo.com/video/${videoId}`;
      const iframe = `<div class="video-wrap"><iframe title="vimeo-player" src="${src}" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowfullscreen></iframe></div>`;
      const placeholder = `VIDEOWRAP${videoPlaceholders.length}END`;
      videoPlaceholders.push(iframe);
      const figure = $(aEl).closest('figure');
      toReplace.push({ target: figure.length ? figure : $(aEl), placeholder });
    });
    for (const { target, placeholder } of toReplace) target.replaceWith(`<p>${placeholder}</p>`);
  }

  // ---- CodePen links → embeds ----
  {
    const toReplace = [];
    article.find('a[href]').each((_, aEl) => {
      const href = $(aEl).attr('href') || '';
      const m = href.match(/^https?:\/\/codepen\.io\/([^/]+)\/pen\/([^/?#]+)/);
      if (!m) return;
      const user = m[1];
      const penId = m[2];
      const src = `https://codepen.io/${user}/embed/${penId}?default-tab=result`;
      const iframe = `<div class="codepen-wrap"><iframe title="CodePen" src="${src}" height="420" style="width:100%;border:none;" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe></div>`;
      const placeholder = `VIDEOWRAP${videoPlaceholders.length}END`;
      videoPlaceholders.push(iframe);
      const figure = $(aEl).closest('figure');
      toReplace.push({ target: figure.length ? figure : $(aEl), placeholder });
    });
    for (const { target, placeholder } of toReplace) target.replaceWith(`<p>${placeholder}</p>`);
  }

  // ---- Instagram bookmark figures → embeds ----
  {
    const toReplace = [];
    article.find('figure a.bookmark').each((_, aEl) => {
      const href = $(aEl).attr('href') || '';
      const m = href.match(/^https?:\/\/(?:www\.)?instagram\.com\/p\/([^/?#]+)/);
      if (!m) return;
      const postId = m[1];
      const permalink = `https://www.instagram.com/p/${postId}/`;
      const embed = `<div class="instagram-wrap"><blockquote class="instagram-media" data-instgrm-permalink="${permalink}" data-instgrm-version="14" style="width:100%;max-width:540px;margin:0;border:none;border-radius:4px;padding:0;"></blockquote></div>`;
      const placeholder = `VIDEOWRAP${videoPlaceholders.length}END`;
      videoPlaceholders.push(embed);
      const figure = $(aEl).closest('figure');
      toReplace.push({ target: figure.length ? figure : $(aEl), placeholder });
    });
    for (const { target, placeholder } of toReplace) target.replaceWith(`<p>${placeholder}</p>`);
  }

  // ---- Plain Instagram post links → embeds (standalone URL links only) ----
  // Only converts links whose visible text IS the Instagram URL (not inline prose links)
  {
    const toReplace = [];
    article.find('a[href]').each((_, aEl) => {
      const href = $(aEl).attr('href') || '';
      const m = href.match(/^https?:\/\/(?:www\.)?instagram\.com\/p\/([^/?#]+)/);
      if (!m) return;
      // Only embed when the link text itself looks like a URL (standalone link, not prose)
      // Note: bookmark figures are already replaced before this runs, so no double-processing
      const linkText = $(aEl).text().trim();
      if (!linkText.match(/^https?:\/\/(?:www\.)?instagram\.com\//)) return;
      const postId = m[1];
      const permalink = `https://www.instagram.com/p/${postId}/`;
      const embed = `<div class="instagram-wrap"><blockquote class="instagram-media" data-instgrm-permalink="${permalink}" data-instgrm-version="14" style="width:100%;max-width:540px;margin:0;border:none;border-radius:4px;padding:0;"></blockquote></div>`;
      const placeholder = `VIDEOWRAP${videoPlaceholders.length}END`;
      videoPlaceholders.push(embed);
      // Replace the closest block ancestor (figure, p) so nothing orphaned remains
      const figure = $(aEl).closest('figure');
      const parent = $(aEl).parent('p');
      const target = figure.length ? figure : (parent.length ? parent : $(aEl));
      toReplace.push({ target, placeholder });
    });
    for (const { target, placeholder } of toReplace) target.replaceWith(`<p>${placeholder}</p>`);
  }

  // ---- ShaderToy bookmark figures → embeds ----
  {
    const toReplace = [];
    article.find('figure a.bookmark').each((_, aEl) => {
      const href = $(aEl).attr('href') || '';
      const m = href.match(/^https?:\/\/(?:www\.)?shadertoy\.com\/view\/([^/?#]+)/);
      if (!m) return;
      const shaderID = m[1];
      const src = `https://www.shadertoy.com/embed/${shaderID}?gui=true&t=10&paused=true`;
      const iframe = `<div class="video-wrap"><iframe title="ShaderToy" src="${src}" frameborder="0" allowfullscreen></iframe></div>`;
      const placeholder = `VIDEOWRAP${videoPlaceholders.length}END`;
      videoPlaceholders.push(iframe);
      const figure = $(aEl).closest('figure');
      toReplace.push({ target: figure.length ? figure : $(aEl), placeholder });
    });
    for (const { target, placeholder } of toReplace) target.replaceWith(`<p>${placeholder}</p>`);
  }

  // ---- Generic bookmark figures → link preview cards ----
  const bookmarkPlaceholders = [];
  {
    const toReplace = [];
    article.find('figure a.bookmark').each((_, aEl) => {
      const href = $(aEl).attr('href') || '';
      if (!href) return;
      const title = $(aEl).find('.bookmark-title').text().trim();
      const description = $(aEl).find('.bookmark-description').text().trim();
      const imageUrl = $(aEl).find('.bookmark-image').attr('src') || '';
      const faviconUrl = $(aEl).find('.bookmark-icon').attr('src') || '';

      const imageHtml = imageUrl
        ? `<img src="${imageUrl}" class="bookmark-image" alt="" loading="lazy" onerror="this.style.display='none'">`
        : '';
      const faviconHtml = faviconUrl
        ? `<img src="${faviconUrl}" class="bookmark-favicon" alt="" onerror="this.style.display='none'">`
        : '';
      const descHtml = description
        ? `<div class="bookmark-description">${description}</div>`
        : '';

      const cardHtml =
        `<div class="bookmark-card">` +
        `<a href="${href}" target="_blank" rel="noopener" class="bookmark-link">` +
        `<div class="bookmark-info">` +
        `<div class="bookmark-title">${title}</div>` +
        descHtml +
        `<div class="bookmark-url">${faviconHtml}<span>${href}</span></div>` +
        `</div>` +
        imageHtml +
        `</a></div>`;

      const idx = bookmarkPlaceholders.length;
      bookmarkPlaceholders.push(cardHtml);
      const figure = $(aEl).closest('figure');
      toReplace.push({ target: figure.length ? figure : $(aEl), placeholder: `BOOKMARK${idx}END` });
    });
    for (const { target, placeholder } of toReplace) target.replaceWith(`<p>${placeholder}</p>`);
  }

  // ---- Internal link rewriting ----
  article.find('a[href]').each((_, aEl) => {
    const href = $(aEl).attr('href');
    if (!href || href.startsWith('http') || href.startsWith('#')) return;

    // Resolve absolute path; normalize to NFC to match macOS NFD filesystem strings stored NFC in map
    const absTarget = path.resolve(path.dirname(htmlPath), decodeURIComponent(href)).normalize('NFC');
    const mapped = linkMap.get(absTarget);
    if (mapped) {
      $(aEl).attr('href', `/${mapped}`);
    } else if (mapped === '') {
      $(aEl).attr('href', '/');
    }
  });

  // ---- Convert to Markdown ----
  const td = createTurndown();
  const bodyHtml = article.find('.page-body').html() || article.html() || '';
  let markdown = td.turndown(bodyHtml);

  // Restore table placeholders
  tablePlaceholders.forEach((html, i) => {
    markdown = markdown.replace(`TABLEWRAP${i}END`, `\n\n${html}\n\n`);
  });

  // Restore KaTeX placeholders
  katexPlaceholders.forEach((html, i) => {
    markdown = markdown.replace(`KATEX${i}END`, html);
  });

  // Restore Vimeo/embed iframe placeholders
  videoPlaceholders.forEach((html, i) => {
    markdown = markdown.replace(`VIDEOWRAP${i}END`, `\n\n${html}\n\n`);
  });

  // Restore bookmark card placeholders
  bookmarkPlaceholders.forEach((html, i) => {
    markdown = markdown.replace(`BOOKMARK${i}END`, `\n\n${html}\n\n`);
  });

  // Strip emoji characters (must run before footer stripping so link text is clean)
  markdown = markdown.replace(/[\u{1F000}-\u{1FFFF}]|[\u{2600}-\u{27BF}]/gu, '').trim();

  // Strip "Mini FAQs" / "FAQs Mini" section and everything that follows it
  markdown = markdown.replace(/\n{1,2}\*\*(?:Mini FAQs?|FAQs? Mini)\*\*[\s\S]*$/, '').trim();

  // Strip the common page footer: [Index](/) … --- … @kynd socials
  markdown = markdown.replace(/\n{1,2}\[Index\]\(\/?\)[\s\S]*$/, '').trim();
  markdown = markdown.replace(/\n{1,2}---\s*\n[\s\S]*?@kynd[\s\S]*$/, '').trim();
  markdown = markdown.replace(/\n{1,2}@kynd[\s\S]*$/, '').trim();

  // Clean up excessive blank lines
  markdown = markdown.replace(/\n{3,}/g, '\n\n').trim();

  return { title: rawTitle, markdown };
}

// --- Directory walker -------------------------------------------------------

function processDirectory(sourceDir, outputDir, linkMap, usedImageNames, depth = 0) {
  fs.mkdirSync(outputDir, { recursive: true });

  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  const htmlFiles = entries.filter(
    (e) => e.isFile() && e.name.endsWith('.html') && !e.name.startsWith('.')
  );
  const subDirs = entries.filter(
    (e) => e.isDirectory() && !e.name.startsWith('.')
  );

  for (const file of htmlFiles) {
    const srcPath = path.join(sourceDir, file.name);
    const slug = titleToSlug(path.basename(file.name, '.html'));

    const matchingDir = subDirs.find((d) => titleToSlug(d.name) === slug);

    let outFile;
    if (matchingDir) {
      const nestedOut = path.join(outputDir, slug);
      fs.mkdirSync(nestedOut, { recursive: true });
      outFile = path.join(nestedOut, 'index.md');
    } else {
      outFile = path.join(outputDir, `${slug}.md`);
    }

    console.log(`  → ${path.relative(ROOT, outFile)}`);

    const result = convertFile(srcPath, linkMap, usedImageNames);
    if (!result) {
      console.warn(`  ⚠ Skipped (no article): ${file.name}`);
      continue;
    }

    const { title: pageTitle, markdown } = result;

    const frontmatter = [
      '---',
      `title: "${pageTitle.replace(/"/g, '\\"')}"`,
      '---',
      '',
    ].join('\n');

    fs.writeFileSync(outFile, frontmatter + markdown + '\n');
  }

  for (const dir of subDirs) {
    const slug = titleToSlug(dir.name);
    processDirectory(
      path.join(sourceDir, dir.name),
      path.join(outputDir, slug),
      linkMap,
      usedImageNames,
      depth + 1
    );
  }
}

// --- Entry point ------------------------------------------------------------

/**
 * Detect if downloaded/ has exactly one top-level folder (Notion default
 * export structure: a single "Index" folder + a matching root HTML file).
 * If so, return { rootHtml, contentDir } so we can flatten the hierarchy:
 * the root HTML → docs/index.md, and the folder contents → docs/* directly.
 */
function detectTopLevelWrapper(sourceRoot) {
  const entries = fs.readdirSync(sourceRoot, { withFileTypes: true });
  const htmlFiles = entries.filter(
    (e) => e.isFile() && e.name.endsWith('.html') && !e.name.startsWith('.')
  );
  const dirs = entries.filter(
    (e) => e.isDirectory() && !e.name.startsWith('.')
  );

  if (htmlFiles.length === 1 && dirs.length === 1) {
    const htmlSlug = titleToSlug(path.basename(htmlFiles[0].name, '.html'));
    const dirSlug = titleToSlug(dirs[0].name);
    if (htmlSlug === dirSlug) {
      return {
        rootHtml: path.join(sourceRoot, htmlFiles[0].name),
        contentSubDir: path.join(sourceRoot, dirs[0].name),
      };
    }
  }
  return null;
}

function main() {
  console.log('🚀 Starting Notion → Markdown migration...\n');

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  // Clean output directories for a fresh run
  console.log('🧹 Cleaning output directories...');
  if (fs.existsSync(CONTENT_DIR)) fs.rmSync(CONTENT_DIR, { recursive: true });
  if (fs.existsSync(IMAGES_DIR)) fs.rmSync(IMAGES_DIR, { recursive: true });

  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  // Build link map for cross-page link rewriting
  console.log('🗺  Building link map...');
  const linkMap = buildLinkMap(SOURCE_DIR);
  console.log(`   Found ${linkMap.size} pages.\n`);

  // Shared set to deduplicate image filenames across the whole run
  const usedImageNames = new Set();

  console.log('📄 Converting HTML → Markdown...');

  // Detect single-wrapper pattern and flatten if found
  const wrapper = detectTopLevelWrapper(SOURCE_DIR);
  if (wrapper) {
    console.log('  ℹ  Detected single top-level wrapper — flattening to root.\n');

    // Convert root HTML → docs/index.md
    const rootResult = convertFile(wrapper.rootHtml, linkMap, usedImageNames);
    if (rootResult) {
      const outFile = path.join(CONTENT_DIR, 'index.md');
      console.log(`  → ${path.relative(ROOT, outFile)}`);
      const fm = ['---', `title: "${rootResult.title.replace(/"/g, '\\"')}"`, '---', ''].join('\n');
      fs.writeFileSync(outFile, fm + rootResult.markdown + '\n');
    }

    // Process the sub-folder directly into CONTENT_DIR (no index/ prefix)
    processDirectory(wrapper.contentSubDir, CONTENT_DIR, linkMap, usedImageNames);
  } else {
    processDirectory(SOURCE_DIR, CONTENT_DIR, linkMap, usedImageNames);
  }

  // Promote FAQs to root level so it appears as a top-level nav entry
  const faqsSrc = path.join(CONTENT_DIR, 'sketching-with-math-and-quasi-physics', 'faqs.md');
  const faqsDest = path.join(CONTENT_DIR, 'faq.md');
  if (fs.existsSync(faqsSrc)) {
    fs.renameSync(faqsSrc, faqsDest);
    console.log('  ℹ  Promoted sketching-with-math-and-quasi-physics/faqs.md → faq.md');
  }

  // Rewrite stale links caused by file promotions / renames
  const linkFixes = [
    ['/sketching-with-math-and-quasi-physics/faqs', '/faq'],
  ];
  (function rewriteLinks(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { rewriteLinks(full); continue; }
      if (!entry.name.endsWith('.md')) continue;
      let content = fs.readFileSync(full, 'utf8');
      let changed = false;
      for (const [from, to] of linkFixes) {
        const next = content.split(from).join(to);
        if (next !== content) { content = next; changed = true; }
      }
      if (changed) fs.writeFileSync(full, content);
    }
  })(CONTENT_DIR);

  console.log('\n✅ Migration complete!');
  console.log(`   Markdown files: ${CONTENT_DIR}`);
  console.log(`   Images:         ${IMAGES_DIR}`);
}

main();
