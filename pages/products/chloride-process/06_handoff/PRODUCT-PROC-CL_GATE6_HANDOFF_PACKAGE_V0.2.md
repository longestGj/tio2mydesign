# PRODUCT-PROC-CL Gate 6 Handoff Package V0.2

2026-09-08 · Package ID `CL-G6-HANDOFF-02` · `READY_FOR_REVIEW / NOT_APPROVED / NOT_SENT`

## 1. Single receiving entry and authority

This is the sole V0.2 Gate 6 delivery candidate for `PRODUCT-PROC-CL`, EN, `/products/chloride-process-titanium-dioxide/`, `site_scope=tio2-my`. It is a source-bound implementation and acceptance specification, not a second page Manifest or Buyer Copy source.

Authority order: current user decisions and root governance → current Manifest V0.24 → approved Brief V0.2 → PRODUCT relationship matrix/audit V0.3 → approved A V0.4/B V0.2/C V0.6 → approved Gate 3 structure → complete visual freeze `CL-G5-V01-SOURCE-01` and valid review/closure chain → current shared-owner and receiver contracts → this derived package. B V0.2 remains the sole visible-copy editor; C V0.6 remains the action, metadata, GEO and Schema authority.

| Delivery object | Exact identity / role |
|---|---|
| Visible copy | `04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`; SHA-256 `b4314b4b80f3c047fbb2481246a93894eda4ee572329f8b1f606b85bc5853a0d` |
| Behavior/machine contract | `04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.6.md`; SHA-256 `c0a4554deb11a222384604a5eda369ee2da901d1f925915f8334a3c9d95687c0` |
| Frozen prototype | `04_planning/gate5-v0.1/source/index.html`; SHA-256 `ac4300f4c4301ef570428bef9e6bded5724f51263499c530fe84a935778aca8d` |
| Visual freeze | `CL-G5-V01-SOURCE-01`; source-combination SHA-256 `fb13f68d7ebf96c6e58e8551c5071a74c2ebc662c359ba7087f6d549ee056f51` |
| Visual evidence | 1440×3301@1x, 768×4238@1x and 390 logical rendered 780×11562@2x complete pages plus approved anchor, menu, Cookie and hover/region states; exact identities remain in `approval_core/export-inventory.json` |
| Execution report | `05_review/PRODUCT-PROC-CL_GATE6_EXECUTION_REPORT_V0.2.md`; execution self-check only |

Gate 8 must first inspect its actual project and decide how to reuse, adapt or newly implement the requirements. This package does not prescribe a post type, REST/GraphQL field name, component path, cache product, database schema or code architecture. The prototype may be assessed for reuse; direct merge readiness is not claimed. No page-private Header, Footer, Logo, legal or Consent fork is allowed.

## 2. Fixed public result

The public page contains the shared Header/breadcrumb, then exactly five page-owned modules in this order:

1. B-01 Hero;
2. B-02 What the Chloride Process Tells You;
3. B-03 Explore Chloride-Process Grades;
4. B-04 How to Evaluate a Chloride-Process Grade;
5. B-05 Discuss Your Chloride-Process TiO2 Requirement;

and then the shared Footer/Consent controls.

The B-03 list is one continuous, unranked set. Exact summaries come only from B V0.2 and may not be independently edited here.

| Position | Grade ID | Exact clean target | Machine/list rule |
|---:|---|---|---|
| 1 | `M-350` | `/products/m-350/` | Visible `ListItem`; position records display order only |
| 2 | `M-510` | `/products/m-510/` | Same |
| 3 | `M-896` | `/products/m-896/` | Same; wording such as “Superior” is the approved exact summary, not a ranking signal |
| 4 | `M-895` | `/products/m-895/` | Same |
| 5 | `M-200` | `/products/m-200/` | Same |
| 6 | `M-210` | `/products/m-210/` | Same |
| 7 | `M-340` | `/products/m-340/` | Same |
| 8 | `M-886` | `/products/m-886/` | Same |

No M-2377, M-996, M-2196, M-108, M-52 or CR-901 Chloride entry may be emitted. No hidden Grade–Application matrix, negative suitability, best/better, equivalence, replacement, price, inventory, availability, shipping, rating, review, certification, plant or process-superiority relationship may be derived.

## 3. Approved-source → implementation → Gate 9 mapping

