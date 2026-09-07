# DOC-000 Full Visual Design V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 5 |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| User authority | 2026-09-01 explicit instruction: `授权Gate5` |
| Parent | Content Architecture, SEO/GEO/Schema, Wireframe and Visual Direction V0.1 |
| Global Chrome | `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; Production SVG Manifest V1.0; unchanged |
| Represented Buyer Clean state | No approved public document inventory; eligible public set = 0 |
| Hard stop | Gate 6, child pages, handoff, development, testing, deployment, publication and indexing are not authorized |

This is a completed Gate 5 review submission, not user or project-control approval.

## 1. Formal visual assets

| Asset | Dimensions | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `assets/DOC-000_G5_DESKTOP_INVENTORY_ZERO_V0.1.png` | 1440×2880 | 223177 | `55679BABF7DBD494B405CE49708250102829622E7947CFE1F867A09069B808D9` | `SUBMITTED / NOT_APPROVED` |
| `assets/DOC-000_G5_MOBILE_390_INVENTORY_ZERO_V0.1.png` | 780×8000; 390px logical at 2× | 669901 | `83934F8AB014F00839D3B8AEC8E45730893390B7EECDE5AF3C2DA03A1C200DC1` | `SUBMITTED / NOT_APPROVED` |
| `assets/DOC-000_G5_MOBILE_390_MENU_OPEN_V0.1.png` | 780×1440; 390×720 logical at 2× | 38622 | `CD59D8EFE880ACDF373EDEFD3A3EC140B288F03A9F528D39C46B96A002C35D05` | `SUBMITTED / NOT_APPROVED` |
| `assets/DOC-000_G5_RESTRICTED_STATE_BOARD_V0.1.png` | 1200×1410 | 115467 | `B3DD306C9635FAB9B94606C1016F04247C733AEE6B9DF652AE2F388495B63154` | Internal review evidence only |

Planning-only interactive review source remains in the task-owned visualization surface. It is not production HTML or a development handoff artifact.

## 2. Locked Buyer Clean structure

1. Global Header — Production SVG, fixed order, Documents structural current state, fixed RFQ.
2. Breadcrumb — `Home / Documents`.
3. Hero — H1, neutral selection answer, local category anchor, abstract six-family index.
4. Document category ledger — TDS, SDS, COA, Certificate of Origin / Origin Documents, Traceability, REACH / Compliance.
5. Applicability band — product/grade, destination/language, order/batch.
6. Controlled-review band — identify, add context, separate review outcome; no request CTA.
7. Buyer Questions — four complete answers; first open in the static evidence.
8. Prepare the Context — four-item checklist without form or external CTA.
9. Global Footer — Production reverse SVG, inherited links and fixed Request a Quote.

No module adds a filename, file count, file date, public/download badge, child link, Request Documents CTA, Contact fallback or decorative certificate/factory image.

## 3. Desktop full visual

| Contract | Gate 5 result |
|---|---|
| Viewport | 1440px |
| Header | 84px; Documents = Bold + 3px Teal underline; visible `CURRENT` words = 0 |
| Hero | Two-column editorial composition; real H1 and full two-sentence answer |
| Categories | Two-column ledger; stable semantic order 01–06; static informational rows |
| Scope | Three-column Soft Background band |
| Controlled process | Deep Navy; three numbered steps; no action |
| FAQ | Four rows; first answer open; visible hover/focus contract |
| Close | Checklist flows directly into inherited Deep Navy Footer |
| Image behavior | Text and line-document system are complete without photography |

The visual does not imply an empty download library. Guidance remains complete while the eligible public document set is zero.

## 4. 390px full visual

| Contract | Gate 5 result |
|---|---|
| Logical viewport | 390px; formal evidence captured at 2× |
| Header | 64px `Logo | RFQ | Menu`; each action at least 44px |
| H1 | Natural multiline wrap; no artificial blank hero height |
| Category names | Full names retained; no ellipsis or hover recovery |
| Body copy | Real Buyer Clean length; 16px-level body direction |
| Scope/process | Stacked; no horizontal table or carousel |
| FAQ | Four full-width rows; answers remain keyboard/touch operable in the interaction contract |
| Footer | Stacked Procurement block with fixed Request a Quote |
| Overflow | No intentional horizontal scrolling; content uses a single-column 390px contract |

## 5. Mobile Menu Open

- Production reverse SVG at the approved menu header box.
- `Close` remains a 44px-or-larger target.
- Fixed order: Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Documents current state uses Bold + 4px Teal left marker; visible `CURRENT` words = 0.
- Terminal Request a Quote remains visible and points to `/request-a-quote/` in the shared contract.
- Only the active Mobile Menu navigation surface may expose the accessible current link in a future implementation.

## 6. Interaction contract

| Element | Default | Hover | Keyboard focus | Touch / restricted behavior |
|---|---|---|---|---|
| Hero local anchor | Navy outline; local page target | Soft Background emphasis | 3px Deep Teal outline with offset | At least 44px; always eligible |
| FAQ button | Full-width question and +/- marker | Soft Background | 3px Deep Teal outline with offset | At least 44px; answer toggles locally |
| Informational category row | Static purpose/scope content | No link transformation | Not focusable | No action slot |
| Future eligible record action | Absent now | Defined only after eligibility | Defined only after eligibility | Removed atomically if route becomes ineligible |
| Global RFQ | Inherited V0.5 | Inherited V0.5 | Inherited V0.5 | Never hidden/disabled; route false remains a release blocker |

The review interaction changes only view selection and FAQ expansion. It performs no navigation, request submission, file access or external-state change.

## 7. Restricted-state evidence

| State | Gate 5 visual contract |
|---|---|
| Inventory = 0 | Six guidance rows; no file entities, counts, cards, download controls or blank grid |
| Partial eligible set | Only individually verified, scoped and route-eligible rows appear; ineligible peers leave no gap |
| Complete eligible set | Means the approved eligible set only; no all-grade/all-market badge or claim |
| Controlled request | Neutral request-only treatment; no approval colour, download icon or delivery promise |
| Route unavailable | Action, arrow and link relation are removed; useful informational copy remains |
| Long name | Wraps to multiple lines without truncation, tooltip dependency or smaller type |
| No image | Full hierarchy remains complete; no certificate/factory placeholder or cross-site fallback |
| Focus/hover | Only eligible controls react; essential meaning is not hover-dependent |
| Structured parity | Current visible file set = 0 and machine file set = 0; no child/download/request relation |

The restricted-state board is internal review evidence. Its labels do not appear in Buyer Clean frames.

## 8. SEO/GEO/Schema boundary

- URL remains `/documents/`; page type remains Navigation hub.
- Primary keyword remains `NO_PRIMARY_KEYWORD`; no child document primary term becomes the Hub target.
- Candidate title/meta/H1 remain those in the Gate 2 contract.
- INDEX/NOINDEX, final robots and final canonical remain `DECISION_REQUIRED`; this Gate performs no indexing action.
- Current structured-data candidate remains `CollectionPage` or `WebPage` plus `BreadcrumbList` only.
- No `ItemList`, `DigitalDocument`, child `hasPart`, download URL, certification, REACH status, origin, traceability or Request Documents action is emitted.

## 9. Truth and route boundary

- No public document inventory has been approved; eligible public set remains zero.
- DOC-REACH, DOC-TDS and DOC-COO remain provisional/non-actionable and were not started.
- `/request-documents/` remains the conversion owner but is not an eligible body action.
- REACH, origin, COO, traceability, applicability, revision and disclosure facts remain evidence-gated.
- Fixed Global RFQ is not a document-request fallback.
- No availability, immediate delivery, approval, public download or all-grade/all-market claim is present.

## 10. Gate 5 verification

- [x] Desktop full visual contains all Buyer Clean modules at real copy length.
- [x] 390px full visual contains all modules and full category names.
- [x] Mobile Menu Open preserves fixed navigation, Documents current state and RFQ.
- [x] Inventory zero, partial, complete, controlled, unavailable-route, long-name, no-image, hover/focus and structured-parity states are documented and visually evidenced.
- [x] Production SVG assets are embedded in Header/Footer/Menu evidence.
- [x] Buyer-visible `CURRENT` word count is zero.
- [x] No fake file, filename, count, download or child/request CTA exists.
- [x] No Header/Footer responsibility, URL, keyword or adjacent-page owner changed.
- [x] No child page, Gate 6, development, CMS, codebase, test, deployment, publication, DNS or indexing work was started.

## 11. Gate status

`SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED`

The page must remain `DESIGN_IN_REVIEW`. Gate 6 requires a separate review decision and authority; submission of this Gate 5 package is not approval.

## 12. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Initial DOC-000 Desktop/390px full visual, Mobile Menu and restricted-state evidence under explicit Gate 5 authority | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
