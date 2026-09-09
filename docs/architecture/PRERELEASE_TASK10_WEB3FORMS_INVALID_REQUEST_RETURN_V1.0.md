# Prerelease Task 10 Web3Forms Invalid-Request Return V1.0

Date: 2026-09-09

Status: `TASK10_RUNTIME_RETURN / GATE8_REPAIR_AND_CONFIGURATION_REQUIRED`

Candidate: `TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1`

## 1. Runtime result

The clean-main prerelease is healthy and the retained prerelease suite passed, but the three authorized live Web3Forms attempts were not accepted. Task 10 therefore does not pass.

| Item | Exact result |
|---|---|
| Main / Run / Build | `427d232841ac60da6cc7b3e67963fffc57a4ac10` / `20260909T020009Z-427d232841ac` / `lee-2sXmT6b8pSBkNB7BC` |
| CMS identity | `8edfa73065ef785f220baabad281b762fae0be7cd193030e851b56e41acf2327` |
| Ordinary prerelease | `10/10 PASS`; 58 objects; 57 normalized internal anchor pathnames; Contact is the sole approved exception; zero external POSTs |
| Live transport | three allowed POSTs, zero blocked or duplicate writes |
| RFQ | HTTP 400 / `invalid_request`; no Thank You transition |
| Sample | HTTP 400 / `invalid_request`; no Thank You transition |
| Documents | HTTP 400 / `invalid_request`; no Thank You transition |
| Inbox | not inspected because the provider did not acknowledge acceptance |
| Retry | zero; the three authorized attempts are consumed |

Evidence:

- `D:/16Wordpress_nextjs/.local-evidence/public-paths-task10/TASK10-RESULT.json`, SHA-256 `6eedba09d4feae07be718770df62ce25f4c973872e46ddc960132f5ef45b2375`;
- `D:/16Wordpress_nextjs/.local-evidence/public-paths-task10/RESULT.md`, SHA-256 `f7d24ae9128b3295184bdf334361d4cd7035fd6413d2b0e1354ceded04491049`;
- ordinary run `20260909T020841Z-b17b7a6d-34c5-4c12-85ad-6d2440b331cf`;
- live run `20260909T021116Z-fbfb7b3d-2e49-4367-9e22-63eabb0edaa1`.

The runtime remains healthy and `main` remains clean. No push, remote deployment, production CMS write, publication, Gate 10 or release occurred.

## 2. Root-cause evidence

Web3Forms' current official API reference says the Access Key is required and that the Form ID and Access Key are the same UUID. The official browser integration uses JSON sent to `https://api.web3forms.com/submit`; the current implementation used that browser endpoint and content type.

Official references:

- `https://docs.web3forms.com/getting-started/api-reference`
- `https://docs.web3forms.com/getting-started/troubleshooting`

The configured `NEXT_PUBLIC_TIO2_MY_WEB3FORMS_ACCESS_KEY` in `.env.local` and `.env.prerelease.local` has the same private fingerprint, length 52, zero hyphens and does not match the documented UUID shape. The value itself was not printed or stored in this record.

All three workflows share that value and all three returned HTTP 400. This makes the key configuration the strongest common root-cause hypothesis. It is not recorded as conclusive because the raw provider response body was correctly excluded from evidence and the current normalized diagnostic retained only `invalid_request`.

## 3. Findings and owners

### `PPF-T10-F01` — provider configuration does not match the documented Access Key shape

**Owner:** user / prerelease configuration owner  
**Status:** `OPEN / CONFIGURATION_REQUIRED`

Replace the current configured value with the actual Web3Forms Access Key issued for the approved destination inbox. Do not paste or store the value in project evidence. The configuration owner must confirm only that the key has the documented UUID shape and is bound to the intended destination.

### `PPF-T10-F02` — readiness validation accepts an arbitrary non-empty key

**Owner:** Gate 8  
**Status:** `OPEN / IMPLEMENTATION_REPAIR_REQUIRED`

`Assert-PrereleaseEnvironmentFile` and the active form readiness boundary currently accept any non-empty, non-placeholder string. Add a shared documented-UUID-shape check so malformed configuration fails closed before a live provider request. Tests must cover blank, placeholder, malformed 52-character input and valid UUID-shaped input without storing a real key.

### `PPF-T10-F03` — HTTP 400 diagnostic category is too coarse

**Owner:** Gate 8  
**Status:** `OPEN / IMPLEMENTATION_REPAIR_REQUIRED`

The approved design requires sanitized diagnostics that distinguish likely invalid access key, domain/origin restriction, invalid email, malformed request and provider-policy rejection where the provider response permits it. Parse the provider response transiently into an allowlisted category and discard the raw body/message. Use `unknown_invalid_request` when no allowlisted match is available. Unit and privacy tests must prove raw messages, payloads, keys, addresses and buyer values are never persisted or logged.

### `PPF-T10-F04` — raw aggregate result marks inbox confirmation pending after provider rejection

**Owner:** Gate 8  
**Status:** `OPEN / IMPLEMENTATION_REPAIR_REQUIRED`

The live `result.json` sets `inboxStatus=PENDING_MANUAL_CONFIRMATION` even though all three provider attempts failed and no Thank You condition completed. Set inbox status to `NOT_APPLICABLE_PROVIDER_NOT_ACCEPTED` unless all required provider attempts are accepted. Only an all-provider-positive result may enter `PENDING_MANUAL_CONFIRMATION`.

## 4. Repair and retest boundary

Gate 8 may implement F02-F04 on a bounded repair branch with simulated provider responses only. It must not change form fields, Buyer Clean copy, endpoint architecture, recipient, active workflow count or the V1.1 evidence allowlist. It must not make another real provider request.

After the configuration owner supplies the correct Access Key, Gate 8 must validate its shape and rebuild a clean-main candidate without exposing the value. A new real three-workflow attempt requires a new explicit user authorization because the current run already used the three authorized live attempts.

Final Gate 9, inbox confirmation, Gate 10 and release remain open and unauthorized.
