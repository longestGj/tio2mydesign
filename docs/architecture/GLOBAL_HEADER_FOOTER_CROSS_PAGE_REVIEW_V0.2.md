# TiO2 Malaysia Global Fixed RFQ Cross-page Review V0.2

## 1. Document Control

| Field | Value |
|---|---|
| Review ID | `GHF-FIXED-RFQ-CROSS-01` |
| Version | V0.2 |
| Date | 2026-08-30 |
| Scope | Home、03 Product-detail Template、04 PRODUCT-000、05 MARKET-000、06 RES-000、07 APP-000 的 Global Chrome 固定 RFQ 视觉 |
| Authority | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` — `APPROVED_GLOBAL_CHROME_BASELINE` |
| Execution plan | `docs/superpowers/plans/2026-08-30-global-fixed-rfq-visual-revision.md` |
| Project-control decision | `PASS` |
| Current status | `APPROVED / CLOSED` |
| User approval date | 2026-08-30 |
| Development boundary | 不授权 Gate 6/7、子页、WordPress、Next.js、CMS、代码、测试、部署或发布 |

## 2. Decision

`GHF-FIXED-RFQ-CROSS-01 = APPROVED / CLOSED`。

Home 与 03–07 的当前 26 张正式视觉资产已统一满足：

- Desktop Header 固定显示 `Request a Quote`；
- Mobile Header 固定显示 RFQ；
- Mobile Menu 固定显示 `Request a Quote`；
- Desktop/Mobile Footer 固定显示 Conversion RFQ；
- route-safe、inventory=0、ItemList=0、S0 或其他资料受限状态不再关闭 Global Chrome RFQ；
- `RFQ_ROUTE_READY=false` 只形成 `RELEASE_BLOCKER`，不隐藏、不禁用、不改链 Contact；
- 当前正式 Buyer Clean 资产中没有 RFQ OFF、hidden、disabled、empty slot 或 Contact fallback；
- 页面正文、页面身份、关键词、关系矩阵、route、localization、freshness 与证据门禁未被本次全局组件修订改变。

用户已于 2026-08-30 明确批准 Home 与 03–07 全站固定 RFQ 视觉包。该批准仅关闭固定 RFQ 视觉审查，不等于开发、交付或发布授权。

## 3. Current Version Set

| Page family | Current specification | Current visual version | Asset count | Review item | Project-control status |
|---|---|---:|---:|---|---|
| Home | `05_homepage_full_visual_design_v0.5.md` + `07_global_header_footer_component_states_v0.2.md` | V0.5 / shared V0.2 | 5 | `GHF-FIXED-RFQ-HOME-01` | APPROVED / CLOSED |
| 03 Product-detail Template | `05_Product_Page_Global_Chrome_Addendum_V0.2.md` | V0.2 | 3 | `GHF-FIXED-RFQ-DETAIL-01` | APPROVED / CLOSED |
| 04 PRODUCT-000 | `PRODUCT-000_FULL_VISUAL_DESIGN_V0.5.md` | V0.9 | 5 | `GHF-FIXED-RFQ-PRODUCT-01` | APPROVED / CLOSED |
| 05 MARKET-000 | `MARKET-000_FULL_VISUAL_DESIGN_V0.3.md` | V0.4 / states V0.3 | 5 | `GHF-FIXED-RFQ-MARKET-01` | APPROVED / CLOSED |
| 06 RES-000 | `RES-000_FULL_VISUAL_DESIGN_V0.3.md` | V0.3 | 3 | `GHF-FIXED-RFQ-RES-01` | APPROVED / CLOSED |
| 07 APP-000 | `APP-000_FULL_VISUAL_DESIGN_V0.5.md` | V0.5 | 5 | `GHF-FIXED-RFQ-APP-01` | APPROVED / CLOSED |

Total current formal assets: **26 PNG**.

## 4. Formal Asset Manifest

| Page | Asset | Dimensions | SHA-256 |
|---|---|---:|---|
| Home | `homepage-full-visual-pc-clean-v0.5.png` | 1440×6076 | `0651869AFE9630431A4ED0488BDAE3731C53A93B92E5D9633865F97A6E81D503` |
| Home | `homepage-full-visual-mobile-clean-v0.5.png` | 390×7224 | `7BD628EF4A405F62C0AE0891AB0CADF55F515EE18C02FB7A2E7FDD9E514AFF43` |
| Home | `homepage-mobile-menu-open-v0.5.png` | 390×844 | `80F9CD9EA93D6F96959EAD8366ADD155ED2080354D375DA9D5932620903FA243` |
| Home | `GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` | 1440×1380 | `1FAE58F723D43BF804A81A11BA8EDF4FB79142F5236FB5185DEEA384FD284FC2` |
| Home | `GLOBAL_CHROME_MOBILE_STATES_V0.2.png` | 390×1690 | `4F573E7CAF7ACB587E1EE76797F9C6C32817A0BE10CD4B1205D77D1B809CF724` |
| 03 Detail | `PRODUCT_DETAIL_TEMPLATE_DESKTOP_V0.2.png` | 1440×6202 | `AFBC6349D01359A2852F9E2F8F2520D0A22D66601279A12614E3C284F0F177EA` |
| 03 Detail | `PRODUCT_DETAIL_TEMPLATE_MOBILE_390_V0.2.png` | 390×9994 | `1D95B56045ECD03148BDC1EF11870958D8A72CCEE9E4160B4C3BE132B0702EE4` |
| 03 Detail | `PRODUCT_DETAIL_TEMPLATE_MENU_STATES_V0.2.png` | 390×1760 | `8C5A438DE0BFC3F04A032B82871B1A0053833B63E2FD39C4DC482A07C96E2CEE` |
| 04 PRODUCT | `PRODUCT-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.9.png` | 1440×5538 | `DDD226AFFCBA60EE926D49A4FBEE040CA77D85DC22E7456F68F20791A427E14B` |
| 04 PRODUCT | `PRODUCT-000_G5_DESKTOP_ROUTE_SAFE_REVERSE_V0.9.png` | 1440×4201 | `186118B0792BC5D8E9358740C851BEAC6BE1DD6EE6AF9CF44CE26FE892FE2155` |
| 04 PRODUCT | `PRODUCT-000_G5_MOBILE_FULL_ROUTE_REVERSE_V0.9.png` | 780×11939 | `A04EFA8E1B1530093ADFADDFD71EBF5A6D3C7861A62FCA417E4D1A45F5A7B859` |
| 04 PRODUCT | `PRODUCT-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.9.png` | 780×8490 | `816FAC85D18C1FA46EE85E3B9E454E50F7EDCB901AD45158055C89F141FEEE5F` |
| 04 PRODUCT | `PRODUCT-000_G5_GLOBAL_CHROME_STATES_V0.9.png` | 1536×2750 | `2A0A42ACDAB10076DE9FABCAD839FA394FAA419DF0ABE43B080565480DAFD9B8` |
| 05 MARKET | `MARKET-000_G5_DESKTOP_S0_ROUTE_SAFE_BUYER_CLEAN_V0.4.png` | 1440×4944 | `9AB1550E4552A8D7D0B16294F91B8925C278B2949CE7F749ADD66716B308507C` |
| 05 MARKET | `MARKET-000_G5_DESKTOP_S6_FULL_EN_BUYER_CLEAN_V0.4.png` | 1440×5314 | `C9DDC04926727E308EE0E0ECD4EC03C6A26132D9C3E1896D47F7135F945169E3` |
| 05 MARKET | `MARKET-000_G5_MOBILE_390_S0_ROUTE_SAFE_BUYER_CLEAN_V0.4.png` | 780×15318 | `823980F55DA67A7397C4E71276A05F39C6120764A644DD509385A47E488D90E4` |
| 05 MARKET | `MARKET-000_G5_MOBILE_390_S6_FULL_EN_BUYER_CLEAN_V0.4.png` | 780×18304 | `0170F3B64872A7EEAF0FFE91DDD14F096E6514112FC50AD025DD2CED750730AB` |
| 05 MARKET | `MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.3.png` | 1600×2600 | `F30A940FD05C4111A61ACDFDC88DF68801B463DB80566A8B9A560707F6D71B53` |
| 06 RES | `RES-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.3.png` | 1440×4425 | `0EA5678992BFFB85CBDA05A3960EBFF143D46CF8E760474852348F39C7F73C57` |
| 06 RES | `RES-000_G5_MOBILE_390_ROUTE_SAFE_BUYER_CLEAN_V0.3.png` | 780×12930 | `FDC01013A08DE56D4E1237DD0D57C7D16A8D520F60CBE924819009A9BF9A2815` |
| 06 RES | `RES-000_G5_MOBILE_390_MENU_OPEN_V0.3.png` | 780×1040 | `00CE315C8255A19609CED43464248B2CC077106DA0BD3FBF234B561CF1E880D2` |
| 07 APP | `APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.5.png` | 1440×6133 | `DD82F467AC278058A1922136ABF4E574E94136CEB9949BFA7DB8B1A748400011` |
| 07 APP | `APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.5.png` | 1440×5077 | `CD106432CE8AD182A9E563CC00413DC7B6071E91ED91AADC91B724E1E708E128` |
| 07 APP | `APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.5.png` | 780×18864 | `C3E70EB8F0D0489455011530057366EC0A5678EC7F72306D1EBC3D7029A1CA99` |
| 07 APP | `APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.5.png` | 780×15014 | `5C929AE423A61D30059A1D58E8E1370ADAA66CE427165D7D15CB2835E16D44F8` |
| 07 APP | `APP-000_G5_GLOBAL_CHROME_STATES_V0.5.png` | 1600×1740 | `65EA436635E0D2C55C18AED31D55A6019972F3D41E370B5246C5AF225D15D876` |

## 5. Cross-page Visual Review

### 5.1 Header and Current State

- Desktop Header maintains the approved 84px geometry and common horizontal Logo source.
- Mobile Header maintains the 64px logical geometry and `Logo | RFQ | Menu` order.
- Navigation order is consistently `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Current-page state remains structural: Bold + `CURRENT` + Teal underline or left marker.
- Home, Products, Markets, Resources and Applications current states were inspected in their respective boards and complete-page assets.

