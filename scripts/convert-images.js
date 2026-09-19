// Script to convert extracted fleet images to WebP and generate favicon
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\anshu\\.gemini\\antigravity\\brain\\de2903db-4ae7-4b54-acf3-a4e695a68a20\\scratch\\extracted_images';
const dstDir = path.join(__dirname, '..', 'public', 'images', 'fleet');

const images = [
  'hydra-crane',
  'new-generation-crane',
  'forklift',
  'recovery-van',
  'crawler-crane',
  'backhoe-loader',
  'soil-compactor',
];

async function convert() {
  for (const name of images) {
    // Find the source file (could be .jpeg or .png)
    const candidates = fs.readdirSync(srcDir).filter(f => f.startsWith(name));
    if (candidates.length === 0) {
      console.error(`No source found for ${name}`);
      continue;
    }
    const srcFile = path.join(srcDir, candidates[0]);
    const dstFile = path.join(dstDir, `${name}.webp`);

    await sharp(srcFile)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dstFile);

    const stats = fs.statSync(dstFile);
    console.log(`${name}.webp — ${Math.round(stats.size / 1024)}KB`);
  }

  // Generate favicon: a simple hazard-amber crane icon (SVG rendered to ICO)
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="8" fill="#1E2124"/>
    <text x="32" y="46" font-family="Arial,sans-serif" font-weight="bold" font-size="36" fill="#D98C15" text-anchor="middle">D</text>
  </svg>`;
  
  // Write SVG favicon
  const faviconSvgPath = path.join(__dirname, '..', 'public', 'icon.svg');
  fs.writeFileSync(faviconSvgPath, faviconSvg);
  
  // Generate PNG favicons
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'favicon.ico'));
  
  await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'apple-touch-icon.png'));

  console.log('Favicon generated.');
}

convert().catch(console.error);
