# Prerelease Combined Candidate Pre-Merge Acceptance Ruling V1.0

Date: 2026-09-09

Status: `PROJECT_CONTROL_WORKFLOW_RULING / EFFECTIVE`

Candidate: `TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1`

## Decision

The combined implementation must not move directly from its task branch to `main`. It follows the active D16 serial path:

```text
develop baseline
  -> codex/prerelease-public-paths-forms
  -> Gate 8 machine handoff
  -> independent D23 pre-merge acceptance
  -> develop integration and combination regression
  -> D23 accepted-identity check
  -> main integration
  -> clean-main local prerelease
  -> final D23 Gate 9 acceptance
```

The pre-merge independent Reviewer is the existing D23 task titled `00-Gate9-01my开发`, thread `01a07e7e-24ef-7390-beab-f50fcbf169e0`. It must use the current Gate 9 read-only acceptance role, runtime implementation verification method and Gate 8→Gate 9 machine handoff contract. It must not modify D16.

## Pre-merge input

D16 returns one `gate8_evidence_manifest.json` that binds:

- D23 design commit `40da0e7bcc86e7d6a9e4a8b8732300d7aed536f4` and the effective Page/URL interpretation;
- repository, `develop` baseline, task branch and implementation/evidence commits;
- clean-worktree time;
- Build directory, Build ID and runtime URL;
- Page IDs and acceptance-condition IDs for Home, Product Hub, Applications Hub, Documents Hub, Resources Hub, RFQ, Sample, Documents request and Thank You;
- exact evidence paths and SHA-256 values;
- required test results and the four user-removed checks as `NOT_TESTED / NO_LONGER_REQUIRED_BY_USER_DECISION`;
- known external or release-only open items.

The task runtime remains available under `GATE9_PASS_OR_RETURN_NOTICE` until the Reviewer sends a pass, return or explicit release notice.

## Pre-merge output

The independent Reviewer returns all four contract statuses:

```text
RECHECK_SCOPE_STATUS = PASS / COMBINED_IMPLEMENTATION_PREMERGE_CHECKED
PAGE_GATE9_STATUS = NOT_FINAL / CLEAN_MAIN_PRERELEASE_NOT_EXECUTED
INTEGRATION_STATUS = INTEGRATION_READY
RELEASE_STATUS = NOT_AUTHORIZED
```

If any required implementation or evidence condition fails, `INTEGRATION_STATUS` is `NOT_READY` and the exact Finding returns to the same D16 implementation task. Technical self-review, test count and Build success cannot replace this independent acceptance.

## Develop and main integration

After `INTEGRATION_READY`, the existing D16 integration task may use the already-held local merge authorization:

1. re-read current `develop` HEAD and verify no other integration operation is active;
2. merge the accepted task-branch commit into `develop`;
3. run integration regression and affected E2E against the actual combined `develop` tree;
4. return the accepted implementation/evidence/Build identity, develop before/after commits, merge result and combination evidence to D23;
5. D23 checks that the accepted implementation is present and that conflict resolution or later edits did not change the approved behavior;
6. only after that identity check, merge `develop` into local `main`, verify the actual tree and keep main clean;
7. run the local prerelease from that exact main identity.

If a merge conflict or post-review edit changes an approved surface, the affected independent acceptance conditions are rerun before main integration. Unrelated commits already accepted through the serial queue are verified by the develop combination regression; they do not permit silent changes to this candidate.

## Final Gate 9

The pre-merge output is not a page or batch Gate 9 pass. Final Gate 9 uses the clean-main prerelease run, Build ID, CMS identity, runtime evidence, three Web3Forms provider results, three separately correlated inbox receipts and complete internal-link scan. Only that final review may record the completion states defined in the approved design.

This ruling does not authorize push, remote deployment, production WordPress writes, release, indexing, DNS or Gate 10.
