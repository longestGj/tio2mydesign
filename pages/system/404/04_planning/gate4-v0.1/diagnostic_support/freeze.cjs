const fs=require('fs'),crypto=require('crypto');
const out='D:/23MySec/pages/system/404/04_planning/gate4-v0.1';
const id=p=>({path:p,bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')});
const save=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n');
const runtimePath=out+'/diagnostic_support/render/runtime.json';
const runtime=JSON.parse(fs.readFileSync(runtimePath));
if(runtime.status!=='PASS'||runtime.mode!=='PREFLIGHT')throw Error('hard preflight has not passed');
if(fs.existsSync(out+'/freeze-record.json'))throw Error('candidate already frozen');
const source=out+'/SYS-404_GATE4_COMPLETE_VISUAL_V0.1.html';
const input=JSON.parse(fs.readFileSync(out+'/input-index.json'));
for(const x of input.approved_inputs){if(id(x.path).sha256!==x.sha256)throw Error('input drift: '+x.path)}
for(const x of input.durable_dependencies){if(id(x.owner.path).sha256!==x.owner.sha256||id(x.frozen_copy.path).sha256!==x.frozen_copy.sha256)throw Error('dependency drift: '+x.owner.path)}
const preflight={status:'PASS_FOR_FORMAL_RENDER',page_id:'SYS-404',workset_id:'SYS-404-G4-WORKSET-20260908-01',dispatch:'G4-SYS404-EXEC-20260908-01',actual_author:'/root/sys404_gate4_execute',design_source:id(source),input_index:id(out+'/input-index.json'),visual_direction:id(out+'/visual-direction-check.json'),preflight_evidence:id(runtimePath),fixed_core:'exact BC-01–BC-08; Header→recovery→Footer; two Primary plus three Supporting; 1440/768/390; zero current navigation; fixed RFQ; shared Menu and Cookie Settings; 44x44; focus, contrast and overflow',page_risks:'short-page balance, action hierarchy, long body wrapping and 390 five-button stack',unresolved_required_findings:[],runtime_exclusions:['real HTTP 404','valid-route non-interception','live destination availability','production robots and sitemap','analytics sanitization','site-scope isolation'],recorded_at:new Date().toISOString()};
save(out+'/preflight-record.json',preflight);
const freeze={status:'COMPLETE_VISUAL_FROZEN',candidate_id:'SYS-404-G4-CANDIDATE-01',bundle_id:'SYS-404-G4-BUNDLE-20260908-01',page_id:'SYS-404',workset_id:'SYS-404-G4-WORKSET-20260908-01',dispatch:'G4-SYS404-EXEC-20260908-01',actual_author:'/root/sys404_gate4_execute',design_source:id(source),input_index:id(out+'/input-index.json'),visual_direction:id(out+'/visual-direction-check.json'),preflight_record:id(out+'/preflight-record.json'),durable_dependencies:input.durable_dependencies,render_conditions:{browser_family:'Chrome via Playwright',logical_viewports:[1440,768,390],dpr:1,color_scheme:'light',reduced_motion:'reduce',network:'blocked for http/https',font:'local frozen Inter variable'},frozen_at:new Date().toISOString(),formal_assets_created_before_freeze:0};
save(out+'/freeze-record.json',freeze);
const workset=JSON.parse(fs.readFileSync(out+'/workset.json'));workset.checkpoint_4B='COMPLETE_VISUAL_FROZEN';workset.preflight_record=id(out+'/preflight-record.json');workset.freeze_record=id(out+'/freeze-record.json');save(out+'/workset.json',workset);
console.log(JSON.stringify({preflight:id(out+'/preflight-record.json'),freeze:id(out+'/freeze-record.json')},null,2));
