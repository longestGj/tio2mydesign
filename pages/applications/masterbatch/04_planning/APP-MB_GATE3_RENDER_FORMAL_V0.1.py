import hashlib
import json
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright


ROOT = Path(r"D:\23MySec")
SOURCE = ROOT / "pages/applications/masterbatch/04_planning/APP-MB_GATE3_WIREFRAME_EDITABLE_SOURCE_V0.1.html"
OUT = ROOT / "pages/applications/masterbatch/04_planning/wireframes/approval_core"
OUT.mkdir(parents=True, exist_ok=True)
EXPECTED_SOURCE = "43a70d7c13a387c09a7d07138880f97340890c807a285217d090109b6a65f937"


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


if digest(SOURCE) != EXPECTED_SOURCE:
    raise SystemExit("Frozen source identity changed; formal render refused")

assets = []
runtime = {"pageId": "APP-MB", "freezeId": "APP-MB-G3-FREEZE-01", "evidenceType": "ACTUAL_RUNTIME", "checks": {}}


def register(path: Path, role: str, logical_width: int, state: str):
    with Image.open(path) as image:
        size = list(image.size)
    assets.append({
        "path": str(path),
        "role": role,
        "logicalWidth": logical_width,
        "physicalSize": size,
        "scale": "1x",
        "state": state,
        "bytes": path.stat().st_size,
        "sha256": digest(path),
        "evidenceLayer": "approval_core",
        "evidenceType": "STATIC_VISUAL"
    })


with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True)
    for width in (1440, 768, 390):
        context = browser.new_context(viewport={"width": width, "height": 900}, device_scale_factor=1)
        page = context.new_page()
        page.goto(SOURCE.as_uri(), wait_until="load")
        page.evaluate("document.fonts.ready")
        full_path = OUT / f"APP-MB_GATE3_FULL_{width}_V0.1.png"
        page.screenshot(path=str(full_path), full_page=True)
        register(full_path, "full_page", width, "default")

        if width in (768, 390):
            page.locator(".menuButton").click()
            state = page.evaluate(
                """() => ({
                  hidden:document.querySelector('.mobileNav').hidden,
                  expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),
                  mainInert:document.querySelector('main').inert,
                  footerInert:document.querySelector('footer').inert,
                  bodyOverflow:getComputedStyle(document.body).overflow,
                  focus:(document.activeElement.textContent||'').trim(),
                  current:[...document.querySelectorAll('.mobileNav [aria-current="page"]')].map(x=>x.textContent.trim()),
                  visibleCurrentWord:[...document.querySelectorAll('.mobileNav')].filter(x=>!x.hidden).map(x=>x.innerText).join(' ').match(/\\bCURRENT\\b/g)?.length||0
                })"""
            )
            menu_path = OUT / f"APP-MB_GATE3_MENU_OPEN_{width}_V0.1.png"
            page.screenshot(path=str(menu_path))
            register(menu_path, "mobile_menu", width, "open")
            page.evaluate("document.querySelector('.mobileNav a[href=\"/applications/\"]').addEventListener('click',e=>e.preventDefault(),true)")
            page.locator('.mobileNav a[href="/applications/"]').click()
            closed = page.evaluate(
                """() => ({
                  hidden:document.querySelector('.mobileNav').hidden,
                  expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),
                  mainInert:document.querySelector('main').inert,
                  footerInert:document.querySelector('footer').inert,
                  bodyOverflow:getComputedStyle(document.body).overflow,
                  focus:(document.activeElement.textContent||'').trim()
                })"""
            )
            runtime["checks"][f"menu-{width}"] = {"open": state, "selectClose": closed}
        context.close()

    context = browser.new_context(viewport={"width": 390, "height": 900}, device_scale_factor=1)
    page = context.new_page()
    page.goto(SOURCE.as_uri(), wait_until="load")
    page.evaluate("document.fonts.ready")
    for selector, name, state in (
        ('section[data-module="read-each-observation-for-the-question-it-answers"]', "APP-MB_GATE3_RISK_EVIDENCE_TABLE_390_V0.1.png", "mobile_labeled_observation_records"),
        ('section[data-module="grades-to-review"]', "APP-MB_GATE3_RISK_GRADE_PATHS_390_V0.1.png", "seven_equal_grades_one_several_unknown"),
        ('section[data-module="prepare-your-request"]', "APP-MB_GATE3_RISK_REQUEST_PATHS_390_V0.1.png", "documents_sample_rfq_incomplete_inputs")
    ):
        locator = page.locator(selector)
        risk_path = OUT / name
        locator.screenshot(path=str(risk_path))
        register(risk_path, "page_specific_risk", 390, state)

    page.locator("#cookie-trigger").click()
    cookie_open = page.evaluate("() => ({open:document.querySelector('.cookie-layer').open,focus:(document.activeElement.textContent||'').trim()})")
    page.locator("[data-cookie-close]").click()
    cookie_close = page.evaluate("() => ({open:document.querySelector('.cookie-layer').open,focus:(document.activeElement.textContent||'').trim()})")
    runtime["checks"]["cookie-390"] = {"open": cookie_open, "close": cookie_close}
    context.close()
    browser.close()

if digest(SOURCE) != EXPECTED_SOURCE:
    raise SystemExit("Frozen source identity changed during formal render")

runtime_path = OUT / "APP-MB_GATE3_RUNTIME_EVIDENCE_V0.1.json"
runtime_path.write_text(json.dumps(runtime, indent=2, ensure_ascii=False), encoding="utf-8")
assets.append({
    "path": str(runtime_path),
    "role": "runtime_evidence",
    "logicalWidth": "768/390",
    "physicalSize": None,
    "scale": "n/a",
    "state": "menu_open_select_close_and_cookie_open_close",
    "bytes": runtime_path.stat().st_size,
    "sha256": digest(runtime_path),
    "evidenceLayer": "approval_core",
    "evidenceType": "ACTUAL_RUNTIME"
})

index_path = OUT / "APP-MB_GATE3_FORMAL_ASSET_INDEX_V0.1.json"
index_path.write_text(json.dumps({
    "pageId": "APP-MB",
    "freezeId": "APP-MB-G3-FREEZE-01",
    "sourceSha256": EXPECTED_SOURCE,
    "renderer": "Playwright Chromium 1223",
    "assets": assets
}, indent=2, ensure_ascii=False), encoding="utf-8")
print(index_path)
