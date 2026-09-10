import hashlib
import json
import sys
import urllib.error
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.scripts = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == "a" and values.get("href"):
            self.links.append(values["href"])
        if tag == "script" and values.get("src"):
            self.scripts.append(values["src"])


def fetch(url):
    request = urllib.request.Request(url, headers={"User-Agent": "Gate9-Independent-Probe/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=10) as response:
            return response.status, response.geturl(), response.read()
    except urllib.error.HTTPError as error:
        return error.code, error.geturl(), error.read()


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def main():
    manifest_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    runtime = sys.argv[3].rstrip("/")
    manifest_bytes = manifest_path.read_bytes()
    manifest = json.loads(manifest_bytes)
    pages = manifest.get("pages", [])
    if not pages:
        raise RuntimeError("manifest.pages is empty")

    page_results = []
    discovered_paths = set()
    script_urls = set()
    for page in pages:
        path = page.get("runtime_path", page.get("path")) if isinstance(page, dict) else page
        if not path:
            raise RuntimeError(f"page has no runtime path: {page!r}")
        url = urllib.parse.urljoin(runtime + "/", path.lstrip("/"))
        status, final_url, body = fetch(url)
        parser = LinkParser()
        parser.feed(body.decode("utf-8", errors="replace"))
        for href in parser.links:
            parsed = urllib.parse.urlparse(urllib.parse.urljoin(final_url, href))
            if parsed.netloc in {urllib.parse.urlparse(runtime).netloc, "www.tio2.my", "tio2.my"}:
                normalized = parsed.path or "/"
                if normalized.startswith("/"):
                    discovered_paths.add(normalized)
        for src in parser.scripts:
            script_urls.add(urllib.parse.urljoin(final_url, src))
        page_results.append({
            "page_id": page.get("page_id") if isinstance(page, dict) else None,
            "path": path,
            "status": status,
            "final_url": final_url,
            "body_sha256": sha256(body),
            "href_count": len(parser.links),
        })

    link_results = []
    for path in sorted(discovered_paths):
        status, final_url, body = fetch(urllib.parse.urljoin(runtime + "/", path.lstrip("/")))
        link_results.append({"path": path, "status": status, "final_url": final_url, "body_sha256": sha256(body)})

    script_scan = []
    combined = bytearray()
    for url in sorted(script_urls):
        status, final_url, body = fetch(url)
        combined.extend(body)
        script_scan.append({"url": url, "status": status, "sha256": sha256(body), "bytes": len(body)})
    text = combined.decode("utf-8", errors="replace")
    endpoint_counts = {
        "web3forms": text.count("https://api.web3forms.com/submit"),
        "old_rfq_submit": text.count("/api/rfq/submit"),
        "old_private_rfq_submit": text.count("/api/tio2-my/rfq-private-submit"),
        "old_sample_submit": text.count("/api/sample/submit"),
    }
    allowed_non_200 = {"/contact/": 404, "/contact": 404}
    expected_page_status = {"SYS-404": 404}
    unexpected_pages = [
        row for row in page_results
        if row["status"] != expected_page_status.get(row["page_id"], 200)
    ]
    unexpected_links = [
        row for row in link_results
        if row["status"] != 200 and allowed_non_200.get(row["path"]) != row["status"]
    ]
    result = {
        "schema_version": "gate9-independent-runtime-probe/1.0",
        "manifest_path": str(manifest_path),
        "manifest_sha256": sha256(manifest_bytes),
        "runtime": runtime,
        "summary": {
            "manifest_page_count": len(page_results),
            "manifest_page_non_200": len(unexpected_pages),
            "unique_internal_paths": len(link_results),
            "unexpected_internal_link_statuses": len(unexpected_links),
            "script_count": len(script_scan),
            "endpoint_counts": endpoint_counts,
            "status": "PASS" if not unexpected_pages and not unexpected_links and endpoint_counts["web3forms"] > 0 and sum(v for k, v in endpoint_counts.items() if k.startswith("old_")) == 0 else "FAIL",
        },
        "allowed_non_200": allowed_non_200,
        "expected_page_status": expected_page_status,
        "unexpected_manifest_pages": unexpected_pages,
        "unexpected_internal_links": unexpected_links,
        "pages": page_results,
        "internal_links": link_results,
        "scripts": script_scan,
    }
    output_path.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps(result["summary"], indent=2))
    return 0 if result["summary"]["status"] == "PASS" else 1


if __name__ == "__main__":
    raise SystemExit(main())
