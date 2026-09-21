# GRADE-M350 D32 Gate 3 Targeted Independent Recheck V0.1

## 1. Control

| Field | Value |
|---|---|
| Recheck ID | `GRADE-M350-D32-G3-IR-01-R1` |
| Parent review | `GRADE-M350-D32-G3-IR-01` |
| Parent report | `pages/products/detail-template/05_review/GRADE-M350_D32_GATE3_INDEPENDENT_REVIEW_V0.1.md` |
| Parent report SHA-256 | `A4A573E8BC2CB30D2F3317D2B2122203C9619880F532531407A0AE419EFAF96F` |
| Page ID | `GRADE-M350` |
| Date | `2026-09-20` |
| Review mode | `INDEPENDENT_REVIEW / TARGETED_RECHECK` |
| Recheck scope | `GRADE-M350-D32-G3-F01` through `F03`, replacement evidence identity and affected regression |
| Result | `PASS / F01-F03 CLOSED / READY_FOR_PROJECT_CONTROL_REVIEW` |

The reviewer did not edit the revised source, formal evidence, specification, executor self-check, handoff or approval state. Unaffected observations from the parent independent review are inherited only where the changed source and fresh evidence continue to support them.

## 2. Revised candidate identity

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| `pages/products/detail-template/04_planning/m350-d32-gate3-v0.1/m350-wireframe.html` | 27564 | `B5F748B870BA5A6FF1A2C8450DE91633152E7F1A3004ADA88BA405F3E60C36D5` |
| `pages/products/detail-template/04_planning/m350-d32-gate3-v0.1/gate3_measurements.json` | 12908 | `9DF924A9FAFFFAAA842D8F2611FB390B3E2DE923E9820D37D3B23B43F224271D` |
| `M350_D32_G3_FULL_1440.png` | 732409 | `A5059EDFCE74D4AB735097A70A173929D121F511B41EDAC55CE283ECA5C50465` |
| `M350_D32_G3_FULL_768.png` | 744831 | `5B75EE632C7ABC67DFCCE0DFBE93AB2C5B33F29A8D6C9229F2A8F1A6F66876B5` |
| `M350_D32_G3_FULL_390.png` | 764728 | `45D33BDFE166BDC84B6958A7A77460C5D0AFB71DD659FEDD63E514356E6BE26A` |
| `M350_D32_G3_MENU_390.png` | 52864 | `F7B78C23D6BD333F927C9276AB46F13476D83EC0432BE1D93BD6BB90AB568189` |
| `M350_D32_G3_COOKIE_390.png` | 41360 | `EF1181CBF5E9A2D635D40AB5FBECE4C45702B798E4741C5764487C6EBFDBBF8E` |

The fresh measurement file binds the revised source SHA above. Independent Chromium observation reproduced widths/heights `1440/1440/6031`, `768/768/7609` and `390/390/12321`; each viewport retained one H1, 15 technical rows, two Hero actions, six application blocks, no horizontal overflow and a minimum ordinary action size of 44×44 CSS px.

The revised planning documents independently rehashed as:

| Document | Bytes | SHA-256 |
|---|---:|---|
| `pages/products/detail-template/04_planning/GRADE-M350_D32_GATE3_RESPONSIVE_STRUCTURE_SPEC_V0.1.md` | 9326 | `202E56807DE4542F488ABE1C687314745F26D3B358FFC4D37E20D7C20979B2D3` |
| `pages/products/detail-template/05_review/GRADE-M350_D32_GATE3_SELF_CHECK_V0.1.md` | 2485 | `1A5CC679DAF008F4F175E9EC4749F6F4393E038BBDDF50B1928208D9B5C4A41E` |
| `pages/products/detail-template/05_review/GRADE-M350_D32_GATE3_TO_GATE4_HANDOFF_V0.1.md` | 3014 | `0F576E2FD80858422D9353C1B18EAD1DABD05E97783E16E166AF87B8781D498B` |

