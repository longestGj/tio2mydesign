# PRODUCT-000 Full Visual Design V0.5

## 1. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Version | `V0.5` |
| Date | `2026-08-30` |
| Review ID | `GHF-FIXED-RFQ-PRODUCT-01` |
| Current status | `APPROVED / CLOSED` |
| Authority | `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` / `APPROVED_GLOBAL_CHROME_BASELINE` |
| Shared visual input | Home Task 2 V0.2 / `PROJECT_CONTROL_REVIEW_PASS / SHARED_FIXED_RFQ_BASELINE_FOR_TASKS_3_7` |
| Existing page-body status | `APPROVED_GATE_5_BASELINE` — unchanged |
| Page lifecycle | `DESIGN_IN_REVIEW` — unchanged |
| Current revision scope | Global Header, Mobile Header, Mobile Menu and Footer RFQ visibility only |
| User approval | Granted `2026-08-30` as part of the unified Home and Tasks 03–07 fixed-RFQ visual-package approval |
| Hard stop | No Gate 6/7, development handoff, Process/Grade child pages or operation in `D:\16Wordpress_nextjs` |

`GHF-FIXED-RFQ-PRODUCT-01` closes only the separate Global Chrome review. The approval does not reopen or alter the approved PRODUCT-000 Gate 5 Buyer Clean body, PRODUCT V0.2.1 relationship baseline, SEO/GEO content, route-safe body behavior or technical evidence gates.

## 2. Fixed Global RFQ Contract

Public Global Chrome uses the constant:

`RFQ_VISIBILITY = ALWAYS_VISIBLE`

| Surface | Full-route | Route-safe |
|---|---|---|
| Desktop Header | Fixed `Request a Quote` | Fixed `Request a Quote` |
| Mobile Header | Fixed `RFQ` | Fixed `RFQ` |
| Mobile Menu | Fixed terminal `Request a Quote` | Fixed terminal `Request a Quote` |
| Desktop Footer | Fixed Conversion CTA | Fixed Conversion CTA |
| Mobile Footer | Fixed terminal CTA | Fixed terminal CTA |

Route-safe continues to control only protected body modules and contextual actions. It cannot hide, disable, replace or reserve an empty slot for Global Chrome RFQ.

If the RFQ route or form is not ready, the only allowed internal state is:

`RFQ_ROUTE_READY=false = RELEASE_BLOCKER`

This blocks release without changing the public visual, disabling the CTA or linking to Contact.

## 3. Protected V0.8 Baseline

| State | Protected body height | Required RAW SHA-256 |
|---|---:|---|
| Desktop Full-route | 5044px | `4636B372FBCAA78BDBA6AFF2DF2339A06EA34A3E5D179AC47710EB5F40557F23` |
| Desktop Route-safe | 3707px | `720B623C8DF398A8A6197EE75EC799345F5199397B4AD02CCBA071E33F975C4F` |
| Mobile Full-route | 10755px | `92FEEC529828676A0D3A09E0586881A98E8D536EEC90750D9C6C3A5C54C330CD` |
| Mobile Route-safe | 7306px | `36E685C14B5BB4F75B8B0FB15413BD64CFF8506302D6613C8A442C389938F326` |

The complete V0.8 body pixels, module order, Buyer Clean copy, Selector states and relationship outputs are protected. Only Global Chrome and the resulting total canvas height may change.

## 4. Product and Evidence Gates

- The approved 25 neutral Application mappings and 13 Process classifications remain governed by PRODUCT V0.2.1.
- M-2377 remains absent from Application, Process and recommendation relationships; `R-M2377-TDS=OPEN_HARD_GATE` remains open.
- M-996 and M-2196 retain equal Coatings/Sulfate base relations.
- `M996_VS_M2196_DIFFERENTIATION_FROZEN` remains open; no comparison, ranking, selection reason, equivalence or substitute language is added.
- The 55 `NO_PUBLIC_MAPPING` rows remain non-rendering and are not described as unsuitable.
- No route-safe body module is unlocked by the fixed Global RFQ rule.

## 5. Review Gate