| Source requirement ID | Approved source and requirement | WordPress-manageable semantic result | Next.js observable result | Gate 9 IDs |
|---|---|---|---|---|
| `CL-SRC-01` | Brief/C §1: one EN Process page at the registered route, primary topic and scope | One page record bound to `PRODUCT-PROC-CL`, EN, clean route and `tio2-my`; lifecycle/internal controls stay non-public | Only the matching same-scope record renders at the clean route | `CL-G9-01`, `CL-G9-18` |
| `CL-SRC-02` | B/C §2: B-00…B-05 and five page modules | Editors can manage the approved page fields/blocks while preserving locator, semantic heading and fixed module order | Exact B copy renders as extractable text with one H1 and the fixed module order | `CL-G9-02` |
| `CL-SRC-03` | PRODUCT V0.3 + C §§1,3.3,7: eight fixed Chloride Grades | Ordered relation entries bind Grade ID, exact B summary, clean same-scope Grade target and approved fixed position | Exactly eight complete records render in the fixed order; ordinary links remain crawlable | `CL-G9-03`, `CL-G9-12` |
| `CL-SRC-04` | C §3.2: Hero primary fragment | Action semantics store target fragment `#explore-chloride-process-grades`, not a product selection | Click/keyboard reaches and focuses the visible B-03 H2; direct fragment and no-JS native fragment remain usable | `CL-G9-04` |
| `CL-SRC-05` | C §§3.2–3.3: RFQ/Documents source-only and other clean navigation | Action records distinguish target owner and internal attribution policy; no Grade/Application/quantity/destination/document prefill field is derived | RFQ and Documents transfer only `source_page_id=PRODUCT-PROC-CL`; Grade links and all other actions transfer no selection context; links remain clean | `CL-G9-05`, `CL-G9-15` |
| `CL-SRC-06` | C §4: complete text-led page and no page-owned dynamic states | Optional image is nullable; page-owned form/filter/selector/loading/result/error/success state fields are absent | No image placeholder or invented page state; missing required page content is handled as contract failure, not a buyer-visible empty module | `CL-G9-06`, `CL-G9-09` |
| `CL-SRC-07` | C §5: exact SEO, canonical, language and environment robots | Manage exact title/description/canonical/lang and environment-controlled robots under the same page/scope | Rendered head equals §7; query, fragment and attribution never create metadata/canonical/sitemap variants | `CL-G9-10` |
| `CL-SRC-08` | C §5: complete Open Graph conditions | Manage exact OG title/description/URL/type plus nullable approved social-image reference | Render exact required fields; omit `og:image` now; emit it only after a separately approved page-relevant asset is bound | `CL-G9-11` |
| `CL-SRC-09` | C §5: complete X/Twitter conditions | Manage exact X title/description plus conditional card/image as one approved asset treatment | Render title/description; omit card/image now; emit both only when the approved asset treatment supports the selected card type | `CL-G9-11` |
| `CL-SRC-10` | C §§6–7: visible GEO entities and Schema graph | Manage source entities/relations by reference to visible content and shared WebSite/Organization IDs | One `WebPage`, one three-item `BreadcrumbList`, one eight-entry unordered `ItemList`; no prohibited nodes/claims | `CL-G9-12`, `CL-G9-13` |
| `CL-SRC-11` | Approved complete visual and C §4 | Page records select the approved no-image visual branch; shared shell remains owned externally | 1440/768/390 and applicable anchor/menu/Cookie/hover/focus results match the exact frozen visual | `CL-G9-14`, `CL-G9-16` |
| `CL-SRC-12` | Global Chrome/CTA/Logo/Footer legal/Consent contracts | Page stores only shared references and current nav key `Products`; no copied owner payload | Exactly one active accessible primary navigation surface, one current Products link in that surface, fixed RFQ, approved Logos, legal order, no visible `CURRENT`, no Terms | `CL-G9-15`, `CL-G9-16` |
| `CL-SRC-13` | Governance §14 and Gate 6 contract: strict scope isolation | All page, relation, SEO, action and media queries require `site_scope=tio2-my`; cache identity includes scope and page/route | Wrong/missing scope never renders this or fallback-site content; no menu/SEO/form/media/cache leakage | `CL-G9-07`, `CL-G9-08`, `CL-G9-18` |
| `CL-SRC-14` | C §§3–4 and current receiver/route owner records | Store route-owner references and source-only policy without copying downstream fields/states | All required destinations resolve; RFQ/Documents receivers preserve editable owner behavior and observable source-only attribution | `CL-G9-15`, `CL-G9-17` |

