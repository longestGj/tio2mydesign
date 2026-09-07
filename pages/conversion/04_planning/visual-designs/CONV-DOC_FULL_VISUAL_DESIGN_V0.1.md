# CONV-DOC Full Visual Design V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page | `CONV-DOC` / Request Documents |
| URL | `/request-documents/` |
| Page type | Utility conversion page |
| Gate | Gate 5 — Desktop/390px complete visual and interaction states |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Date | 2026-09-01 |
| User authority | User explicitly authorized Gate 5 execution; this is not Gate 5 approval |
| Gate ceiling | Gate 5 submission only; no Gate 6/7, handoff, implementation, testing or release |

This specification and its four PNG assets are the complete Gate 5 review candidate. They consume the submitted Gate 2–4 contracts without promoting any open privacy, receiver, document-inventory, indexing, route, regulatory, certification, origin, traceability or product claim to an approved fact.

## 1. Controlling baselines

1. `docs/page-briefs/CONV-DOC_REQUEST_DOCUMENTS_BRIEF_V0.1.md`.
2. `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` at SHA-256 `DEFFD73A7CB5E2399E128CD5E35308E5536D6E2D242FBD678BE4709914733047`.
3. `pages/conversion/04_planning/CONV-DOC_CONTENT_ARCHITECTURE_V0.1.md`.
4. `pages/conversion/04_planning/wireframes/CONV-DOC_WIREFRAME_SPEC_V0.1.md`.
5. `pages/conversion/04_planning/visual-directions/CONV-DOC_VISUAL_DIRECTION_V0.1.md`.
6. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`.
7. `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`.
8. PRODUCT V0.3 relationship matrix and its three approved audits recorded in the page Brief.

No second Conversion Playbook, new Header item, Footer route, Privacy route, product relation, document inventory or release promise is created.

## 2. Gate 5 asset manifest

| Asset | Render size | Bytes | SHA-256 | Purpose |
|---|---:|---:|---|---|
| `assets/CONV-DOC_G5_DESKTOP_1440_REVIEW_CANDIDATE_V0.1.png` | 1440 × 3753 | 495088 | `2BD946D98A09D25E535CA38B157599E4FEF151F83E547FAC9512A96E13FBB36A` | Complete Desktop review candidate |
| `assets/CONV-DOC_G5_MOBILE_390_REVIEW_CANDIDATE_V0.1.png` | 780 × 13082 (`390px @2x`) | 1089759 | `ADA164BF86A7B86C3ABC804947A2C3E1B2DF078E78D18410DBC7AD22DD41C3AA` | Complete 390px review candidate |
| `assets/CONV-DOC_G5_MOBILE_390_MENU_OPEN_V0.1.png` | 780 × 1440 (`390×720 @2x`) | 45714 | `DFD3B322B3FEA7B867193A1263BB23B516BDE76ABEE3136EECE6F6E61AF46727` | Mobile Menu Open and permanent RFQ proof |
| `assets/CONV-DOC_G5_INTERACTION_STATE_BOARD_V0.1.png` | 1600 × 2800 | 314071 | `D1D6081A31D9DEF273D7B9B23362C4FC85BFE62B5218D22BD3AE7C202D7F44F1` | Prefill, restricted, validation, focus, error, Other, submitting, success, failure, privacy and real long-content states |

Planning-only render source remains under `99_workspace/CONV-DOC/visual-preview/` and is not a development or handoff artifact.

## 3. Visual endpoint

### 3.1 Direction

`Controlled Review Workspace` is realized as a restrained industrial B2B workflow:

- Deep Navy establishes page identity and the receipt/non-approval boundary.
- Cool grey creates a quiet work surface around the form.
- White cards carry fields and controlled-review explanations.
- Accessible Deep Teal identifies the page submit action and inherited RFQ family.
- Amber dashed treatment is used only for the internal privacy-copy review annotation.
- Error red is reserved for validation and unconfirmed submission states.
- No factory, laboratory, certificate, file preview, download badge, product powder, port or origin image appears.

### 3.2 Page-primary and terminal CTA hierarchy

| Action | Placement | Treatment | Meaning |
|---|---|---|---|
| `Submit Document Request for Review` | End of form | Deep Teal, full semantic label | Starts one controlled document-request workflow |
| `Request a Quote` | Desktop Header, Mobile Header, Mobile Menu, Desktop Footer, Mobile Footer | Frozen Global Chrome terminal CTA | Separate quotation workflow at `/request-a-quote/` |
| Edit/remove context | Prefill panel | Compact outlined chips | Workflow utility, not promotional CTA |
| Try again | Submission-unconfirmed state | Navy outline | Retries the same request with entries preserved |

No body RFQ competes with the document submit action. Global RFQ remains permanently visible and is never replaced by Contact.

## 4. Complete page composition

1. Internal Gate 5 review ribbon — explicitly not Buyer Clean release copy.
2. Frozen Desktop or Mobile Header.
3. Breadcrumb: `Home / Request Documents`.
4. Deep Navy Hero with H1, purpose and receipt-only boundary.
5. Review workflow plus minimum-information warning.
6. Form card with explicit editable prefill.
7. Minimum contact and applicability-context fields.
8. Six separate document-request categories.
9. Restricted/context-dependent request explanation.
10. Optional request context, conditionally required for Other.
11. Internal privacy-copy annotation and unapproved acknowledgement placeholder.
12. One page-primary submit action.
13. Three category-boundary cards.
14. Four buyer questions.
15. Frozen Deep Navy Footer with permanent RFQ.

The review ribbon and amber privacy annotation must be removed/replaced only after the corresponding copy and operational gates are approved. Their presence makes the current PNGs review candidates, not release-ready Buyer Clean assets.

## 5. Form and prefill realization

### 5.1 Minimum buyer fields

| Field | Visual state in complete candidate | Rule |
|---|---|---|
| Contact name | Long-enough populated example | Required |
| Company or organization | Real long-name stress case | Required; safe truncation only inside a native control preview |
| Business email | Populated example plus hint | Required; syntax only |
| Destination country or market | Long UK/Northern Ireland example | Required; no serviceability claim |
| Product or grade | `M-2377` example | Required choice; `Not sure` remains valid in the contract |
| Documents requested | Six independent checkbox cards | At least one required |
| Additional request context | Long non-confidential example | Optional except when Other is selected |
| Data-handling acknowledgement | Internal annotated slot only | Exact Buyer Clean wording remains blocked |

Phone, personal address, company registration number, quantity, price, packaging, port, Incoterm, sample interest, file upload, password, payment data, government ID, mandatory batch/order number and free-entry production route remain absent.

### 5.2 Product V0.3 consumption

- Main candidates show neutral, removable `M-2377`, `Printing Inks` and `Sulfate` chips, including the required mobile wrap stress.
- Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate remain the only allowed M-2377 structured relationship contexts after explicit upstream selection.
- Specialty Materials is absent from Buyer Clean structured context and is demonstrated only as discarded internal state.
- Rubber is demonstrated only as a discarded taxonomy option; it creates no category, page, URL, keyword, navigation item, Schema relation or auto-prefill.
- `NO_PUBLIC_MAPPING` is demonstrated only as a discarded internal code and is never rewritten as unsuitable or not applicable.
- M-996 and M-2196 never generate comparison, equivalence, ranking, replacement or selection language.

The PRODUCT V0.3 totals remain 30 verified / 0 conflict / 54 no-public with 8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation. Those counts are audit controls, not marketing copy.

## 6. Document-category realization

| Category | Visible routing description | Explicitly absent implication |
|---|---|---|
| TDS | Technical data request for selected product context | Current/approved TDS exists or will be sent |
| SDS | Safety data request whose destination/language scope may require review | Valid SDS for every destination/language |
| COA | Request tied to appropriate product, batch or order context | Generic/current COA or guaranteed release |
| COO / Origin | Origin-document request whose destination/transaction scope may require review | Malaysia origin proof, customs acceptance or specific COO availability |
| Traceability | Request that may be sensitive or context-dependent | Manufacturing/batch history is approved for disclosure |
| Other | Another document-related request described by the buyer | REACH, certification or an unlisted document is available |

Selection always means `send for human review`, never available, approved, ready, downloadable or immediately deliverable.

## 7. Interaction-state board

| State ID | State | Visual and content behavior |
|---|---|---|
| S01 | Valid explicit prefill | Visible editable/removable M-2377, Coatings and Sulfate chips |
| S02 | Empty/stale/restricted | Empty panel collapses; Specialty, Rubber and internal no-public code are discarded without negative buyer copy |
| S03 | Keyboard focus | Navy 2px control border plus high-contrast external focus ring |
| S04 | Field validation | Text, red border and explicit field message; never colour alone |
| S05 | Error summary | Focusable summary with links to field/group errors |
| S06 | Other selected | Other card selected; request context becomes required and receives direct-action focus |
| S07 | Submitting | Persistent entries, spinner and duplicate-submit prevention |
| S08 | Receipt confirmed | Receipt for human review only; full negative boundary remains visible |
| S09 | Submission unconfirmed | Entries stay on page; one Try Again action; no unverified Contact/email/phone/ticket fallback |
| S10 | Privacy review | Internal annotation identifies missing approved copy; no Privacy route invented |
| S11 | Real long-content stress | Full 254-character email and 2,000-character non-confidential request context remain contained without page-width overflow |

## 8. Responsive and Global Chrome closure

### Desktop

- 1440px full page.
- 84px Header with production horizontal SVG.
- Header order remains `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- No first-level item is current on `/request-documents/`; buyer-visible `CURRENT=0`.
- Two-column review/form work area closes into a single full-width content sequence.
- Desktop Footer uses production reverse SVG and inherited four-column contract.

