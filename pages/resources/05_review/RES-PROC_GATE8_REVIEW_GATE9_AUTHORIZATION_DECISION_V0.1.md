# RES-PROC Gate 8 Review and Gate 9 Authorization Decision V0.1

## 0. Decision Record

| Field | Value |
|---|---|
| Page | `RES-PROC` / `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Decision date | 2026-09-06 |
| Decision source | Current user instruction: `你负责审查Gate8，直到Gate9完成。` |
| Gate 8 | External implementation remains authorized; project control owns independent review |
| Gate 9 | `USER_AUTHORIZED / READ_ONLY_QA_AND_CORRECTION_LOOP` |
| Completion condition | All contracted Gate 9 criteria, P0/P1/P2 findings and release blockers within scope are closed with fresh evidence |
| Gate 10 | Not authorized |

## 1. Authorized Review Loop

Project control is authorized and directed to:

1. track the named D16 external development task until it returns a complete Gate 8 receipt;
2. perform independent read-only review against the sealed Gate 7 package and 28 acceptance criteria;
3. return every reproducible issue to the same D16 development task with severity, evidence, expected/actual behavior and retest scope;
4. wait for corrections and repeat the full affected verification set;
5. close Gate 9 only when fresh evidence establishes that all in-scope findings and blockers are closed.

This is a continuous authorization for the same `RES-PROC` scope. Normal correction rounds do not require repeated permission, but any proposed content, URL, keyword, page-duty, architecture, brand, release or publication change remains outside the loop and must be separately presented for decision.

## 2. Review Authority

The review baseline remains:

- `RES-PROC_GATE7_MANIFEST_V0.1.md` and its five sealed payload files;
- `RES-PROC_GATE7_PROJECT_CONTROL_CLOSURE_V0.2.md`;
- the approved Gate 0/1–6 content, SEO/GEO/Schema, responsive and visual authorities listed by the current Manifest;
- the destination repository's applicable `AGENTS.md` and fresh implementation receipt.

Developer self-checks are inputs, not independent approval. Gate 9 requires project-control read-only evidence.

## 3. Boundary

This decision does not authorize D23 to edit D16 code, approve a changed page contract, deploy, publish, change DNS, write production data, add the page to RES-000 public inventory/sitemap, enable indexing or pass Gate 10. If a material blocker cannot be resolved within the approved contract, project control must stop and present the exact decision needed.

