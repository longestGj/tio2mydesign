# RES-PROC Gate 7 Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Manifest ID | `RES-PROC-G7-MANIFEST-01` |
| Package ID | `RES-PROC-G7-HANDOFF-01` |
| Date | 2026-09-06 |
| Embedded status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_SELF_APPROVED` |
| Gate 6 | `USER_APPROVED / CLOSED` |
| Gate 7 | User authorized; payload sealed for project-control review |
| Handoff | `NO`; no external destination or receipt |
| Gate 8 | `NOT_AUTHORIZED` |

## 1. Sealed Core Payload

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `RES-PROC_GATE7_HANDOFF_PACKAGE_V0.1.md` | 14798 | `DE34076915CD52296A28DE6EF8D26482D50F88D49BEB79E2B0DBBD309682FF2E` | Authority, page, content, visual, route, source, SEO/GEO/Schema, scope and phase contract |
| `RES-PROC_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md` | 13682 | `EF2AB98E5D5534C056D533EECFBBFB8658DD148CDCFEF0639C5EF0585747539C` | Semantic fields, statuses, ViewModel, sources, relations, components and failures |
| `RES-PROC_GATE7_IMPLEMENTATION_NEUTRAL_PLAN_V0.1.md` | 15312 | `377B78292415D9E62FC8451FE891DFFEBA8E30D32A387E0A260B67C1CDA0F9AD` | Nine-task test-first implementation and Gate 9 evidence plan |
| `RES-PROC_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | 9395 | `3A73CD768125F07A0449301E506B231415BCBBD31EDECD488E35524768FF0D20` | 28 acceptance criteria, state fixtures, blockers, receipt and rollback |