### 390px

- 390px logical width rendered at 2×.
- 64px `Logo | Quote | Menu` Header.
- One-column form; all document cards stack; long content uses natural height.
- Minimum audited interactive target height is 44px.
- No horizontal overflow; page scroll width equals viewport width.
- Footer preserves the separate procurement RFQ.

### Mobile Menu Open

- Full 390×720 logical viewport.
- Home, Markets, Products, Applications, Documents, Resources and About only.
- CONV-DOC is not added to primary navigation and no item shows current state.
- Mobile Header Quote and terminal Menu RFQ remain visible.
- Deep Navy menu surface fills the viewport; no empty white slot appears.

## 9. SEO, GEO and Schema continuity

Gate 5 makes no indexing or URL change:

- `NO_PRIMARY_KEYWORD` remains fixed.
- `NOINDEX, FOLLOW` remains a Gate 2 recommendation pending project-control approval.
- Candidate self-canonical remains conditional on the same decision.
- No sitemap activation occurs.
- Visible answers remain suitable for GEO extraction but do not create new evidence.
- Candidate Schema remains `WebPage` plus `BreadcrumbList` only after indexing/canonical approval.
- No FAQPage, HowTo, Product, Offer, file-download, certification, compliance, availability or approval relationship is created.

## 10. Verification record

