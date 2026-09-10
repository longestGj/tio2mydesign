# CONV-DOC Web3Forms JSON Comparison Live Result — 2026-09-10 V0.1

## Control

| Field | Value |
|---|---|
| Diagnostic commit | `9571dd2ab7e7f2c7c9cb373e008ca81b3c534822` |
| Transport | `application/json` |
| Browser | Google Chrome `152.0.7977.82`, visible / non-headless |
| Origin | `http://127.0.0.1:3100` isolated diagnostic route |
| Request token | `cbb64098-27d5-40a8-bdee-85019644c5d6` |
| User authorization | One JSON real submission |
| Destination inbox | `PENDING_USER_CONFIRMATION` |

## Exact result

```text
STATUS = PROVIDER_ACCEPTED_NOT_INBOX_CONFIRMED
EXTERNAL_POST_COUNT = 1
EXTERNAL_REQUEST_COUNT = 1
BLOCKED_WRITE_COUNT = 0
HTTP_STATUS = 200
MEDIA_TYPE = application/json
PARSED_SUCCESS = true
PROVIDER_CATEGORY = accepted
ELAPSED_MS = 2239
RETRY = NOT_EXECUTED
```

The request used the current `NEXT_PUBLIC_TIO2_MY_WEB3FORMS_ACCESS_KEY`. The diagnostic verified that the key was present, UUID-shaped and equal to the transient browser value without persisting or exposing it. Key, synthetic fields, localhost origin, visible Chrome and diagnostic logic matched the successful multipart comparison; only the transport changed.

The D16 sanitized evidence is `D:/16Wordpress_nextjs/.local-evidence/web3forms-compare/2026-09-10T08-35-24-852Z-7f5acb2a-763f-4a54-b37b-872d4a85506b/result.json`, SHA-256 `AFFA741A16E2199503C0A1F6AFF3AC78581A92A46653CDC49317F33F10C6AD91`.

## Interpretation boundary

This result establishes browser-to-provider acceptance for the current key from the localhost diagnostic origin using JSON transport. Together with the successful multipart comparison, it rules out transport encoding alone as the cause of the earlier prerelease timeout.

Destination-inbox receipt remains pending user confirmation. The remaining material differences are the actual prerelease business page and its payload, plus the earlier automated-browser execution context or a transient condition during that attempt.

No multipart submission, retry, RFQ or Sample submission, mailbox access, source change, push, deployment, Gate 10 or release occurred in this JSON test.
