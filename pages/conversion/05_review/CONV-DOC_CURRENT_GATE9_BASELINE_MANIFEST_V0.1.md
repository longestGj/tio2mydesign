# CONV-DOC Current Gate 9 Baseline Manifest V0.1

## 0. Manifest control

| Field | Value |
|---|---|
| Manifest role | Sole current Gate 9 lifecycle and read-only QA pointer for CONV-DOC |
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Page type | Utility conversion page |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Gate 9 review | `CONV-DOC-G9-TARGETED-REREVIEW-PCR-01` |
| Target implementation | `bc695d291109a685ab85950d3b42d85d6e8ebcfa` |
| Finding | `DOC-G9-P1-01 = VERIFIED_FIXED / CLOSED` |
| Gate 9 | `READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS` |
| Page lifecycle | `READ_ONLY_QA_APPROVED` |
| Manifest status | `CURRENT_GATE_9_BASELINE / ACTIVE` |
| Decision date | 2026-09-04 |
| Gate 10 | `NOT_AUTHORIZED` |

This Manifest records the project-control decision dated 2026-09-04. It does not alter the approved Gate 5 design, Gate 7 delivery contract or Gate 8 implementation. It does not authorize production release.

## 1. Current authority chain

| Role | File | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Gate 9 project-control decision | `pages/conversion/05_review/CONV-DOC_GATE9_PROJECT_CONTROL_DECISION_V0.1.md` | 2050 | `0D8C5CE540104C28069144A15E2EEE9283B1694D553F729300D0BB8223D41341` | `PROJECT_CONTROL_ACCEPTED / CURRENT DECISION` |
| Targeted independent evidence | `pages/conversion/05_review/CONV-DOC_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.1.md` | 9995 | `6F67687CD8769799DDC1FE20A66DFA863BB68B4D18DB795E57FEFFDDBF8CA292` | Accepted evidence; immutable submitted record |
| Targeted finding recommendation | `pages/conversion/05_review/CONV-DOC_GATE9_TARGETED_FINDING_CLOSURE_V0.1.md` | 2728 | `3F85DEA81319C7648FA7700C76B24C8D87F6676EA381EAE429896B83298D8C36` | Superseded by project-control closed finding state |
| Targeted resubmission | `pages/conversion/05_review/CONV-DOC_GATE9_TARGETED_PROJECT_CONTROL_RESUBMISSION_V0.1.md` | 4293 | `B757BBCEFE598A283AF9D7A39659329D480DC575B87E516EB0432EB160646FEE` | `PROJECT_CONTROL_ACCEPTED / HISTORICAL_SUBMISSION` |
| Initial Gate 9 evidence | `pages/conversion/05_review/CONV-DOC_GATE9_READ_ONLY_QA_EVIDENCE_V0.1.md` | 10639 | `21E11178D7D6F2980A32FA0AF65393D321FA3A8DD97D97CECB679426D3ECCCFF` | Historical initial review evidence |
| Initial findings | `pages/conversion/05_review/CONV-DOC_GATE9_FINDINGS_AND_RELEASE_BLOCKERS_V0.1.md` | 5073 | `A3F507477DE85CED60F07792FB171FEA84499E0FCEFD7EC045A7977455E1B4F9` | `DOC-G9-P1-01` closed by current decision; release blockers retained |
| Initial review submission | `pages/conversion/05_review/CONV-DOC_GATE9_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | 4349 | `8927365465459C703F2AB4085C0243236325628572081296D6870F6289B99A04` | Historical initial submission |
| Gate 9 authorization | `pages/conversion/05_review/CONV-DOC_GATE9_USER_AUTHORIZATION_RECORD_V0.1.md` | 2948 | `7A1D1015124863F586C872F010A02A9E3ED1299A4FE4956FE0D28AA175617F0A` | Authorization provenance |
| Gate 8 completion | `pages/conversion/05_review/CONV-DOC_GATE8_DEVELOPMENT_COMPLETION_RECORD_V0.1.md` | 5177 | `4BE006766E056BAFB070061FB0F9C925B149A56FEDEDBE519305F9D74A686FE4` | Implementation provenance |
| Gate 7 approved handoff | `pages/conversion/06_handoff/CONV-DOC_GATE7_CURRENT_HANDOFF_MANIFEST_V0.1.md` | 5729 | `18D6F72F1563D657DE01A9DC044895120D2A70A497986E33F041064E04B3E400` | Approved delivery authority |
| Gate 5 approved baseline | `pages/conversion/05_review/CONV-DOC_GATE5_CURRENT_BASELINE_MANIFEST_V0.4.md` | 14011 | `2CAE2A89C59126C6B90B74E853D2CC1110FB1E0E1908FB7198CEAB26CF42BBEC` | Approved visual/content baseline |
| Current intent Brief | `docs/page-briefs/CONV-DOC_REQUEST_DOCUMENTS_BRIEF_V0.4.md` | 12248 | `3378D078646C0BFD35B09564DF4F39B34E8F7B193E0F766CC9685180C195F113` | Historical phase authority; lifecycle overlaid by this Manifest |
| PRODUCT relationship authority | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | 61284 | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` | Sole Grade–Application/Process baseline |
| Developer targeted evidence | `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/docs/verification/conv-doc/CONV-DOC_DOC-G9-P1-01_VERIFICATION_2026-09-04.md` | 4313 | `EFB03D49A27E311D227ECC83E9B29008C0A9890BFF254CC9DB779A194C740914` | External implementation evidence |

## 2. Project-control acceptance

Project control accepted the targeted re-review and independently reran the focused relationship/receiver suite on 2026-09-04:

`2 files / 61 tests PASS`, exit code 0.

The accepted boundary is:

- trusted URL prefill is limited to PRODUCT V0.3 Grade–Application/Process relationships;
- M-2377 permits Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate neutral context;
- M-2377 Specialty Materials, Rubber, arbitrary values and mismatched source attribution are not trusted prefill;
- ordinary buyer-entered Application / Industry free text remains available;
- invalidated source attribution is omitted;
- shared Global Chrome and `site_scope=tio2-my` remain unchanged.

## 3. Gate ledger

| Gate | Current state |
|---|---|
| Gate 0–5 | Approved and closed under their preserved authority records |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 | `IMPLEMENTED / DEVELOPMENT_COMPLETE` |
| Gate 9 | `READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS` |
| Gate 10 | `NOT_AUTHORIZED` |

Page lifecycle: `READ_ONLY_QA_APPROVED`.

## 4. Recorded Gate 10 release blockers

The following remain open and must be resolved or explicitly accepted in the separately authorized production-release stage:

1. production receiver ownership, configuration and positive acknowledgement;
2. Privacy Policy and actual receiver data-flow parity;
3. authorized WordPress singleton migration;
4. explicit Gate 10 authorization for production release, robots, sitemap, DNS and indexing.

These are release controls. They do not reopen the accepted Gate 9 technical finding, and Gate 9 approval does not waive them.

## 5. Current stop

`DOC-G9-P1-01 = VERIFIED_FIXED / CLOSED`.

`CONV-DOC Gate 9 = READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`.

`CONV-DOC lifecycle = READ_ONLY_QA_APPROVED`.

`Gate 10 = NOT_AUTHORIZED`.

No D16 code, build, deployment, production data, DNS, robots, sitemap or indexing action is authorized by this Manifest.

