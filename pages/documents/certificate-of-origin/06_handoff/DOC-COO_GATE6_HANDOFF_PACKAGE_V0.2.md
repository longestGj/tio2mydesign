# DOC-COO Gate 6 Handoff Package V0.2

Date: 2026-09-08. Package ID `COO-G6-HANDOFF-02`. Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW / READY_FOR_REVIEW`. This is the single V0.2 development-delivery candidate. B V0.2 remains the sole Buyer Clean text source; this package does not replace the page Manifest or authorize external handoff, Gate 8, development, deployment, publication or indexing.

## 1. Identity and package boundary

| Field | Delivery contract |
|---|---|
| Page / URL / language | `DOC-COO` / `/documents/certificate-of-origin/` / EN |
| Page type / priority | Document-compliance decision page / P1 |
| Primary keyword | `titanium dioxide country of origin certificate` |
| Mapping / fact state | `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` |
| Site scope | exactly `tio2-my` |
| Content source | `04_planning/DOC-COO_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| Behavior source | `04_planning/DOC-COO_GATE2_CONTENT_CONTRACT_V0.1.md` |
| Complete visual source | `COO-G5-V01-SOURCE-01`, HTML SHA-256 `c4f9b788619afa7d1ef6ebf8f43be0c89d1bf177ffbe68326d3399f8db028b31` |
| Package status | Candidate for independent review only; `HANDED_OFF=NO` |

Gate 8 must first inspect its actual repository, integrated page model and shared capabilities. It may reuse or adapt suitable prototype code after that check, but the prototype is not declared production-ready or directly mergeable. The implementation technique, post type, API names, component paths, cache design and test file paths remain Gate 8 decisions. Shared Header/Footer, consent and receiver behavior must consume their owners rather than copying the prototype's local specimen into a new production fork.

## 2. Authority chain

1. Registry and keyword rows fix Page ID, URL, type, owner and cannibalization boundary.
2. Brief V0.3 is approved through `DOC-COO-G1-V03-USER-APPROVAL-01`, as modified by later user decisions.
3. `G2-8PAGE-APPROVAL-01` approves A V0.1, B V0.2 and C V0.1; B owns exact copy and C owns action/machine meaning.
4. Gate 3 source `04b65172...105` and `DOC-COO-G3-PREAUTH-CLOSE-01` lock the six-module structure.
5. Gate 4 V0.2 freeze `COO-G4-V02-SOURCE-01` and accepted review close the representative visual direction.
6. Historical Gate 5 complete visual `COO-G5-V01-SOURCE-01`, `COO-G5-PC-01` and `COO-G5-APPROVAL-01` map to the current merged Gate 4 complete-visual result.
7. Gate 6 execution is authorized by `G6-4PAGE-PRACTICE-01`; V0.2 still requires an independent Reviewer and controller closure.

The site-wide Malaysia-origin authority removes the older cross-page Hold only for the approved phrase. This page does not add that phrase. The transaction-level restrictions remain: no statement that a COO is available for this page, supplied with every shipment, issued for an order, issued by a named authority, accepted by customs, eligible for preferential treatment, or tied to a tariff outcome.

## 3. Ordered page and implementation mapping

| Order / module | Approved visible source and required output | State / behavior / owner |
|---|---|---|
| Shared Header | Global Chrome with Documents current and fixed RFQ | Consume Global Chrome owner; desktop and compact Menu; no visible `CURRENT`; missing scoped Chrome blocks release, no cross-scope fallback |
| Breadcrumb | Home → Documents → Certificate of Origin | `BreadcrumbList` must match the same names, order and URLs |
| `coo-01` Hero | Eyebrow, exact H1, direct answer, Grade-start guidance, Product Hub and first `Request Origin Documentation` | One H1; no certificate artwork; request context follows §5 |
| `coo-02` evidence comparison | Preferential proof/certificate, non-preferential COO and other permitted proof/declaration, each with exact relevance and verification text; RMCD guidance link `https://www.customs.gov.my/en/business/facilitation/rules-of-origin-roo/faq-rules-of-origin` | Desktop table; tablet labeled two-field records; mobile fully stacked labeled fields; no preferred option or universal certificate implication |
| `coo-03` right evidence | Destination, intended use, arrangement/procedure and transaction context; exact Additional Requirements and Country / Region distinction | Preserve order and readable field relationships; does not add destination/scheme form fields |
| `coo-04` origin vs traceability | Exact two-paragraph distinction | No IKHLAS traceability capability relation and no inference that either evidence proves the other |
| `coo-05` request preparation | Five bullets; incomplete-context help; one Grade/multiple types; separate request per Grade; second request action; review-only outcome; Documents Hub | Exact copy; no success, availability, issuance, customs or delivery promise |
| `coo-06` Official Source | Royal Malaysian Customs Department, FAQ Rules of Origin; `https://www.customs.gov.my/en/business/facilitation/rules-of-origin-roo/faq-rules-of-origin`; information through 10 October 2025, page update 5 January 2026, `Last reviewed: 7 September 2026`, general-guidance limitation | Source link remains visible and usable; freshness dependency in §11; no silent source substitution |
| Shared Footer / consent | Approved shared Logo, Footer links, RFQ, legal utilities and Cookie Settings | Consume current shared owners; no page-local legal/consent fork |

