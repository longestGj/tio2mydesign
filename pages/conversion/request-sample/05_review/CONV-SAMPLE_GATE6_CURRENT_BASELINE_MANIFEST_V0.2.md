# CONV-SAMPLE Gate 6 Current Baseline Manifest V0.2

## 0. Current Status

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Gate 5 | `APPROVED / CLOSED` |
| Gate 6 review | `CONV-SAMPLE-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 6 outcome | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | `AUTHORIZED / IN_PROGRESS` |
| Gate 8 / handoff / development | `LOCKED / NOT_AUTHORIZED` |
| Effective date | 2026-09-03 |

This is the only current Gate 6 Manifest for CONV-SAMPLE. V0.1 remains the frozen PCR-01 submission ledger; V0.2 supplies the post-review status and closure authority.

## 1. Closure Authority

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `CONV-SAMPLE_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md` | 2,797 | `4780bf68d2f6f731afb61e0d119bd8a5d356399c497a6839c8bdfab98caff1a1` | `S-G6-D01`–`S-G6-D12` pass and Gate 6 closure |
| `CONV-SAMPLE_GATE6_CURRENT_BASELINE_MANIFEST_V0.1.md` | 5,770 | `d9846198dbdc0cd6e1d15a46040615c1485188c708f811c24a7e99f2c3ad570b` | Exact PCR-01 file/hash ledger and submitted contract set |
| `CONV-SAMPLE_GATE7_USER_AUTHORIZATION_RECORD_V0.1.md` | 1,626 | `c2ab49036f17adba4d1f692e49109b59c73fc7043bafdf8c6f1e3164835dcdd6` | Prior conditional user authorization became effective after Gate 6 pass |

## 2. Approved Current Gate 6 Contracts

The following exact files are approved through the frozen V0.1 ledger:

- `CONV-SAMPLE_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md`;
- `CONV-SAMPLE_GATE6_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`;
- `CONV-SAMPLE_GATE6_FIELD_STATE_SCOPE_AND_DEPENDENCY_CONTRACT_V0.1.md`;
- `CONV-SAMPLE_GATE6_RESPONSIVE_ACCESSIBILITY_ACCEPTANCE_V0.1.md`;
- `CONV-SAMPLE_GATE6_FRESH_VALIDATION_V0.1.md`;
- `CONV-SAMPLE_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md`.

Their `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` headers are preserved as the original submission state. This post-closure Manifest and the Closure record control the current Gate 6 decision.

## 3. Frozen Gate 5 Root

Gate 5 V0.5 remains `APPROVED / CLOSED`, governed by `CONV-SAMPLE_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md`. All 16 PNG dimensions, byte counts and SHA-256 values remain unchanged. Gate 6 review did not modify buyer-visible copy, fields, composition or shared Chrome references.

## 4. Gate 7 Authorization Boundary

The user's earlier conditional authorization is now satisfied. Gate 7 may create an implementation-neutral delivery package and submit it to project control.

This is not Gate 7 approval, an actual handoff or Gate 8 authorization. Gate 7 must remain `NOT_APPROVED` until project-control disposition.

## 5. Later-stage Controls

- Gate 8: implement route, form, receiver, persistence, acknowledgement, duplicate protection, prefill and shared-component consumption.
- Gate 9: perform production-equivalent read-only QA for integration, visual/copy parity, responsive/a11y, Privacy, state behavior, metadata and isolation.
- Gate 10: require separate release, deployment, publication and indexing authorization.

Privacy Policy and receiver readiness remain later controls rather than retroactive Gate 6 blockers.

## 6. Historical Disposition

`CONV-SAMPLE_GATE6_CURRENT_BASELINE_MANIFEST_V0.1.md` is `HISTORICAL_SUBMISSION_LEDGER / SUPERSEDED_FOR_CURRENT_STATUS_BY_V0.2`. Its file/hash ledger remains authoritative for the approved PCR-01 payload.

## 7. Boundary

Gate 7 specification work is authorized. Actual handoff, Gate 8, development, testing, deployment, publication, DNS and indexing are not authorized. Do not access or modify `D:\16Wordpress_nextjs`.

