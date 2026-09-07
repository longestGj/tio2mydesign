# HOME-001 Gate 9 Project Control Submission V0.1

## Project-control decision

Project control accepted `HOME-001-G9-ROQA-01` on `2026-09-04` with the disposition:

`CONDITIONAL_RETURN / TARGETED_REVISION_REQUIRED / NOT_APPROVED`

Gate 9 must remain open. Gate 10 remains locked and is not part of this submission.

## Implementation reviewed

- Worktree: `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my`
- Branch: `codex/home-001-tio2-my`
- HEAD: `49289d40fdb0b91d28f534776464403883d912ff`
- HOME implementation commit: `b27c6433c0a3cd775afb9a30c70486890c37414b`
- Review date: `2026-09-04`
- Worktree after checks: clean

The review inspected the actual implementation and ignored the obsolete project-status sentence that said no external development existed.

## Submission set

1. `HOME-001_GATE9_READ_ONLY_QA_EVIDENCE_V0.1.md`
2. `HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.1.md`
3. `HOME-001_GATE9_EXTERNAL_DEVELOPMENT_FINDINGS_V0.1.md`
4. `evidence/home-001-gate9-browser-audit-v0.1.json`
5. Seven versioned PNG browser evidence files in `pages/home/07_qa/evidence/`

## What passed

- focused HOME-001 tests: 49/49;
- TypeScript and targeted ESLint;
- production build;
- Global Chrome browser tests: 9/9;
- exact content, H1, metadata and five-node/five-relation Schema contract;
- production SVG Logo hashes;
- 1440/1024/768/390/320 with zero horizontal overflow;
- responsive page-RFQ difference;
- Mobile Menu order, focus entry and Escape return;
- 14 unique grades in expanded state;
- default-view keyboard traversal and focus visibility;
- Buyer Clean internal-term scan and `site_scope=tio2-my` leakage scan.

## Why approval is not recommended

1. Axe reports serious color-contrast violations at every width.
2. Mobile default Products hides all four required group names/counts.
3. Nine buyer-visible targets return 404 or 500.
4. The fixed RFQ route has no usable form in the reviewed runtime.
5. Current rendered visual geometry materially differs from the Gate 7 images.
6. The broader repository suite is not green.

## Project-control responsibility split

### Home owner / external developer

- Correct all recorded color-contrast failures.
- In the Mobile default Products state, show all four group names and the `6/5/2/1` counts while keeping grades collapsed.
- Align H1 and section spacing to the approved Home baseline.
- Submit fresh 1440/1024/768/390/320, Axe and screenshot evidence after the fixes.

### External dependency owners

Buyer-target 404/500 routes, RFQ receiver readiness and downstream-page readiness remain release dependencies owned outside the Home correction scope. Home must not create child pages, change approved URLs or use cross-`site_scope` fallback.

### User decision required: Tablet Start Here

The Gate 7 Home package includes Start Here across the Home architecture, but the V0.2 Tablet order and Tablet images omit it. The implementation includes it at 768/1024. Project control should issue one explicit Tablet decision before the external developer changes that module.

Status: `USER_DECISION_REQUIRED / IMPLEMENTATION_UNCHANGED`.

### Broader repository suite

Failures unrelated to Home or caused by missing local environment remain recorded for their corresponding owners. They must not be presented as Home page defects.

## Recommended next action

The Home-owned correction scope is sent to the existing `01My首页开发` task. After a new implementation commit is supplied, perform a fresh Gate 9 re-review with new hashes and browser evidence. Do not reuse these screenshots as proof of the corrected build.

## Gate 10 boundary

This submission does not authorize deployment, DNS, production WordPress writes, production receiver activation, public indexing or release. Those remain Gate 10/external-release decisions requiring separate user authorization after Gate 9 closure.
