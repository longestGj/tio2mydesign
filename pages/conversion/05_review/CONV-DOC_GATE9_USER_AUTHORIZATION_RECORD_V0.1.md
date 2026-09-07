# CONV-DOC Gate 9 User Authorization Record V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Authorization date | 2026-09-04 |
| Decision source | User authorization recorded in the project-control task `01a04b7e-5fed-7171-ae92-e946cfd7bdae` |
| Approved Gate 7 authority | `CONV-DOC-G7-HANDOFF-01` |
| Gate 8 completion authority | `CONV-DOC_GATE8_DEVELOPMENT_COMPLETION_RECORD_V0.1.md` |
| Reviewed implementation | `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my` on branch `codex/home-001-tio2-my`, commits `985beab` and `a7d2cc4` |
| Page lifecycle | `READ_ONLY_QA_IN_REVIEW` |
| Gate 9 | `AUTHORIZED / READ_ONLY_QA_IN_PROGRESS` |
| Required output state | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

## 1. Authorized scope

The user authorizes a strict read-only Gate 9 quality review of the returned CONV-DOC implementation against the approved Gate 7 authority and Gate 8 completion record. The review may read implementation files and run non-mutating verification commands, including tests, lint, typecheck, build and browser checks, solely to collect evidence.

The authorized review covers:

- page identity, `/request-documents/` and `site_scope=tio2-my` isolation;
- approved visible copy, five Document Types, 14 Grade options, eight fields and controlled prefill;
- client/server validation, error summary, value retention, real retry, stable logical token and duplicate prevention;
- receipt-only success, failure behavior, Privacy/Consent handling and data minimization;
- shared Header, Mobile Menu and Footer, including permanent RFQ behavior;
- 1440px, 768px and 390px visual fidelity, keyboard/focus behavior, 44px targets and overflow;
- SEO, canonical, robots, Schema-visible-content parity and cross-scope fallback protections;
- receiver, production migration, Privacy/data-flow, indexing and release dependencies.

## 2. Explicit exclusions

This authorization does not permit:

- editing any code, test, configuration, CMS content or runtime state in `D:/16Wordpress_nextjs`;
- correcting defects discovered during review;
- production writes, receiver configuration, WordPress migration, deployment or publication;
- DNS/domain changes, sitemap release, robots/indexing activation or search submission;
- Gate 10 authorization or any claim that the page is published;
- self-approval, `PROJECT_CONTROL_REVIEW_PASS`, `CLOSED` or `READ_ONLY_QA_APPROVED`.

Any P0, P1 or P2 finding keeps Gate 9 unapproved and must be returned with an exact path, reproducible observation and required correction. If no defect is found, the maximum permitted result remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW` pending independent project-control review.

## 3. Current status

`Page lifecycle = READ_ONLY_QA_IN_REVIEW`

`Gate 9 = AUTHORIZED / READ_ONLY_QA_IN_PROGRESS`

`Gate 9 approval = NOT_GRANTED`

`Gate 10 / DEPLOYMENT / PRODUCTION WRITE / PUBLISHED / INDEXED = NOT_AUTHORIZED / NO`
