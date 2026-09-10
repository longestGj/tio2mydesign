import hashlib
import json
from pathlib import Path
from PIL import Image

page = Path('D:/23MySec/pages/applications/plastics')
gate = page / '04_planning/gate4-v0.2'
out_dir = page / '05_review/gate4-complete-independent-v0.2'
freeze_path = gate / 'APP-PLAS_GATE4_FREEZE_RECORD_V0.2.json'
evidence_path = gate / 'APP-PLAS_GATE4_EVIDENCE_INDEX_V0.2.json'
input_path = gate / 'APP-PLAS_GATE4_INPUT_INDEX_V0.2.json'


def sha(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open('rb') as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b''):
            digest.update(chunk)
    return digest.hexdigest()


def identity(path: Path) -> dict:
    return {'path': path.as_posix(), 'bytes': path.stat().st_size, 'sha256': sha(path)}


def match(item: dict) -> dict:
    path = Path(item['path'])
    actual = identity(path) if path.exists() else {'path': path.as_posix(), 'bytes': None, 'sha256': None}
    return {'declared': item, 'actual': actual, 'pass': path.exists() and actual['bytes'] == item['bytes'] and actual['sha256'] == item['sha256']}


freeze = json.loads(freeze_path.read_text(encoding='utf-8'))
evidence = json.loads(evidence_path.read_text(encoding='utf-8'))
inputs = json.loads(input_path.read_text(encoding='utf-8'))

input_checks = [match(item) for item in inputs['inputs']]
binding_names = ['source', 'input_index', 'workset', 'preflight', 'regression', 'metadata_readback', 'predecessor_freeze', 'predecessor_evidence_index', 'predecessor_failed_review']
binding_checks = [{'name': name, **match(freeze[name])} for name in binding_names]

image_checks = []
for item in evidence['images']:
    path = Path(item['path'])
    file_check = match(item)
    dimensions = None
    decode_error = None
    try:
        with Image.open(path) as image:
            dimensions = list(image.size)
            image.verify()
    except Exception as error:
        decode_error = str(error)
    dimensions_pass = dimensions == [item.get('physical_width'), item.get('physical_height')]
    fields_complete = all(item.get(k) is not None for k in ('logical_width', 'physical_width', 'physical_height', 'dpr', 'state', 'bytes', 'sha256'))
    image_checks.append({'path': path.as_posix(), 'file_identity': file_check, 'decoded_dimensions': dimensions, 'declared_dimensions': [item.get('physical_width'), item.get('physical_height')], 'dpr': item.get('dpr'), 'fields_complete': fields_complete, 'decode_error': decode_error, 'pass': file_check['pass'] and dimensions_pass and fields_complete and item.get('dpr') == 1 and decode_error is None})

grade = [x for x in image_checks if 'grade-path-context.png' in x['path']]
states = [x for x in image_checks if '/focus-states/' in x['path']]
viewports = freeze['renderer']['viewports']
viewport_pass = [(x['width'], x['height']) for x in viewports] == [(1440, 900), (768, 900), (390, 900)] and freeze['renderer']['dpr'] == 1
grade_actual = {Path(x['path']).name.split('-')[0]: x['decoded_dimensions'] for x in grade}
grade_pass = grade_actual == {'1440': [1440, 727], '768': [768, 747], '390': [390, 269]}

report = {
    'page_id': 'APP-PLAS', 'workset_id': 'APP-PLAS-G4-COMPLETE-20260907-02', 'freeze_id': 'APP-PLAS-G4-FREEZE-20260907-02', 'reviewer_role': 'INDEPENDENT_TARGETED_REREVIEW',
    'frozen_objects': {'freeze': identity(freeze_path), 'evidence': identity(evidence_path), 'input_index': identity(input_path)},
    'counts': {
        'inputs': len(input_checks), 'inputs_passed': sum(x['pass'] for x in input_checks),
        'freeze_bindings': len(binding_checks), 'freeze_bindings_passed': sum(x['pass'] for x in binding_checks),
        'images': len(image_checks), 'images_passed': sum(x['pass'] for x in image_checks),
        'grade_context_images': len(grade), 'state_images': len(states), 'state_images_complete': sum(x['fields_complete'] and x['dpr'] == 1 for x in states)
    },
    'renderer_viewports': viewports, 'renderer_viewport_pass': viewport_pass,
    'grade_dimensions': grade_actual, 'grade_dimensions_pass': grade_pass,
    'input_checks': input_checks, 'binding_checks': binding_checks, 'image_checks': image_checks,
}
report['failures'] = []
if report['counts']['inputs_passed'] != 52: report['failures'].append('frozen-input-identity')
if report['counts']['freeze_bindings_passed'] != len(binding_checks): report['failures'].append('freeze-binding-identity')
if report['counts']['images_passed'] != 92: report['failures'].append('image-identity-dimension-dpr')
if not viewport_pass: report['failures'].append('renderer-viewports')
if not grade_pass: report['failures'].append('grade-context-dimensions')
if len(states) != 27 or report['counts']['state_images_complete'] != 27: report['failures'].append('state-metadata-completeness')
report['status'] = 'PASS' if not report['failures'] else 'FAIL'
out_dir.mkdir(parents=True, exist_ok=True)
(out_dir / 'identity-audit.json').write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'status': report['status'], 'counts': report['counts'], 'viewports': viewport_pass, 'grade': grade_actual, 'failures': report['failures']}))
if report['failures']:
    raise SystemExit(1)
