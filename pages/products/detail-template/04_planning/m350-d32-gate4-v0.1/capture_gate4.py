from __future__ import annotations

import hashlib
import json
from pathlib import Path

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parent
HTML = ROOT / "m350-visual.html"


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest().upper()


def capture(page, width: int, name: str) -> dict:
    page.set_viewport_size({"width": width, "height": 900})
    page.goto(HTML.as_uri(), wait_until="networkidle")
    page.screenshot(path=str(ROOT / name), full_page=True)
    return page.evaluate(
        """() => {
          const actionSizes = [...document.querySelectorAll('a,button')]
            .filter(el => {
              const s = getComputedStyle(el);
              const r = el.getBoundingClientRect();
              return !el.classList.contains('skip') && s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0;
            })
            .map(el => {
              const r = el.getBoundingClientRect();
              return {text:(el.textContent||'').trim(), width:r.width, height:r.height};
            });
          return {
            viewport: innerWidth,
            clientWidth: document.documentElement.clientWidth,
            scrollWidth: document.documentElement.scrollWidth,
            scrollHeight: document.documentElement.scrollHeight,
            h1: document.querySelectorAll('h1').length,
            technicalRows: document.querySelectorAll('.techTable tbody tr').length,
            heroActions: document.querySelectorAll('.hero .actions a').length,
            applicationCards: document.querySelectorAll('.appGrid .card').length,
            versionExposure: (document.body.innerText.match(/V3 2023|\\b2023\\b/g)||[]).length,
            relatedGrades: (document.body.innerText.match(/Related Grades|Explore More Coatings Grades/g)||[]).length,
            currentVisibleText: (document.body.innerText.match(/\\bCURRENT\\b/g)||[]).length,
            minActionWidth: Math.min(...actionSizes.map(x=>x.width)),
            minActionHeight: Math.min(...actionSizes.map(x=>x.height)),
            actionSizes
          };
        }"""
    )


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(device_scale_factor=1)
    results = {
        "desktop": capture(page, 1440, "M350_D32_G4_FULL_1440.png"),
        "tablet": capture(page, 768, "M350_D32_G4_FULL_768.png"),
        "mobile": capture(page, 390, "M350_D32_G4_FULL_390.png"),
    }

    page.set_viewport_size({"width": 390, "height": 844})
    page.goto(HTML.as_uri(), wait_until="networkidle")
    page.get_by_role("button", name="Menu").click()
    menu_state = page.evaluate(
        """() => ({
          expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
          menuHidden: document.querySelector('.mobileNav').hidden,
          firstFocused: document.activeElement?.textContent?.trim(),
          mainInert: document.querySelector('main').inert,
          footerInert: document.querySelector('footer').inert,
          currentCount: document.querySelectorAll('.mobileNav [aria-current=page]').length,
          visibleCurrentText: (document.body.innerText.match(/\\bCURRENT\\b/g)||[]).length
        })"""
    )
    page.screenshot(path=str(ROOT / "M350_D32_G4_MENU_390.png"), full_page=False)
    page.keyboard.press("Escape")
    menu_state["escapeClosed"] = page.get_by_role("button", name="Menu").get_attribute("aria-expanded") == "false"

    page.get_by_role("button", name="Cookie Settings").click()
    cookie_state = page.evaluate(
        """() => ({
          open: document.querySelector('.cookieLayer').open,
          focused: document.activeElement?.textContent?.trim(),
          title: document.querySelector('.cookieLayer h2')?.textContent?.trim()
        })"""
    )
    page.screenshot(path=str(ROOT / "M350_D32_G4_COOKIE_390.png"), full_page=False)
    page.get_by_role("button", name="Close").click()
    cookie_state["closed"] = not page.locator(".cookieLayer").evaluate("el => el.open")
    results["menu"] = menu_state
    results["cookie"] = cookie_state
    browser.close()

assets = {}
for path in sorted(ROOT.glob("M350_D32_G4_*.png")):
    assets[path.name] = {"bytes": path.stat().st_size, "sha256": sha256(path)}
results["assets"] = assets
results["source"] = {"bytes": HTML.stat().st_size, "sha256": sha256(HTML)}
(ROOT / "gate4_measurements.json").write_text(json.dumps(results, indent=2), encoding="utf-8")

failures = []
for key in ("desktop", "tablet", "mobile"):
    item = results[key]
    if item["clientWidth"] != item["scrollWidth"]:
        failures.append(f"{key}: horizontal overflow")
    if item["h1"] != 1:
        failures.append(f"{key}: H1 count {item['h1']}")
    if item["technicalRows"] != 15:
        failures.append(f"{key}: technical rows {item['technicalRows']}")
    if item["heroActions"] != 2:
        failures.append(f"{key}: hero actions {item['heroActions']}")
    if item["applicationCards"] != 6:
        failures.append(f"{key}: application cards {item['applicationCards']}")
    if item["versionExposure"] != 0:
        failures.append(f"{key}: public version exposure")
    if item["relatedGrades"] != 0:
        failures.append(f"{key}: related grades exposed")
    if item["currentVisibleText"] != 0:
        failures.append(f"{key}: CURRENT exposed")
    if item["minActionWidth"] < 44 or item["minActionHeight"] < 44:
        failures.append(f"{key}: action smaller than 44px")

if menu_state != {
    "expanded": "true",
    "menuHidden": False,
    "firstFocused": "Home",
    "mainInert": True,
    "footerInert": True,
    "currentCount": 1,
    "visibleCurrentText": 0,
    "escapeClosed": True,
}:
    failures.append(f"menu state mismatch: {menu_state}")
if cookie_state != {"open": True, "focused": "Close", "title": "Cookie settings", "closed": True}:
    failures.append(f"cookie state mismatch: {cookie_state}")

if failures:
    raise SystemExit("\n".join(failures))
print(json.dumps({"status": "PASS_FOR_FORMAL_RENDER", "measurements": str(ROOT / 'gate4_measurements.json')}, indent=2))
