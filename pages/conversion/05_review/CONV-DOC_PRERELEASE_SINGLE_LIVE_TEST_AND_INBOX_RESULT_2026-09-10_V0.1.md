# CONV-DOC Prerelease Single Live Test and Inbox Result — 2026-09-10 V0.1

## Control

| Field | Value |
|---|---|
| Page / workflow | `CONV-DOC` / `documents` |
| Candidate commit | `e0d074996cef3bba5bc00e496b43cac7d04748e8` |
| Prerelease run | `20260910T074735Z-e0d074996cef` |
| Build | `ld0jNI3DcMs1gI175JW8s` |
| Runtime state before test | `HEALTHY` |
| Request token | `73018751-85ef-4094-bd04-ff6c853b06ab` |
| Attempt time | `2026-09-10T07:58:00.995Z` |
| User inbox confirmation | `NOT_RECEIVED / USER_CONFIRMED_2026-09-10` |

## Exact result

The user authorized one real Request Documents submission through the actual prerelease page after the current UUID-shaped Web3Forms Access Key was included in a fresh build. The browser submitted the complete valid synthetic form through the active browser-direct JSON path.

```text
EXTERNAL_POST_COUNT = 1
BLOCKED_OR_DUPLICATE_POST_COUNT = 0
HTTP_STATUS = null
MEDIA_TYPE = null
PROVIDER_CATEGORY = timeout
THANK_YOU_REQUEST = null
INBOX_RECEIPT = NOT_RECEIVED / USER_CONFIRMED
END_TO_END_RESULT = NOT_PASSED
RETRY = NOT_AUTHORIZED / NOT_EXECUTED
```

The sanitized D16 result is `D:/16Wordpress_nextjs/.local-evidence/documents-single-20260910/result.json`, SHA-256 `0B8E583601CCDBC86E4211EBCA53DE3BC033377D3419DED4030C1CE4BAAA6C10`.

## Interpretation boundary

This result proves that the single controlled attempt did not establish provider acceptance, a positive browser response, a Documents Thank You transition or destination-inbox delivery. It does not by itself prove that the Access Key is invalid or identify whether the failure occurred in provider account binding, provider policy, anti-automation/network handling or another external boundary.

The earlier server-side GET `403` observation is not used as browser-POST evidence. Web3Forms documents client/browser submission as the expected free-plan mode and warns that server-side access can return `403`.

No RFQ or Sample submission, retry, mailbox access, code change, push, deployment, Gate 10 or release occurred in this test.

## Next bounded diagnostic

Before changing website architecture, compare one visible ordinary-Chrome submission through the same actual prerelease page with this automated-browser result, or verify the Access Key's recipient binding and domain restrictions in the Web3Forms account. Any additional real submission requires a new explicit authorization.