## 4. WordPress semantic management contract

WordPress must allow the authorized site editor to manage the approved meaning without editing code, while preventing internal governance data from becoming public content. Gate 8 chooses the technical model after checking the actual project.

| Semantic group | Required manageable meaning | Validation / public boundary |
|---|---|---|
| Page identity | Page ID, language, clean route, page type and `site_scope` binding | All are required; scope is not inferred from another site; internal lifecycle/approval/Finding values do not render |
| Page content | Breadcrumb labels/targets, eyebrow, H1, five module headings, paragraphs and action labels sourced from B | Required content is version-bound; no empty heading/module; B remains the editing authority for the current values |
| Grade directory | Eight Grade references, fixed positions, exact B summaries and exact clean URLs | Exactly eight unique IDs and positions 1–8; duplicates, omissions, unknown IDs, URL mismatch or position change are invalid |
| Actions | Action type, owner/target, fragment ID and context-transfer policy | RFQ/Documents policy is source-only; no silent Grade/Application/quantity/destination/document selection |
| SEO/language | Exact SEO title, description, canonical, `en`, production/preview robots policy | Query, fragment and attribution values cannot alter canonical or create indexable variants |
| Social | Exact OG/X text values and nullable approved asset reference/treatment | Current image reference is null; no placeholder, generic, broken or unapproved asset; X card is conditional with its approved image treatment |
| Schema/GEO | Node role, shared entity references, breadcrumb items, visible Grade references/order | Machine meaning cannot exceed the visible B; shared WebSite/Organization IDs are referenced, not duplicated |
| Shared dependencies | Global Chrome/Logo/legal/Consent owner references and `Products` nav key | No page-private fork; shared content is not copied into the page record as a competing owner |
| Release controls | Destination readiness and production/indexing controls | Internal only; a false dependency blocks the named later judgment and never becomes buyer-visible placeholder/readiness text |

## 5. Next.js positive and failure behavior contract

| Case | Required observable behavior | Forbidden behavior | Gate 9 proof |
|---|---|---|---|
| Positive same-scope payload | Resolve the current WordPress-derived `PRODUCT-PROC-CL` payload in `tio2-my`; validate required semantics; render exact content, order, actions, shared shell, head and Schema | Page-private hardcoded/static content as the production content authority, client-only hidden copy, screenshot-only text, inferred Grade relationships | WordPress edit/read-back + CMS/API trace + SSR/rendered DOM/head/JSON-LD + route response |
| Optional image/social asset empty | Render the approved complete text-led no-image page; omit `og:image`, `twitter:card` and `twitter:image`; keep exact OG/X text fields | Placeholder media, broken URL, generic factory/stock/certificate image, default card pointing to absent image | Empty-value fixture and rendered head/body capture |
| Required page record missing | Do not render a partial or fallback page; return the platform's controlled non-success/not-found result and record the source failure | Cross-scope fallback, another Process page, stale unrelated cache or buyer-visible governance placeholder | Missing-record fixture, response/body/cache observation |
| Fetch/timeout/parse error | Use a controlled error/unavailable path; do not claim page success or publish partial content | Silent empty modules, stale cross-scope data, success status used as the sole proof | Error injection and observable response/log boundary |
| Wrong or missing scope | Reject the payload before public render; no page, metadata, Schema, menu, form context or media from another scope may leak | Default-scope lookup or fallback to TIOVAR/mytio2/frozen site | Wrong-scope and absent-scope fixtures across body/head/JSON-LD/cache |
| Grade missing/extra/duplicate/unknown | Reject the invalid required Grade collection; do not expose a seven-item, nine-item or mixed list | Partial list, hidden missing row, auto-imported replacement/extra Grade | Negative fixtures and visible/JSON-LD cardinality checks |
| Payload array reordered | Output must remain the approved fixed order only when stable positions and IDs remain valid; changed/duplicate/missing positions are rejected | Blind API-array order, editorial drag reorder changing public meaning without approval | Permuted-array fixture plus altered-position fixture |
| Cache hit | Cache identity and invalidation preserve `site_scope=tio2-my`, Page ID/clean route and a compatible content-contract identity; all cached payloads still pass validation | Shared cross-scope key, canonical/head mismatch or stale incompatible payload | Key/tag evidence + repeated route/head/body checks |
| Revalidation/cache-origin failure | A last-known-good response may be used only if it is the same scope/route, contract-compatible and still validates; otherwise use controlled unavailable behavior. Invalid refresh data must not poison a valid cache. | Serving another scope/page, partial refresh, or claiming fresh data without evidence | Forced revalidation failure, invalid refresh and recovery evidence |
| Downstream route unavailable | Treat every required same-scope destination as a release dependency; no dead/disabled/placeholder link or invented Contact/email fallback | Conditional hiding or relinking without approved source | Route matrix with owner response and complete-site release decision |

