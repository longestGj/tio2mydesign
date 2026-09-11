# Root Page Hero Seven-Page Approved Baseline Manifest V1.0

## Control

| Field | Value |
|---|---|
| Baseline ID | `ROOT-HERO-G4-7P-BASELINE-V1` |
| Parent workset | `ROOT-HERO-G4-7P-V1` |
| Status | `APPROVED / CLOSED` |
| Date | `2026-09-11` |
| Approval basis | `USER_STANDING_AUTHORITY + ROOT-HERO-G5-XPAGE-IVR-01-R2` |
| Required findings | `P0 0 / P1 0 / P2 0` |
| Open conditions | `0` |
| Gate 6 / Gate 8 | `NOT_STARTED / NOT_AUTHORIZED_BY_THIS_MANIFEST` |

This is the single approved additive baseline for the seven root-page Hero bindings. It does not supersede the pages' approved body, SEO/GEO, Schema, Global Chrome, route, implementation or release baselines. Each page's next authorized Gate consumes this manifest together with that page's existing current Manifest; no earlier page lifecycle or implementation status is rewritten here.

## Shared authority

| Item | Path | Bytes | SHA-256 |
|---|---|---:|---|
| Shared component specification | `docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md` | 13549 | `E309FA21993701C87A7600826E7F1AD98D53CF86A27F688E94FE429CF5BB9E6F` |
| Seven-page control | `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_CONTROL_V1.0.md` | 8268 | `70CF6DB3B665AB561C1E74897B68F85A8EB40580193EF7386435531A655863A2` |
| Final independent review | `docs/architecture/ROOT_HERO_G5_SEVEN_PAGE_CROSS_PAGE_INDEPENDENT_REVIEW_V1.2.md` | 3368 | `23F2A808AED429FA5B2FFDDAAFF02C3E7A16A19857761F00EF50D3671636CCDF` |
| Final machine evidence | `docs/architecture/ROOT_HERO_G5_SEVEN_PAGE_CROSS_PAGE_FINAL_RECHECK_EVIDENCE_V1.1.json` | 3203 | `9BD7E2C599931DC21E6BC10E7AF9F92C7E3720ED7EE2D277D5B7E48DFBB79458` |

## Approved page bindings

| Page | Binding | Binding SHA-256 | Candidate | Candidate SHA-256 |
|---|---|---|---|---|
| `HOME-001` | `pages/home/04_planning/HOME-001_ROOT_PAGE_HERO_GATE4_BINDING_V1.4.md` | `4A0B79441B24E8759A6A877032B82A8661F951F7BAB10280E6B34582B774577E` | `pages/home/04_planning/HOME-001_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.4.md` | `BA1CF901BC321226D55BEEFF63333411CE2EC7A29719CFCB206F90C7A4B46022` |
| `APP-000` | `pages/applications/04_planning/APP-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.1.md` | `2459EF9083BBE0591DDDB18E122F22871B9EE7A2BFA16F65A7130914996C0A3C` | `pages/applications/04_planning/APP-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.1.md` | `B093AE80D384A228013E0D0117605CEA5A8C878BCB3A10D8A5372AB2F1D0B6B2` |
| `PRODUCT-000` | `pages/products/04_planning/PRODUCT-000_ROOT_PAGE_HERO_GATE4_REFERENCE_BINDING_V1.0.md` | `3A8F665EEDE6CC4DF01EFF099D5B6F1323B2CFEF817240BF4747B0DA0A6F5AC2` | `pages/products/04_planning/PRODUCT-000_ROOT_PAGE_HERO_GATE4_REFERENCE_CANDIDATE_V1.0.md` | `7DA8CAEB2F4F809E122F821A067B373799B719F8C5D28BB7E5F4295593AC8B90` |
| `MARKET-000` | `pages/markets/04_planning/MARKET-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.0.md` | `893B19F55CC5AFB14B2AEDC300B1BD230D6F969DA67BBB9658892A12C04016A9` | `pages/markets/04_planning/MARKET-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.0.md` | `83012ED7C7CD0250B11E7BDD28F12C165EDA0F831B7B6C19FB0E1B807E4D8E8F` |
| `DOC-000` | `pages/documents/04_planning/DOC-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.0.md` | `A53D9C96F37F72CD750194C9C4524CA1AD6A10F29182D9BEBD86E9D3E4ADE84D` | `pages/documents/04_planning/DOC-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.0.md` | `3124A49B8AB794FEF227FF9F1975531D77394B50F61244A82EC97EE00F4223CA` |
| `RES-000` | `pages/resources/04_planning/RES-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.2.md` | `E7D6E979270DD01E1E8785362F95BFADF363F217DA14C2EFC7233DD70192C861` | `pages/resources/04_planning/RES-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.2.md` | `5217DF54E1B170B4969F1B7E15B760F858A0E6AC1AB564FE3E5375F6B72D4CD7` |
| `ABOUT-001` | `pages/about-contact/04_visual/ABOUT-001_ROOT_PAGE_HERO_GATE4_BINDING_V1.1.md` | `38A4D6C754BCE35058BCF90B754A9EB6B2B51D35B8B9A05334A5021CA89A61C0` | `pages/about-contact/04_visual/ABOUT-001_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.1.md` | `6F10EF31B56E24507BD59F2FAA5F76BF059EDF3C1E0AEA91F4B6D1DE892C16ED` |

## Approved responsive exceptions

- `RES-000`, 390px H1: natural four lines at 36px/700, normal spacing and 24px shell padding.
- `ABOUT-001`, 390px H1: natural four lines at 36px/700, normal spacing and 24px shell padding, approved by the user on 2026-09-11.
- Both exceptions are page-and-breakpoint specific. The shared three-line default remains unchanged elsewhere.

## Closure and next stage

`ROOT-HERO-G4-7P-V1 = APPROVED / CLOSED`. The historical candidate and review chain remains immutable. Gate 6 may assess the additive impact only after separate authorization; Gate 8, D16 development, deployment and publication are not authorized by this record.
