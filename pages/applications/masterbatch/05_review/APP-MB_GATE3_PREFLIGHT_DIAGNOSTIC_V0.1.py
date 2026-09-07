import hashlib
import json
import re
from pathlib import Path

from playwright.sync_api import sync_playwright


ROOT = Path(r"D:\23MySec")
SOURCE = ROOT / "pages/applications/masterbatch/04_planning/APP-MB_GATE3_WIREFRAME_EDITABLE_SOURCE_V0.1.html"
COPY = ROOT / "pages/applications/masterbatch/04_planning/APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md"
OUT = ROOT / "pages/applications/masterbatch/05_review/diagnostic_support"
OUT.mkdir(parents=True, exist_ok=True)


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def normalize(value: str) -> str:
    value = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", value)
    value = re.sub(r"[`*_#]", "", value)
    value = re.sub(r"^\s*(?:[-+] |\d+\. )", "", value)
    value = value.replace("|", " ")
    value = re.sub(r"\s+", " ", value).strip()
    return re.sub(r"\s+([.,;:!?])", r"\1", value)


raw = COPY.read_text(encoding="utf-8")
buyer = raw.split("<!-- BUYER_COPY_START -->", 1)[1].split("<!-- BUYER_COPY_END -->", 1)[0].strip()
expected_lines = []
for line in buyer.splitlines():
    candidate = normalize(line)
    if not candidate or re.fullmatch(r":?-+(?:\s+:?-+)*", candidate):
        continue
    expected_lines.append(candidate)

results = {
    "pageId": "APP-MB",
    "candidate": {"path": str(SOURCE), "bytes": SOURCE.stat().st_size, "sha256": sha256(SOURCE)},
    "copy": {"path": str(COPY), "sha256": sha256(COPY)},
    "viewports": {},
    "interactions": {},
    "content": {},
}
runtime_main_text = ""

with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True)
    for width in (1440, 768, 390):
        context = browser.new_context(viewport={"width": width, "height": 900}, device_scale_factor=1)
        page = context.new_page()
        page.goto(SOURCE.as_uri(), wait_until="load")
        page.evaluate("document.fonts.ready")
        if width == 1440:
            runtime_main_text = page.locator("main").inner_text()
        page.screenshot(path=str(OUT / f"APP-MB_GATE3_DIAGNOSTIC_FULL_{width}_V0.1.png"), full_page=True)
        geometry = page.evaluate(
            """() => {
              const visible = el => { const s=getComputedStyle(el), r=el.getBoundingClientRect(); return s.display!=='none' && s.visibility!=='hidden' && !el.hidden && r.width>0 && r.height>0 };
              const targets=[...document.querySelectorAll('a,button')].filter(visible).map(el=>{const r=el.getBoundingClientRect();return {text:(el.textContent||'').trim(),width:r.width,height:r.height}});
              const overflow=[...document.querySelectorAll('body *')].filter(visible).map(el=>{const r=el.getBoundingClientRect();return {tag:el.tagName,cls:el.className||'',left:r.left,right:r.right,width:r.width}}).filter(x=>x.left < -0.5 || x.right > document.documentElement.clientWidth + 0.5);
              return {
                clientWidth:document.documentElement.clientWidth,
                scrollWidth:document.documentElement.scrollWidth,
                scrollHeight:document.documentElement.scrollHeight,
                moduleCount:document.querySelectorAll('main section').length,
                h1Count:document.querySelectorAll('main h1').length,
                h2Count:document.querySelectorAll('main h2').length,
                tableCount:document.querySelectorAll('main table').length,
                tableRows:[...document.querySelectorAll('main table tbody')].map(t=>t.rows.length),
                targets,
                undersized:targets.filter(t=>t.width<44 || t.height<44),
                overflow
              };
            }"""
        )
        results["viewports"][str(width)] = geometry

        if width in (768, 390):
            page.locator(".menuButton").click()
            menu_open = page.evaluate(
                """() => ({
                  hidden:document.querySelector('.mobileNav').hidden,
                  expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),
                  bodyOverflow:getComputedStyle(document.body).overflow,
                  mainInert:document.querySelector('main').inert,
                  footerInert:document.querySelector('footer').inert,
                  focus:(document.activeElement.textContent||'').trim(),
                  current:[...document.querySelectorAll('.mobileNav [aria-current="page"]')].map(x=>x.textContent.trim())
                })"""
            )
            page.screenshot(path=str(OUT / f"APP-MB_GATE3_DIAGNOSTIC_MENU_OPEN_{width}_V0.1.png"))
            page.evaluate("document.querySelector('.mobileNav a[href=\"/applications/\"]').addEventListener('click',e=>e.preventDefault(),true)")
            page.locator('.mobileNav a[href="/applications/"]').click()
            menu_close = page.evaluate(
                """() => ({
                  hidden:document.querySelector('.mobileNav').hidden,
                  expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),
                  bodyOverflow:getComputedStyle(document.body).overflow,
                  mainInert:document.querySelector('main').inert,
                  footerInert:document.querySelector('footer').inert,
                  focus:(document.activeElement.textContent||'').trim()
                })"""
            )
            results["interactions"][f"menu-{width}"] = {"open": menu_open, "selectClose": menu_close}
        context.close()

    context = browser.new_context(viewport={"width": 390, "height": 900})
    page = context.new_page()
    page.goto(SOURCE.as_uri(), wait_until="load")
    page.locator("#cookie-trigger").click()
    cookie_open = page.evaluate(
        """() => ({open:document.querySelector('.cookie-layer').open,focus:(document.activeElement.textContent||'').trim()})"""
    )
    page.screenshot(path=str(OUT / "APP-MB_GATE3_DIAGNOSTIC_COOKIE_OPEN_390_V0.1.png"))
    page.locator("[data-cookie-close]").click()
    cookie_close = page.evaluate(
        """() => ({open:document.querySelector('.cookie-layer').open,focus:(document.activeElement.textContent||'').trim()})"""
    )
    results["interactions"]["cookie-390"] = {"open": cookie_open, "close": cookie_close}
    context.close()
    browser.close()

main_text = normalize(runtime_main_text)
missing = [line for line in expected_lines if normalize(line) not in main_text]
results["content"] = {
    "expectedLineCount": len(expected_lines),
    "missingLineCount": len(missing),
    "missingLines": missing,
    "expectedGradeOrder": ["M-510", "M-200", "M-108", "M-210", "M-340", "M-886", "M-2377"],
    "gradeOrderMatches": [m.group(1) for m in re.finditer(r"View (M-(?:510|200|108|210|340|886|2377))", main_text)] == ["M-510", "M-200", "M-108", "M-210", "M-340", "M-886", "M-2377"],
}

out_path = OUT / "APP-MB_GATE3_PREFLIGHT_OBSERVATIONS_V0.1.json"
out_path.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")
print(out_path)