Required content must remain semantic/extractable text and data. A screenshot cannot serve as the content payload.

## 4. Public allowlist, denylist and source model

### Public allowlist

- Exact B V0.2 copy and C V0.1 SEO/GEO meaning.
- General distinction between preferential, non-preferential and other permitted proof/declaration.
- The four buyer context categories and origin-versus-traceability distinction.
- Controlled request preparation and review-only outcome.
- The visible RMCD source name, URL and dates.
- Page-local `WebPage`, visible `BreadcrumbList`, visible source citation and review date, plus the minimum shared WebSite reference in §7.

### Public denylist

- Gate, Hold, blocker, Finding, Claim ID, readiness, evidence-state, routing or internal source-capture labels.
- Raw planning, claim-register, source manifest, approval or receiver configuration objects.
- Certificate inventory, file count, download relation, Product, Offer, availability or delivery.
- An issued or promised certificate; named issuer; every-shipment provision; order/batch/shipment origin result.
- Preferential eligibility, customs acceptance, tariff/duty result or trade-measure outcome.
- IKHLAS/Grade traceability capability, `countryOfOrigin` or certification relation.
- Buyer-entered contact fields and free text in metadata, Schema, URLs, logs or analytics. An allowlisted entry-routing query may exist only in its supported entry URL and must not enter metadata, Schema, logs or analytics.

WordPress must manage the approved semantic content, source metadata and page relationships within `tio2-my`. A buyer-safe render object must be derived from an explicit public allowlist. Next.js must use the same approved public object for visible content, metadata and JSON-LD and must not serialize raw planning/evidence/readiness records into HTML, RSC output, hydration data or client props.

## 5. Action, prefill and receiver contract

Both `Request Origin Documentation` actions resolve to `/request-documents/` and carry exactly:

- visible, buyer-editable and removable semantic prefill `prefill.document_types[]=origin_supplier_qualification`;
- hidden, system-owned, non-editable `source_context.page_id=DOC-COO`.

They carry no `prefill.product_grade`, destination, company Country / Region, scheme, requested customs outcome or transaction result. Hidden source attribution cannot satisfy a required buyer field, determine origin/document applicability or appear in visible copy, metadata or Schema.

The receiver owner remains `CONV-DOC`. Its current field contract is exactly eight fields, 14 allowed Grades and five Document Types. `origin_supplier_qualification` maps to `Origin & Supplier Qualification Documentation`; it is a request-routing category and proves no inventory or availability. Product Grade is required before submission, document type requires at least one selection, Country / Region is the company location, and transaction/destination/scheme context belongs in Additional Requirements. A successful visible state requires the current receiver owner's explicit positive acknowledgement; provider acceptance and mailbox appearance are different evidence objects.

Current runtime authority is `CONV-DOC_WEB3FORMS_FREE_PLAN_RUNTIME_DECISION_V0.1.md`: browser-direct Web3Forms to `https://api.web3forms.com/submit`, using `NEXT_PUBLIC_TIO2_MY_REQUEST_DOCUMENTS_WEB3FORMS_ACCESS_KEY`, with receipt only on HTTP 200 JSON `success=true`. The Access Key is an intentionally public routing identifier, but its value must not be written to D23, committed, added to `.env.example`, stored in WordPress or copied into review evidence. The recipient address must not render or be submitted as a routing field. DOC-COO Gate 9 must not send a new real submission without separate authorization; it consumes the receiver owner's current test/release status and verifies only this page's integration.

### Initial load and history behavior

