# APP-INK Gate 3 targeted revision self-check V0.2

`EXECUTION_SELF_CHECK / NOT_INDEPENDENT_REVIEW / DRAFT_FOR_PROJECT_CONTROL_REREVIEW`

The current Manifest V0.3 and approved A/B/C identities were freshly rehashed and match. Historical V0.1 source remains 30,094 bytes with SHA-256 `8d67c9d3ec4b971c9ff5a91a320a6901df385d46ab4ab26812ad0880322492ef`; its freeze and Project Control review were not edited.

V0.2 frozen source is 30,161 bytes with SHA-256 `8e8353dad4aacf9ca20821ae2240a3398684b201a6e92fec5ef28d4fd61c1f63`. The only HTML difference is the scoped approved body-link focus rule. Hard preflight returned `PASS_FOR_FORMAL_RENDER` before formal export; the V0.2 freeze record reports that no formal PNG existed at freeze.

## F01 self-check

| Check | 1440 | 768 | 390 |
|---|---:|---:|---:|
| Visible body links expected / reached by actual Tab | 18 / 18 | 18 / 18 | 18 / 18 |
| `:focus-visible` | all true | all true | all true |
| Outline | `rgb(0,128,120) solid 3px` | same | same |
| Horizontal focus clipping | none | none | none |

All breadcrumb, Hero, Grade, request and source links are covered. This is a contract-consumption correction only; no new palette or visual refinement was introduced.

## Layout, copy and relationship regression

All widths retain 11 modules, one H1/ten H2, exact approved narrative token order, four document records, four Grades in the approved order, three request actions and six source records/links. No visible control is below 44×44px; scroll width equals viewport width; no governance text renders. Paragraph relations were measured as INK-02 two total paragraphs around its nine-item list, INK-05 two paragraphs and INK-06 one paragraph around its four-record × three-field matrix.

## Shared actual-runtime checks

The original shared owner report is not treated as evidence for Tab/Shift+Tab loops. On V0.2, execution independently verified:

- 768/390 menu initial Home focus, backward Close/last-RFQ wrap, forward wrap, Escape, Applications selection close, background isolation, scroll/focus restoration and desktop-breakpoint close;
- all three Cookie dialogs' Close focus, backward/forward two-control wrap, Escape return and close-button return;
- both Hero anchors at all three widths.

The V0.1 independent reviewer also ran loops, but that result is recorded as independent V0.1 evidence rather than inherited V0.2 execution proof.

## Evidence readback and Findings

Seven formal PNGs were generated after the V0.2 freeze and opened: three full pages, two menu states, one Grades anchor and one 390 body-link focus state. The focus image clearly shows the Teal 3px Applications breadcrumb outline. Full-page and menu layouts remain unchanged; this is expected because the added rule applies only during keyboard focus.

- `APP-INK-G3-PCR-F01`: `REVISED_PENDING_INDEPENDENT_REREVIEW`
- `APP-INK-G3-PCR-F02`: `REVISED_PENDING_INDEPENDENT_REREVIEW`
- `APP-INK-G3-PCR-F03`: `REVISED_PENDING_INDEPENDENT_REREVIEW`

No new execution Finding is open. The three Project Control Findings remain for the independent reviewer to close. Gate 3 remains open; this self-check supplies no approval, closure or Gate 4 authorization.
