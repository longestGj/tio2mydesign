const fs=require('fs'),path=require('path'),crypto=require('crypto');
const page='D:/23MySec/pages/applications/printing-inks',review=page+'/05_review',base=page+'/04_planning/gate3-v0.2';
const hash=b=>crypto.createHash('sha256').update(b).digest('hex'),json=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const items=new Map();
for(const row of json(review+'/APP-INK_GATE3_INDEPENDENT_OBSERVATIONS_V0.2.json').identity)items.set(row.path,{path:row.path,bytes:row.actualBytes,sha256:row.actualSha256,baseline:'R1 independent observation'});
function collect(o){if(!o||typeof o!=='object')return;if(o.path&&o.bytes!==undefined&&o.sha256&&!items.has(o.path))items.set(o.path,{...o,baseline:'V0.3 delivery identity'});Object.values(o).forEach(collect)}
collect(json(base+'/APP-INK_GATE3_ASSET_INVENTORY_V0.3.json'));
items.set(review+'/APP-INK_GATE3_INDEPENDENT_OBSERVATIONS_V0.2.json',{path:review+'/APP-INK_GATE3_INDEPENDENT_OBSERVATIONS_V0.2.json',bytes:68745,sha256:'99836f2f66f3336b411adad2b8892d6a938541e62e4191e99b618caa94cc1da3',baseline:'R1 report'});
const identities=[...items.values()].map(o=>{const b=fs.readFileSync(o.path);return {...o,actualBytes:b.length,actualSha256:hash(b),match:b.length===o.bytes&&hash(b)===o.sha256}});
const links=[];
for(const p of [review+'/APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.3.md',review+'/APP-INK_GATE3_REVISION_RESPONSE_V0.3.md',base+'/APP-INK_GATE3_CANDIDATE_MANIFEST_V0.3.md'])for(const m of fs.readFileSync(p,'utf8').matchAll(/\]\(([^)]+)\)/g))links.push({document:p,target:m[1],exists:fs.existsSync(path.resolve(path.dirname(p),m[1]))});
const inventoryPath=base+'/APP-INK_GATE3_ASSET_INVENTORY_V0.3.json',ib=fs.readFileSync(inventoryPath);
const result={reviewId:'APP-INK-G3-PCR-01-R2',role:'diagnostic_support',scope:'DOCUMENT_ONLY_F03_AND_IDENTITIES',createdAt:new Date().toISOString(),identities,inventory:{path:inventoryPath,bytes:ib.length,sha256:hash(ib)},links,summary:{identityCount:identities.length,identityFailures:identities.filter(x=>!x.match).length,linkCount:links.length,brokenLinks:links.filter(x=>!x.exists).length},rerendered:false};
fs.writeFileSync(review+'/APP-INK_GATE3_F03_DOCUMENT_OBSERVATIONS_V0.3.json',JSON.stringify(result,null,2));
console.log(JSON.stringify({summary:result.summary,inventory:result.inventory,successors:identities.filter(x=>x.path.includes('_V0.3.'))},null,2));
