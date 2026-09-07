# APP-INK Gate 2 Full Copy Buyer Review V0.1

## 1. Review control

| Field | Value |
|---|---|
| Review ID | `APP-INK-G2-BR-01` |
| Phase | `Full Copy initial review` |
| Review date | 2026-09-07 |
| A / SHA-256 | `APP-INK_GATE2_CONTENT_SKELETON_V0.1.md` / `BBB3A2BBD55D0140C4CFBEF2C7E929E5F7F5C47478671B50AEFF72F33E5554A6` |
| B / SHA-256 | `APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` / `7B483AFF5D4D5C4E2CADE6F71B816E5E01F7B8CBD95ACC2F926C4B646A7405E6` |
| C / SHA-256 | `APP-INK_GATE2_CONTENT_CONTRACT_V0.1.md` / `2DD66A7DAD73FAA2881A5E378FEA73A783BC87D25561E285B16B5D46B13FABE3` |
| Current Manifest / SHA-256 | `APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` / `B3860F01826A49A2E0F17D93E0EB501A5A06C3B45068BA3EF136E6B885F15332` |
| Verdict | `FINDINGS_REQUIRE_REVISION` |
| Required Findings | `APP-INK-G2-BR-F01`, `APP-INK-G2-BR-F02`, `APP-INK-G2-BR-F03`, `APP-INK-G2-BR-F04` |

The actual B was cold-read from the H1 through Source 6 and public metadata before A, C or the Execution self-check was opened. Discovery continued to the end after the first issue. This report does not approve or close Gate 2.

## 2. Required Findings

### `APP-INK-G2-BR-F01` — Source 1 names the wrong authors, and Source 3 does not reproduce the official title

**Severity:** Important, required.

Source 1 currently attributes the cited paper to:

> Tomerlin, Banić, Mahović Poljaček and Anić

The linked MDPI article identifies Renata Tomerlin, Dean Valdec, Mario Tomiša and Damir Vusić. Three of the four names in B belong to neither the linked article nor the approved exact article's source note. This is a direct source-identity error.

Source 3 labels ISO 2834-2 as `Laboratory preparation test prints`; the official title is `Laboratory preparation of test prints`. The missing `of` is smaller, but the page promises exact source labels and should not alter an official title.

**Required revision:** replace Source 1's author list with the four authors shown on the linked article and reproduce the exact official ISO 2834-2 title in Source 3. Keep the existing link destinations and bounded uses.

**Acceptance condition:** each visible source note correctly identifies its linked entity, authors and title; no new study result, TiO2 Grade claim or publication-date claim is added.

### `APP-INK-G2-BR-F02` — the ISO 1524 gauge predicate exceeds the cited official scope

**Severity:** Important, required.

> A gauge result reports the largest particles or agglomerates detected under that method.

The official ISO landing page says the standard determines fineness of grind with a suitable micrometre-graduated gauge. The standard's public definition describes a reading under specified conditions at the groove depth where discrete solid particles become readily discernible. It does not identify the reading as a report of the `largest particles or agglomerates`. The approved article also preserved the narrower distinction between gauge fineness and particle characterization without making this expanded statement.

**Required revision:** describe the result as a fineness-of-grind gauge reading under specified conditions, or use the exact discrete-solid-particle boundary supported by the public standard. Retain the valid limits that it is not primary particle size, a complete particle-size distribution or proof of nozzle, screen or filtration performance.

**Acceptance condition:** the visible predicate stays within ISO 1524's method and definition; `largest particles or agglomerates` is removed unless a directly approved source supports that exact meaning; C is updated to the same stable predicate.

### `APP-INK-G2-BR-F03` — the Grade introduction exposes relationship-governance language

**Severity:** Minor, required.

> These current TiO2 Malaysia Grade pages are equal starting points for a Printing Inks review. Their inclusion does not establish suitability, availability, equivalence, comparative performance or acceptance in your system.

`Equal starting points` and especially `Their inclusion does not establish...` explain the project's relationship controls. They do not tell an ink buyer how to use the four links. The one/several/unknown behavior in the following paragraph already gives the useful action and can carry the neutral boundary naturally.

**Required revision:** tell the buyer directly to open the Grade page for one or more candidates being considered and keep documents and trial results separate. Preserve the four equal relationships and the no-rank/no-fit boundary without referring to why entries are included in the list.

**Acceptance condition:** the introduction reads as Buyer Copy; all four Grades remain equal and in the same order; one, several and unknown-Grade paths remain; no Printing Inks performance, process, suitability, recommendation, equivalence or availability relation is added.

### `APP-INK-G2-BR-F04` — the cost condition is the weakest English sentence

**Severity:** Minor, required.

> Price per kilogram, nominal TiO2 content and ink loading create a meaningful comparison only when the incumbent and candidate printing inks reach the same accepted technical endpoint in the declared print and finished result.

`In the declared print and finished result` is awkward and treats `print` and `finished result` as two overlapping comparison objects. The approved buyer rule is simpler: cost becomes meaningful only after both ink systems meet the same accepted technical endpoint in the declared printed output.

**Required revision:** name the comparison object naturally as the declared printed output or finished printed result while retaining the same accepted-endpoint prerequisite.

**Acceptance condition:** the sentence reads naturally on first pass, clearly names the incumbent and candidate inks and their common accepted output, and adds no price, saving, performance or winner claim.

## 3. High-risk action and workload trace

The highest-workload instruction is the matched-trial sentence:

