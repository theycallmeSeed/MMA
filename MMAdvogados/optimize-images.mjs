import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'images');

async function processImages() {
  const largeFiles = [
    { name: 'legal-team.webp', width: 1200 },
    { name: 'milagrosa-portrait.webp', width: 800 },
    { name: 'office-3.webp', width: 1200 }
  ];

  for (const file of largeFiles) {
    const filePath = path.join(imagesDir, file.name);
    if (fs.existsSync(filePath)) {
      const buffer = fs.readFileSync(filePath);
      await sharp(buffer)
        .resize({ width: file.width, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(filePath);
      console.log(`Optimized ${file.name}`);
    }
  }
}

processImages().catch(console.error);