The exact HTTP status, cache product and error component are Gate 8 technical choices, but Gate 9 must be able to distinguish successful exact rendering, controlled failure and forbidden fallback from actual evidence.

## 6. Module, action and source-only contract

| Visible location | Action | Required target/result | Context rule |
|---|---|---|---|
| B-00 | Home / Products | `/` / `/products/`; current breadcrumb item is text | No context |
| B-01 | Explore Chloride Grades | `#explore-chloride-process-grades`; visible B-03 H2 focus/scroll | No stored selection; native fragment remains valid without JS |
| B-01 + B-05 | Request a Quote | `/request-a-quote/` | Internal `source_page_id=PRODUCT-PROC-CL` only; no Grade/Application/quantity/destination prefill |
| B-02 | Compare Chloride and Sulfate Routes | `/resources/chloride-vs-sulfate-titanium-dioxide/` | No imported comparison content or context |
| B-03 | Eight View Grade actions | Exact targets in §2 | Ordinary navigation; reading/clicking never selects a Grade elsewhere |
| B-04 | Explore Applications | `/applications/` | No filter or inferred Grade relationship |
| B-04 | Request Documents | `/request-documents/` | Internal `source_page_id=PRODUCT-PROC-CL` only; no Grade/document type preselection |

The attribution may use a technical mechanism chosen by Gate 8, but its observable receiver meaning must be source-only. Query, internal state or analytics attribution must not alter the public copy, canonical, social URL, Schema, sitemap identity or indexable URL set.

## 7. Exact SEO, Open Graph and X/Twitter contract

| Surface | Current required output | Condition/failure rule |
|---|---|---|
| `<title>` | `Chloride Process Titanium Dioxide | TiO2 Malaysia` | Exact on the clean route |
| Meta description | `Explore eight Malaysia-origin chloride-process titanium dioxide grades, understand what the process label means, and review product information or request a quote.` | Exact; same source as visible B |
| Canonical | `https://tio2malaysia.com/products/chloride-process-titanium-dioxide/` | Self-canonical; unchanged by query, fragment or source attribution |
| HTML language | `en` | No hreflang for the current English-only page |
| Robots | Preview/staging non-indexable; production `index, follow` only after Gate 9 release QA plus explicit publication/indexing authority | A planning `noindex,nofollow` is not production proof |
| `og:title` | Same exact value as SEO title | Required |
| `og:description` | Same exact value as Meta description | Required |
| `og:url` | Same exact value as Canonical | Required; clean URL only |
| `og:type` | `website` | Required |
| `og:image` | Omitted for the current no-approved-social-asset state | Emit only if a separately approved page-relevant asset treatment is bound; never placeholder/broken/generic |
| `twitter:title` | Same exact value as SEO title | Required |
| `twitter:description` | Same exact value as Meta description | Required |
| `twitter:card` | Omitted in the current no-approved-asset state | Select a card type only together with the actual approved asset treatment |
| `twitter:image` | Omitted in the current no-approved-asset state | Emit only the corresponding approved valid asset; never placeholder/broken |

No social or SEO surface may introduce supplier/location stuffing, comparison ownership, model-keyword ownership, hidden Grade–Application mappings or a stronger fact than B.

## 8. GEO and Schema boundary

Required graph:

- one `WebPage`: `@id = Canonical + #webpage`, clean `url`, B-01 H1 as `name`, exact Meta description, `inLanguage=en`, shared same-scope `WebSite`/Organization references, breadcrumb reference and `mainEntity` reference to the visible Grade ItemList;
- one `BreadcrumbList`: `@id = Canonical + #breadcrumb`; Home, Products and current page at positions 1–3 with labels/order equal to B-00;
- one `ItemList`: `@id = Canonical + #chloride-grade-list`; name equal to B-03 heading; `numberOfItems=8`; `itemListOrder=https://schema.org/ItemListUnordered`; eight `ListItem` entries with positions, exact Grade names and clean URLs matching §2.

