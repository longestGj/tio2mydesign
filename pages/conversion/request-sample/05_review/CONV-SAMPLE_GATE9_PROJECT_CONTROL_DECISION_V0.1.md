# CONV-SAMPLE Gate 9 Project Control Decision V0.1

## Document Control

| Field | Value |
|---|---|
| Page ID | `CONV-SAMPLE` |
| Page | Request a Sample |
| URL | `/request-sample/` |
| Decision date | `2026-09-04` |
| Review authority | Project Control |
| Review ID | `CONV-SAMPLE-G9-PCR-01` |
| Target implementation | `49289d40fdb0b91d28f534776464403883d912ff` |
| Gate 9 outcome | `READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS` |
| Gate 10 | `NOT_AUTHORIZED` |

## Decision

Project Control accepts the targeted Gate 9 re-review and closes all four returned implementation findings:

- `SAMPLE-G9-P1-01 = VERIFIED_FIXED / CLOSED`;
- `SAMPLE-G9-P1-02 = VERIFIED_FIXED / CLOSED`;
- `SAMPLE-G9-P2-01 = VERIFIED_FIXED / CLOSED`;
- `SAMPLE-G9-P2-02 = VERIFIED_FIXED / CLOSED`.

The accepted implementation:

1. renders the approved unavailable panel on the initial response when receiver readiness is known to be absent, without exposing a usable form, prefill controls, submit action, URL, token, or other receiver secret;
2. keeps the actual Privacy Policy anchor target at least `44 × 44` logical pixels at the reviewed responsive widths;
3. uses accessible FAQ disclosure buttons with accurate `aria-expanded`, linked panels, keyboard operation, focus retention, and answers present in initial server-rendered HTML;
4. exposes form-level `aria-busy=true` only while a receiver request is in flight while preserving duplicate protection, retained input, and same-token retry.

## Verification basis

Fresh Project Control verification on 2026-09-04 produced:

- CONV-SAMPLE regression/isolation suite: `13 files / 133 tests passed`, exit code `0`;
- TypeScript: exit code `0`;
- direct review of commit `49289d40fdb0b91d28f534776464403883d912ff` and its scoped code/test changes;
- visual inspection of the refreshed Desktop `1440px`, Mobile `390px`, and initial-unavailable `390px` evidence.

The independent page-task re-review additionally recorded a successful scoped production build, ESLint with zero errors/warnings, clean commit/worktree integrity, and a dual-server production-browser run with `86 assertions / 0 failures`. No new P0, P1, or P2 finding was reported.

## Release controls retained

The following remain mandatory release controls and are not waived by Gate 9 approval:

1. verified production receiver URL/token ownership, durable persistence, receiver-side deduplication, and positive acknowledgement;
2. authorized target WordPress singleton/seed application and scope verification;
3. Legal/Privacy confirmation that the production data flow, Privacy Policy, and consent/CMP behavior match the implemented site;
4. complete-site readiness for shared RFQ, upstream pages, Global Chrome, and legal dependencies;
5. separate user authorization for Gate 10, deployment, publication, DNS, production writes, sitemap admission, and indexing.

This decision does not authorize Gate 10 or any production action.
