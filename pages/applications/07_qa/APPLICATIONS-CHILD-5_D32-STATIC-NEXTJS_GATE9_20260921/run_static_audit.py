from __future__ import annotations

import hashlib
import json
import re
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup


ROOT = Path(r"D:\23MySec")
REPO = Path(r"D:\32NextJS\.worktrees\applications-child-5-gate8")
BASE = "http://127.0.0.1:8432"
OUT_DIR = ROOT / "pages/applications/07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_20260921"

PAGES = [
    {
        "id": "APP-COAT",
        "slug": "coatings",
        "route": "/applications/titanium-dioxide-for-coatings/",
        "label": "Coatings",
        "h1": "Titanium Dioxide for Coatings",
        "title": "Titanium Dioxide for Coatings | Grade Evaluation",
        "description": "Compare TiO2 grades in your coating system by formulation, dispersion, film, exposure and test basis. Review Grades, documents, samples and RFQ inputs.",
        "modules": 10,
        "sources": 6,
        "grades": ["M-350", "M-510", "M-896", "M-996", "M-2196", "M-895", "M-52", "M-2377"],
        "crosslinks": [],
        "approved": ROOT / "pages/applications/coatings/04_planning/APP-COAT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md",
    },
    {
        "id": "APP-PLAS",
        "slug": "plastics",
        "route": "/applications/titanium-dioxide-for-plastics/",
        "label": "Plastics",
        "h1": "Titanium Dioxide for Plastics",
        "title": "Titanium Dioxide for Plastics | Grade Evaluation",
        "description": "Compare TiO2 candidates in a defined plastic resin, process, specimen and exposure. Review Product Grades and prepare a document, sample or quotation request.",
        "modules": 12,
        "sources": 13,
        "grades": ["M-350", "M-510", "M-200", "M-108", "M-210", "M-340", "M-886", "M-2377"],
        "crosslinks": ["/applications/titanium-dioxide-for-masterbatch/"],
        "approved": ROOT / "pages/applications/plastics/04_planning/APP-PLAS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md",
    },
    {
        "id": "APP-MB",
        "slug": "masterbatch",
        "route": "/applications/titanium-dioxide-for-masterbatch/",
        "label": "Masterbatch",
        "h1": "Titanium Dioxide for Masterbatch",
        "title": "Titanium Dioxide for Masterbatch Evaluation | TiO2 Malaysia",
        "description": "Evaluate titanium dioxide for masterbatch by separating concentrate processing from final-article evidence. Review Product Grades and prepare your request.",
        "modules": 11,
        "sources": 4,
        "grades": ["M-510", "M-200", "M-108", "M-210", "M-340", "M-886", "M-2377"],
        "crosslinks": ["/applications/titanium-dioxide-for-plastics/"],
        "approved": ROOT / "pages/applications/masterbatch/04_planning/APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md",
    },
    {
        "id": "APP-INK",
        "slug": "printing-inks",
        "route": "/applications/titanium-dioxide-for-printing-inks/",
        "label": "Printing Inks",
        "h1": "Titanium Dioxide for Printing Inks",
        "title": "Titanium Dioxide for Printing Inks | TiO2 Malaysia",
        "description": "Compare titanium dioxide candidates in a defined white-ink and print system. Review Product Grades and prepare a document, sample or quotation request.",
        "modules": 11,
        "sources": 6,
        "grades": ["M-350", "M-510", "M-52", "M-2377"],
        "crosslinks": [],
        "approved": ROOT / "pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md",
    },
    {
        "id": "APP-PAPER",
        "slug": "paper",
        "route": "/applications/titanium-dioxide-for-paper/",
        "label": "Paper",
        "h1": "Titanium Dioxide for Paper",
        "title": "Titanium Dioxide for Paper Evaluation | TiO2 Malaysia",
        "description": "Evaluate titanium dioxide for paper in a defined system. Compare method-matched results, review Product Grades, and prepare document, sample or RFQ details.",
        "modules": 11,
        "sources": 7,
        "grades": ["M-350", "M-2377"],
        "crosslinks": [],
        "approved": ROOT / "pages/applications/paper/04_planning/APP-PAPER_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md",
    },
]


