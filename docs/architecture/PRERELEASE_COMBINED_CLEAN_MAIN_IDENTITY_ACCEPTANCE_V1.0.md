# Prerelease Combined Clean-Main Identity Acceptance V1.0

Date: 2026-09-09

Status: `PROJECT_CONTROL_IDENTITY_CHECK / PASS`

Candidate: `TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1`

## Decision

Local `main` commit `427d232841ac60da6cc7b3e67963fffc57a4ac10` is the clean, exact merge of prior main `98c2c573dd090048352fa12415a9cc8eeefc485b` and accepted develop evidence HEAD `ba37af03bec4cf9f44f56415afc243be1c297847`. It is accepted as the sole Task 10 prerelease source identity.

```text
CLEAN_MAIN_IDENTITY = PASS
TASK10_PRERELEASE_EXECUTION = AUTHORIZED_UNDER_EXISTING_USER_APPROVAL
FINAL_GATE9 = NOT_YET_EXECUTED
GATE10 = NOT_STARTED / NOT_AUTHORIZED
RELEASE_STATUS = NOT_AUTHORIZED
```

## Independent checks

Project Control independently confirmed:

- `main` HEAD is `427d232841ac60da6cc7b3e67963fffc57a4ac10` and the worktree is clean;
- the merge has exactly two parents, prior main `98c2c573...` and source develop `ba37af03...`, with no reported conflict;
- main and source develop share tree `f7c6a59a7b19d22f4f627933ec4560eb9c017870`;
- accepted implementation `f81321c...` and accepted evidence `b081001e...` are ancestors of main;
- the local integration record SHA-256 is `2eabf13e054964c76d36362d26119e855a8d61ed961f7f1854f702a5da1a83e9`;
- typecheck and production build exited 0;
- `.next-public-paths-main/BUILD_ID` is `7MuHoR9_oLoYonkOx5JNm`, matching the integration record;
- all 41 Seed working/archive bytes match the approved Seed manifest;
- no runtime, prerelease reset, external submission, push or remote deployment occurred during the identity check.

## Task 10 boundary

D16 may now reset/start the local prerelease from exact main `427d232...`, obtain a new prerelease run and Build identity, execute the approved retained prerelease suite, and run exactly one controlled live Web3Forms submission for each of RFQ, Sample and Documents. Provider acknowledgement and destination-inbox receipt must remain separate, correlated by the approved workflow and opaque request token, with sanitized artifacts under the V1.1 evidence boundary.

The four user-removed checks remain `NOT_TESTED / NO_LONGER_REQUIRED_BY_USER_DECISION`: native 200% zoom, physical-device/touch testing, screen-reader or other AT testing, and forced-colors testing.

Task 10 must stop and return the exact run/commit/Build/CMS identity, retained test results, three provider rows, three separately recorded inbox rows, internal-link result and any failure. This record does not authorize push, remote deployment, production CMS writes, publication, indexing, DNS, Gate 10 or release.
