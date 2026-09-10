# Prerelease Public Paths, Forms and Resource Pre-Merge Acceptance V1.0

Date: 2026-09-09  
Reviewer: independent D23 Gate 9 read-only acceptance  
Candidate: `TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1`  
Decision: **PASS — combined implementation is ready for the authorized local integration step**

Applicability revision: 2026-09-09 V1.1 targeted re-evaluation completed against the unchanged candidate after `APP000_E2E_BROWSER_DIRECT_CONTRACT_SUPERSESSION_RULING_V1.1.md` superseded the conflicting V1.0 evidence wording.

## 1. Status

```text
RECHECK_SCOPE_STATUS = PASS / COMBINED_IMPLEMENTATION_PREMERGE_CHECKED
PAGE_GATE9_STATUS = NOT_FINAL / CLEAN_MAIN_PRERELEASE_NOT_EXECUTED
INTEGRATION_STATUS = INTEGRATION_READY
RELEASE_STATUS = NOT_AUTHORIZED
```

This is the Task 9A pre-merge decision. It confirms the combined candidate is ready for the already-authorized local integration sequence. It is not final Gate 9 and does not authorize release, deployment, publication, DNS or indexing changes.

## 2. Candidate identity and intake

| Item | Accepted identity |
|---|---|
| D16 worktree | `D:/16Wordpress_nextjs/.worktrees/prerelease-public-paths-forms` |
| Branch | `codex/prerelease-public-paths-forms` |
| Baseline `develop` | `149bbae23cf6b5376a037da528a1379d298bdfd4` |
| Implementation commit | `f81321c07d6026ef1e5119cfb7b58914225ff753` |
| Evidence HEAD | `b081001e93f7ad269dd25ff5c5b1a3177f8d63fa` |
| Build ID | `qyjMXbbCPr3yW3ZlKuD97` |
| Next.js runtime | `http://127.0.0.1:3183` |
| Dedicated CMS | `http://127.0.0.1:8181` |
| D16 source Manifest | `D:/16Wordpress_nextjs/.tmp/gate8-manifests/TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1/gate8_evidence_manifest.json` |
| D23 intake Manifest | `D:/23MySec/docs/verification/intake/TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1/gate8_evidence_manifest.json` |
| Manifest SHA-256 | `4c90f90a934b9eb102d1446a661b1fb6e68964e62ed50ba90670b9bfaf3fc257` |

The two Manifest files were byte-identical. The worktree was clean at the declared evidence HEAD. Git ancestry checks passed from baseline to implementation and from implementation to evidence HEAD. No D16 file was modified during this review.

## 3. Independent evidence executed

### 3.1 Official machine validation

- Official Manifest validator: `PASS`, 487 checks, zero non-pass results.
- Official two-round preflight: `PASS`, 118 of 118 requests in each required sequence, zero non-pass results.
- Independent runtime probe: `PASS`; 58 declared pages returned their expected status, 78 unique internal paths had no unexpected status, active bundles contained the Web3Forms endpoint and contained none of the three superseded server-submit endpoints.
- Resources PHP/TypeScript H0-H5 parity: independently enabled and executed on the exact evidence HEAD; `1 file passed / 1 test passed`.
- Live-evidence infrastructure tests: `2 files passed / 6 tests passed`. Under V1.1, their acceptance of a fixed Page ID and validated opaque UUID `requestToken` is the approved correlation behavior; their synthetic-buyer checks confirm the prohibited values are absent from provider-attempt, fragment and aggregate artifacts.
- V1.1 artifact privacy scan: `PASS`; all 78 Manifest-declared artifacts were present and hash-matched. Across 45 text artifacts and 33 image artifacts, the scan found zero email values, zero known receiver values, zero synthetic Reply-To or buyer sentinel values, zero access-key values, zero serialized payload/raw-body structures, zero cookie/session values and zero prohibited trace/HAR/video/DOM/HTML/archive capture paths.

Generated D23 evidence:

- `docs/verification/PRERELEASE_PUBLIC_PATHS_FORMS_RESOURCE_PREMERGE_ACCEPTANCE_V1.0/evidence-validation.json`
- `docs/verification/PRERELEASE_PUBLIC_PATHS_FORMS_RESOURCE_PREMERGE_ACCEPTANCE_V1.0/preflight.json`
- `docs/verification/PRERELEASE_PUBLIC_PATHS_FORMS_RESOURCE_PREMERGE_ACCEPTANCE_V1.0/independent-runtime-probe.json`
- `docs/verification/PRERELEASE_PUBLIC_PATHS_FORMS_RESOURCE_PREMERGE_ACCEPTANCE_V1.0/resource-php-ts-parity.log`
- `docs/verification/PRERELEASE_PUBLIC_PATHS_FORMS_RESOURCE_PREMERGE_ACCEPTANCE_V1.0/live-evidence-tests.log`
- `docs/verification/PRERELEASE_PUBLIC_PATHS_FORMS_RESOURCE_PREMERGE_ACCEPTANCE_V1.0/v11-artifact-privacy-scan.json`

### 3.2 Built-in browser review

The exact candidate runtime was reviewed in the built-in browser without making a real provider submission.

