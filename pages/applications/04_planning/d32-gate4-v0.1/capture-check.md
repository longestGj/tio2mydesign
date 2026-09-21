# APP-000 Gate 4 CAPTURE_CHECK

2026-09-20; actual viewer/author `/root/app_gate4_execution`. Status `PASS`; mandatory findings `[]`. This is execution self-check, not independent Gate 5 review.

Formal render: `formal-render.json`, Chromium 151.0.7922.34, logical widths 1440/1024/768/390/320, native screenshot DPR 1. HTML/CSS pair is bound in `source-lock.json`. Full-page images are native PNGs, not stitched or resized derivatives. Original image dimensions, bytes and hashes are in the render index and rechecked by `finalize.cjs`.

All 14 formal images were actually opened. Long originals were additionally inspected using full-width, unscaled, overlapping in-memory slices via `inspect-image.cjs`; no slice was saved or substituted for an original. Complete coverage:

| Original | Original size | Readable inspection slice top offsets (each up to 1800 px) |
|---|---|---|
| APP-000_G4_FULL_1440.png | 1440×3794 | 0,1600,3200 |
| APP-000_G4_FULL_1024.png | 1024×4106 | 0,1700,3400 |
| APP-000_G4_FULL_768.png | 768×4613 | 0,1700,3400 |
| APP-000_G4_FULL_390.png | 390×6756 | 0,1700,3400,5100 |
| APP-000_G4_FULL_320.png | 320×7166 | 0,1700,3400,5100,6800 |
| APP-000_G4_ROUTE_GRADE_ONLY_390.png | 390×6470 | 0,1700,3400,5100 |
| APP-000_G4_ROUTE_APPLICATION_ONLY_390.png | 390×6437 | 0,1700,3400,5100 |
| APP-000_G4_ROUTE_NONE_390.png | 390×4646 | 0,1700,3400 |

Cookie 390/320, Menu 390, primary-focus 390, grade-focus 768 and navigation-hover 1440 were viewed as complete 1000px-high viewport originals. Full route state reuses FULL_390. Five full-page image hashes remained exactly unchanged through the final hover/focus capture correction; their prior complete visual inspections remain valid. All changed captures were reopened after regeneration.

Findings checked and closed before freeze:

- Hover text on #EAF7F6 was only 4.3896:1 with #008078. Final hover #006C66 is above 4.5:1; computed-style and contrast assertions pass, final hover capture reopened. Ordinary non-hover links remain functional Teal.
- Immediate focus capture showed a stale Skip-link paint. Runtime active element/focus-visible/geometry were correct, but capture preceded stable painting. Waiting two animation frames before capture removed the residue and exposed the correct 3px Teal ring. Primary/grade focus captures reopened; no page behavior was changed for this timing correction. Temporary focus diagnostic script was removed before freeze.
- Earlier 4A element screenshot had offscreen Skip-link residue and is explicitly diagnostic, never an approval image. Final full pages show no residue.

Visual result: all content is readable; H1 is at most three lines; no unwanted cropping, overlapping controls, hidden copy, substituted fonts, broken logos or debug controls. Six collections preserve 30 relationships, action types remain distinct, unavailable labels are neutral text, and only applicable modules/actions disappear in route simulations. Footer is complete at every width. Menu/Cookie overlays are legible without clipping; primary/grade focus and hover state are visibly present.

Self-check coverage: approved content/operation parity; shared Home family and production Logos; 5 modules / 3 steps / 0 Process / 0 FAQ; responsive columns; actual Inter; 44px controls; no horizontal overflow or text clipping; all four local route states at all five widths; Menu and Cookie entry/traps/Escape/Close/focus return; six real same-page anchors; menu navigation dismissal and desktop resize; contrast; reduced-motion capture; no-JS core content; 200% logical-reflow equivalent and page-text enlargement. `runtime-observations.json` 120/120 and `supplemental-observations.json` 15/15.

Not claimed: native browser UI zoom, physical devices, screen readers, other browser engines, production route readiness, live receiver/submission, optional consent technologies, D32 implementation or deployment. These are not simulated successes. No real form was submitted and no external target was contacted.

`formal-render.json.capture_check=PENDING_ACTUAL_IMAGE_VIEW` is the capture-time event status. This later PASS record, bound by the frozen evidence index, is the completed CAPTURE_CHECK; it does not rewrite historical event timing.
