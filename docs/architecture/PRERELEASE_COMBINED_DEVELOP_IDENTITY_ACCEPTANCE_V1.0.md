# Prerelease Combined Develop Identity Acceptance V1.0

Date: 2026-09-09

Status: `PROJECT_CONTROL_IDENTITY_CHECK / PASS`

Candidate: `TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1`

## Decision

The accepted task-branch candidate is present unchanged in the first `develop` merge. The only later source delta is the independently reviewed Windows checkout byte-stability repair for the new prerelease Seed and its regression test. The tested `develop` identity is accepted for the already authorized local `main` integration step.

```text
DEVELOP_COMBINATION_STATUS = PASS
ACCEPTED_CANDIDATE_IDENTITY = PRESENT
POST_ACCEPTANCE_SEMANTIC_DRIFT = NONE
MAIN_LOCAL_INTEGRATION = AUTHORIZED_UNDER_EXISTING_LOCAL_AUTHORITY
FINAL_GATE9 = NOT_STARTED_FOR_CLEAN_MAIN_PRERELEASE
RELEASE_STATUS = NOT_AUTHORIZED
```

## Accepted and integrated identities

| Item | Identity |
|---|---|
| Accepted implementation | `f81321c07d6026ef1e5119cfb7b58914225ff753` |
| Accepted evidence HEAD | `b081001e93f7ad269dd25ff5c5b1a3177f8d63fa` |
| Accepted task Build | `qyjMXbbCPr3yW3ZlKuD97` |
| Develop before | `149bbae23cf6b5376a037da528a1379d298bdfd4` |
| First merge | `8a2698d7f4dc3d8d3fb3bafb3d91ee017c0bea58` |
| LF repair | `b4eb8b13211449655518315e4f3491675fa8e184` |
| Tested develop | `a578e7b0ce35fc2262ff594c49ac0b03e7677a87` |
| Develop evidence HEAD | `ba37af03bec4cf9f44f56415afc243be1c297847` |
| Develop Build | `gUcvVd8srLVKb94i9C9b7` |
| Develop runtime | `http://127.0.0.1:3184`; run `public-paths-integration-a578e7b0ce35` |

The accepted evidence HEAD is an ancestor of the develop evidence HEAD. The tree of first merge `8a2698d7...` is exactly `6eb7d71c8f954579b338400a86e601830f4de5e6`, equal to the accepted evidence HEAD tree.

## Post-acceptance source delta

The diff from accepted evidence HEAD `b081001e...` to tested develop `a578e7b...` contains exactly:

- `.gitattributes`: adds `wordpress/seed/apply-tio2-my-prerelease-public-paths.php text eol=lf`;
- `tests/infrastructure/prerelease-compose.test.ts`: checks the exact attribute and reproduces a Windows-style `core.autocrlf=true` checkout before comparing the approved Seed SHA and bytes.

The Seed, manifest and business implementation are unchanged. The repair closes the reproducible fresh-Windows-checkout SHA mismatch without altering the accepted page or form behavior.

The diff from tested develop `a578e7b...` to evidence HEAD `ba37af03...` contains only 34 files under `docs/verification/prerelease-public-paths/`, including the integration record, logs, runtime identity and supplied visual/runtime evidence.

## Independent controller verification

Project Control independently confirmed:

- `develop` HEAD is `ba37af03...` and the worktree is clean;
- accepted evidence HEAD is an ancestor of the current develop HEAD;
- first-merge and accepted trees are identical;
- the integration record SHA-256 is `a939563d049dcd5f3056729db938e746ba4a26030081a6fbb2b641d050bf348f`;
- `http://127.0.0.1:3184/applications/` returns HTTP 200 and contains Build marker `gUcvVd8srLVKb94i9C9b7`;
- `.next-public-paths-integration/BUILD_ID` contains the same Build ID;
- the recorded post-acceptance source delta is limited to the two files above.

## Combination evidence accepted

The integration record reports:

- lint: exit 0 with four inherited warnings;
- typecheck: exit 0;
- full suite: 357 files and 2,999 tests passed; 21 files and 51 existing conditional tests skipped; zero failures;
- production build: exit 0;
- public-path E2E: 4/4 passed at 1440, 768 and 390 across the 58-object scope, with only the approved Contact exception and zero external POSTs;
- form unit suites: 30 files and 271 tests passed;
- Resources PHP/TypeScript H0-H5 parity: 1/1 passed;
- all 41 Seed bytes match their manifest after the LF repair.

These results authorize the next local integration action. They are not a clean-main prerelease result and do not satisfy the three real provider/inbox conditions.

## Next boundary

D16 may merge exact develop evidence HEAD `ba37af03...` into local `main`, then run the prescribed typecheck/build and keep `main` clean. It must return the resulting main identity before starting the clean-main prerelease reset. No push, remote deployment, production CMS write, publication, indexing, DNS, Gate 10 or release is authorized by this record.
