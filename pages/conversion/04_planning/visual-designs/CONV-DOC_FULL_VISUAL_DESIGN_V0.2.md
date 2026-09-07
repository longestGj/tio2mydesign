# CONV-DOC Full Visual Design V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page / URL | CONV-DOC / `/request-documents/` |
| Review ID | `CONV-DOC-G5-V11-20260901-01` |
| Gate | Gate 5 — 1440 / 768 / 390 complete visual and key states |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / USER_EXECUTION_AUTHORISED / NOT_APPROVED` |
| Authority | 2026-09-01 user: `授权执行Gate5` |
| Gate ceiling | No Gate 6/7, handoff, implementation, testing, deployment or release |

V0.1 and its four PNGs remain unchanged as `HISTORICAL / SUPERSEDED_BY_V1.1_REBASE`.

## 1. Current inputs

- `docs/page-briefs/CONV-DOC_REQUEST_DOCUMENTS_BRIEF_V0.2.md`
- `pages/conversion/04_planning/CONV-DOC_CONTENT_ARCHITECTURE_V0.2.md`
- `pages/conversion/04_planning/wireframes/CONV-DOC_WIREFRAME_SPEC_V0.2.md`
- `pages/conversion/04_planning/visual-directions/CONV-DOC_VISUAL_DIRECTION_V0.2.md`
- `C:/Users/longe/Downloads/IKHLAS_Document_Hub_Request_Documents_Design_Spec_V1.1.md`
- Product relation baseline V0.3 and current approved Global Chrome V0.5/production Logo assets.

## 2. Asset manifest

| Asset | Logical proof | Rendered pixels | SHA-256 |
|---|---|---:|---|
| `assets/CONV-DOC_G5_DESKTOP_1440_REVIEW_CANDIDATE_V0.2.png` | Desktop 1440 | 1440 × 4015 | `538F201F05B7FDFF829B1125C88AB4F7F1BE2E1058CFDD738BE1377F8BD55F74` |
| `assets/CONV-DOC_G5_TABLET_768_REVIEW_CANDIDATE_V0.2.png` | Tablet 768 | 768 × 4623 | `9AC8C615D3112CAD0EB87BF0CC898E2A3E599AF262582D575AC227591F69619B` |
| `assets/CONV-DOC_G5_MOBILE_390_REVIEW_CANDIDATE_V0.2.png` | 390 logical @2× | 780 × 10868 | `8C1B7EEC6545616610EFE16C832C1B845F7F1AF779E59347F1D82F932A7FCE08` |
| `assets/CONV-DOC_G5_MOBILE_390_MENU_OPEN_V0.2.png` | 390 logical @2× | 780 × 1440 | `DFD3B322B3FEA7B867193A1263BB23B516BDE76ABEE3136EECE6F6E61AF46727` |
| `assets/CONV-DOC_G5_INTERACTION_STATE_BOARD_V0.2.png` | Review board | 1600 × 3340 | `E18253FE9D6F95FC250EED6264A52C53D1C578F37635228BEF19B33185469DAF` |

## 3. Complete visual endpoint

The page is a single controlled transaction. The hero gives the literal task and receipt-only boundary. A compact three-step cue provides orientation without creating a wizard. The 880px centered form uses one scan column at every breakpoint and contains only the eight V1.1 fields, a review block, an evidence-gated privacy slot and the primary action.

No educational body modules, document inventory, market selector, destination field, SLA, public-download affordance, approval badge or RFQ field appears.

## 4. V1.1 field and prefill realization

- Full Name, Company, Business Email and Country / Region are in Your Details.
- Product Grade, Document Types, Application / Industry and Additional Requirements are in Request Details.
- Product Grade is required and the state board proves capacity for all 14 current grades.
- Document Types use the six exact V1.1 group labels and require at least one selection.
- Additional Requirements is optional and stress-tested at 500 characters.
- Prefill is visibly editable/removable. The main proof uses M-2377, Plastics and Technical Data & Product Documentation without asserting a frozen relationship or file availability.
- Country / Region helper and review summary both state that the value is contact/company location only.

## 5. CTA and Global Chrome hierarchy

`Request Documents` is the only page-primary action. The shared `Request a Quote` remains permanently visible in Desktop Header, compact Header, Mobile Menu, Desktop Footer and Mobile Footer and always represents `/request-a-quote/`. Request Documents is absent from first-level navigation, and buyer-visible CURRENT text remains zero.

Success uses `View Products` only; no immediate RFQ prompt appears.

## 6. State coverage

The state board covers:

1. valid editable prefill;
2. empty/stale/unsupported prefill;
3. all-14-grade selector capacity;
4. keyboard focus;
5. field validation;
6. submit error summary;
7. restricted document category;
8. non-blocking personal-email warning;
9. submitting/duplicate prevention;
10. exact V1.1 success;
11. submission failure with preserved data and retry;
12. Other Documentation with optional clarification;
13. privacy review state;
14. 254-character email and 500-character Additional Requirements stress.

## 7. Verification record

Automated render audit results:

- Desktop: width 1440, scroll width 1440, H1 count 1, visible CURRENT 0, minimum actionable height 40px.
- Tablet: width 768, scroll width 768, H1 count 1, minimum actionable height 44px.
- Mobile: logical width 390, scroll width 390, H1 count 1, minimum actionable height 44px.
- Menu: logical width 390, no overflow, RFQ and Menu targets at least 44px.
- Main/board source contains all 14 grades, exact success heading, Country / Region boundary, 500-character stress value and no prohibited RFQ field.
- No `Destination country`, destination-market field or market/destination request label remains in V0.2.

Visual inspection confirmed single-column scanning, complete Footer, readable focus/error/success states and no clipped controls at the required widths.

## 8. Open review and release blockers

| Item | State | Effect |
|---|---|---|
| Project-control Gate 5 review | `OPEN` | Candidate is not approved |
| Final user approval of V0.2 | `OPEN` | Do not close Gate 5 |
| Approved privacy wording and route | `OPEN / RELEASE_BLOCKER` | Amber annotation cannot ship |
| Operational receiver | `OPEN / RELEASE_BLOCKER` | No SLA, delivery or fallback promise |
| Document inventory/applicability | `NOT_ESTABLISHED / FAIL_CLOSED` | No availability or scope rendering |
| RFQ route readiness | `EXTERNAL_RELEASE_BLOCKER_IF_FALSE` | RFQ stays visible; never hidden or replaced |

`CONV-DOC Gate 5 V0.2 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED / NOT_CLOSED`.
