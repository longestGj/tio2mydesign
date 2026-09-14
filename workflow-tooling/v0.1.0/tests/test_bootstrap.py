"""Real filesystem tests: overwrite, stale plans and package drift are regressions."""
import copy
import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('bootstrap', Path(__file__).parents[1] / 'bootstrap.py')
b = importlib.util.module_from_spec(spec)
spec.loader.exec_module(b)

class BootstrapTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.pkg = self.root / 'package'
        self.pkg.mkdir()
        (self.pkg / 'README.md').write_bytes(b'workflow fixture\n')
        self.manifest = {'package': 'industrial-b2b', 'version': '0.1.0', 'installable': False,
                         'files': [{'path': 'README.md', 'bytes': 17,
                                    'sha256': hashlib.sha256(b'workflow fixture\n').hexdigest()}]}
        # Hand-written fixture byte length is 17.
        self.save_manifest()
        self.site = self.root / 'site'
        self.site.mkdir()
        self.config = {'format_version': 1, 'site_id': 'pump-test', 'project_root': str(self.site),
                       'package_version': '0.1.0', 'profile': 'wordpress-nextjs',
                       'bindings': {'rules': '.workflow/INSTANCE_ENTRY.md',
                                    'status': '.workflow/INSTANCE_ENTRY.md',
                                    'index': '.workflow/INSTANCE_ENTRY.md'}, 'integration': {}}

    def save_manifest(self):
        (self.pkg / 'release-manifest.json').write_text(json.dumps(self.manifest), encoding='utf-8')

    def test_plan_does_not_write_and_install_is_pinned_and_repeat_keeps_mtime(self):
        p = b.plan(self.pkg, self.config)
        self.assertEqual('READY', p['status'])
        self.assertEqual([], list(self.site.iterdir()))
        b.apply(self.pkg, self.config, p, allow_candidate=True)
        installed = self.site / '.workflow/package/README.md'
        self.assertEqual(b'workflow fixture\n', installed.read_bytes())
        before = installed.stat().st_mtime_ns
        lock = json.loads((self.site / '.workflow/workflow.lock.json').read_text())
        self.assertEqual(hashlib.sha256((self.pkg / 'release-manifest.json').read_bytes()).hexdigest(), lock['manifest_sha256'])
        p2 = b.plan(self.pkg, self.config)
        self.assertTrue(all(f['action'] == 'KEEP' for f in p2['files']))
        b.apply(self.pkg, self.config, p2, allow_candidate=True)
        self.assertEqual(before, installed.stat().st_mtime_ns)

    def test_existing_rules_require_merge_and_never_get_overwritten(self):
        (self.site / 'AGENTS.md').write_bytes(b'user rules')
        self.config['bindings']['rules'] = 'AGENTS.md'
        self.config['integration'] = {'AGENTS.md': 'Read .workflow/INSTANCE_ENTRY.md'}
        p = b.plan(self.pkg, self.config)
        self.assertEqual('BLOCKED', p['status'])
        self.assertIn('MERGE_REQUIRED', [f['action'] for f in p['files']])
        with self.assertRaises(ValueError): b.apply(self.pkg, self.config, p, allow_candidate=True)
        self.assertEqual(b'user rules', (self.site / 'AGENTS.md').read_bytes())
        self.assertFalse((self.site / '.workflow').exists())

    def test_changed_installed_file_blocks_whole_transaction(self):
        b.apply(self.pkg, self.config, b.plan(self.pkg, self.config), allow_candidate=True)
        p = self.site / '.workflow/package/README.md'
        p.write_bytes(b'user edit')
        result = b.plan(self.pkg, self.config)
        self.assertEqual('BLOCKED', result['status'])
        with self.assertRaises(ValueError): b.apply(self.pkg, self.config, result, allow_candidate=True)
        self.assertEqual(b'user edit', p.read_bytes())

    def test_source_drift_is_rejected_before_write(self):
        (self.pkg / 'README.md').write_bytes(b'changed')
        with self.assertRaises(ValueError): b.plan(self.pkg, self.config)
        self.assertEqual([], list(self.site.iterdir()))

    def test_parent_and_windows_paths_are_rejected(self):
        for path in ['../outside', 'C:/outside', 'dir/../../x', 'dir\\x', 'a:stream', '/outside']:
            with self.subTest(path=path):
                c = copy.deepcopy(self.config); c['bindings']['rules'] = path
                with self.assertRaises(ValueError): b.plan(self.pkg, c)

    def test_stale_input_identity_blocks_install(self):
        (self.site / 'AGENTS.md').write_text('Read .workflow/INSTANCE_ENTRY.md', encoding='utf-8')
        self.config['bindings']['rules'] = 'AGENTS.md'
        self.config['integration'] = {'AGENTS.md': 'Read .workflow/INSTANCE_ENTRY.md'}
        p = b.plan(self.pkg, self.config)
        (self.site / 'AGENTS.md').write_text('Changed rules', encoding='utf-8')
        with self.assertRaises(ValueError): b.apply(self.pkg, self.config, p, allow_candidate=True)
        self.assertFalse((self.site / '.workflow').exists())

    def test_candidate_cannot_install_without_explicit_test_flag(self):
        with self.assertRaises(ValueError): b.apply(self.pkg, self.config, b.plan(self.pkg, self.config))
        self.assertEqual([], list(self.site.iterdir()))

if __name__ == '__main__': unittest.main()
