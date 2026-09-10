# MARKET-EU-NL Gate 9 Read-only Acceptance V0.1

Date: 2026-09-08  
Review ID: `NL-G9-READONLY-01`  
Page / URL / scope: `MARKET-EU-NL` / `/markets/netherlands/` / `tio2-my`  
Candidate: `codex/market-four-gate8` / `2c97fe19b56f14e12c6e27daa7fd3c9a49207570`  
Gate 6 package: `NL-G6-HANDOFF-01`, SHA-256 `e34fdadaf693f25812a013625000dfa2efc17623c68bbc54b867b2a8be9ce113`  
Status: **`PROJECT_CONTROL_REVIEWED / GATE9_NOT_APPROVED / ONE_RETURN_FINDING`**

## 1. Independent conclusion

The page-local Netherlands implementation is substantially faithful to the approved content and frozen three-viewport composition. I opened all three full-page development originals and the 390 menu-open image, inspected the exact candidate source at the returned commit, and confirmed the approved page payload, Page ID, route, metadata contract, action context, fail-closed DTO path and visual files are present and mutually consistent.

Gate 9 cannot pass this page yet. The candidate commit also changes shared Global Chrome, Cookie Settings and EN/BM shared font/layout behavior, while the dispatch required the four pages to consume the original shared owners and to coordinate any shared defect. The Gate 8 return provides neither a shared-owner decision nor an exact deviation/affected-consumer ledger for those changes. This is one substantive provenance and shared-consumption Finding, `NL-G9-F01`, affecting `NL-G9-AC-06` and `NL-G9-AC-12`.

No current Gate 9 runtime instance was identified. The batch controller's earlier read-only probes of ports 3015, 3017, 3018, 3021 and 3022 ended at 404 for the target route; they are retained only as controller evidence and are not described as this reviewer's runtime run. Therefore route response, real keyboard states, native zoom, live targets, scope fixtures and receiver layers remain specifically unverified rather than being converted into implementation failures.

## 2. Object and evidence boundary

| Object | Read-back result | Evidence class |
|---|---|---|
| Candidate identity | Exact full commit `2c97fe19b56f14e12c6e27daa7fd3c9a49207570`; parent `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb`; worktree porcelain empty at inspection | `SOURCE_INSPECTION` |
| Approved inputs | Gate 6 package, Buyer Clean B V0.2 and Contract C V0.1 hashes match the package identities | `SOURCE_INSPECTION` |
| Page payload and chain | Netherlands JSON payload SHA-256 `1e26f2795de6880c07f72c73285832de72014920311fd65d9b278d375e01fb8d`; route→query→DTO→shared template and metadata source inspected | `SOURCE_INSPECTION` |
| CMS readback | Developer record says local post `18521` and the same payload hash; no CMS operation or independent live readback was performed by Gate 9 | developer evidence readback |
| 1440 / 768 / 390 | All originals opened; hashes match `runtime-matrix.json`; complete flow, module order, actions and Footer are visible without observed clipping or horizontal crop | `STATIC_VISUAL` |
| 390 menu | Original opened; current marker, RFQ and Close visible. The image cannot prove focus containment or return | `STATIC_VISUAL` |
| Developer test claims | The submitted report and actual test source were read. No test, build, service or CMS mutation was rerun in Gate 9 | developer evidence + `SOURCE_INSPECTION` |
| VVVF | Official indexed result at the exact URL still supports the limited sections statement; independent direct open timed out | current source check, reachability `NOT_VERIFIED` |

The four development screenshots are durable originals in the exact candidate worktree. Their hash and readback record is in [visual-readback.json](gate9-v0.1/visual-readback.json). Source and approved-input identities are in [source-and-artifact-identities.json](gate9-v0.1/source-and-artifact-identities.json).

## 3. Twelve acceptance conditions

`PASS` below is limited to the evidence object named in the row. A partial source or static pass does not become an actual-runtime pass.

