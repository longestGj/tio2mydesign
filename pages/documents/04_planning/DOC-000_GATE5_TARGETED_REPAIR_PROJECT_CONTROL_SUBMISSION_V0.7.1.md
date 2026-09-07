# DOC-000 Gate 5 Targeted Repair Project-Control Submission V0.7.1

## 0. Submission

| Field | Value |
|---|---|
| Review ID | `DOC-000-G5-MOBILE-REPAIR-01` |
| Revision | V0.7.1 |
| Page | `DOC-000` / `/documents/` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Date | 2026-09-02 |
| Gate 6/7 | `NOT_AUTHORIZED` |

## 1. Submitted revision

- Desktop 1440 full page V0.7.1 with shared Footer.
- Tablet 768 full page V0.7.1 with shared Footer.
- Full Visual Design V0.7.1.
- Visual Validation V0.7.1.
- Current Gate 5 Manifest V0.3.
- Mobile V0.7 and its proof retained byte-identically.

## 2. New P0 closure evidence

| Requirement | Evidence | Candidate result |
|---|---|---|
| Replace only Desktop/Tablet Footer | Desktop boundary 3494px; Tablet boundary 4904px | PASS |
| Preserve all body pixels | RAW SHA-256 before and after is identical at both viewports | PASS |
| Use shared Explore set | Home, Markets, Products, Applications | PASS |
| Use shared Information set | Documents, Resources, About | PASS |
| Preserve Procurement action | Request a Quote visible | PASS |
| Remove page-specific legacy links | Seven forbidden labels absent | PASS |
| No DOC-000 Footer ownership | Spec and Manifest declare shared reference only | PASS |

## 3. Previously corrected Mobile findings

The independently passed Mobile H1, FAQ and Footer repairs remain unchanged and retain their V0.7 hashes.

## 4. Requested disposition

Please review revision V0.7.1 under the same `DOC-000-G5-MOBILE-REPAIR-01` Review ID. If the shared Footer P0 and the preserved Mobile corrections pass, advance only to `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`.

The execution task does not self-approve Gate 5 and does not request Gate 6.