> Keep the incumbent and candidate trials aligned wherever the comparison depends on the same condition. Record formulation basis, preparation, print method, substrate, deposited film, drying or cure, conditioning, measurement method, reference and acceptance requirement.

**Trace:** buyer's formulation, laboratory or print team → aligns and records the incumbent and selected candidate trial conditions → stores the comparison in its own test record → obtains interpretable endpoint evidence for its declared ink and print system.

This work is substantial but proportionate to the page's approved technical task. It does not require testing all four Grades and does not send an undefined workload to a website receiver.

The most consequential external action is Sample: buyer → `CONV-SAMPLE` with a known or unknown Grade, Printing Inks application, destination and test objective → supplier team review → any arrangement confirmed separately. Documents similarly accepts one known Grade and one or more document types, with a separate request for another Grade; RFQ accepts a known lead or `Not sure / Need help`, required or estimated MT, destination and other candidates in `Additional Requirements`. The post-submit result is limited to review and contact. No document, sample, quotation, availability, timing or delivery is promised.

## 4. Page-specific value, architecture and incomplete paths

The page-specific value is visible before the Grade and request sections. It defines vehicle, process, substrate, deposited film and cure as the comparison system; separates printed opacity from coverage/pinholes and colour; keeps dispersion, rheology and storage evidence together without transferring a research formulation; distinguishes grind-gauge output from particle characterization; and turns these inputs into a matched incumbent/candidate print trial. The technical depth serves the Printing Inks task and does not create a flexo, gravure, offset, screen or inkjet child-page responsibility.

Opacity, coverage/pinholes and colour are clear and adjacent. The Tomerlin study remains limited to solvent-based reverse flexography on treated BOPET, changed anilox volume, separately assessed opacity/uniformity and measurements before varnishing and lamination. The Liu study remains limited to its untreated-rutile aqueous PAAS dispersion and does not become a finished ink, dispersant recommendation, dosage or shelf-life claim.

The 11 modules are detailed but not repetitive as a set. Each of the four interpretation sections answers a distinct buyer question; Documents, matched trial and cost convert those questions into evaluation inputs; Grades and requests provide the next action. No module needs removal to resolve the Findings.

Incomplete paths remain usable:

- unknown system details can be stated without guessing;
- one, several or unknown Grade can continue;
- Documents supports one or more document types for one known Grade and explains the separate-request behavior for another Grade;
- Sample supports known and unknown Grade;
- RFQ supports a known lead or `Not sure / Need help`, required or estimated quantity and other candidates in `Additional Requirements`.

The four rows exactly match PRODUCT V0.3: M-350, M-510, M-52 and M-2377. No process field renders, so M-2377's Sulfate classification is not borrowed into APP-INK. No M-52 property, best choice, ranking, equivalence, fit, performance or availability is inferred. Subject to F03, Grade behavior is correct.

Public SEO and Meta match the visible global Printing Inks task and the document/sample/RFQ actions. The provisional Canonical remains explicitly conditional. Schema is limited to visible-parity WebPage and BreadcrumbList semantics.

## 5. Third-party source fidelity

Fresh checks were made against all six public destinations on 2026-09-07. A timeout or HTTP 429 was treated as an access result, not as evidence that the source is absent.

| # | Result | Precision conclusion |
|---:|---|---|
| 1 | `SOURCE_IDENTITY_REQUIRES_REVISION` | The MDPI article supports the bounded reverse-flexographic white-layer predicate, but B names three incorrect authors; see F01. |
| 2 | `SUPPORTED_AS_WRITTEN` | PubMed identifies Liu et al., the exact title, *ACS Omega* and electronic publication on 10 April 2025. B keeps viscosity, zeta potential and stability inside the declared aqueous PAAS research system. |
| 3 | `TITLE_REQUIRES_MINOR_CORRECTION` | ISO supports the liquid-ink preparation scope, flexography/gravure, water/solvent/radiation-curing categories and inkjet exclusion. The link label omits `of`; see F01. |
| 4 | `SUPPORTED_AS_WRITTEN` | ISO identifies ISO 23498:2022, Edition 2, December 2022 and visual opacity of printed white ink on transparent and opaque substrates. No threshold or procedure is reproduced. |
| 5 | `SUPPORTED_AS_WRITTEN` | ISO identifies ISO 13655:2017, Edition 3, July 2017 and 2022 confirmation. B keeps it within spectral/colorimetric measurement for graphic-arts images and makes no raw-pigment whiteness inference. |
| 6 | `PREDICATE_REQUIRES_REVISION` | ISO identifies ISO 1524:2020, Edition 5, June 2020 and confirmation on 19 January 2026. The method identity is correct, but `largest particles or agglomerates` exceeds the cited predicate; see F02. |

No study or standard is used to assert a TiO2 Malaysia Grade property, universal formula, printing-process suitability, pass threshold, commercial performance or completed compliance result.

## 6. Content to preserve and next responsibility

Preserve the system-first Hero, opacity/coverage/colour split, bounded two-study examples, dispersion/rheology/storage relationship, four document roles, matched trial, four neutral Grade rows, one/several/unknown paths, three distinct request owners, post-submit expectation, six-source structure and public metadata meaning. Correct the four Findings locally; do not add a module, process label, Grade summary or technical branch.

Next responsibility: the Gate 2 Execution Agent revises F01-F04 and saves a versioned Finding response. Independent Review then reads the actual revised B and any necessary C update, verifies all acceptance conditions and checks adjacent source, Grade, cost, CTA and Meta semantics. APP-PAPER remains locked until APP-INK completes the serial page cycle.