1. Initial navigation from either DOC-COO request action produces the clean CONV-DOC page with `origin_supplier_qualification` visibly selected and removable, and hidden DOC-COO attribution absent from the UI.
2. Buyer edits/removal remain form state and must not be converted into certificate availability, applicability or origin facts.
3. Browser Back and Forward must restore the corresponding history entry's normalized supported URL context without carrying a stale selection/source attribution from another entry.
4. Direct revisit of the same supported URL must deterministically reconstruct the allowlisted document-type prefill and hidden source attribution. Unsupported/stale values are discarded; no empty prefill shell appears.
5. Unsaved buyer-entered contact/free-text data and receiver results must not be inserted into the URL, metadata or Schema. Direct revisit does not promise restoration of unsaved form edits.

## 6. SEO and GEO output

| Field | Required output |
|---|---|
| Title | `Certificate of Origin for Titanium Dioxide | TiO2 Malaysia` |
| Meta Description | `Understand when a titanium dioxide country of origin certificate or other proof may be relevant and what details to provide with a document request.` |
| Canonical candidate | `https://tio2malaysia.com/documents/certificate-of-origin/` |
| HTML language | `en` |
| H1 | `Certificate of Origin for Titanium Dioxide: What Buyers Should Verify` |
| Robots | Gate 10 controlled; no index/follow activation is authorized by this package |
| GEO direct answer | A COO certifies origin of identified goods; relevant evidence/use depend on destination, applicable rules and transaction documents |

Query/prefill variants use the same clean canonical, title, description and Schema identity and create no sitemap or index variants. Social metadata, if emitted, uses the same approved title/description/canonical meaning and does not add availability, origin, certificate, customs or tariff facts.

## 7. Schema and shared-owner contract

Page-local allowed types are `WebPage` and visible `BreadcrumbList` only. `WebPage.name` must equal the visible H1. The WebPage may include its exact URL, title/description meaning, `inLanguage=en`, visible `dateModified`/review date and the visible RMCD citation. Breadcrumb items must equal the visible breadcrumb.

Shared owner source: `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` §2 and §5.

- `https://tio2malaysia.com/#website` is the shared WebSite ID.
- `https://tio2malaysia.com/#organization` is the shared Organization ID.
- DOC-COO adds only `WebPage.isPartOf → https://tio2malaysia.com/#website` as its minimum shared relation.
- If shared nodes are emitted on this route, reuse the exact owner IDs/names and `WebSite.publisher → Organization`. Publisher means site content/operation responsibility only.
- Do not add page-local Organization, `WebPage.publisher`, manufacturer, factory/location, address, ContactPoint, sameAs, Product, Offer, file/download, certification, `countryOfOrigin`, traceability, availability, issuer, preferential/customs/tariff, `FAQPage`, `QAPage` or `HowTo` semantics.

Every emitted node/reference must resolve within the produced graph or the approved shared serializer contract, and all page-local facts must be visible. Query, prefill, hidden source, internal states and buyer inputs never enter JSON-LD.

## 8. Frozen visual, nine widths and accessibility

The visual comparison anchor is `COO-G5-V01-SOURCE-01`: complete HTML `c4f9b788...28b31`, CSS `134474db...df43`, export inventory `d95e7339...9248`. Formal full-page anchors are 1440×4371@1, 768×5257@1 and 390 logical/780×13730@2. The 16-image set also covers applicable Menu, Cookie, hover and focus states.

Gate 9 must inspect the optimized, production-equivalent implementation at exactly nine CSS widths: `1440`, `1280`, `1024`, `900`, `768`, `600`, `430`, `390`, `360`. Use full-page evidence at 1440/768/390 and targeted intermediate-width evidence where sufficient to prove interpolation. Compare all three anchor widths with the frozen visuals and record material changes in hierarchy, content, module connection, table/record transformation, wrapping, spacing, controls, states and shared Chrome. Intermediate widths must have no horizontal overflow, crop, overlap, inaccessible off-screen control or unexplained dead space.

Axe runs are required on the normal page at all nine widths and on applicable Mobile Menu and Cookie states at 768/390. Critical and serious violations must be zero; any other result requires issue-by-issue triage and cannot be hidden by a total. Keyboard checks cover skip/reading order as implemented, all page links, two request actions, Official Source, Mobile Menu focus trap/inert/Escape/return, Cookie focus trap/Escape/return and visible focus. Touch targets remain at least 44×44 CSS px. Also verify 200% zoom/reflow, reduced motion, forced colors where supported, accessibility names/roles, table/record semantics and no color-only state. Screen-reader, device and engine coverage must be named rather than inferred from Axe.