def fetch(path: str) -> tuple[int, bytes]:
    with urllib.request.urlopen(BASE + path, timeout=15) as response:
        return response.status, response.read()


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def normalize_newlines(text: str) -> str:
    return text.replace("\r\n", "\n").replace("\r", "\n").strip()


def approved_body(path: Path) -> str:
    text = path.read_text(encoding="utf-8-sig")
    match = re.search(r"<!-- BUYER_COPY_START -->(.*?)<!-- BUYER_COPY_END -->", text, re.S)
    if not match:
        raise RuntimeError(f"Buyer-copy markers missing: {path}")
    body = normalize_newlines(match.group(1))
    body = re.sub(r"^Home / Applications / [^\n]+\n+", "", body, count=1)
    return body.strip()


def markdown_https_links(text: str) -> list[str]:
    links: list[str] = []
    cursor = 0
    while True:
        marker = text.find("](https://", cursor)
        if marker < 0:
            break
        start = marker + 2
        depth = 1
        index = start
        while index < len(text):
            if text[index] == "(":
                depth += 1
            elif text[index] == ")":
                depth -= 1
                if depth == 0:
                    break
            index += 1
        if depth:
            raise RuntimeError("Unclosed Markdown link")
        links.append(text[start:index])
        cursor = index + 1
    return links


def tag_attr(soup: BeautifulSoup, selector: str, attr: str) -> str | None:
    tag = soup.select_one(selector)
    return tag.get(attr) if tag else None


