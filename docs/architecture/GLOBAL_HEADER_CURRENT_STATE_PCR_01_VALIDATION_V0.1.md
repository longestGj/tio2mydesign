# GHC Current-state PCR-01 Fresh Validation V0.1

## Validation control

| Field | Value |
|---|---|
| Validation ID | `GHC-CURRENT-TEXT-REMOVAL-PCR-01-VAL-01` |
| Review ID | `GHC-CURRENT-TEXT-REMOVAL-PCR-01` |
| Date | 2026-08-31 |
| Status | `VALIDATED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Scope | P0-01, P1-01, locked visible-state contract, historical assets and document hygiene |

## Revised payload hashes

| File | Bytes | SHA-256 |
|---|---:|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | 6,999 | `19dff3ad5ef4edf9d82723bfd54df9a020897a9c1c2a9c0e6a2084f6951a02c2` |
| `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` | 3,326 | `db6949c8f34d3597d60e26e57a00d9926b0f9a90988e3e42a44559ad97a6f271` |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md` | 3,073 | `57667e2c8c3dd6c888a971026d63eb1da891f14074de3203018d7d8a25b9838d` |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.2.md` | 2,448 | `b4541380799313cfc0bfe2ffafdcb566585abda2ad3286c2703e6f050930add5` |

This validation file is excluded from its own payload hash table to avoid a self-referential checksum.

## P0-01 validation

| Check | Result |
|---|---|
| Each navigation surface has at most one current link | PASS |
| Mapped route gives Desktop and Mobile surfaces one each | PASS |
| Unmapped route gives each surface zero | PASS |
| Active viewport exposes exactly one accessible navigation surface | PASS |
| Active accessible surface contains exactly one current link | PASS |
| Inactive surface excluded from accessibility tree | PASS |
| Inactive surface keyboard-focusable descendants | 0 required / contract present |
| Full shared DOM may contain two surface-scoped current nodes | Explicitly recorded |
| Per-surface count greater than one | Blocking failure defined |

## P1-01 validation

| Check | Result |
|---|---|
| This specification task states it did not access/modify D16 | PASS |
| Independent candidate commit `024f171` recorded | PASS |
| Global “development not started” statement in revised payload | 0 |
| Candidate implementation treated as specification approval | 0 |
| Candidate implementation treated as release authorisation | 0 |

The external commit is recorded from the project-control return and was not independently inspected by this `D:\23MySec` task.

## Locked-contract validation

| Check | Result |
|---|---|
| Buyer-visible status word count target | 0 |
| Desktop visual rule | Bold + 3px Teal underline retained |
| Mobile visual rule | Bold + 4px Teal left marker retained |
| `aria-current="page"` | Retained with surface-scoped semantics |
| Navigation / 84px / 64px | Frozen |
| Production SVG Logo / fixed RFQ / Footer / page body | Frozen |
| New V0.5 PNG output | 0 |

## Historical evidence and hygiene

| Check | Result |
|---|---|
| V0.2/V0.3 shared board hash mismatches | 0 |
| Historical PNG overwrite/delete | 0 |
| Trailing whitespace in four revised payload files | 0 |
| Conflict markers | 0 |

## Gate

Fresh validation passed for submission, but validation is not project-control approval.

`GHC-CURRENT-TEXT-REMOVAL-PCR-01 = TARGETED_REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`