The inherited `COO-G4-SHARED-OBS-01` remains owned by Global Chrome: crossing from an open compact Menu to desktop restores Menu/background state but left focus on BODY in the approved planning specimen. Gate 9 tests the current shared implementation and records the actual result; DOC-COO must not add a local repair fork.

## 9. Data source, fixture and fail-closed modes

Gate 8 must provide a repository-relative, hash-locked `tio2-my` fixture or payload for the eligible DOC-COO record and its approved source/public fields. Runtime and tests must not read D23 through an absolute path. The development receipt identifies the fixture path/hash and the actual WordPress/API/source path used in real mode.

Two modes are mandatory:

| Mode | Required behavior and evidence |
|---|---|
| Fixture eligible | Scoped DOC-COO record renders the exact B/C content, actions, metadata, Schema and shared references; fixture hash and source path are recorded; page-owned focused tests and optimized browser evidence pass. |
| Real fail closed | With the real configured `tio2-my` data source missing, wrong-scope, unavailable or returning an ineligible record, no DOC-COO content from TIOVAR, another site, stale cache or generic business fallback renders. The failure is observable internally, Buyer Clean does not expose governance/raw errors, and release remains blocked until the scoped record is available. |

Fail-closed evidence must use the real data path/configuration with fixture override disabled; renaming a happy-path fixture or mocking a 500 response alone is insufficient. A fixture success does not prove production WordPress data exists, and an HTTP status alone does not prove absence of cross-scope leakage.

## 10. Scope isolation and negative output scans

Every query, route resolver, cache key/invalidation, menu, SEO field, Schema node, action context, form routing and media reference includes or is resolved under `site_scope=tio2-my`. The clean route and supported query route must resolve the same DOC-COO record. Wrong or absent scope fails closed. No other scope supplies content, brand, Logo, navigation, recipient, endpoint, metadata, Schema, media or fallback route.

Gate 8 and Gate 9 scan rendered HTML, RSC/SSR output, metadata, JSON-LD, serialized props/hydration payload, URLs, client logs and analytics for the public denylist in §4. The scan must also prove absence of raw claim/source/approval/readiness objects, the recipient address and hard-coded or duplicated Access Key values outside the receiver owner's expected browser-direct submission path. String scans support but do not replace DOM/semantic inspection.

## 11. Dependencies and release boundaries

| Dependency ID | Requirement / current state | Owner / verification | Failure effect |
|---|---|---|---|
| `COO-G6-D01` | Scoped DOC-COO WordPress/data record and real route are not proved by planning evidence | Gate 8 implementation; Gate 9 `COO-G9-08/09` | Blocks real-mode acceptance and release; never cross-scope fallback |
| `COO-G6-D02` | CONV-DOC field normalization and visible/removable origin prefill | CONV-DOC owner; Gate 9 `COO-G9-03/04` | Blocks request action integration |
| `COO-G6-D03` | Receiver current runtime, provider/account configuration and explicit receipt semantics; mailbox confirmation remains separately open in the owner Manifest | CONV-DOC/operational owner; Gate 9 `COO-G9-13` consumes current evidence without a new unauthorized send | Blocks applicable operational release decision; provider acceptance is not mailbox receipt |
| `COO-G6-D04` | RMCD source content and dates require fresh verification before release | DOC-COO content/source owner; Gate 9 `COO-G9-02/14` | Material change/unavailability returns affected claims; no silent substitute |
| `COO-G6-D05` | Global Chrome, Menu, Footer/legal and Cookie owner implementation | Shared owners; Gate 9 `COO-G9-07/11` | Shared regression/release blocker; no page-local fork |
| `COO-G6-D06` | Shared WebSite/Organization serializer must consume Home owner IDs and boundary | HOME-001 Schema owner/shared SEO implementation; Gate 9 `COO-G9-10` | Schema acceptance blocker; no local Organization invention |
| `COO-G6-D07` | Canonical/robots/sitemap/indexing and `PROVISIONAL_URL` release decision | SEO/release owner; Gate 9 `COO-G9-10`, Gate 10 | No index activation or publication |
| `COO-G6-D08` | Real device/engine/screen-reader, 200% zoom, forced-colors and Axe coverage | Gate 8/Gate 9 | Blocks the corresponding accessibility acceptance condition |
| `COO-G6-D09` | Production Access Key configuration and Privacy data-flow parity for CONV-DOC | CONV-DOC/Privacy/release owners | Blocks receiver release; DOC-COO does not own or persist the routing key value |

