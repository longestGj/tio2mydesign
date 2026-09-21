// Additive visual projection. Frozen G3 HTML is a content/behavior input, never modified.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const old=path.resolve(__dirname,'../d32-gate3-v0.1');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
if(sha(path.join(old,'RES-000_D32_GATE3.html'))!=='b8ba906be4fca24c9af380da4c69d0d41295b9b9520317549f04c669637f208b')throw Error('G3 source drift');
if(fs.existsSync(path.join(__dirname,'RES-000_D32_GATE4_FREEZE.json')))throw Error('Frozen workset; create additive revision');
for(const [from,to] of [['RES-000_D32_GATE3.html','RES-000_D32_GATE4.html'],['RES-000_D32_H2_LOCAL_SIMULATION.html','RES-000_D32_H2_LOCAL_SIMULATION.html'],['RES-000_D32_H4_LOCAL_SIMULATION.html','RES-000_D32_H4_LOCAL_SIMULATION.html']]){
 const source=fs.readFileSync(path.join(old,from),'utf8');
 fs.writeFileSync(path.join(__dirname,to),source.replace('href="RES-000_D32_GATE3.css"','href="RES-000_D32_GATE4.css"'));
}
console.log('Generated additive G4 H0 / labeled H2 / labeled H4; only stylesheet reference changes.');
