# CONV-DOC Prerelease Actual-Page Live Delivery Result — 2026-09-10 V0.1

## Control

| Field | Value |
|---|---|
| Candidate commit | `9571dd2ab7e7f2c7c9cb373e008ca81b3c534822` |
| Prerelease run | `20260910T084017Z-9571dd2ab7e7` |
| Build | `UNLFJezDdlPwbqW-BeMgX` |
| Site | `tio2-my` |
| Page | `CONV-DOC` / `http://127.0.0.1:3100/request-documents/` |
| Browser | Google Chrome `152.0.7977.82`, visible / non-headless |
| Request token | `d5ee194c-0416-4323-9523-54a254c69382` |
| User authorization | One actual-page real submission |
| Destination inbox | `RECEIVED / USER_CONFIRMED_2026-09-10` |

## Exact live result

```text
PRERELEASE_RUNTIME = HEALTHY
EXTERNAL_POST_COUNT = 1
BLOCKED_SECOND_COUNT = 0
HTTP_STATUS = 200
MEDIA_TYPE = application/json
INBOX_RECEIPT = RECEIVED / USER_CONFIRMED
BROWSER_TO_PROVIDER_TO_INBOX = PASSED
THANK_YOU_LIVE_OBSERVATION = NOT_RELIABLE
THANK_YOU_MOCKED_PROVIDER_SUCCESS = PASSED
RETRY = NOT_EXECUTED
```

The submission originated from the actual prerelease Request Documents page and used the page's active browser-direct JSON implementation. The destination inbox received the matching message for the recorded request token. This establishes that the current page, Access Key, provider binding and delivery path completed successfully.

The sanitized D16 evidence is `D:/16Wordpress_nextjs/.local-evidence/documents-native-final-20260910/result.json`, SHA-256 `45857F9DB68D39759BC34BC71B9D02435A6BF05FDE1939719697AE4E673D6FE3` before the user inbox confirmation was added to the governance conclusion.

## Harness finding

The one-off QA harness observed HTTP 200 and JSON media type but its parallel Playwright response-body read returned no boolean `success`. The harness then skipped its Thank You wait and closed Chrome. The resulting `parsedSuccess = null`, `providerCategory = unexpected` and missing Thank You observation are therefore not reliable evidence of page failure; the matching inbox receipt independently proves provider delivery.

This was a QA observation false negative. It does not justify changing the website transport, Access Key or receiver architecture. The earlier prerelease timeout was not reproduced: the current actual-page attempt received HTTP 200 in about 3.2 seconds.

## No-network Thank You confirmation

The existing `documents accepted with valid configuration` browser test ran against the actual prerelease Request Documents page with external access blocked and the provider response locally fulfilled as HTTP 200 JSON `{success:true}`. It produced one intercepted POST, navigated to `/thank-you/?request=documents` and verified the Documents panel.

```text
EXPECTED = 1
UNEXPECTED = 0
SKIPPED = 0
RESULT = PASSED
EXTERNAL_PROVIDER_POST = 0
```

Evidence:

- `D:/16Wordpress_nextjs/.local-evidence/documents-thankyou-mock-20260910/playwright-report-pass.json`, SHA-256 `E6DC11C9558BDE4F2ABF6313DD8BCC19A39C554D48B8C058BADE30F719E82705`
- `D:/16Wordpress_nextjs/.local-evidence/documents-thankyou-mock-20260910/test-pass.log`, SHA-256 `42429A8F01953E11D080031FB0387C7655F236908E0E1C4C9D4D28C67C516495`

The live submission plus user-confirmed inbox receipt establishes delivery. The no-network positive-response test establishes the Thank You transition. No website correction is required from this investigation.

No retry, RFQ or Sample submission, mailbox access, business-code change, push, deployment, Gate 10 or release occurred.
