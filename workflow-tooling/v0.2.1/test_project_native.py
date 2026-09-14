import importlib.util
from pathlib import Path
import re
import tempfile
import tomllib
import unittest

spec=importlib.util.spec_from_file_location('native',Path(__file__).with_name('project_native.py'))
n=importlib.util.module_from_spec(spec);spec.loader.exec_module(n)
PACKAGE=Path(__file__).resolve().parents[2]/'workflow-packages/industrial-b2b/v0.1.1'

class NativeTests(unittest.TestCase):
    def test_five_packages_have_empty_indexes_and_contract_consumers(self):
        files=n.render(PACKAGE)
        self.assertEqual(6,len([p for p in files if p.startswith('Website_Preparation/')]))
        for key,folder,role,title in n.WORK_PACKAGES:
            self.assertIn('尚未登记',files[f'Website_Preparation/{folder}/README.md'].decode('utf-8'))
            self.assertIn('WEBSITE_PREPARATION_STORAGE_V1.0.md',files[f'agents/{role}/agent.md'].decode('utf-8'))
        for path in ['agents/project-orchestrator/agent.md','.workflow/contracts/instance-bindings.md','.workflow/templates/site-preparation-handoff.md']:
            self.assertIn('WEBSITE_PREPARATION_STORAGE_V1.0.md',files[path].decode('utf-8'))
    def test_native_discovery_and_unique_role_sources(self):
        files=n.render(PACKAGE)
        configs=[p for p in files if p.startswith('.codex/agents/') and p.endswith('.toml')]
        skills=[p for p in files if p.startswith('.agents/skills/') and p.endswith('/SKILL.md')]
        self.assertEqual(15,len(configs));self.assertEqual(9,len(skills))
        for p in configs:
            c=tomllib.loads(files[p].decode('utf-8'))
            role='agents/'+c['name']+'/agent.md'
            self.assertIn(role,files)
            self.assertIn(role,c['developer_instructions'])
            self.assertNotIn('model',c)
    def test_all_project_markdown_links_resolve_after_projection(self):
        files=n.render(PACKAGE);self.assertGreater(len(files),60)
        with tempfile.TemporaryDirectory() as t:
            root=Path(t)
            for name,data in files.items():
                p=root/name;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data)
            for name,data in files.items():
                if not name.endswith('.md'):continue
                for link in re.findall(r'\[[^\]]*\]\(([^)]+)\)',data.decode('utf-8')):
                    path=link.strip('<>').split('#')[0]
                    if not path or re.match(r'^[a-z]+:',path):continue
                    target=(root/name).parent/path
                    self.assertTrue(target.exists(),f'{name}: {link}')
                    self.assertTrue(target.resolve().is_relative_to(root.resolve()))
    def test_shipped_scripts_are_not_rewritten(self):
        files=n.render(PACKAGE)
        source=PACKAGE/'skills/runtime-implementation-verification/scripts/gate9_preflight.py'
        self.assertEqual(source.read_bytes(),files.get('.agents/skills/runtime-implementation-verification/scripts/gate9_preflight.py'))

if __name__=='__main__':unittest.main()
