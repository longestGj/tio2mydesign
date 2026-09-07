# Legal / Privacy CONV-DOC Post-Gate 9 Targeted Parity Decision V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `LEGAL-PRIVACY-G9-CONV-DOC-PARITY-PCR-01` |
| Date | 2026-09-05 |
| Scope | EN/BM Privacy Policy parity with current Request Documents data flow |
| User authorization | Explicit current-task authorization for content and targeted stage work |
| Project-control decision | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Content state | `USER_APPROVED / CURRENT_AUTHORITY` |
| Existing lifecycle | `READ_ONLY_QA_APPROVED` |
| Targeted runtime parity | `OPEN / D16_IMPLEMENTATION_AND_READ_ONLY_REREVIEW_REQUIRED` |
| Gate 10 / deployment / publication / indexing | `NOT_AUTHORIZED` |

## 1. Decision

The EN and BM V0.2 policies are accepted as the current content authorities for `LEGAL-PRIV-EN` and `LEGAL-PRIV-MS`. They accurately add the current Request Documents eight-field data set, document-request purposes, Web3Forms Free browser-direct provider path and non-guarantee boundary while retaining the approved policy structure and release controls.

The source-package review has no open content P0, P1 or P2. The revised copy is not yet represented by the previously audited D16 runtime, so runtime parity is reopened narrowly for these two pages.

## 2. Gate 9 effect

The original `LEGAL-PRIVACY-G9-PCR-01` remains valid for:

- layout and responsive behavior;
- shared Header/Footer and non-sticky desktop table of contents;
- route, language, Canonical, hreflang, robots and supported Schema behavior;
- Cookie Settings and current inactive-measurement state;
- unchanged policy sections and existing release blockers.

It no longer proves Buyer-visible body parity for the EN/BM Privacy pages after the V0.2 source change. Therefore:

`LEGAL-PRIV-EN / LEGAL-PRIV-MS lifecycle = READ_ONLY_QA_APPROVED`

`Targeted disposition = READ_ONLY_QA_APPROVED_WITH_TARGETED_RUNTIME_PARITY_OPEN_AND_RELEASE_BLOCKERS`

This is a narrow parity reopening, not a rollback of the prior technical QA and not a new full-page Gate 9.

## 3. D16 implementation acceptance

D16 must:

1. replace only the current EN/BM Privacy policy source/body and update date from the V0.2 authorities;
2. keep internal control sections out of runtime output;
3. preserve existing routes, layout, responsive behavior, metadata, Canonical, hreflang, robots, Schema, shared Chrome and Cookie Settings behavior;
4. bind runtime-source declarations/tests to the new source hashes;
5. prove normalized Buyer-visible body parity for both language versions;
6. prove exactly eight Request Documents fields and zero Request Documents upload, telephone/WhatsApp, Website or Market/Destination fields;
7. prove quotation-and-document-request Web3Forms wording, browser-direct fixed-endpoint wording, undisclosed Access Key value/recipient address and no private-secret characterization;
8. prove the future-only sentence names Sample and not Document Request;
9. return changed files, commit, test/typecheck/lint/build results and initial-HTML/browser evidence for targeted read-only re-review.

The machine-readable source payload is `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_SOURCE_PAYLOAD_V0.1.json`.

## 4. Preserved blockers

- qualified BM legal/meaning-equivalence review;
- production Web3Forms account ownership, Access Key placement, recipient binding and one authorised positive mailbox receipt;
- production host/provider/storage/network inventory and operational-retention parity;
- qualified legal review of the final policy;
- separate Gate 10 authorization.

Sample remains future-only because its production receiver/persistence/positive-acknowledgement chain is not active.

## 5. Decision boundary

This decision authorizes the D16 local/preview content-parity update and the subsequent D23 targeted read-only re-review. It does not authorize deployment, production CMS writes, publication, DNS, release, indexing or Gate 10.

`LEGAL-PRIVACY-G9-CONV-DOC-PARITY-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.

