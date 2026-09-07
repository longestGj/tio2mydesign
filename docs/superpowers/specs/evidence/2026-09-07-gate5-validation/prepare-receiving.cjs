// Controller-only construction. This script and mutation-map.json are not receiver input.
const fs=require('fs'), path=require('path'), crypto=require('crypto');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const base=__dirname, a=path.join(base,'candidate-a');
const required=['final-visual-report.md','self-check.md','G5-LAB-01_GATE5_TO_GATE6_HANDOFF.md'];
for(const file of required) if(!fs.existsSync(path.join(a,file))) throw Error('Wait for complete A: '+file);
const mode=process.argv[2];
if(!['b','c'].includes(mode)) throw Error('Pass b or c');
const dest=path.join(base,'receiving-'+mode);
if(fs.existsSync(dest)) throw Error('Preserve existing receiving revision');
const freeze=read(path.join(a,'freeze.json')), run=read(path.join(a,'exports/runtime.json'));
let sources=freeze.sourceIdentity.map(x=>({...x,path:'../candidate-a/'+x.path}));
let assets=run.assets.map(({path:p,state,viewportWidth,viewportHeight,dpr,physicalWidth,physicalHeight,sha256,bytes})=>({path:'../candidate-a/'+p,state,viewportWidth,viewportHeight,dpr,physicalWidth,physicalHeight,sha256,bytes}));
if(mode==='b') {
  sources[0].sha256='0'.repeat(64);
  assets=assets.filter(x=>!(x.viewportWidth===768 && x.state==='default-full'));
}
fs.mkdirSync(dest);
const catalog={exerciseId:'G5-LAB-01',revision:mode.toUpperCase(),visualCombination:freeze.freezeId,combinedSha256:freeze.combinedSha256,sourceIdentity:sources,assets,coverageClaim:'Complete full-page default and applicable states at 1440, 768 and 390 logical widths.',materialCompleteness:'COMPLETE_FOR_RECEIVING_EXERCISE',pageApproval:mode==='b'?'USER_APPROVED':'NOT_REQUESTED_SYNTHETIC_EXERCISE',actualGate6Authorization:mode==='b'?'AUTHORIZED':'NOT_AUTHORIZED',authority:'../../../2026-09-07-gate5-design-user-approval-v0.1.md',supportingFreeze:'../candidate-a/freeze.json',supportingRuntime:'../candidate-a/exports/runtime.json'};
fs.writeFileSync(path.join(dest,'catalog.json'),JSON.stringify(catalog,null,2)+'\n');
const text=`# G5-LAB-01 receiving entry ${mode.toUpperCase()}\n\nThis is the current receiving metadata revision for this isolated package. [Catalog](catalog.json) declares its delivered source identities, formal evidence pointers, completeness, page approval and actual Gate 6 authorization. The existing visual source and assets remain at candidate A. Assess the delivered revision against the raw brief and underlying authority.\n\n- [Raw fixed input](../input/brief.md)\n- [Visual method and full-page report](../candidate-a/final-visual-report.md)\n- [Actual author self-check](../candidate-a/self-check.md)\n- [Underlying visual handoff and limits](../candidate-a/G5-LAB-01_GATE5_TO_GATE6_HANDOFF.md)\n- [Frozen visual source and dependencies](../candidate-a/freeze.json)\n- [Recorded runtime and asset identities](../candidate-a/exports/runtime.json)\n- [Design decision](../../../2026-09-07-gate5-design-user-approval-v0.1.md)\n\nThe current catalog is the receiving manifest for this revision. The underlying A documents remain supporting visual evidence; they are not a replacement for verifying the current declared inventory and statuses. Report material completeness separately from page approval and actual Gate authorization. Independently reconcile conflicting declarations using the original input and decision.\n\nAll production dependencies and unverified scope remain as listed in the underlying handoff. No new rendering, source modification, real service, page registration or external business action is part of this receiving package.\n`;
fs.writeFileSync(path.join(dest,'entry.md'),text);
if(mode==='b') fs.writeFileSync(path.join(base,'mutation-map.json'),JSON.stringify({registeredAt:new Date().toISOString(),purpose:'Controlled receiver faults, not author defects or changes to approved method',baseFreeze:freeze.freezeId,mutations:[{id:'INJECT-01',field:'sourceIdentity[0].sha256',before:freeze.sourceIdentity[0].sha256,after:sources[0].sha256},{id:'INJECT-02',field:'assets',omitted:'exports/768-default-full.png',coverageClaimRetained:true},{id:'INJECT-03',field:'pageApproval / actualGate6Authorization',before:['NOT_REQUESTED_SYNTHETIC_EXERCISE','NOT_AUTHORIZED'],after:['USER_APPROVED','AUTHORIZED'],authorityActuallyDesignOnly:true}],aSourceIdentity:freeze.sourceIdentity,aRequiredDocs:required.map(p=>({path:p,sha256:sha(path.join(a,p))}))},null,2)+'\n');
console.log(JSON.stringify({created:dest,assets:assets.length,sources:sources.length}));
