const sharp = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const output = path.join(__dirname, 'readable-segments');
fs.mkdirSync(output, { recursive: true });

const plans = [
  { file: 'full-page-1440.png', height: 1100, starts: [0, 850, 1287] },
  { file: 'full-page-768.png', height: 1100, starts: [0, 850, 1754] },
  { file: 'full-page-390-logical-at2x.png', height: 1800, starts: [0, 1500, 3000, 4500, 5820] }
];

const hash = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

(async () => {
  const records = [];
  for (const plan of plans) {
    const input = path.join(root, 'approval_core', plan.file);
    const metadata = await sharp(input).metadata();
    for (let index = 0; index < plan.starts.length; index += 1) {
      const top = plan.starts[index];
      const height = Math.min(plan.height, metadata.height - top);
      const target = path.join(output, `${path.parse(plan.file).name}-segment-${index + 1}.png`);
      await sharp(input).extract({ left: 0, top, width: metadata.width, height }).png().toFile(target);
      records.push({
        source: input.replaceAll('\\', '/'),
        path: target.replaceAll('\\', '/'),
        sourceTop: top,
        width: metadata.width,
        height,
        bytes: fs.statSync(target).size,
        sha256: hash(target),
        role: 'DIAGNOSTIC_SUPPORT_READABLE_SEGMENT'
      });
    }
  }
  fs.writeFileSync(path.join(output, 'segment-inventory.json'), JSON.stringify({ generatedAt: new Date().toISOString(), records }, null, 2));
  console.log(JSON.stringify({ segments: records.length, output }, null, 2));
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
