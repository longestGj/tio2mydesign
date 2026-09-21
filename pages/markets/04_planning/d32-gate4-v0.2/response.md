# MARKET-D32-G5-R01 — targeted author response V0.2

2026-09-21. Author `/root/market_root_d32`. Status `CHANGES_READY_FOR_TARGETED_REVIEW`; author response complete, not independent Finding closure or Gate approval.

## Authority and scope

Original independent review: `pages/markets/05_review/MARKET-000_D32_GATE5_INDEPENDENT_REVIEW_V0.1.md`, reviewer `/root/doc_root_d32`, Finding `MARKET-D32-G5-R01`. Prior bundle `f4fa1c2048b5da913b325f22ad8a5b0beefe9058539a52b90af2357e60e6619f` and all original evidence remain unchanged. Closed Gate 3 bundle remains `f2c25e99b6b7958ddfb7c6e7f2888decd07c5a6aaa9223b2099ed66a6d3219b9`.

Consume `ROOT-NARROW-VISUAL-20260921`, `docs/architecture/ROOT_PAGE_NARROW_VISUAL_AND_DOC_FEEDBACK_DECISION_V1.0.md` (SHA `6ff4253b56936ccf9838f27d7532053a501de82aec99b9ab1518b38de667f1a9`). Controller `/root` specifically delegated four-page read-only narrow-token coordination, then confirmed the common transition band on 2026-09-21. Current Gate 4 baseline V1.11, Agent V1.6, common contract V1.4 and 4→5 handoff V1.1 apply with in-flight coverage preserved. Updated root/Context/workflow/standard/governance were read; unchanged page content/brand/shared identities continue from the original input and valid independent review. No new direction, copy or behavior is proposed.

## Common design result — no production prescription

| Logical width | Common primary Hero Eyebrow presentation |
|---|---|
| 320–340px | 11px / 700 / .08em |
| 341–374px | 12px / 700 / .08em |
| ≥375px | Existing approved page presentation; MARKET 14px / 700 / .08em |

The <=340 rule is a shared four-page result; the transition band prevents violating the existing one-line contract immediately above 340. It is not a MARKET-only visual exception. Complete text, uppercase semantics, existing color and Hero shell/padding remain unchanged. No nowrap, letter-spacing compression, transform scaling, negative margins, fixed clipping or shortened text is used. Local CSS is explicitly `PROTOTYPE_ONLY` to show the agreed result, not code or an implementation instruction for Gate 8. Only the primary text-column Eyebrow slot consumes the token; the secondary `DESTINATION MARKET` label keeps its original 14px.

Why 11px at the narrowest width: with full MARKET text, Inter 12px/700/.08em requires 243.171875px, exceeding the 230px content width. 11px requires 222.90625px and remains readable in the opened 1:1 crop. It is the largest fitting whole-pixel size without changing approved letter spacing or geometry. 12px works in the 251px content width at 341. At 375, original 14px requires 283.703125px in 285px and fits.

`diagnostic_support/four-page-probe.json` records a read-only DOM probe of all four exact page sources at 320/340/341/374/375/390; 24/24 combinations fit on one line with complete text/color preserved. At320 the text widths are MARKET222.90625, DOC101.984375, RES195.046875, ABOUT158.515625 in 230px boxes. This tests the common narrow rule and does not change other pages. Its >=375 14px hypothesis is not an instruction to change ABOUT: the probe recorded ABOUT's original 12px, and >=375 must inherit that existing approved value. Other pages remain their authors' responsibility; this is not their runtime approval.

## Change map and exact identities

- `market-visual.html`: adds only the narrow projection stylesheet and points the existing visual stylesheet to the immutable V0.1 original. Removing those two stylesheet-binding edits exactly reproduces the old HTML bytes. SHA `f2bb81f5aba8bde386d4efd1ce45113a2c21f267ce54b0dc9a7b643f69e583ed`.
- `root-narrow-projection.css`: two shared-width rules bound to primary Hero text content, SHA `d8c5f3fbda82435fff892d420dce1a4cf0b953ec329cd4f247c3b2401be502c4`.
- Existing `../d32-gate4-v0.1/visual.css`, `../d32-gate3-v0.1/planning.css` / `planning.js`, neutral Chrome/Consent, fonts and logos are inherited unchanged. Actual runtime dependencies are in `source-lock.json`.
- Bundle identity is the non-circular `freeze.json.bundle_id`; source identity is `freeze.json.source_identity`. No new page Manifest is created.

