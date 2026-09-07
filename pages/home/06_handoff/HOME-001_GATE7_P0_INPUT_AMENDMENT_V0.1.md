# HOME-001 Gate 7 P0 Input Amendment V0.1

## 0. Amendment control

| Field | Value |
|---|---|
| Page | `HOME-001` / `/` |
| Existing package | `HOME-001-G7-HANDOFF-01` |
| Amendment ID | `HOME-001-G7-P0-REV-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Date | 2026-08-31 |
| Scope | P0 Tablet evidence correction and Canonical acceptance normalization only |
| Handoff boundary | No external development task; no Gate 8/9/10; no deployment or release |

This amendment does not rewrite the approved Home content, architecture, visual direction, metadata value or Schema graph. It replaces only the current Tablet evidence references and the Canonical comparison method in the Gate 7 input.

## 1. P0-1 Tablet evidence replacement

The current Gate input must use:

- `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.2.png`;
- `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.2.png`.

Both show the full required Tablet order, including Resources / Buyer Answers and the page-level structured RFQ before Footer. The Global Chrome RFQ remains visible. The 390px contract remains unchanged: no page-level RFQ, with RFQ still visible in its applicable Global Chrome locations.

The V0.1 Tablet PNGs remain historical files and must not be deleted or overwritten.

## 2. P0-2 Canonical normalized-equivalence contract

### 2.1 Preferred emitted value

The preferred Home canonical remains:

`https://tio2malaysia.com/`

### 2.2 Acceptance equivalence

For HOME-001 only, these two literal forms are equivalent after standards-based URL parsing and normalization:

- `https://tio2malaysia.com`
- `https://tio2malaysia.com/`

Acceptance must evaluate the parsed URL rather than require an exact character-for-character match. A compliant canonical must satisfy all of the following:

1. exactly one rendered `<link rel="canonical">` exists;
2. scheme is `https`;
3. hostname is exactly `tio2malaysia.com`;
4. pathname is `/`;
5. query string is empty;
6. fragment is empty;
7. it does not resolve to another domain, page path, language path or `site_scope`;
8. no second canonical is added to represent the alternate trailing-slash form.

An implementation must not manually emit both literal forms. The two forms are acceptance-equivalent representations of the same Home URL, not two canonical tags.

### 2.3 Rejection examples

- `http://tio2malaysia.com/`
- `https://www.tio2malaysia.com/`
- `https://tio2malaysia.com/home`
- `https://tio2malaysia.com/?site_scope=tio2-my`
- `https://tio2malaysia.com/#home`
- two canonical tags using the two accepted literal forms

## 3. Inherited package boundary

Everything not explicitly changed above remains inherited from:

- `HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md`;
- `HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` for unaffected acceptance clauses;
- the approved Gate 6 SEO/GEO five-node/five-relation contract;
- the approved Desktop/390px/Global Chrome and product evidence set.

The locked Title, Meta Description, robots, language, H1, preferred Canonical value and JSON-LD values are unchanged. Only the Canonical acceptance comparator changes from literal equality to normalized URL equivalence.

## 4. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| Gate 7 V0.1 | 2026-08-31 | Original approved-for-handoff package | Historical approved baseline; not deleted |
| P0 Amendment V0.1 | 2026-08-31 | Tablet evidence replacement and Canonical equivalence acceptance | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
