# HOME-001 Gate 9 External Development Findings V0.1

## Delivery status

| Field | Value |
|---|---|
| Review ID | `HOME-001-G9-ROQA-01` |
| Delivery type | Read-only findings for external development |
| Status | `TARGETED_REVISION_REQUIRED` |
| Source authority | HOME-001 Gate 7 package + Global Chrome V0.5 + production Logo Manifest |
| Gate 10 | Not authorized |

No change is requested to approved page identity, URL, English copy, primary keyword, Schema relationships, module ownership or `site_scope=tio2-my`.

## Required fixes

### 1. Home color contrast

- Current source: `components/sites/tio2-my/homepage/malaysia-homepage.module.css`.
- Current defect: `--teal: #009D91` is used for small text and white-text CTA fills, causing one serious Axe rule across 22 nodes on Desktop/Tablet and 13 nodes on Mobile.
- Expected: `#007F77` on light surfaces/CTA fills; an independently verified light teal or white on dark blue; zero serious/critical Axe violations at 1440/1024/768/390/320.
- Do not change any buyer-facing sentence.

### 2. Mobile Products default state

- Current source: `responsive-product-groups.tsx` plus the Mobile `.productDetails:not([open]) .productGrid` rule.
- Current defect: the closed state hides all four group names and 6/5/2/1 counts.
- Expected: four groups and counts visible by default, accessible expansion path, all 14 IDs unique in expanded state, no 14-card expansion.
- Preserve M-2377, M-996/M-2196 and `NO_PUBLIC_MAPPING` boundaries.

### 3. Rendered link readiness

No rendered Home/Global Chrome anchor may return 404 or 500. Current failures are:

`/applications/`, the four Market child URLs, both Process URLs, `/request-documents/`, and `/resources/non-china-titanium-dioxide/`.

Resolve these in their owning tasks. Do not introduce cross-scope fallback. Provisional cards without an approved URL must be plain informational content, not pseudo-links with arrows.

### 4. RFQ runtime

The route returns 200 but the form is unavailable because the approved receiver configuration is absent. Configure and verify the production-equivalent receiver in the appropriate external environment. Keep fail-closed behavior until that is done.

### 5. Visual fidelity

- Bring the desktop H1 back within the approved 52–64px range and restore the approved hierarchy/teal emphasis without editing the sentence.
- Reconcile section spacing against current 1440 and 390 Buyer Clean images after the Products fix.
- Await project-control clarification before changing Tablet Start Here behavior because the Gate 7 package and Tablet evidence conflict.

### 6. Broader verification

Resolve the reproducible Site A revalidation failure, three Application/Resource relationship query failures and Product Hub asset test timeout. Re-run WordPress environment-dependent tests only in an environment with the required local `.env`; do not copy credentials into this worktree for this Home fix.

## Resubmission evidence required

1. Exact implementation commit and clean worktree.
2. Focused Home tests, typecheck, targeted lint and production build.
3. Fresh 1440/1024/768/390/320 screenshots.
4. Mobile Menu open and Products default/expanded states.
5. Axe zero serious/critical at all five widths.
6. Link crawl with no 4xx/5xx for rendered anchors.
7. RFQ production-equivalent form validation evidence.
8. Updated current implementation Manifest with hashes.

Submission returns to HOME-001 Gate 9 project control review. It does not enter Gate 10.
