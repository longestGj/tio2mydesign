const fs=require('fs'),path=require('path'),crypto=require('crypto');
const sharp=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const d='D:/23MySec/pages/markets/poland/04_planning/gate3-v0.1',out='D:/23MySec/pages/markets/poland/05_review/gate3-project-control-v0.1';
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
(async()=>{const r=JSON.parse(fs.readFileSync(path.join(d,'render-evidence.json'))), rows=[];
for(const e of r.exports){const m=await sharp(e.path).metadata();rows.push({path:e.path,bytes:fs.statSync(e.path).size,sha256:hash(e.path),width:m.width,height:m.height,matches:e.bytes===fs.statSync(e.path).size&&e.sha256===hash(e.path)&&e.physical.width===m.width&&e.physical.height===m.height});}
const b=JSON.parse(fs.readFileSync(path.join(d,'source-binding.json')));
const binding=[b.copy,b.html,...b.sharedReuse].map(e=>({path:e.path,sha256:hash(e.path),matches:e.sha256===hash(e.path)}));
const deps=fs.readdirSync(path.join(d,'dependencies')).map(n=>({path:path.join(d,'dependencies',n),bytes:fs.statSync(path.join(d,'dependencies',n)).size,sha256:hash(path.join(d,'dependencies',n))}));
const rootObservations=JSON.parse(fs.readFileSync(path.join(out,'final/independent-observations.json')));
const final={sourceHash:hash(r.source),rendererSourceMatches:hash(r.source)===r.sourceSha256,independentSourceMatches:rootObservations.every(e=>e.sourceSha256===hash(r.source)),assets:rows,binding,dependencies:deps};
fs.writeFileSync(path.join(out,'audited-identity.json'),JSON.stringify(final,null,2));console.log(JSON.stringify({rendererSourceMatches:final.rendererSourceMatches,independentSourceMatches:final.independentSourceMatches,assets:rows.length,assetsMatch:rows.every(e=>e.matches),bindingsMatch:binding.every(e=>e.matches),dependencies:deps.length}));})();
