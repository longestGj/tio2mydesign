# CONV-SAMPLE Gate 9 User Authorization Record V0.1

## 0. Decision

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Authorization date | 2026-09-04 |
| User decision | `GATE_9_AUTHORIZED` |
| Gate 8 | `IMPLEMENTED / DEVELOPMENT_COMPLETE_PENDING_GATE_9_AUTHORIZATION` at authorization intake |
| Page lifecycle | `HANDED_OFF` |
| Gate 9 | `AUTHORIZED / READ_ONLY_QA_IN_PROGRESS` |
| Gate 10 / release | `LOCKED / NOT_AUTHORIZED` |
| Decision source | User's explicit Gate 9 authorization in project-control task `01a04b7e-5fed-7171-ae92-e946cfd7bdae` |

## 1. Authorized Scope

Gate 9 may perform strict read-only QA against:

1. the approved CONV-SAMPLE Gate 7 authority and Package `CONV-SAMPLE-G7-HANDOFF-01`;
2. `CONV-SAMPLE_GATE8_EXTERNAL_DEVELOPMENT_COMPLETION_RECORD_V0.1.md`;
3. the returned production-equivalent implementation in `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my`;
4. read-only tests, lint, typecheck, build and browser/runtime inspection needed to collect evidence.

Required QA coverage includes identity/URL, approved copy and fields, Grade/Application/Product boundaries, prefill, client/server validation, failure/retry/idempotency/success, Privacy/Consent, shared Chrome, responsive/accessibility, SEO/canonical/robots/Schema, `site_scope=tio2-my`, cross-scope isolation and production dependencies.

## 2. Prohibited Scope

This authorization does not permit:

- any D16 code, test, configuration, content, database or generated-source modification;
- implementation of a fix discovered during QA;
- Gate 9 self-approval or project-control closure;
- Gate 10, deployment, publication, DNS, production writes or indexing activation;
- production receiver, WordPress migration or shared-dependency changes.

Any finding must be reported with severity, path, observable evidence and required correction. Gate 9 remains unapproved until project-control review.

## 3. Required Output

- formal Gate 9 project-control review submission;
- evidence inventory and executed-command results;
- P0/P1/P2 findings, or an explicit no-finding result supported by evidence;
- retained production/release blockers;
- current Gate 9 Manifest with hashes;
- status `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

