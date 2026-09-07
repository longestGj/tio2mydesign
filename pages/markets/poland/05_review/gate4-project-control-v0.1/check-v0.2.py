"""Read-only artifact verification; writes only the controller's new evidence record."""
from pathlib import Path
import hashlib
import json
import re
import difflib
from PIL import Image

ROOT = Path('D:/23MySec')
BASE = ROOT / 'pages/markets/poland/04_planning'
OUT = ROOT / 'pages/markets/poland/05_review/gate4-project-control-v0.1/controller-asset-check-v0.2.json'
if OUT.exists():
    raise SystemExit('Evidence already exists; use a new record rather than overwrite.')

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def read(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))

findings = []
checks = []
for version in ['0.1', '0.2']:
    folder = BASE / ('gate4-v' + version)
    freeze_path = folder / 'approval_core/source-freeze.json'
    freeze = read(freeze_path)
    exports = read(folder / 'approval_core/export-inventory.json')
    inventory = read(folder / 'asset-inventory.json')
    records = freeze['dependencies'] + freeze['inputs'] + exports['captures'] + inventory['files']
    for item in records:
        path = Path(item['path'])
        errors = []
        if not path.is_file():
            errors.append('MISSING')
        else:
            if path.stat().st_size != item['bytes']:
                errors.append('BYTES')
            if sha(path) != item['sha256']:
                errors.append('SHA256')
            if item.get('physicalWidth'):
                with Image.open(path) as im:
                    if im.size != (item['physicalWidth'], item['physicalHeight']):
                        errors.append('PNG_DIMENSIONS')
        if errors:
            findings.append({'version': version, 'path': str(path), 'errors': errors})
    if exports['sourceFreezeSha256'] != sha(freeze_path):
        findings.append({'version': version, 'error': 'EXPORT_FREEZE_BINDING'})
    checks.append({'version': version, 'freezeId': freeze['freezeId'],
                   'recordCountIncludingRepeatedReferences': len(records),
                   'sourceFreezeSha256': sha(freeze_path),
                   'exportInventorySha256': sha(folder / 'approval_core/export-inventory.json'),
                   'assetInventorySha256': sha(folder / 'asset-inventory.json'),
                   'captureCount': len(exports['captures'])})

old = BASE / 'gate4-v0.1'
new = BASE / 'gate4-v0.2'
html1 = (old / 'MARKET-EU-PL_GATE4_VISUAL_SAMPLES_V0.1.html').read_bytes()
html2 = (new / 'MARKET-EU-PL_GATE4_VISUAL_SAMPLES_V0.2.html').read_bytes()
g3 = (BASE / 'gate3-v0.1/MARKET-EU-PL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html').read_bytes()
main = lambda data: re.search(rb'<main\b.*?</main>', data, re.S).group()
css1 = (old / 'visual-rules.css').read_text(encoding='utf-8-sig')
css2 = (new / 'visual-rules.css').read_text(encoding='utf-8-sig')
invariants = {'htmlByteIdenticalToV01': html1 == html2,
              'mainByteIdenticalToApprovedG3': main(html2) == main(g3),
              'cssOnlyAppendToV01': css2.startswith(css1),
              'cssDiff': list(difflib.unified_diff(css1.splitlines(), css2.splitlines()))}
for field in ['htmlByteIdenticalToV01', 'mainByteIdenticalToApprovedG3', 'cssOnlyAppendToV01']:
    if not invariants[field]:
        findings.append({'error': field})

comparisons = []
for record in read(old / 'approval_core/export-inventory.json')['captures']:
    p1 = Path(record['path'])
    p2 = new / 'approval_core' / p1.name
    same = p2.is_file() and sha(p1) == sha(p2)
    comparisons.append({'file': p1.name, 'byteIdentical': same})

result = {'date': '2026-09-07', 'purpose': 'Artifact identity and scope verification, not runtime or visual approval',
          'checks': checks, 'invariants': invariants, 'prior18CaptureComparison': comparisons,
          'rootOriginalSizeViews': ['1440-pl-04-support-hover.png', '1440-pl-05-support-hover.png',
             '768-pl-04-support-hover.png', '768-pl-05-support-hover.png',
             '390-pl-04-support-hover.png', '390-pl-05-support-hover.png',
             '390-pl-04-support-keyboard-focus.png', '390-pl-05-support-keyboard-focus.png'],
          'rootNewViewsObservation': 'Eight new state PNGs opened at original size; both supporting labels, pale hover surface and keyboard outlines visible. Viewport clipping outside the target is not claimed as complete section evidence.',
          'findings': findings}
OUT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(result, ensure_ascii=False, indent=2))
if findings:
    raise SystemExit(1)
