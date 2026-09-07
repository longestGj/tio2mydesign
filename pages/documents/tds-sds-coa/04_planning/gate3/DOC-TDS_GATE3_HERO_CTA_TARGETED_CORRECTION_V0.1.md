# DOC-TDS Gate 3 Hero CTA Targeted Correction V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Correction ID | `DOC-TDS-G3-C05` |
| Date | 2026-09-05 |
| Source | Project-control cross-page review accepted by the user |
| Status | `VERIFIED_FIXED / CLOSED` |
| Gate 3 complete package | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 4–10 | `NOT_AUTHORIZED` |

## 1. Finding

The approved Gate 2 and Gate 3 contracts require every visible primary `Request TDS, SDS or COA` action to continue to `/request-documents/` with the same buyer-editable prefill. The generated Hero action instead used `#document-choice`, while the Product Grade and Final CTA actions used the receiving route.

This created an interaction inconsistency without changing the visible raster geometry.

## 2. Test-first correction

The structural/browser test was extended first to require:

- all three primary actions to resolve initially to `/request-documents/`;
- all three primary actions to carry the same TDS + M-2196 prefill after selection.

The new assertion failed against the previous source with:

```text
actual:   ['#document-choice', '/request-documents/', '/request-documents/']
expected: ['/request-documents/', '/request-documents/', '/request-documents/']
```

The minimal source correction then:

1. replaced the Hero fragment target with `/request-documents/`;
2. bound all `.primary-request` actions to the existing shared prefill synchronizer.

Fresh result:

```text
DOC-TDS Gate 3 structural and responsive contract: PASS
```

## 3. Integrity evidence

| Artifact | SHA-256 after correction |
|---|---|
| Responsive HTML | `A8C88F5C9CCD1B3C1ECCB58D577BDD77C9F88521115307610F67BDA060B5C157` |
| Structural/browser test | `8CC63122515C8912F5E7AA365ABE14739FCEC476C6BA73E6514412530C046EF9` |

All five raster assets were regenerated after the correction and remain byte-identical to the submitted Gate 3 assets. The correction changes link behavior only; layout, copy, responsive geometry and visual evidence are unchanged.

## 4. Boundary

This closes `DOC-TDS-G3-C05`. It does not close Gate 3 or authorize Gate 4, development, deployment, publication, DNS or indexing.

`DOC-TDS-G3-C05 = VERIFIED_FIXED / CLOSED`
