const { chromium } = require("D:/16Wordpress_nextjs/node_modules/playwright");

const url = "http://127.0.0.1:3024/pt-br/markets/brazil/";

async function visibleControls(page) {
  return page.evaluate(() =>
    [...document.querySelectorAll("a,button,input,select,textarea")]
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName,
          text: (element.innerText || element.getAttribute("aria-label") || element.name || "")
            .trim()
            .replace(/\s+/g, " ")
            .slice(0, 120),
          width: Number(rect.width.toFixed(1)),
          height: Number(rect.height.toFixed(1)),
          href: element.getAttribute("href"),
        };
      }),
  );
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const result = { capturedAt: new Date().toISOString(), url, viewports: {}, interactions: {} };

  for (const [name, width, height] of [
    ["desktop", 1440, 1000],
    ["tablet", 768, 1024],
    ["mobile", 390, 844],
  ]) {
    const page = await browser.newPage({ viewport: { width, height }, reducedMotion: "reduce" });
    const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForTimeout(150);
    const controls = await visibleControls(page);
    result.viewports[name] = await page.evaluate(() => ({
      lang: document.documentElement.lang,
      h1: [...document.querySelectorAll("h1")].map((node) => node.textContent.trim()),
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyHeight: document.body.scrollHeight,
    }));
    result.viewports[name].http = response.status();
    result.viewports[name].smallControls = controls.filter(
      (control) => control.width < 44 || control.height < 44,
    );
    result.viewports[name].controls = controls;

    if (name === "desktop") {
      result.head = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        canonical: [...document.querySelectorAll('link[rel="canonical"]')].map((node) => node.href),
        robots: [...document.querySelectorAll('meta[name="robots"]')].map((node) => node.content),
        ogTitle: [...document.querySelectorAll('meta[property="og:title"]')].map((node) => node.content),
        ogDescription: [...document.querySelectorAll('meta[property="og:description"]')].map(
          (node) => node.content,
        ),
        ogLocale: [...document.querySelectorAll('meta[property="og:locale"]')].map(
          (node) => node.content,
        ),
        ogUrl: [...document.querySelectorAll('meta[property="og:url"]')].map((node) => node.content),
        alternates: [...document.querySelectorAll('link[rel="alternate"]')].map((node) => ({
          hreflang: node.hreflang,
          href: node.href,
        })),
        jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) =>
          JSON.parse(node.textContent),
        ),
      }));
      result.mainLinks = await page.evaluate(() =>
        [...document.querySelectorAll("main a")].map((node) => ({
          text: node.textContent.trim().replace(/\s+/g, " "),
          href: node.getAttribute("href"),
          lang: node.getAttribute("lang"),
        })),
      );
      result.visibleText = await page.evaluate(() => ({
        main: document.querySelector("main")?.innerText,
        internalStateVisible: /\b(Gate|Finding|READY|PROVISIONAL|NOT_VERIFIED|CURRENT)\b/i.test(
          document.body.innerText,
        ),
        englishNoticeCount: (
          document.body.innerText.match(
            /Os links desta página levam a conteúdos e formulários disponíveis em inglês\./g,
          ) || []
        ).length,
      }));
    }
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
  const menu = page.getByRole("button", { name: /open primary navigation/i }).first();
  result.interactions.menuBefore = await menu.getAttribute("aria-expanded");
  await menu.click();
  result.interactions.menuAfter = await page
    .locator('#malaysia-mobile-menu')
    .evaluate((node) => ({ hidden: node.hidden, ariaHidden: node.getAttribute('aria-hidden') }));
  result.interactions.menuFocused = await page.evaluate(() => ({
    tag: document.activeElement?.tagName,
    text: (document.activeElement?.textContent || "").trim(),
    ariaLabel: document.activeElement?.getAttribute("aria-label"),
  }));
  await page.keyboard.press("Escape");
  result.interactions.menuAfterEscape = await page.evaluate(() => ({
    tag: document.activeElement?.tagName,
    text: (document.activeElement?.textContent || "").trim(),
    ariaLabel: document.activeElement?.getAttribute("aria-label"),
  }));

  const cookieSettings = page.getByRole("button", { name: /cookie settings/i }).first();
  await cookieSettings.scrollIntoViewIfNeeded();
  await cookieSettings.click();
  result.interactions.cookieDialogOpen = await page.locator("dialog[open]").count();
  result.interactions.cookieFocused = await page.evaluate(() => ({
    tag: document.activeElement?.tagName,
    text: (document.activeElement?.textContent || "").trim(),
    ariaLabel: document.activeElement?.getAttribute("aria-label"),
  }));
  await page.keyboard.press("Escape");
  result.interactions.cookieDialogAfterEscape = await page.locator("dialog[open]").count();

  await browser.close();
  process.stdout.write(JSON.stringify(result, null, 2));
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
