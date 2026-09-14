# CONV-DOC Current Gate 9 Baseline Manifest V0.4

## 0. Manifest control

| Field | Value |
|---|---|
| Manifest role | Sole current Gate 9 lifecycle and Gate 10 release-blocker pointer for CONV-DOC |
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Supersedes | `CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md` |
| Gate 9 page review | `CONV-DOC-G9-TARGETED-REREVIEW-PCR-01 = CLOSED` |
| Privacy parity review | `LEGAL-PRIVACY-G9-CONV-DOC-PARITY-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Current receiver model | `WEB3FORMS_FREE / BROWSER_DIRECT / FIXED_ENDPOINT` |
| Provider acceptance | `VERIFIED / ONE_AUTHORIZED_TEST` |
| Mailbox appearance | `NOT_VERIFIED / USER_EXTERNAL_CONFIRMATION_OPEN` |
| Privacy actual-data-flow parity | `VERIFIED / CLOSED` |
| Gate 9 | `READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS` |
| Page lifecycle | `READ_ONLY_QA_APPROVED` |
| Manifest status | `CURRENT_GATE_9_BASELINE / ACTIVE` |
| Date | 2026-09-05 |
| Gate 10 | `NOT_AUTHORIZED` |

V0.4 replaces the superseded server-only receiver description with the user-approved Web3Forms Free browser-direct runtime and records the verified V0.2 Privacy parity. It does not authorize production WordPress writes, deployment, publication, DNS or indexing.

## 1. Current authority

| Role | File / revision | SHA-256 | Status |
|---|---|---|---|
| Previous current Manifest | `pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md` | `D8C7A86F929DB86F70613DD69CAA5D6496730EEB5BEA92C4C84A961E9AFC0432` | `SUPERSEDED_BY_V0.4 / HISTORICAL` |
| Free-plan runtime decision | `pages/conversion/05_review/CONV-DOC_WEB3FORMS_FREE_PLAN_RUNTIME_DECISION_V0.1.md` | `410E880CA37DF593EC4DDC9D786200AF98A958EBF7D185D760B3FF5A2EC2DCE3` | `USER_APPROVED / ACTIVE` |
| Privacy targeted QA evidence | `pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_TARGETED_READ_ONLY_QA_EVIDENCE_V0.1.md` | `37B223AFD8D44359DA20C1E9CAA97A4C16227DC40BA42369BDDF64B1EDF834EE` | `PASS / ZERO_P0_P1_P2` |
| Privacy targeted QA closure | `pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_TARGETED_READ_ONLY_QA_CLOSURE_V0.1.md` | `A0A1B7CF739826FE8541CCDA7D5682013C6C8A55A961D233EB9BC7D7B377319F` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Provider-accepted test evidence | `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/docs/verification/conv-doc/CONV-DOC_REAL_WEB3FORMS_E2E_EVIDENCE_2026-09-05.md` | `DC8633FE1CB8975964DE2B99BD2C1901EECA5AD5AC4910C3C3ED6AD45D62D9DA` | Provider accepted; mailbox not confirmed |

## 2. Current implementation chain

| Revision | Meaning | State |
|---|---|---|
| `c2a62677e6781ad21e9a05ee9e90f419ec61a167` | Web3Forms Free browser-direct Request Documents receiver | `CURRENT_RUNTIME_BASE` |
| `0b42ccfbb41f3e487c64dc4173dec5d608ed1141` | Shared Malaysia Web3Forms Access Key wiring | `CURRENT_RUNTIME_BASE` |
| `33fe5fa45a4339a0679a79e99cacfb5883f27f0d` | One authorised real provider-accepted test and sanitized evidence | `VERIFIED_PROVIDER_ACCEPTED` |
| `f3409f1d4b2455e99fcbc1881e73fc90df049100` | EN/BM Privacy V0.2 runtime parity | `VERIFIED / CLOSED` |

The browser submits directly to `https://api.web3forms.com/submit`. The Access Key is a browser-available routing identifier and binds the provider-side recipient; its value and the recipient address must not render in the form, policies or public evidence.

## 3. Historical receiver description

`pages/conversion/05_review/CONV-DOC_GATE10_WEB3FORMS_RECEIVER_LOCAL_IMPLEMENTATION_UPDATE_V0.1.md` and commit `782e7fe1945071d293851bd6e4b43cb90d98764b` remain historical evidence of the earlier server-only adapter. They are superseded for current runtime authority by the Free browser-direct decision and commits above. They must not be cited as the active Request Documents receiver model.

## 4. Current readiness

| Component | State |
|---|---|
| Gate 9 Grade/Application/Process relation handling | `VERIFIED_FIXED / CLOSED` |
| Local WordPress singleton and canonical behavior | `VERIFIED` |
| Web3Forms Free browser-direct runtime | `VERIFIED` |
| Shared Malaysia Access Key wiring | `VERIFIED` |
| One real provider-accepted test | `VERIFIED` |
| Actual recipient-mailbox appearance for that test | `OPEN / USER_EXTERNAL_CONFIRMATION` |
| Privacy processor/actual data-flow parity | `VERIFIED / CLOSED` |
| Production WordPress singleton application/read-back | `OPEN / RELEASE_BLOCKER` |
| Production Access Key placement/account ownership/recipient binding evidence | `OPEN / RELEASE_CONTROL` |
| Gate 10 release/indexing authorization | `NOT_AUTHORIZED` |

## 5. Current stop

`CONV_DOC_PROVIDER_ACCEPTED = YES`.

`CONV_DOC_MAILBOX_RECEIPT_USER_CONFIRMATION = OPEN`.

`PRIVACY_PROCESSOR_AND_ACTUAL_DATA_FLOW_PARITY = VERIFIED / CLOSED`.

`CONV-DOC lifecycle = READ_ONLY_QA_APPROVED`.

`CONV-DOC Gate 9 = READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`.

`Gate 10 = NOT_AUTHORIZED`.

No mailbox receipt is inferred from provider acceptance. No production WordPress change, deployment, publication, DNS, robots, sitemap or indexing action is authorized by this Manifest.

## 2026-09-13 publication-contract overlay

`../../../docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` finalizes CONV-DOC's URL, request-only role, buyer task, submit CTA, SEO fields, self-canonical, `index, follow`, Sitemap target and internal-link sources. Existing field, provider, success/failure and privacy contracts remain authoritative; no receipt, availability, delivery or approval promise is added.
