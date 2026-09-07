# DOC-TDS Gate 8 User Authorization and Handoff Record V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Date | 2026-09-05 |
| Gate 7 | `DOC-TDS-G7-HANDOFF-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| User decision | Exact current-turn instruction: `授权执行Gate8` |
| Authorization scope | DOC-TDS Gate 8 external implementation and implementation verification only |
| Page lifecycle | `HANDED_OFF` |
| Gate 8 | `AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS` |
| Handoff destination | `01My首页开发` |
| Destination task/thread | `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| Host / project | `local` / D16 development project |
| Dispatch result | Message accepted by destination task; destination task entered `active` state |
| Intake audit | `IN_PROGRESS / EXPLICIT_REPORT_PENDING` |
| D23 implementation | `PROHIBITED / NOT_PERFORMED` |
| Gate 9 | `NOT_AUTHORIZED / WAITING_FOR_PRODUCTION_EQUIVALENT_RESULT` |
| Gate 10 | `NOT_AUTHORIZED` |

The user explicitly authorized Gate 8. Project control sent the complete approved Gate 7 package to the existing D16 development task `01My首页开发` on 2026-09-05. The destination accepted the dispatch and entered an active turn. An explicit branch/worktree intake report remains pending and must be returned by that task; this open intake evidence does not revoke the user's Gate 8 authorization.

## 1. Handed-off authority

| Artifact | Bytes | SHA-256 | Authority role |
|---|---:|---|---|
| `../06_handoff/DOC-TDS_CURRENT_GATE7_BASELINE_MANIFEST_V0.1.md` | 7,046 | `0EBC11890FA111024A0EB9A3E91C752DFBBA128EA1D9A18DB784CD939B456727` | Sole approved Gate 7 baseline and consumption order |
| `../06_handoff/DOC-TDS_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md` | 6,359 | `D6037D987F225C55801B695340BA3C4CF612E16D9AD3A108FE6FB85084D0B196` | Package root and implementation boundary |
| `../06_handoff/DOC-TDS_GATE7_SOURCE_PAYLOAD_V0.1.json` | 13,351 | `85629FD74FCCE082FDCE7374DDC7A9E6570DC93DB46B1E0871BC194B20E387EA` | Exact content, option and route payload |
| `../06_handoff/DOC-TDS_GATE7_CONTENT_COMPONENT_MAPPING_V0.1.md` | 6,530 | `69A61289931EA8DE8E1F0A0E4A719E5148BC9C4CEF89847E5FD5CF1FE843A818` | Content/component rendering contract |
| `../06_handoff/DOC-TDS_GATE7_ROUTE_PREFILL_STATE_CONTRACT_V0.1.md` | 6,638 | `B256156E833C1658CA1333243E82CB31A2D8713E857D28EEBCE767F09779513E` | Route, prefill, source and failure-state contract |
| `../06_handoff/DOC-TDS_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md` | 4,896 | `C4C4C140D55DB778336FFBC450040DD554947650B941CC7AA53297D460F7CE7F` | Search and machine-readable contract |
| `../06_handoff/DOC-TDS_GATE7_RESPONSIVE_ACCESSIBILITY_INTERACTION_ACCEPTANCE_V0.1.md` | 5,081 | `98A27999F7A7FA72ECDEE47BF6C3647C2BEFA04303A784C48FEA51E6C79073F9` | Responsive, accessibility and interaction acceptance |
| `../06_handoff/DOC-TDS_GATE7_SITE_SCOPE_SHARED_DEPENDENCY_CONTRACT_V0.1.md` | 4,982 | `493E3E76D9235D48FF633DFA2FE832B97A4EDC8497FBFC1D4DD228C1A7BAE005` | Site isolation and shared-owner contract |
| `../06_handoff/DOC-TDS_GATE7_GATE8_IMPLEMENTATION_GATE9_ACCEPTANCE_V0.1.md` | 8,298 | `9E86252BD61E4A360736C2FB150291C8D31C9F926AEA906C5AACE2C4C9286D97` | Gate 8 work packages and future Gate 9 evidence matrix |

These files are read-only approved inputs for Gate 8. The development task may implement them in D16 but may not modify or supersede the D23 authority set.

## 2. Authorized external implementation scope

The destination task may implement and test:

- DOC-TDS at `/documents/tds-sds-coa/` under exactly `site_scope=tio2-my`;
- the approved ten-module Buyer Clean V0.3 content and Gate 5 visual composition;
- the three document choices and zero-or-one Grade prefill transport into CONV-DOC;
- synchronized Hero, Grade-panel and final primary action state;
- internal, hidden and non-editable `source_context.page_id=DOC-TDS` attribution;
- fail-closed suppression when `/request-documents/` is unavailable;
- exact SEO, GEO, Canonical and `WebPage + BreadcrumbList` Schema behavior;
- shared Global Chrome, Production Logo, Legal/Cookie dependencies without page-local forks;
- nine-width responsive, keyboard, focus, zoom and no-overflow behavior;
- automated and browser evidence required by the Gate 8/Gate 9 acceptance matrix.

## 3. Non-negotiable implementation boundaries

- No cross-`site_scope` content, route, cache, menu, SEO, media, Schema or form fallback.
- No Contact, RFQ, email, phone or alternate-scope fallback for an unavailable document-request route.
- No public file inventory, filename, preview, download, currentness, availability, compliance, origin or delivery claim.
- No unapproved `FAQPage`, `Product`, `Offer`, `DigitalDocument`, action or file-availability Schema.
- No change to the approved page identity, URL, primary keyword, module order, Buyer Clean, Grade cardinality or document-type values.
- No deployment, production write, DNS, publication, sitemap activation, robots activation or indexing.

## 4. Required development return

Gate 8 is not complete until the destination task returns a production-equivalent result containing:

1. exact implementation commit SHA and clean/declared worktree state;
2. complete modified-file list and architecture decisions;
3. WordPress/Next.js content and route wiring evidence;
4. relevant automated tests, lint, typecheck and production-equivalent build results;
5. nine-width and required-state browser evidence;
6. exact content/hash, SEO/GEO/Schema and shared-owner parity;
7. route/prefill/empty/invalid/duplicate/unsupported/fail-closed tests;
8. `site_scope=tio2-my` positive and cross-scope-negative checks;
9. accessibility evidence and all remaining blockers.

## 5. Stage boundary

This record changes only the Gate 8 authorization, handoff and lifecycle fields:

- Gate 7 remains `PROJECT_CONTROL_REVIEW_PASS / CLOSED`.
- Lifecycle is now `HANDED_OFF`.
- Gate 8 is `AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`.
- Gate 9 remains `NOT_AUTHORIZED / WAITING_FOR_PRODUCTION_EQUIVALENT_RESULT`.
- Gate 10 and every release operation remain `NOT_AUTHORIZED`.

D23 did not access or modify the D16 filesystem. Development execution and progress belong to the destination task.
