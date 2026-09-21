import hashlib
import json
import subprocess
import threading
from http.server import ThreadingHTTPServer
import unittest
import test_gate9_tools as legacy
from test_gate9_tools import RuntimeHandler, run, VALIDATOR, PREFLIGHT


class StaticArtifactTests(unittest.TestCase):
    setUp = legacy.Gate9ToolTests.setUp
    tearDown = legacy.Gate9ToolTests.tearDown
    manifest = legacy.Gate9ToolTests.manifest
    write_manifest = legacy.Gate9ToolTests.write_manifest
    def static_manifest(self, url='http://127.0.0.1:1'):
        payload = self.manifest(url)
        payload['schema_version'] = 'gate8-evidence-manifest-v1.1'
        payload.pop('site_scope')
        payload['runtime'].pop('site_scope')
        payload['git'] = {k: v for k, v in payload['git'].items() if k not in ('branch', 'clean_checked_at')}
        self.artifact = self.root / 'out'
        self.artifact.mkdir(exist_ok=True)
        self.body = b'<html><body>PAGE-1 static export</body></html>'
        (self.artifact / 'index.html').write_bytes(self.body)
        files = [{'path': 'index.html', 'sha256': hashlib.sha256(self.body).hexdigest()}]
        binding = {'implementation_commit': self.head, 'files': files}
        (self.repo / 'evidence' / 'binding.json').write_text(json.dumps(binding), encoding='utf-8')
        subprocess.run(['git', 'add', '.'], cwd=self.repo, check=True, capture_output=True)
        subprocess.run(['git', 'commit', '-m', 'artifact binding'], cwd=self.repo, check=True, capture_output=True)
        evidence_head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=self.repo, text=True).strip()
        payload['git']['evidence_head'] = evidence_head
        payload['build'] = {'directory': str(self.artifact), 'implementation_commit': self.head,
                            'files': files, 'binding_evidence': 'evidence/binding.json'}
        payload['evidence'].append({'path': 'evidence/binding.json', 'sha256': hashlib.sha256((self.repo / 'evidence/binding.json').read_bytes()).hexdigest(),
                                    'evidence_type': 'IDENTITY', 'proves': ['AC-1'], 'command': 'fixture-export', 'environment': 'fixture'})
        payload['runtime']['checks'][0]['artifact_path'] = 'index.html'
        for item in payload['evidence']:
            blob = subprocess.check_output(['git', 'show', evidence_head + ':' + item['path']], cwd=self.repo)
            item['sha256'] = hashlib.sha256(blob).hexdigest()
        return payload

    def test_static_snapshot_accepts_advanced_dirty_checkout(self):
        payload = self.static_manifest()
        (self.repo / 'new-work.txt').write_text('unrelated work')
        subprocess.run(['git', 'add', 'new-work.txt'], cwd=self.repo, check=True, capture_output=True)
        subprocess.run(['git', 'commit', '-m', 'new work after frozen evidence'], cwd=self.repo, check=True, capture_output=True)
        (self.repo / 'RETURN.md').write_text('unrelated current receipt')
        result = run(VALIDATOR, self.write_manifest(payload))
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_static_rejects_tampered_artifact(self):
        payload = self.static_manifest()
        (self.artifact / 'index.html').write_text('changed')
        result = run(VALIDATOR, self.write_manifest(payload))
        self.assertEqual(result.returncode, 2, result.stdout + result.stderr)

    def test_static_rejects_unlisted_artifact(self):
        payload = self.static_manifest()
        (self.artifact / 'extra.js').write_text('extra')
        self.assertEqual(run(VALIDATOR, self.write_manifest(payload)).returncode, 2)

    def test_static_rejects_traversal_and_missing_checks(self):
        payload = self.static_manifest()
        payload['build']['files'][0]['path'] = '../outside'
        self.assertEqual(run(VALIDATOR, self.write_manifest(payload)).returncode, 2)
        payload['runtime']['checks'] = []
        self.assertEqual(run(VALIDATOR, self.write_manifest(payload)).returncode, 2)

    def test_static_rejects_false_implementation_binding(self):
        payload = self.static_manifest()
        payload['build']['implementation_commit'] = payload['git']['evidence_head']
        self.assertEqual(run(VALIDATOR, self.write_manifest(payload)).returncode, 2)

    def test_static_runtime_requires_exact_artifact_bytes(self):
        payload = self.static_manifest()
        class Handler(RuntimeHandler):
            body = self.body
        server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
        threading.Thread(target=server.serve_forever, daemon=True).start()
        try:
            payload['runtime']['base_url'] = f'http://127.0.0.1:{server.server_port}'
            good = run(PREFLIGHT, self.write_manifest(payload), '--rounds', '2')
            self.assertEqual(good.returncode, 0, good.stdout + good.stderr)
            Handler.body = b'<html><body>PAGE-1 wrong candidate</body></html>'
            bad = run(PREFLIGHT, self.write_manifest(payload))
            self.assertEqual(bad.returncode, 4, bad.stdout + bad.stderr)
        finally:
            server.shutdown(); server.server_close()


if __name__ == '__main__':
    import unittest
    unittest.main()
