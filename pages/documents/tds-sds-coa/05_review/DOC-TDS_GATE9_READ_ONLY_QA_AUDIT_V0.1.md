# DOC-TDS Gate 9 Read-Only QA Audit V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / route | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Date | 2026-09-05 |
| Gate 7 package | `DOC-TDS-G7-HANDOFF-01` |
| Submitted commit | `8968fc0657d3e6e355c98e6bcf0e98a1601ec814` |
| Review mode | D23 project-control read-only QA; no D16 implementation changes |
| Gate 9 result | `FAIL / RETURN_TO_DEVELOPMENT_REQUIRED` |
| Findings | `P0=1 / P1=2 / REQUIRED_P2=1` |
| Gate 10 | `NOT_AUTHORIZED` |

## 1. Independent verification that passed

| Check | Fresh result |
|---|---|
| D23/D16 exact source payload | Same SHA-256 and byte-for-byte identical |
| Focused Vitest | `14 files / 139 tests PASS` |
| Changed-file ESLint | PASS / no output |
| TypeScript | `tsc --noEmit` PASS |
| Malaysia preview build | PASS; `/documents/tds-sds-coa` included |
| Commit/worktree integrity | commit exists; `git show --check` PASS; worktree clean after QA |
| Runtime identity | HTTP 200; `DOC-TDS`; exact ten module IDs; exact H1 |
| SEO/Schema | query-free Canonical; `noindex, nofollow`; exactly `WebPage + BreadcrumbList` |
| Eligible-state responsive | nine widths PASS; no horizontal overflow |
| Axe | zero violations at 1440/768/390 |
| Primary-action synchronization | three identical URLs in neutral and SDS+COA+M-2196 states |
| CONV-DOC prefill | M-2196, SDS and COA visibly prefilled and editable; no visible source field |
| Real runtime fail-closed | WordPress reports all four dependencies false; page-level request/related actions=0; Contact fallback=0; shared RFQ remains owner-controlled |
| Evidence-copy visible DOM scan | no `INTERNAL REVIEW`, `PENDING COPY`, `RELEASE BLOCKER`, availability-now or Malaysia-origin claim in visible copy |

Fresh QA scripts and screenshots are under `D:\23MySec\99_workspace\DOC-TDS\gate9\`. Temporary QA servers were stopped, and the D16 worktree was restored to a clean state after Next.js added transient TypeScript include entries.

## 2. Blocking findings

### `DOC-TDS-G9-P0-01` — Internal governance and evidence controls leak into public RSC source

**Severity:** P0 / release blocker
**State:** `OPEN / RETURN_TO_DEVELOPMENT`

The server route passes the complete `MalaysiaDocumentTdsDto` into a `'use client'` page component. Next.js therefore serializes fields that the buyer-facing component never renders visually. A fresh request to the real local runtime exposed all of the following in public HTML/RSC source:

- `PROVISIONAL_URL`;
- `FACT_EVIDENCE_REQUIRED`;
- `direct_downloads`;
- `grade_document_availability_matrix`;
- `buyer_visible_internal_terms`;
- `guaranteed delivery` from the internal prohibited-claim list.

This violates `G8-TDS-10`, the Buyer Clean internal-status boundary and the Gate 9 Evidence Safety rule, whose failure disposition is P0. The fix must ensure that only a buyer-safe render DTO is serialized to the client, or isolate only the minimum interactive state in a Client Component. A regression test must inspect full server HTML/RSC output and fail on all internal control keys and values.

### `DOC-TDS-G9-P1-01` — Browser Back restores form controls but not synchronized request state

**Severity:** P1 / blocking interaction defect
**State:** `OPEN / RETURN_TO_DEVELOPMENT`

Fresh reproduction:

1. select SDS and COA;
2. select `M-2196`;
3. confirm all three actions carry the exact populated URL;
4. open Request Documents;
5. use browser Back.

After Back, the browser-restored controls remained checked/selected (`SDS=true`, `COA=true`, Grade=`M-2196`), but React state returned to empty: summary=`No request context selected yet.` and all three actions reverted to `/request-documents/`. This is an incoherent state and directly fails the approved “Back/Forward restores coherent state” case.

The implementation initializes `types=[]` and `grade=''` without reconciling browser history/form restoration. The repair must establish one canonical state after `pageshow`/history restoration and add a Back/Forward regression test that asserts controls, summary and all three URLs remain mutually consistent.

### `DOC-TDS-G9-P1-02` — Approved Gate 5 visual baseline was not reproduced

**Severity:** P1 / blocking visual-fidelity defect
**State:** `OPEN / RETURN_TO_DEVELOPMENT`

The implemented screenshots are internally consistent and responsive, but they visibly redesign the approved Gate 5 composition instead of reproducing it:

- the required Desktop two-column Hero and right-side three-document decision key are absent;
- the approved Deep Navy Direct Answer composition and final CTA composition are changed;
- the implementation explicitly overrides the approved Inter typeface with Arial;
- approved tokens are replaced (`#062B5B`, `#031B3A`, `#008078`, `#F5F8FB`, `#D9E2EC`, `#334155` are not used as locked);
- approved card radii 10–14px and CTA radii 6–8px are reduced to 4px and 3px;
- card, checklist and process treatments differ materially, including the approved process connector treatment.

The approved 1440 raster is `1440×6174`; the implementation evidence is `1440×6016`. The height delta alone is not the finding because route-based card omission is allowed; the finding is the visible component/composition and locked-token divergence confirmed by direct image review and source CSS.

The repair must use the Gate 5 approved 1440/768/390 assets and visual specification as the baseline while retaining valid route omission. Visual regression must compare against the approved composition rather than merely generate new screenshots.

### `DOC-TDS-G9-P2-01` — Required interaction-state evidence is incomplete

**Severity:** Required P2
**State:** `OPEN / RETURN_TO_DEVELOPMENT`

The submitted evidence directory contains only nine default full-page screenshots. It does not include the required Mobile Menu open, TDS+M-2196 selected, SDS+COA/no-Grade selected or FAQ-open screenshots. The Playwright file exercises some behavior but only writes default full-page screenshots and performs no baseline image comparison.

The targeted return must add the missing state evidence and a test that covers browser Back/Forward coherence plus visual-baseline assertions at 1440/768/390.

## 3. Disposition

`DOC-TDS-G9-PCR-01 = RETURN_TO_DEVELOPMENT / OPEN`

Gate 9 is not approved. Gate 8 implementation remains submitted but requires a targeted correction commit. Gate 9 may be re-reviewed only after all four findings have explicit evidence and fresh verification.

Gate 10, deployment, production writes, DNS, publication and indexing remain unauthorized.