def add(checks: list[dict], name: str, actual, expected, detail: str = "") -> None:
    checks.append({
        "name": name,
        "pass": actual == expected,
        "actual": actual,
        "expected": expected,
        "detail": detail,
    })


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    report: dict = {"base_url": BASE, "pages": [], "shared": {}, "summary": {}}
    expected_sitemap = ["https://tio2products.com" + p["route"] for p in PAGES]

    for page in PAGES:
        checks: list[dict] = []
        status, body = fetch(page["route"])
        html = body.decode("utf-8")
        soup = BeautifulSoup(html, "html.parser")
        canonical = "https://tio2products.com" + page["route"]
        out_file = REPO / "out" / page["route"].strip("/") / "index.html"
        repo_md = (REPO / "content/application-details" / f"{page['slug']}.md").read_text(encoding="utf-8-sig")
        approved = approved_body(page["approved"])
        expected_links = markdown_https_links(repo_md)
        source_links = soup.select("[data-technical-sources] a")
        schema_tag = soup.select_one('script[type="application/ld+json"]')
        schema = json.loads(schema_tag.get_text()) if schema_tag else None
        schema_types = [node.get("@type") for node in schema.get("@graph", [])] if schema else []
        grade_labels = [tag.get_text(" ", strip=True) for tag in soup.select("[data-grade-label]")]
        main = soup.select_one("main")
        main_hrefs = [a.get("href") for a in main.select("a[href]")] if main else []
        breadcrumbs = [li.get_text(" ", strip=True) for li in soup.select('nav[aria-label="Breadcrumb"] li')]
        public_pattern = re.compile(r"APP-(?:COAT|PLAS|MB|INK|PAPER)\b|GRADE-(?:M\d+|CR\d+)\b|Gate\s*[0-9]|Finding\s+(?:ID|[A-Z]+-\d+)|readiness|[a-f0-9]{64}|D:\\|D:/|tio2malaysia\.com", re.I)

        add(checks, "http_status", status, 200)
        add(checks, "served_bytes_equal_out_file", sha256(body), sha256(out_file.read_bytes()))
        add(checks, "approved_copy_exact", normalize_newlines(repo_md), approved)
        add(checks, "html_lang", soup.html.get("lang") if soup.html else None, "en")
        add(checks, "h1", soup.h1.get_text(" ", strip=True) if soup.h1 else None, page["h1"])
        add(checks, "title", soup.title.get_text(strip=True) if soup.title else None, page["title"])
        add(checks, "description", tag_attr(soup, 'meta[name="description"]', "content"), page["description"])
        add(checks, "canonical", tag_attr(soup, 'link[rel="canonical"]', "href"), canonical)
        add(checks, "og_url", tag_attr(soup, 'meta[property="og:url"]', "content"), canonical)
        add(checks, "og_title", tag_attr(soup, 'meta[property="og:title"]', "content"), page["title"])
        add(checks, "og_description", tag_attr(soup, 'meta[property="og:description"]', "content"), page["description"])
        robots = tag_attr(soup, 'meta[name="robots"]', "content") or ""
        add(checks, "robots_index_follow", "index" in robots and "follow" in robots and "noindex" not in robots and "nofollow" not in robots, True, robots)
        add(checks, "breadcrumb", breadcrumbs, ["Home", "Applications", page["label"]])
        add(checks, "module_count", len(soup.select("[data-application-module]")), page["modules"])
        add(checks, "grade_order", grade_labels, page["grades"])
        expected_grade_links = ["/products/m-350/"] if "M-350" in page["grades"] else []
        actual_grade_links = [a.get("href") for a in soup.select("[data-grade-relation] a[href]")]
        add(checks, "ready_grade_links_only", actual_grade_links, expected_grade_links)
        add(checks, "products_link_present", "/products/" in main_hrefs, True)
        add(checks, "required_crosslinks", sorted(h for h in main_hrefs if h in [p["route"] for p in PAGES]), sorted(page["crosslinks"]))
        add(checks, "rfq_main_link_count", main_hrefs.count("/request-a-quote/"), 1)
        add(checks, "documents_sample_controls_absent", any(h and re.match(r"/request-(documents|sample)/", h) for h in main_hrefs), False)
        add(checks, "source_count", len(source_links), page["sources"])
        add(checks, "source_urls_exact", [a.get("href") for a in source_links], expected_links)
        add(checks, "source_link_safety", all(a.get("target") == "_blank" and set((a.get("rel") or [])) == {"noopener", "noreferrer"} and (a.get("href") or "").startswith("https://") for a in source_links), True)
        add(checks, "schema_types", schema_types, ["WebPage", "BreadcrumbList"])
        schema_page = schema.get("@graph", [{}])[0] if schema else {}
        add(checks, "schema_page", {k: schema_page.get(k) for k in ("url", "name", "description", "inLanguage")}, {"url": canonical, "name": page["h1"], "description": page["description"], "inLanguage": "en"})
        add(checks, "public_output_clean", bool(public_pattern.search(html)), False)
        add(checks, "no_runtime_content_endpoint", bool(re.search(r"wp-json|graphql|/api/|wordpress", html, re.I)), False)
        add(checks, "initial_html_substantive", len(main.get_text(" ", strip=True)) > 2500 if main else False, True)
        add(checks, "hero_anchor_targets", all(soup.select_one(href) is not None for href in main_hrefs if href and href.startswith("#")), True)
        add(checks, "table_semantics", all(th.get("scope") == "col" for th in soup.select("main table th")) and all(td.get("data-label") for td in soup.select("main table td")), True)
        add(checks, "shared_chrome", bool(soup.select_one('header a[href="/"] img[alt="TiO2 Malaysia"]')) and bool(soup.select_one('footer img[alt="TiO2 Malaysia"]')) and bool(soup.select_one('nav[aria-label="Primary navigation"] a[aria-current="page"][href="/applications/"]')), True)
        add(checks, "buyer_visible_current_absent", "CURRENT" in soup.get_text(" ", strip=True), False)
        add(checks, "terms_link_absent", bool(soup.select('a[href*="terms"]')), False)

        report["pages"].append({
            "id": page["id"],
            "route": page["route"],
            "served_sha256": sha256(body),
            "out_file_sha256": sha256(out_file.read_bytes()),
            "checks": checks,
            "pass": all(c["pass"] for c in checks),
        })

    robots_status, robots_bytes = fetch("/robots.txt")
    sitemap_status, sitemap_bytes = fetch("/sitemap.xml")
    robots_text = robots_bytes.decode("utf-8")
    sitemap_text = sitemap_bytes.decode("utf-8")
    sitemap_urls = re.findall(r"<loc>([^<]+)</loc>", sitemap_text)
    hub_status, hub_bytes = fetch("/applications/")
    hub_soup = BeautifulSoup(hub_bytes.decode("utf-8"), "html.parser")
    hub_links = [a.get("href") for a in hub_soup.select("main a[href]") if a.get("href") in [p["route"] for p in PAGES]]
    hub_schema_tag = hub_soup.select_one('script[type="application/ld+json"]')
    hub_schema = json.loads(hub_schema_tag.get_text()) if hub_schema_tag else {}
    item_lists = [x for x in hub_schema.get("@graph", []) if x.get("@type") == "ItemList"]
    hub_schema_urls = [item.get("item", {}).get("url", "").replace("https://tio2products.com", "") for node in item_lists for item in node.get("itemListElement", [])]
    specialty_card = hub_soup.select_one("#application-specialty-materials")
    regressions = {}
    for route in ["/", "/products/", "/products/m-350/", "/applications/"]:
        status, data = fetch(route)
        parsed = BeautifulSoup(data.decode("utf-8"), "html.parser")
        regressions[route] = {"status": status, "h1": parsed.h1.get_text(" ", strip=True) if parsed.h1 else None, "sha256": sha256(data)}

    report["shared"] = {
        "robots": {
            "status": robots_status,
            "allow_root": "Allow: /" in robots_text,
            "applications_not_blocked": re.search(r"Disallow:\s*/applications", robots_text, re.I) is None,
            "sitemap": "Sitemap: https://tio2products.com/sitemap.xml" in robots_text,
            "sha256": sha256(robots_bytes),
        },
        "sitemap": {
            "status": sitemap_status,
            "urls": sitemap_urls,
            "exact_five": sitemap_urls == expected_sitemap,
            "unique": len(sitemap_urls) == len(set(sitemap_urls)),
            "sha256": sha256(sitemap_bytes),
        },
        "hub": {
            "status": hub_status,
            "visible_child_links": hub_links,
            "exact_five_links": hub_links == [p["route"] for p in PAGES],
            "schema_child_urls": hub_schema_urls,
            "schema_matches_links": hub_schema_urls == hub_links,
            "specialty_child_link_absent": specialty_card is not None and not specialty_card.select("a[href]"),
        },
        "regressions": regressions,
    }

    total_checks = sum(len(p["checks"]) for p in report["pages"])
    failed_checks = [f"{p['id']}:{c['name']}" for p in report["pages"] for c in p["checks"] if not c["pass"]]
    shared_pass = all([
        robots_status == 200,
        report["shared"]["robots"]["allow_root"],
        report["shared"]["robots"]["applications_not_blocked"],
        report["shared"]["robots"]["sitemap"],
        sitemap_status == 200,
        report["shared"]["sitemap"]["exact_five"],
        report["shared"]["sitemap"]["unique"],
        hub_status == 200,
        report["shared"]["hub"]["exact_five_links"],
        report["shared"]["hub"]["schema_matches_links"],
        report["shared"]["hub"]["specialty_child_link_absent"],
        all(item["status"] == 200 and item["h1"] for item in regressions.values()),
    ])
    report["summary"] = {
        "page_checks": total_checks,
        "page_failures": failed_checks,
        "all_page_checks_pass": not failed_checks,
        "shared_checks_pass": shared_pass,
    }
    (OUT_DIR / "static-http-audit.json").write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")
    print(json.dumps(report["summary"], ensure_ascii=False))


if __name__ == "__main__":
    main()