ItemList position records the approved display sequence and does not assert ranking. Do not emit page-level or list-entry `Product`, `Offer`, `AggregateOffer`, price, inventory, availability, shipping, rating, review, certification, manufacturing/plant operation, superiority or suitability. Do not emit hidden Grade–Application mappings, `FAQPage` or `QAPage`. Visible list, GEO relation and ItemList must change together only after an approved source change.

## 9. Shared owners and dependencies

| Dependency ID | Requirement / current evidence limit | Owner and verification stage | Failure boundary |
|---|---|---|---|
| `CL-DEP-ROUTES-01` | Clean page route plus Products, Applications, RES-PROC, RFQ, Documents and all eight Grade destinations; planning links/local interception are not availability proof | Route owners + Gate 8; Gate 9 actual route matrix | Any required dead/unready target blocks Gate 9/complete-site release; no hide/disable/placeholder/fallback |
| `CL-DEP-RFQ-01` | RFQ source-only/no-prefill and receiver result; current receiver environment blocker remains open | CONV-RFQ owner/Gate 8; Gate 9 production-equivalent positive/failure proof | No success, receipt or source-attribution PASS from HTTP 200 or local interception alone |
| `CL-DEP-DOC-01` | Request Documents source-only/no-prefill; provider acceptance exists but mailbox appearance and production controls remain separate | CONV-DOC owner; Gate 9/release controls | No automatic delivery claim; actual receiver/context evidence required |
| `CL-DEP-CHROME-01` | Global Chrome V0.5, CTA Addendum V1.0 and Production SVG Manifest V1.0 | Home/Global Chrome/Brand owner; Gate 8 shared implementation, Gate 9 page consumption | No private fork; wrong current-state/accessibility/Logo consumption blocks shared/page acceptance |
| `CL-DEP-LEGAL-01` | Footer Legal Utility V1.0 + No-Terms decision; three legal links and Cookie Settings | Global Chrome/Legal owner; Gate 9 shared/page consumption | Stale Terms, wrong order/route or nonfunctional settings blocks release |
| `CL-DEP-CONSENT-01` | Shared Consent current `no_optional_analytics`; local modal proof does not prove production storage | Shared Consent owner; Gate 8/9 actual state and persistence | No production CMP PASS from prototype interaction |
| `CL-DEP-SEO-01` | Production SEO/GEO/Schema/robots/sitemap and exact OG/X output are unimplemented for this page | Page implementation owner Gate 8; Gate 9 rendered-output review | Contract inspection cannot pre-sign runtime output or indexing readiness |
| `CL-DEP-SCOPE-01` | Query/route/cache/menu/SEO/form/media isolation for `tio2-my` | Gate 8 platform/page owner; Gate 9 negative fixtures | Any cross-scope fallback/leak blocks page and release |
| `CL-DEP-A11Y-DEVICE-01` | Physical-device and actual touch evidence absent | Gate 9 or separately authorized device review | `CL-G9-16` remains unsatisfied until an actual touch device covers the applicable interactions/layout, unless a different proxy is separately approved and recorded with its limits |
| `CL-DEP-A11Y-ENGINE-01` | Non-Chromium evidence absent; Chrome planning evidence only | Gate 9; at least one applicable non-Chromium engine, with platform limits stated | Chrome screenshots/runtime cannot satisfy this dependency |
| `CL-DEP-A11Y-ZOOM-01` | Native browser UI 200% zoom absent; prior 720×500 DPR2 reflow is equivalent-layout evidence only | Gate 9 actual browser UI zoom | No native-zoom PASS may be inferred from CSS viewport simulation |
| `CL-DEP-A11Y-AT-01` | Screen-reader/assistive-technology and full accessibility-tree output absent | Gate 9 with named AT/browser combination and accessibility-tree evidence | Visual focus or DOM attributes alone cannot satisfy announcement/tree behavior |
| `CL-DEP-RELEASE-01` | Gate 6 review/closure, handoff, Gate 8–10, publication/indexing remain incomplete/not authorized for this page | Controller/User according to current workflow | Package stays `NOT_SENT`; no implementation or publication implication |

## 10. Stable Gate 9 acceptance conditions

The same IDs must appear in the Gate 8 receipt and Gate 9 report. Each runtime PASS must bind the actual commit/ref, clean/dirty worktree state, environment, data source, implementation location and evidence date.

