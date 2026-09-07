# DOC-TDS Gate 4 Validation V0.1

## 1. Result

`DOC-TDS-G4-VALIDATION-01 = PASS`

Project-control result: `P0=0 / P1=0 / P2=0` for the submitted Gate 4 direction. Final Gate 4 approval remains with the user.

## 2. Automated verification

Command:

```text
node 99_workspace/DOC-TDS/gate4/test-doc-tds-gate4.mjs
```

Result:

```text
DOC-TDS Gate 4 Direction A visual, structural and responsive contract: PASS
```

Verified controls include:

- ten approved Buyer Clean modules;
- exactly three selectable document types and a non-selectable multi-document explainer;
- one prompt plus fourteen Grades;
- five FAQs, three Related Paths and four request steps;
- three synchronized primary request actions;
- approved production Header and Footer Brand Assets;
- Direct Answer `#031B3A`, primary CTA `#008078` and H1 `#062B5B` computed styles;
- no buyer-visible Gate 3 review strip or internal blocker vocabulary;
- no non-logo imagery;
- unique IDs for every imported anchor;
- multi-document + one-primary-Grade request-context behaviour;
- zero horizontal overflow at 1440, 768 and 390 logical px;
- minimum 44px interactive targets at Tablet and Mobile;
- mobile table-to-card transformation, Mobile Menu and three-state board.

## 3. Responsive defect and closure

Initial Direction A v2 visually exposed a 390px regression: the later visual CSS reset Hero, Direct Answer and Grade grids after the original responsive rules, producing two columns on Mobile.

The root cause was confirmed through computed `grid-template-columns`. Three failing regression assertions were added before the fix. The Direction A override now explicitly restores one-column grids inside its own `max-width:900px` block. Superdesign v3, all automated tests and new raster renders pass.

`DOC-TDS-G4-R01 = VERIFIED_FIXED / CLOSED`

## 4. Manual visual review

- Desktop: editorial hierarchy is clear; Hero decision key, Direct Answer band, selection cards, comparison table, process and footer form one coherent technical-document system.
- Tablet: single-column decision/context areas and compact table remain readable without horizontal overflow.
- Mobile: corrected single-column Hero, full-width CTAs, stacked decision cards, mobile comparison cards and vertical process preserve natural reading order.
- Mobile Menu: shared `Logo | RFQ | Menu` chrome and eight-item open state remain intact.
- Selection board: initial, one-document + Grade and multi-document/no-Grade states are clear and remain separate from Buyer Clean content.

## 5. Formal raster evidence

| Asset | Dimensions | SHA-256 |
|---|---:|---|
| `DOC-TDS_G4_DIRECTION_A_DESKTOP_1440_V0.1.png` | `1440×6262` | `8C6C843D3A3FDCD86754A2FE22773BB33FDEE1334B9CC556B9FB72B8B0A42349` |
| `DOC-TDS_G4_DIRECTION_A_TABLET_768_V0.1.png` | `768×8331` | `268106B789C31C9B21221803DC2E4522B12380D624528700599A1DCC64CB11D3` |
| `DOC-TDS_G4_DIRECTION_A_MOBILE_390_LOGICAL_2X_V0.1.png` | `780×21966` | `7077CBFC56E703FECD162CFA82799D6F2A893E422575EC11FF0366C599AAC43F` |
| `DOC-TDS_G4_DIRECTION_A_MOBILE_MENU_390_LOGICAL_2X_V0.1.png` | `780×22748` | `CDB9C87AD129CFBCA6337FB5AF36183E77E02B1DD19FF400116005E3E4AA9ABE` |
| `DOC-TDS_G4_DIRECTION_A_SELECTION_STATES_V0.1.png` | `1440×1017` | `FE1B1A6D62AB487436EEC2F425009AB96D54DCA7DDE3AD091C10A61DF1F71471` |

## 6. Source evidence

| File | SHA-256 |
|---|---|
| `99_workspace/DOC-TDS/gate4/superdesign/DOC-TDS_GATE4_DIRECTION_A_SUPERDESIGN_V0.1.html` | `33E6EE0903FD0F559B8745AD8C2254831C98DCF1D132C1E83A8EDD58AD5F0B89` |
| `99_workspace/DOC-TDS/gate4/test-doc-tds-gate4.mjs` | `3B53A9CBFF829714DA0ED05CA58E90AE77EC304F800E7FA9E600B4ABAF5F2BA1` |
| `99_workspace/DOC-TDS/gate4/render-doc-tds-gate4.mjs` | `2E98A012319A8740C02991B3A326A12D94B6F96D6D5D236418AAA5620C5F16E2` |

## 7. Boundary

The verification proves the Gate 4 direction and key states. It does not constitute Gate 5 approval, implementation, deployment, publication, DNS or indexing authorisation.