All five replacement PNGs were opened and inspected. The three full-page images show the revised Technical Data and Sample regions without the removed pseudo-fields or helper sentence; the Menu and Cookie state evidence remains visually and behaviorally valid.

## 3. Finding closure

### `GRADE-M350-D32-G3-F01` — CLOSED

The unapproved Technical Data helper sentence and all three Sample pseudo-field labels are absent from source and rendered evidence. Both approved Document Request labels now retain their colons:

- `Technical Data Sheet:`
- `Additional document requirements:`

A normalized independent comparison found all 117 extracted Gate 2 Buyer Clean fragments in the revised body and found zero occurrences of the four removed strings. The Sample region now contains the approved explanatory copy and one operable Sample action without inactive field-like boxes.

**Acceptance condition:** satisfied.

### `GRADE-M350-D32-G3-F02` — CLOSED

All five contextual actions independently parse to the approved route and context contract:

| Action instance | Required query context | Result |
|---|---|---|
| Hero Quote | `site_scope=tio2-my`, `grade=M-350`, `source_page=GRADE-M350` | PASS |
| Hero Sample | same three fields | PASS |
| Technical Data TDS | same three fields plus `requested_type=TDS` | PASS |
| Document Request | same three fields | PASS |
| Sample module action | same three fields | PASS |

The structure specification and Gate 3→4 handoff now explicitly preserve these fields and distinguish the fixed shared RFQ from page-context actions. Receiver readiness remains a later implementation/runtime concern under the approved fail-closed contract.

**Acceptance condition:** satisfied.

### `GRADE-M350-D32-G3-F03` — CLOSED

The specification records the exact revised source, measurement and five PNG identities. It also records exact paths and full SHA-256 identities for:

- Gate 3 cross-page consistency decision `0C78278B9898E3A52ED048E0BCD3CD338F6F490E1DD56FA3085B7B83FC86C95C`;
- Global Header/Footer V0.5 `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18`;
- Product Detail Global Chrome Addendum V0.5 `DE8BF3DFB4F50DFF2C8CCD2FD0AB665E21FE02D7D00A6B558CEBC0344A1CC6EA`;
- Production SVG Logo Manifest V1.0 `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894`;
- historical M-350 desktop and mobile family references;
- current Product Hub visual-context reference and its limited reuse scope.

The handoff now gives complete project-relative paths for the Grade Detail, Global Chrome and Logo references and distinguishes historical visual context from active shared ownership. Its Product Hub reference is explicitly limited to palette, typography hierarchy, action treatment and restrained surfaces. The responsive specification now matches the fresh heights `6031 / 7609 / 12321` and describes the final Sample area as an action rather than a form.

**Acceptance condition:** satisfied.

## 4. Affected regression and inherited results

The revised source preserved:

- one H1 and the approved module order;
- exactly two Hero actions;
- five TDS-backed application directions plus the separately qualified Paper block;
- all 15 exact technical rows and the non-specification boundary;
- zero public `V3 2023`/year fragments, zero Related Grades and zero buyer-visible `CURRENT`;
- 1440, 768 and 390 no-overflow geometry;
- Mobile Menu focus entry, background inertness and Escape close;
- Cookie dialog focus entry and close behavior.

The fresh three-end images close correctly at the shared Footer. No new Blocker, Important or Minor finding was introduced by the targeted revision.

## 5. Final disposition

`GRADE-M350-D32-G3-IR-01-R1 = PASS / F01-F03 CLOSED`

The revised Gate 3 candidate with source SHA-256 `B5F748B870BA5A6FF1A2C8450DE91633152E7F1A3004ADA88BA405F3E60C36D5` is **ready for project-control review and closure under the standing authority**.

This independent result does not itself close Gate 3, start Gate 4, approve Gate 6, authorize D32 implementation, or approve deployment, publication or indexing.
