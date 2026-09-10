# CONV-DOC Web3Forms Multipart Comparison Live Result — 2026-09-10 V0.1

## Control

| Field | Value |
|---|---|
| Diagnostic commit | `9571dd2ab7e7f2c7c9cb373e008ca81b3c534822` |
| Transport | `multipart/form-data` |
| Browser | Google Chrome `152.0.7977.82`, visible / non-headless |
| Origin | `http://127.0.0.1:3100` isolated diagnostic route |
| Request token | `33e9cc23-1b62-4705-ad77-99ced51f0a30` |
| User authorization | One multipart real submission |
| Destination inbox | `RECEIVED / USER_CONFIRMED_2026-09-10` |

## Exact result

```text
STATUS = END_TO_END_PASSED
EXTERNAL_POST_COUNT = 1
EXTERNAL_REQUEST_COUNT = 1
BLOCKED_WRITE_COUNT = 0
HTTP_STATUS = 200
MEDIA_TYPE = application/json
PARSED_SUCCESS = true
PROVIDER_CATEGORY = accepted
INBOX_RECEIPT = RECEIVED / USER_CONFIRMED
ELAPSED_MS = 2314
RETRY = NOT_EXECUTED
```

The request used the current `NEXT_PUBLIC_TIO2_MY_WEB3FORMS_ACCESS_KEY`. The diagnostic verified that the key was present, UUID-shaped and equal to the transient browser value without persisting or exposing the value. The request used the same native `FormData` transport pattern that had previously completed real Web3Forms delivery in the `02mytio2` project.

The D16 sanitized evidence is `D:/16Wordpress_nextjs/.local-evidence/web3forms-compare/2026-09-10T08-32-59-204Z-4abe0b5c-5b39-40e0-95bd-1a3e39a9603f/result.json`, SHA-256 `26DFE0851665442D872B9581ACFD1A611C2E9250A903ADC5A932F8ECE956684A`.

## Interpretation boundary

This result establishes browser-to-provider acceptance and destination-inbox receipt for the current key from the localhost diagnostic origin using multipart transport. It rules out a general failure of the current key, recipient binding, localhost origin, visible Chrome or basic network and email-delivery path for this attempt.

It does not by itself isolate whether the earlier JSON timeout was caused by JSON transport, the automated-browser context, the actual prerelease page path, or a transient provider/network condition. A JSON comparison in the same diagnostic program would hold the key, fields, origin and browser mode constant and change only the transport.

No JSON submission, retry, RFQ or Sample submission, mailbox access, source change, push, deployment, Gate 10 or release occurred.
