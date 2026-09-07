# CONV-RFQ Page-directory Migration Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Date | 2026-09-01 |
| User authorization | `调整一下。` following approval of the dedicated page-folder proposal |
| Scope | CONV-RFQ formal page artifacts only |
| Old roots | `pages/conversion/04_planning/` and `pages/conversion/05_review/` |
| New root | `pages/conversion/request-a-quote/` |
| Files moved | 16 |
| Files remaining under old roots with `CONV-RFQ*` names | 0 |
| Content modification during move | None |
| Integrity | All pre-move SHA-256 values preserved |

## 1. Path mapping

| Old path pattern | New path |
|---|---|
| `pages/conversion/04_planning/CONV-RFQ_*` | `pages/conversion/request-a-quote/04_planning/` |
| `pages/conversion/04_planning/wireframes/CONV-RFQ_*` | `pages/conversion/request-a-quote/04_planning/wireframes/` |
| `pages/conversion/04_planning/visual-directions/CONV-RFQ_*` | `pages/conversion/request-a-quote/04_planning/visual-directions/` |
| `pages/conversion/04_planning/visual-designs/CONV-RFQ_*` | `pages/conversion/request-a-quote/04_planning/visual-designs/` |
| `pages/conversion/04_planning/visual-designs/assets/CONV-RFQ_*` | `pages/conversion/request-a-quote/04_planning/visual-designs/assets/` |
| `pages/conversion/05_review/CONV-RFQ_*` | `pages/conversion/request-a-quote/05_review/` |

Historical submitted documents were not rewritten merely to replace path strings. When they display an old path, this manifest is the authoritative relocation map. The hashes therefore remain valid.

## 2. Integrity record

| File | SHA-256 |
|---|---|
| `CONV-RFQ_CONTENT_ARCHITECTURE_V0.1.md` | `3A2BA84BF6C50DE647FE4B716199FCFA27A4B36078FA06408F87B7B3C3CEB8C5` |
| `CONV-RFQ_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | `503EB2448F826B8319FE63F82D3BFCD353E667D24D0AC73CBEAC132F4F2A6CD0` |
| `CONV-RFQ_WIREFRAME_SPEC_V0.1.md` | `A7F0F0C1A9D1FB8D368C3C37D4FA5C51EF873FCC58EDC58A1699F5CA0DB077C5` |
| `CONV-RFQ_VISUAL_DIRECTION_V0.1.md` | `7A469FD26F609C3A7734226261D9E494D4903F41EAC223075048DE754D722B3A` |
| `CONV-RFQ_VISUAL_DIRECTION_V0.2.md` | `4503C2BBF51C1E7D55C9DE05C104C2557AB51BA45BADDC3EE61EC1A4A5CA1D9A` |
| `CONV-RFQ_FULL_VISUAL_DESIGN_V0.1.md` | `F9961671927F11B4C541CE9537464292CAB78DCFD5C7E24DA69BC8575B97C2F1` |
| `CONV-RFQ_FULL_VISUAL_DESIGN_V0.2.md` | `0ECED32C597F3768758F316F6DAA99F4E870BC914E5EBD751B597E21068B336D` |
| `CONV-RFQ_G5_DESKTOP_FULL_V0.1.png` | `5769FE50B0F5350262E5DAE783ED62ADAAF5386B8126A14A02BB5D1CD5CFFEB9` |
| `CONV-RFQ_G5_DESKTOP_FULL_V0.2.png` | `B1928EF06963DA40D827134E96B9BAD37EEA218679F7E328A7933B7497A1376F` |
| `CONV-RFQ_G5_DESKTOP_STATE_BOARD_V0.1.png` | `1D2D974D06DD84D2CFB2FF2D1DCDFBB443C5982D0058ADB97AFEE46F27124BA4` |
| `CONV-RFQ_G5_MOBILE_390_FULL_V0.1.png` | `085B4E2D67F96D422825D37C2A8B6538FAB5322E69E2E8D580223072EB9C16EB` |
| `CONV-RFQ_G5_MOBILE_MENU_OPEN_V0.1.png` | `C1478FA360E48380A286FFCDA0D7E210FFEE3B1B8C4CFB631096E7572DE2DC29` |
| `CONV-RFQ_G5_MOBILE_STATE_BOARD_V0.1.png` | `1AA2A223695C0D29738C0CCCD2ABC4FA81671A93D1FA8F100A729D881F2A4D1B` |
| `CONV-RFQ_GATE4_REVIEW_SUBMISSION_V0.1.md` | `B1FAB6994EF66D514EA0BE798E9BA3AF6D59CBBB7D8B55C96B474B0D57ADAC51` |
| `CONV-RFQ_GATE5_REVIEW_SUBMISSION_V0.1.md` | `DDFA739BB2F4B6B1CD53EA32FF217723B43666A3D41F998C96230FCD7974C8B4` |
| `CONV-RFQ_GATE5_REVIEW_SUBMISSION_V0.2.md` | `8314073C532E58D03F77CA820E6E251009DF7DEBC9DF33577EFBE864CA53836F` |

## 3. Scope protection

- No CONV-DOC, CONV-SAMPLE or shared Conversion Playbook file was moved.
- The page Brief remains in `docs/page-briefs/` as required by the project directory contract.
- No file was deleted.
- No Gate, approval, release or development state changed because of this directory migration.