| Check | Result |
|---|---|
| Four formal PNG assets exist and hashes match manifest | PASS |
| Desktop scroll width 1440 / viewport 1440 | PASS |
| Mobile scroll width 390 / viewport 390 | PASS |
| Mobile Menu scroll width 390 / viewport 390 | PASS |
| Visible H1 count on complete Desktop/Mobile | PASS — 1 each |
| Buyer-visible primary-nav current state | PASS — 0 |
| Buyer-visible word `CURRENT` on page/menu | PASS — 0 |
| Mobile minimum target | PASS — 44px |
| Desktop/Mobile Header and Footer RFQ presence | PASS |
| Mobile Header and Mobile Menu RFQ presence | PASS |
| Production primary/reverse SVG loaded | PASS |
| Long company, destination, context and receipt copy rendered | PASS |
| 254-character email and 2,000-character request context | PASS — exact lengths audited |
| Default/prefill/empty/restricted/validation/focus/error/submitting/failure/success/privacy states | PASS |
| Privacy wording not invented | PASS — internal annotation only |
| Unverified receiver/contact fallback absent | PASS |
| Document availability/download/approval/delivery promise absent | PASS |
| PRODUCT V0.3 restrictions preserved | PASS |
| `D:\16Wordpress_nextjs` access or modification | PASS — none |

## 11. Open review items and approval boundary

| Item | Status | Gate effect |
|---|---|---|
| Gate 5 visual decision | `OPEN` | Candidate is submitted, not approved |
| Exact privacy/controller/purpose/retention/rights/channel copy | `OPEN / BLOCKS_GATE_5_APPROVAL_AND_RELEASE` | Blocks Buyer Clean approval and release; current internal annotation cannot ship |
| Verified form receiver and operational workflow | `OPEN` | Blocks operational release |
| Verified alternative manual channel | `OPEN` | Failure remains channel-free until verified |
| Approved document inventory/version/applicability/release scope | `OPEN / FROZEN` | No availability or download claim may render |
| INDEX/NOINDEX, canonical and sitemap | `OPEN` | Recommendation only; no activation |
| RFQ route readiness | `OPEN / RELEASE_BLOCKER_IF_FALSE` | Never hides or disables Global RFQ |

`CONV-DOC Gate 5 = SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED`.

Do not enter Gate 6/7, create development handoff fields, access or modify `D:\16Wordpress_nextjs`, implement code/CMS/tests, deploy, alter DNS/indexing or publish. Only project-control review and explicit user approval can promote this Gate 5 candidate.

## 12. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Initial CONV-DOC complete Desktop/390px visual, Mobile Menu and interaction-state board | `SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED` |
