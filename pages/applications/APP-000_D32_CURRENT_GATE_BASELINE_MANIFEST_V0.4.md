# APP-000 D32 Current Gate Baseline Manifest V0.4

## Current authority

- Page ID / route: `APP-000` / `/applications/`
- Language / site scope: `EN` / `tio2-my`
- Date: `2026-09-20`
- Lifecycle: `GATE6_APPROVED_CLOSED / APPROVED_FOR_HANDOFF / GATE8_DISPATCH_AUTHORIZED`
- Gate 1–2: `RETAIN_APPROVED`
- Gate 3: `APPROVED / CLOSED`
- Gate 4: `APPROVED / CLOSED`
- New Gate 5: `INDEPENDENT_REVIEW_PASS / COMPLETE`
- Gate 6: `APPROVED / CLOSED`
- D32 Gate 8 implementation: `NOT_STARTED`
- Gate 9 / Gate 10: `NOT_STARTED / NOT_AUTHORIZED`
- D16 APP lineage: `HISTORICAL_ONLY / NOT_D32_EVIDENCE`
- Gate 6 closure: `pages/applications/05_review/APP-000_D32_GATE6_CONTROLLER_CLOSURE_V0.1.md`

This V0.4 manifest supersedes D32 Manifest V0.3 as the current APP-000 authority. V0.3 remains the accepted Gate 4/5 and Gate 6-entry state. Historical and failed candidates remain unchanged for traceability.

## Closed Gate 6 combination

| Item | Current identity / status |
|---|---|
| Execution path | `ESCALATED_PATH` |
| Handoff package | `APP-000_D32_GATE6_HANDOFF_PACKAGE_V0.1.md`; SHA-256 `723ba66bca86b5dd27a3151cfdb9910ea2469df46e9330567078b37fc188686d` |
| Package check | `APP-000_D32_GATE6_PACKAGE_CHECK_V0.1.json`; SHA-256 `dcf3397b90424c2c32d84b27e5d21017431a3c04991fa4e1c835b97f9524f146`; 381/381 author checks |
| Package author | `/root/app_gate6_execution` |
| Independent review | `APP-000_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md`; SHA-256 `1dc630ed08229a996764b7244a2ebb111da4aedeef37c239d8aa0b36c3a27c32`; `REVIEW_PASS`; 388/388; mandatory 0; advisory 0 |
| Independent reviewer | `/root/app_gate6_independent_review`; different from package author |
| Acceptance / dependencies | 22 acceptance IDs; 15 dependency IDs; 27 dependency-to-acceptance edges |
| Controller decision | `APP000-D32-G6-PC-CLOSURE-20260920-01` / `GATE6_APPROVED_CLOSED / APPROVED_FOR_HANDOFF` |
| Approval basis | `USER_STANDING_AUTHORITY` / `G346-DELEGATED-CLOSURE-20260907` |
| Accepted visual input | Gate 4 bundle `sha256:8275ccefa106ffca6186651b705f9a77bee9fe2a17a90981a3ecd2182a5ad618` |

The Gate 6 package is a development delivery contract. It inherits the valid Gate 5 visual result without a second visual review and does not claim that any D32 runtime acceptance condition has already passed.

## Preserved page and implementation boundary

The implementation must preserve five modules, exactly three steps, six application collections and thirty ordered neutral relationships in `8/8/7/4/2/1`, with zero Process and zero FAQ. The canonical is `https://tio2products.com/applications/`. Route actions resolve only through approved Page ID, language, scope and readiness; missing or mismatched targets fail closed while neutral content remains. Specialty Materials does not gain an invented child page.

Gate 8 must reuse the current D32 shared Header, Footer, Menu, Cookie, production Logo and RootPageHero owners and must provide Home and Products regression evidence for any shared change. APP content belongs in the typed WordPress content model and editable administration flow, not hardcoded template copy. Migration must be idempotent, recoverable and preserve existing Home, Products and later APP edits.

## Gate 8 dispatch and return

- Authorized receiver: existing `03开发` task (`01a0be2a-838b-76c0-b116-6677b9cadb70`).
- Authorized repository: `D:\32Wordpress_new` only.
- Required start: a current conflict-free D32 shared baseline in an isolated APP feature worktree/branch; the previously observed conflicted checkout is not an authorized development base.
- Required return: implementation and evidence commit identities, runtime identity/hold, content snapshot, acceptance-ID results, open dependencies and `gate8-evidence-manifest.json` compatible with the current Gate8→Gate9 contract.
- D23 may validate returned identities read-only; it does not modify D32 implementation.

All `APP000-G6-D01` through `APP000-G6-D15` remain open until their owners produce the defined evidence. Gate 8 dispatch is authorized but not yet recorded, and Gate 8 remains `NOT_STARTED` until the receiver acknowledges the exact package and starting baseline.

## Authorization boundary

This manifest authorizes package dispatch and Gate 8 implementation within the closed contract. It does not authorize Gate 9, Gate 10, PR/push/merge, deployment, release, production publication, DNS, indexing, GSC or a real RFQ submission. Historical D16 code, builds, runtime and evidence do not prove D32 status.