All payload files are located in `D:\23MySec\pages\resources\06_handoff\`. The validation, review submission and closure are wrappers outside the sealed core so they can record this finalized Manifest hash without circular self-reference.

## 2. Approved Input Baseline

| Input | Bytes | SHA-256 | Status / purpose |
|---|---:|---|---|
| `RES-PROC_CURRENT_GATE6_REVIEW_MANIFEST_V0.8.md` | 7481 | `FA4500C642F28B1BBF559154FC52AAEA08ABBB5B5871130DF8DFBCD5E34CDE8E` | Historical Gate 0/1–6 authority before Gate 7 |
| `RES-PROC_CHLORIDE_VS_SULFATE_BRIEF_V0.3.md` | 12054 | `706D152F2891C991E91181294AE40803DE25B9BB103DBEF201308D05BBD19823` | Page task and delivery-readiness contract |
| `RES-PROC_GATE6_PROJECT_CONTROL_REVIEW_V0.1.md` | 7597 | `EEB8B76E9157C67E96E17AB7DB90163130F92BB3C241CEB51E08C8C8FF3006B2` | Gate 6 review |
| `RES-PROC_GATE6_VALIDATION_V0.1.md` | 4183 | `49E0A575C0974161F7CB46CB0AD93BCD8C7C7BAD6F2BBA47F89F1E98CC51B4DA` | `48 PASS / 0 FAIL` |
| Gate 6 approval / Gate 7 authorization | 1911 | `AD6DE6E17CA524C17951342F62A90BA2A3FE4D556442C57D1E8CCEB6FDBD7E5F` | Exact current user decision |
| Gate 2 Content V0.3 | 28349 | `44383FC94BFA638061946452BFBBEB66E2501092F68871C851D744F72FD4DFE7` | Exact Buyer Clean copy and module order |
| Gate 2 SEO/GEO/Schema V0.3 | 9888 | `DE1375AFD44E947D2F81183282ADEDA1F2129C7FF3247DF1D425282C8C419CE2` | Exact metadata and structured-output rules |
| Gate 3 Responsive Spec V0.1 | 9341 | `12B18605AD3660FE1279CB4763402B04AD257C863494E4F37347A478A2EA8A03` | Responsive structure |
| Gate 4 Visual Direction V0.1 | 7569 | `9DD79210667501AC175DC8BED0A219C425039F97365DED23A7F0D276180D0B98` | `Process Qualification Ledger` |
| Gate 5 Full Visual Spec V0.1 | 5378 | `7F9BC36234D72E7F89392D323909D9026C333F64F99DC06AE2249B18C71C3D51` | Complete visual authority |
| Gate 5 HTML / Superdesign v8 | 48686 | `66E3E0643CD649B471AAF3B5963A49E198DE4F20C4D996F0A464B0E060E4FADD` | Byte-identical visual source |
| Global Chrome V0.5 | 7235 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | Shared Header/Mobile Menu/Footer |

## 3. Approved Visual Evidence

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `RES-PROC_G5_DESKTOP_1440_V0.1.png` | 1440×8905 | 808204 | `89B3CC458AD0BC1A52B16DA8BF889ECAE00A303E7CF4CDC617D971280C00A35E` |
| `RES-PROC_G5_TABLET_768_V0.1.png` | 768×13182 | 822984 | `66E7D20E45775DA66535229C935635C14BDFCE58F50C0BE670E842B10526C5CD` |
| `RES-PROC_G5_MOBILE_390_LOGICAL_AT2X_V0.1.png` | 780×34398; 390 logical @2x | 2854211 | `6059A857A57B13FE7F00CF490147CE94914A4A32241EA21039CDA425A4C9704A` |
| `RES-PROC_G5_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.1.png` | 780×1440; 390 logical @2x | 43195 | `A921F13A11EDACD3223060D16D308536E9C8E2DFAE116D00D9D5CEF5E283AEA5` |
| `RES-PROC_G5_FAQ_FOCUS_STATE_1440_V0.1.png` | 1440×900 | 53271 | `DF3F9C9B48D60B692A418DC98727DA592217FA3A6A60858F1C93809354C9DABB` |
| `RES-PROC_G5_PROCESS_ROUTES_OFF_1440_V0.1.png` | 1440×720 | 51412 | `C94E9AC294070F3490428CFFAC95109E8BB642424C5F7B2786AF323BA37B3DFA` |

Assets remain in their approved planning directory; none is copied into this handoff folder.

## 4. Locked Delivery Summary

| Contract | Value |
|---|---|
| Page/route | `RES-PROC` / `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Scope/language | `tio2-my` / EN |
| Content | Exact Gate 2 V0.3; fourteen modules |
| Core counts | 2 route cards / 4 can-indicate / 6 cannot-establish / 6 evidence rows / 3 overlap statements / 5 steps / 3 outcomes / 4 questions / 6 source groups / 7 links |
| Primary action | Products; eligible same-scope route only; no prefill |
| Process actions | Exact chloride/sulfate owners; atomic eligibility pair |
| Article | Conditional on complete real visible metadata |
| FAQ/HowTo | Visible questions/workflow only; FAQPage/QAPage/HowTo off |
| Claims | No route winner, Grade recommendation/equivalence, commercial/regulatory outcome or hidden GEO fact |
| Shared UI | Global Chrome V0.5 and production Logos; no page-local fork |
| Scope failure | Safe error/absence; never cross-scope fallback |
| Gate 9 | Read-only visual/content/source/link/metadata/Schema/accessibility verification |

## 5. Source Recheck

On 2026-09-06, six approved destinations were directly retrievable. The exact EUR-Lex TXT endpoint produced a tool-side error, but the same official CELEX record was retrievable through EUR-Lex's official ALL/PDF endpoints and continued to support the approved limited statement. The public copy and approved URL remain unchanged; Gate 8 must verify the exact runtime destination and fail closed on genuine withdrawal or scope change.

## 6. Excluded Materials and Authority

- Any WordPress, API, Next.js, component, style, fixture, test or build code.
- Any CMS, staging or production data write.
- Any file copied from or written to `D:\16Wordpress_nextjs`.
- Any external development task, branch, commit or receipt.
- Any RES-000 inventory/sitemap promotion, route activation, deployment, publication, DNS or indexing action.
- Any fact or relationship beyond the approved content contract.

## 7. Manifest Seal Rule

The SHA-256 of this finalized Manifest is recorded by validation and project-control wrappers. Any change to this Manifest or the four sealed payload files requires a new version and review; do not overwrite V0.1.

## 8. Version Record

| Version | Date | Change | Embedded status |
|---|---|---|---|
| V0.1 | 2026-09-06 | Registered four-file sealed Gate 7 payload and approved input/visual authorities | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_SELF_APPROVED`; Gate 8 locked |
