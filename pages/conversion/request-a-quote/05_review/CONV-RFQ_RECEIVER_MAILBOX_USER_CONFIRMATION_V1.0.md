# CONV-RFQ Receiver Mailbox User Confirmation V1.0

## 0. Decision

| Field | Value |
|---|---|
| Page / workflow | `CONV-RFQ` / quotation-request receiver |
| Decision date | 2026-09-08 |
| Decision source | User direct confirmation: `接受的邮箱是mike.longestgj@gmail.com` |
| Approved recipient mailbox | `mike.longestgj@gmail.com` |
| Use scope | Production receiver configuration and controlled receipt verification only |
| Buyer-visible rendering | `DO_NOT_RENDER` |
| Secret status | Email address is not an Access Key or provider secret; Access Key remains undisclosed |

The user confirms the approved mailbox that should receive CONV-RFQ submissions. This closes only the uncertainty about the intended recipient address. It does not by itself prove that the production Web3Forms account or Access Key is bound to this mailbox, that the provider accepted a submission, or that a message reached the inbox.

The address must not be added to page copy, HTML, metadata, Schema, analytics or client-visible diagnostics. The form continues to use its approved receiver integration without displaying a direct email fallback.

## 1. Remaining Verification

To close `RFQ-EXTERNAL-RECEIVER-ROOT`, bind production-equivalent evidence to one exact candidate showing:

1. the production Web3Forms account and Access Key route CONV-RFQ to `mike.longestgj@gmail.com`;
2. an accountable human owner monitors that mailbox;
3. the provider returns an explicit positive acceptance for a controlled test request;
4. the same controlled request is received in the approved mailbox;
5. current provider/DPA, international-processing and retention facts match the approved Privacy wording.

A real form submission or email requires separate explicit authorization. Any test must use non-confidential synthetic data and must not expose the Access Key in evidence.

## 2. Boundary

This record is a user fact confirmation. It does not authorize a real submission, email, production configuration change, deployment, publication, Gate 10 or indexing.