| Acceptance ID | Conclusion | What is verified | What remains / non-pass reason |
|---|---|---|---|
| `NL-G9-AC-01` | `NOT_VERIFIED` | Exact Page ID, EN route contract, clean canonical, `noindex,nofollow`, sitemap-omission claim and no hreflang are consistent in candidate source and developer matrix | No current route/head/robots/sitemap response from the exact candidate was independently available |
| `NL-G9-AC-02` | `PASS` | Exact five-module Buyer Clean content and order, one H1, IKHLAS/Malaysia-origin statement, one COO sentence, VVVF qualifier and prohibited-claim boundary match B/C in the candidate payload; all are visible in the opened full-page images | Runtime data replacement outside the exact payload-parity guard was not observed; the source guard rejects a differing payload |
| `NL-G9-AC-03` | `NOT_VERIFIED` | Candidate uses the exact VVVF label and `https://www.vvvf.nl/brancheorganisatie`; the limited member-section expression remains supported by recent indexed official content and is not broadened | Same-day direct destination reachability is unverified because the independent open timed out. Timeout is not classified as a broken link |
| `NL-G9-AC-04` | `PASS` | Opened 1440×3576, 768×4184 and 390×5544 originals materially match the frozen hierarchy; full copy, five modules, actions and Footer are visible with no observed clip, blank band or obstruction | These are developer-captured static originals, not a fresh independent runtime capture |
| `NL-G9-AC-05` | `NOT_VERIFIED` | Source and developer test show one H1, 44px page actions, 390 menu open/initial focus/Escape return, zero reported serious/critical Axe findings and no reported horizontal overflow | Per-control visible focus, last filled mobile RFQ focus, 768 menu operation, Cookie dialog operation, native 200%, forced colors, non-Chromium, physical device and assistive technology remain unverified |
| `NL-G9-AC-06` | `FAIL` | Static images show expected Header/Footer/Logos, Markets current, permanent RFQ, exact legal utilities, no Terms and a Cookie Settings control. Source contains the current functional teal and last-menu-RFQ focus separator | `NL-G9-F01`: the candidate modifies shared Chrome/Consent/global layout without the required shared-owner decision or adequate affected-consumer evidence. Current-page appearance cannot close shared provenance and regression scope |
| `NL-G9-AC-07` | `NOT_VERIFIED` | Candidate hrefs and registered route source files exist for Home, Markets, EU, Products, Documents, RFQ, Request Documents and shared navigation/legal destinations; developer evidence activated RFQ and Documents locally | All page and shared links were not activated by this independent review on a current exact-candidate runtime. Source-file presence is not a response check |
| `NL-G9-AC-08` | `NOT_VERIFIED` | RFQ href carries only editable `destination_country=Netherlands` plus `source_page_id=MARKET-EU-NL`; developer test source checks navigation and editing without submission | Current configuration/account/destination binding, failure/retry/unavailable behavior, positive provider acceptance and actual receipt are not proved. No real submission was authorized |
| `NL-G9-AC-09` | `NOT_VERIFIED` | Documents href carries source and market identity only; source logic does not prefill country, Grade or document types; developer test source checks eight fields and empty Country/Region without submission | Current receiver configuration, failure path, positive provider result, mailbox/final receipt and production privacy/release controls remain with CONV-DOC and are unverified here |
| `NL-G9-AC-10` | `NOT_VERIFIED` | Exact Title, Meta, canonical and EN semantics are in the payload/source; metadata source emits `WebPage` + `BreadcrumbList` only, no LocalBusiness/Product/Offer/FAQ/HowTo; developer matrix reports matching SSR | No independent raw initial HTML/head/JSON-LD response from the exact candidate was available. Source parity does not by itself prove runtime output |
| `NL-G9-AC-11` | `NOT_VERIFIED` | Source rejects wrong site before query and DTO rejects missing/wrong scope, path, status, Page ID or payload; cache tags are `tio2-my` scoped. Developer unit/integration source covers these cases | Correct/missing/wrong-scope fixtures were not independently exercised against current CMS/API/route/cache/menu/media/form/receiver outputs. Developer tests were not rerun |
| `NL-G9-AC-12` | `FAIL` | Exact commit, parent, clean state, Gate 6 package hash, page payload, source mapping, developer evidence and single-commit rollback are traceable | `NL-G9-F01`: the return calls shared packages reused while the commit materially changes them and omits the required owner decision/deviation ledger/affected-consumer regression disposition |

Summary: `PASS=2`, `FAIL=2` acceptance IDs, `NOT_VERIFIED=8`, `NOT_APPLICABLE=0`. The two FAIL rows arise from one stable Finding and must not be counted as two defects.

## 4. Finding and current issue ledger

### `NL-G9-F01` — Shared owner changes are bundled without approval/provenance and affected-consumer closure

