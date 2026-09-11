const fs = require('node:fs');
const path = require('node:path');
const {createRequire} = require('node:module');
const requireD16 = createRequire('D:\\16Wordpress_nextjs\\.worktrees\\home-001-app-align-gate8\\package.json');
const sharp = requireD16('sharp');

const oldRoot = 'D:\\23MySec\\pages\\home\\07_qa\\evidence-applications-aligned-v1.0';
const newRoot = __dirname;
const widths = [1440, 1024, 768, 390, 320];

(async () => {
  const results = {};
  for (const width of widths) {
    const oldPath = path.join(oldRoot, `home-001-g9-${width}.png`);
    const newPath = path.join(newRoot, `home-001-return-g9-${width}.png`);
    const oldImage = await sharp(oldPath).ensureAlpha().raw().toBuffer({resolveWithObject: true});
    const newImage = await sharp(newPath).ensureAlpha().raw().toBuffer({resolveWithObject: true});
    const {width: imageWidth, height, channels} = oldImage.info;
    if (newImage.info.width !== imageWidth || newImage.info.height !== height || newImage.info.channels !== channels) {
      throw new Error(`Image geometry mismatch at ${width}`);
    }
    let changedPixels = 0;
    let minX = imageWidth;
    let minY = height;
    let maxX = -1;
    let maxY = -1;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < imageWidth; x += 1) {
        const offset = (y * imageWidth + x) * channels;
        let different = false;
        for (let c = 0; c < channels; c += 1) {
          if (oldImage.data[offset + c] !== newImage.data[offset + c]) {
            different = true;
            break;
          }
        }
        if (different) {
          changedPixels += 1;
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }
    }
    results[String(width)] = {
      image: {width: imageWidth, height},
      changedPixels,
      changedBoundingBox: changedPixels ? {minX, minY, maxX, maxY, width: maxX - minX + 1, height: maxY - minY + 1} : null,
    };
  }
  fs.writeFileSync(path.join(newRoot, 'home-001-return-pixel-diff-v1.0.json'), `${JSON.stringify(results, null, 2)}\n`);
})().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exitCode = 1;
});
