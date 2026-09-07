"""Local provenance/link checks for Gate 6 documents, not production tests."""
from pathlib import Path
import hashlib, json, re
from datetime import datetime, timezone

root = Path('D:/23MySec')
page = root/'pages/markets/poland'
out = page/'05_review/gate6-v0.1'
visual = page/'04_planning/gate5-v0.1'
sha = lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
freeze = json.loads((visual/'approval_core/source-freeze.json').read_text(encoding='utf-8'))
old = json.loads((out/'runtime-and-identity.json').read_text(encoding='utf-8'))
package = page/'06_handoff/MARKET-EU-PL_GATE6_HANDOFF_PACKAGE_V0.1.md'
files = {Path(x['path']) for x in old['identity']}
files.update([package, visual/'approval_core/source-freeze.json', visual/'approval_core/export-inventory.json'])
extra = ['AGENTS.md','PROJECT_CONTEXT.md','docs/architecture/GATE_WORKFLOW_V2.0.md','docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.1.md','docs/architecture/PAGE_GATE_1_5_STANDARD_V1.2.md']
files.update(root/x for x in extra)
links=[]
for target in re.findall(r'\]\(([^)]+)\)', package.read_text(encoding='utf-8')):
    target=target.strip('<>').split('#')[0]
    if not target or '://' in target: continue
    p=(package.parent/target).resolve()
    if p==out/'intake-baseline.json': continue
    links.append({'target':target,'path':p.as_posix(),'exists':p.exists()})
    if p.is_file():files.add(p)
segments=json.loads((visual/'diagnostic_support/readable-segments/segment-inventory.json').read_text(encoding='utf-8'))['records']
segment_checks=[{'path':x['path'],'match':sha(Path(x['path']))==x['sha256']} for x in segments]
record={
    'intakeId':'PL-G6-INTAKE-01','createdAt':datetime.now(timezone.utc).isoformat(),
    'upstreamFreezeId':freeze['freezeId'],'upstreamCombinedSha256':freeze['combinedSha256'],
    'status':'RECONCILED_INTAKE_IDENTITY / NOT_USER_APPROVAL',
    'historicalComparison':{'checked':len(old['identity']),'unchanged':sum(x['match'] for x in old['identity']),
        'differences':[x for x in old['identity'] if not x['match']],
        'resolution':'Only root AGENTS/PROJECT_CONTEXT changed through separate Gate consolidation governance. Current GATE_WORKFLOW_V2.0/DETAILS_V1.1 overlay old workflow descriptions; unchanged page copy, visual sources, dependencies and 14 formal images retain original approvals. Do not overwrite historical freeze.'},
    'currentRecords':[{'path':p.as_posix(),'bytes':p.stat().st_size,'sha256':sha(p)} for p in sorted(files)],
    'packageLinks':links,'segmentChecks':segment_checks,
    'visualObservation':{'type':'STATIC_VISUAL','reviewer':'root Gate6 reviewer, not Gate5 author','formalImagesOpened':14,'overlappingSegmentsOpened':11,
        'finding':'No observed content omission, collision or relation loss across full 1440/768/390 pages and applicable menu/Cookie/focus/hover images. Images do not prove production behavior.'},
    'runtimeEvidence':{'path':(out/'runtime-and-identity.json').as_posix(),'sha256':sha(out/'runtime-and-identity.json'),'type':'ACTUAL_RUNTIME for local measurements/overlays; LOCAL_SIMULATION for navigation interception'},
    'limits':['No external development directory accessed','No receiver/provider request sent','No production CMS/API, SEO, scope, device or assistive-technology verification','No Gate6 user approval or external dispatch inferred']
}
(out/'intake-baseline.json').write_text(json.dumps(record,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'records':len(files),'links':len(links),'broken':[x for x in links if not x['exists']],'segments':len(segments),'segmentFailures':[x for x in segment_checks if not x['match']]}))
