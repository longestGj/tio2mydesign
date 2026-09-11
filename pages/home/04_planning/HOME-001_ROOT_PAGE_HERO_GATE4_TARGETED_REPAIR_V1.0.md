# HOME-001 Root Page Hero Gate 4 Targeted Repair V1.0

## Result

`HOME-ROOT-HERO-G5-F01 = RESOLVED_IN_FROZEN_CANDIDATE_PENDING_INDEPENDENT_TARGETED_RECHECK`.

The repair was limited to the Finding's shared responsive parameters and formal capture provenance. It did not change the approved 1440 visual, visible content, information architecture, CTA behavior, image, shared Chrome or later modules.

## Fresh author checks

| Check | Result |
|---|---|
| 1440 candidate versus V1.1 approved Desktop | `PASS` — byte-identical PNG |
| 1024 H1 / layout | `PASS` — `56px / 700`, three lines, two columns |
| 1023 and 768 H1 / layout | `PASS` — `44px / 700`, one column |
| 767 and 390 H1 / margin | `PASS` — `36px / 700`, 20px side margins |
| H1 maximum lines | `PASS` — maximum three |
| body/document horizontal overflow | `PASS` — zero at six widths |
| CTA labels, targets and height | `PASS` — unchanged; `48.25px` |
| complete body DOM/text | `PASS` — unchanged from V1.1 |
| formal capture provenance | `PASS` — bound in V1.2 freeze and runtime record |

The author opened the new 768, 767 and 390 images at original detail. No clipping, overlap, hidden action, horizontal overflow or unintended outer Hero frame was observed.

## Handoff

The frozen combination is `HOME-001_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.2.md` plus `visual-designs/home-root-page-hero-v1.2/freeze-record.json`. Only the independent reviewer may close the Finding or issue the Gate 5 result.
