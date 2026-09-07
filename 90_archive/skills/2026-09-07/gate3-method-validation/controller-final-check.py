from pathlib import Path
import hashlib, json, struct

root = Path(__file__).resolve().parent
checks = []
for label in 'abcd':
    folder = root / f'specimen-{label}'
    manifest = json.loads((folder / 'assets.json').read_text(encoding='utf-8'))
    source_hash = hashlib.sha256((folder / 'source.html').read_bytes()).hexdigest()
    assert source_hash == manifest['sourceSha256']
    for item in manifest['assets']:
        data = (folder / item['path']).read_bytes()
        assert len(data) == item['bytes']
        assert hashlib.sha256(data).hexdigest() == item['sha256']
        assert source_hash == item['sourceSha256']
        width, height = struct.unpack('>II', data[16:24])
        assert width == item['logicalWidth'] * item['dpr']
        checks.append({'candidate': label, 'asset': item['path'], 'sourceSha256': source_hash,
                       'dimensions': [width, height], 'identityVerified': True})
methods = []
for method, snapshot in [('responsive-wireframe-design', 'responsive-wireframe-design-v1.md'),
                         ('layout-interaction-verification', 'layout-interaction-verification-v2.md')]:
    current = Path('D:/23MySec/skills') / method / 'SKILL.md'
    assert current.read_bytes() == (root / 'method-snapshots' / snapshot).read_bytes()
    methods.append({'method': method, 'snapshot': snapshot,
                    'sha256': hashlib.sha256(current.read_bytes()).hexdigest()})
for review in ['review-a', 'review-b', 'review-c', 'review-d', 'review-design']:
    assert (root / review / 'report.md').is_file(), review
result = {'controlledAssetsVerified': len(checks), 'assets': checks, 'currentMethods': methods,
          'reportsPresent': 5, 'failures': []}
(root / 'controller-evidence/final-check.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
print(json.dumps({'controlledAssetsVerified': len(checks), 'reportsPresent': 5, 'failures': []}))
