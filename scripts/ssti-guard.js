const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '..', 'src');
const FORBIDDEN_PATTERNS = [
  { pattern: /\beval\s*\(/g, label: 'eval() — code injection risk' },
  { pattern: /\bnew\s+Function\s*\(/g, label: 'new Function() — code injection risk' },
  { pattern: /\bsetTimeout\s*\(\s*["'`]/g, label: 'setTimeout(string) — code injection risk' },
  { pattern: /\bsetInterval\s*\(\s*["'`]/g, label: 'setInterval(string) — code injection risk' },
  { pattern: /\.innerHTML\s*=/g, label: 'innerHTML assignment — XSS risk' },
  { pattern: /\bdocument\.write\s*\(/g, label: 'document.write() — XSS risk' },
];

let violations = 0;

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        walkDir(fullPath);
      }
    } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const lines = content.split('\n');

      for (const { pattern, label } of FORBIDDEN_PATTERNS) {
        const matches = content.match(pattern);
        if (matches) {
          for (const match of matches) {
            const lineIdx = lines.findIndex((l) => l.includes(match.replace(/\\/g, '').slice(0, 30)));
            console.log(`  ❌ ${path.relative(SRC_DIR, fullPath)}:${lineIdx + 1} — ${label}`);
            violations++;
          }
        }
      }
    }
  }
}

console.log('\n[ZERO DYNAMIC CONCAT] Scanning for SSTI / injection patterns...\n');
walkDir(SRC_DIR);

if (violations > 0) {
  console.log(`\n[ZERO DYNAMIC CONCAT] FAILED — ${violations} violation(s) found.\n`);
  process.exit(1);
} else {
  console.log('[ZERO DYNAMIC CONCAT] PASSED — no SSTI-vulnerable patterns detected.\n');
}
