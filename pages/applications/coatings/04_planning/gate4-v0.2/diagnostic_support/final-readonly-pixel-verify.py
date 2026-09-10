import hashlib
import json
from pathlib import Path
from PIL import Image

root = Path('D:/23MySec/pages/applications/coatings/04_planning/gate4-v0.2')
verification = json.loads((root / 'approval_core/inherited-asset-verification.json').read_text(encoding='utf-8'))
evidence = json.loads((root / 'evidence_index.json').read_text(encoding='utf-8'))


def file_sha(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open('rb') as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b''):
            digest.update(chunk)
    return digest.hexdigest()


checks = 0
failures = []
for item in verification['formal_assets']:
    path = Path(item['path'])
    checks += 1
    if not path.exists():
        failures.append({'path': path.as_posix(), 'reason': 'missing'})
        continue
    with Image.open(path) as image:
        rgba = image.convert('RGBA')
        actual = {
            'bytes': path.stat().st_size,
            'sha256': file_sha(path),
            'dimensions': list(rgba.size),
            'pixel_sha256_rgba': hashlib.sha256(rgba.tobytes()).hexdigest(),
        }
    expected = {
        'bytes': item['actual_bytes'],
        'sha256': item['actual_sha256'],
        'dimensions': item['actual_dimensions'],
        'pixel_sha256_rgba': item['pixel_sha256_rgba'],
    }
    if actual != expected:
        failures.append({'path': path.as_posix(), 'expected': expected, 'actual': actual})

expected_new_dimensions = {
    '1440-full.png': [1440, 10070],
    '768-full.png': [768, 11531],
    '390-full.png': [390, 17825],
    '1440-primary-cta-hover.png': [1120, 52],
    '768-primary-cta-hover.png': [720, 53],
    '390-primary-cta-hover.png': [350, 118],
}
for item in evidence['new_regression_images']:
    path = Path(item['path'])
    checks += 1
    if not path.exists():
        failures.append({'path': path.as_posix(), 'reason': 'missing'})
        continue
    with Image.open(path) as image:
        actual_dimensions = list(image.size)
        image.verify()
    expected_dimensions = expected_new_dimensions[path.name]
    if path.stat().st_size != item['bytes'] or file_sha(path) != item['sha256'] or actual_dimensions != expected_dimensions:
        failures.append({
            'path': path.as_posix(),
            'expected': {'bytes': item['bytes'], 'sha256': item['sha256'], 'dimensions': expected_dimensions},
            'actual': {'bytes': path.stat().st_size, 'sha256': file_sha(path), 'dimensions': actual_dimensions},
        })

print(json.dumps({'checks': checks, 'passed': checks - len(failures), 'failed': len(failures), 'failures': failures}))
if failures:
    raise SystemExit(1)