### 5.2 RFQ Coverage

| Surface | Result |
|---|---|
| Desktop Header | PASS — fixed across all page families and route states |
| Mobile Header | PASS — fixed RFQ control visible |
| Mobile Menu | PASS — terminal `Request a Quote` row visible |
| Desktop Footer | PASS — fixed Conversion RFQ |
| Mobile Footer | PASS — fixed Conversion RFQ |
| Hover / focus | PASS — terminal CTA states use common Teal and visible focus outline |
| Route failure rule | PASS — internal `RELEASE_BLOCKER`; public visibility unchanged |
| Contact fallback | PASS — absent |
| Public RFQ OFF state | PASS — absent from current manifests |

### 5.3 Footer

- All page families use the approved Deep Navy Footer.
- Brand, Explore, Information, Conversion and copyright hierarchy is consistent.
- Footer RFQ belongs to the global/terminal Teal solid tier.
- No page-specific anchor, internal governance note, empty conversion column or Contact fallback appears in the current Buyer Clean Footer.

### 5.4 Responsive and Accessibility

- Desktop complete pages and 390px logical mobile pages were inspected at original detail.
- Mobile RFQ, Menu and menu rows meet the documented 44px logical minimum.
- No visible horizontal overflow, Header collision, Footer crop or abnormal closing gap was found.
- Focus is represented by outline plus color, not color alone.
- Current page state is expressed by text/weight/structure, not color alone.

