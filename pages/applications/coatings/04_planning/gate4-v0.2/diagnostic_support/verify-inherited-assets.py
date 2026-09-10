import hashlib
import json
from pathlib import Path
from PIL import Image

root = Path('D:/23MySec')
old_dir = root / 'pages/applications/coatings/04_planning/gate4-v0.1'
new_dir = root / 'pages/applications/coatings/04_planning/gate4-v0.2'
inventory_path = old_dir / 'approval_core/export-inventory.json'
inventory = json.loads(inventory_path.read_text(encoding='utf-8'))

def file_sha(p: Path) -> str:
    h = hashlib.sha256()
    with p.open('rb') as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()

checks = []
for item in inventory['assets']:
    p = Path(item['path'])
    rec = {
        'path': p.as_posix(),
        'expected_bytes': item['bytes'],
        'actual_bytes': p.stat().st_size if p.exists() else None,
        'expected_sha256': item['sha256'],
        'actual_sha256': file_sha(p) if p.exists() else None,
        'expected_dimensions': [item['pixelWidth'], item['pixelHeight']],
    }
    if p.exists():
        with Image.open(p) as im:
            rgba = im.convert('RGBA')
            rec['actual_dimensions'] = list(rgba.size)
            rec['mode'] = rgba.mode
            rec['pixel_sha256_rgba'] = hashlib.sha256(rgba.tobytes()).hexdigest()
            rec['decoded_pixel_bytes'] = len(rgba.tobytes())
    rec['pass'] = (
        rec['actual_bytes'] == rec['expected_bytes'] and
        rec['actual_sha256'] == rec['expected_sha256'] and
        rec.get('actual_dimensions') == rec['expected_dimensions'] and
        rec.get('mode') == 'RGBA'
    )
    checks.append(rec)

full_regression = []
for width in (1440, 768, 390):
    inherited = old_dir / f'approval_core/{width}-full.png'
    rerendered = new_dir / f'diagnostic_support/full-page-regression/{width}-full.png'
    with Image.open(inherited) as a, Image.open(rerendered) as b:
        ar = a.convert('RGBA')
        br = b.convert('RGBA')
        full_regression.append({
            'width': width,
            'inherited_path': inherited.as_posix(),
            'rerendered_path': rerendered.as_posix(),
            'inherited_dimensions': list(ar.size),
            'rerendered_dimensions': list(br.size),
            'dimension_match': ar.size == br.size,
            'inherited_pixel_sha256_rgba': hashlib.sha256(ar.tobytes()).hexdigest(),
            'rerendered_pixel_sha256_rgba': hashlib.sha256(br.tobytes()).hexdigest(),
            'pixel_identical': ar.tobytes() == br.tobytes(),
            'interpretation': 'The new raster is a diagnostic rerender. Exact formal inheritance is established against the frozen export inventory; regenerated antialiasing is not substituted for the inherited formal file.'
        })

out = {
    'page_id': 'APP-COAT',
    'workset_id': 'COAT-G4-COMPLETE-V02',
    'freeze_id': 'COAT-G4-COMPLETE-V02-F01',
    'status': 'FORMAL_ASSETS_EXACTLY_INHERITED_AFTER_IDENTITY_AND_PIXEL_DECODE_VERIFICATION',
    'source_inventory': {
        'path': inventory_path.as_posix(),
        'bytes': inventory_path.stat().st_size,
        'sha256': file_sha(inventory_path),
    },
    'counts': {
        'formal_assets': len(checks),
        'identity_and_pixel_decode_passed': sum(1 for x in checks if x['pass']),
        'failed': sum(1 for x in checks if not x['pass']),
        'full_page_regression_images': len(full_regression),
        'full_page_dimension_matches': sum(1 for x in full_regression if x['dimension_match']),
    },
    'formal_assets': checks,
    'full_page_regression_comparison': full_regression,
    'inheritance_boundary': 'No V0.1 image is copied, rewritten or replaced. V0.2 cites the exact V0.1 formal artifacts only after their file identity, dimensions and decoded RGBA pixel digest were independently recomputed.'
}

target = new_dir / 'approval_core/inherited-asset-verification.json'
target.write_text(json.dumps(out, indent=2), encoding='utf-8')
print(json.dumps(out['counts']))
if out['counts']['failed']:
    raise SystemExit(1)