Gate 6 readiness does not close any dependency above. Only evidence from the named owner and stage can update it.

## 12. Stable Gate 9 acceptance conditions

| ID | Input / precondition | Expected observable result | Required evidence | Fail / owner |
|---|---|---|---|---|
| `COO-G9-01` | Locked B V0.2 and scoped eligible record | One H1 and all six modules render in exact approved order/content; no internal labels | DOM/text extraction plus full-page inspection | Missing/reordered/rewritten content blocks page acceptance; DOC-COO implementation owner |
| `COO-G9-02` | Approved fact boundary and current RMCD source review | Preferential/non-preferential/other evidence, transaction limits and source dates remain exact; no prohibited company/transaction claim | DOM/metadata/JSON-LD comparison and fresh source review record | Fact/source drift blocks affected content/release; DOC-COO content/source owner |
| `COO-G9-03` | Either DOC-COO request action | `/request-documents/` loads with visible editable/removable `origin_supplier_qualification`; hidden `DOC-COO` source is not visible; no Grade/destination/scheme | Production-equivalent navigation, DOM/control inspection and receiver-normalization evidence | Any extra prefill, hidden leak or inability to edit/remove blocks integration; DOC-COO + CONV-DOC owners |
| `COO-G9-04` | Initial, edit/remove, Back, Forward and direct-revisit cases | Each URL/history entry deterministically restores only its valid normalized context; stale/unsupported values discard; clean canonical/metadata/Schema persist | Browser sequence trace with URLs, control values and public-output scan | Stale carryover, buyer-data URL leak or semantic drift blocks; CONV-DOC owner |
| `COO-G9-05` | Optimized page at 1440/768/390 | Material visual/semantic parity with the frozen complete visual, including table→record→stack transformation and all content | Full-page captures and written frozen-comparison record | Material unexplained deviation blocks; DOC-COO implementation owner |
| `COO-G9-06` | Optimized page at all nine widths | No overflow, crop, overlap, inaccessible control or dead space; long H1/source labels and records wrap safely | Geometry/overflow assertions and targeted captures at 1440/1280/1024/900/768/600/430/390/360 | Any width failure blocks responsive acceptance; implementation owner |
| `COO-G9-07` | Normal page, Menu and Cookie states | Axe serious/critical 0; complete keyboard/focus/inert/Escape/return behavior, ≥44px targets, usable 200% zoom/forced-colors/reduced-motion | Axe per specified states/widths, keyboard trace, accessibility tree and named manual/AT coverage | Untested required state or violation blocks this condition; page/shared owners by defect |
| `COO-G9-08` | Hash-locked repository-relative eligible fixture | Exact page/data/action/metadata/Schema output; no absolute D23 dependency | Fixture path/hash, focused tests, optimized browser evidence | Missing/unlocked fixture or D23 runtime read blocks; Gate 8 |
| `COO-G9-09` | Fixture disabled; real scoped data missing/wrong/unavailable | Fail closed with no cross-scope/stale content and no buyer-facing raw/governance leak | Real configuration/data-path trace, negative scope probes, rendered/serialized-output scan | Mock-only proof or fallback blocks; Gate 8/shared data owner |
| `COO-G9-10` | Clean and query routes; page and shared Schema contracts | Exact Title/Meta/H1/canonical/lang; page WebPage+Breadcrumb; minimum isPartOf shared WebSite; shared IDs/relationship exact; prohibited nodes absent | Rendered head/JSON-LD parse, graph/reference/prohibited scan, clean/query comparison | Drift, unresolved invented relation or premature robots/indexing blocks; SEO/Schema owners |
| `COO-G9-11` | Current shared Chrome/legal/consent implementation | Documents current, fixed RFQ, approved Logos, Menu/Footer/legal/Cookie behavior, no visible CURRENT or local fork | DOM/source ownership and browser state checks | Shared mismatch blocks release; shared owner |
| `COO-G9-12` | `tio2-my`, missing/wrong scope and other-site probes | Query, route, cache, menu, SEO, form context and media remain isolated; no data/brand/recipient/endpoint leakage | Positive/negative scope tests and cache/route/source evidence | Any fallback/leak is blocking; shared data/route owner |
| `COO-G9-13` | Current CONV-DOC owner baseline and available approved runtime configuration | Link reaches the approved receiver; explicit acknowledgement semantics remain; current provider/mailbox/release states are accurately inherited | Owner Manifest/runtime evidence plus page integration trace; no new live send without authorization | Broken route or misrepresented provider/mailbox state blocks applicable release; CONV-DOC/operational owner |
| `COO-G9-14` | Visible RMCD links | Both links use the exact approved URL, usable labels and safe external behavior; current source result is recorded | DOM href/name checks and fresh official-source review | Broken/changed source or unsupported claim blocks affected content; source owner |
| `COO-G9-15` | Delivered commit/ref and Gate 8 receipt | Page-owned focused suite, typecheck, relevant lint and Malaysia production build pass; full-repo failures are separately attributed | Exact commands, exit codes, target paths, commit/worktree state, first relevant errors and build route manifest | Any page/shared failure blocks. An unrelated failure must be named with owner and evidence; it cannot replace or waive required page checks. If it prevents a required command from completing, this condition remains unpassed. |