| Review ID | Scope | Current status | Closure condition |
|---|---|---|---|
| `GHF-FIXED-RFQ-PRODUCT-01` | Fixed RFQ in PRODUCT-000 Header, Mobile Header, Mobile Menu, Footer and current state board | `APPROVED / CLOSED` | Project control review passed; user approved the unified fixed-RFQ visual package on `2026-08-30`; V0.5/V0.9 is the formal PRODUCT-000 fixed-RFQ visual baseline |

This review item is user-approved and CLOSED. The approval is limited to the fixed-RFQ visual package and creates no Gate 6/7, child-page, development, handoff or publication authority.

## 6. Authoritative Shared Inputs

| Input | Bytes | SHA-256 | Consumption |
|---|---:|---|---|
| `D:\23MySec\pages\home\04_planning\07_global_header_footer_component_states_v0.2.md` | 5945 | `71D30EBC37EC3C2B0F1BAD2A2BBA79F07689DF72143B1CB998DF7A840D24EB3A` | Component behavior and public-state contract |
| `D:\23MySec\pages\home\04_planning\05_homepage_full_visual_design_v0.5.md` | 5883 | `E8B1BEDAA391B4F50A83AB67B05EDBDB41266A78479081800EF939BFA715C181` | Task 2 shared fixed-RFQ baseline record |
| `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` | 110683 | `1FAE58F723D43BF804A81A11BA8EDF4FB79142F5236FB5185DEEA384FD284FC2` | Desktop Header, terminal CTA interaction and Footer reference |
| `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_MOBILE_STATES_V0.2.png` | 60799 | `4F573E7CAF7ACB587E1EE76797F9C6C32817A0BE10CD4B1205D77D1B809CF724` | Mobile Header, Menu and Footer reference |
| `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` | 10605 | `1BFA99BE5B600412497B8BC18C83A7463D8B90C0EF51C7F8F1B292EF85905EA5` | Approved fixed-RFQ authority |
| `D:\23MySec\docs\superpowers\plans\2026-08-30-global-fixed-rfq-visual-revision.md` | 18349 | `9ABF175C8146A12CFAB4E4DDC40C7CCA88D57F826D6ACA072C5360389252B8EF` | Execution-plan Task 4 |
| `D:\23MySec\pages\products\01_research\PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` | 65998 | `AFF7785098FBDA31A560D028CB8E49D04A222BA8EAE88294C1285A8CD814FDC9` | Approved relationship and freeze baseline |

The Logo source remains the approved full transparent PNG at `D:\23MySec\brand\visual\ChatGPT Image 2026年8月29日 09_37_10 (1).png`: 2172×724px, SHA-256 `285E6F4F2FD2304EB102845242A2B7C20DC9E1AC2DB4D38541B1CDE44AC75DE5`. No tight-crop derivative is used.

## 7. V0.9 Formal Asset Manifest

These five files are the complete current PRODUCT-000 fixed-RFQ review set. V0.8 remains preserved as history and is not overwritten.

| File | Public/review state | Actual dimensions | Bytes | SHA-256 | Status |
|---|---|---:|---:|---|---|
| `assets/PRODUCT-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.9.png` | Desktop Full-route; fixed Header/Footer RFQ | 1440×5538 | 389153 | `DDD226AFFCBA60EE926D49A4FBEE040CA77D85DC22E7456F68F20791A427E14B` | `APPROVED / FIXED_RFQ_VISUAL_BASELINE` |
| `assets/PRODUCT-000_G5_DESKTOP_ROUTE_SAFE_REVERSE_V0.9.png` | Desktop Route-safe body; fixed Header/Footer RFQ | 1440×4201 | 289298 | `186118B0792BC5D8E9358740C851BEAC6BE1DD6EE6AF9CF44CE26FE892FE2155` | `APPROVED / FIXED_RFQ_VISUAL_BASELINE` |
| `assets/PRODUCT-000_G5_MOBILE_FULL_ROUTE_REVERSE_V0.9.png` | 390px logical at explicit 2×; Full-route; fixed Mobile Header/Footer RFQ | 780×11939 | 573595 | `A04EFA8E1B1530093ADFADDFD71EBF5A6D3C7861A62FCA417E4D1A45F5A7B859` | `APPROVED / FIXED_RFQ_VISUAL_BASELINE` |
| `assets/PRODUCT-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.9.png` | 390px logical at explicit 2×; Route-safe body; fixed Mobile Header/Footer RFQ | 780×8490 | 402562 | `816FAC85D18C1FA46EE85E3B9E454E50F7EDCB901AD45158055C89F141FEEE5F` | `APPROVED / FIXED_RFQ_VISUAL_BASELINE` |
| `assets/PRODUCT-000_G5_GLOBAL_CHROME_STATES_V0.9.png` | Products-current Header/Menu/Footer, hover/focus and internal release-blocker proof; not Buyer Facing | 1536×2750 | 216141 | `2A0A42ACDAB10076DE9FABCAD839FA394FAA419DF0ABE43B080565480DAFD9B8` | `APPROVED / FIXED_RFQ_VISUAL_BASELINE` |

