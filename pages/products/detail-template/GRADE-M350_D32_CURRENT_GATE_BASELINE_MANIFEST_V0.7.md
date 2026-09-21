# GRADE-M350 D32 Current Gate Baseline Manifest V0.7

## Control

| Field | Value |
|---|---|
| Manifest ID | `GRADE-M350-D32-CURRENT-GATE-MANIFEST-07` |
| Page ID | `GRADE-M350` |
| URL / canonical | `/products/m-350/` / `https://tio2products.com/products/m-350/` |
| Locale / site scope | `en` / `tio2-my` |
| Date | `2026-09-20` |
| Lifecycle | `GATE_1–9_CLOSED / PAGE_PASS / INTEGRATION_NOT_READY` |
| Implementation owner | `D:/32Wordpress_new`; Codex task `02开发`, thread `01a0bd8c-1d64-7fd1-9026-243adc069ca9` |
| Gate 9 owner | D23 independent read-only acceptance |
| Release | `GATE_10 / MERGE / DEPLOYMENT / PUBLICATION / SITEMAP / INDEXING NOT_AUTHORIZED` |

This is the only current M-350 Manifest. V0.6 remains the Gate 8 dispatch snapshot.

## Approved implementation combination

The Gate 1–6 approved copy, structure, Freeze 02 visual and Gate 6 V0.2 package identities remain unchanged from V0.6. Gate 8 and Gate 9 bind the following exact candidate:

| Layer | Current identity |
|---|---|
| Branch / baseline | `codex/grade-m350-gate8` / `5a7801b05bdb4aeccf7a95b336ef04c3740579ab` |
| Implementation commit | `a13d270160d39d009159d7c38f82b85456f71c03` |
| Evidence / clean HEAD | `a96d850ff487a3f0b566614bc826ef67bb3b5d23` |
| Build | `wp-b6ac6157961a238166aeb566b1121810a29ee6e2c4441547f36b0965107343d0` |
| Accepted Gate 9 runtime | `http://127.0.0.1:8350/products/m-350/`; `site_scope=tio2-my`; stopped after Gate 8 acknowledged PASS |
| Machine handoff | `GRADE-M350-D32-G8-01`; Evidence Manifest SHA-256 `2C9EB8EAE59067B4B92559F5099CCDD7A8DF53475D3CD5FF8417909D2A03C560` |
| Gate 9 result | [Independent acceptance V0.1](07_qa/GRADE-M350_D32_GATE9_INDEPENDENT_ACCEPTANCE_V0.1.md): 16/16 AC PASS, new Finding 0 |

The candidate includes the exact accepted Product Hub evidence HEAD `8a4e3f5cb88cc30d0aecc36955ccb3ac19b8307c` in its ancestry. Product Hub composition dependency is closed.

## Four-layer status

- `RECHECK_SCOPE_STATUS=INITIAL_REVIEW_COMPLETE / PASS`
- `PAGE_GATE9_STATUS=READ_ONLY_QA_APPROVED / CLOSED`
- `INTEGRATION_STATUS=NOT_READY / EXTERNAL_DEPENDENCIES_OPEN`
- `RELEASE_STATUS=NOT_AUTHORIZED`

RFQ, Sample, Document, Process, Applications, Markets and Indexing remain external open dependencies. Their conditional modules and links fail closed on the accepted page, so they do not reverse the page PASS.

Physical device, manual screen reader and native browser/OS 200% zoom are `USER_EXCEPTED / NOT_TESTED`; they are not findings, evidence debts or blockers.

## Stop boundary

Gate 8 return work is complete. The developer task acknowledged PASS and stopped the isolated Compose preview while preserving database/media volumes, branch, worktree and the fixed candidate. This record does not authorize merge, push, deployment, production CMS writes, public release, sitemap inclusion, indexing or Gate 10.

## Supersession

This Manifest supersedes V0.6 as the only current pointer. Earlier Manifests and review records remain immutable evidence for the candidates they bind.
