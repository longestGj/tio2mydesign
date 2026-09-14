"""Run the shipped runtime suite plus an explicit cross-site response case."""
import importlib.util
import json
import os
from pathlib import Path
import threading
from http.server import ThreadingHTTPServer

package = Path(os.environ.get('WF_TEST_PACKAGE', str(Path(__file__).resolve().parents[3] / 'workflow-packages/industrial-b2b/v0.1.1')))
source = package / 'skills/runtime-implementation-verification/tests/test_gate9_tools.py'
spec = importlib.util.spec_from_file_location('shipped_gate9_tests', source)
runtime = importlib.util.module_from_spec(spec); spec.loader.exec_module(runtime)

class RuntimeScopeTests(runtime.Gate9ToolTests):
    def test_runtime_wrong_site_scope_is_not_accepted(self):
        class OtherSite(runtime.RuntimeHandler):
            def do_GET(self):
                self.send_response(200)
                self.send_header('X-Site-Scope', 'different-industrial-site')
                self.end_headers()
                self.wfile.write(self.body)
        server = ThreadingHTTPServer(('127.0.0.1',0),OtherSite)
        threading.Thread(target=server.serve_forever,daemon=True).start()
        try:
            payload=self.manifest(f'http://127.0.0.1:{server.server_port}')
            result=runtime.run(runtime.PREFLIGHT,self.write_manifest(payload))
        finally:
            server.shutdown();server.server_close()
        self.assertEqual(4,result.returncode,result.stderr+result.stdout)
        report=json.loads(result.stdout)
        self.assertEqual('IMPLEMENTATION_FAILURE',report['status'])
        self.assertTrue(report['runtime']['observations'][0]['scope_mismatch'])
