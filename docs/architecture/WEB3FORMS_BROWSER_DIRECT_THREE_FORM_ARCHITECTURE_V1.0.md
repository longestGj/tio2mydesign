# Web3Forms Browser-Direct Three-Form Architecture V1.0

Date: 2026-09-09. Status: `DRAFT_FOR_USER_SPEC_REVIEW / IMPLEMENTATION_NOT_STARTED`.

## 1. Decision and purpose

The user selected the Web3Forms browser-direct option for `CONV-RFQ`, `CONV-SAMPLE` and `CONV-DOC`. The user then narrowed the implementation boundary: retain the existing Sample server receipt ledger, receiver binding, server proxy code and RFQ server/hybrid code for now. This change must stop the current browser workflows from calling or automatically falling back to those server paths; it does not delete the retained code, configuration or historical evidence.

The purpose is to align the active form flow with Web3Forms Free's supported client-side model. Web3Forms documents `POST https://api.web3forms.com/submit` with JSON and an `access_key` as the normal browser integration. Its troubleshooting guidance says server-side/proxied requests may return 403 unless a paid account and server-IP Safelist are configured.

Official references:

- `https://docs.web3forms.com/getting-started/api-reference`
- `https://docs.web3forms.com/getting-started/troubleshooting`
- `https://docs.web3forms.com/how-to-guides/html-and-javascript`

## 2. Active data flow

All three active workflows use one shared browser-side Web3Forms transport with page-specific validation and payload mapping:

```text
Buyer form
  -> page validation
  -> shared browser Web3Forms transport
  -> POST https://api.web3forms.com/submit
  -> HTTP 200 + JSON success=true
  -> current-session non-personal success marker
  -> matching /thank-you/?request=... state
```

The public Web3Forms access key is supplied through the existing `NEXT_PUBLIC_TIO2_MY_WEB3FORMS_ACCESS_KEY` build/runtime configuration. The destination mailbox is not sent as a buyer-controlled field; Web3Forms resolves it from the access-key account binding. Each payload retains the approved page/scope/workflow fields, buyer form fields, environment label and a client-generated opaque request token used for evidence correlation.

The three workflows must not use server proxy first/client fallback or client first/server fallback. A network or provider failure remains a failure in the same browser flow.

## 3. Success and Thank You contract

The shared transport returns these normalized outcomes:

| Outcome | Required observation | Page behavior |
|---|---|---|
| `provider_accepted` | HTTP 200, JSON content and `success === true` | Create one matching current-session marker, emit the consent-eligible workflow success event once, then navigate to the matching Thank You state |
| `provider_rejected` | Provider JSON has `success === false`, or HTTP 400/422/429 | Do not create a marker or navigate; preserve values and show the approved retryable failure state |
| `submission_unconfirmed` | Network error, abort, timeout, non-JSON response, unexpected status or ambiguous response | Do not create a marker or navigate; preserve values and show the approved failure state |
| `unavailable` | Public access key absent or malformed at the consumer boundary | Do not submit; show the approved unavailable/failure state |

`provider_accepted` means Web3Forms positively acknowledged the request. It does not mean the destination mailbox has been checked. Provider acknowledgement and inbox receipt remain separate Gate 9 evidence rows. HTTP 2xx alone, query parameters, elapsed time and a locally manufactured marker never produce a success state.

Existing Buyer Clean success copy and module order remain unchanged. This architecture changes the technical predicate behind the success marker, not the approved visible claim.

## 4. Duplicate and retry behavior

The active browser path provides bounded client-side protection:

- a pending guard blocks double-click and concurrent submission while one request is in flight;
- a completed guard prevents a second submission after a confirmed success in the same mounted flow;
- one opaque request token is reused for the same unchanged manual retry and regenerated when relevant form values change;
- the application never retries automatically after an ambiguous response;
- failures retain buyer-entered values and allow an explicit manual retry.

Web3Forms Free does not provide this project with proven receiver-side persistence or strict idempotent deduplication. A manual retry after an ambiguous network failure can create a duplicate email if the provider accepted the first request but the browser lost its response. The implementation and Gate 9 record must state this limit internally and must not claim durable deduplication.

## 5. Retained inactive compatibility paths

The following implementation remains in the repository during this change:

- Sample server proxy, receiver binding verification and receipt ledger;
- Sample server-side idempotency/deduplication code and its tests;
- RFQ private/server submission route and prior hybrid receiver code;
- their non-secret configuration names and historical evidence.

They are compatibility/rollback assets only. Acceptance conditions:

