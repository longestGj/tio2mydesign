const fs=require('fs'),path=require('path'),crypto=require('crypto');
const sharp=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const d='D:/23MySec/pages/products/chloride-process/04_planning/gate3-v0.1',out='D:/23MySec/pages/products/chloride-process/05_review/gate3-project-control-v0.1';
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
(async()=>{const r=JSON.parse(fs.readFileSync(path.join(d,'render-evidence.json'))),assets=[];
for(const e of r.exports){const m=await sharp(e.path).metadata();assets.push({path:e.path,bytes:fs.statSync(e.path).size,sha256:hash(e.path),width:m.width,height:m.height,matches:e.bytes===fs.statSync(e.path).size&&e.sha256===hash(e.path)&&e.physical.width===m.width&&e.physical.height===m.height});}
const bindings=[];function walk(o){if(!o||typeof o!=='object')return;if(o.path&&o.sha256){const p=o.path;if(!p.replaceAll('\\','/').startsWith('D:/23MySec/'))throw Error('Unexpected input path');bindings.push({path:p,sha256:hash(p),matches:o.sha256===hash(p)&&(o.bytes===undefined||fs.statSync(p).size===o.bytes)});}if(o.origin&&typeof o.origin==='string'&&o.originSha256)bindings.push({path:o.origin,sha256:hash(o.origin),matches:hash(o.origin)===o.originSha256});for(const v of Object.values(o))if(v&&typeof v==='object')walk(v);}
walk(JSON.parse(fs.readFileSync(path.join(d,'source-binding.json'))));
const inventoryPath=path.join(d,'asset-inventory.json');if(fs.existsSync(inventoryPath))walk(JSON.parse(fs.readFileSync(inventoryPath)));
const observations=JSON.parse(fs.readFileSync(path.join(out,'candidate-1/independent-observations.json')));
const result={sourceSha256:hash(r.source),sourceMatches:hash(r.source)===r.sourceSha256&&observations.every(e=>e.sourceSha256===hash(r.source)),assets,bindings,inventoryIncluded:fs.existsSync(inventoryPath)};
fs.writeFileSync(path.join(out,'audited-identity.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({sourceMatches:result.sourceMatches,assets:assets.length,assetFailures:assets.filter(x=>!x.matches),bindings:bindings.length,bindingFailures:bindings.filter(x=>!x.matches),inventoryIncluded:result.inventoryIncluded}));})();
