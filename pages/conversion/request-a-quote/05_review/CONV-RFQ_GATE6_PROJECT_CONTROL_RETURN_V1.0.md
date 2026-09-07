# CONV-RFQ Gate 6 Project-control Return V1.0

## 0. Decision

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review | `CONV-RFQ-G6-PCR-01` |
| Date | 2026-09-01 |
| Decision | `CONDITIONAL_RETURN / NOT_APPROVED` |
| Targeted re-review | `CONV-RFQ-G6-PCR-02` |
| Gate 5 | `USER_APPROVED / CLOSED`; not reopened |
| Gate 7 / development | `LOCKED / NOT_AUTHORIZED` |

## 1. Sole P0 return

`P0-01_COMPLETE_SITE_SIBLING_ROUTES`

The approved Gate 5 final-reader page contains two low-weight sibling links:

- `Request a Sample` → `/request-sample/`;
- `Request Documents` → `/request-documents/`.

Under the complete-site principle these are required final-system routes/links. Gate 6 must not classify them as conditional renderers or permit a not-ready route to hide, disable or relink either entry to Contact.

## 2. Required PCR-02 revision

- Mark both route references and links as final-system required.
- Move missing route readiness to Gate 8 implementation plus Gate 9/release blocker classification.
- Require both routes/links to work before complete-site release.
- Require user-approved page change control before either approved entry may be removed.

## 3. Preserved pass areas

G6-D01–D05 and G6-D07–D10 have no new issue. G6-D06 remains open only for this complete-site dependency classification.

## 4. Boundary

PCR-01 remains not approved. PCR-02 is a targeted governance revision only; it does not change Gate 5 visuals, copy, CTA labels or route destinations and does not authorize Gate 7 or development.

