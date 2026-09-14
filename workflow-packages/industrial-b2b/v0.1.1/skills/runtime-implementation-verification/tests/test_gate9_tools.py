import hashlib
import json
import subprocess
import sys
import tempfile
import threading
import unittest
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


SKILL_DIR = Path(__file__).resolve().parents[1]
VALIDATOR = SKILL_DIR / "scripts" / "validate_evidence_manifest.py"
PREFLIGHT = SKILL_DIR / "scripts" / "gate9_preflight.py"


def run(*args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, *map(str, args)],
        text=True,
        capture_output=True,
        encoding="utf-8",
    )


class RuntimeHandler(BaseHTTPRequestHandler):
    body = b'<html><body>PAGE-1<script src="/_next/static/BUILD-123/_buildManifest.js"></script></body></html>'

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("X-Site-Scope", "fixture-industrial-pumps")
        self.end_headers()
        self.wfile.write(self.body)

    def log_message(self, *_args):
        pass


class Gate9ToolTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.repo = self.root / "repo"
        self.repo.mkdir()
        subprocess.run(["git", "init", "-b", "main"], cwd=self.repo, check=True, capture_output=True)
        subprocess.run(["git", "config", "user.email", "gate9@example.invalid"], cwd=self.repo, check=True)
        subprocess.run(["git", "config", "user.name", "Gate9 Test"], cwd=self.repo, check=True)

        evidence = self.repo / "evidence" / "result.json"
        evidence.parent.mkdir()
        evidence.write_text('{"passed": true}\n', encoding="utf-8")
        receipt = self.repo / "RETURN.md"
        receipt.write_text("# Gate8 return\n\nEVIDENCE: evidence/result.json\n", encoding="utf-8")
        build = self.repo / "build-output"
        build.mkdir()
        (build / "BUILD_ID").write_text("BUILD-123\n", encoding="utf-8")
        subprocess.run(["git", "add", "."], cwd=self.repo, check=True)
        subprocess.run(["git", "commit", "-m", "fixture"], cwd=self.repo, check=True, capture_output=True)
        self.head = subprocess.run(
            ["git", "rev-parse", "HEAD"], cwd=self.repo, check=True, capture_output=True, text=True
        ).stdout.strip()
        self.evidence_hash = hashlib.sha256(evidence.read_bytes()).hexdigest()

    def tearDown(self):
        self.temp.cleanup()

    def manifest(self, base_url: str) -> dict:
        return {
            "schema_version": "gate8-evidence-manifest-v1.0",
            "handoff_id": "G8-TEST-01",
            "gate8_task_id": "thread-test-01",
            "site_scope": "fixture-industrial-pumps",
            "receipt_path": "RETURN.md",
            "pages": [{"page_id": "PAGE-1", "acceptance_condition_ids": ["AC-1"], "runtime_path": "/page-1"}],
            "git": {
                "repository": str(self.repo),
                "branch": "main",
                "baseline_commit": self.head,
                "implementation_commit": self.head,
                "evidence_head": self.head,
                "clean_checked_at": "2026-09-08T12:00:00+08:00"
            },
            "build": {
                "directory": "build-output",
                "build_id": "BUILD-123",
                "implementation_commit": self.head
            },
            "runtime": {
                "base_url": base_url,
                "site_scope": "fixture-industrial-pumps",
                "environment_type": "local-production",
                "started_at": "2026-09-08T12:00:00+08:00",
                "hold_until": "GATE9_PASS_OR_RETURN_NOTICE",
                "checks": [{"path": "/page-1", "expected_status": 200, "contains": ["PAGE-1"]}]
            },
            "evidence": [{
                "path": "evidence/result.json",
                "sha256": self.evidence_hash,
                "evidence_type": "TEST_RESULT",
                "proves": ["AC-1"],
                "command": "fixture-test",
                "environment": "fixture"
            }],
            "receipt_evidence_references": ["evidence/result.json"],
            "known_open_items": []
        }

    def write_manifest(self, payload: dict) -> Path:
        path = self.root / "gate8_evidence_manifest.json"
        path.write_text(json.dumps(payload), encoding="utf-8")
        return path

    def test_validator_accepts_complete_tracked_manifest(self):
        result = run(VALIDATOR, self.write_manifest(self.manifest("http://127.0.0.1:1")))
        self.assertEqual(result.returncode, 0, result.stderr + result.stdout)
        self.assertEqual(json.loads(result.stdout)["status"], "PASS")

    def test_validator_rejects_missing_or_undeclared_evidence(self):
        payload = self.manifest("http://127.0.0.1:1")
        payload["evidence"][0]["path"] = "evidence/missing.json"
        payload["receipt_evidence_references"] = ["evidence/not-declared.json"]
        result = run(VALIDATOR, self.write_manifest(payload))
        self.assertEqual(result.returncode, 2, result.stderr + result.stdout)
        output = json.loads(result.stdout)
        self.assertEqual(output["status"], "EVIDENCE_INCOMPLETE")
        self.assertTrue(any("missing" in item["id"] for item in output["checks"] if item["result"] == "FAIL"))
        self.assertTrue(any("receipt" in item["id"] for item in output["checks"] if item["result"] == "FAIL"))

    def test_validator_rejects_receipt_reference_not_declared_by_manifest(self):
        extra = self.repo / "evidence" / "extra.json"
        extra.write_text('{"extra": true}\n', encoding="utf-8")
        (self.repo / "RETURN.md").write_text(
            "# Gate8 return\n\nEVIDENCE: evidence/result.json\nEVIDENCE: evidence/extra.json\n",
            encoding="utf-8",
        )
        subprocess.run(["git", "add", "."], cwd=self.repo, check=True)
        subprocess.run(["git", "commit", "-m", "receipt adds undeclared evidence"], cwd=self.repo, check=True, capture_output=True)
        new_head = subprocess.run(
            ["git", "rev-parse", "HEAD"], cwd=self.repo, check=True, capture_output=True, text=True
        ).stdout.strip()
        payload = self.manifest("http://127.0.0.1:1")
        payload["git"]["evidence_head"] = new_head
        result = run(VALIDATOR, self.write_manifest(payload))
        self.assertEqual(result.returncode, 2, result.stderr + result.stdout)
        output = json.loads(result.stdout)
        self.assertEqual(output["status"], "EVIDENCE_INCOMPLETE")
        self.assertTrue(any(item["id"] == "receipt_actual_references" and item["result"] == "FAIL" for item in output["checks"]))

    def test_preflight_passes_bound_runtime_and_identity(self):
        server = ThreadingHTTPServer(("127.0.0.1", 0), RuntimeHandler)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            url = f"http://127.0.0.1:{server.server_port}"
            result = run(PREFLIGHT, self.write_manifest(self.manifest(url)), "--rounds", "2")
        finally:
            server.shutdown()
            server.server_close()
        self.assertEqual(result.returncode, 0, result.stderr + result.stdout)
        output = json.loads(result.stdout)
        self.assertEqual(output["status"], "PASS")
        self.assertEqual(output["runtime"]["successful_requests"], 2)

    def test_preflight_accepts_next_16_rsc_build_marker(self):
        class Next16Handler(RuntimeHandler):
            body = (
                b'<html><body>PAGE-1<script>'
                b'self.__next_f.push([1,"{\\"b\\":\\"BUILD-123\\"}"])'
                b'</script></body></html>'
            )

        server = ThreadingHTTPServer(("127.0.0.1", 0), Next16Handler)
        threading.Thread(target=server.serve_forever, daemon=True).start()
        try:
            url = f"http://127.0.0.1:{server.server_port}"
            result = run(PREFLIGHT, self.write_manifest(self.manifest(url)))
        finally:
            server.shutdown()
            server.server_close()
        self.assertEqual(result.returncode, 0, result.stderr + result.stdout)
        output = json.loads(result.stdout)
        self.assertEqual(output["status"], "PASS")
        self.assertFalse(output["runtime"]["observations"][0]["build_marker_missing"])

    def test_preflight_classifies_unreachable_runtime(self):
        result = run(PREFLIGHT, self.write_manifest(self.manifest("http://127.0.0.1:1")), "--timeout", "0.2")
        self.assertEqual(result.returncode, 3, result.stderr + result.stdout)
        self.assertEqual(json.loads(result.stdout)["status"], "ENVIRONMENT_FAILURE")

    def test_preflight_classifies_wrong_page_identity(self):
        class WrongHandler(RuntimeHandler):
            body = b'<html><body>WRONG-PAGE<script src="/_next/static/BUILD-123/_buildManifest.js"></script></body></html>'

        server = ThreadingHTTPServer(("127.0.0.1", 0), WrongHandler)
        threading.Thread(target=server.serve_forever, daemon=True).start()
        try:
            url = f"http://127.0.0.1:{server.server_port}"
            result = run(PREFLIGHT, self.write_manifest(self.manifest(url)))
        finally:
            server.shutdown()
            server.server_close()
        self.assertEqual(result.returncode, 4, result.stderr + result.stdout)
        self.assertEqual(json.loads(result.stdout)["status"], "IMPLEMENTATION_FAILURE")

    def test_preflight_accepts_expected_http_error_status(self):
        class NotFoundHandler(RuntimeHandler):
            def do_GET(self):
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                self.wfile.write(self.body)

        server = ThreadingHTTPServer(("127.0.0.1", 0), NotFoundHandler)
        threading.Thread(target=server.serve_forever, daemon=True).start()
        try:
            url = f"http://127.0.0.1:{server.server_port}"
            payload = self.manifest(url)
            payload["runtime"]["checks"][0]["expected_status"] = 404
            result = run(PREFLIGHT, self.write_manifest(payload))
        finally:
            server.shutdown()
            server.server_close()
        self.assertEqual(result.returncode, 0, result.stderr + result.stdout)
        self.assertEqual(json.loads(result.stdout)["status"], "PASS")


if __name__ == "__main__":
    unittest.main()
