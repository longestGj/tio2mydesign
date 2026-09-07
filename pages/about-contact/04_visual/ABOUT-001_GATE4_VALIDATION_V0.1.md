# ABOUT-001 Gate 4 Validation V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `ABOUT-001` |
| URL | `/about/` |
| Gate | Gate 4 — Visual Direction |
| Date | `2026-09-01` |
| Validation target | `ABOUT-001_GATE4_VISUAL_DIRECTION_V0.1.md` and four visual specimens |
| Result | `PASS_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` |

## 1. Validated Deliverables

- `ABOUT-001_GATE4_DESKTOP_DIRECTION_V0.1.png`
- `ABOUT-001_GATE4_390PX_DIRECTION_V0.1.png`
- `ABOUT-001_GATE4_TRUST_SYSTEM_V0.1.png`
- `ABOUT-001_GATE4_INTERACTION_STATES_V0.1.png`
- Inline review surface: `about-gate4-visual-direction.html`

## 2. Automated Validation

| Check | Desktop | 390px | Trust System | Interaction | Result |
|---|---:|---:|---:|---:|---|
| Horizontal overflow | none | none | none | none | PASS |
| Header height | 84px | 64px | N/A | N/A | PASS |
| Required touch/target height | all ≥44px | all ≥44×44px | all ≥44px | all ≥44px | PASS |
| Capability imagery | 0 | 0 | 0 | 0 | PASS |
| SVG/icon capability cues | 0 | 0 | 0 | 0 | PASS |
| Long operating-company name | visible/wrap-safe | visible/wrap-safe | visible/wrap-safe | N/A | PASS |
| Source/review-date treatment | visible | visible | visible | visible | PASS |
| Terminal RFQ | visible; `#007F77` | visible | N/A | default/hover/focus shown | PASS |
| Focus outline | N/A specimen | N/A specimen | N/A | 3px solid | PASS |
| Prohibited visible claims (`ISO`, batch traceability, certified QMS, leading manufacturer) | none | none | none | none | PASS |
| JavaScript/runtime errors | none | none | none | none | PASS |

The 390px primary and secondary contextual actions fill the available content width and the page remains free of horizontal overflow.

## 3. Visual Inspection

| Area | Observation | Result |
|---|---|---|
| Desktop hierarchy | Header, identity, H1, operating company, qualified manufacturing/export copy, CTA, source row and Malaysia relationship read in the intended order | PASS |
| 390px hierarchy | 64px header remains compact; H1 and long company name wrap without collision; CTA and source row remain adjacent to supported claims | PASS |
| Evidence-led visual language | Teal is limited to identity, action and source markers; no badges, factory imagery, flags, routes or decorative proof cues | PASS |
| Trust surfaces | Why Malaysia, Documentation and Company Facts use distinct but related surfaces | PASS |
| Scale claims | Annual supply and export reach appear only inside Company Facts with `Company-reported` and source/review limitations | PASS |
| Current navigation | About remains a first-level current item; navigation order is unchanged | PASS |
| Document responsibility | Document availability is summarized; detailed support and controlled request actions remain routed to Documents | PASS |
| CTA responsibility | Contextual About actions do not replace the global RFQ terminal action | PASS |

## 4. Evidence-State Coverage

Gate 4 defines the visual behavior for sufficient, partial and restricted evidence states. Gate 5 must apply those rules to the complete Desktop/390px page and Mobile Menu views. This Gate 4 submission does not claim that the Gate 5 full-page state set has been produced.

## 5. Open Items and Approval Boundary

- No blocking defect was found in the Gate 4 direction or specimens.
- Legal registration number, legal status, registered address, incorporation date and business nature remain frozen.
- `ISO`, certified QMS and batch traceability remain frozen and are not represented visually.
- The user-approved `mytio2.com` capability fields remain explicitly company-provided, date-stamped and scope-qualified.
- Gate 4 is submitted for user/project-control review only. Submission is not approval.
- Gate 5 may begin only after explicit Gate 4 approval and separate Gate 5 authorization.

