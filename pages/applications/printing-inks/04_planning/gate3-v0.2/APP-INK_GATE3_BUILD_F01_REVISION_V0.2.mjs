import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const prior = 'D:/23MySec/pages/applications/printing-inks/04_planning/gate3-v0.1/APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.1.html';
const output = 'D:/23MySec/pages/applications/printing-inks/04_planning/gate3-v0.2/APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html';
const priorExpected = '8d67c9d3ec4b971c9ff5a91a320a6901df385d46ab4ab26812ad0880322492ef';
const hash = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const priorBuffer = fs.readFileSync(prior);
if (hash(priorBuffer) !== priorExpected) throw new Error('Historical V0.1 frozen source identity changed');
const priorHtml = priorBuffer.toString('utf8');
const focusRule = 'main a:focus-visible{outline:3px solid #008078;outline-offset:3px}\n';
if (priorHtml.includes(focusRule.trim())) throw new Error('Historical source already contains successor focus rule');
const revised = priorHtml.replace('</style>', `${focusRule}</style>`);
if (revised === priorHtml) throw new Error('Style insertion point not found');
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, revised);
console.log(JSON.stringify({ prior: { path: prior, bytes: priorBuffer.length, sha256: hash(priorBuffer) }, output: { path: output, bytes: Buffer.byteLength(revised), sha256: hash(Buffer.from(revised)) }, change: focusRule.trim() }, null, 2));
