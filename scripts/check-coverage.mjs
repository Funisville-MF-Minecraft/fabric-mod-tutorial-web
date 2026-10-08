import fs from 'node:fs';
import path from 'node:path';

const coveragePath = path.join(process.cwd(), 'COVERAGE.md');

try {
  const text = fs.readFileSync(coveragePath, 'utf8');

  if (!text.includes('# Coverage manifest')) {
    throw new Error('Coverage manifest is missing the required heading.');
  }

  const rows = [...text.matchAll(/^\|\s*[^|]+\s*\|\s*[^|]+\s*\|\s*[^|]+\s*\|\s*[^|]+\s*\|\s*[^|]+\s*\|$/gm)];

  if (rows.length < 10) {
    throw new Error('Coverage manifest appears incomplete.');
  }

  console.log(`Coverage manifest is present with ${rows.length} tracked rows.`);
} catch (error) {
  console.error(error.message || error);
  process.exit(1);
}
