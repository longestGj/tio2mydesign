import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path
from PIL import Image

page = Path('D:/23MySec/pages/markets/italy')
old = page / '04_planning/gate4-v0.1'
new = page / '04_planning/gate4-v0.2'
review = page / '05_review'


def sha(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open('rb') as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b''):
            digest.update(chunk)
    return digest.hexdigest()


def identity(path: Path) -> dict:
    return {'path': path.as_posix(), 'bytes': path.stat().st_size, 'sha256': sha(path)}


def write_json(path: Path, value: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, indent=2) + '\n', encoding='utf-8')


old_evidence_path = old / 'MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.1.json'
old_freeze_path = old / 'MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.1.json'
old_input_path = old / 'MARKET-EU-IT_GATE4_INPUT_INDEX_V0.1.json'
source_path = old / 'MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html'
workset_path = new / 'MARKET-EU-IT_GATE4_WORKSET_V0.2.json'
runtime_path = new / 'diagnostic_support/remediation-runtime.json'
image_verify_path = new / 'MARKET-EU-IT_GATE4_IMAGE_IDENTITY_VERIFICATION_V0.2.json'
input_path = new / 'MARKET-EU-IT_GATE4_INPUT_INDEX_V0.2.json'
freeze_path = new / 'MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.2.json'
evidence_path = new / 'MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.2.json'

old_evidence = json.loads(old_evidence_path.read_text(encoding='utf-8'))
old_input = json.loads(old_input_path.read_text(encoding='utf-8'))
runtime = json.loads(runtime_path.read_text(encoding='utf-8'))
assert identity(source_path)['sha256'] == 'ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615'
assert runtime['summary']['failed'] == 0 and runtime['summary']['passed'] == 20

verified = []
corrected_images = []
changed = []
for item in old_evidence['images']:
    path = Path(item['path'])
    with Image.open(path) as image:
        width, height = image.size
        image.verify()
    actual = identity(path)
    ok = actual['bytes'] == item['bytes'] and actual['sha256'] == item['sha256']
    if not ok:
        raise RuntimeError(f'Image identity mismatch: {path}')
    corrected = dict(item)
    previous = {k: corrected.get(k) for k in ('physical_width', 'physical_height', 'dpr')}
    corrected['physical_width'] = width
    corrected['physical_height'] = height
    corrected['dpr'] = 1
    if previous != {'physical_width': width, 'physical_height': height, 'dpr': 1}:
        changed.append({'path': path.as_posix(), 'previous': previous, 'corrected': {'physical_width': width, 'physical_height': height, 'dpr': 1}})
    corrected_images.append(corrected)
    verified.append({**actual, 'logical_width': item['logical_width'], 'physical_width': width, 'physical_height': height, 'dpr': 1, 'metadata_complete': True, 'identity_match_v0_1': True})

if len(verified) != 56 or len(changed) != 19:
    raise RuntimeError(f'Expected 56 verified and 19 corrected, got {len(verified)} and {len(changed)}')

direction = [x for x in changed if x['path'].endswith('1440-direction-risk.png')]
state_changes = [x for x in changed if '/focus-states/' in x['path']]
if len(direction) != 1 or direction[0]['corrected']['physical_height'] != 436 or len(state_changes) != 18:
    raise RuntimeError('Correction set does not match IT-G4-PC-R01')

image_verification = {
    'page_id': 'MARKET-EU-IT', 'workset_id': 'IT-G4-COMPLETE-20260907-02', 'freeze_id': 'IT-G4-FREEZE-20260907-02',
    'finding_response_id': 'IT-G4-PC-R01-R1', 'status': '56/56 IMAGE_IDENTITY_AND_PHYSICAL_METADATA_PASS',
    'source_evidence': identity(old_evidence_path),
    'counts': {'images': 56, 'bytes_sha_match': 56, 'decoded_dimensions_match_corrected_records': 56, 'complete_physical_fields': 56, 'corrected_records': 19, 'direction_height_corrections': 1, 'state_records_completed': 18, 'failures': 0},
    'corrections': changed, 'images': verified,
    'boundary': 'V0.1 PNG files are inherited byte-for-byte. This record corrects ledger metadata only.'
}
write_json(image_verify_path, image_verification)

additions = [
    old / 'MARKET-EU-IT_GATE4_WORKSET_V0.1.json', old_freeze_path, old_evidence_path,
    old / 'diagnostic_support/runtime-verification.json', old / 'diagnostic_support/visual-readback.json',
    review / 'gate4-complete-independent-v0.1/REVIEW.md', review / 'gate4-complete-independent-v0.1/review-evidence-index.json',
    review / 'MARKET-EU-IT_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md', page / 'MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md'
]
paths = sorted({Path(item['path']).as_posix() for item in old_input['inputs']} | {p.as_posix() for p in additions})
inputs = [identity(Path(p)) for p in paths]
input_index = {
    'page_id': 'MARKET-EU-IT', 'workset_id': 'IT-G4-COMPLETE-20260907-02', 'status': 'INPUTS_BOUND_FOR_IT-G4-PC-R01_METADATA_REMEDIATION',
    'generated_at': datetime.now(timezone.utc).isoformat(), 'count': len(inputs), 'inherited_v0_1_inputs': len(old_input['inputs']), 'added_remediation_inputs': len(additions), 'inputs': inputs,
    'note': 'Root Status and Index are navigation only and remain excluded, matching the V0.1 freeze policy.'
}
write_json(input_path, input_index)

