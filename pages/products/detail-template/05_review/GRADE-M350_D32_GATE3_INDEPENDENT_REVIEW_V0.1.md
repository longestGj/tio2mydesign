# GRADE-M350 D32 Gate 3 Independent Review V0.1

## 1. Control

| Field | Value |
|---|---|
| Review ID | `GRADE-M350-D32-G3-IR-01` |
| Page ID | `GRADE-M350` |
| URL | `/products/m-350/` |
| Site scope | `tio2-my` |
| Date | `2026-09-20` |
| Review mode | `INDEPENDENT_REVIEW / READ_ONLY_CANDIDATE` |
| Candidate source | `pages/products/detail-template/04_planning/m350-d32-gate3-v0.1/m350-wireframe.html` |
| Candidate source SHA-256 | `C58752B662C7BF3699D2E7BE54CF5374936091EDA47C145D3A326DA327D22BA1` |
| Result | `CONDITIONAL_RETURN / TARGETED_REVISION_REQUIRED / NOT_READY_FOR_GATE3_CLOSE` |

The reviewer did not edit the candidate source, evidence assets, executor self-check, handoff candidate, current Manifest or approval state. This report is an independent Gate 3 finding record, not a project-control closure.

## 2. Authority and review scope

The review read the current Gate 3 workflow and baseline, Gate 3 Agent and methods, the Gate 3 production boundary, cross-page-consistency decision, Gate 3→4 handoff contract, current M-350 Manifest V0.3, approved Gate 2 Full Copy, Gate 3 structure specification, executor self-check and handoff candidate. It also checked the current Global Chrome V0.5 and the Product Detail current-authority addendum.

The approved exact-copy authority is:

- `pages/products/detail-template/04_planning/GRADE-M350_GATE2_FULL_COPY_V0.1.md`
- bytes `13942`
- SHA-256 `85A4C0183A382F2F8CBFC57D7F59D7DF515111C22F811D97AE195D64C4A6957A`

The candidate evidence combination independently rehashed as follows:

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| `m350-wireframe.html` | 27581 | `C58752B662C7BF3699D2E7BE54CF5374936091EDA47C145D3A326DA327D22BA1` |
| `capture_gate3.py` | 6149 | `1435A236EE2DC2C6F5F877D297638348CFAB5F9B318221884158A9051D2F78DE` |
| `gate3_measurements.json` | 12908 | `6536E670A8D9BFF3E6A526FF275C6F2800F300B107F85E21AF5B747F57096231` |
| `M350_D32_G3_FULL_1440.png` | 754909 | `90CD6C301E0CB45141C92FC74933421C841C6B6603B57CC050F893998EA3D58D` |
| `M350_D32_G3_FULL_768.png` | 765553 | `4BAFD48B924E5A76C0702F9628C7B26482ED4C9C34CE5D66E4F073538EF5BCEE` |
| `M350_D32_G3_FULL_390.png` | 785596 | `2DF3EF5A584B0157AB3145D9A448658F3A75CFFA1F2BADA2AC34C69C75AA94A6` |
| `M350_D32_G3_MENU_390.png` | 52864 | `F7B78C23D6BD333F927C9276AB46F13476D83EC0432BE1D93BD6BB90AB568189` |
| `M350_D32_G3_COOKIE_390.png` | 41358 | `4F3A96FD8195F5875FAE5DC6F1C5F9953637C8679AA154D9D51C19A41DD6EC92` |

All five PNGs were opened and inspected. The reviewer also loaded the frozen HTML independently in Chromium at 1440, 768 and 390 CSS pixels and operated the Mobile Menu and Cookie dialog without using the executor's PASS result as the conclusion.

## 3. Independent results

| Requirement | Independent evidence | Result |
|---|---|---|
| Page identity and heading | One H1 at all three viewports; H1 is `M-350 Titanium Dioxide for Multi-Application Evaluation` | PASS |
| Module sequence | Breadcrumb → Hero → Positioning → Applications → Evaluation → Technical Data → Documents → Markets → Sample → Footer | PASS |
| Hero boundary | Exactly two Hero actions: Quote and Sample | PASS, subject to Finding F02 for context delivery |
| Applications | Five TDS-backed directions plus separately qualified Paper block | PASS |
| Technical data | Exactly 15 rows; all Property / Standard / Typical values match the approved Gate 2 table | PASS |
| Exclusions | Public `V3 2023`/year exposure 0; Related Grades 0; buyer-visible `CURRENT` 0 | PASS |
| Responsive geometry | `clientWidth = scrollWidth` at 1440, 768 and 390; full heights 6062, 7878 and 12643 | PASS |
| Tested action size | No visible ordinary action below 44×44 CSS px at the three required viewports | PASS |
| Mobile Menu | Opens; focus starts on Home; Products is the one current item; main, Footer, Logo and Header RFQ become inert; tab cycle remains inside Close/Menu plus menu links; Escape closes and returns focus to Menu | PASS |
| Cookie dialog | Opens as a modal; focus starts on Close; tab cycle covers Close and Read Cookie Policy; Escape closes and returns focus to Cookie Settings | PASS |
| Full-page continuity | All three full-page PNGs close at the shared Footer without clipping, horizontal overflow or a blank terminal module | PASS |
| Cross-page reuse | Grade Detail family and Global Chrome reuse are stated, and page-specific differences are conceptually valid | PASS in concept, identity freeze incomplete under Finding F03 |

The long 390px page and 15-row card transformation remain legitimate Gate 4 composition risks. They are not Gate 3 defects because content, order, relationship, readability and operation remain intact. No purely aesthetic observation is classified as a Gate 3 finding.

