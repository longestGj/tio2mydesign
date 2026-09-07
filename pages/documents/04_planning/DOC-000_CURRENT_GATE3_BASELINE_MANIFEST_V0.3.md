# DOC-000 Current Gate 2/3 Selector-CTA Manifest V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Decision ID | `DOC-000-G2-G3-SELECTOR-CTA-01` |
| Decision date/source | 2026-09-02 / explicit user confirmation |
| Status | `APPROVED / CLOSED` |
| User approval | 2026-09-02 / explicit approval in current project-control conversation |
| Gate 1 | Retained; not reopened |
| Gate 4 authorization | `NO` |
| Manifest date | 2026-09-02 |

This V0.3 Manifest is the approved DOC-000 Gate 3 baseline. V0.2, Content V0.7, Wireframe V0.5 and prior assets remain preserved as historical/superseded candidates. The user approved V0.3 and separately authorized Gate 4 on 2026-09-02.

## 1. Current payload

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Selector-CTA Content Architecture | `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.8.md` | 10189 | `3C6C78D08321C112414A7A6C438FA1581A745B5D3F41C82E0CF2A8960FA4BA30` | `APPROVED / CLOSED` |
| SEO/GEO/Schema inherited contract | `pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.6.md` | 4751 | `2374A673C5335C5AE75EFFCFAD6AF4BF92111F782C5DB9C72FD178B022318364` | `INHERITED_UNCHANGED / NO_NEW_RELATION` |
| Gate 3 Wireframe Specification | `pages/documents/04_planning/wireframes/DOC-000_WIREFRAME_V0.6.md` | 4768 | `AF74B9B9EE50554A3AC6D9D1270F7EBEA2EF34DA2B0A5E8E4F7350D0FBE72F71` | `APPROVED / CLOSED` |
| Responsive/Interaction Contract | `pages/documents/04_planning/DOC-000_GATE3_RESPONSIVE_INTERACTION_CONTRACT_V0.2.md` | 4112 | `04826E7CB70957C5FF827F5DCBEAD6861086C25AA6D72C28E8A937B9D434864D` | Same |
| Change Impact | `pages/documents/04_planning/DOC-000_GATE2_GATE3_SELECTOR_CTA_CHANGE_IMPACT_V0.1.md` | 3488 | `3EF02CBDD34F02B18C361F34D94E1053BE9FBC293055C3DAAFA0E03E0C880F6C` | Same |
| Validation | `pages/documents/04_planning/DOC-000_GATE2_GATE3_SELECTOR_CTA_VALIDATION_V0.1.md` | 3493 | `71B3FF315FA2DEA512C95E64FD64FADE2AF13A7174BB80ABEC7F693F48F748CD` | Same |
| Project-control submission | `pages/documents/04_planning/DOC-000_GATE2_GATE3_SELECTOR_CTA_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 2341 | `DE418AD67AF61D4710393275F8E70F87628F90FD855628F14A9E7FF56D5A3B1E` | Same |
| Desktop 1440 V0.2 | `pages/documents/04_planning/wireframes/assets/DOC-000_G3_DESKTOP_1440_SELECTOR_CTA_WIREFRAME_V0.2.png` | 280339 | `94BE29055318AD55F2C132F999D55018A1071A3182C6E7E7542A36E152B8AFF2` | Same |
| Tablet 768 V0.2 | `pages/documents/04_planning/wireframes/assets/DOC-000_G3_TABLET_768_SELECTOR_CTA_WIREFRAME_V0.2.png` | 283018 | `7F26C56EB3535B9D8CD1E7CCD3E4168E689C9B6F5C56EF38EFE782DB6C40A35F` | Same |
| Mobile 390 logical @2x V0.2 | `pages/documents/04_planning/wireframes/assets/DOC-000_G3_MOBILE_390_LOGICAL_2X_SELECTOR_CTA_WIREFRAME_V0.2.png` | 844949 | `D611D195C1DDA6EFC0BF97C19B3DDEB18A0A841C0D5BAC155A5EC27BD20D8CD5` | Same |
| Selector three-state proof | `pages/documents/04_planning/wireframes/assets/DOC-000_G3_SELECTOR_CTA_STATES_V0.1.png` | 46028 | `13B5E0223396342E1A7E4ADB120142C43E03F735F97AD649AF99FC5F6ADC9D84` | Same |
| Inherited Mobile Menu proof | `pages/documents/04_planning/wireframes/assets/DOC-000_G3_MOBILE_MENU_390_LOGICAL_2X_READER_WIREFRAME_V0.1.png` | 43939 | `F20ED9275D8BD6739B8A73E03FEB96B90DB897200B06839CAC3FD48B0752E7A8` | `INHERITED_UNCHANGED` |

The Manifest self-hash is computed after final validation and is not self-embedded.

## 2. User decision record

The user explicitly confirmed:

1. Product Grade remains a dropdown with the same 14 values.
2. The complete Selector moves to immediately below Hero.
3. `Continue to Request Documents` is visible and operable from initial load.
4. A no-selection activation does not navigate, shows the exact validation and focuses the dropdown.
5. A valid selection shows the selected confirmation and lets the same button transfer editable Grade prefill.
6. Hero CTA targets the adjacent selector.
7. FAQ remains a collapsed disclosure pattern with one Gate 3 expanded proof permitted.
8. Closing always retains a visible action.
9. Category cards and shared Chrome remain unchanged.

This decision authorizes only the targeted Gate 2/3 revision, not Gate 4/5 or development.

## 3. Current module order

`Hero → Product Grade Selector → How It Works → Review Scenarios → Documentation Categories → Why on Request → Buyer Questions → Closing CTA → Shared Footer`

## 4. CTA state contract

| State | Visible action | Behavior |
|---|---|---|
| Initial | `Continue to Request Documents` | Operable and focusable; no default Grade |
| No selection | Same button | No navigation; exact validation; focus dropdown |
| Valid selected | Same button | Show selected confirmation; Grade-only handoff |
| Closing without Grade | `Select a Product Grade` | Focus upper dropdown |
| Closing with Grade | `Continue to Request Documents` | Use same selected Grade |

## 5. Validation snapshot

| Check | Result |
|---|---|
| New raster assets | `4 / 4 PASS` |
| Dimensions | `1440×4199 / 768×5236 / 780×12972 / 1440×938` |
| Selector immediately after Hero | PASS at 1440/768/390 |
| Initial Continue visible | PASS at 1440/768/390 |
| Valid dropdown Grades | `14 / 14` |
| No-selection state | URL unchanged; exact error; select focused |
| Selected state | Exact confirmation; target `/request-documents/?product=M-2196` |
| Horizontal overflow | None at 1440/768/390 |
| Minimum primary target | Desktop `46.84px`; Tablet/Mobile `44px` |
| FAQ | Six visible questions; one expanded proof |
| Structural counts | `3 scenarios / 4 categories / 6 FAQ` |
| Payload hash freeze | `12 files / 12 hashes recorded` |

## 6. SEO/GEO/Schema boundary

SEO/GEO/Schema V0.6 remains unchanged. No file entity, download action, Grade-to-file relationship or structured `potentialAction` is added. Persistent visual CTA does not override the later route/prefill release verification.

## 7. Historical disposition

| Historical set | Disposition |
|---|---|
| Content Architecture V0.7 | `HISTORICAL / SUPERSEDED_BY_SELECTOR_CTA_01` |
| Wireframe V0.5 | Same |
| Current Manifest V0.2 | `HISTORICAL / SUPERSEDED_AS_CURRENT_PACKAGE_ROOT` |
| Reader-focused V0.1 PNG assets | `HISTORICAL / PRESERVED` |
| Earlier Gate 2/3 packages | Prior recorded dispositions retained |

No historical file is overwritten or deleted.

## 8. Gate authority matrix

| Gate / package | Status |
|---|---|
| Gate 0 | Retained |
| Gate 1 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; not reopened |
| User selector decision | `CONFIRMED_FOR_TARGETED_REVISION` |
| Current Gate 2/3 package | `APPROVED / CLOSED` |
| Gate 4 | `AUTHORIZED / IN_PROGRESS` |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 6+ | `NOT_AUTHORIZED` |

## 9. Open items

| ID | Item | State |
|---|---|---|
| DOC-SCTA-O01 | Project-control review of revised module order and CTA states | `PASS` |
| DOC-SCTA-O02 | Project-control review of new assets and validation | `PASS` |
| DOC-SCTA-O03 | User approval of complete Gate 3 candidate | `APPROVED` on 2026-09-02 |
| DOC-SCTA-O04 | Gate 4 authorization | `AUTHORIZED / IN_PROGRESS` |

## 10. Stop condition

This V0.3 package is `APPROVED / CLOSED` at Gate 3. Gate 4 is authorized and in progress. Gate 5, child Document pages, development, D16 access, code, testing, deployment, publication, DNS and indexing remain unauthorized.
