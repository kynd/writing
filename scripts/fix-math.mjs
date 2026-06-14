// Replaces pre-rendered KaTeX HTML blobs with clean $...$ / $$...$$ math syntax.
// Usage: node scripts/fix-math.mjs <file>
import fs from 'fs';

const filePath = process.argv[2];
if (!filePath) { console.error('Usage: node fix-math.mjs <file>'); process.exit(1); }

let content = fs.readFileSync(filePath, 'utf8');

// Find the index just past the closing </span> that matches the opening <span> at startIdx.
function findClose(str, startIdx) {
  let depth = 0;
  let i = startIdx;
  while (i < str.length) {
    if (str[i] === '<') {
      if (str.startsWith('</span>', i)) {
        depth--;
        if (depth === 0) return i + 7;
        i += 7;
      } else if (str.startsWith('<span', i)) {
        depth++;
        i += 5;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  return -1;
}

function extractLatex(block) {
  const m = block.match(/annotation encoding="application\/x-tex">([^<]*)<\/annotation>/);
  return m ? m[1] : null;
}

let result = '';
let i = 0;

while (i < content.length) {
  // Block math: <span class="katex-display">
  if (content.startsWith('<span class="katex-display">', i)) {
    const end = findClose(content, i);
    if (end !== -1) {
      const block = content.slice(i, end);
      const latex = extractLatex(block);
      if (latex) { result += `$$${latex}$$`; i = end; continue; }
    }
  }

  // Inline math: <span class="katex">
  if (content.startsWith('<span class="katex">', i)) {
    const end = findClose(content, i);
    if (end !== -1) {
      const block = content.slice(i, end);
      const latex = extractLatex(block);
      if (latex) { result += `$${latex}$`; i = end; continue; }
    }
  }

  result += content[i];
  i++;
}

fs.writeFileSync(filePath, result);
console.log('Done. Rewrote', filePath);
