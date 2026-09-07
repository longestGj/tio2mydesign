from pathlib import Path
import hashlib, json
from datetime import datetime, timezone

project = Path(__file__).resolve().parents[6]
gate = Path(__file__).resolve().parents[1]
review = project / "pages/markets/brazil/05_review"

def identity(p: Path, role: str = ""):
    data = p.read_bytes()
    return {"role": role, "path": p.relative_to(project).as_posix(), "bytes": len(data), "sha256": hashlib.sha256(data).hexdigest()}

inputs = [
 (project/"docs/architecture/GATE4_BRAZIL_BILINGUAL_PARALLEL_CONTROL_V1.0.md", "page execution authorization"),
 (project/"pages/markets/brazil/MARKET-BR-EN_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md", "current starting Manifest"),
 (project/"docs/architecture/PAGE_REGISTRY_V0.2.md", "page registry"),
 (project/"research/keyword/11_page_keyword_master.csv", "keyword ownership"),
 (project/"docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md", "Market family contract"),
 (project/"docs/page-briefs/MARKET-BR-EN_BRAZIL_ENGLISH_BRIEF_V0.2.md", "approved complete Brief"),
 (project/"docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md", "user fact decision register"),
 (project/"pages/markets/brazil/04_planning/MARKET-BR-EN_GATE2_CONTENT_SKELETON_V0.1.md", "approved Gate 2 A"),
 (project/"pages/markets/brazil/04_planning/MARKET-BR-EN_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md", "approved Gate 2 B / sole visible copy source"),
 (project/"pages/markets/brazil/04_planning/MARKET-BR-EN_GATE2_CONTENT_CONTRACT_V0.1.md", "approved Gate 2 C"),
 (project/"pages/markets/brazil/05_review/MARKET-BR-EN_GATE3_TO_GATE4_HANDOFF_V0.1.md", "closed Gate 3 handoff"),
 (project/"pages/markets/brazil/04_planning/gate3-en-v0.1/MARKET-BR-EN_GATE3_RESPONSIVE_WIREFRAME_V0.1.html", "closed Gate 3 visual source"),
 (project/"pages/markets/brazil/04_planning/gate3-en-v0.1/MARKET-BR-EN_GATE3_ASSET_INVENTORY_V0.1.json", "closed Gate 3 asset inventory"),
 (project/"pages/markets/brazil/04_planning/gate3-en-v0.1/MARKET-BR-EN_GATE3_FREEZE_RECORD_V0.1.json", "closed Gate 3 freeze"),
 (project/"docs/architecture/GATE_WORKFLOW_V3.1.md", "current workflow"),
 (project/"docs/architecture/PAGE_GATE_1_4_STANDARD_V2.1.md", "current Gate standard"),
 (project/"docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.2.md", "current Gate 4 role/method baseline"),
 (project/"agents/gate4-complete-visual/agent.md", "Gate 4 execution Agent"),
 (project/"docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.0.md", "shared workset contract"),
 (project/"skills/brand-applied-visual-design/SKILL.md", "4A method"),
 (project/"skills/full-page-visual-composition/SKILL.md", "4B composition method"),
 (project/"skills/layout-interaction-verification/SKILL.md", "layout and interaction method"),
 (project/"brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md", "brand visual standard"),
 (project/"brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md", "functional teal override"),
 (project/"docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md", "shared Header/Footer"),
 (project/"brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md", "production Logo authority"),
 (project/"docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md", "Footer legal utilities"),
]
input_path = gate/"MARKET-BR-EN_GATE4_INPUT_INDEX_V1.0.json"
input_path.write_text(json.dumps({"worksetId":"BR-EN-G4-WS-01","pageId":"MARKET-BR-EN","items":[identity(p,r) for p,r in inputs]},indent=2),encoding="utf-8")

