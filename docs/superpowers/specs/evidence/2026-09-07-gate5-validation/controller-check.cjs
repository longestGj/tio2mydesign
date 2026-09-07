const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.resolve(__dirname, '../../../../..');
const a = path.join(__dirname, 'candidate-a');
const read = p => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, ''));
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
const checks = [];
function identity(base, record, group) {
  const b = fs.readFileSync(path.resolve(base, record.path));
  checks.push({group, path:record.path, actualBytes:b.length, actualSha256:hash(b), pass:b.length === record.bytes && hash(b) === record.sha256});
}
const frozen = read(path.join(a,'freeze.json'));
for (const x of frozen.sourceIdentity) identity(a,x,'frozen source');
for (const x of frozen.inputIdentity) identity(root,x,'input');
for (const x of frozen.precursorIdentity) identity(root,x,'unchanged precursor');
for (const x of frozen.preflight) identity(a,x,'preflight');
identity(a,frozen.renderer,'renderer');
checks.push({group:'combined identity',pass:hash(JSON.stringify(frozen.sourceIdentity)) === frozen.combinedSha256});
for (const x of read(path.join(__dirname,'input/source-identities.json'))) {
  for (const field of ['origin','snapshot']) checks.push({group:'approved source and snapshot',path:x[field],pass:hash(fs.readFileSync(x[field])) === x.sha256});
}
const runtime = read(path.join(a,'exports/runtime.json'));
const assets = Object.values(runtime).find(x => Array.isArray(x) && x.length === 23 && x[0]?.physicalWidth);
if (!assets) throw Error('Formal asset inventory missing');
for (const x of assets) {
  identity(a,x,'formal asset');
  const b = fs.readFileSync(path.join(a,x.path));
  const width=b.readUInt32BE(16), height=b.readUInt32BE(20);
  checks.push({group:'PNG dimensions and viewport mapping',path:x.path,width,height,viewport:x.viewportWidth,dpr:x.dpr,pass:width === x.physicalWidth && height === x.physicalHeight && width === x.viewportWidth*x.dpr});
}
for(const width of [1440,768,390]) for(const state of ['default-full','media-absent-full','missing-record-error','beta-selected','beta-preview','faq2-expanded-focus','list-open-beta-focus']) checks.push({group:'formal coverage',width,state,pass:assets.some(x=>x.viewportWidth===width && x.state===state)});
for(const width of [768,390]) checks.push({group:'compact menu coverage',width,pass:assets.some(x=>x.viewportWidth===width && x.state==='menu-open')});
checks.push({group:'frozen/runtime identity agreement',pass:JSON.stringify(runtime.sourceIdentity)===JSON.stringify(frozen.sourceIdentity)});
const result = {checkedAt:new Date().toISOString(),scope:'Independent root byte/hash/dimension/coverage verification; no claim of full visual audit or independent rerun of author runtime.',checks,pass:checks.every(x=>x.pass),rootSpotChecks:[{asset:'1440-default-full.png',observation:'Opened overview: all sections, header and footer present; tall image was resized by viewer, so not used as a full readable text audit.'},{asset:'390-beta-preview.png',observation:'Opened preview region: long selected name wraps, question remains, preview focus and success feedback visible.'}]};
fs.writeFileSync(path.join(__dirname,'controller-check.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({checks:checks.length,pass:result.pass,failures:checks.filter(x=>!x.pass)},null,2));