The focused suite name is `DOC-COO-G9-FOCUSED`. Gate 8 binds it to actual repository-relative tests covering content/public DTO, action context, initial/Back/Forward/direct revisit, metadata/Schema, fixture eligible, real fail closed, negative token/output scans and `tio2-my` isolation. Gate 9 reruns the exact Gate 8 command against the delivered commit and independently inspects the browser result. It also runs the actual repository typecheck, relevant lint command and Malaysia production build; this package does not guess command names before repository inspection.

## 13. V0.1 Finding responses

This package was built independently from approved original sources before the V0.1 self-check, handoff and independent review were read for final difference checking. The statuses below mean the author-side repair is complete; a different-identity Reviewer still decides final closure.

| Finding | V0.2 delivery response | Status |
|---|---|---|
| `COO-G6-IR-F01` | Isolated execution identity, original-source priority and end-only V0.1 comparison are explicit | `AUTHOR_REPAIR_COMPLETE / PENDING_V0.2_INDEPENDENT_REVIEW` |
| `COO-G6-IR-F02` | Nine widths, multi-state Axe, browser history, eligible fixture, real fail-closed, frozen comparison and the complete engineering checks are fixed in `COO-G9-01` through `COO-G9-15` | `AUTHOR_REPAIR_COMPLETE / PENDING_V0.2_INDEPENDENT_REVIEW` |
| `COO-G6-IR-F03` | Gate 6 closure now uses `G346-DELEGATED-CLOSURE-20260907` and no longer requires routine page-by-page user approval | `AUTHOR_REPAIR_COMPLETE / PENDING_V0.2_INDEPENDENT_REVIEW` |
| `COO-G6-IR-F04` | Exact shared-Schema owner file/SHA, node IDs, owner publisher semantics and the page minimum relation boundary are stated | `AUTHOR_REPAIR_COMPLETE / PENDING_V0.2_INDEPENDENT_REVIEW` |
| `COO-G6-F01` | `WebPage.name = visible H1`, SEO/visible-content parity and visible-review-date mapping are re-derived; production output remains for Gate 9 | `DELIVERY_MAPPING_REDERIVED_IN_V0.2 / PENDING_INDEPENDENT_REVIEW / PRODUCTION_NOT_VERIFIED` |

## 14. Two-way coverage and handoff stop

Forward trace: Brief/B/C, Gate 3 structure, Gate 4/Gate 5 visual, Post-TDS controls, CONV-DOC owner contracts, shared Schema/Chrome owners and scope rules each map to §§3–12 and at least one stable Gate 9 ID.

Reverse trace: every module, field, receiver behavior, Schema relation, test condition and dependency above maps to those approved sources. No new Product Grade, destination/scheme field, business promise, Schema entity, receiver endpoint choice, data model, component path or release action is introduced.

Status: `READY_FOR_REVIEW`. A different identity must independently review this exact V0.2 package and execution report. Only after `REVIEW_PASS`, closure of all required Findings and controller identity checks may project control apply `G346-DELEGATED-CLOSURE-20260907` with `approval_basis=USER_STANDING_AUTHORITY` and record `APPROVED / CLOSED` plus `APPROVED_FOR_HANDOFF`. Routine user page review is then `NOT_REQUIRED_BY_STANDING_AUTHORITY`; this does not say the user personally reviewed this package. `HANDED_OFF=NO`; external sending, Gate 8, development, deployment, publication, DNS and indexing remain unauthorized.