The two Full-route files are byte-identical to their V0.8 sources because those states already contained the approved fixed Global RFQ. The two Route-safe files retain their V0.8 body regions but consume the same RFQ-visible Header/Footer as Full-route. The Mobile Route-safe canvas increases from 8354px to 8490px only because its prior RFQ-free Footer is replaced by the complete fixed-RFQ Mobile Footer.

## 8. Protected Body and Chrome Equality Proof

RAW SHA-256 is calculated over unscaled 32-bit ARGB pixel rows.

| State | Body rows | V0.8 required RAW SHA-256 | V0.9 actual RAW SHA-256 | Result |
|---|---:|---|---|---|
| Desktop Full-route | y=84, h=5044 | `4636B372FBCAA78BDBA6AFF2DF2339A06EA34A3E5D179AC47710EB5F40557F23` | `4636B372FBCAA78BDBA6AFF2DF2339A06EA34A3E5D179AC47710EB5F40557F23` | PASS — pixel-identical |
| Desktop Route-safe | y=84, h=3707 | `720B623C8DF398A8A6197EE75EC799345F5199397B4AD02CCBA071E33F975C4F` | `720B623C8DF398A8A6197EE75EC799345F5199397B4AD02CCBA071E33F975C4F` | PASS — pixel-identical |
| Mobile Full-route | y=128, h=10755 | `92FEEC529828676A0D3A09E0586881A98E8D536EEC90750D9C6C3A5C54C330CD` | `92FEEC529828676A0D3A09E0586881A98E8D536EEC90750D9C6C3A5C54C330CD` | PASS — pixel-identical |
| Mobile Route-safe | y=128, h=7306 | `36E685C14B5BB4F75B8B0FB15413BD64CFF8506302D6613C8A442C389938F326` | `36E685C14B5BB4F75B8B0FB15413BD64CFF8506302D6613C8A442C389938F326` | PASS — pixel-identical |

Chrome equality checks also pass:

| Equality check | RAW SHA-256 | Result |
|---|---|---|
| Desktop Full-route Header = Desktop Route-safe Header | `CC0BF8F9C5911F4E9E72A05C4300CD4694B9003BF4C036C1AFA6FBCC071AB8FA` | PASS |
| Desktop Full-route Footer = Desktop Route-safe Footer | `7C5668E1FBB57DAD8A445E93BB07AA6B7E3358E68076B992C5BFD40D8424F0A6` | PASS |
| Mobile Full-route Header = Mobile Route-safe Header | `D4E1B3072813C7F3E356FC309AF3033450DBF8CC109BB8C5E86CB9A5FE9519A7` | PASS |
| Mobile Full-route Footer = Mobile Route-safe Footer | `EED70AD0A501B76FF6154E8F1D1DC588EEBDF97183B17B548C2C8942C36458CB` | PASS |

Body preservation result: `4 PASS / 0 FAIL`. Full/route-safe Global Chrome equality result: `4 PASS / 0 FAIL`.

## 9. State and Responsive Acceptance

- Desktop Full-route and Route-safe both show the same `Request a Quote` terminal CTA in Header and Footer.
- Mobile Full-route and Route-safe both show the same compact `RFQ` action in the 64px logical Header and the same terminal `Request a Quote` action in the Footer.
- The state board shows the fixed Mobile Menu terminal CTA and a structural Products current state; it contains no public RFQ OFF, hidden, disabled or reserved-slot candidate.
- Default, hover and focus examples use the global/terminal action tier. Contextual RFQ inside the protected Product body retains the approved subordinate hierarchy.
- The release-blocker statement is confined to the Internal Review panel and does not appear in any Buyer Clean complete-page state.
- Original-detail inspection found no Header, Footer or Logo crop, no horizontal overflow at 390px logical width, no join overlap, no abnormal closing gap and no empty Global Chrome CTA slot.
- Route-safe still removes only its protected body modules with 0px closure. Fixed Footer RFQ does not create Process, Support or contextual RFQ content.

