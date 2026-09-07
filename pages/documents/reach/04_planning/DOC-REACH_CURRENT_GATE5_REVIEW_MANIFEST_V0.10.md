# DOC-REACH Current Gate 5 Review Manifest V0.10

## 0. Authority

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Current Gate | `GATE 5` |
| Visual direction | `A / REGULATORY EVIDENCE LEDGER` |
| Manifest status | `CURRENT / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 1–4 | `USER_APPROVED / CLOSED` |
| Gate 5 user approval | `PENDING USER DECISION` |
| Gate 6–10 | `NOT_AUTHORIZED` |
| Review ID | `DOC-REACH-G5-PCR-01` |

This is the sole current DOC-REACH stage pointer. `DOC-REACH_CURRENT_GATE4_APPROVED_MANIFEST_V0.9.md` remains the approved upstream baseline and is not overwritten.

## 1. Authority chain

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Approved Gate 4 | `pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE4_APPROVED_MANIFEST_V0.9.md` | 3139 | `F4844A0803FDEF1DE735506842C4D927C8BE5B0ABEEBE214044B6DEB8861B193` | `USER_APPROVED / CLOSED` |
| Gate 4 closure | `pages/documents/reach/05_review/DOC-REACH_GATE4_USER_APPROVAL_CLOSURE_V0.1.md` | 1758 | `051D81B61065678E53B66E956175E53C9EDA056C3F66066FFEAC6FB18ABE9C9C` | `USER_APPROVED / CLOSED` |
| Gate 5 activation | `pages/documents/reach/05_review/DOC-REACH_GATE5_ACTIVATION_RECORD_V0.1.md` | 1247 | `711631C98BA2C973C98DD7D5B6D7F43053C64FD251D15DC1B6848B39F09A740F` | `USER_AUTHORIZED / ACTIVE` |
| Full visual specification | `pages/documents/reach/04_planning/gate5/DOC-REACH_GATE5_FULL_VISUAL_SPECIFICATION_V0.1.md` | 5918 | `CEBFDCE0D359F826BB5B35E8B37A648B6396990605FC99F375BB73B2FA21488A` | `PASS_PENDING_USER_APPROVAL` |
| Validation | `pages/documents/reach/04_planning/gate5/DOC-REACH_GATE5_VALIDATION_V0.1.md` | 5939 | `42BB5F7A58560F64DB25A702E1911CC03B719797F5AACACEFE90834CC127A37D` | `PASS` |
| Independent review resolution | `pages/documents/reach/05_review/DOC-REACH_GATE5_INDEPENDENT_REVIEW_RESOLUTION_V0.1.md` | 1892 | `8C307C12FAF62D016D2F04B6E25D63C3450714CF3BEDCFFFB767BBE252160BC4` | `0 / 0 / 0 OPEN` |
| Project-control submission | `pages/documents/reach/05_review/DOC-REACH_GATE5_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 3231 | `318BDF1E3347D3473FB8D9359B2C15B21E44A1F107D539EA187F220DDF71382E` | `PASS_PENDING_USER_APPROVAL` |

## 2. Formal raster assets

| Asset | Dimensions | SHA-256 |
|---|---:|---|
| `gate5/assets/DOC-REACH_G5_DESKTOP_1440_FULL_VISUAL_V0.1.png` | `1440×7491` | `64C913C196593B8B3062717CB19C451B1A9909B34885DF1F08625CC607A7800E` |
| `gate5/assets/DOC-REACH_G5_TABLET_768_FULL_VISUAL_V0.1.png` | `768×9881` | `B639EE293D58ED5EC20EF8CFF190D30D145349B93D1D93C1CFDC5923C9BFB421` |
| `gate5/assets/DOC-REACH_G5_MOBILE_390_LOGICAL_2X_FULL_VISUAL_V0.1.png` | `390 logical @2x / 780×26052` | `AB9FC630610356C61D4A76B042322B1A060A72B1D209C1E833805F9A65196086` |
| `gate5/assets/DOC-REACH_G5_MOBILE_MENU_390_LOGICAL_2X_V0.1.png` | `390 logical @2x / 780×1688` | `0E04158847ED794A84099F0171C84DB99D75C1F5EA308E1A1DBA7F6AD4BA29AE` |
| `gate5/assets/DOC-REACH_G5_KEY_STATES_V0.1.png` | `1440×1000` | `CF43400D08F2B45DD6F4F157302B8B629075908DFB7100869D55E2AAF1689F7E` |
| `gate5/assets/DOC-REACH_G5_REQUEST_ROUTE_UNAVAILABLE_1440_V0.1.png` | `1440×7326` | `4A00876D9242CC3B2E3A68014A4550AC5823490E08CFB7E9E46549398F5D01DE` |
| `gate5/assets/DOC-REACH_G5_FAQ_OPEN_STATE_1440_V0.1.png` | `1440×619` | `6362A777E7674D8D31CC5FAC21262F09BF0BCBA1F286414818B376EA96CE0B2E` |

