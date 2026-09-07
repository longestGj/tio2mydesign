const fs=require('fs'),path=require('path');
const out=path.resolve(__dirname,'..').replaceAll('\\','/');
// Reuse only already exercised measurement/capture tooling, never Spain HTML,
// CSS, content, context assertions or runtime data.
const previous=fs.readFileSync('D:/23MySec/pages/markets/spain/04_planning/gate4-v0.1/diagnostic_support/verify-render.cjs','utf8');
let helpers=previous.slice(previous.indexOf('function check('),previous.indexOf('(async()=>'));
helpers=helpers.replaceAll('ES-G4-V01-SOURCE-01','COO-G4-V01-SOURCE-01').replace('selector,fromTop=false','selector,endSelector,fromTop=false').replace('let bottom=Math.ceil(r.y+r.height)+8;','let end=endSelector?await page.locator(endSelector).boundingBox():r;let bottom=Math.ceil(end.y+end.height)+8;');
const prefix=`const fs=require('fs'),path=require('path'),crypto=require('crypto'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out=path.resolve(__dirname,'..').replaceAll('\\\\','/'),root='D:/23MySec',mode=process.argv[2]||'preflight';
const target=out+'/DOC-COO_GATE4_VISUAL_SAMPLES_V0.1.html',g3=root+'/pages/documents/certificate-of-origin/04_planning/gate3-v0.1/DOC-COO_GATE3_RESPONSIVE_WIREFRAME_V0.1.html';
const evidence=mode==='formal'?out+'/approval_core':out+'/diagnostic_support/preflight';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=p=>({path:p,relativePath:path.relative(out,p).replaceAll('\\\\','/'),bytes:fs.statSync(p).size,sha256:sha(p)});
const records=[],assets=[],errors=[],norm=s=>s.replace(/\\s+/g,' ').replace(/\\s+([.,;:])/g,'$1').trim();
`;
fs.writeFileSync(__dirname+'/verify-render.cjs',prefix+helpers+fs.readFileSync(__dirname+'/page-verification-body.cjs.txt','utf8'));
console.log('Assembled DOC-COO verifier; helper lineage only.');