deps = [
 (project/"pages/markets/brazil/04_planning/gate3-en-v0.1/dependencies/Inter-Variable.ttf", "Inter variable font / durable inherited dependency"),
 (project/"pages/markets/brazil/04_planning/gate3-en-v0.1/dependencies/Inter-OFL.txt", "Inter license"),
 (project/"brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg", "authoritative production primary horizontal Logo"),
 (project/"brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg", "authoritative production reverse Logo"),
]
dep_path=gate/"MARKET-BR-EN_GATE4_DEPENDENCY_INDEX_V1.0.json"
dep_path.write_text(json.dumps({"worksetId":"BR-EN-G4-WS-01","items":[identity(p,r) for p,r in deps]},indent=2),encoding="utf-8")

source=gate/"MARKET-BR-EN_GATE4_COMPLETE_VISUAL_V1.0.html"
inventory=gate/"approval_core/export-inventory.json"
freeze_path=gate/"MARKET-BR-EN_GATE4_FREEZE_RECORD_V1.0.json"
freeze={"worksetId":"BR-EN-G4-WS-01","freezeId":"BR-EN-G4-V10-SOURCE-01","status":"COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW","frozenAt":datetime.now(timezone.utc).isoformat(),"source":identity(source,"single editable visual source"),"inputIndex":identity(input_path,"exact frozen inputs"),"dependencyIndex":identity(dep_path,"exact durable dependencies"),"formalInventory":identity(inventory,"formal export inventory"),"render":{"browser":"Chrome 152.0.7977.82","viewports":["1440x900 DPR1","768x900 DPR1","390x844 DPR2 (780 physical width)"],"states":["normal full page","menu open where applicable","Cookie settings open"]}}
freeze_path.write_text(json.dumps(freeze,indent=2),encoding="utf-8")

evidence_files=[source,gate/"MARKET-BR-EN_GATE4_COMPLETE_VISUAL_AND_METHOD_REPORT_V1.0.md",review/"MARKET-BR-EN_GATE4_EXECUTION_SELF_CHECK_V1.0.md",inventory,gate/"diagnostic_support/preflight-runtime.json",gate/"diagnostic_support/formal-runtime-and-export.json",gate/"diagnostic_support/readable-segments/segments.json",freeze_path]
evidence_files += sorted((gate/"approval_core").glob("*.png"))
evidence_files += sorted((gate/"diagnostic_support/readable-segments").glob("*.png"))
evidence_path=gate/"MARKET-BR-EN_GATE4_EVIDENCE_INDEX_V1.0.json"
evidence_path.write_text(json.dumps({"worksetId":"BR-EN-G4-WS-01","freezeId":"BR-EN-G4-V10-SOURCE-01","approvalCoreRoles":["frozen source","three full-page PNGs","five applicable state PNGs","export inventory","method report","author self-check","freeze record"],"items":[identity(p,"approval_core" if "approval_core" in p.parts or p in [source,freeze_path,gate/"MARKET-BR-EN_GATE4_COMPLETE_VISUAL_AND_METHOD_REPORT_V1.0.md",review/"MARKET-BR-EN_GATE4_EXECUTION_SELF_CHECK_V1.0.md"] else "diagnostic_support") for p in evidence_files]},indent=2),encoding="utf-8")

workset_path=gate/"MARKET-BR-EN_GATE4_WORKSET_V1.0.json"
workset_path.write_text(json.dumps({"worksetId":"BR-EN-G4-WS-01","pageId":"MARKET-BR-EN","scope":"current merged Gate 4 through author self-check","status":"COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW","visualDirectionCheckpoint":"VISUAL_DIRECTION_CHECKED","designSource":identity(source,"single design source"),"inputIndex":identity(input_path),"dependencyIndex":identity(dep_path),"freezeRecord":identity(freeze_path),"evidenceIndex":identity(evidence_path),"stop":"independent final review required; no user approval, Gate 4 closure or Gate 6"},indent=2),encoding="utf-8")
print(json.dumps({"input":identity(input_path),"dependencies":identity(dep_path),"freeze":identity(freeze_path),"evidence":identity(evidence_path),"workset":identity(workset_path)},indent=2))