## 3. Source and Superdesign parity

| Item | Value |
|---|---|
| Local Gate 5 HTML | `99_workspace/DOC-REACH/gate5/DOC-REACH_GATE5_FULL_VISUAL_V0.1.html` |
| Local SHA-256 | `80E1BAE01AEFC935CE473C70B231EC72674859F18A390ED63B1A9EFE76890437` |
| Server-fetched Gate 5 HTML | `.superdesign/tmp/doc-reach-gate5-full-visual-v0.1.html` |
| Server-fetched SHA-256 | `80E1BAE01AEFC935CE473C70B231EC72674859F18A390ED63B1A9EFE76890437` |
| Build / test / render SHA-256 | `14D50871350D096AA0F0282F3D6F4B47A708CC7BB29E756E15C510BAD26C441B` / `89948C0DE713D31B8E02E9996276F6A791168B30F945286EC11665EF041321DE` / `E7198EED03AE147FB6487BC572D28DE9998C222F99B6134A0E2CE686E20D32EC` |
| Project | `ab00e0d4-ad19-44d1-8825-84dc020f3cb3` |
| Draft | `02c20623-7f87-4edf-b87e-24ef2137d028` |
| Approved Gate 4 version | `v1` |
| Gate 5 candidate | `v3` |
| Resume target | `/documents/reach/` in `.superdesign/resume.json` |

## 4. Shared Global Chrome authority

| Authority | Path | SHA-256 | Use |
|---|---|---|---|
| Global Header/Footer V0.5 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | Header, Mobile Header, Mobile Menu and Footer assembly; consumed unchanged |

DOC-REACH owns only the Documents current-navigation key and its page body. It does not fork or independently redesign Global Chrome.

## 5. Historical Manifest disposition

| Manifest | Disposition |
|---|---|
| `DOC-REACH_CURRENT_GATE3_APPROVED_MANIFEST_V0.7.md` | `HISTORICAL / APPROVED_UPSTREAM` |
| `DOC-REACH_CURRENT_GATE4_REVIEW_MANIFEST_V0.8.md` | `HISTORICAL / SUPERSEDED_BY_APPROVED_V0.9` |
| `DOC-REACH_CURRENT_GATE4_APPROVED_MANIFEST_V0.9.md` | `APPROVED_UPSTREAM / NOT_OVERWRITTEN` |
| `DOC-REACH_CURRENT_GATE5_REVIEW_MANIFEST_V0.10.md` | `CURRENT / SOLE_STAGE_POINTER` |

## 6. Review result

`DOC-REACH-G5-PCR-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

Validation is `PASS` with P0/P1/P2=`0/0/0`. `DOC-REACH-G5-R01` and `DOC-REACH-G5-R02` are `VERIFIED_FIXED / CLOSED`; independent-review open findings are Critical/Important/Minor=`0/0/0`. Gate 5 is ready for user decision; no later Gate is inferred.

## 7. Frozen boundaries

- Gate 2 copy, Gate 3 structure and Gate 4 visual direction remain unchanged.
- Global Chrome and production Logo ownership remain shared.
- `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN` remains unchanged.
- Source dates and route/form/Schema atomicity remain later implementation/QA checks.
- No D16 development, deployment or release work is included.

## 8. Gate authority

| Item | State |
|---|---|
| Gate 1–4 | `USER_APPROVED / CLOSED` |
| Gate 5 project-control review | `PASS` |
| Gate 5 user approval | `PENDING USER DECISION` |
| Gate 6–10 | `NOT_AUTHORIZED` |
| D16 development / deployment / publication | `OUT_OF_SCOPE / NOT_AUTHORIZED` |
