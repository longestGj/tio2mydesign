# Legal / Privacy CONV-DOC Post-Gate 9 Current Authority Manifest V1.3

## 0. Control

| Field | Value |
|---|---|
| Manifest ID | `LEGAL-PRIVACY-CONV-DOC-POST-G9-CURRENT-1.3` |
| Date | 2026-09-05 |
| Scope | `LEGAL-PRIV-EN`, `LEGAL-PRIV-MS`; Request Documents actual data-flow parity |
| Review | `LEGAL-PRIVACY-G9-CONV-DOC-PARITY-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Content | `USER_APPROVED / CURRENT_AUTHORITY` |
| Runtime parity | `VERIFIED / CLOSED` |
| Lifecycle | `READ_ONLY_QA_APPROVED` |
| Disposition | `READ_ONLY_QA_APPROVED_WITH_RECORDED_RELEASE_BLOCKERS` |
| Gate 10 / deployment / publication / indexing | `NOT_AUTHORIZED` |

## 1. Current page pointers

| Page | Current Manifest | SHA-256 |
|---|---|---|
| `LEGAL-PRIV-EN` | `pages/legal-privacy/05_review/LEGAL-PRIV-EN_CURRENT_GATE9_BASELINE_MANIFEST_V1.3.md` | `6B129CBCEA7FE43B455CB5836AEB9A307058E08164B42C19AFF93F41D242D298` |
| `LEGAL-PRIV-MS` | `pages/legal-privacy/05_review/LEGAL-PRIV-MS_CURRENT_GATE9_BASELINE_MANIFEST_V1.3.md` | `8905BBCBF50A88B1B1BC5C6893C7B36B87DC1F30764478479E59F4133B15BB47` |

## 2. Current authority set

| Role | File / revision | SHA-256 |
|---|---|---|
| EN Buyer-visible source | `pages/legal-privacy/04_planning/LEGAL-PRIV-EN_GATE2_FULL_COPY_V0.2.md` | `896A4CBCEE2CF5A9B19C9B65B62B7C247668A3C5C84DA17E0E61CB0B8E556A37` |
| BM Buyer-visible source | `pages/legal-privacy/04_planning/LEGAL-PRIV-MS_GATE2_FULL_COPY_V0.2.md` | `00FB18D246D7FFEA787CDB9BE06EF3B74D547607D62F4E846EFBF2DD0E4FB594` |
| Machine-readable payload | `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_SOURCE_PAYLOAD_V0.1.json` | `7E893B6A91EA8539C14631668CC88B3D4707B90A25D62474A077FB59A68C27A2` |
| Targeted QA evidence | `pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_TARGETED_READ_ONLY_QA_EVIDENCE_V0.1.md` | `37B223AFD8D44359DA20C1E9CAA97A4C16227DC40BA42369BDDF64B1EDF834EE` |
| Targeted QA closure | `pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_TARGETED_READ_ONLY_QA_CLOSURE_V0.1.md` | `A0A1B7CF739826FE8541CCDA7D5682013C6C8A55A961D233EB9BC7D7B377319F` |
| D16 implementation | `f3409f1d4b2455e99fcbc1881e73fc90df049100` | Git revision |
| D16 runtime evidence | `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/docs/verification/legal-privacy/LEGAL_PRIVACY_CONV_DOC_V02_RUNTIME_PARITY_2026-09-05.md` | `985D2E644C869AFC3A79E169E8C888DD1D0EC77802E519CECDEA880DAFF0BAD3` |
| CONV-DOC current Gate 9 pointer | `pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md` | `ACC1977233A6089F954555E403E493516B2240C1A4972695019C9D1224522A59` |

## 3. Verified result

The approved EN/BM V0.2 Buyer-visible sources are implemented with normalized byte equality. Both policies contain exactly eight Request Documents fields, zero prohibited Request Documents fields, the approved Free-plan browser-direct Web3Forms disclosure, the non-guarantee boundary and Sample-only future disclosure. No Access Key value or provider-bound recipient address renders.

The Request Documents provider has accepted one authorised real test at commit `33fe5fa45a4339a0679a79e99cacfb5883f27f0d`. Actual mailbox appearance has not been confirmed and remains a user-side external confirmation.

## 4. Supersession

- This V1.3 Manifest supersedes `LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.2.md` as the current shared authority.
- V1.2 remains historical evidence of the temporary targeted runtime-parity reopening; its SHA-256 is `A7463D33DCA42720D486C889199D859E2D4E14217EB4FFB1298BAE1C89DBCD0D`.
- The original full Gate 9 technical pass remains valid for unchanged areas.
- The earlier server-only CONV-DOC receiver update remains historical and is not the active runtime description.

## 5. Remaining release boundary

Open controls are: qualified BM legal/meaning-equivalence review; final qualified legal review; production host/provider/storage/network inventory; operational-retention parity; production WordPress application/read-back; production Web3Forms account ownership, Access Key placement and recipient-binding evidence; and the user-side mailbox-receipt confirmation.

Gate 10, deployment, production CMS writes, publication, DNS, robots, sitemap and indexing remain unauthorized.
