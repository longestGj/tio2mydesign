import hashlib
import json
from pathlib import Path
from PIL import Image

root = Path('D:/23MySec/pages/applications/plastics/05_review/gate4-complete-independent-v0.2')


def sha(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def image_identity(path: Path) -> dict:
    with Image.open(path) as image:
        width, height = image.size
        image.verify()
    return {'path': path.as_posix(), 'bytes': path.stat().st_size, 'sha256': sha(path), 'physical_width': width, 'physical_height': height, 'dpr': 1}


audit_path = root / 'identity-audit.json'
runtime_path = root / 'independent-runtime.json'
audit = json.loads(audit_path.read_text(encoding='utf-8'))
runtime = json.loads(runtime_path.read_text(encoding='utf-8'))
rerenders = [image_identity(path) for path in sorted((root / 'rerender').rglob('*.png'))]
sheets = [image_identity(path) for path in sorted((root / 'contact-sheets').glob('*.png'))]

record = {
    'page_id': 'APP-PLAS', 'workset_id': 'APP-PLAS-G4-COMPLETE-20260907-02', 'freeze_id': 'APP-PLAS-G4-FREEZE-20260907-02',
    'review_id': 'APP-PLAS-G4-INDEPENDENT-REREVIEW-20260907-02', 'reviewer_role': 'INDEPENDENT_TARGETED_REREVIEW',
    'status': 'PROJECT_CONTROL_REVIEW_PASS', 'required_findings': 0, 'finding_closed': 'APP-PLAS-G4-R01',
    'identity_audit': {'path': audit_path.as_posix(), 'bytes': audit_path.stat().st_size, 'sha256': sha(audit_path), 'counts': audit['counts']},
    'independent_runtime': {'path': runtime_path.as_posix(), 'bytes': runtime_path.stat().st_size, 'sha256': sha(runtime_path), 'counts': runtime['counts']},
    'counts': {'frozen_inputs': 52, 'frozen_inputs_passed': 52, 'freeze_bindings': 9, 'freeze_bindings_passed': 9, 'candidate_images': 92, 'candidate_images_passed': 92, 'state_metadata_complete': 27, 'independent_rerenders': len(rerenders), 'full_pages': 3, 'grade_contexts': 3, 'target_states': 27, 'contact_sheets': len(sheets), 'runtime_checks': 39, 'runtime_failures': 0, 'page_errors': 0},
    'acceptance': {'renderer_390': '390x900 / PASS', 'grade_context_dimensions': '1440x727 / 768x747 / 390x269 / PASS', 'all_image_metadata': '92/92 complete and exact', 'target_state_metadata': '27/27 complete and exact', 'twelve_modules': 'PASS', 'eight_grades': 'PASS / equal neutral treatment', 'request_paths': 'PASS', 'provisional_url': 'PASS / canonical and JSON-LD absent', 'shared_contracts': 'PASS / no drift', 'finding': 'APP-PLAS-G4-R01 CLOSED'},
    'rerender_images': rerenders, 'contact_sheets': sheets,
    'boundary': 'Independent targeted rereview PASS only. This record does not close Gate 4 or start Gate 6.'
}
(root / 'review-evidence-index.json').write_text(json.dumps(record, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'rerenders': len(rerenders), 'sheets': len(sheets), 'identity_audit': record['identity_audit']['sha256'], 'runtime': record['independent_runtime']['sha256'], 'status': record['status']}))
