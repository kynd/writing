// Adds short `slug:` frontmatter to every doc and rewrites internal links.
// Safe to re-run: skips files that already have a slug field.
import { readdir, readFile, writeFile } from 'fs/promises';
import { join, relative, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = join(__dirname, '..', 'src', 'content', 'docs');
const BASE = '/writing';

async function findMarkdown(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await findMarkdown(full));
    else if (e.name.endsWith('.md')) files.push(full);
  }
  return files;
}

// The hierarchical path used for links (strips .md and trailing /index)
function filePath(abs) {
  return relative(DOCS_DIR, abs).replace(/\.md$/, '').replace(/\/index$/, '');
}

// The short slug = last segment of the hierarchical path
function shortSlug(abs) {
  const b = basename(abs, '.md');
  return b === 'index' ? basename(dirname(abs)) : b;
}

async function main() {
  const files = await findMarkdown(DOCS_DIR);

  // Build map: old hierarchical path → new short slug
  const pathToSlug = new Map();
  for (const f of files) {
    const fp = filePath(f);
    if (fp === '') continue; // root index.md — leave alone
    pathToSlug.set(fp, shortSlug(f));
  }

  // Sort longest-first so partial path matches don't clobber longer ones
  const sortedPaths = [...pathToSlug.entries()].sort((a, b) => b[0].length - a[0].length);

  for (const f of files) {
    const fp = filePath(f);
    let content = await readFile(f, 'utf-8');
    let changed = false;

    // ── Step 1: inject slug into frontmatter ──────────────────────────
    if (fp !== '') {
      const slug = shortSlug(f);
      const fmEnd = content.indexOf('\n---', 3);
      if (fmEnd !== -1) {
        const fm = content.slice(0, fmEnd);
        if (!fm.includes('\nslug:')) {
          content = fm + `\nslug: ${slug}` + content.slice(fmEnd);
          changed = true;
        }
      }
    }

    // ── Step 2: rewrite markdown links  (/old-path) → (/new-slug) ────
    for (const [oldPath, slug] of sortedPaths) {
      // Matches (]/old-path) or (]/old-path#anchor) or (]/old-path/)
      const re = new RegExp(`(\\]\\()/${oldPath}((?:#[^)]*)?)(\\))`, 'g');
      const next = content.replace(re, (_, open, anchor, close) => `${open}/${slug}${anchor}${close}`);
      if (next !== content) { content = next; changed = true; }
    }

    // ── Step 3: rewrite HTML hrefs  href="/writing/old-path → href="/writing/new-slug ──
    for (const [oldPath, slug] of sortedPaths) {
      const re = new RegExp(`(href="${BASE}/)${oldPath}((?:#[^"]*)?")`, 'g');
      const next = content.replace(re, (_, prefix, suffix) => `${prefix}${slug}${suffix}`);
      if (next !== content) { content = next; changed = true; }
    }

    if (changed) {
      await writeFile(f, content, 'utf-8');
      console.log('updated:', relative(DOCS_DIR, f));
    }
  }

  console.log('\nDone. Mapping summary:');
  for (const [old, slug] of sortedPaths) {
    if (old !== slug) console.log(`  /${old} → /${slug}`);
  }
}

main().catch(console.error);
