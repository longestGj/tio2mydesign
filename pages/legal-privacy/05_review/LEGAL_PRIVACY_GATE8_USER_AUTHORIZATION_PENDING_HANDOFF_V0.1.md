# Legal / Privacy Gate 8 User Authorization — Pending Handoff V0.1

## 0. Control

| Field | Value |
|---|---|
| Record ID | `LEGAL-PRIVACY-G8-USER-AUTH-01` |
| Date | 2026-09-02 |
| User instruction | `授权gate8` |
| Gate 8 | `USER_AUTHORIZED / HANDOFF_PENDING_DESTINATION / NOT_STARTED` |
| Gate 7 input | `LEGAL-PRIVACY-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Lifecycle | `APPROVED_FOR_HANDOFF` |
| Handoff | `HANDED_OFF=NO` |
| Gate 9–10 | `NOT_AUTHORIZED` |

## 1. Authorized implementation scope

Gate 8 authorization permits a separately identified `D:\16Wordpress_nextjs` development task to implement the approved Gate 7 package for:

- `LEGAL-PRIV-EN` at `/privacy-policy/`;
- `LEGAL-PRIV-MS` at `/ms/privacy-policy/`;
- `LEGAL-COOKIE-EN` at `/cookie-policy/`;
- `SHARED-CONSENT-TIO2-MY`, including Cookie Settings and the approved Advanced Consent behavior.

The development task must consume `LEGAL_PRIVACY_GATE7_HANDOFF_MANIFEST_V0.1.md`, obey its hashes and later-stage blockers, and operate under the development repository's own `AGENTS.md` and Gate 8 controls.

## 2. Pending destination decision

The user authorized Gate 8 but did not specify the receiving development task. The existing candidate discovered read-only in Codex is:

| Field | Candidate |
|---|---|
| Task title | `01My首页开发` |
| Task ID | `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| Host | `local` |
| Observed status | `idle` |
| Observed workspace | `C:\Users\longe\.codex\worktrees\bfe8\16Wordpress_nextjs` |

No message will be sent and no implementation will start until the user confirms this destination or names another existing development task.

## 3. Excluded authority

This authorization does not authorize Project Control in `D:\23MySec` to modify code, tests, CMS, branches, credentials, deployment or production. It does not authorize Gate 9, Gate 10, publication, DNS or indexing.