- Home: exactly six approved public actions; native links; no disabled substitute behavior or horizontal overflow.
- Product Hub: the approved directory section contains exactly 14 Grade links; the Process section contains the approved two process actions; the support section contains three paths. The broader page contains other contextual Grade actions, so the approved directory was scoped to its own section before counting.
- Applications Hub: exactly five provisional child routes, 30 Grade relationship links, six details open at desktop/tablet and closed at mobile, three support paths, no overflow.
- Five provisional Application children: one H1, correct `page_id` and `site_scope`, `noindex, nofollow`, no canonical or `og:url`, and no absolute Schema URL.
- Documents Hub: three Document Guide links in the approved module position.
- Resources Hub: eight links grouped as Sourcing 1, Technical Evaluation 3 and Trade & Market 4; no standalone `Latest`, `Current` or `Featured` label; `ItemList` count eight.
- Responsive matrix at 390, 768 and 1440 CSS px covered Home, Product, Applications, Documents, Resources, all three form pages and Thank You with no horizontal overflow.
- Applications-to-RFQ navigation produced the clean RFQ URL with no APP attribution in query, fields or observed browser state.
- Empty-submit checks on RFQ, Sample and Documents request stayed local, showed validation errors and made no navigation or external request.
- Thank You direct-access fallback and supplied success-state screenshots were inspected. Positive and negative provider paths remain represented by intercepted/local evidence; this review made zero real Web3Forms submissions.

### 3.3 Source, diff and supplied evidence review

- The exact baseline-to-implementation and implementation-to-evidence diffs were inspected.
- Browser transport uses `https://api.web3forms.com/submit` and accepts success only for HTTP 200 plus parsed JSON `success === true`; rejection, malformed response, timeout, abort and network failure are fail-closed.
- Source and built-bundle scans found no active call to `/api/rfq/submit`, `/api/tio2-my/rfq-private-submit` or `/api/sample/submit`.
- The migrated APP end-to-end coverage retains five child routes, 30 Grade relationship occurrences, 14 Grade endpoints, responsive behavior, accessible names, Buyer Clean checks, a locally intercepted provider POST, zero retained submit-path POSTs, and fail-closed network guarding. The obsolete dedicated APP configuration was removed.
- Supplied suite evidence records 356 test files passed, 21 skipped, 2,997 tests passed and 51 skipped; lint, typecheck and production build passed. The skip disclosure is retained and is not restated as all possible tests passing.
- The independently executed Resources PHP/TypeScript parity test closes the review question created by its earlier optional-gate skip. Its D23 log is bound to this independent acceptance record.

## 4. V1.1 applicability re-evaluation and Finding disposition

### PPF-G9-PREMERGE-F01 = WITHDRAWN / SUPERSEDED_RULE_CONFLICT

The original Finding correctly applied the wording in V1.0. Effective ruling `APP000_E2E_BROWSER_DIRECT_CONTRACT_SUPERSESSION_RULING_V1.1.md`, committed as `a8df6cecf23e397366e264fa0259c7bd6b865486`, establishes that the V1.0 wording conflicted with the user's already approved combined design and implementation plan.

Under V1.1, the private internal evidence may contain:

- workflow and its fixed Page ID;
- a client-generated opaque UUID `requestToken` containing no buyer or recipient information;
- HTTP status, normalized provider category and public Thank You request state;
- UTC and run/command/candidate/Build/evidence identities.

The unchanged candidate's `providerAttempt` object is limited to that permitted schema: `workflow`, fixed `pageId`, validated UUID `requestToken`, `httpStatus`, normalized `providerCategory`, `thankYouRequest` and `timestamp`. The writer adds the permitted `commandUuid`. It does not copy `site_scope`, destination mailbox, buyer fields, access key, request payload, raw provider message/body, cookies or session-marker contents into the provider-attempt artifact.

The targeted V1.1 scan independently checked all 78 hash-bound Manifest artifacts:

- all 78 files were present and matched their declared SHA-256 values;
- 45 text artifacts contained zero email values, known receiver values, synthetic Reply-To/buyer sentinel values, access-key values, serialized payload/raw-body structures, or cookie/session values;
- 33 images were public-page, empty-form, cookie-settings or Thank You captures already covered by the visual review;
- no trace, HAR, video, filled-form DOM/HTML capture or archive was declared;
- the public browser checks found no Page ID or request-token leakage into visible copy, accessible names, metadata, JSON-LD, history, form fields or buyer-visible errors.

The live-evidence unit/privacy tests also passed `2 files / 6 tests`, including synthetic-buyer sentinel checks against provider-attempt, fragment and aggregate artifacts. No real provider request was made during the re-evaluation.

No replacement privacy Finding is opened. D16 repair and a new Manifest are not required for this V1.1 disposition.

## 5. Removed checks and remaining final-Gate boundary

The following are intentionally recorded as `NOT_TESTED / NO_LONGER_REQUIRED_BY_USER_DECISION` and are neither findings nor PASS claims:

- native-browser 200% zoom;
- physical-device and touch-device testing;
- screen-reader and other assistive-technology testing;
- forced-colors testing.

With F01 withdrawn and pre-merge integration accepted, final Gate 9 still requires the clean-main prerelease candidate and the three real provider-acknowledgement/destination-inbox results under the approved controlled process. Those future checks are not authorized by this report.

## 6. Pre-merge pass notice

`GATE9_PREMERGE_PASS_NOTICE` is issued for unchanged candidate `TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1`, implementation `f81321c07d6026ef1e5119cfb7b58914225ff753`, evidence HEAD `b081001e93f7ad269dd25ff5c5b1a3177f8d63fa` and Build `qyjMXbbCPr3yW3ZlKuD97`. The runtime hold condition is satisfied by this pass notice. The existing D16 integration task may proceed only under its separately recorded local integration authorization and sequence.
