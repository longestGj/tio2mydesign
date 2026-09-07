# Legal / Privacy Gate 6 Shared Chrome Conformance Hold V0.1

## Control

| Field | Value |
|---|---|
| Review ID | `LEGAL-PRIVACY-G6-PCR-01` |
| Date | 2026-09-02 |
| Gate 5 | `USER_APPROVED / CLOSED` |
| Gate 6 | `USER_AUTHORIZED / RESUMED / PROJECT_CONTROL_REVIEW_PASS` |
| Result | `TARGETED_CORRECTION_VALIDATED / HOLD_RESOLVED / CLOSED` |
| Gate 7–10 | `NOT_AUTHORIZED` |

## Finding 1 — approved Footer text mismatch

**Severity:** Important / Gate 6 pass blocker.

The approved Footer authority is:

`© 2026 TiO2 Malaysia. | Privacy Policy | Dasar Privasi (BM) | Cookie Policy | Cookie Settings`

All nine Gate 5 complete page visuals currently render `TiO₂` with a Unicode subscript character in the copyright label. This differs from the exact user-approved `TiO2` text in `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` and Gate 3 V0.2.

**Impact:** Privacy EN, Privacy BM and Cookie Policy EN at 1440 / 768 / 390 logical; their PNG/SVG hashes and current Gate 5 Manifests.

## Finding 2 — unapproved Mobile Menu utility block

**Severity:** Important / Gate 6 pass blocker.

The Gate 5 Mobile Menu proof contains the approved eight primary destinations and then adds a separate `PRIVACY` block with Privacy Policy, Cookie Policy and Cookie Settings. Global Chrome V0.5 freezes the Mobile Menu as the same eight-item order as Desktop, and Gate 3 V0.2 requires the open proof to show those eight destinations. Legal utilities are assigned to the Footer.

**Impact:** Shared Mobile Menu open PNG/SVG and its hash references. The complete page Footers are not affected by this finding.

## Recommended targeted correction

1. Reopen only the affected Gate 5 visual evidence as a targeted conformance correction.
2. Replace visible `TiO₂` with exact approved `TiO2` in all Footer copyright labels.
3. Remove the extra Mobile Menu Privacy block; retain the eight approved primary destinations only.
4. Regenerate affected PNG/SVG assets, rerun full validation, issue new hashes and V0.6 current Gate 5 Manifests.
5. Resume Gate 6 review only after the targeted correction passes project-control validation.

This correction changes no policy body copy, URL, SEO/GEO/Schema contract, consent semantics, Header order, Footer link order or release control.

## Alternative not recommended

Keeping the current visuals would require reopening the approved Global Footer exact text and Global Mobile Menu structure. This would create unnecessary cross-page impact and is not recommended.

## Decision required

User approved Option A in the current project-control conversation on 2026-09-02: `批准a方案，修正后继续gate6`. The affected Gate 5 evidence may be reopened for the exact correction above. Gate 6 resumes after fresh validation; Gate 7 remains locked.

## User decision

| Field | Value |
|---|---|
| Decision | `OPTION_A_APPROVED` |
| Scope | Exact Footer `TiO2` correction; remove extra Mobile Menu Privacy block; regenerate affected evidence and hashes; resume Gate 6 |
| Unchanged | Policy copy, URLs, SEO/GEO/Schema, Consent states, Footer link order, release controls |

## Closure

- V0.2 shared-Chrome conformance test: PASS.
- V0.2 full visual regression: PASS with 0 findings.
- Gate 6 audit: 18/18 PASS.
- Review outcome: `LEGAL-PRIVACY-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.