1. Current RFQ and Sample browser bundles contain no call, fallback or conditional route to the retained server endpoints.
2. Current live-form tests do not invoke retained server endpoints as proof of the active workflow.
3. Retained code continues to pass its existing isolated tests, but those tests do not establish current production behavior.
4. No retained secret, receiver address or receipt record enters the browser bundle, public evidence or Buyer Clean content.
5. Re-enabling a retained server path requires a new explicit architecture decision and production-equivalent provider support evidence.

This boundary provides a reversible rollback without preserving the unsupported hybrid behavior in the active path.

## 6. Error handling and diagnostic evidence

Buyer-facing errors continue to use approved generic copy. The browser transport may parse the provider's response only to classify success or failure. Runtime code must not render raw provider error text to buyers.

Prerelease evidence records a sanitized diagnostic object containing workflow, request token, timestamp, origin, HTTP status, response media type, normalized outcome and an allowlisted provider error code/message category when present. It must exclude the access key, destination mailbox, buyer fields, full payload, cookies and session marker contents.

The current test harness must stop reducing a provider error to status alone. A 400 response must retain enough sanitized information to distinguish invalid access key, domain/origin restriction, rate limit, malformed payload and provider policy rejection without exposing secrets.

## 7. Privacy and configuration

The active flow is Browser -> Web3Forms -> configured mailbox, matching the currently approved legal/privacy data-flow direction. The Web3Forms access key is a public form identifier under the provider's documented model, not a secret API credential. Receiver mailbox ownership and access-key binding remain private operational evidence and must not render.

No new provider, cookie, local-storage item or buyer-visible field is introduced. The current-session Thank You marker remains non-personal and short-lived. Existing consent-gated analytics rules remain unchanged.

## 8. Implementation scope

D16 implementation should:

1. establish one shared browser Web3Forms transport and typed normalized outcomes;
2. move RFQ and Sample active paths to that transport;
3. migrate Documents to the same transport without changing its approved fields or Buyer Clean copy;
4. remove active RFQ server-first/fallback behavior and active Sample server-proxy calls while retaining their code as described in section 5;
5. update Thank You eligibility, analytics naming/mapping and tests so provider acknowledgement is not confused with inbox confirmation;
6. add sanitized provider diagnostics to prerelease evidence;
7. update environment validation so the public key is required for the three active browser workflows, while dormant server configuration is not used as active readiness proof.

This implementation does not change form fields, page URLs, visible success/failure copy, recipient mailbox, legal copy, approved source-context allowlists or publication authorization.

## 9. Verification and acceptance

Implementation verification must include:

- unit tests for HTTP 200 `success=true`, HTTP 200 `success=false`, 400, 422, 429, 500, non-JSON, timeout, abort and network failure;
- proof that only the strict positive result creates a marker, navigation and one consent-eligible success event;
- proof that RFQ, Sample and Documents use the same browser transport with their own validated payload mappings;
- proof that browser bundles and runtime network traces do not call `/api/rfq/submit`, `/api/sample/submit` or the RFQ private route during the active workflows;
- retained server-path unit/integration regression tests;
- values-retained/manual-retry/double-click/concurrent-click/ambiguous-response tests;
- a clean production build and exact local-main prerelease identity;
- three controlled real browser submissions using a valid configured test-sender address and unique non-commercial subject/token;
- sanitized Web3Forms response evidence for all three workflows;
- matching Thank You positive states only after provider acceptance;
- separate manual confirmation of the three correlated messages in the approved destination mailbox.

If the provider blocks the local origin, returns a challenge or rejects the access key, record the exact sanitized provider result. Do not restore server fallback, manufacture success or treat a simulated response as provider evidence.

## 10. Governance synchronization and rollback

After implementation evidence exists, D23 must issue successor records for the affected RFQ, Sample, Documents and Thank You receiver predicates. Historical Gate 7/8/9 files remain immutable. The successor explicitly supersedes only:

- active server/hybrid routing assumptions;
- Sample's active server-persistence/idempotency release requirement;
- the old Sample `ok=true && receipt_confirmed=true` source predicate;
- any use of server-path tests as proof of the active Web3Forms Free workflow.

It preserves strict positive acknowledgement, failure/value retention, no automatic retry, privacy/scope, consent/event, provider-vs-inbox separation and all approved Buyer Clean content.

Rollback is to restore the retained server implementation only after a separately approved provider plan/IP Safelist or another server-capable receiver has production-equivalent evidence. A code rollback without that external capability would restore the known 403-prone architecture and is not acceptable as a release fix.

Gate 9 remains open until the new implementation, three provider-positive submissions, correlated inbox receipts and applicable device/AT evidence are independently verified. This specification does not authorize Gate 10, push, remote deployment or publication.
