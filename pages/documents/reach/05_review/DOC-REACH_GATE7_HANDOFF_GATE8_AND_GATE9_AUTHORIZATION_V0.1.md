# DOC-REACH Gate 7 Handoff, Gate 8 and Gate 9 Authorization V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Decision ID | `DOC-REACH-G8-G9-USER-AUTHORIZATION-01` |
| Decision date | 2026-09-05 |
| Decision source | User in the current Controller task |
| Exact decision | `授权 Gate 8， 然后完成Gate9` |
| Gate 7 handoff | `USER_CONFIRMED / AUTHORIZED` |
| Gate 8 | `USER_AUTHORIZED / EXTERNAL_DEVELOPMENT` |
| Gate 9 | `USER_AUTHORIZED / START_AFTER_COMPLETE_GATE8_EVIDENCE` |
| Gate 10 | `NOT_AUTHORIZED` |

## 1. Authorized package

| Role | File | SHA-256 | State |
|---|---|---|---|
| Current Gate 7 baseline | `pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE7_BASELINE_MANIFEST_V0.13.md` | `93F08D9F790137A86553BA932EF8C6E3F52504A66E7C646D507C8BDDF6A1850B` | `APPROVED_FOR_HANDOFF` |
| Development handoff package | `pages/documents/reach/06_handoff/DOC-REACH_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md` | `7A218768F40135BD73964EDD109714898D54D5C2EE15267A6B419E30359733F0` | `APPROVED / LOCKED` |
| Exact source payload | `pages/documents/reach/06_handoff/DOC-REACH_GATE7_SOURCE_PAYLOAD_V0.1.json` | `F9D2A1F14BE61EEEB585454FFC139D9AC5051B1515950F39748E8F0E1CF0B339` | `APPROVED / LOCKED` |
| Gate 8 implementation / Gate 9 acceptance | `pages/documents/reach/06_handoff/DOC-REACH_GATE7_GATE8_IMPLEMENTATION_GATE9_ACCEPTANCE_V0.1.md` | `EC012721FEB7DA093CD47F075CFD652F596DC4F46AF409E87415247C600B2695` | `AUTHORIZED_FOR_EXECUTION_AND_QA` |

The five focused Gate 7 contracts and Gate 7 closure listed in the current Manifest are part of the same authorized package.

## 2. Authorization effect

The user decision authorizes project control to:

1. deliver the approved Gate 7 package to the existing WordPress/Next.js development task `01My首页开发`;
2. authorize that external task to implement and test `DOC-REACH` under its own repository governance;
3. persistently wait for a complete Gate 8 evidence return;
4. start Gate 9 read-only QA when the implementation is available;
5. close Gate 9 only if the approved matrix passes, or return evidence-backed findings to development and continue the correction/re-review cycle until the authorized Gate 9 outcome is genuinely reached.

After successful delivery, the page lifecycle becomes `HANDED_OFF` and Gate 8 becomes `AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`. Gate 9 authorization does not pre-approve its result.

## 3. Frozen implementation meaning

- Use `site_scope=tio2-my`, page ID `DOC-REACH`, route `/documents/reach/`, EN and P1 exactly.
- Render the eleven approved modules in exact order from the source payload.
- Retain the current approved general answer; do not add the excluded company/legal-entity/supply-arrangement coverage proposition.
- Keep `reach compliant titanium dioxide` query-language-only.
- Preserve EU/EEA, Great Britain and Northern Ireland distinctions.
- Use CONV-DOC transport `document_types[]=other`, public semantic label `REACH Documentation`, editable `additional_requirements=REACH documentation` and hidden/system/non-editable `source_context.page_id=DOC-REACH`.
- Preserve receiver eligibility, atomic action/Schema suppression and no Contact or cross-scope fallback.
- Preserve approved Global Chrome, Legal/CMP, SEO/GEO/Schema, visual, responsive and accessibility contracts.

## 4. Boundaries retained

This authorization does not:

- authorize D23 to implement or repair WordPress, Next.js, CMS, components, tests or deployment code;
- authorize production deployment, production CMS writes, DNS, public release, production Canonical/robots activation or indexing;
- authorize Gate 10;
- approve a new URL, primary keyword, company-coverage claim, registration number, Only Representative relationship, Grade coverage, document availability or compliance guarantee;
- allow another `site_scope` as fallback.

If implementation requires a material change to an approved contract, the external task must stop and return the conflict to project control rather than infer authority.