| Gate 9 ID | Observable acceptance condition and required evidence | Failure / owner |
|---|---|---|
| `CL-G9-01` | Clean route returns the intended EN `PRODUCT-PROC-CL` page from `site_scope=tio2-my`; Page ID/route/scope trace is explicit | Wrong record/scope/route or untraceable data fails; page/platform owner |
| `CL-G9-02` | SSR/rendered DOM contains exact B V0.2 copy, one H1 and B-00…B-05/five page modules in order; normalized source comparison supplied | Missing/reworded/hidden/duplicate content fails; page content integration owner |
| `CL-G9-03` | Visible directory has exactly the eight §2 records, exact B summaries, clean URLs and fixed order; no extra Grade | Omission, duplicate, reorder, wrong URL/summary or extra Grade fails; page/data owner |
| `CL-G9-04` | Explore works by pointer and keyboard, focuses visible B-03 H2, preserves next Tab to M-350, and works by direct/native no-JS fragment | Scroll-only without useful focus, broken fragment or JS-only core access fails; page implementation owner |
| `CL-G9-05` | RFQ/Documents receive only `source_page_id=PRODUCT-PROC-CL`; Grade/Application/quantity/destination/document remain unselected/editable per owner; Grade links carry no selection | Any silent prefill or missing/wrong attribution fails; page + receiver owners |
| `CL-G9-06` | With optional page/social image null, page remains complete and text-led, no placeholder/broken media, and conditional social image/card fields are absent | Empty visual slot or unapproved/generic asset fails; page/media owner |
| `CL-G9-07` | Correct payload renders; missing/error/wrong-scope/incomplete Grade fixtures produce controlled failure and no fallback/partial public page | Any partial/cross-scope/default content fails; page/API owner |
| `CL-G9-08` | Permuted response order cannot alter approved output; changed/missing/duplicate positions fail validation; cache keys/tags and invalidation isolate scope/page/contract | Blind reorder, cache mixing or invalid refresh poisoning fails; data/cache owner |
| `CL-G9-09` | No page-owned form/filter/selector/loading/result/validation/success/failure/FAQ/accordion/media-present state is invented; required-data failure stays an implementation error path | Buyer-visible internal readiness, empty module or copied downstream state fails; page owner |
| `CL-G9-10` | Rendered title, description, canonical, lang/hreflang and environment robots equal §7; query/fragment/source variants do not change canonical/head/sitemap identity | Exact-value, environment or variant mismatch fails; SEO/platform owner |
| `CL-G9-11` | Rendered OG/X equals every §7 rule. The current no-asset path is mandatory. If a separately approved asset treatment is added to the locked implementation input, its OG image and paired X card/image path also becomes mandatory; URLs must resolve where applicable. | Missing exact text, dirty URL, placeholder/broken image or card without approved treatment fails; SEO/media owner |
| `CL-G9-12` | JSON-LD contains one WebPage, one 3-item BreadcrumbList and one 8-item unordered ItemList with exact IDs/values/order/URLs and shared entity references | Missing/duplicate/wrong node/cardinality/order/ID fails; Schema owner |
| `CL-G9-13` | JSON-LD and other machine output contain none of C §7.2's prohibited types/claims and no invisible relationship | Product/Offer/FAQ/hidden mapping/superiority/etc. fails; Schema/content owner |
| `CL-G9-14` | 1440, 768 and 390 complete rendered pages plus anchor/menu/Cookie/hover/focus states match `CL-G5-V01-SOURCE-01`; no clipping/overflow and minimum control geometry remains valid | Material visual/responsive/state mismatch fails; page/shared UI owner |
| `CL-G9-15` | Actual page consumes shared Header/Footer/Menu/Logo/legal/Consent; Products current semantics, one active accessible nav surface, fixed RFQ, exact legal order, no visible CURRENT/Terms and no private fork | Shared drift/fork/accessibility exposure fails; shared + page owner |
| `CL-G9-16` | The production candidate is tested in current Chromium plus at least one applicable non-Chromium engine, at native browser UI 200% zoom, on an actual touch device, and with a named screen-reader/AT combination. Evidence covers the page, anchor, active nav surface, menu, Cookie Settings, focus/reading order and long Grade list and distinguishes each environment. A substitute for physical touch is acceptable only if separately approved and its limits are recorded. | Any missing `CL-DEP-A11Y-*` evidence keeps this condition OPEN; Gate 9/accessibility owner |
| `CL-G9-17` | Every required destination is actually reachable in the same release candidate; RFQ/Documents include positive, validation/failure/unavailable and receiver evidence within their owner contracts | Dead route, local-only interception, HTTP-only proof or unresolved receiver blocker fails the relevant Gate 9/release judgment; route/receiver owners |
| `CL-G9-18` | Negative `tio2-my` isolation tests cover queries, route resolution, caches, menu, SEO, form context and media; no other-site content appears before/after cache warming and failure | Any cross-scope fallback/leak fails and blocks release; platform owner |

