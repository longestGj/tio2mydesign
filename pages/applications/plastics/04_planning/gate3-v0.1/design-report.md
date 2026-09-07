# APP-PLAS Gate 3 V0.1 Design Report

Status: `FROZEN_CANDIDATE / DRAFT_FOR_PROJECT_CONTROL_REVIEW`. This is an execution report, not an independent review or Gate approval.

## Inputs and structure mapping

The exact approved A/B/C identities are recorded in `task-input-card.md`, `input-binding.json` and `freeze-record.json`. B V0.3 remains the sole visible-copy source. The editable HTML derives the buyer block from B and adds only semantic module wrappers, table-field labels derived from B's own headings, and current shared Global Chrome.

| Module | Structural treatment | Responsive relationship |
|---|---|---|
| `PLAS-01` | Full-width Hero with the two approved in-page actions | Desktop/Tablet actions remain adjacent; 390 stacks two full-width controls and omits the desktop-only punctuation separator |
| `PLAS-02` | System-definition checklist | Two columns at 1440/768; one ordered reading column at 390 |
| `PLAS-03` | Finished-system optical explanation | Single readable text measure at all widths |
| `PLAS-04` | Three-field observation table | Three columns at 1440/768; each of three observations becomes a labeled record at 390 |
| `PLAS-05` | Durability boundary | Single reading measure; no conversion graphic or implied rule |
| `PLAS-06` | Final-plastic scope and APP-MB handoff | One bounded reading unit at all widths; route stays adjacent to the ownership statement |
| `PLAS-07` | Four resin-context question pairs | Two-column table at 1440/768; four labeled records at 390 |
| `PLAS-08` | Three TDS comparison categories | Three equal relationship cards at 1440/768; one column at 390 |
| `PLAS-09` | Matched comparison and accepted-output boundary | Single reading measure; no score, savings or winner treatment |
| `PLAS-10` | Eight neutral Grade relations | Grade/Process/Next step table at 1440/768; eight labeled records at 390; explanatory one/several/unknown path stays after the complete set |
| `PLAS-11` | Documents, Sample and RFQ owner paths | Three parallel cards at 1440; one column at 768/390; post-RFQ sentence stays outside and after all three paths |
| `PLAS-12` | Thirteen public technical source notes | Two columns at 1440; one column at 768/390; long links wrap without horizontal scrolling |

## Key decisions

- The source uses the current page-neutral shared consumer V0.2 with `currentPageId=APP-000`; it does not copy another business page.
- The page is text-led and has no media placeholder. No-image is the true default rather than a missing state.
- The three content tables keep desktop/tablet column semantics and gain mobile field labels. Labels repeat only B's table headings and create no new claim.
- The eight Grade rows remain in approved order and keep only Grade, Process and exact Grade route. There is no selection control, recommendation, ranking, equivalence or resin-suitability hint.
- The long source list uses a stable one/two-column change and keeps punctuation within the visual link box while the approved link title remains the accessible name.
- Existing brand colours and simple section surfaces are used only as a readable planning baseline. Gate 4 retains full visual decisions.

## Preflight, freeze and evidence

- Hard preflight: `preflight-record.json` / `PASS_FOR_FORMAL_RENDER` / SHA-256 `135b6e4837ddcbf09a4dc064c27d244610f08df6a8535db584e2cbd172491b00`.
- Freeze: `APP-PLAS-G3-FREEZE-001` / `freeze-record.json` / SHA-256 `b78ebcdef06038562f2f5d1e154ab7bba35a258533624576ace369561239116e`.
- Frozen editable source: `APP-PLAS_GATE3_WIREFRAME_V0.1.html`, 36,573 bytes, SHA-256 `252bc39147933465c91ad9d506dabd8b57e99e8f9122198c9af0da0c733ec55e`.
- Shared consumer: `TIO2MY-GATE3-SHARED-CONSUMER-002` / V0.2 / package SHA-256 `1148a05fa12fdbf038f456a1cf40d3c1cf3f1c967fae1384616342faaa2fdf50`.

`approval_core` contains the frozen source through the freeze pointer, three complete formal pages, 768/390 menu states, the 390 Grade/action-path detail, this report and the execution self-check/submission. `diagnostic_support` contains the builder and verification scripts, full diagnostic pages, readable overlapping segments, Cookie state, runtime measurements and visual readback.

## Actual checks and remaining boundary

Local Chromium checks covered exact visible-copy equality at non-record layouts, all B links and routes, module order, Grade set/order, 13 sources, three-view geometry, minimum 44×44 visible interactive targets, menu open/selection close/Escape/background/focus restoration and Cookie entry/close/focus restoration. Static visual readback covered each complete formal page and risk detail.

No required execution Finding remains. Production receiver behaviour, route availability, CMS data, real device and screen-reader results remain later implementation/QA responsibilities. Full visual refinement remains Gate 4 and is not authorized by this package.

