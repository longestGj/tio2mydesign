from pathlib import Path
import hashlib, json, re

ROOT=Path(r'D:\23MySec')
OUT=Path(__file__).parent
UP=OUT.parent/'APP-MB_GATE3_WIREFRAME_EDITABLE_SOURCE_V0.1.html'
assert hashlib.sha256(UP.read_bytes()).hexdigest()=='43a70d7c13a387c09a7d07138880f97340890c807a285217d090109b6a65f937'
css='''
/* APP-MB Gate 4 visual refinement; shared owner CSS and markup untouched. */
main .hero{background:#031b3a;padding:80px 0 72px;border-bottom:4px solid #00a99d}
main .hero h1{font-weight:700;max-width:900px;letter-spacing:-.035em}
main .heroLead{max-width:840px}
main .heroLinks .linkSeparator{display:none}
main .heroLinks a{font-size:16px;font-weight:600}
main .heroLinks a:hover{background:#062b5b;border-color:#fff}
main .heroLinks a:focus-visible{outline:3px solid #fff;outline-offset:4px}
main .bodySection{padding:68px 0}
main .bodySection h2{font-weight:700;font-size:40px;line-height:1.18;margin-bottom:26px}
main .bodySection p{max-width:880px;font-size:17px;line-height:1.68}
main .bodySection a:hover{text-decoration-thickness:2px;color:#062b5b}
main .bodySection .tableWrap{margin:32px 0;border-radius:12px;box-shadow:0 3px 12px rgba(3,27,58,.035)}
main table{font-size:16px;line-height:1.6;border-collapse:separate;border-spacing:0}
main th{font-size:14px;font-weight:700;background:#062b5b;color:#fff;border-color:#062b5b;padding:18px 20px}
main td{padding:20px;border-top:0;border-right:0}
main td:last-child{border-right:1px solid #d9e2ec}
main tbody tr:nth-child(even){background:#f5f8fb}
main tbody td:first-child{font-weight:600;color:#062b5b}
main th:first-child{border-top-left-radius:12px}
main th:last-child{border-top-right-radius:12px}
main tbody tr:last-child td:first-child{border-bottom-left-radius:12px}
main tbody tr:last-child td:last-child{border-bottom-right-radius:12px}
main [data-module="grades-to-review"] td{font-weight:400}
main [data-module="grades-to-review"] tbody td:first-child{font-weight:600}
main [data-module="prepare-your-request"] ul{list-style:none;padding:0;max-width:1000px}
main [data-module="prepare-your-request"] li{margin:16px 0;padding:22px 24px;background:#fff;border:1px solid #d9e2ec;border-radius:12px;line-height:1.68}
main [data-module="prepare-your-request"] li a{font-weight:700}
main .sourceSection{padding-top:52px;padding-bottom:52px}
main .sourceSection h2{font-size:32px}
main .sourceSection li{font-size:15px;line-height:1.65;margin-bottom:22px}
@media(max-width:1100px){main .hero{padding:60px 0 56px}main .hero h1{font-size:48px}main .bodySection{padding:56px 0}main .bodySection h2{font-size:36px}main th,main td{padding:16px}main table{font-size:15px}}
@media(max-width:620px){main .hero{padding:44px 0 42px}main .hero h1{font-size:38px;line-height:1.12}main .heroLinks a{padding:12px;line-height:1.5}main .bodySection{padding:44px 0}main .bodySection h2{font-size:30px;line-height:1.2}main .bodySection p{font-size:16px;line-height:1.68}main .tableWrap{box-shadow:none}main table{font-size:16px}main tbody{gap:16px}main tr{overflow:visible;border-radius:12px}main td{display:block;padding:16px 18px;border:0;border-bottom:1px solid #d9e2ec;font-weight:400!important}main td::before{display:block;margin-bottom:6px;font-size:14px;font-weight:700;line-height:1.5;color:#062b5b}main td:first-child{background:#f5f8fb;border-radius:12px 12px 0 0}main td:last-child{border:0}main [data-module="grades-to-review"] td{display:grid;grid-template-columns:90px 1fr;gap:12px;align-items:center}main [data-module="grades-to-review"] td::before{margin:0}main [data-module="prepare-your-request"] li{padding:18px}main .sourceSection h2{font-size:28px}}
'''
source=UP.read_text(encoding='utf-8').replace('</style>',css+'\n</style>').replace('data-gate="3"','data-gate="4" data-workset="APP-MB-G4-WORKSET-01"')
dest=OUT/'APP-MB_GATE4_EDITABLE_SOURCE_V0.1.html'
dest.write_text(source,encoding='utf-8')
def identity(p):return {'path':str(p),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
names=['AGENTS.md','PROJECT_CONTEXT.md','02_DIRECTORY_GUIDE.md','docs/architecture/GATE_WORKFLOW_V3.2.md','docs/architecture/PAGE_GATE_1_4_STANDARD_V2.2.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.4.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.7.md','agents/gate4-complete-visual/agent.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.2.md','skills/brand-applied-visual-design/SKILL.md','skills/full-page-visual-composition/SKILL.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/gate4-self-check.md','skills/layout-interaction-verification/references/core-risk-model.md','docs/page-briefs/APP-MB_MASTERBATCH_BRIEF_V0.2.md','docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md','docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv','pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv','pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md','docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md','brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md','brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md','brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md','docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md','docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md','docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md','pages/applications/masterbatch/APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md']
names += ['pages/applications/masterbatch/04_planning/'+n for n in ['APP-MB_GATE2_CONTENT_SKELETON_V0.2.md','APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md','APP-MB_GATE2_CONTENT_CONTRACT_V0.3.md','APP-MB_GATE3_WIREFRAME_EDITABLE_SOURCE_V0.1.html']]
names += ['pages/applications/masterbatch/05_review/'+n for n in ['APP-MB_GATE3_TO_GATE4_HANDOFF_V0.1.md','APP-MB_GATE3_USER_APPROVAL_AND_CLOSURE_V0.1.md']]
inputs=[identity(ROOT/n) for n in names]
deps=[identity(p) for p in (ROOT/'docs/architecture/gate3-shared-consumer-v0.2').iterdir() if p.suffix in ['.css','.js','.cjs','.json','.ttf','.txt']]
deps += [identity(ROOT/'brand/logo/candidates/v0.1'/n) for n in ['tio2-malaysia-primary-horizontal-v0.1.svg','tio2-malaysia-reverse-monochrome-v0.1.svg']]
(OUT/'APP-MB_GATE4_INPUT_INDEX_V0.1.json').write_text(json.dumps({'workset_id':'APP-MB-G4-WORKSET-01','inputs':inputs,'dependencies':deps,'informational_navigation_only':['01_PROJECT_INDEX.md','00_PROJECT_STATUS.md']},indent=2),encoding='utf-8')
print(json.dumps(identity(dest)))