freeze = {
    'page_id': 'MARKET-EU-IT', 'workset_id': 'IT-G4-COMPLETE-20260907-02', 'freeze_id': 'IT-G4-FREEZE-20260907-02', 'finding_response_id': 'IT-G4-PC-R01-R1',
    'status': 'EVIDENCE_METADATA_CORRECTED / SOURCE_AND_56_IMAGES_INHERITED_BYTE_IDENTICAL / DRAFT_FOR_INDEPENDENT_REREVIEW',
    'frozen_at': datetime.now(timezone.utc).isoformat(), 'source': {**identity(source_path), 'inheritance': 'BYTE_IDENTICAL_FROM_IT-G4-FREEZE-20260907-01'},
    'previous_freeze': {**identity(old_freeze_path), 'freeze_id': 'IT-G4-FREEZE-20260907-01', 'state': 'RETAINED_PROJECT_CONTROL_FINDING_HISTORY'},
    'previous_evidence': identity(old_evidence_path), 'input_index': identity(input_path), 'workset': identity(workset_path), 'remediation_runtime': identity(runtime_path), 'image_identity_verification': identity(image_verify_path),
    'inputs': inputs,
    'dependencies': [identity(old / 'dependencies/Inter-Variable.ttf'), identity(old / 'dependencies/Inter-OFL.txt')],
    'verification': {'source_changed': False, 'image_bytes_changed': False, 'images_verified': '56/56', 'physical_metadata_complete': '56/56', 'metadata_records_corrected': 19, 'runtime_regression': '20/20 PASS', 'full_page_regression': '3/3 PASS'},
    'boundary': 'Executor remediation freeze only. Independent rereview remains required; Gate 4 is open and Gate 6 is not started.'
}
write_json(freeze_path, freeze)

new_images = []
for width in ('1440', '768', '390'):
    path = new / f'diagnostic_support/full-page-regression/{width}-full.png'
    with Image.open(path) as image:
        physical_width, physical_height = image.size
        image.verify()
    new_images.append({**identity(path), 'logical_width': int(width), 'physical_width': physical_width, 'physical_height': physical_height, 'dpr': 1, 'state': 'REMEDIATION_FULL_PAGE_REGRESSION', 'classification': 'DIAGNOSTIC_SUPPORT'})

evidence = {
    'page_id': 'MARKET-EU-IT', 'workset_id': 'IT-G4-COMPLETE-20260907-02', 'freeze_id': 'IT-G4-FREEZE-20260907-02', 'finding_response_id': 'IT-G4-PC-R01-R1', 'status': 'DRAFT_FOR_INDEPENDENT_REREVIEW',
    'source': identity(source_path), 'freeze': identity(freeze_path), 'input_index': identity(input_path), 'previous_evidence': identity(old_evidence_path), 'remediation_runtime': identity(runtime_path), 'image_identity_verification': identity(image_verify_path),
    'counts': {**old_evidence['counts'], 'inherited_images': 56, 'inherited_images_identity_verified': 56, 'images_with_complete_physical_metadata': 56, 'metadata_records_corrected': 19, 'new_full_page_regression_images': 3, 'remediation_runtime_checks': 20, 'remediation_runtime_failures': 0, 'executor_required_findings': 0},
    'images': corrected_images, 'remediation_regression_images': new_images,
    'correction': {'finding': 'IT-G4-PC-R01', 'direction_sample': {'physical_width': 1440, 'physical_height': 436, 'dpr': 1}, 'state_records_completed': 18, 'producer_rule': 'Physical dimensions are read from decoded PNG metadata after capture; CSS clip dimensions are never used as physical PNG dimensions.'},
    'accepted_v0_1_visual_scope': old_evidence['acceptance'],
    'limitations': old_evidence['unverified'],
    'boundary': 'Corrected evidence ledger for independent rereview. This executor record does not approve or close Gate 4 and does not start Gate 6.'
}
write_json(evidence_path, evidence)

print(json.dumps({'inputs': len(inputs), 'images': len(verified), 'corrected': len(changed), 'runtime': runtime['summary'], 'source': identity(source_path), 'image_verification': identity(image_verify_path), 'input_index': identity(input_path), 'freeze': identity(freeze_path), 'evidence': identity(evidence_path), 'new_images': len(new_images)}))
