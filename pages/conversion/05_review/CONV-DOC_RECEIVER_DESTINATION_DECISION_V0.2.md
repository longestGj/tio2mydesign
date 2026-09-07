# CONV-DOC Receiver Destination and Provider Decision V0.2

## 0. Control

| Field | Value |
|---|---|
| Page / workflow | `CONV-DOC` / Request Documents |
| Decision date | 2026-09-04 |
| Decision source | User explicit approval in project-control conversation |
| Status | `USER_APPROVED_RECEIVER_DESTINATION_AND_PROVIDER / ACTIVE` |
| Recipient | `mike.longestgj@gmail.com` |
| Approved provider | `Web3Forms` |
| Supersedes | `CONV-DOC_RECEIVER_DESTINATION_DECISION_V0.1.md` |

## 1. Approved decision

Request Documents submissions are to use Web3Forms and be delivered initially to `mike.longestgj@gmail.com`.

This approval applies to the `request_documents` workflow. It does not change the approved eight-field form contract, the five Document Type categories, the fourteen Product Grade options, the success/failure wording or the `site_scope=tio2-my` isolation boundary.

## 2. Implementation contract

- Use a Web3Forms access key associated with the approved recipient.
- Read the access key through a server-only environment variable dedicated to Request Documents.
- Do not embed the recipient or access key in buyer-visible HTML, browser JavaScript, URLs, analytics events, client-visible logs or repository-tracked configuration.
- The server-side adapter must map only an HTTP 200 JSON response with `success=true` to `receipt_confirmed`.
- Timeout, network failure, non-JSON, non-200 or ambiguous provider responses remain `submission_unconfirmed`; entered values must be preserved and retry offered.
- Preserve request-token/idempotency handling, the eight approved fields, fourteen Grades, five Document Types, same-origin validation, the 16 KB request-body limit, `no-store` and no cross-`site_scope` fallback.
- No submitted personal or business field may enter GA4, Google Tag Manager, advertising audiences or analytics parameters.

## 3. Privacy and verification

The applicable Privacy Policy must describe Request Documents submissions through Web3Forms before production release. Development must verify the integration in a production-equivalent environment and, once a valid access key is available, send no more than one clearly labelled `[TEST]` submission to confirm actual delivery to the approved recipient.

## 4. Authorization boundary

This decision authorizes the Request Documents receiver integration design and development. It does not authorize exposing credentials, writing production secrets, deployment, publication, DNS changes or indexing. Production configuration and release still require their applicable authorization and evidence.
