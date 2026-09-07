# CONV-DOC Gate 9 Findings and Release Blockers V0.1

## 0. Review result

| Severity | Count |
|---|---:|
| P0 | 0 |
| P1 | 1 |
| P2 | 0 |

`Gate 9 = READ_ONLY_QA_IN_REVIEW / NOT_APPROVED`

`Submission = DRAFT_FOR_PROJECT_CONTROL_REVIEW`

## 1. `DOC-G9-P1-01` — application prefill is not bound to approved product/application/source relationships

**Severity:** P1 — blocking content, relationship and prefill-integrity defect.

**Paths:**

- `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/lib/request-documents/malaysia-request-documents-prefill.ts:53`
- `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/lib/request-documents/malaysia-request-documents-prefill.ts:61`
- `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/lib/request-documents/malaysia-request-documents-prefill.ts:64`
- missing negative coverage in `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/tests/unit/request-documents/malaysia-request-documents-prefill.test.ts`

**Verified behavior:**

The optimized local page accepts any safe string of up to 160 Unicode code points as `application_industry`. The product Grade, application text and source Page ID are checked independently, not as one approved relationship. Consequently:

- M-2377 + `Specialty Materials` renders the frozen term in the buyer-visible prefill card;
- M-2377 + `Rubber` renders a term that is evidence-registration-only and must not become a category, page, URL or keyword;
- arbitrary text such as `Unapproved Application` renders as context said to come from a previous selection or supported link;
- an allowlisted but mismatched Grade source Page ID can remain attached to a different visible Grade/context combination.

**Why this blocks Gate 9:**

Gate 7 allows only supported visible editable prefill and requires stale/unsupported values to be discarded. PRODUCT V0.3 allows M-2377 neutral context only for Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate; Specialty Materials remains `DO_NOT_RENDER`; Rubber remains evidence registration only. A syntactically safe query is not evidence that the product/application/source relationship is approved.

**Required correction:**

1. Keep the buyer-entered optional Application / Industry field free text, but separate it from trusted upstream prefill.
2. Normalize query prefill through the current approved product—application/process relation authority, not a generic safe-string function.
3. For M-2377, accept only neutral Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate context; discard Specialty Materials, Rubber and other unsupported values.
4. Apply the same verified relation rule to other Grades; retain `NO_PUBLIC_MAPPING` as unknown/no-public mapping, never as not applicable.
5. Bind `source_page_id` coherently to the visible Grade/application context or discard it before rendering and forwarding.
6. Add unit and production-browser negative cases for Specialty Materials, Rubber, arbitrary safe strings and mismatched Grade source attribution, plus positive cases for all six allowed M-2377 contexts.

**Retest requirement:**

The prohibited URLs must leave Application / Industry blank and must not render a prefill card for that value; allowed values must remain editable/removable and must not imply document availability, approval or applicability.

## 2. Open release blockers preserved

| ID | Blocker | Current evidence | Closure owner / requirement |
|---|---|---|---|
| `DOC-G9-RB-01` | Production receiver | No verified production owner, endpoint, token, retention/persistence or positive acknowledgement contract; unconfigured API returns 503 | CONV-DOC business/implementation owner must supply and verify the production receiver without exposing secrets |
| `DOC-G9-RB-02` | Privacy/data-flow parity | Final processor, retention and transfer facts depend on the receiver | Legal/Privacy owner must approve actual data-flow parity before release |
| `DOC-G9-RB-03` | WordPress singleton migration | Full local WordPress returns a missing-record GraphQL error and `/request-documents/` 500; scoped stub returns the reviewed page | Authorized WordPress migration must install the approved singleton/plugin update in the target environment and prove exact scope/contract identity |
| `DOC-G9-RB-04` | Indexing and production release | Robots currently `noindex,nofollow`; sitemap/release controls remain closed | Separate Gate 10 user authorization and final production checks are required |

None of these blockers may be bypassed through Contact, email, telephone, another workflow, another `site_scope`, a local Chrome fork, public download, or a false success response.

## 3. Gate disposition

The one P1 finding and all four release blockers remain open. Therefore:

- `READ_ONLY_QA_APPROVED = NO`;
- `PROJECT_CONTROL_REVIEW_PASS = NO`;
- `CLOSED = NO`;
- `PUBLISHED = NO`;
- `INDEXED = NO`.

This task makes no implementation correction. Development must return a new verifiable result after `DOC-G9-P1-01` is resolved; project control then decides whether Gate 9 re-review may proceed.