## 10. Relationship Baseline Revalidation

Fresh parsing of PRODUCT V0.2.1 produced:

| Control | Result |
|---|---|
| Matrix shape | 84 rows = 14 grades × 6 Applications |
| Public Application relations | 25 `VERIFIED_FOR_PUBLIC_MAPPING` |
| Held Application relations | 4 `CONFLICT_HOLD` |
| Non-public Application relations | 55 `NO_PUBLIC_MAPPING` |
| Public Process relations | 13 grades: 8 Chloride, 4 Sulfate, 1 CR-901 Vapor-phase oxidation |
| M-2377 | 6/6 Application rows and Process public behavior remain `DO_NOT_RENDER` |
| M-996/M-2196 | 12/12 rows retain `M996_VS_M2196_DIFFERENTIATION_FROZEN`; no comparison output is added |

The fixed Global RFQ change does not alter any entity relationship, recommendation, ranking, equivalence, selection rationale or SEO/GEO claim.

## 11. V0.9 Self-check

- [x] Five planned V0.9 assets exist and their actual dimensions match the Manifest.
- [x] Home Task 2 V0.2 shared state-board hashes were verified before consumption.
- [x] Full-route and Route-safe show fixed RFQ in Desktop/Mobile Header, Mobile Menu and Footer contracts.
- [x] Public RFQ OFF/hidden/disabled/empty-slot states are absent.
- [x] Products current is visible without relying only on color.
- [x] Same full transparent Logo PNG, common asset box and white Footer treatment are retained.
- [x] Four V0.8 body RAW hashes are unchanged.
- [x] PRODUCT V0.2.1 counts and M-2377/M-996/M-2196 gates are unchanged.
- [x] Four complete pages and the state board were inspected at original detail.
- [x] 390px logical Header, Footer closure and horizontal containment pass visual review.
- [x] Structured validation result is `34 PASS / 0 FAIL`.
- [x] V0.8 remains historical; no approved V0.8 asset was overwritten or deleted.
- [x] No Gate 6/7, child page, development handoff or `D:\16Wordpress_nextjs` operation occurred.

## 12. Version and Review Record

| Version | Date | Change | Governance status |
|---|---|---|---|
| V0.4 / assets V0.8 | 2026-08-30 | Corrected common Logo construction and retained prior conditional Global Chrome RFQ behavior | Historical approved page-body/chrome review input; retained, not overwritten |
| V0.5 / assets V0.9 | 2026-08-30 | Applied approved V0.2 fixed-RFQ Global Chrome to Full-route and Route-safe Desktop/Mobile; rebuilt Products-current state board; preserved four body regions and relationship gates | `GHF-FIXED-RFQ-PRODUCT-01 = APPROVED / CLOSED`; formal fixed-RFQ visual baseline |
| V0.5 self-validation | 2026-08-30 | Original-detail visual review plus structured asset, hash, chrome equality, Logo and PRODUCT V0.2.1 checks | `34 PASS / 0 FAIL`; pre-approval validation record |
| V0.5 / project-control review | 2026-08-30 | Project control independently verified the V0.5 specification, five V0.9 asset dimensions and SHA-256, four protected-body hashes, fixed-RFQ Global Chrome states, PRODUCT V0.2.1 and freeze boundaries, plus clean formatting | `PROJECT_CONTROL_REVIEW_PASS`; superseded as current review state by the subsequent user approval |
| V0.5 / unified user approval | 2026-08-30 | User approved the Home and Tasks 03–07 fixed-RFQ visual package as one unified baseline | `GHF-FIXED-RFQ-PRODUCT-01 = APPROVED / CLOSED`; no Gate 6/7, child-page, development, handoff or publication authority |

Task 4 stops at the approved visual endpoint. This version does not authorize Gate 6/7, development handoff, Process/Grade child pages, development, delivery or publication, or any operation in `D:\16Wordpress_nextjs`.
