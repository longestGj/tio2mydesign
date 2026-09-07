const fs=require('fs'),path=require('path'),crypto=require('crypto');
const out=path.resolve(__dirname,'..').replaceAll('\\','/');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=p=>({path:p,relativePath:path.relative(out,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:sha(p)});
const freeze=JSON.parse(fs.readFileSync(out+'/approval_core/source-freeze.json')),exportInfo=JSON.parse(fs.readFileSync(out+'/approval_core/export-inventory.json'));
const result=JSON.parse(fs.readFileSync(out+'/diagnostic_support/formal-runtime-checks.json'));
const report=out+'/MARKET-EU-ES_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.1.md';
const selfcheck='D:/23MySec/pages/markets/spain/05_review/MARKET-EU-ES_GATE4_EXECUTION_SELF_CHECK_V0.1.md';
const observations={
 hero:'完整Header、面包屑、H1、Hero及主次CTA可见；Navy标题清楚，RFQ填充与Products描边区分；无文字截断。',
 applications:'完整两组批准段落和三个用途链接；Products位于两组之后。Desktop/Tablet等权两列，Mobile有细分隔并完整纵向排列；无卡片或推荐暗示。',
 documents:'完整已知Grade/文件类型申请说明，COO upon request限定与命题同段，Request Documents描边、Hub普通链接分级；无证书或库存暗示。',
 rfq:'四条准备项全部可读，未知Grade及公司/联系段完整；RFQ之后仅一次人工后续；两个EU入口为辅助文字且自然换行。',
 footer:'完整反白Logo、品牌描述、Explore/Information、Procurement、法律区和copyright可见；窄屏重排保持，无当前页徽章。',
 'document-hub-hover':'实际Hub hover呈现浅品牌底和加粗下划线，标签与周边说明完整；截图后:hover仍为true。',
 'primary-hover':'实际首屏RFQ hover保持实心Teal/白字，增加下划线；Products层级保持；截图后:hover仍为true。',
 'application-focus':'Tablet Masterbatch链接有完整Teal外侧焦点环；前置用途句与同列链接关系清楚，另一应用组完整；截图后:focus-visible仍为true。',
 'related-hover':'Mobile EU Trade Update hover轻浅底可见，前方人工后续与相邻EU Overview保持辅助关系；截图后:hover仍为true。',
 'document-hub-focus':'Mobile Hub完整Teal外环，标签没有被遮住；同区域文件说明、COO与请求动作完整；截图后:focus-visible仍为true。',
 'footer-focus':'Mobile Cookie Settings白色外环在Deep Navy底上清楚；法律链接与完整Footer可读；截图后:focus-visible仍为true。',
 'cookie-focus':'Cookie完整标题、共享说明和两个操作可读；Close真实Teal外环和白色表面清楚，Mobile两操作全宽；背景遮罩不作为前景文字对比面；截图后focus仍成立。',
 'menu-focus':'Menu展开并显示Close；Markets同时有当前标记和实际白色内侧焦点框；全部菜单项与底部RFQ可见，未用伪状态或CURRENT文字；截图后focus仍成立。'
};
const checks=[...freeze.dependencies,...freeze.inputs,...exportInfo.assets].map(x=>({path:x.path,bytesMatch:fs.statSync(x.path).size===x.bytes,sha256Match:sha(x.path)===x.sha256}));
if(checks.some(x=>!x.bytesMatch||!x.sha256Match)||result.errors.length)throw Error('Frozen combination mismatch');
const readback=exportInfo.assets.map(x=>{let role=path.basename(x.path).replace(/^\d+-/,'').replace('.png','');if(!observations[role])throw Error('No actual visual observation for '+role);let bytes=fs.readFileSync(x.path);if(bytes.readUInt32BE(16)!==x.pixelWidth||bytes.readUInt32BE(20)!==x.pixelHeight)throw Error('PNG dimensions mismatch');return{...id(x.path),evidenceType:'STATIC_VISUAL',method:'Individually opened using tools.view_image(detail=original) after formal export; full region inspected; all PNG heights <=1052px',observation:observations[role],logicalViewport:x.logicalViewport,pixelWidth:x.pixelWidth,pixelHeight:x.pixelHeight,sourceFreeze:freeze.freezeId};});
fs.writeFileSync(out+'/diagnostic_support/visual-readback.json',JSON.stringify({date:new Date().toISOString(),observer:'gate4_design / AUTHOR',sourceFreeze:freeze.freezeId,formal:readback,preflight:{count:4,eachActuallyOpened:true,observations:'approval_core/preflight-record.json'},note:'Static observations plus separately recorded actual runtime. No independent PASS or user approval inferred.'},null,2));
fs.writeFileSync(out+'/diagnostic_support/findings-and-tool-events.json',JSON.stringify({date:new Date().toISOString(),pageFindings:[],candidateRevisionsAfterFreeze:0,toolEvents:[{id:'ES-G4-TOOL-01',type:'READ_PATH_LOOKUP',observed:'Attempted prior Chloride source-freeze at package root; file not found.',resolution:'Located real path approval_core/source-freeze.json with rg and read successfully.',impact:'No Spain candidate or evidence modified; no render failure.'}],sharedObservations:[{id:'ES-G4-SHARED-OBS-01',location:'Menu open -> desktop breakpoint',observed:'Menu closes and restores background; activeElement becomes BODY.',disposition:'Inherited Consumer V0.2; visible Desktop focus placement not claimed. Shared owner follow-up; no page behavior fork.'}],historicalExperience:'Poland IR01 retained in original page; this Spain run tests each actual hover background. Earlier Spain G3 failures remain untouched upstream.',rejectedFormalAssets:[],preflightErrors:0,formalErrors:0},null,2));
const reportText=fs.readFileSync(report,'utf8'),selfText=fs.readFileSync(selfcheck,'utf8');
if(!reportText.includes(freeze.freezeId)||!selfText.includes(freeze.freezeId))throw Error('Report binding missing');
fs.writeFileSync(out+'/diagnostic_support/final-receipt.json',JSON.stringify({date:new Date().toISOString(),status:'AUTHOR_DELIVERY_COMPLETE / DRAFT_FOR_PROJECT_CONTROL_REVIEW',sourceFreeze:freeze.freezeId,freeze:id(out+'/approval_core/source-freeze.json'),exportInventory:id(out+'/approval_core/export-inventory.json'),reportsReadBack:[id(report),id(selfcheck)],identityChecks:checks,formalAssets:exportInfo.assets.length,formalPngsOpened:readback.length,preflightPngsOpened:4,scope:'All formal representative regions and specified states read back; independent review pending. No Gate5 or production.',immutableCombination:true},null,2));
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(dir+'/'+e.name):[dir+'/'+e.name]);}
const inventory=out+'/approval_core/asset-inventory.json';const files=walk(out).filter(p=>p!==inventory).map(p=>({...id(p),role:p.includes('/approval_core/')?'approval_core':p.includes('/diagnostic_support/')?'diagnostic_support':p.includes('/dependencies/')?'runtime_dependency':'source_or_direction'}));
fs.writeFileSync(inventory,JSON.stringify({date:new Date().toISOString(),pageId:'MARKET-EU-ES',freezeId:freeze.freezeId,status:'DRAFT_FOR_PROJECT_CONTROL_REVIEW',source:freeze.dependencies[0],freeze:id(out+'/approval_core/source-freeze.json'),exportInventory:id(out+'/approval_core/export-inventory.json'),selfCheck:id(selfcheck),files,note:'Inventory excludes its own bytes to avoid recursive hash. Source, dependencies and 28 formal PNGs unchanged after freeze/export. Author reports are not independent approval.'},null,2));
const reread=JSON.parse(fs.readFileSync(inventory));if(reread.files.some(f=>sha(f.path)!==f.sha256))throw Error('Final inventory drift');console.log(JSON.stringify({inventory:id(inventory),source:freeze.dependencies[0],freeze:id(out+'/approval_core/source-freeze.json'),exports:id(out+'/approval_core/export-inventory.json'),report:id(report),selfCheck:id(selfcheck),files:reread.files.length,formalPngs:readback.length,allPngs:files.filter(x=>x.path.endsWith('.png')).length,identityChecks:checks.length}));
