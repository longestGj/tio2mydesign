# APP-000 Internal Link Planning Targeted Recheck V1.0

Date: 2026-09-08. Review ID: `APP-000-IL-PLANNING-01`. Mode: `PLANNING_REVIEW / TARGETED_RECHECK`. Reviewer: `/root/app000_internal_link_planning`, independent of Gate 6 author `/root/app000_gate6_author`. Page scope: `APP-000` only, EN, `/applications/`, `site_scope=tio2-my`.

Exact revised package: `pages/applications/06_handoff/APP-000_GATE6_HANDOFF_PACKAGE_V1.1.md`; Package ID `APP-000-G6-HANDOFF-02`; verified SHA-256 `679921DFF649EB19197364C998B9512B711C3A32EE00C64798AD70CE0C05E84C`.

Author self-check: `pages/applications/05_review/APP-000_GATE6_AUTHOR_SELF_CHECK_V1.1.json`; verified SHA-256 `7716FD4DA41D83F6AC4B0379E1162AE0ADBC4B46D7F3C9187CBB1BF7E7BF73FA`; author result `PASS / READY_FOR_TARGETED_RECHECK`. The self-check is supporting evidence and does not replace this independent semantic recheck.

Result: **`REVIEW_PASS`**. Original Required Findings `APP-000-IL-PLANNING-01-F01` through `F03` are closed at the Gate 6 planning-package layer. No new Finding is raised. All coverage from `APP-000_INTERNAL_LINK_PLANNING_REVIEW_V1.0.md` that was unaffected by these revisions is inherited.

This result is limited to planning and handoff completeness. No runtime environment was supplied; no HTTP, redirect, canonical-response, route-availability, implementation, Gate 9 closure or publication claim is made.

## 1. Targeted recheck coverage

The review inspected only the three original closure conditions and their affected dependency, acceptance-condition and source-reference mappings. It did not reopen the approved Buyer Copy, content contract, visual combination, unchanged APP-000 outbound map, other Gate 6 independent-review Findings, consumer-page content or shared-owner contracts.

| Original Finding | Recheck result | Verified closure |
|---|---|---|
| `APP-000-IL-PLANNING-01-F01` | `CLOSED / PASS` | §5 now defines 30 unique, stable occurrence Edge IDs in the required 8/8/7/4/2/1 distribution. Every occurrence binds application key, position, Grade Page ID, exact accessible label, eligible link or ineligible plain-text state, href or null, target Page ID when linked, canonical, EN and `tio2-my`. §5, D04, G9-03 and G9-06 require all 30 source-edge records before the fourteen endpoint responses may be deduplicated. Repeated Grade destinations therefore remain independently testable. |
| `APP-000-IL-PLANNING-01-F02` | `CLOSED / PASS` | §4 and §6.2 bind breadcrumb Home to `HOME-001` `/` and Applications to non-action current text. The matrix covers Logo/Home, Home, Markets, Products, Applications, Documents, Resources, About, fixed/body/footer RFQ, Privacy EN, Privacy BM, Cookie Policy, Cookie Settings and dialog Cookie Policy across every applicable desktop Header, compact/mobile Header and open menu, Footer, breadcrumb and Cookie-dialog state. It specifies Page ID, path, language, `tio2-my` scope, link/button semantics, current state, focus behavior where applicable, and Contact/Terms absence. D07 and G9-08 require per-instance resolution, so label/order alone cannot pass. |
| `APP-000-IL-PLANNING-01-F03` | `CLOSED / PASS` | D13 and G9-17 name exactly `PRODUCT-PROC-CL` at `/products/chloride-process-titanium-dioxide/` and `PRODUCT-PROC-SU` at `/products/sulfate-process-titanium-dioxide/`, both as separate adjacent consumers outside D11. The CL mapping is expressly limited to the `/applications/` route subcondition of `CL-G9-F02`/`CL-G9-17`; receiver evidence and the combined Finding remain with the CL owner. The SU mapping is limited to the route subcondition of `G9-FIVE-F01`/`SU-G9-09`/`SU-DEP-01`. Pointer, keyboard, APP-000 identity/scope/canonical, Back/Return and accepted consumer-state preservation are assigned to Gate 9, with no Process-page edit authority. |

Coverage count: **3/3 original closure conditions inspected; 3/3 passed; 0 new Findings**.

## 2. Independent nine-page F02 boundary

The revised package keeps `G9-T4A5-F02` independent from APP-000 outbound eligibility and both Process consumers. D11 names exactly the four Trade and five Application consumers: `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR`, `APP-COAT`, `APP-PLAS`, `APP-MB`, `APP-INK`, `APP-PAPER`.

Only `APP000-G9-16` may establish the nine-page route condition in the same candidate. It requires every approved shared/body `/applications/` instance to resolve to APP-000, EN, `tio2-my` and the clean canonical, with keyboard activation, Back/Return and preservation of each consumer's accepted body, head and current-navigation state. It grants no consumer edit authority. APP-000 planning readiness does not itself close `G9-T4A5-F02`; actual runtime closure remains `NOT_VERIFIED`.

## 3. Source and mapping integrity

The revised package and self-check identities match the dispatch. The three source hashes used by the new independent regression conditions also match their current files:

| Mapping source | Verified SHA-256 |
|---|---|
| `docs/architecture/GATE9_TRADE4_APPLICATION5_TARGETED_RECHECK_V1.0.md` | `F0B299A4A7A49C37FDF5579E256A6CB069A886839B16CA18C047D805040542D7` |
| `pages/products/chloride-process/07_qa/PRODUCT-PROC-CL_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md` | `E6FC412923B7F8B6E67D9B2DA25B5BEDDE647D2C931928D2A06952384B2E6F90` |
| `pages/products/sulfate-process/06_handoff/PRODUCT-PROC-SU_GATE6_HANDOFF_PACKAGE_V0.1.md` | `343A220CB92D058A6C8914C4E30AF405D619076B14EC96EB06A2E59EF0B7F192` |

The revised author self-check reports 30 unique edge definitions, 13 stable dependencies, 17 unique Gate 9 acceptance conditions with no undefined references, separate `APP000-G9-16` and `APP000-G9-17` scopes, and the complete shared-target marker set. Independent reading of the normative package sections confirms the meaning of those checks.

## 4. Disposition

The internal-link planning review has no remaining Required Finding against package V1.1. The package may return to Project Control under the existing review chain for the broader Gate 6 decision. This report does not approve or close Gate 6, dispatch Gate 8, modify any owner or consumer page, close `G9-T4A5-F02`, close either Process page's Gate 9, or authorize release.
