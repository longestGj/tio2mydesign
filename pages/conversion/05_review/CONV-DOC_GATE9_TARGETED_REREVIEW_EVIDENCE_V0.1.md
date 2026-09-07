# CONV-DOC Gate 9 Targeted Re-review Evidence V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Review target | `DOC-G9-P1-01` |
| Target implementation | `bc695d291109a685ab85950d3b42d85d6e8ebcfa` (`fix: bind document prefill relationships`) |
| Evidence date | 2026-09-04 |
| Reviewer role | CONV-DOC page execution task; independent read-only Gate 9 re-review |
| Document status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 9 | `READ_ONLY_QA_IN_REVIEW / NOT_APPROVED` |
| Gate 10 / deployment / publication / DNS / indexing | `NOT_AUTHORIZED` |

This record does not repeat the developer's completion claim as evidence. It records a fresh inspection and fresh commands run against the actual target commit.

## 1. Authority and scope

The relationship authority is:

`pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`

SHA-256: `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`.

The companion audits remain:

- `PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`;
- `PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md`;
- `PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md`.

Their binding counts are 30 verified Application mappings, 0 conflict holds and 54 `NO_PUBLIC_MAPPING` rows. Process counts are 8 Chloride, 5 Sulfate and 1 Vapor-phase oxidation.

## 2. Actual commit and diff review

Fresh Git inspection confirmed:

- `HEAD = bc695d291109a685ab85950d3b42d85d6e8ebcfa`;
- the commit changes only six CONV-DOC files;
- `git diff --check` passes;
- the six target files have no working-tree difference from `HEAD`;
- no Header, Footer, Mobile Menu, shared component, another page, site registry or global route file is changed by this commit.

Changed files:

1. `app/api/tio2-my/request-documents/route.ts`;
2. `lib/request-documents/malaysia-request-documents-prefill.ts`;
3. `tests/e2e/request-documents.spec.ts`;
4. `tests/integration/request-documents/receiver-route.test.ts`;
5. `tests/unit/request-documents/malaysia-request-documents-prefill.test.ts`;
6. `docs/verification/conv-doc/CONV-DOC_DOC-G9-P1-01_VERIFICATION_2026-09-04.md`.

The implementation now treats Grade, Application/Process and specific source attribution as one relationship. Unsupported URL context is discarded. A mismatched specific source discards its Grade/context prefill group. The receiver repeats source validation after the buyer edits the visible values; it retains buyer-entered text while omitting invalidated attribution.

## 3. PRODUCT V0.3 code-to-authority comparison

The 14 Grade maps in the implementation were compared row by row with the CSV. They match the 30 public relationships and 14 process classifications:

| Grade | Allowed Application URL contexts | Allowed Process URL context |
|---|---|---|
| M-350 | Coatings; Plastics; Printing Inks; Paper | Chloride |
| M-510 | Coatings; Plastics; Masterbatch; Printing Inks | Chloride |
| M-896 | Coatings | Chloride |
| M-996 | Coatings | Sulfate |
| M-2196 | Coatings | Sulfate |
| M-895 | Coatings | Chloride |
| M-200 | Plastics; Masterbatch | Chloride |
| M-108 | Plastics; Masterbatch | Sulfate |
| M-210 | Plastics; Masterbatch | Chloride |
| M-340 | Plastics; Masterbatch | Chloride |
| M-886 | Plastics; Masterbatch | Chloride |
| M-52 | Coatings; Printing Inks | Sulfate |
| M-2377 | Coatings; Plastics; Masterbatch; Printing Inks; Paper | Sulfate |
| CR-901 | Specialty Materials | Vapor-phase oxidation |

`NO_PUBLIC_MAPPING` remains a do-not-render state, not a statement of unsuitability. M-2377 Specialty Materials is discarded; Rubber is not in the allowlist and is discarded. No comparison, preference, equivalence or substitute claim for M-996/M-2196 is introduced.

Specific source binding is exact:

- `GRADE-*` must match its Grade;
- `APP-COAT`, `APP-PLAS`, `APP-MB`, `APP-INK` and `APP-PAPER` must match their visible Application context;
- `PRODUCT-PROC-CL` and `PRODUCT-PROC-SU` must match Chloride and Sulfate respectively;
- the visible Grade–Application/Process pair must itself be allowed by PRODUCT V0.3.

## 4. Fresh automated verification

### 4.1 Focused relationship and receiver suite

Command:

`pnpm exec vitest run tests/unit/request-documents/malaysia-request-documents-prefill.test.ts tests/integration/request-documents/receiver-route.test.ts --reporter=verbose`

Result: `2 files / 61 tests PASS`, exit code 0.

The named passing cases include:

- all six M-2377 positive contexts: Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate;
- M-2377 negative contexts: Specialty Materials, Rubber and arbitrary `Unapproved Application`;
- mismatched `GRADE-M2377` with M-350 + Coatings;
- exact APP source bindings for all five approved Application sources;
- exact Process source bindings for Chloride and Sulfate;
- every approved Application/Process relation for all 14 Grades;
- representative `NO_PUBLIC_MAPPING` rejection for every Grade;
- receiver-side preservation of submitted Grade/text and removal of mismatched source attribution;
- site-scope rejection outside the active Malaysia deployment.

