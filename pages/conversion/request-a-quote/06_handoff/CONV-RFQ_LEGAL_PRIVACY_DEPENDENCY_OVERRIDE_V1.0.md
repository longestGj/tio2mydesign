# CONV-RFQ Legal / Privacy Dependency Override V1.0

## 0. Control

| Field | Value |
|---|---|
| Date | 2026-09-02 |
| Status | `USER_APPROVED_EXTERNAL_DEPENDENCY_OVERRIDE / ACTIVE` |
| Scope | Legal/Privacy dependencies consumed by CONV-RFQ only |
| Page/content effect | No RFQ field, copy, SEO, visual or receiver change |
| Development authority | None from this record |

This addendum preserves frozen/historical RFQ packages and overrides only their stale cross-page legal dependencies.

## 1. Current dependency contract

CONV-RFQ must consume and verify:

- English Privacy Policy: `/privacy-policy/`;
- Cookie Policy: `/cookie-policy/` through the shared Footer;
- Cookie Settings: shared Footer button reopening the Consent Manager;
- shared Advanced Consent signal for consent-gated analytics events.

The following are not dependencies:

- `Terms of Use` or `/terms-of-use/`;
- `/legal/privacy-policy/`;
- an RFQ-owned copy of any Legal/Privacy page or Consent Manager.

## 2. External implementation correction

The inspected D16 worktree contains `/legal/privacy-policy/` in RFQ unit/integration fixtures. The user confirmed that this is an old development placeholder. A separately authorised D16 correction must replace it with `/privacy-policy/` in environment fixtures and affected tests. No redirect or legacy route is required because the placeholder was not released.

## 3. Gate 8/9 acceptance

- RFQ Privacy label links to `/privacy-policy/`.
- The link is present only when the approved route is ready; no fabricated alternate path.
- Footer contains Privacy EN, Privacy BM, Cookie Policy and Cookie Settings, with no Terms link.
- RFQ analytics remains silent without same-scope Analytics consent.
- Form values and validation errors are not pushed to analytics.
- A stale `/legal/privacy-policy/` or `/terms-of-use/` reference is a blocking failure.

This record does not modify the existing D16 worktree, authorise Gate 8 changes, deployment, publication or indexing.