| Field | Record |
|---|---|
| Acceptance IDs | `NL-G9-AC-06`, `NL-G9-AC-12` |
| Candidate | `2c97fe19b56f14e12c6e27daa7fd3c9a49207570` |
| Severity / treatment | Gate 8 return mandatory; shared owner + Gate 8 |
| Approved expectation | Dispatch §2: Header/Footer, Logo, Consent, RFQ and Documents are maintained by their original shared owners; pages consume and integrate them. Shared defects are coordinated with the original owner rather than silently absorbed by a page batch. Return §3 must state shared consumption and associated regression |
| Actual | The commit changes the shared Chrome breakpoint from 900px to 1101px, replaces compact menu layout/appearance, adds the compact RFQ inside the dialog, changes Cookie Settings to native `<dialog>` with different focus/overflow styling, changes shared Header/Footer typography/layout, and applies the Malaysia shared font to both EN and BM root layouts. The return summarizes these as reused shared mechanisms and does not identify an owner decision, deviation approval, affected consumers or regression boundary |
| Evidence | Candidate diff; `malaysia-global-chrome.tsx` lines 41, 51, 120 and 131; `malaysia-global-chrome.module.css` lines 17, 40 and 49; `malaysia-cookie-settings.tsx` lines 65 and 99; EN/BM layout font bindings; [acceptance-diagnostics.json](gate9-v0.1/acceptance-diagnostics.json) |
| Reader/system impact | The Netherlands page itself looks correct in supplied images, but the same shared changes can alter other Malaysia pages, BM privacy, compact navigation, Cookie focus/scroll behavior and breakpoint exposure. Gate 9 cannot treat page screenshots as approval of shared-owner scope |
| Closure evidence | Either (a) the current shared owner accepts the exact diff and supplies an affected-consumer ledger plus focused regression evidence for EN/BM shared consumers, 768/390 Menu, Cookie dialog, legal utilities, visible focus/return and no optional Analytics, or (b) Gate 8 removes/splits the unapproved shared changes and returns a page candidate consuming the approved shared baseline. Bind the result to a new exact commit and preserve this Finding ID for recheck |

Current status: `OPEN`. No additional implementation Finding is asserted from missing runtime evidence.

## 5. VVVF freshness boundary

The exact official URL is still indexed under the same page title and the official indexed content, reported as crawled approximately two months ago, continues to list the section clusters used by the Netherlands copy: construction, printing ink, automotive refinish, marine, protective coatings, fire-resistant coatings and roads/road marking. This supports the visible sentence as written and does not support demand, ranking, market share, IKHLAS capability or Grade suitability.

The independent direct open on 2026-09-08 timed out. That means direct reachability is `NOT_VERIFIED`, not `FAIL`. `NL-DEP-04` remains with the content/source owner for a successful dated direct response before Gate 9/10 closure. Full record: [vvvf-freshness.json](gate9-v0.1/vvvf-freshness.json).

## 6. Remaining verification and exact closure conditions

| Remaining object | Already verified | Missing layer/state | Owner able to close | Sufficient closure evidence |
|---|---|---|---|---|
| Exact candidate runtime | Source identity and developer originals | current route/head/SSR and live page state | Gate 8 environment owner + Gate 9 | accessible production-equivalent instance bound to returned commit/data, then independent route/head/DOM capture |
| Shared Chrome/Consent | current-page static appearance and source paths | shared-owner authority and affected-consumer regression | shared owners + Gate 8 | `NL-G9-F01` closure evidence above |
| Responsive/a11y | static three-view flow; developer 390 menu trace | per-control focus, 768 menu, Cookie, native 200%, forced-colors, other engine/device/AT | Gate 8 prepares environment; Gate 9/read-only accessibility owner verifies | dated actual-operation traces and valid images/geometries bound to exact candidate |
| Internal routes | href/source inventory and developer RFQ/Documents navigation | independent activation of page/shared destinations | Gate 8 runtime owner + Gate 9 | click/navigation traces showing exact same-scope targets and correct context; no fallback |
| RFQ | source context and editable-country developer trace | configuration/account/destination, failure/retry, provider acceptance and receipt | CONV-RFQ / operational owner | current binding evidence plus authorized correlated failure and positive/receipt evidence; no new send is authorized by this report |
| Request Documents | source-only initial-state contract | current binding, failure, provider and final receipt/release evidence | CONV-DOC / operational owner | correlated current receiver-layer evidence under existing authority; no new send is authorized by this report |
| VVVF | exact label/URL and recent indexed semantic support | successful dated direct reachability | content/source owner | successful direct response and page-body support at the same exact URL |
| Scope isolation | strict source guards and developer tests read | actual correct/missing/wrong-scope CMS/API/cache/route/form/media behavior | Gate 8 environment owner + Gate 9 | independent fixture traces bound to exact commit/environment without cross-scope fallback |

The five known local 404 dependencies recorded for the four-page batch are not attributed to this Netherlands page without an actual Netherlands link and fresh route trace. No hidden link, replacement destination or Contact/email fallback is requested.

## 7. Stop boundary

Gate 8 should address only `NL-G9-F01` and provide a runtime/owner evidence package for the specific unverified layers. No page-copy or Netherlands visual rewrite is requested. No real form submission, code modification by D23, merge, deployment, production write, DNS, indexing or publication is authorized. Passing the eventual Gate 9 recheck will still not authorize Gate 10.

Evidence index:

- [source-and-artifact-identities.json](gate9-v0.1/source-and-artifact-identities.json)
- [visual-readback.json](gate9-v0.1/visual-readback.json)
- [vvvf-freshness.json](gate9-v0.1/vvvf-freshness.json)
- [acceptance-diagnostics.json](gate9-v0.1/acceptance-diagnostics.json)
