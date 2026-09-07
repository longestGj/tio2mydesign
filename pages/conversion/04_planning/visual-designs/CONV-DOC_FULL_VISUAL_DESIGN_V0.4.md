# CONV-DOC Gate 5 Buyer Clean Full Visual Design V0.4 — Superseded

> Governance override — 2026-09-01: the earlier pending-user-approval conclusion is withdrawn. `CONV-DOC-G5-BUYER-CLEAN-20260901-02 = REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK`. This document and its PNGs remain preserved but are not a Gate 5 candidate. Current review moves to `CONV-DOC-G3-G5-VISUAL-REDESIGN-01` and V0.5.

## 0. Document control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Page type | Utility conversion page |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Review ID | `CONV-DOC-G5-BUYER-CLEAN-20260901-02` |
| Gate | Gate 5 — Buyer Clean complete visual and interaction states |
| Status | `REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK / HISTORICAL` |
| Authority | 2026-09-01 directed project-control review and latest user decisions |
| Gate ceiling | Gate 5 only |

V0.4 supersedes the V0.3 review candidate while preserving V0.3 documents and PNGs. It presents the final reader experience required by root `AGENTS.md` §2.4 without entering Gate 6.

## 1. Current inputs

1. Approved Gate 1 five-type authority.
2. `CONV-DOC_CONTENT_ARCHITECTURE_V0.4.md`.
3. `CONV-DOC_WIREFRAME_SPEC_V0.4.md`.
4. `CONV-DOC_VISUAL_DIRECTION_V0.4.md`.
5. PRODUCT V0.3 relationship matrix and approved audits.
6. Current shared Global Chrome plus the user-directed final shared legal Footer dependency.

## 2. Formal asset manifest

| Asset | Logical proof | Rendered pixels | Bytes | SHA-256 |
|---|---|---:|---:|---|
| `assets/CONV-DOC_G5_DESKTOP_1440_BUYER_CLEAN_V0.4.png` | Desktop 1440 | 1440 × 3720 | 349582 | `ADAC0F4B745DBCA6926A5F98D166509059C774BCE2E9F46ACAEC967A6ECB2044` |
| `assets/CONV-DOC_G5_TABLET_768_BUYER_CLEAN_V0.4.png` | Tablet 768 | 768 × 4312 | 328444 | `2EC654EF004290B870139C0B800B70FCCEE75408E95E299835B59A197A8A02F2` |
| `assets/CONV-DOC_G5_MOBILE_390_BUYER_CLEAN_V0.4.png` | 390 logical @2× | 780 × 9730 | 750565 | `BECA973E9CB1F46E58180C573F71A03DD44237C9C9292B43F9BB7E991C41D4B8` |
| `assets/CONV-DOC_G5_MOBILE_390_MENU_OPEN_V0.4.png` | 390 logical @2× | 780 × 1440 | 45714 | `DFD3B322B3FEA7B867193A1263BB23B516BDE76ABEE3136EECE6F6E61AF46727` |
| `assets/CONV-DOC_G5_INTERACTION_STATES_BUYER_CLEAN_V0.4.png` | Interaction states | 1600 × 3710 | 387766 | `AFA38F28F900C64AC6CE2D4897953FCB1DFDEDC08C6251694328F34F80116D25` |

The Mobile Menu remains byte-identical because the shared menu did not change. It remains a required V0.4 assembly proof.

## 3. Buyer Clean result

- No review ribbon, internal annotation, pending-copy label, privacy placeholder or release-blocker text appears.
- Hero uses the approved H1 and one action-oriented sentence; the previous warning card is removed.
- Five request types and eight fields remain.
- Product Grade retains 14 selectable values and editable prefill.
- Review displays only buyer entries.
- Submit area uses the final privacy sentence and a visible `Privacy Policy` link.
- Success, failure and retry use the exact directed copy.
- Shared Footer consumes Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings.

## 4. Conditional Other behavior

The state board proves both branches without adding a field:

| Selection | Additional Requirements |
|---|---|
| Other Documentation only | Required; label includes `*`; empty error is `Describe the document you need.` |
| Other plus at least one named type | Optional; entered text remains when selection changes |

