const fs=require('fs'),crypto=require('crypto');
const root='D:/23MySec';
const page=root+'/pages/system/404';
const upstream=page+'/04_planning/gate3-v0.1';
const out=page+'/04_planning/gate4-v0.1';
const dispatch='G4-SYS404-EXEC-20260908-01';
const worksetId='SYS-404-G4-WORKSET-20260908-01';
const id=p=>({path:p,bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')});
const save=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
for(const d of ['approval_core','dependencies','diagnostic_support/render'])fs.mkdirSync(out+'/'+d,{recursive:true});
const inputs=[
  ['authority_manifest',page+'/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md'],
  ['gate3_handoff',page+'/05_review/SYS-404_GATE3_TO_GATE4_HANDOFF_V0.1.md'],
  ['gate3_frozen_source',upstream+'/SYS-404_GATE3_WIREFRAME_V0.1.html'],
  ['gate3_evidence_index',upstream+'/asset-inventory.json'],
  ['gate2_A',page+'/04_planning/SYS-404_GATE2_CONTENT_SKELETON_INHERITANCE_MAP_V0.1.md'],
  ['gate2_B_editable_copy',page+'/04_planning/SYS-404_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md'],
  ['gate2_C',page+'/04_planning/SYS-404_GATE2_CONTENT_CONTRACT_V0.1.md'],
  ['approved_design',root+'/docs/superpowers/specs/2026-09-08-404-thank-you-pages-design-v0.1.md'],
  ['visual_standard',root+'/brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md'],
  ['cta_accessibility',root+'/brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md'],
  ['global_chrome',root+'/docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md'],
  ['logo_manifest',root+'/brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md'],
  ['footer_legal',root+'/docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md'],
  ['no_terms',root+'/docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md'],
  ['control',root+'/docs/architecture/GATE4_SYS404_CONVTHANK_PARALLEL_CONTROL_V1.0.md'],
  ['agent_skill_contract',root+'/docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.2.md'],
  ['gate4_gate5_handoff_contract',root+'/docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.0.md']
].map(([role,p])=>({...id(p),role}));
const depMap=[
  [upstream+'/dependencies/Inter-Variable.ttf',out+'/dependencies/Inter-Variable.ttf'],
  [upstream+'/dependencies/Inter-OFL.txt',out+'/dependencies/Inter-OFL.txt'],
  [root+'/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg',out+'/dependencies/tio2-malaysia-primary-horizontal-v0.1.svg'],
  [root+'/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg',out+'/dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg']
];
for(const [src,dest] of depMap)fs.copyFileSync(src,dest);
const dependencies=depMap.map(([src,dest])=>({owner:id(src),frozen_copy:id(dest)}));
const inputIndex={page_id:'SYS-404',workset_id:worksetId,dispatch,status:'IN_PROGRESS',route:'RUNTIME_FALLBACK',site_scope:'tio2-my',navigation_mapping:'NONE',approved_inputs:inputs,durable_dependencies:dependencies,allowed_write_scope:[out,page+'/05_review'],authorization_scope:'Gate 4 complete visual execution through frozen handoff only; no approval, Gate 5 review, Gate 6, development, deployment or publication',runtime_boundary:'LOCAL_PLANNING_ONLY'};
save(out+'/input-index.json',inputIndex);
const direction={page_id:'SYS-404',workset_id:worksetId,status:'VISUAL_DIRECTION_CHECKED',checked_by:'/root/sys404_gate4_execute',objective:'A calm, premium industrial recovery surface that makes the two primary recovery routes immediate while keeping three supporting routes available.',inherited_direction:['Malaysia-origin industrial B2B visual standard','Primary Navy hierarchy, accessible #008078 functional teal, white and Soft Background surfaces','Inter typography and restrained 10–14px card radii','Shared Global Chrome, production Logo, fixed RFQ, Footer legal utilities and Cookie Settings'],decisions:['Use a centered white recovery panel on a quiet Soft Background field to balance the short page at 1440.','Use a narrow teal rule and low-contrast orbital geometry as decorative brand cues without adding media or meaning.','Keep both approved Primary actions visually dominant; the first uses accessible teal fill and the second Primary uses Navy fill.','Render Supporting actions as quieter white controls with Navy text and neutral borders.','At 390 retain the locked single-column order, reduce panel padding, and keep all controls at least 44 by 44 CSS pixels.'],representative_risks:['short-page vertical balance','two Primary versus three Supporting hierarchy','long body copy wrapping','390 five-button stack','focus and contrast'],alternatives_required:false,unresolved_items:[],result:'PROCEED_TO_4B'};
save(out+'/visual-direction-check.json',direction);
let html=fs.readFileSync(upstream+'/SYS-404_GATE3_WIREFRAME_V0.1.html','utf8');
html=html.replaceAll('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg','dependencies/tio2-malaysia-primary-horizontal-v0.1.svg')
         .replaceAll('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg','dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg');
const gate4Css=`
/* Gate 4 complete visual layer: preserves Gate 3 structure and shared-owner markup. */
body{background:#f5f8fb;color:#334155}
main{position:relative;isolation:isolate;min-height:630px;padding:84px 40px 96px;overflow:hidden;background:radial-gradient(circle at 12% 18%,rgb(0 169 157 / 8%) 0 1px,transparent 2px),radial-gradient(circle at 88% 72%,rgb(6 43 91 / 7%) 0 1px,transparent 2px),linear-gradient(180deg,#f8fbfd 0%,#f3f7fa 100%);background-size:34px 34px,42px 42px,auto}
.recovery{position:relative;width:min(920px,100%);padding:74px 72px 68px;border:1px solid #d9e2ec;border-radius:12px;background:#fff;text-align:center;box-shadow:0 22px 54px rgb(3 27 58 / 10%);overflow:hidden}
.recovery::before{content:'';position:absolute;top:0;right:0;left:0;height:6px;background:linear-gradient(90deg,#062b5b 0 48%,#008078 48% 100%)}
.recovery::after{content:'';position:absolute;z-index:-1;width:250px;height:250px;right:-118px;top:-132px;border:1px solid rgb(0 128 120 / 16%);border-radius:50%;box-shadow:0 0 0 28px rgb(0 169 157 / 3%),0 0 0 58px rgb(6 43 91 / 2%)}
.eyebrow{margin:0 0 20px;color:#008078;font-size:13px;line-height:1.5;font-weight:750;letter-spacing:.15em}
.recovery h1{margin:0 auto 22px;max-width:740px;color:#062b5b;font-size:54px;line-height:1.08;letter-spacing:-1.65px;text-wrap:balance}
.intro{max-width:720px;margin:0 auto;color:#405568;font-size:18px;line-height:1.7;text-wrap:pretty}
.primary-actions,.supporting-actions{position:relative;z-index:1;display:flex;flex-wrap:wrap;justify-content:center;gap:14px}
.primary-actions{margin-top:38px}.supporting-actions{margin-top:18px;padding-top:18px;border-top:1px solid #e7edf3}
.recovery nav a{min-width:44px;min-height:50px;padding:13px 22px;border-radius:7px;font-size:15px;font-weight:650;letter-spacing:.005em;transition:transform .16s ease,box-shadow .16s ease,border-color .16s ease,background-color .16s ease}
.primary-actions a{border:1px solid #008078;background:#008078;color:#fff;box-shadow:0 8px 18px rgb(0 128 120 / 18%)}
.primary-actions a:nth-child(2){border-color:#062b5b;background:#062b5b;color:#fff;box-shadow:0 8px 18px rgb(6 43 91 / 15%)}
.supporting-actions a{min-height:46px;padding:11px 17px;border:1px solid #c8d5e1;background:#fff;color:#062b5b;box-shadow:0 3px 10px rgb(3 27 58 / 5%)}
.recovery nav a:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgb(3 27 58 / 16%)}
.recovery nav a:focus-visible{outline:3px solid #008078;outline-offset:3px}
@media(max-width:1100px){main{min-height:600px;padding:68px 32px 82px}.recovery{padding:62px 48px 58px}.recovery h1{font-size:46px;letter-spacing:-1.2px}}
@media(max-width:560px){main{min-height:560px;padding:40px 20px 56px;background:linear-gradient(180deg,#f8fbfd,#f3f7fa)}.recovery{padding:43px 24px 30px;text-align:left;box-shadow:0 14px 34px rgb(3 27 58 / 9%)}.recovery::after{display:none}.eyebrow{margin-bottom:16px;font-size:12px}.recovery h1{font-size:36px;line-height:1.12;letter-spacing:-.8px}.intro{font-size:16px;line-height:1.65}.primary-actions,.supporting-actions{display:grid;grid-template-columns:1fr;gap:11px}.primary-actions{margin-top:28px}.supporting-actions{margin-top:16px;padding-top:16px}.recovery nav a{width:100%;min-height:48px;text-align:center}.supporting-actions a{min-height:46px}}
@media(prefers-reduced-motion:reduce){.recovery nav a{transition:none}}
`;
html=html.replace('</style>','\n'+gate4Css+'</style>');
const source=out+'/SYS-404_GATE4_COMPLETE_VISUAL_V0.1.html';
save(source,html);
const workset={page_id:'SYS-404',workset_id:worksetId,dispatch,actual_author:'/root/sys404_gate4_execute',input_index:id(out+'/input-index.json'),design_source:id(source),visual_direction:id(out+'/visual-direction-check.json'),evidence_index:{path:out+'/evidence-index.json',status:'PENDING'},checkpoint_4A:'VISUAL_DIRECTION_CHECKED',checkpoint_4B:'IN_PROGRESS',allowed_write_scope:[out,page+'/05_review']};
save(out+'/workset.json',workset);
save(out+'/design-report.md',`# SYS-404 Gate 4 complete visual design report V0.1\n\n## Workset and 4A\n\n- Workset: \`${worksetId}\`; dispatch \`${dispatch}\`; actual author \`/root/sys404_gate4_execute\`.\n- Shared inputs are bound in \`input-index.json\`; one editable design source is \`SYS-404_GATE4_COMPLETE_VISUAL_V0.1.html\`.\n- 4A result: \`VISUAL_DIRECTION_CHECKED\`. Existing approved brand and page direction were sufficient, so no alternate style exploration was required.\n\n## Complete visual application\n\nThe short recovery page uses a restrained white panel over Soft Background to create stable vertical balance without adding content or media. Primary Navy, accessible functional teal, Inter typography, a narrow two-color rule and low-contrast orbital geometry carry the approved industrial brand. The two approved Primary actions use teal and Navy fills; the three Supporting actions remain quieter bordered controls. The locked Header → recovery content → Footer order, exact copy, five targets, two-plus-three grouping, zero-current navigation and all shared-owner behavior remain unchanged.\n\nAt 768 the action groups wrap independently. At 390 all five controls remain in one full-width column, with the approved boundary retained by spacing and a subtle divider. Focus indicators use accessible functional teal. Hover movement is restrained and disabled when reduced motion is requested.\n\n## Runtime boundary\n\nThe local source proves planning appearance and local interaction only. Real HTTP 404 behavior, valid-route protection, live target availability, production robots/sitemap, analytics sanitization and scope isolation remain DEP01–DEP07 for Gate 6/8/9.\n`);
console.log(JSON.stringify({workset:worksetId,source:id(source),inputs:inputs.length,dependencies:dependencies.length},null,2));
