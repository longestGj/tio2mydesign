# GRADE-M350 D32 Gate 6 Targeted Recheck V0.1

## 1. Control

| Field | Value |
|---|---|
| Recheck ID | `GRADE-M350-D32-G6-INDEPENDENT-REVIEW-01-R1` |
| Parent review | `GRADE-M350-D32-G6-INDEPENDENT-REVIEW-01` |
| Parent report | `GRADE-M350_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md`, SHA-256 `2660C82FCC0D39B4D79007AE6589ACD048D709CB111C31DE15BAB084CD636A1C` |
| Page / path | `GRADE-M350` / `/products/m-350/` |
| Date | `2026-09-20` |
| Review mode | `INDEPENDENT_REVIEW / TARGETED_RECHECK` |
| Recheck scope | `GRADE-M350-D32-G6-F01`–`F04` and adjacent consistency changed by their corrections |
| Previous package | `GRADE-M350_D32_GATE6_HANDOFF_PACKAGE_V0.1.md`, SHA-256 `8B05B9DDC219E626B88CBD93EB339C9EFCBA5336C80D98ECBEF89E7AFC33E5FD` |
| Revised package | `GRADE-M350_D32_GATE6_HANDOFF_PACKAGE_V0.2.md`, SHA-256 `FE0099B04A28D52C24DE60214C579DAD78075A23DD6195F25C6057CAE1069141` |
| Revised package check | `GRADE-M350_D32_GATE6_PACKAGE_CHECK_V0.2.json`, SHA-256 `80808715FB5E08CFD7FAF5A2C4E4F367C8DBA4608D08C769C9B453435B55876F` |
| Reviewer | `/root/m350_gate6_independent_review` |
| Result | `REVIEW_PASS / F01–F04 CLOSED / PROJECT_CONTROL_REVIEW_PASS` |

The same independent Reviewer performed this targeted recheck. The Reviewer did not edit either package version, either package-check JSON, the current Manifest, upstream sources or D32 code.

## 2. Revision admission and machine checks

The V0.1→V0.2 source comparison contains `68` added and `35` removed lines. The changes are limited to the four returned contract areas, their acceptance/dependency mappings, evidence-return requirements and the package's revision/dispatch status. Buyer Clean copy, module order, Gate 3 structure, Freeze 02 identity, shared visual rules, the 16 stable acceptance IDs and 8 stable dependency IDs are unchanged.

Fresh checks returned:

| Check | Result |
|---|---|
| Revised package hash | exact `FE0099B04A28D52C24DE60214C579DAD78075A23DD6195F25C6057CAE1069141` |
| Revised JSON hash | exact `80808715FB5E08CFD7FAF5A2C4E4F367C8DBA4608D08C769C9B453435B55876F` |
| JSON package binding | `package_sha256` equals the actual V0.2 hash |
| Acceptance IDs | `16 / 16`, unique, exact package↔JSON set equality |
| Dependency IDs | `8 / 8`, unique, exact package↔JSON set equality |
| Product Hub source identity | Manifest V0.2 and Gate 9 recheck read directly; recheck hash `D21C1C53C43F53E561DDE7233E9635BF715B642BBCD671190658942EDDA26C40` |
| D32 commit existence/ancestry | Product implementation and evidence commits exist; implementation is an ancestor of evidence HEAD; accepted evidence HEAD is not currently an ancestor of D32 `develop` `5a7801b05bdb4aeccf7a95b336ef04c3740579ab` |
| Authority boundary | Gate 10/deployment remain false/not authorized in package and JSON |

The revised JSON now records package identity, generation method, time and limitations. It is used only for identity/set checks; semantic closure below comes from direct source comparison.

## 3. Finding recheck

### `GRADE-M350-D32-G6-F01` — CLOSED

V0.2 removes the stale “undergoing Gate 9” statement and binds the current accepted Product Hub:

- implementation `95ed4c4c47481ef78f64fa90b95a1096ea45bfae`;
- evidence/clean HEAD `8a4e3f5cb88cc30d0aecc36955ccb3ac19b8307c`;
- build `wp-9fcfb835a0e8b3709924a3d05cfe0bf5173fcd4db200308e0c4edf96845b68df`;
- current Manifest V0.2 and Gate 9 targeted-recheck identity.

Section 6 now separates the D32-required latest-`develop` starting point from the accepted Product Hub branch state. It permits only an isolated, identity-recorded repository composition when the accepted baseline is not already an ancestor, forbids copying from a mutable runtime, preserves the standalone/open-dependency alternative and prevents `M350-D32-AC-PRODUCT-HUB` from passing without exact consumption evidence. Section 9 and §11 carry the same ancestry/composition boundary into Gate 9 and the evidence return.