## Evidence and author verification

1. `diagnostic_support/narrow-red.json`: initial verifier-first RED, 64 pass / 5 fail (320/340 old typography/wrap and341wrap). The proposed12px probe is separately retained:67pass/2fail (320wrap,341wrap). These are not relabeled green.
2. `diagnostic_support/narrow-green.json`: final 87/87 targeted assertions at320/340/341/374/375/390/768/1024/1440. Full primary Eyebrow is one line and contained; approved H1 size/line count and padding unchanged; complete visible content/action maps unchanged; no horizontal overflow or under44px visible target; fonts/media loaded; focus/hover preserved. At1024/320 H1 remains2/3 lines. >=375 Header/Hero/body-section/Footer geometry exactly matches V0.1.
3. `diagnostic_support/adjacent.json`:8/8 actual320 menu/focus/inert/Escape, EU Enter/Space with all6countries, Cookie focus/return and outline-hover checks. Unchanged JS/full route/noJS/content/family coverage from prior valid independent review is inherited, not rerun or claimed as new checks.
4. Formal capture followed source lock, with actual fonts readiness and two rendered frames. Seven new assets: FULL320, COOKIE320 and Hero320/340/341/374/375. All opened at original detail; complete320 image includes Header through Footer; readable Hero crops confirm full single-line Eyebrow, three-line H1, unchanged CTA and secondary index. Cookie shows correct inactive-analytics text and complete actions. Full320 is320×9242, Cookie320 is320×1000, Hero crops are280×816/300×791/301×792/334×767/335×770; DPR1. No asset upscaling.
5. The first provisional capture exposed a consumer selector reaching the secondary Hero index label. Before submission, restricted it to the primary text column; original projection, source lock and seven provisional captures are preserved under `diagnostic_support/pre-slot-scope-*`. Repeated the affected95 author checks and seven affected images after a new source lock. Final actual browser confirms primary11px/.88px and secondary14px/1.12px at320. This resolved scope issue never changed shared owner files.
6. Seven new PNG bytes/hash/dimensions match their index. Fifteen original >=390 formal/state images are precisely inherited, not copied, because the new stylesheet is inactive there and source/actions/geometry match. The two old320 images are excluded from current formal evidence. Existing readable body segments and family comparison remain diagnostic/reference coverage; their old source identity is not falsely relabeled as a newly captured image.

Actual environment: Chromium151.0.7922.34, Inter, DPR1, viewportheight1000, local file URLs; Node `C:/Program Files/nodejs/node.exe`, bundled Playwright. Counts describe coverage, not a quality score. No browser/remote submission or production test occurred.

## Inheritance, correction of prior author conclusion, and stopping point

The old author conclusion treating320Eyebrow wrapping as needing no further decision was incorrect under the shared one-line requirement. R01 correctly identified the omitted assertion. This response supersedes that conclusion for the current candidate while preserving historical reports unchanged. The new user decision and common author token resolve the author-side gap; only the different Gate5 reviewer may independently judge the fix and recommend closure.

Retain prior passing content/behavior/family/Chrome/Consent/contrast and route-local-simulation coverage under the exact old bundle. MARKET remains hub-light, one Choose a Market Hero CTA, ten destination paths in full mode, EU parent/6children then UK/India/Brazil, Q1–Q6, no Q7, no terminal body RFQ, no new PT relation, no live trade inference. No approved text, link, image, navigation, legal/consent or machine-semantic source changes.

Next: designated `/root/doc_root_d32` TARGETED review of R01, common-rule authorization, 320/boundary evidence, H1/geometry/content/CTA/focus/hover regressions and inheritance identities. Stop at `CHANGES_READY_FOR_TARGETED_REVIEW`; no Gate close, Gate6 or development.

Current downstream technical decisions are separately governed by `STATIC_NEXTJS_SINGLE_SITE_AND_GOOGLE_INDEXING_DECISION_V1.0.md`: D:/32NextJS static single site, no WordPress/CMS/multi-scope requirement for new implementation. This visual-only revision neither edits old lineage naming nor turns prototype noindex into a production instruction. Production/indexing/route/receiving/consent-owner activation remain later authorized work; current local consent is `no_optional_analytics`. No D32/NextJS/shared/Status/Index files were written.
