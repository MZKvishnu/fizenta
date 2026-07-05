import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const input = path.resolve(__dirname, '..', 'public', 'fixentalogo.jpeg');
const outDir = path.resolve(__dirname, '..', 'public', 'favicons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const sizes = [16, 32, 180];

async function run() {
  for (const s of sizes) {
    const out = path.join(outDir, `favicon-${s}x${s}.png`);
    await sharp(input).resize(s, s, { fit: 'cover' }).png().toFile(out);
    console.log('Written', out);
  }
  console.log('Done');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
