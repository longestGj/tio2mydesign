# HOME-001 Gate 9 Current Implementation Manifest V0.2

## 1. Governance

| Field | Value |
|---|---|
| Page | `HOME-001` |
| Route | `/` |
| Review ID | `HOME-001-G9-ROQA-02` |
| Parent review | `HOME-001-G9-ROQA-01` |
| Review date | `2026-09-04` |
| Status | `READ_ONLY_QA_APPROVED / PROJECT_CONTROL_REVIEW_PASS` |
| Gate 9 disposition | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Project-control closure | `CLOSED` |
| Project-control decision date | `2026-09-04` |
| Gate 10 | `LOCKED / NOT AUTHORIZED` |
| D16 modification by this review | None; read-only inspection and verification only |

This V0.2 Manifest supersedes V0.1 as the current Gate 9 baseline. V0.1 remains historical evidence of the conditional return. Project control closed `HOME-001-G9-ROQA-02`; this closure does not authorize release.

## 2. Implementation lock

| Field | Value |
|---|---|
| Repository | `D:\16Wordpress_nextjs` |
| Worktree | `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` |
| Branch | `codex/home-001-tio2-my` |
| Reviewed HEAD | `616193f3dbf059f0e081c8d59119c008ba2b848b` |
| Commit subject | `fix: address Home and Markets gate 9 findings` |
| Parent reviewed HEAD | `49289d40fdb0b91d28f534776464403883d912ff` |
| Worktree status after verification | Clean |

The commit also contains separately governed MARKET-000 and route-normalization changes. This Manifest evaluates only HOME-001 and shared behavior consumed by Home.

## 3. Unchanged approved authority

The authority set remains the Gate 7 package and its current shared dependencies:

- `pages/home/06_handoff/HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md`
- `pages/home/06_handoff/HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.2.md`
- `pages/home/06_handoff/HOME-001_GATE7_MANIFEST_V0.2.md`
- `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`
- `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`
- `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`

The targeted commit did not modify the Home content JSON, metadata implementation, JSON-LD implementation, production Logo SVGs or Global Chrome component/styles.

## 4. Current HOME-001 implementation payload

All paths are relative to the reviewed D16 worktree.

| Path | Bytes | SHA-256 |
|---|---:|---|
| `components/sites/tio2-my/homepage/malaysia-homepage.module.css` | 13,434 | `70335D1E584E24988E342D71D97D1E996ED275FFFB5540F50C57F8DE52381C24` |
| `components/sites/tio2-my/homepage/malaysia-homepage.tsx` | 9,848 | `D169AC996396FE025D423D4937A8AF35E51232B793E218BF2FEAF6AB84D14A67` |
| `components/sites/tio2-my/homepage/responsive-product-groups.tsx` | 1,198 | `A38C7CEFAF375E421CAEED19F5848B2B67D2ABF29C6E6DD54F729BB6B3C3C285` |
| `wordpress/plugins/tio2-site-model/config/tio2-my-homepage.json` | 14,940 | `40DCB80476B53C50FB15A72853FD03D1049A2F15B20748D2C081B7CF19AAB442` |
| `lib/seo/homepage-metadata.ts` | 2,207 | `214953D931381323760E5C49E9493D9DE3510F583D9D98578B9737BA6CED7D8A` |
| `lib/seo/homepage-jsonld.ts` | 4,145 | `2E6F81AC8C3CC68A408CCCA73197610ED3A247299C55C3026B01869E73D738CA` |
| `components/sites/tio2-my/malaysia-global-chrome.tsx` | 6,247 | `9FBF325C900176E6C97079C164BDAE8DE7C58C73F968FA3FABAF4F1FB8C6310B` |
| `components/sites/tio2-my/malaysia-global-chrome.module.css` | 5,016 | `A5CD8700C8C7CF00AAE3BA1C9567C221F98F9091485D2938A7EA366F32236D9B` |

## 5. Exact-width implementation visual evidence

These files are committed under `docs/verification/home-market-g9-targeted-2026-09-04/` in the reviewed worktree. Dimensions and hashes were independently recalculated.

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `home-001-1440.png` | 1440×5767 | 626,041 | `613E7C3CB2B53CF28F90DDC5B49E37F4F784484E71D5EE408EF28FEDDE5EC9E6` |
| `home-001-1024.png` | 1024×6580 | 385,428 | `7BD97F51DB52C085404E34DDE8911954664076BA732CC26B81176287B642DA9E` |
| `home-001-768.png` | 768×7423 | 394,117 | `12F2473AC42B28A39367AEAA7B47C374900C694AD131CCE59934DED9D63EE353` |
| `home-001-390.png` | 390×8629 | 325,500 | `DF2A1F676A740533A83C16696A2212EC50B0A1280394217D0487E051AC626014` |
| `home-001-320.png` | 320×9326 | 326,135 | `8796C6AF639DD12DCBD4FBCED7BBFBAE936BEE44C0898EF8AA2F76EACB1B222A` |
| `home-001-mobile-menu-390.png` | 390×844 | 35,302 | `03F71E95CDFC92E253543281F5F116673B48B3A214593700A07448710359640D` |
| `home-001-products-expanded-390.png` | 374×1664 crop | 54,772 | `4E34823855BBC539F59BF37ED9123031AEB79F6C1CC303FB5EF24CD898BBFC78` |

## 6. Independent re-review evidence

| Evidence | Path / result |
|---|---|
| Browser audit JSON | `pages/home/07_qa/evidence-rereview-v0.2/home-001-g9-rereview-browser-audit-v0.2.json` |
| Independent diagnostic screenshots | `pages/home/07_qa/evidence-rereview-v0.2/` |
| Focused Vitest | 9 files / 53 tests PASS |
| TypeScript | PASS |
| Targeted ESLint | PASS, 0 errors |
| Malaysia production build | PASS, 35 routes |
| HOME + shared navigation Playwright | 15/15 PASS |
| Independent Axe sweep | 0 violations at 320/390/768/1024/1440 |
| Horizontal overflow | 0 at all five widths |
| D16 worktree | Clean after all checks |

## 7. Finding disposition

| Finding | V0.2 result |
|---|---|
| Home color contrast | `VERIFIED_FIXED` |
| Mobile default Product discovery | `VERIFIED_FIXED` |
| H1 and section spacing | `VERIFIED_FIXED` |
| Mobile disclosure ARIA and keyboard | `VERIFIED_FIXED` |
| Home SEO/GEO/Schema and content freeze | `NO_REGRESSION` |
| Shared Chrome / fixed RFQ behavior | `NO_REGRESSION` |
| Tablet `Start Here` authority conflict | `USER_DECISION_REQUIRED / IMPLEMENTATION_UNCHANGED` |
| Downstream 404/500 and RFQ receiver | `EXTERNAL_OWNER / RELEASE_BLOCKER` |
| Unrelated or environment-dependent broader-suite failures | `EXTERNAL OWNER / NOT A HOME DEFECT` |

## 8. Manifest conclusion

The Home-owned targeted return items are verified fixed at the locked commit. Project control accepted and closed `HOME-001-G9-ROQA-02`; lifecycle is `READ_ONLY_QA_APPROVED` and disposition is `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`. Gate 10 remains locked.
