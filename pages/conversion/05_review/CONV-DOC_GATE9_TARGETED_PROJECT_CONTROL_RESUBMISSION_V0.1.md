# CONV-DOC Gate 9 Targeted Project-control Resubmission V0.1

## 0. Submission control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Review ID | `CONV-DOC-G9-TARGETED-REREVIEW-PCR-01` |
| Returned finding | `DOC-G9-P1-01` |
| Target commit | `bc695d291109a685ab85950d3b42d85d6e8ebcfa` |
| Submission date | 2026-09-04 |
| Submission status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Requested decision | Accept or return the targeted finding closure recommendation |
| Gate 9 before decision | `READ_ONLY_QA_IN_REVIEW / NOT_APPROVED` |
| Gate 10 / deployment / publication / DNS / indexing | `NOT_AUTHORIZED` |

## 1. Submitted authority set

| Role | File | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Project-control return | `pages/conversion/05_review/CONV-DOC_GATE9_PROJECT_CONTROL_RETURN_V0.1.md` | 2623 | `26DB498845A14488BB2CF27A4F23FE3914567BEA94CB022A3CE2DD6B10DB59F9` | Return authority |
| Developer evidence | `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/docs/verification/conv-doc/CONV-DOC_DOC-G9-P1-01_VERIFICATION_2026-09-04.md` | 4313 | `EFB03D49A27E311D227ECC83E9B29008C0A9890BFF254CC9DB779A194C740914` | Input only; independently checked |
| Independent targeted evidence | `pages/conversion/05_review/CONV-DOC_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.1.md` | 9995 | `6F67687CD8769799DDC1FE20A66DFA863BB68B4D18DB795E57FEFFDDBF8CA292` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Finding closure recommendation | `pages/conversion/05_review/CONV-DOC_GATE9_TARGETED_FINDING_CLOSURE_V0.1.md` | 2728 | `3F85DEA81319C7648FA7700C76B24C8D87F6676EA381EAE429896B83298D8C36` | `VERIFIED_FIXED_PENDING_PROJECT_CONTROL_REVIEW` |
| Relationship authority | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | current | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` | Sole relationship baseline |

## 2. Independent re-review result

The page execution task independently inspected the actual commit and reran the required verification. It did not rely on the developer report as the decision source.

| Review area | Fresh result |
|---|---|
| Actual diff | Six CONV-DOC files only; target files identical to `HEAD`; no shared or other-page file in commit |
| PRODUCT V0.3 | Implementation matches 30 verified / 54 no-public Application rows and 8/5/1 Process counts |
| M-2377 positives | Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate pass in unit and production browser |
| Negative URL prefill | Specialty Materials, Rubber, arbitrary value and mismatched Grade source are discarded |
| Source consistency | Grade, five APP sources and two Process sources are bound to exact visible context and allowed Grade relation |
| Manual buyer entry | Arbitrary buyer text passed through optimized-build browser, same-origin API and local receiver unchanged; stale source attribution was omitted |
| Focused tests | 2 files / 61 tests PASS |
| Full CONV-DOC tests | 11 files / 97 tests PASS |
| Production browser | 15/15 PASS |
| ESLint / typecheck | PASS on exact target-commit snapshot |
| Optimized build | PASS; 35/35 static pages generated |
| Shared Chrome / site scope / existing page behavior | No diff; runtime, route and receiver checks PASS |

## 3. Requested project-control decision

The submitted recommendation is:

`DOC-G9-P1-01 = VERIFIED_FIXED_PENDING_PROJECT_CONTROL_REVIEW`.

Project control is requested to decide whether to:

1. accept the evidence and close `DOC-G9-P1-01`; or
2. return a specific remaining defect with an exact failed criterion.

This submission does not self-close the finding and does not approve Gate 9.

## 4. Preserved release blockers

The following remain open regardless of the targeted finding decision:

1. production receiver ownership/configuration and positive acknowledgement;
2. Privacy/data-flow parity with the actual receiver;
3. authorized WordPress singleton migration;
4. separate Gate 10 production release, robots, sitemap and indexing authorization.

## 5. Current stop

`CONV-DOC Gate 9 = READ_ONLY_QA_IN_REVIEW / NOT_APPROVED`.

`CONV-DOC-G9-TARGETED-REREVIEW-PCR-01 = SUBMITTED / PROJECT_CONTROL_DECISION_REQUIRED`.

No Gate 10, deployment, publication, DNS or indexing action is authorized by this resubmission.

