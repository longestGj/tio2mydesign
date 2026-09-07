# Document REACH / COO Post-TDS Execution Checklist V0.1

## 0. Control

| Field | Value |
|---|---|
| Scope | `DOC-REACH` / `/documents/reach/`; `DOC-COO` / `/documents/certificate-of-origin/` |
| Version / date | V0.1 / 2026-09-05 |
| Status | `USER_APPROVED / ACTIVE` |
| Decision source | User message `可以。` after the DOC-TDS process-improvement proposal |
| Derivation | Lessons verified during DOC-TDS Gate 2–9 |
| Relationship | Supplements the approved page Briefs, Claim Registers, Gate 1 manifests and `PAGE_GATE_1_5_STANDARD_V1.0.md`; it does not rewrite historical files |
| Authorization boundary | Activates the additional controls below and starts DOC-REACH Gate 2 only; it does not approve REACH full copy, Gate 3, DOC-COO Gate 2, development, deployment, publication or indexing |

## 1. Purpose

The DOC-TDS cycle showed that content, interaction, rendering, test fixtures and worktree identity must be designed as one traceable contract. The following checks are therefore hard supplementary gates for DOC-REACH and DOC-COO rather than optional retrospective notes.

## 2. Gate 2 content and public-data boundary

- Define the buyer-visible allowlist and denylist before writing complete copy.
- Keep Buyer Clean copy separate from internal evidence state, readiness state, routing metadata and Claim Register language.
- Do not expose internal tokens such as `Gate`, `HOLD`, `BLOCKER`, `QUERY_LANGUAGE_ONLY`, `DO_NOT_RENDER`, `routeReadiness`, Claim IDs, source-capture failures or workflow status.
- Define the exact CTA label, target, readiness behavior, prefill values and hidden source attribution at skeleton stage.
- Hidden source attribution is system-owned and non-editable. It cannot satisfy a required buyer field or determine legal, regulatory, origin or document applicability.
- A request path must explain the useful next step without implying approval, registration, availability, delivery, customs acceptance or preferential treatment.
- SEO, visible copy, FAQ and Schema must draw from the same approved public data boundary.

## 3. Gate 3 interaction and responsive wireframe

- Use real heading, paragraph, FAQ, source-label and button-length classes; do not use short placeholder copy.
- Provide complete `1440px`, `768px` and `390px` structures plus Mobile Menu open.
- Define eligible and unavailable states for every readiness-gated action. When an action is unavailable, its visible control and machine-readable relationship are removed together.
- Test long legal-entity, jurisdiction, document-type and source labels for wrapping and horizontal overflow.
- For query/prefill-driven UI, specify initial load, browser Back, browser Forward and direct URL revisit behavior.
- Preserve readable order, keyboard focus order, minimum touch target and non-color-only state communication.

## 4. Gate 4–5 visual contract

- Bind typography, color, radii, spacing, icon treatment and content width to the approved Home / Global Chrome visual system; do not replace exact tokens with visual approximations.
- Show representative long-copy, expanded FAQ, route-unavailable and mobile-menu states where applicable.
- Do not display governance labels, evidence gaps, unfinished-state messages or internal placeholders in buyer-facing visuals.
- A hidden or omitted module must collapse cleanly without leaving unexplained empty space.
- The Gate 5 Manifest must identify the exact approved visuals, dimensions and SHA-256 values used for Gate 7 handoff.

## 5. Gate 7 development handoff contract

- Require a buyer-safe render object/DTO produced from an explicit public allowlist. Raw planning, evidence and readiness objects must not be passed wholesale into the rendered page.
- Require negative scans across visible HTML/RSC output, metadata, JSON-LD, serialized props and client hydration payloads.
- Bind visible content, metadata and Schema to one approved public source object so they cannot drift independently.
- Provide repository-relative, hash-locked fixtures or payloads. Tests and runtime must not depend on absolute `D:\\23MySec` paths.
- Define both fixture-eligible and real fail-closed runtime modes.
- Name the focused page-owned test set and distinguish it from unrelated full-repository failures.
- Require the development report to identify repository, worktree, branch, pre-work HEAD, final commit and clean/dirty state.

## 6. Gate 8 external development evidence

- Confirm the correct repository, worktree, branch and HEAD before editing.
- Add failing tests for the approved contract before implementation and record the red/green evidence.
- Verify a production build and production-equivalent server; a development overlay is not acceptable visual evidence.
- Test eligible and fail-closed states, not only mocked happy paths.
- Capture the implementation commit and provide a clean-worktree report or a precise inventory of unrelated pre-existing changes.
- Do not create hidden cross-scope content fallbacks or make D16 tests/runtime read D23 through absolute paths.

## 7. Gate 9 independent read-only QA

- Recheck the delivered commit and worktree identity independently.
- Run the focused owned tests, typecheck, relevant lint and Malaysia production build.
- Inspect the page at nine widths: `1440`, `1280`, `1024`, `900`, `768`, `600`, `430`, `390`, `360`.
- Run Axe and keyboard/focus checks on the normal page, Mobile Menu and key disclosure states.
- Verify initial load, Back, Forward, direct revisit and request-prefill behavior.
- Verify the fixture-eligible state and the real fail-closed state.
- Scan public output for internal tokens, non-public facts and disallowed cross-page claims.
- Compare implementation against the hash-locked Gate 5 visuals; record material deviations, not subjective impressions.
- Attribute unrelated full-repository failures separately; they do not replace page-owned verification.

## 8. DOC-REACH-specific hard controls

### 8.1 Public allowlist

- General EU REACH definition and framework supported by approved European Commission sources.
- General manufacturer/importer responsibility and a properly qualified one-tonne-per-year threshold explanation.
- The distinction between public substance-level information and supplier/legal-entity/supply-chain coverage.
- Buyer verification context: substance identity, relevant legal actor, supply-chain role, intended EU market/use, evidence scope and evidence date.
- A controlled request path that does not promise registration, coverage, availability or delivery.

### 8.2 Public denylist while evidence remains open

- Any claim that IKHLAS or TiO2 Malaysia is a registrant, is covered by an importer or has an Only Representative.
- Registration numbers, tonnage bands or blanket Grade coverage.
- An unqualified company/product claim using `REACH compliant`.
- EU REACH evidence presented as UK REACH evidence.
- A titanium-dioxide-specific answer to `Is titanium dioxide REACH registered?` until the approved official ECHA evidence and separate publication approval are complete.
- Internal source-capture limitations, Claim Register dispositions and publication-control labels.

## 9. DOC-COO-specific hard controls

- The user-approved site-wide authority permits the agreed Malaysia-origin expression within its approved scope.
- That authority does not prove that a Certificate of Origin is available for a particular order or shipment.
- It does not prove preferential origin, tariff treatment, customs acceptance, issuance by a particular authority or delivery timing.
- Preferential and non-preferential origin must remain distinct.
- Buyer-visible content may explain what to verify and what context to provide, but certificate-specific, shipment-specific and customs outcomes remain evidence- and transaction-dependent.
- Internal authority flags, historic holds and evidence-state fields must never be sent to the public render object.

## 10. Required consumption

- DOC-REACH and DOC-COO Gate 2 submissions must cite this checklist and declare any exception explicitly.
- Their Gate 7 handoff packages must translate these controls into testable acceptance criteria.
- Their Gate 8 reports and Gate 9 evidence must report against Sections 5–7 rather than relying only on general build/test statements.