## 11. Gate 9 → source reverse map

| Gate 9 IDs | Controlling approved sources |
|---|---|
| `CL-G9-01` | Brief V0.2 §§0–1; Registry V0.2 row; keyword master row; C §§0–1; governance §14 |
| `CL-G9-02` | B V0.2 B-00…B-05; C §2; Gate 2 approval/closure |
| `CL-G9-03` | B B-03; C §§1,2,3.3,7.1,8; PRODUCT V0.3 matrix/audit |
| `CL-G9-04` | C §§3.2,4; approved Gate 3/Gate 4 structure and `CL-G5-V01-SOURCE-01` |
| `CL-G9-05` | C §§3.2–3.3,4; CONV-RFQ/CONV-DOC owner contracts |
| `CL-G9-06` | C §§4,5,9–10; approved no-image visual direction/freeze |
| `CL-G9-07…09` | C §4; Gate 6 execution contract V1.1; governance §14; fixed Grade/source rules in C §§1,3.3,7 |
| `CL-G9-10…11` | C §5 in full |
| `CL-G9-12…13` | C §§6–7 in full; B visible content; shared entity owners |
| `CL-G9-14` | Gate 3 approval/closure and handoff; `CL-G5-V01-SOURCE-01`; full visual specification and formal inventory |
| `CL-G9-15` | C §9; Global Chrome V0.5; CTA Addendum V1.0; Production SVG Manifest V1.0; Footer Legal Utility V1.0; No-Terms decision; current Legal/Consent manifests |
| `CL-G9-16` | Gate 3/4/complete-visual unverified-limits records; governance §13; all four `CL-DEP-A11Y-*` rows |
| `CL-G9-17` | C §§3–4,10; current route and receiver owner records; `CL-DEP-ROUTES/RFQ/DOC-01` |
| `CL-G9-18` | Root AGENTS development boundary; governance §14; Gate workflow §§5,10; C §5 variant rule; `site_scope=tio2-my` requirement |

## 12. Finding response, difference and stop

This package is a fresh V0.2 derivation. Relative to V0.1, it replaces the non-executable delivery identity and adds the missing WordPress/Next.js failure matrix, full OG/X conditional contract, named accessibility/device dependencies and a complete stable Gate 9 mapping. It does not change B/C, the prototype, visual assets or any upstream approval.

| Stable independent-review Finding | Package closure location | Claimed closure object |
|---|---|---|
| `CL-G6-IR-F01` | §§1,12 and execution report §§1,5 | New delivery identity and independent derivation; pending reviewer verification |
| `CL-G6-IR-F02` | §§3–6,10–11 | Delivery contract clarified; WordPress/Next.js production implementation remains unverified |
| `CL-G6-IR-F03` | §§3 (`CL-SRC-08/09`), 7, 10 (`CL-G9-11`) | OG/X delivery contract clarified; actual rendered head remains unverified |
| `CL-G6-IR-F04` | §§9–10 (`CL-DEP-A11Y-*`, `CL-G9-16`) | Evidence dependencies made executable and remain OPEN until Gate 9 actual tests |

Existing `CL-G6-F01` is `CLOSED_BY_DELIVERY_MAPPING_IN_V0.2 / PENDING_INDEPENDENT_REVIEW` through §8 plus `CL-G9-12/13`. This status applies only to the missing delivery specification. The frozen prototype remains unchanged and lacks JSON-LD; production Schema remains unimplemented and unverified.

Current result: **`READY_FOR_REVIEW / NOT_APPROVED / NOT_SENT`**. A different reviewer must independently verify this package. Gate 6 remains not closed; `APPROVED_FOR_HANDOFF`, actual handoff and Gate 8–10 are not asserted or authorized. No D16, CMS, code, test, deployment, publication, DNS or indexing action occurred.
