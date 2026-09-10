import hashlib
import json
from pathlib import Path
from PIL import Image

page = Path('D:/23MySec/pages/markets/italy')
new = page / '04_planning/gate4-v0.2'


def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


expected = {
    new / 'MARKET-EU-IT_GATE4_WORKSET_V0.2.json': '8b6184506c2aad2f2c19fe2a89443c0da4e007fbf9472c6f3fd512e598c96a0c',
    new / 'MARKET-EU-IT_GATE4_INPUT_INDEX_V0.2.json': '912a4992584b9eda13cfed869338b77eb86c269783046caa0e07ef84cc1e6e9a',
    new / 'MARKET-EU-IT_GATE4_IMAGE_IDENTITY_VERIFICATION_V0.2.json': '0ed8500e59e8592808b110026514ab4500df7c34a45fa994fb7d9636ff142d89',
    new / 'diagnostic_support/remediation-runtime.json': '80ca0ee99fe9d1e78ed98fff26283920e62ee75ba33fdb82cd0d83fae4e76320',
    new / 'MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.2.json': 'a5b0e25d7d294f5b486594a70b19fe7407b195180940daf7258f01f6aee90410',
    new / 'MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.2.json': 'deba8a2d8c1e10970dfc2d867fc7d694c7c08475e8960e37bd6b7b4fcb0fd116',
    new / 'MARKET-EU-IT_GATE4_FINDING_RESPONSE_IT-G4-PC-R01_V0.2.md': '5e2be1538eb1db1fc471a1dbb9892395b2c5723c143ffb32dafefdfccb857f1d',
    new / 'MARKET-EU-IT_GATE4_METADATA_REMEDIATION_REPORT_V0.2.md': '64cec9bcf01675387581da774349daa3fffc07245acdb2c10f13151336833e44',
    page / '05_review/MARKET-EU-IT_GATE4_EXECUTION_SELF_CHECK_V0.2.md': '13dd9c5ad8de67afcd57b7b0b88d7cd5c80bba5a0425db44da92972510d26559',
    page / '05_review/MARKET-EU-IT_GATE4_REREVIEW_SUBMISSION_V0.2.md': 'eca47d4738c1bc20460013e03fef1ce3861f2e24893ddddc241e6183e511fa93',
    page / 'MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.10_DRAFT.md': '21724c1c93ffbe52ff87c1cfefa4267388b5c4bece68e30662f4f4ca6d41a841',
}

checks = 0
failures = []


def check(condition, name, detail=''):
    global checks
    checks += 1
    if not condition:
        failures.append({'name': name, 'detail': detail})


for path, digest in expected.items():
    check(path.exists(), f'exists:{path}')
    if path.exists():
        check(sha(path) == digest, f'sha:{path}', sha(path))

freeze = json.loads((new / 'MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.2.json').read_text(encoding='utf-8'))
evidence = json.loads((new / 'MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.2.json').read_text(encoding='utf-8'))
verification = json.loads((new / 'MARKET-EU-IT_GATE4_IMAGE_IDENTITY_VERIFICATION_V0.2.json').read_text(encoding='utf-8'))

check(len(freeze['inputs']) == 60, 'freeze-input-count')
for item in freeze['inputs']:
    path = Path(item['path'])
    check(path.exists(), f'input-exists:{path}')
    if path.exists():
        check(path.stat().st_size == item['bytes'], f'input-bytes:{path}')
        check(sha(path) == item['sha256'], f'input-sha:{path}')

check(len(evidence['images']) == 56, 'image-count')
check(len(verification['corrections']) == 19, 'correction-count')
check(sum('/focus-states/' in x['path'] for x in verification['corrections']) == 18, 'state-correction-count')
for item in evidence['images']:
    path = Path(item['path'])
    check(path.exists(), f'image-exists:{path}')
    if not path.exists():
        continue
    with Image.open(path) as image:
        dimensions = list(image.size)
        image.verify()
    check(path.stat().st_size == item['bytes'], f'image-bytes:{path}')
    check(sha(path) == item['sha256'], f'image-sha:{path}')
    check(dimensions == [item['physical_width'], item['physical_height']], f'image-dimensions:{path}', str(dimensions))
    check(item['dpr'] == 1, f'image-dpr:{path}')

direction = next(x for x in evidence['images'] if x['path'].endswith('1440-direction-risk.png'))
check(direction['physical_width'] == 1440 and direction['physical_height'] == 436 and direction['dpr'] == 1, 'direction-correction', str(direction))

for item in evidence['remediation_regression_images']:
    path = Path(item['path'])
    with Image.open(path) as image:
        dimensions = list(image.size)
        image.verify()
    check(path.stat().st_size == item['bytes'] and sha(path) == item['sha256'], f'regression-identity:{path}')
    check(dimensions == [item['physical_width'], item['physical_height']] and item['dpr'] == 1, f'regression-dimensions:{path}')

print(json.dumps({'checks': checks, 'passed': checks - len(failures), 'failed': len(failures), 'failures': failures}))
if failures:
    raise SystemExit(1)
