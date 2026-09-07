# CONV-DOC Receiver Destination Decision V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / workflow | `CONV-DOC` / Request Documents |
| Decision date | 2026-09-04 |
| Decision source | User explicit approval in project-control conversation |
| Status | `USER_APPROVED_RECEIVER_DESTINATION / ACTIVE` |
| Recipient | `mike.longestgj@gmail.com` |

## 1. Approved decision

Request Documents submissions are to be delivered initially to `mike.longestgj@gmail.com`.

This approval applies only to the destination for the `request_documents` workflow. It does not change the approved eight-field form contract, the five Document Type categories, the fourteen Product Grade options, the success/failure wording or the `site_scope=tio2-my` isolation boundary.

## 2. Implementation and privacy boundary

- Keep the recipient and any provider credential in server-side environment or provider configuration only.
- Do not embed the recipient, receiver token or provider secret in buyer-visible HTML, browser JavaScript, URLs, analytics events or repository-tracked configuration.
- A successful page state requires an explicit positive acknowledgement from the receiver; an HTTP transport response alone is insufficient.
- Form values must not enter GA4, Google Tag Manager, advertising audiences or client-visible logs.
- The applicable Privacy Policy must describe the Request Documents workflow and the verified processor/data flow before production release.

## 3. Still required

The recipient decision does not itself provide an outbound transport or credential. Development must bind the workflow to an approved server-side receiver, verify delivery to the approved recipient in a production-equivalent environment, preserve retry/deduplication behavior and submit evidence before Gate 10 release consideration.

This decision does not authorize production secrets, production database writes, deployment, publication, DNS changes or indexing.
