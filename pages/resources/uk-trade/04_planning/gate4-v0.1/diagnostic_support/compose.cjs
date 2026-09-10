const fs=require('fs'),crypto=require('crypto');
const root='D:/23MySec',page=root+'/pages/resources/uk-trade',out=page+'/04_planning/gate4-v0.1';
const id=p=>({path:p,bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')});
const old=page+'/04_planning/gate3-v0.1/RES-TRADE-UK_GATE3_WIREFRAME_V0.1.html';
if(id(old).sha256!=='f924656e6990458a50c5536ad89d055048602fde9ae1240e4381edd931692398')throw Error('G3 identity');
const css=`
/* Gate 4 page-body visual application. Shared owner styles and behavior remain exact. */
body{color:#334155}main{padding-top:40px;padding-bottom:72px}
main .module{padding:44px 0;border-color:#D9E2EC}
main h1,main h2,main h3{color:#062B5B}
main h1{font-size:52px;line-height:1.13;letter-spacing:-1.5px;font-weight:700}
main h2{font-size:36px;line-height:1.2;font-weight:700;margin-bottom:26px}
main h3{font-size:26px;font-weight:600}
main .module:first-child{padding:32px;background:#F5F8FB;border-top:4px solid #062B5B;border-bottom:1px solid #D9E2EC}
main .module-1 p:first-of-type{font-size:18px;line-height:1.65}
main .module-1 p:nth-of-type(2){border-left:3px solid #062B5B;padding-left:18px}
main .module-1 p:nth-of-type(4),main .module-1 p:nth-of-type(6){font-size:16px}
main .module-1 p:last-child{margin-bottom:0}
main .module-1 p:nth-of-type(3) a,main .module-7 p:first-of-type a{border-radius:6px;font-size:16px}
main .module-1 p:nth-of-type(5) a{border-radius:6px;color:#062B5B;border-color:#062B5B;background:#fff;font-size:16px}
main th{background:#062B5B;color:#fff;font-weight:600}
main td{border-color:#D9E2EC}main tbody tr:nth-child(even){background:#F5F8FB}
main td:first-child{font-weight:600;color:#062B5B}
main code{font-variant-numeric:tabular-nums;color:#062B5B;font-weight:500}
main .module-3 p:nth-of-type(3){padding:20px;background:#F5F8FB;border:1px solid #D9E2EC;line-height:1.9}
main .module-4 p:first-of-type{padding:20px;border-left:3px solid #062B5B;background:#F5F8FB}
main li::marker{color:#062B5B}
main a:hover{text-decoration-thickness:2px}main .module-1 p:nth-of-type(3) a:hover,main .module-7 p:first-of-type a:hover{background:#062B5B;border-color:#062B5B}
main .module-7 h3{padding-top:28px;border-top:1px solid #D9E2EC}
main .module-7>p:last-child{padding:20px;background:#F5F8FB;margin-bottom:0}
@media(max-width:1100px){main{padding-top:28px;padding-bottom:56px}main .module{padding:36px 0}main h1{font-size:40px;letter-spacing:-1px}main h2{font-size:30px}main .module:first-child{padding:28px}}
@media(max-width:600px){main{padding-top:20px;padding-bottom:40px}main h1{font-size:34px;letter-spacing:-.8px}main h2{font-size:28px}main h3{font-size:24px}main .module{padding:32px 0}main .module:first-child{padding:20px}main .module-1 p:first-of-type{font-size:17px}main .module-1 p:nth-of-type(3) a{padding:12px 10px}main td:first-child{font-weight:600}main tbody tr{border-top:3px solid #062B5B;border-radius:0 0 8px 8px;background:#fff}main tbody tr:nth-child(even){background:#F5F8FB}main td::before{color:#334155}main .module-3 p:nth-of-type(3){padding:16px}main .module-4 p:first-of-type{padding:16px}}
`;
const source=out+'/RES-TRADE-UK_GATE4_COMPLETE_VISUAL_V0.1.html';fs.writeFileSync(source,fs.readFileSync(old,'utf8').replace('</style>',css+'</style>'));
const inputs=JSON.parse(fs.readFileSync(page+'/04_planning/gate3-v0.1/input-binding.json','utf8'));
const names=['AGENTS.md','PROJECT_CONTEXT.md','02_DIRECTORY_GUIDE.md','docs/architecture/GATE_WORKFLOW_V3.2.md','docs/architecture/PAGE_GATE_1_4_STANDARD_V2.2.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.4.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.7.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.2.md','agents/gate4-complete-visual/agent.md','skills/brand-applied-visual-design/SKILL.md','skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/gate4-self-check.md','skills/layout-interaction-verification/references/core-risk-model.md','docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md','docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md','docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md','docs/architecture/GATE2_FIVE_RESOURCE_PAGE_USER_APPROVAL_AND_CLOSURE_V1.0.md','docs/page-playbooks/RESOURCE_PLAYBOOK_V0.1.md','docs/page-briefs/RES-TRADE-UK_UK_TITANIUM_DIOXIDE_TRADE_UPDATE_BRIEF_V0.1.md','docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv','brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md',...Object.values(JSON.parse(fs.readFileSync(root+'/docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json','utf8')).authority).map(p=>p.slice(root.length+1))];
const record={workset_id:'RES-TRADE-UK-G4-WORKSET-01',page_id:'RES-TRADE-UK',actual_author:'/root/gate4_uk_trade_execute',authorization:{control:'G4-REMAINING-8-EXEC-01',path:root+'/docs/architecture/GATE4_REMAINING_EIGHT_EXECUTION_CONTROL_V1.0.md',stop:'GATE4_EXECUTION_COMPLETE_FROZEN / READY_FOR_GATE5_REVIEW',note:'Specific latest user instruction controls independent Gate5 routing; no self-approval, Gate6 or publication.'},authority_manifest:id(page+'/RES-TRADE-UK_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md'),approved_inputs:inputs.approvedInputs.map(x=>{const current=id(x.path);if(current.sha256!==x.sha256)throw Error(x.role);return {...current,role:x.role}}),gate3:[old,page+'/04_planning/gate3-v0.1/freeze-record.json',page+'/04_planning/gate3-v0.1/asset-inventory.json',page+'/05_review/RES-TRADE-UK_GATE3_PREAUTHORIZED_APPROVAL_AND_CLOSURE_V0.1.md',page+'/05_review/RES-TRADE-UK_GATE3_TO_GATE4_HANDOFF_V0.1.md'].map(id),authorities:[...new Set(names)].map(p=>id(root+'/'+p)),shared_consumer:inputs.sharedConsumer,shared_files:inputs.sharedFiles.map(x=>{let a=id(x.path);if(a.sha256!==x.sha256)throw Error('shared changed');return {...a,role:x.role}}),dependencies:[...inputs.dependencies.slice(0,2).map(x=>id(x.path)),...['Inter-Variable.ttf','Inter-OFL.txt'].map(x=>id(out+'/dependencies/'+x))],design_source:source,evidence_index:out+'/evidence-index.json',allowed_write_scope:[out,page+'/05_review/RES-TRADE-UK_GATE4_EXECUTION_SELF_CHECK_V0.1.md',page+'/05_review/RES-TRADE-UK_GATE4_TO_GATE5_HANDOFF_V0.1.md'],navigation_only:['01_PROJECT_INDEX.md','00_PROJECT_STATUS.md'],read_scope:'Required current sources actually read; unchanged upstream identity and semantic structure retained. No subdirectory AGENTS found.'};
fs.writeFileSync(out+'/input-index.json',JSON.stringify(record,null,2)+'\n');console.log(JSON.stringify(id(source)));
