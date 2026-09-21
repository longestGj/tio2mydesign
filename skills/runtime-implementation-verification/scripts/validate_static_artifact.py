"""Read-only validation of committed evidence and an immutable static export."""
import hashlib
import json
import re
import subprocess
from pathlib import Path, PurePosixPath


def validate_static(manifest):
    checks = []
    def check(name, passed, detail=None):
        checks.append({'id': name, 'result': 'PASS' if passed else 'FAIL', 'detail': detail})
    try:
        import jsonschema
        schema = Path(__file__).resolve().parents[3] / 'docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.1.json'
        jsonschema.validate(manifest, json.loads(schema.read_text(encoding='utf-8')), format_checker=jsonschema.FormatChecker())
        check('static_schema', True)
        repo = Path(manifest['git']['repository']).resolve()
        def git(*args):
            return subprocess.run(['git', *args], cwd=repo, capture_output=True, check=True).stdout
        def digest(data):
            return hashlib.sha256(data).hexdigest()
        def relative(path):
            p = PurePosixPath(path)
            if p.is_absolute() or '..' in p.parts or ':' in path or '\\' in path or str(p) != path:
                raise ValueError('unsafe or noncanonical relative path: ' + path)
            return path
        g = manifest['git']
        for key in ('baseline_commit', 'implementation_commit', 'evidence_head'):
            git('cat-file', '-e', g[key] + '^{commit}')
        git('merge-base', '--is-ancestor', g['baseline_commit'], g['implementation_commit'])
        git('merge-base', '--is-ancestor', g['implementation_commit'], g['evidence_head'])
        check('commit_chain', True)
        evidence = {}
        from validate_evidence_manifest import SECRET_PATTERNS
        for item in manifest['evidence']:
            path = relative(item['path'])
            check('unique_evidence:' + path, path not in evidence)
            data = git('show', g['evidence_head'] + ':' + path)
            check('evidence_hash:' + path, digest(data) == item['sha256'].lower())
            check('evidence_secret_scan:' + path, not any(p.search(data) for p in SECRET_PATTERNS))
            evidence[path] = data
        receipt = git('show', g['evidence_head'] + ':' + relative(manifest['receipt_path']))
        refs = set(re.findall(r'(?m)^EVIDENCE:\s*(\S+)\s*$', receipt.decode('utf-8')))
        declared = set(manifest['receipt_evidence_references'])
        check('receipt_references', refs == declared and declared <= evidence.keys())
        check('receipt_secret_scan', not any(p.search(receipt) for p in SECRET_PATTERNS))
        build = manifest['build']
        check('implementation_binding', build['implementation_commit'] == g['implementation_commit'])
        binding = json.loads(evidence[build['binding_evidence']])
        check('committed_artifact_binding', binding == {'implementation_commit': g['implementation_commit'], 'files': build['files']})
        root = Path(build['directory'])
        if not root.is_absolute() or not root.is_dir() or root.is_symlink():
            raise ValueError('artifact directory must be an accessible absolute non-symlink directory')
        root = root.resolve()
        files = {}
        for item in build['files']:
            path = relative(item['path'])
            check('unique_artifact:' + path, path not in files)
            files[path] = item['sha256']
        actual = set()
        for p in root.rglob('*'):
            if p.is_symlink() or not p.resolve().is_relative_to(root):
                raise ValueError('artifact contains symlink or escaping path')
            if p.is_file():
                path = p.relative_to(root).as_posix(); actual.add(path)
                check('artifact_hash:' + path, path in files and digest(p.read_bytes()) == files.get(path))
        check('complete_artifact_inventory', actual == files.keys())
        paths = set()
        for c in manifest['runtime']['checks']:
            check('runtime_artifact:' + c['path'], relative(c['artifact_path']) in files)
            paths.add(c['path'])
        check('page_runtime_coverage', all(p['runtime_path'] in paths for p in manifest['pages']))
    except Exception as exc:
        check('static_validation_error', False, str(exc))
    return {'status': 'PASS' if checks and all(c['result'] == 'PASS' for c in checks) else 'EVIDENCE_INCOMPLETE',
            'handoff_id': manifest.get('handoff_id'), 'checks': checks}