## 4. Findings

### Blocker

None.

### Important

#### `GRADE-M350-D32-G3-F01` — Unapproved buyer-visible copy was added to the exact-copy candidate

**Requirement violated:** The current Manifest and Gate 2 closure bind `GRADE-M350_GATE2_FULL_COPY_V0.1.md` as the exact external-reader copy. Gate 3 must preserve approved content and may not create a second buyer-facing copy source.

**Observed locations:**

- Technical-data action card adds `Continue to the controlled document request path for applicable M-350 technical product data.` This sentence is absent from the approved Full Copy.
- Sample block adds `Application and test objective`, `Destination market`, and `Optional non-confidential processing context` as buyer-visible pseudo-field labels. Those labels are absent from the approved Full Copy and are not actual operable controls.
- The two approved Document Request bullets use `Technical Data Sheet:` and `Additional document requirements:`. The candidate drops both approved colons when separating the bold label from its explanatory text.

**Reader impact:** The candidate exposes new wording after the user approved an exact external copy, and the three boxed Sample labels can be interpreted as form fields even though the page only routes to a separate Sample receiver. This changes the visible content/operation relationship rather than merely styling approved content.

**Acceptance condition:** Remove the added sentence and pseudo-field labels, or replace them only with an exact presentation of already approved text that does not resemble inactive controls. Restore the two approved colons. Any genuinely new buyer-facing wording requires its own content-owner approval before Gate 3 can freeze it. Re-render the affected three full-page assets after the source correction.

#### `GRADE-M350-D32-G3-F02` — Contextual CTA structure omits required approved delivery fields

**Requirement violated:** Gate 2 §3 binds contextual Quote, Sample and Document actions to `site_scope=tio2-my`, `grade=M-350` and `source_page=GRADE-M350`; the TDS action additionally requires `requested_type=TDS`. Gate 3 preserves action goals and result semantics in the editable structure source.

**Observed locations:** The contextual hrefs carry only `grade=M-350`; the TDS href adds `requested_type=TDS`. None carries `site_scope=tio2-my` or `source_page=GRADE-M350`. The Gate 3 specification says action destinations and fail-closed behavior are locked but does not map these delivery fields into the editable source or handoff.

**Reader/development impact:** A later visual or development consumer can copy the apparently operative links and lose the site-scope and source-page context required for routing, receiver attribution and cross-scope isolation.

**Acceptance condition:** Bind each contextual action to the complete approved delivery contract in the editable source, either through the actual planning href or explicit machine-readable route/context attributes. The TDS action must keep `requested_type=TDS`. Update the Gate 3 specification/handoff so the fields are unambiguous and remain implementation-neutral. Because this changes the frozen source identity, produce a fresh preflight/freeze identity and affected evidence hashes even if the rendered pixels are unchanged.

#### `GRADE-M350-D32-G3-F03` — Gate 3→4 evidence and cross-page identities are not fully frozen

**Requirement violated:** The Gate 3→4 contract requires exact paths, versions, hashes, approval scope and source/asset identities for the frozen structure, durable dependencies, reference baseline and formal evidence. Gate 4 must not have to infer which historical or current artifact was meant.

**Observed locations:**

- The structure specification records `gate3_measurements.json` as `current file identity` rather than its exact SHA-256 `6536E670A8D9BFF3E6A526FF275C6F2800F300B107F85E21AF5B747F57096231`.
- The historical M-350 family reference gives the desktop hash but describes the mobile asset only as `mobile current historical record`; the actual current file is `pages/products/detail-template/04_planning/visual-designs/M350_PRODUCT_DETAIL_MOBILE_390_V0.5.png`, SHA-256 `1A6E6CBA3D93C814ACA6B5AD094D840E16265FE8279C25CC178E92E66E4BE6DF`.
- The Product Hub visual-system reference and current Global Chrome references are named conceptually but lack the exact approved paths/versions/hashes required by the cross-page handoff contract.
- The handoff candidate refers generally to approved Home and Product Hub families and does not identify the exact approved artifacts and scope being reused.

**Consumer impact:** Gate 4 cannot independently prove that it is consuming the reviewed family/reference combination rather than a later or historical artifact with different copy, layout or approval scope.

**Acceptance condition:** Replace all placeholder/current-identity wording with exact file paths, versions, SHA-256 values and approval scope. Identify the exact Grade Detail family reference, Global Chrome/Logo owners and Product Hub/Home references actually used; if a named page is only a visual-context reference, state that boundary. Update the handoff mapping so Gate 4 can answer the six contract questions from the handoff itself.

### Minor

None outside the exact-copy punctuation already included in F01.

## 5. Closure disposition

`GRADE-M350-D32-G3-IR-01 = CONDITIONAL_RETURN / TARGETED_REVISION_REQUIRED`

Gate 3 is **not ready for project-control closure** against candidate SHA-256 `C58752B662C7BF3699D2E7BE54CF5374936091EDA47C145D3A326DA327D22BA1`.

The return is narrow. The approved module sequence, Paper qualification, 15-row data set, Hero two-action boundary, version-number removal, Related Grades omission, Global Chrome behavior and three responsive structures do not need redesign. After F01–F03 are corrected, a targeted independent recheck may inherit the unaffected observations above and must verify the new source/evidence identity, visible-copy delta, action-context mapping and exact handoff identities.

This result does not approve Gate 4, Gate 6, Gate 8, Gate 9, deployment, publication or indexing.
