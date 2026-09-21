import hashlib
import json
import re
from pathlib import Path

import requests
from bs4 import BeautifulSoup

BASE = "http://127.0.0.1:8341"
ORIGIN = "https://tio2products.com"
D23 = Path(r"D:\23MySec\pages\products\detail-template\06_handoff")
D32 = Path(r"D:\32NextJS\.worktrees\product-detail-13-gate8\content\product-details")
OUT = Path(__file__).with_name("independent-http-audit.json")

ENTRIES = [
    ("GRADE-M510", "M-510", "m-510", "GRADE-M510_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "09B41E1AB403372495D4BE8DB3DDD1260A710E310327FC289D8D344B05AB095C"),
    ("GRADE-M896", "M-896", "m-896", "GRADE-M896_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.2.json", "BA735FA0570E81F8055C76B7AC7B434498446BBD5540A1F2A32F0A9E6F3EC03A"),
    ("GRADE-M895", "M-895", "m-895", "GRADE-M895_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "CCBAB8EF7BEBB5641F409CF0925E861D57990EB53186448473754E88B48E3A5A"),
    ("GRADE-M340", "M-340", "m-340", "GRADE-M340_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "8DF979421B4D716BA82E910A42F62BF4982102BF00D82DB2782578F5B5AB93A6"),
    ("GRADE-M886", "M-886", "m-886", "GRADE-M886_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "D4A68225CC29B06D9B9700DB5CFA9C8D74C154C49E643A450A24B759981267B0"),
    ("GRADE-M52", "M-52", "m-52", "GRADE-M52_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "977A72AF33377F7A3CAB12C4F72314E93CFD79F2BE0CCFCFD62A3A2D009DE1A7"),
    ("GRADE-M108", "M-108", "m-108", "GRADE-M108_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "998C57D70AC303C0F47AC3E14B0C9214F4D53BC91130044274773B7CD3260BFF"),
    ("GRADE-M210", "M-210", "m-210", "GRADE-M210_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "F977D5DD3C49119966CD3C4EC5E846448BBFBD5BE1F4846B82B8CD1CBA6463B2"),
    ("GRADE-M200", "M-200", "m-200", "GRADE-M200_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.2.json", "A19BDC03170470EECCC46497AFBBE4FFEF6288DB59C9C5F6163017C3DF6D8320"),
    ("GRADE-M996", "M-996", "m-996", "GRADE-M996_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "4EAF22AA4F3F551F27CB83B41D644CAA59312B6EF20F02BCBD9AA6522F3EC66A"),
    ("GRADE-M2196", "M-2196", "m-2196", "GRADE-M2196_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "6ADB2A350F3E7F2A3F5138969E4A16A5F7E81993A25729A4906838FB2116CA3C"),
    ("GRADE-M2377", "M-2377", "m-2377", "GRADE-M2377_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "F735A9FF9486E8693B5E59E9BF25BBAD39F4B46D1B47DDAC630225D540AFB7FA"),
    ("GRADE-CR901", "CR-901", "cr-901", "GRADE-CR901_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json", "4BDB27E2F4BC9CBC0F1A21C9B2FCAF54553431E1DE614355F8263C7489050522"),
]

RESTRICTIONS = {
    "m-895": [r"food[- ]contact"],
    "m-340": [r"\brubber\b"],
    "m-886": [r"food[- ]contact"],
    "m-210": [r"\bFDA\b", r"food[- ]contact", r"\brubber\b"],
    "m-200": [r"CR-200"],
    "m-996": [r"\bM-2196\b", r"\bsuperior(?:ity)?\b", r"\bequivalent|equivalence\b", r"\branking?\b"],
    "m-2196": [r"\bM-996\b"],
    "m-2377": [r"\brubber\b", r"specialty materials"],
    "cr-901": [r"\bchloride\b", r"\bsulfate\b", r"cosmetics?", r"\bmedicine\b", r"non-toxic", r"\bsafety\b", r"\bUV\b", r"anti-aging", r"batch stability"],
}

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest().upper()

def norm(value):
    return re.sub(r"\s+", " ", value or "").strip()

def meta(soup, selector, attr="content"):
    node = soup.select_one(selector)
    return node.get(attr) if node else None

def expected_visible(c):
    values = [
        c["seo"]["h1"], c["hero"]["summaryLead"], c["hero"]["summaryBody"],
        *c["hero"]["proofs"], *c["hero"]["visual"].values(),
        *[v for fact in c["hero"]["facts"] for v in (fact["label"], fact["value"])],
        c["positioning"]["heading"], c["positioning"]["lead"], c["positioning"]["body"],
        *c["positioning"]["decisionPoints"],
        (c["positioning"].get("contextualLink") or {}).get("label"),
        c["applications"]["heading"], c["applications"]["intro"],
        *[v for item in c["applications"]["items"] for v in (item["category"], item["title"], item["body"])],
        c["evaluation"]["heading"], c["evaluation"]["intro"],
        *[v for group in c["evaluation"]["groups"] for v in (group["heading"], *group["items"])],
        c["evaluation"]["disclaimer"], c["technical"]["heading"], c["technical"]["intro"],
        c["technical"]["sourceLabel"], c["technical"].get("footnote"), c["technical"]["note"],
        c["markets"]["heading"], c["markets"]["intro"],
        *[item["label"] for item in c["markets"]["items"]], c["markets"]["note"],
    ]
    return [norm(str(v)) for v in values if v]

session = requests.Session()
page_results = []
all_checks = []
for page_id, grade, slug, filename, expected_hash in ENTRIES:
    d23_path = D23 / filename
    d32_path = D32 / filename
    contract = json.loads(d32_path.read_text(encoding="utf-8"))
    path = f"/products/{slug}/"
    response = session.get(BASE + path, timeout=15)
    public_html = response.content.decode("utf-8")
    soup = BeautifulSoup(public_html, "html.parser")
    main = soup.select_one("main")
    main_text = norm(main.get_text(" ", strip=True) if main else "")
    canonical = ORIGIN + path
    checks = {}
    checks["http200"] = response.status_code == 200
    checks["contractD23Hash"] = sha(d23_path) == expected_hash
    checks["contractD32Hash"] = sha(d32_path) == expected_hash
    checks["contractBytesEqual"] = d23_path.read_bytes() == d32_path.read_bytes()
    checks["singleExactH1"] = [norm(x.get_text(" ", strip=True)) for x in soup.select("main h1")] == [contract["seo"]["h1"]]
    checks["title"] = norm(soup.title.string if soup.title else "") == contract["seo"]["title"]
    checks["description"] = meta(soup, 'meta[name="description"]') == contract["seo"]["description"]
    checks["canonical"] = meta(soup, 'link[rel="canonical"]', "href") == canonical
    checks["robots"] = norm(meta(soup, 'meta[name="robots"]')).lower() == "noindex, nofollow"
    checks["ogUrl"] = meta(soup, 'meta[property="og:url"]') == canonical
    checks["ogTitle"] = meta(soup, 'meta[property="og:title"]') == contract["seo"]["title"]
    checks["ogDescription"] = meta(soup, 'meta[property="og:description"]') == contract["seo"]["description"]
    checks["language"] = soup.html and soup.html.get("lang") == "en"
    checks["approvedVisibleText"] = all(v in main_text for v in expected_visible(contract))
    rendered_rows = [[norm(cell.get_text(" ", strip=True)) for cell in row.select("th,td")] for row in soup.select("main tbody tr")]
    contract_rows = [[norm(str(v)) for v in row.values()] for row in contract["technical"]["rows"]]
    checks["technicalRowsExact"] = rendered_rows == contract_rows
    schema_nodes = soup.select('script[type="application/ld+json"]')
    schema = json.loads(schema_nodes[0].string) if len(schema_nodes) == 1 else {}
    graph = schema.get("@graph", [])
    product = next((x for x in graph if x.get("@type") == "Product"), {})
    breadcrumb = next((x for x in graph if x.get("@type") == "BreadcrumbList"), {})
    expected_props = []
    for row in contract["technical"]["rows"]:
        values = list(row.values())
        expected_props.append({"@type": "PropertyValue", "name": values[0], "value": "; ".join(f"{contract['technical']['columns'][i+1]}: {v}" for i, v in enumerate(values[1:]))})
    checks["schemaProduct"] = all([
        product.get("@id") == canonical + "#product",
        product.get("name") == f"{grade} Titanium Dioxide",
        product.get("sku") == grade,
        product.get("url") == canonical,
        product.get("description") == f"{contract['hero']['summaryLead']} {contract['hero']['summaryBody']}",
        product.get("additionalProperty") == expected_props,
        not any(k in product for k in ["offers", "aggregateRating", "gtin", "mpn", "certification", "manufacturer", "countryOfOrigin"]),
    ])
    items = breadcrumb.get("itemListElement", [])
    checks["schemaBreadcrumb"] = [x.get("item") for x in items] == [ORIGIN + "/", ORIGIN + "/products/", canonical] and [x.get("name") for x in items] == ["Home", "Products", grade]
    main_links = [(norm(a.get_text(" ", strip=True)), a.get("href")) for a in soup.select("main a")]
    checks["heldLinksOmitted"] = main_links == [("Home", "/"), ("Products", "/products/")]
    forbidden_labels = [x["label"] for x in contract["hero"]["actions"]] + [contract["technical"]["action"]["label"]]
    checks["heldActionLabelsOmitted"] = not any(label in main_text for label in forbidden_labels)
    other_grades = [g for _, g, _, _, _ in ENTRIES if g != grade] + (["M-350"] if grade != "M-350" else [])
    checks["crossGradeClean"] = not any(re.search(rf"\b{re.escape(g).replace('\\-', '[- ]?')}\b", main_text, re.I) for g in other_grades)
    checks["gradeRestrictionsClean"] = not any(re.search(pattern, main_text, re.I) for pattern in RESTRICTIONS.get(slug, []))
    checks["publicInternalClean"] = not any(value in public_html for value in [page_id, contract.get("reviewId", "__none__"), "evidenceLedger", "approved_for_preview", "contentRevision", "sourceRefs", "PRODUCT-000", "HOME-001", "tio2malaysia.com"])
    checks["moduleShape"] = len(soup.select("main section")) == 7 and len(soup.select("main table")) == 1
    failed = [name for name, passed in checks.items() if not passed]
    page_results.append({"pageId": page_id, "grade": grade, "path": path, "checks": checks, "failed": failed, "result": "PASS" if not failed else "FAIL"})
    all_checks.extend((f"{page_id}:{name}", passed) for name, passed in checks.items())

unknown = session.get(BASE + "/products/not-a-grade/", timeout=15)
unknown_text = BeautifulSoup(unknown.content, "html.parser").get_text(" ", strip=True)
sitemap = session.get(BASE + "/sitemap.xml", timeout=15)
regressions = {}
for path, marker in [
    ("/", "Malaysia Titanium Dioxide for Industrial Buyers"),
    ("/products/", "Titanium Dioxide Pigment Grades for Industrial Applications"),
    ("/products/m-350/", "M-350 Titanium Dioxide for Multi-Application Evaluation"),
    ("/applications/", "Explore Titanium Dioxide by Application"),
]:
    r = session.get(BASE + path, timeout=15)
    decoded = r.content.decode("utf-8")
    regressions[path] = {"status": r.status_code, "marker": marker in decoded, "result": "PASS" if r.status_code == 200 and marker in decoded else "FAIL"}

hub = session.get(BASE + "/products/", timeout=15)
hub_html = hub.content.decode("utf-8")
hub_soup = BeautifulSoup(hub_html, "html.parser")
hub_hrefs = [a.get("href") for a in hub_soup.select("a[href]")]
expected_paths = [f"/products/{slug}/" for _, _, slug, _, _ in ENTRIES] + ["/products/m-350/"]
hub_schema_urls = []
for node in hub_soup.select('script[type="application/ld+json"]'):
    try:
        data = json.loads(node.string)
        hub_schema_urls.extend(re.findall(r"https://tio2products\.com/products/(?:m-[0-9]+|cr-901)/", json.dumps(data)))
    except Exception:
        pass
hub_checks = {
    "all14VisibleLinks": all(path in hub_hrefs for path in expected_paths),
    "all14MachineUrls": all(ORIGIN + path in hub_schema_urls for path in expected_paths),
    "noLegacyOrigin": "tio2malaysia.com" not in hub_html,
}

summary = {
    "reviewId": "PRODUCT-DETAIL-13-GRADE-D32-NEXTJS-G9-20260921-01",
    "runtime": BASE,
    "pages": page_results,
    "pageCount": len(page_results),
    "checks": len(all_checks),
    "passedChecks": sum(1 for _, passed in all_checks if passed),
    "failedChecks": [name for name, passed in all_checks if not passed],
    "unknownRoute": {"status": unknown.status_code, "containsAnyGrade": any(grade in unknown_text for _, grade, _, _, _ in ENTRIES)},
    "sitemap": {"status": sitemap.status_code},
    "regressions": regressions,
    "productHub": hub_checks,
}
summary["result"] = "PASS" if not summary["failedChecks"] and unknown.status_code == 404 and not summary["unknownRoute"]["containsAnyGrade"] and sitemap.status_code == 404 and all(x["result"] == "PASS" for x in regressions.values()) and all(hub_checks.values()) else "FAIL"
OUT.write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(json.dumps({k: summary[k] for k in ["result", "pageCount", "checks", "passedChecks", "failedChecks", "unknownRoute", "sitemap", "regressions", "productHub"]}, indent=2, ensure_ascii=False))
raise SystemExit(0 if summary["result"] == "PASS" else 1)
