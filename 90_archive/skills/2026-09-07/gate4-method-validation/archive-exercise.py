from pathlib import Path
import hashlib
import json
import shutil

source = Path(r'D:/23MySec/99_workspace/gate4-method-validation-2026-09-07').resolve()
target = Path(r'D:/23MySec/90_archive/skills/2026-09-07/gate4-method-validation').resolve()
allowed = Path(r'D:/23MySec/90_archive/skills/2026-09-07').resolve()
assert source.is_dir() and target.parent == allowed
assert not target.exists(), 'Preserve any existing archive; choose a new version.'

def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

entries = []
for path in sorted(source.rglob('*')):
    if path.is_file():
        assert not path.is_symlink(), f'Unexpected link: {path}'
        entries.append({'relative_path': path.relative_to(source).as_posix(),
                        'bytes': path.stat().st_size, 'sha256': digest(path)})
target.mkdir(parents=True)
for entry in entries:
    src = source / entry['relative_path']
    dst = target / entry['relative_path']
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    assert dst.stat().st_size == entry['bytes'] and digest(dst) == entry['sha256']
    assert digest(src) == entry['sha256'], f'Source changed during archival: {src}'
actual = sorted(p.relative_to(target).as_posix() for p in target.rglob('*') if p.is_file())
assert actual == sorted(e['relative_path'] for e in entries)
mapping = {'source_root': str(source), 'archive_root': str(target),
           'files': entries, 'file_count': len(entries),
           'bytes': sum(e['bytes'] for e in entries)}
(target / 'ARCHIVE_MAP.json').write_text(json.dumps(mapping, indent=2), encoding='utf-8')
(target / 'ARCHIVE_CHECK.json').write_text(json.dumps({
    'copied_files': len(entries), 'hash_mismatches': 0, 'path_count_matches': True,
    'bytes': mapping['bytes'], 'metadata_files_added_after_copy': 2,
    'working_originals_preserved': True
}, indent=2), encoding='utf-8')
print(json.dumps({'target': str(target), 'files': len(entries),
                  'bytes': mapping['bytes'], 'hash_mismatches': 0}))
