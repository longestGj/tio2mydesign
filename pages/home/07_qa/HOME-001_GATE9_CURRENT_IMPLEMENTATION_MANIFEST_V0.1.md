# HOME-001 Gate 9 Current Implementation Manifest V0.1

## 1. Governance

| Field | Value |
|---|---|
| Page | `HOME-001` |
| Route | `/` |
| Review ID | `HOME-001-G9-ROQA-01` |
| Review date | `2026-09-04` |
| Status | `READ_ONLY_QA_IN_REVIEW / PROJECT_CONTROL_REVIEW_ACCEPTED` |
| Project-control disposition | `CONDITIONAL_RETURN / TARGETED_REVISION_REQUIRED / NOT_APPROVED` |
| Project-control decision date | `2026-09-04` |
| Closure state | `OPEN / NOT_APPROVED` |
| Gate 10 | `LOCKED / NOT AUTHORIZED` |
| External source modification | None; the reviewed worktree remained clean |

This Manifest records the implementation actually reviewed. It does not replace the approved Gate 7 authority, approve the implementation, authorize deployment, or authorize indexing.

## 2. Implementation lock

| Field | Value |
|---|---|
| Repository | `D:\16Wordpress_nextjs` |
| Worktree | `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` |
| Branch | `codex/home-001-tio2-my` |
| Reviewed HEAD | `49289d40fdb0b91d28f534776464403883d912ff` |
| HEAD date | `2026-09-04T07:42:25+08:00` |
| HEAD subject | `fix: address sample request gate 9 findings` |
| HOME-001 implementation commit | `b27c6433c0a3cd775afb9a30c70486890c37414b` |
| Current Home/Chrome follow-up commits | `acf2d02441f6d9ede7ed94c2eadd90448752a764`, `2a23d34f28cae676f99bfd2a1a162e26907ad2b5`, `be94db980133cc27c05dfff892e1e185a617dac3` |
| Worktree status after verification | Clean |

The HEAD contains later site-wide work. This review therefore binds both the original Home implementation commit and the exact current file hashes below.

## 3. Approved authority inputs

