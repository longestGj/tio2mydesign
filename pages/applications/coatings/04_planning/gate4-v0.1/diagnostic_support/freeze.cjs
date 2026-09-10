const fs=require('fs');
const crypto=require('crypto');
const out='D:/23MySec/pages/applications/coatings/04_planning/gate4-v0.1';
const norm=p=>p.replace(/\\/g,'/');
const id=p=>{const b=fs.readFileSync(p);return{path:norm(p),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex')}};
const inputIndex=JSON.parse(fs.readFileSync(out+'/input_index.json','utf8'));
const dependencies=[
 out+'/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html',out+'/visual-direction.css',
 out+'/dependencies/Inter-OFL.txt',out+'/dependencies/Inter-Variable.ttf',
 out+'/dependencies/tio2-malaysia-primary-horizontal-v0.1.svg',out+'/dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg'
].map(id);
const bound={
 input_index:id(out+'/input_index.json'),
 direction_check:id(out+'/4A-direction-check.json'),
 preflight:id(out+'/approval_core/preflight-record.json'),
 readback:id(out+'/diagnostic_support/visual-readback.json'),
 source_derivation:id(out+'/diagnostic_support/source-derivation.json')
};
const freeze={freeze_id:'COAT-G4-COMPLETE-V01-F01',workset_id:'COAT-G4-COMPLETE-V01',status:'PASS_FOR_FORMAL_RENDER / SOURCE_FROZEN',at:new Date().toISOString(),inputs:inputIndex.inputs,dependencies,bound,render:{chrome:'152.0.7977.82',node:process.version,playwright:'1.62.1',headless:true,externalRequestsAllowed:false},readback:{actualOpened:'Three preflight complete-page overviews and all 34 continuous native-width readable segments at 1440/768/390; final 4A eight samples.','notEquivalent':'Author static readback does not replace runtime assertions or independent review.'}};
fs.writeFileSync(out+'/approval_core/source-freeze.json',JSON.stringify(freeze,null,2)+'\n');
const workset=JSON.parse(fs.readFileSync(out+'/workset.json','utf8'));workset.status='COMPLETE_VISUAL_FROZEN / FORMAL_RENDER_AUTHORIZED';workset.freeze=norm(out+'/approval_core/source-freeze.json');fs.writeFileSync(out+'/workset.json',JSON.stringify(workset,null,2)+'\n');
console.log(JSON.stringify({freeze:id(out+'/approval_core/source-freeze.json'),dependencies:dependencies.length,inputs:inputIndex.inputs.length,bound:Object.keys(bound).length},null,2));