The error summary contains the conditional error link and the field uses the same focus/error relationships as all required fields.

## 5. Exact response states

### Success

- Heading: `Document Request Received`
- Body: `Thank you. We’ve received your document request. Our team will review the details and contact you at the business email provided if additional information is needed.`
- Boundary: `Document availability and applicable scope are confirmed during review.`
- Action: `Return to Documents`

### Failure

- Heading: `Something went wrong`
- Body: `Your information is still here. Please try submitting again.`
- Action: `Try again`

Retry preserves values and returns to `Submitting…`.

## 6. Responsive and accessibility verification

| Proof | Viewport / output | Scroll width | H1 | Minimum tested target | Result |
|---|---:|---:|---:|---:|---|
| Desktop | 1440 / 1440×3720 | 1440 | 1 | 40px | Pass |
| Tablet | 768 / 768×4312 | 768 | 1 | 44px | Pass |
| Mobile | 390 @2× / 780×9730 | 390 | 1 | 44px | Pass |
| Mobile Menu | 390 @2× / 780×1440 | 390 | N/A | 44px | Pass |
| State board | 1600 / 1600×3710 | 1600 | 1 | 40px | Pass |

Automated checks additionally returned:

- main-form public type cards: 5;
- removed public category: 0;
- internal Buyer Clean governance strings: 0;
- Hero warning card: 0;
- privacy placeholder block: 0;
- 14/14 Grades present;
- four legal labels present;
- Other-only and mixed validation branches present;
- exact success/failure copy present;
- prohibited RFQ fields and Market/Destination form labels absent;
- 254-character email and 500-character requirements values retained.

Visual inspection confirmed readable wrapping, no horizontal overflow, complete Header/Footer, clear selected/focus/error/success/failure treatments and stable long-content layout.

## 7. Global Chrome and legal dependency

- Header navigation and Mobile Menu are inherited unchanged.
- Request Documents is not a first-level navigation item.
- Request a Quote remains visible in Desktop Header, Mobile Header, Mobile Menu, Desktop Footer and Mobile Footer and retains `/request-a-quote/`.
- Footer remains the shared Deep Navy component.
- The four final legal entries are a shared-site dependency, not a page-local redesign.
- Their routes/control must be delivered and verified at Gate 7–9 and before release; current incompleteness does not block Gate 5 visual review or approval.

## 8. SEO/GEO/Schema boundary

- `NO_PRIMARY_KEYWORD` remains fixed.
- Title, Meta, H1 and Canonical follow Gate 2 V0.4.
- Robots remains a registry/project-control decision.
- Schema remains `WebPage` and `BreadcrumbList` only.
- No document inventory, `DownloadAction`, `Offer`, certification or availability relation is created.

## 9. Open review points

| Item | State | Effect |
|---|---|---|
| Project-control review of V0.4 | `PROJECT_CONTROL_REVIEW_PASS` | Independent review completed under the current Review ID |
| Explicit user approval of V0.4 visuals | `OPEN` | Gate 5 not closed |
| Legal routes/settings implementation | `GATE_7_9_PARALLEL_DEPENDENCY` | Does not block Gate 5; must block release if absent |
| Operational receiver/form service | `GATE_7_9_DELIVERY_DEPENDENCY` | No Gate 5 placeholder; must be verified before release |
| Document inventory/capability | `NOT_ESTABLISHED / DO_NOT_INFER` | No inventory or availability relationship in visible/machine-readable content |

## 10. Stop

`CONV-DOC-G5-BUYER-CLEAN-20260901-02 = REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK`.

`CONV-DOC Gate 5 V0.4 = NOT_USER_APPROVED / NOT_CLOSED`.

No Gate 6/7, handoff, development, code, CMS, testing, deployment, release, DNS or indexing action is authorized.

## 11. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.3 | 2026-09-01 | Five-type review candidate with internal privacy and governance treatments | `SUPERSEDED_BY_V0.4 / PRESERVED` |
| V0.4 | 2026-09-01 | Buyer Clean complete visual later withdrawn for excessive card-on-card density and page length; PNGs preserved | `REVISION_REQUIRED / SUPERSEDED_FOR_VISUAL_QUALITY_REWORK` |
