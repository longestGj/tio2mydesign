"""End-to-end installation tests against the complete portable package."""
import copy
import importlib.util
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

TOOL = Path(__file__).parents[1] / 'bootstrap.py'
SOURCE = Path(os.environ.get('WF_TEST_PACKAGE', str(Path(__file__).resolve().parents[3] / 'workflow-packages/industrial-b2b/v0.1.1'))).resolve()
spec = importlib.util.spec_from_file_location('isolation_bootstrap', TOOL)
b = importlib.util.module_from_spec(spec); spec.loader.exec_module(b)

class IsolationTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.site = self.root / 'site'; self.site.mkdir()
        self.package = self.root / 'package'; shutil.copytree(SOURCE, self.package)
        version = json.loads((self.package / 'release-manifest.json').read_text(encoding='utf-8'))['version']
        self.config = {'format_version': 1, 'site_id': 'industrial-pumps', 'project_root': str(self.site),
                       'package_version': version, 'profile': 'wordpress-nextjs',
                       'bindings': {k: '.workflow/INSTANCE_ENTRY.md' for k in ('rules','status','index')}, 'integration': {}}

    def install(self):
        return b.apply(self.package, self.config, b.plan(self.package, self.config), allow_candidate=True)

    def test_full_package_offline_copy_and_repeat(self):
        self.assertEqual('INSTALLED', self.install()['status'])
        installed = self.site / '.workflow/package'
        self.assertEqual(15, len(list(installed.glob('agents/*/agent.md'))))
        self.assertEqual(9, len(list(installed.glob('skills/*/SKILL.md'))))
        for p in self.package.rglob('*'):
            if p.is_file(): self.assertEqual(p.read_bytes(), (installed/p.relative_to(self.package)).read_bytes())
        before = {str(p): p.stat().st_mtime_ns for p in installed.rglob('*') if p.is_file()}
        self.assertEqual('UNCHANGED', self.install()['status'])
        self.assertEqual(before, {str(p): p.stat().st_mtime_ns for p in installed.rglob('*') if p.is_file()})
        lock=json.loads((self.site/'.workflow/workflow.lock.json').read_text())
        self.assertEqual('INSTALLED_ONLY_NO_STAGE_APPROVAL',lock['phase'])
        # Independently copied package remains valid without consulting the source directory.
        self.assertEqual(64, len(b.load_package(installed)[1]))

    def test_existing_governance_and_state_preserved_after_explicit_merge(self):
        rule = self.site/'AGENTS.md'; rule.write_bytes(b'User rules\n')
        state = self.site/'state.md'; state.write_bytes(b'RESEARCH IN PROGRESS')
        self.config['bindings'].update(rules='AGENTS.md',status='state.md',index='state.md')
        self.config['integration']={'AGENTS.md':'Read .workflow/INSTANCE_ENTRY.md'}
        blocked=b.plan(self.package,self.config)
        self.assertEqual('BLOCKED',blocked['status'])
        with self.assertRaises(ValueError): b.apply(self.package,self.config,blocked,True)
        self.assertEqual(b'User rules\n',rule.read_bytes())
        rule.write_text('User rules\nRead .workflow/INSTANCE_ENTRY.md',encoding='utf-8')
        before=rule.read_bytes()
        self.install()
        self.assertEqual(before,rule.read_bytes()); self.assertEqual(b'RESEARCH IN PROGRESS',state.read_bytes())
        self.assertFalse((self.site/'PROJECT_STATUS.md').exists())

    def test_missing_schema_fails_without_writes(self):
        (self.package/'contracts/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json').unlink()
        with self.assertRaises((ValueError,OSError)):self.install()
        self.assertEqual([],list(self.site.iterdir()))

    def test_inventory_and_identity_drift_rejected(self):
        for name in ['README.md','unexpected.txt']:
            with self.subTest(name=name):
                p=self.package/name; original=p.read_bytes() if p.exists() else None
                p.write_bytes(b'changed')
                with self.assertRaises(ValueError):self.install()
                self.assertEqual([],list(self.site.iterdir()))
                if original is None:p.unlink()
                else:p.write_bytes(original)

    def test_scope_and_config_changes_cannot_reuse_old_plan(self):
        self.config['site_scope']='pumps-site'
        old=b.plan(self.package,self.config)
        self.config['site_scope']='other-site'
        with self.assertRaises(ValueError):b.apply(self.package,self.config,old,True)
        self.assertFalse((self.site/'.workflow').exists())
        self.config['site_scope']='bad/scope'
        with self.assertRaises(ValueError):b.plan(self.package,self.config)

    def test_commit_failure_leaves_no_half_install_and_retry_succeeds(self):
        old=b.plan(self.package,self.config)
        # Inject only the OS publication failure; staging and validation remain real.
        with patch.object(b.os,'rename',side_effect=OSError('injected publication failure')):
            with self.assertRaises(OSError):b.apply(self.package,self.config,old,True)
        self.assertEqual([],list(self.site.iterdir()))
        self.assertEqual('INSTALLED',self.install()['status'])

    def test_partial_install_and_upgrade_are_not_overwritten(self):
        self.install()
        (self.site/'.workflow/package/README.md').unlink()
        self.assertEqual('BLOCKED',b.plan(self.package,self.config)['status'])
        with self.assertRaises(ValueError):self.install()
        self.config['package_version']='future-version'
        with self.assertRaises(ValueError):self.install()

    @unittest.skipUnless(os.name=='nt','Windows junction behavior')
    def test_junction_binding_cannot_escape(self):
        outside=self.root/'outside';outside.mkdir();(outside/'rules.md').write_bytes(b'outside')
        junction=self.site/'jump'
        command=f"New-Item -ItemType Junction -Path '{junction}' -Target '{outside}' | Out-Null"
        result=subprocess.run(['powershell','-NoProfile','-Command',command],capture_output=True,text=True)
        self.assertEqual(0,result.returncode,result.stderr)
        try:
            self.config['bindings']['rules']='jump/rules.md'
            with self.assertRaises(ValueError):b.plan(self.package,self.config)
            self.assertEqual(b'outside',(outside/'rules.md').read_bytes())
        finally:os.rmdir(junction)  # Remove the junction itself, never the target tree.

    def test_malformed_config_cli_returns_json_error_not_traceback(self):
        self.config['integration']=None
        config=self.root/'config.json';config.write_bytes(b.encoded(self.config))
        result=subprocess.run([sys.executable,'-B',str(TOOL),'plan','--package',str(self.package),'--config',str(config)],capture_output=True,text=True)
        self.assertEqual(2,result.returncode,result.stderr)
        self.assertEqual('ERROR',json.loads(result.stdout)['status'])
        self.assertEqual('',result.stderr)

    def test_windows_alias_characters_rejected_before_filesystem_use(self):
        for path in ['bad?/file','bad*/file','bad|/file','bad</file']:
            with self.subTest(path=path):
                self.config['bindings']['facts']=path
                with self.assertRaises(ValueError):b.plan(self.package,self.config)

if __name__=='__main__':unittest.main()
