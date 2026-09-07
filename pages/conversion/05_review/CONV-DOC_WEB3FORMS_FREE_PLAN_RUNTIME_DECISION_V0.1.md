# CONV-DOC Web3Forms Free-Plan Runtime Decision V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / workflow | `CONV-DOC` / Request Documents |
| Decision date | 2026-09-04 |
| Decision source | User explicit confirmation in project-control conversation |
| Status | `USER_APPROVED_WEB3FORMS_FREE_BROWSER_RUNTIME / ACTIVE` |
| Provider | Web3Forms free plan |
| Recipient binding | `mike.longestgj@gmail.com` |
| Supersedes runtime choice in | `CONV-DOC_RECEIVER_DESTINATION_DECISION_V0.2.md` server-only implementation assumption |

## 1. Approved runtime decision

Request Documents will use the Web3Forms free-plan browser submission model. The approved Access Key must be the key issued by Web3Forms for the recipient `mike.longestgj@gmail.com`.

The dedicated runtime variable is:

`NEXT_PUBLIC_TIO2_MY_REQUEST_DOCUMENTS_WEB3FORMS_ACCESS_KEY`

For local development it belongs in the untracked Next.js `.env.local` file. For deployed environments it belongs in the hosting platform's environment-variable configuration. The key value must not be written to this project, committed to Git, added to `.env.example`, stored in WordPress content or pasted into review evidence.

## 2. Free-plan behavior

- The browser submits directly to `https://api.web3forms.com/submit` using the approved Access Key.
- The Access Key is an intentionally public Web3Forms routing identifier, not a private mailbox password.
- Only HTTP 200 with JSON `success=true` may produce the visible receipt-confirmed state.
- Timeout, network failure, non-JSON, non-200 or ambiguous provider responses remain retryable and must preserve the buyer's entered values.
- Preserve the approved eight fields, fourteen Grades, five Document Types, visible validation, stable request token and `site_scope=tio2-my` / `page_id=CONV-DOC` / `workflow=request_documents` attribution.
- The recipient address itself is not rendered or included as a submitted routing field; delivery is controlled by the Access Key's Web3Forms account binding.
- No form value may enter GA4, Google Tag Manager, advertising audiences or analytics parameters.

## 3. Verification and release boundary

After implementation and local configuration, send at most one clearly labelled `[TEST]` request and confirm it arrives at the approved Gmail inbox. Update the Privacy Policy so its processor/data-flow description covers Request Documents before production release.

This decision authorizes the free-plan receiver revision and development verification. It does not authorize committing the Access Key, production deployment, publication, DNS changes or indexing.
