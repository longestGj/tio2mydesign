import fs from 'node:fs';
import crypto from 'node:crypto';
const out='D:/23MySec/pages/applications/plastics/04_planning/gate3-v0.1';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const freeze=JSON.parse(fs.readFileSync(`${out}/freeze-record.json`,'utf8'));
const inventory=JSON.parse(fs.readFileSync(`${out}/asset-inventory.json`,'utf8'));
const failures=[];
if(sha(freeze.source.path)!==freeze.source.sha256)failures.push('frozen source hash mismatch');
for(const a of inventory.approvalCore){if(!fs.existsSync(a.path))failures.push(`missing ${a.path}`);else if(sha(a.path)!==a.sha256)failures.push(`hash mismatch ${a.path}`)}
const required=['APP-PLAS_G3_1440-full.png','APP-PLAS_G3_768-full.png','APP-PLAS_G3_390-full.png','APP-PLAS_G3_768-menu.png','APP-PLAS_G3_390-menu.png','APP-PLAS_G3_390-grade-paths.png'];
for(const name of required){if(!inventory.approvalCore.some(x=>x.path.endsWith(name)))failures.push(`inventory missing ${name}`)}
const result={checkedAt:new Date().toISOString(),freezeId:freeze.freezeId,source:freeze.source,assetCount:inventory.approvalCore.length,failures,status:failures.length?'FAIL':'PASS'};
fs.writeFileSync(`${out}/diagnostic_support/final-integrity.json`,`${JSON.stringify(result,null,2)}\n`);
console.log(JSON.stringify(result,null,2));if(failures.length)process.exit(1);

