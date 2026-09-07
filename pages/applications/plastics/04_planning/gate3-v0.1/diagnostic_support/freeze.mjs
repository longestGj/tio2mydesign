import fs from 'node:fs';
import crypto from 'node:crypto';
const out='D:/23MySec/pages/applications/plastics/04_planning/gate3-v0.1';
const source=`${out}/APP-PLAS_GATE3_WIREFRAME_V0.1.html`;
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=p=>({path:p,bytes:fs.statSync(p).size,sha256:sha(p)});
const preflight=JSON.parse(fs.readFileSync(`${out}/preflight-record.json`,'utf8'));
if(preflight.status!=='PASS_FOR_FORMAL_RENDER')throw new Error('Preflight not passed');
if(preflight.candidate.sha256!==sha(source))throw new Error('Source differs from preflight candidate');
const freeze={pageId:'APP-PLAS',freezeId:'APP-PLAS-G3-FREEZE-001',status:'FROZEN_CANDIDATE_FOR_PROJECT_CONTROL_REVIEW',frozenAt:new Date().toISOString(),source:id(source),preflightRecord:id(`${out}/preflight-record.json`),inputBinding:id(`${out}/input-binding.json`),approvedInputs:preflight.approvedInputs,sharedConsumer:preflight.sharedConsumer,formalExportStatus:'AUTHORIZED_FROM_THIS_FREEZE_ONLY'};
fs.writeFileSync(`${out}/freeze-record.json`,`${JSON.stringify(freeze,null,2)}\n`);
console.log(JSON.stringify(freeze,null,2));

