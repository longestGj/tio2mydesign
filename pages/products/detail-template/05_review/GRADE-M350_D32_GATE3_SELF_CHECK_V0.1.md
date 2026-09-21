# GRADE-M350 D32 Gate 3 Self-check V0.1

## Control

| Field | Value |
|---|---|
| Page ID | `GRADE-M350` |
| Date | `2026-09-20` |
| Candidate | `m350-d32-gate3-v0.1/m350-wireframe.html` |
| Reviewer role | Gate 3 executor self-check; not independent review |
| Result | `SELF_CHECK_PASS / READY_FOR_INDEPENDENT_REVIEW` |

## Results

| Check | Evidence | Result |
|---|---|---|
| Approved copy | Source binds Full Copy SHA `85A4...57A`; visible TDS revision strings `0`; targeted revision removes unapproved helper/pseudo-field text and restores both approved colons | Pass |
| Page identity | One H1; route and canonical contract retained; Products is current | Pass |
| Module order | Header → Hero → Positioning → Applications → Evaluation → Technical Data → Documents → Markets → Sample → Footer | Pass |
| Hero boundary | Quote + Sample only (`2`) | Pass |
| Application semantics | Five TDS-backed directions plus separately qualified Paper (`6`) | Pass |
| Technical data | `15` Property / Standard / Typical rows; non-specification note retained | Pass |
| Historical exclusions | Related Grades `0`; buyer-visible `CURRENT` `0` | Pass |
| Widths | `scrollWidth = clientWidth` at `1440`, `768`, `390` | Pass |
| Action size | minimum tested action width and height both `44` CSS px | Pass |
| Mobile navigation | focus entry, one current item, background inertness and Escape close verified | Pass |
| Cookie dialog | focus entry and explicit close verified | Pass |
| Cross-page consistency | current Global Chrome and Grade Detail family roles reused; page-specific differences documented | Pass |
| Contextual delivery | Quote/Sample/Documents carry `site_scope=tio2-my`, `grade=M-350`, `source_page=GRADE-M350`; TDS also carries `requested_type=TDS` | Pass |

The first preflight exposed a `39.23px` breadcrumb link width. The fix added a `44px` minimum target box to breadcrumb links. A clipped skip link was excluded from ordinary visible-target sizing while remaining keyboard available. Independent review then identified three narrow contract defects: unapproved helper/pseudo-field text, incomplete contextual delivery fields and non-exact reference identities. The source, specification and handoff were corrected, and fresh renders produced the replacement hashes registered in the Gate 3 specification.

No Blocker, Important or Minor finding remains in executor self-check. Independent review is still required before project-control closure.