### 4.2 Complete CONV-DOC unit/integration/infrastructure suite

Command:

`pnpm exec vitest run tests/unit/request-documents tests/integration/request-documents tests/infrastructure/tio2-my-request-documents-wordpress.test.ts`

Result: `11 files / 97 tests PASS`, exit code 0.

### 4.3 ESLint and typecheck

Changed-file ESLint: PASS, exit code 0.

Clean target-commit snapshot typecheck:

`pnpm typecheck`

Result: PASS, exit code 0.

The live D16 worktree had concurrent, uncommitted Request a Sample changes. Its whole-tree typecheck failed only in those out-of-scope dirty test files. To avoid overwriting them, the authoritative typecheck and build were run from a D23 archive of exact commit `bc695d2`. No CONV-DOC target file differed from the commit.

### 4.4 Optimized production build

Environment:

- `SITE_ID=tio2-my`;
- `NEXT_PUBLIC_SITE_ID=tio2-my`;
- `NEXT_DIST_DIR=.next-tio2-my`;
- `VERCEL_ENV=preview`;
- scoped WordPress GraphQL fixture.

Result: PASS, exit code 0. Next.js compiled successfully, TypeScript finished and 35/35 static pages were generated. `/request-documents` and `/api/tio2-my/request-documents` were present in the route manifest.

The first isolated build attempt used a `node_modules` directory junction and Turbopack rejected that junction as outside the filesystem root. Dependencies were then copied locally into the D23 review snapshot and the full build was rerun successfully. No product conclusion is based on the failed harness arrangement.

## 5. Fresh production-browser verification

The exact target commit's optimized build was started with the scoped CONV-DOC CMS fixture. Full Playwright result:

`15 tests PASS`, exit code 0.

This includes:

- 1440px, 768px and 390px runtime/Global Chrome/visual contract;
- 320, 375, 430, 1024 and 1280 overflow and control checks;
- validation, failure retention, retry token and explicit receipt-only success;
- editable, canonical-clean and market-safe query prefill;
- all six M-2377 positive contexts;
- Specialty Materials, Rubber, arbitrary value and Grade-source mismatch negative cases;
- 254/500-character content and 501-character validation behavior.

### 5.1 Manual buyer free-text through the real receiver path

A separate browser run did not intercept the same-origin API. It used a local positive-acknowledgement receiver and submitted:

`Buyer-specific coating line qualification context — manual free text.`

Observed receiver payload and UI result:

- `application_industry` retained the exact buyer text;
- `product_grade = M-2377` retained;
- `site_scope = tio2-my`, `page_id = CONV-DOC`, `workflow = request_documents`;
- `source_page_id` omitted after the manual edit invalidated the original Grade-page attribution context;
- same-origin API returned `200 {"ok":true,"kind":"receipt_confirmed"}`;
- UI displayed `Document Request Received`.

This proves that trusted URL prefill is restricted while ordinary buyer entry is not converted into a taxonomy allowlist.

The initial local run used a noncanonical IP hostname arrangement and the strict origin guard returned 403. The authoritative rerun used one self-consistent `localhost` origin and passed through the real same-origin API and receiver. The failed harness run is not counted as product evidence.

## 6. Regression and workspace boundaries

| Check | Result |
|---|---|
| Existing five Document Types / 14 Grades / eight fields | PASS in 97-test suite and browser suite |
| Shared Header/Footer/Mobile Menu | No commit diff; 1440/768/390 browser contract PASS |
| RFQ permanence | Browser contract PASS |
| `site_scope=tio2-my` | Route and receiver tests PASS; real receiver payload confirmed |
| Cross-scope rejection | Integration test PASS |
| Validation/focus/failure/retry/success | Browser suite PASS |
| Long content and overflow | Browser suite PASS |
| Existing pages and routes | Commit scope excludes them; optimized build 35/35 PASS |

The D16 worktree contained 18 concurrent Request a Sample paths at the final status read. They were preserved without modification. All six CONV-DOC target files remained identical to `HEAD`.

All temporary local listeners on ports 3004, 3100 and 3200 were stopped after verification.

## 7. Re-review conclusion

Fresh evidence supports:

`DOC-G9-P1-01 = VERIFIED_FIXED_PENDING_PROJECT_CONTROL_REVIEW`.

No new CONV-DOC P0/P1 defect was found in this targeted scope. This is a page-task recommendation, not project-control closure.

Gate 9 remains `READ_ONLY_QA_IN_REVIEW / NOT_APPROVED` until project control issues its decision.

The following release blockers remain open and unchanged:

1. production receiver ownership/configuration and positive acknowledgement;
2. Privacy/data-flow parity with the actual receiver;
3. authorized WordPress singleton migration;
4. separate Gate 10 production release, robots, sitemap and indexing authorization.

