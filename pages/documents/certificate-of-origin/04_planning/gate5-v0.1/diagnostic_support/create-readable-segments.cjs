const fs = require('fs');
const path = require('path');
const sharp = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');

const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'approval_core');
const outputDir = path.join(__dirname, 'segments');
fs.mkdirSync(outputDir, { recursive: true });

const plans = [
  { file: '1440-full-page.png', prefix: '1440', segmentHeight: 1000, overlap: 100 },
  { file: '768-full-page.png', prefix: '768', segmentHeight: 1000, overlap: 100 },
  { file: '390-full-page@2x.png', prefix: '390@2x', segmentHeight: 1900, overlap: 140 },
];

async function main() {
  const manifest = [];
  for (const plan of plans) {
    const input = path.join(sourceDir, plan.file);
    const metadata = await sharp(input).metadata();
    const { width, height } = metadata;
    let top = 0;
    let index = 1;
    while (top < height) {
      const sliceHeight = Math.min(plan.segmentHeight, height - top);
      const outName = `${plan.prefix}-segment-${String(index).padStart(2, '0')}-y${top}.png`;
      const output = path.join(outputDir, outName);
      await sharp(input).extract({ left: 0, top, width, height: sliceHeight }).png().toFile(output);
      manifest.push({ source: plan.file, output: outName, width, top, height: sliceHeight });
      if (top + sliceHeight >= height) break;
      top += plan.segmentHeight - plan.overlap;
      index += 1;
    }
  }
  fs.writeFileSync(path.join(outputDir, 'segment-inventory.json'), `${JSON.stringify({ generatedAt: new Date().toISOString(), segments: manifest }, null, 2)}\n`);
  console.log(JSON.stringify({ count: manifest.length, segments: manifest }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