The correction does not authorize a `develop`/`main` merge, deployment or release. The F01 acceptance condition is satisfied.

### `GRADE-M350-D32-G6-F02` — CLOSED

Section 5 now binds every relationship to an expected owner and current path:

- `PRODUCT-PROC-CL`;
- `APP-COAT`, `APP-INK`, `APP-PLAS`, `APP-PAPER`;
- `MARKET-EU-001`, `MARKET-UK-001`, `MARKET-IN-001`, `MARKET-BR-EN`;
- `PRODUCT-000`, `CONV-RFQ`, `CONV-SAMPLE`, `CONV-DOC`.

The table preserves provisional Application URL status and explicitly refuses to treat path text as readiness. Every ready path requires expected owner plus `tio2-my`; every unready state has the approved link/module omission. Section 10 repeats the exact owner sets without creating sibling-page work.

The contextual RFQ now requires the exact visible heading `Request a Quote for M-350`, the approved destination/quantity-range/application/purchasing-requirements helper and the no-commercial/logistics-promise result. The outgoing query remains buyer-editable context rather than authorization. `M350-D32-AC-CONDITIONAL-ROUTES` and `M350-D32-AC-CONVERSION-CONTEXT` now make those results observable.

The F02 acceptance condition is satisfied.

### `GRADE-M350-D32-G6-F03` — CLOSED

V0.2 preserves the initial approved state of 15 technical rows plus the qualified Paper path and adds source-bound conditional states without prescribing database fields:

- one authorized withdrawn/conflicted TDS field suppresses only its visible row/claim and matching `additionalProperty`;
- restoring that source state restores the exact row and machine value;
- a withdrawn neutral Paper relation removes only the qualified Paper path/link while keeping five TDS-backed directions;
- restoration returns that approved Paper path;
- missing runtime data is not allowed to invent either state.

The managed-content, validation and invalid-record clauses now distinguish a valid authorized source-status state from an incomplete record. Content, Technical, Conditional Routes, Schema and CMS acceptance mappings cover the initial, affected and restored states. Section 11 requires corresponding evidence and restoration proof. The normal four-width visual contract remains bound to the initial 15-row state; conditional visual evidence is required only where output changes.

The correction preserves visible/machine parity and does not convert an upstream conflict into a whole-page failure. The F03 acceptance condition is satisfied.

### `GRADE-M350-D32-G6-F04` — CLOSED

V0.2 binds:

- locale `en`;
- internal content-contract revision `GRADE-M350-D32-CONTENT-CONTRACT-V1.0`;
- Product `@id` `https://tio2products.com/products/m-350/#product`;
- the exact first visible Hero paragraph as Product `description`.

The same identities are carried into `M350-D32-AC-IDENTITY`, `M350-D32-AC-SCHEMA`, `M350-D32-AC-CMS`, `M350-D32-AC-EVIDENCE` and §11. The content revision is expressly server-side/evidence-only and must be proven absent from public output. No new buyer-facing wording or product fact was introduced.

The F04 acceptance condition is satisfied.

## 4. Adjacent consistency and final disposition

The corrections remain consistent with the approved Full Copy, current M-350 Brief, D32 managed-page/migration pattern, Gate 8→9 Manifest contract and Product Hub transition rule. The accepted Product Hub remains an external composition dependency until D32 supplies the exact ancestry/composition evidence; this is an explicit implementation/integration boundary, not an open Gate 6 contract defect. RFQ, Sample, Document, Process, Application, Market and indexing dependencies retain owners, fail-closed behavior and unmet impacts.

No new Blocker, Important or Minor Finding was introduced. All unaffected conclusions from the parent review remain inherited, including upstream Gate 2–5 identity, WordPress architecture compatibility, exact external copy/TDS-version boundary, shared Chrome, user-excepted device evidence and the Gate 10/release prohibition.

`GRADE-M350-D32-G6-INDEPENDENT-REVIEW-01-R1 = REVIEW_PASS / F01–F04 CLOSED`

`GATE_6_REVIEW_RESULT = PROJECT_CONTROL_REVIEW_PASS`

The revised package is eligible for Project Control to close Gate 6 under standing authority and mark it `APPROVED_FOR_HANDOFF`. This report does not itself close Gate 6, dispatch `02开发`, mark `HANDED_OFF=YES`, approve Gate 9, or authorize a merge, deployment, publication, sitemap inclusion or indexing.