| Path | Bytes | SHA-256 |
|---|---:|---|
| `pages/home/06_handoff/HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md` | 28,386 | `49B34C52B5B761C0A66190A55329CDB7717097E81638491E11DA88DD3212DB4F` |
| `pages/home/06_handoff/HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.2.md` | 4,817 | `E5801B380EB22211978768B0DE97EE778847A56B496F1AE81FAC60B447BEEA41` |
| `pages/home/06_handoff/HOME-001_GATE7_MANIFEST_V0.2.md` | 8,229 | `E4CF1C5178B0B2C750C69441A2BAF71ED49F062B1187B4144CF39916D5D8647C` |
| `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | 11,649 | `C76EFDA95E797B80BB2B4E34095B6E002C51ADEF2A936CDEF349A33D192657C1` |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | 7,235 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` |
| `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | 8,090 | `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894` |

### Visual comparison inputs

| View | Path | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| Desktop | `pages/home/04_planning/visual-designs/homepage-full-visual-pc-clean-v0.8.png` | 1440×5683 | 840,463 | `DB34764C15A1F8F2197DDE019FDFD4F6FC90C6E85A4023CF5B76657929ABA117` |
| Mobile | `pages/home/04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.2.png` | 390×8884 | 366,200 | `4ECE62FA2E3ACDEE65CE983D80D5AEF3E294FED9F2593B2B1960A2524E78BB49` |
| Tablet 768 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.2.png` | 768×6844 | 444,731 | `E642EA33FD0755884529AB35E3A80062A7F44F8A9D31E209F271176CCC5EA357` |
| Tablet 1024 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.2.png` | 1024×5220 | 448,760 | `F81110344F7946185504D7A5D37E50CA0AC1E4DF72826F67F40EC528E8E3897C` |

## 4. Current implementation payload

All paths in this table are relative to `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my`.

| Path | Bytes | SHA-256 | Last modifying commit |
|---|---:|---|---|
| `app/page.tsx` | 1,495 | `07F9339852C7035BC5A9E9E6E3529FCA052E9410520EEDE6CF4967DAE45327E0` | `b8e06608df1b2c844c1da6358aab5f0ecf9b4ab8` |
| `components/homepage/homepage-renderer.tsx` | 3,238 | `2AB64EE72DDDE79072999984CAAB1131A470B94C66FA03E3D3A7E624D6858A68` | `b27c6433c0a3cd775afb9a30c70486890c37414b` |
| `components/sites/tio2-my/homepage/malaysia-homepage.tsx` | 9,337 | `A6EAE508C3DB2861EB0D1BF9A6E04AD40DA26F369E3750084909F3A8AC7909BE` | `2a23d34f28cae676f99bfd2a1a162e26907ad2b5` |
| `components/sites/tio2-my/homepage/malaysia-homepage.module.css` | 11,887 | `B8E38F5C6020BEB0E635E9768CA15EAE4C7DA675ABCB6B01393F0609885009D9` | `2a23d34f28cae676f99bfd2a1a162e26907ad2b5` |
| `components/sites/tio2-my/homepage/responsive-product-groups.tsx` | 1,081 | `624162FEAF5B2E76A1720E420FF21FF1BABF8AA01AACE4CEF422EED4AB02382E` | `b27c6433c0a3cd775afb9a30c70486890c37414b` |
| `components/sites/tio2-my/malaysia-global-chrome.tsx` | 6,247 | `9FBF325C900176E6C97079C164BDAE8DE7C58C73F968FA3FABAF4F1FB8C6310B` | `8f206f676466b0e1ab3804e502a336c09a1c52e2` |
| `components/sites/tio2-my/malaysia-global-chrome.module.css` | 5,016 | `A5CD8700C8C7CF00AAE3BA1C9567C221F98F9091485D2938A7EA366F32236D9B` | `4bc29d44ca98f69e95a2ff85294759e30289d445` |
| `lib/wordpress/homepage-v04-dto.ts` | 3,652 | `D4202617D235CCF24027DDEE8ABD0722C6C5D30A3777FDB5BCFA994F01C4633E` | `acf2d02441f6d9ede7ed94c2eadd90448752a764` |
| `lib/wordpress/homepage-v04-queries.ts` | 1,298 | `BDB19B379E269C109BEBF7E8009A438BB85D26725497452371E0A1CE38539367` | `b27c6433c0a3cd775afb9a30c70486890c37414b` |
| `lib/wordpress/homepage-v04-types.ts` | 1,096 | `76470753B5B6A4725C045BD28C908EDDBF56BC43B27808BAB7919F4EED09748D` | `acf2d02441f6d9ede7ed94c2eadd90448752a764` |
| `lib/seo/homepage-metadata.ts` | 2,207 | `214953D931381323760E5C49E9493D9DE3510F583D9D98578B9737BA6CED7D8A` | `9cb0f32a4f513e9237fb27724331a138da9ccb9b` |
| `lib/seo/homepage-jsonld.ts` | 4,145 | `2E6F81AC8C3CC68A408CCCA73197610ED3A247299C55C3026B01869E73D738CA` | `b27c6433c0a3cd775afb9a30c70486890c37414b` |
| `wordpress/plugins/tio2-site-model/config/tio2-my-homepage.json` | 14,940 | `40DCB80476B53C50FB15A72853FD03D1049A2F15B20748D2C081B7CF19AAB442` | `be94db980133cc27c05dfff892e1e185a617dac3` |
| `wordpress/plugins/tio2-site-model/config/tio2-my-global-chrome.json` | 2,482 | `69CF01751EE949DE75837DB43826A72AAEEF72BF0ED90D6C3E742D28C1077FC2` | `4bc29d44ca98f69e95a2ff85294759e30289d445` |
| `public/tio2-my/homepage-hero-material-reference.png` | 1,915,067 | `7308472E4E633584FE4D7761AFD7ED9EA4EA4C622576E2D7736C105F13CF50A5` | `b27c6433c0a3cd775afb9a30c70486890c37414b` |
| `public/tio2-my/brand/tio2-malaysia-primary-horizontal-v0.1.svg` | 4,342 | `EEED3A758E7AE1B847238D1C88E86EEE7A8E67B863969AF4D286747E9A72487C` | `acf2d02441f6d9ede7ed94c2eadd90448752a764` |
| `public/tio2-my/brand/tio2-malaysia-reverse-monochrome-v0.1.svg` | 2,725 | `7CFAEAFA02AC8469A006C9489DB2F92B15B2621E4151B04EFE1B30FC734C1B5E` | `acf2d02441f6d9ede7ed94c2eadd90448752a764` |

The two Logo hashes match the production Logo Manifest. The hero material image hash matches the Gate 7 visual asset, but its production-use clearance remains an explicit release blocker.

## 5. Fresh browser evidence

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `evidence/home-001-gate9-1440px.png` | 1440×6247 | 628,624 | `4DFB5E011659D408B19FA092BD7F8C78C21E0FBBAC984DF04BCA73C726F5A405` |
| `evidence/home-001-gate9-1024px.png` | 1024×6740 | 385,123 | `6A070EA16F1157CF63991AD6FA044F4F720090BC1CB9C3CF855BAEF61D28E506` |
| `evidence/home-001-gate9-768px.png` | 768×7593 | 390,108 | `10A9A501CE626E81670988056BFCDC91B8579072678905BF0979A4482782D84E` |
| `evidence/home-001-gate9-390px.png` | 390×7602 | 284,395 | `11EF3CB5860AA964DFB56780B7D48471311CAF76ED959C003FDD366992E44EC5` |
| `evidence/home-001-gate9-320px.png` | 320×8396 | 286,351 | `C964179DC7A20940E085FFB1648AC2394515FEEB40AEB92046821EB23F4CDC04` |
| `evidence/home-001-gate9-390px-menu-open.png` | 390×844 | 35,299 | `FB288EA58BB78AA9FEC1A40C430C58CAA138C23BF597A5D0C882881414E13FCF` |
| `evidence/home-001-gate9-390px-products-expanded.png` | 390×8585 | 318,751 | `986EE2949F738F254F80AD26CFF717CB91322D9A36B27D902E7471172B81800D` |
| `evidence/home-001-gate9-browser-audit-v0.1.json` | n/a | 214,882 | `AA16F8DA735AA7260BF754044BC44D684F1C9BC0CF1911FACC63B8F48CE498A5` |

## 6. Project-control disposition and responsibility split

Project control accepted `HOME-001-G9-ROQA-01` as `CONDITIONAL_RETURN / TARGETED_REVISION_REQUIRED / NOT_APPROVED`. The page lifecycle remains `READ_ONLY_QA_IN_REVIEW`; this implementation is not an approved Gate 9 baseline.

| Responsibility | Required handling |
|---|---|
| Home owner / external developer | Fix color contrast; make the four Mobile Product group names and `6/5/2/1` counts visible in the default state; align H1 and section spacing to the approved baseline; provide fresh 1440/1024/768/390/320, Axe and screenshot evidence. |
| Downstream page / RFQ / release owners | Resolve buyer-target 404/500 routes, RFQ receiver readiness and downstream-page readiness. These remain release dependencies; Home must not create child pages, change approved URLs or use cross-`site_scope` fallback. |
| User / project control | Resolve the Tablet `Start Here` conflict between the written contract and V0.2 visual evidence. The current implementation remains unchanged until that decision is recorded. Status: `USER_DECISION_REQUIRED`. |
| Relevant repository owners | Triage broader-suite failures that are unrelated to Home or depend on missing local environment. They are recorded as repository evidence and must not be relabelled as Home page defects. |

Gate 10, deployment, public indexing and release remain locked and unauthorized.
