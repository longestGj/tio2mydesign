# DOC-000 Full Visual Design V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 5 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| Direction | Document Finder + Document Request Hub |
| Authority | Latest user redesign instruction and prior explicit Gate 5 authority |
| Stop | No Gate 6+, child page, form implementation, development, test, handoff or release |

V0.3 supersedes V0.2 only as the current review candidate. It is not an approved baseline.

## A. Redesigned Document Hub Desktop

Formal asset: `assets/DOC-000_G5_DESKTOP_DOCUMENT_FINDER_V0.3.png`.

The 1440px design places a concise Hero above the dominant Deep Navy Finder. Results immediately follow Finder, then the assisted Request Documents band. Compact types, Notes and FAQ are deliberately lower in hierarchy. Header/Footer and global Request a Quote are unchanged.

The full Buyer Clean frame uses the truthful before-search state; it does not display a fabricated M-350 file, revision or download.

## B. Redesigned Document Hub Mobile 390

Formal asset: `assets/DOC-000_G5_MOBILE_390_DOCUMENT_FINDER_V0.3.png`.

The 390px design stacks Grade, Type and Find Documents; Results and Request Documents follow immediately. Six type entries, Notes and three FAQs remain one column. Primary actions are full width, with no carousel or horizontal record table.

Mobile Menu evidence: `assets/DOC-000_G5_MOBILE_390_MENU_OPEN_V0.3.png`; it is unchanged from Global Chrome.

## C. Page Structure Change

| Old V0.2 emphasis | New V0.3 emphasis | Reason |
|---|---|---|
| Hero → six detailed categories | Hero → Finder | Lets buyers start by Grade in seconds |
| three large Scope cards | Results | Makes public/request action visible before explanation |
| request-process section | immediate assisted Request Documents | Shortens conversion path |
| prepare-context checklist | context moved into request copy/Notes | Avoids asking for detail before the buyer searches |
| detailed categories | compact Document Types | Keeps definitions without dominating the page |
| four educational FAQs | three task FAQs | Reduces governance-heavy reading |

New sequence: Hero → Finder → Results → Request → Types → Notes → FAQ → final Request → Footer.

## D. Document Finder States

Formal asset: `assets/DOC-000_G5_FINDER_STATES_AND_FLOW_V0.3.png`.

| State | Contract |
|---|---|
| Before search | Grade + Type + Find Documents; no destination/batch/order/language field |
| Public documents found | Verified Product/Grade, Type, Revision/Date, English and View/Download |
| Mixed public + request | Verified records use View/Download; COA/context-dependent items use specific Request |
| No public document found | Neutral no-public-listing answer plus Request Documents; no disabled action |

Public-found and mixed panels are explicitly internal review specimens and use field labels rather than invented files. Current eligible public record set remains zero.

## E. Conversion Flow

```text
Find Documents
→ View / Download a verified public record
or
→ Request a context-dependent/non-public document
→ Request Documents
```

Finder/result requests carry Product/Grade and Document Type where selected. Category links carry Document Type. Request a Quote stays outside the page body.

## F. English-only Check

| Check | Result |
|---|---|
| Language selector | Absent |
| Multilingual claim | Absent |
| Finder language field | Absent |
| Visible service fact | Documents are currently supplied in English |
| Future public record metadata | Must show English |

Result: `PASS`.

## G. GEO Check

Required relationship is defined as:

```text
Grade → Document → Version/Date → English → View/Download/Request
```

The structure is visible in the state board. Real entity edges remain absent until a public record is verified. The current Finder can directly route a selected Grade/Type to Request Documents without manufacturing availability.

Result: `PASS WITH CHANGES` — add only verified public-record entities when approved.

## H. Evidence Check

- COA is described as batch-specific and not a generic permanent download.
- Origin is context-dependent; no universal Malaysia-origin, duty or tariff claim.
- Traceability is qualified by product/lot/batch/supply-chain context.
- Compliance is product/use/destination/scope-dependent.
- Request does not guarantee availability, approval or regulatory coverage.
- No fake file, revision/date, View/Download or M-350 availability claim appears in Buyer Clean.
- Internal readiness terms do not appear in Buyer Clean.

Result: `PASS WITH CHANGES` because record-level inventory remains unapproved.

## I. Keyword Boundary Check

DOC-000 remains `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE`. Type definitions are one sentence each and do not become TDS/SDS/COA/origin/REACH landing pages. Planned child owners are unchanged and not started.

Result: `PASS`.

## J. No-Unintended-Changes Check

| Boundary | Result |
|---|---|
| Global Header/nav/current state | Unchanged |
| Mobile Header/Menu | Unchanged |
| Footer and global RFQ | Unchanged |
| Navy/Teal, typography, cards/buttons | Unchanged |
| URL, type, keyword, mapping | Unchanged |
| Child pages | Not started |
| Request Documents page/form | Not started or modified; only receiving contract defined |
| External code/development repo | Not touched |

Result: `PASS`.

## K. Final Gate

| Gate | Result | Reason / change |
|---|---|---|
| Visual Gate | PASS | Desktop, 390px, Menu and state board complete |
| Document Finder UX Gate | PASS | Grade/Type-only first step; clear results/request path |
| Document Record Gate | PASS WITH CHANGES | Record component is defined; no real public record is approved |
| English-only Gate | PASS | No selector; English is visible |
| Evidence Gate | PASS WITH CHANGES | Record inventory/metadata remain gated; no claim rendered |
| SEO Gate | PASS WITH CHANGES | Canonical, robots and indexing decision remain open |
| Keyword Boundary Gate | PASS | No child-intent expansion |
| GEO Gate | PASS WITH CHANGES | Relationship structure passes; real record nodes await evidence |
| Conversion Gate | PASS WITH CHANGES | Design/prefill pass; receiving workflow/live route remains a release blocker |
| Mobile UX Gate | PASS | True single column, full-width actions and no carousel/overflow |

These are review findings, not approval.

## 12. Asset manifest

| Asset | Dimensions | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `assets/DOC-000_G5_DESKTOP_DOCUMENT_FINDER_V0.3.png` | 1440×3336 | 234970 | `1887FD2AD3A23FFA110F124F887ABE9F00B9D7712959B8EA3EA08F1E3AAF5A6C` | Submitted / not approved |
| `assets/DOC-000_G5_MOBILE_390_DOCUMENT_FINDER_V0.3.png` | 390×4446 | 186961 | `D99E50C3B71B1B8953DB6E833C400A9A2A392219E05B8560F83AE05A536030CA` | Submitted / not approved |
| `assets/DOC-000_G5_MOBILE_390_MENU_OPEN_V0.3.png` | 390×720 | 13465 | `170482E434EBF7569A98A8E02D9459F7583B0934BB332D7F1CD18721C036B614` | Submitted / not approved |
| `assets/DOC-000_G5_FINDER_STATES_AND_FLOW_V0.3.png` | 1440×1081 | 92024 | `C824BBC404D7FE92131DB9A9ADBF92F7D54391809F7CF37DE46C44CC5D62B05F` | Internal review evidence |

## 13. Interaction verification

- Finder requires a Grade and accepts only the approved 14-value list.
- Find updates the Results heading and produces a neutral Request path for the current no-public-record set.
- Result Request carries selected Product/Grade and Document Type.
- Category requests prefill Document Type.
- Request links in the review surface send nothing and open/download nothing.
- FAQ controls expand/collapse locally.
- JavaScript syntax passed `node --check`; Desktop/Mobile/Menu/States rendered in headless Edge.

## 14. Status

`SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED`.

Gate 6 and all implementation/release work remain unauthorised.
