# GRADE-M896 Gate 6–7 Project-Control Return V0.1

## 1. Control

| Field | Value |
|---|---|
| Review ID | `GRADE-M896-G7-PCR-01` |
| Date | `2026-09-02` |
| Reviewer | Controller 02 / `00Con-02-产品` |
| Reviewed candidate | `GRADE-M896_GATE7_MANIFEST_V0.1.md` |
| Candidate Manifest SHA-256 | `16A7B79ED0F8F40171545F8865C147ABFFB776C33F872B8092FF9483F12EDBFC` |
| Decision | `TARGETED_RETURN / NOT_APPROVED` |
| Gate 8 | `NOT_AUTHORIZED / NOT_STARTED` |
| Active serial Grade | `M-896` only |
| Next Grade | `M-895 = LOCKED / NOT_STARTED` |

The M-896 identity, TDS, Page Intent, Buyer Clean copy, six application directions, two evaluation groups, eleven technical values, SEO boundary and fast-track visual direction are acceptable candidates. Gate 6–7 remains open because the machine-readable contract is not yet compatible with the current verified Product Detail runtime contract.

## 2. Required P1 corrections

| Finding | Evidence | Required correction |
|---|---|---|
| `M896-G7-P1-01` Hero runtime shape | M-896 `hero` omits `visual`; the current shared component reads `modules.hero.visual.label`, `technicalFile`, `currentData` and `note` | Add a four-field Buyer Clean `hero.visual` with no filename-only version/date or origin/logistics implication; synchronize copy, JSON and acceptance evidence |
| `M896-G7-P1-02` Application runtime shape | All six M-896 application items omit required `category`; current DTO validates `category`, `title` and `body` | Add exact `category: Coatings` to all six items and verify 6/6 parity |
| `M896-G7-P1-03` Technical row and Schema semantics | Current runtime reads `property`, optional `standard`, and `typical`, then uses `row.typical` as Product Schema value; M-896 correctly supplies `property`, `value`, `testMethod` | Preserve the correct M-896 semantics and add a backward-compatible Gate 8 generalization: explicit value/testMethod rendering, Product Schema value from `value`, method only as third column/optional description, with unchanged M-350/M-510 output and regression evidence |
| `M896-G7-P1-04` Public contract/governance separation | Candidate JSON adds `contractState`, Gate 8/deploy/publish flags and a `recommendations` module-state key not present in the proven M-510 public contract shape; record state remains candidate | Produce a V0.2 contract aligned to the proven public shape: no governance-only `contractState`; `approved_for_preview` target record state; releaseControls only indexing/sitemap false; remove recommendations; absent origin/related modules set `not_public` |

## 3. Locked accepted scope

The return does not reopen:

- `GRADE-M896`, `/products/m-896/`, canonical or `M-896 titanium dioxide` ownership;
- TDS SHA-256 `5115450C184397E774AE652CACBC009682793AD1659831EBB35A6737251FC90E`;
- Coatings and Chloride relationships;
- six TDS-listed application directions;
- two evaluation groups;
- eleven rows with the approved values, units, maximum semantics and test methods;
- Hero maximum two actions, Quote + Sample only;
- omission of origin, related Grades, Not Recommended, packaging/loading/storage and unsupported documents;
- preview/noindex/sitemap/Gate 10 boundaries;
- recommendation to reuse the approved M-350 visual/component baseline.

## 4. Resubmission requirements

Create V0.2 files without overwriting V0.1 history. The revised package must mechanically prove:

1. public top-level, identity, release-control and module-status shape aligns with the proven M-510 contract;
2. `hero.visual` contains all four required keys;
3. 6/6 application items use category `Coatings`;
4. all eleven technical rows contain a value and a test method field;
5. Gate 8 requirements explicitly generalize rendering and JSON-LD without M-350/M-510 drift;
6. Hero actions remain exactly two and exclude Documents/TDS;
7. no other Grade fact or M-895 artifact is introduced;
8. all new Manifest hashes match.

`GRADE-M896-G7-PCR-01 = TARGETED_RETURN / NOT_APPROVED`

`M-896 remains the only active Grade`

`Gate 8 = NOT_AUTHORIZED`