## 6. Protected-content Verification

| Page family | Protected comparison | Result |
|---|---:|---|
| Home | 3 complete/menu assets V0.4→V0.5 | PASS — identical dimensions and SHA-256 |
| 03 Detail Template | 2 complete pages V0.1→V0.2 | PASS — identical dimensions and SHA-256 |
| 04 PRODUCT-000 | 4 protected body rectangles V0.8→V0.9 | PASS — RAW hashes equal |
| 05 MARKET-000 | 4 protected body rectangles V0.3→V0.4 | PASS — RAW hashes equal |
| 06 RES-000 | 2 protected body rectangles V0.2→V0.3 | PASS — RAW hashes equal |
| 07 APP-000 | 4 protected body rectangles V0.4→V0.5 | PASS — RAW hashes equal |

Total protected comparisons: **19 PASS / 0 FAIL**.

## 7. Governance Boundaries Preserved

- PRODUCT V0.2.1 remains 84 rows: 25 `VERIFIED_FOR_PUBLIC_MAPPING`, 4 `CONFLICT_HOLD`, 55 `NO_PUBLIC_MAPPING`.
- M-2377 Application/Process relationships remain `DO_NOT_RENDER`; `R-M2377-TDS` remains open.
- M-996/M-2196 retain only base Coatings/Sulfate mappings; differentiation, ranking, selection rationale, equivalence and substitution remain frozen.
- MARKET 22 routes remain `NOT_VERIFIED_LIVE`; PT-BR remains `LOCALIZATION_HOLD / DO_NOT_RENDER`; Trade freshness remains closed.
- RES inventory=0 and ItemList=0 remain; Resources route/freshness/official-source boundaries remain.
- APP-000 remains `NO_PRIMARY_KEYWORD`; five child-page keyword ownership boundaries remain unchanged.
- No child page, Gate 6/7, development artifact or operation in `D:\16Wordpress_nextjs` was authorized or created.

## 8. User Approval Point

The current visual review set received the unified user decision on 2026-08-30:

`Approved Home and 03–07 Global Fixed RFQ Visual Set`

Completed approval actions:

- close `GHF-FIXED-RFQ-HOME-01`;
- close `GHF-FIXED-RFQ-DETAIL-01`;
- close `GHF-FIXED-RFQ-PRODUCT-01`;
- close `GHF-FIXED-RFQ-MARKET-01`;
- close `GHF-FIXED-RFQ-RES-01`;
- close `GHF-FIXED-RFQ-APP-01`;
- close `GHF-FIXED-RFQ-CROSS-01`;
- stop all page tasks at the visual endpoint.

Approval does not authorize development, child pages, Gate 6/7, handoff or publication.

## 9. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Reviewed the prior conditional Global Chrome set | Historical review baseline |
| V0.2 | 2026-08-30 | Reviewed 26 current fixed-RFQ assets, 19 protected comparisons, responsive/accessibility behavior and unchanged governance gates; user approved the unified set | `APPROVED / CLOSED` |
