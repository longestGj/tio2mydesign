# APP-000 E2E Browser-Direct Contract Supersession Ruling V1.0

Date: 2026-09-09

Status: `PROJECT_CONTROL_APPLICABILITY_RULING / EFFECTIVE`

Applies to: `TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1`

## 1. Conflict and root cause

`tests/e2e/app000-gate8.spec.ts` and its dedicated Playwright entry encode the implementation accepted for the earlier APP-000 Gate 9 candidate. That historical implementation intentionally:

- rendered no Application child-page links because the five child routes were not yet public;
- submitted RFQ through `/api/rfq/submit`;
- used a private server boundary to recover `source_page_id=APP-000` while keeping the public URL and browser surfaces clean.

The current user-approved combined prerelease design changes those exact premises. It activates the five Application child links and makes the active RFQ, Sample and Documents workflows browser-direct to Web3Forms, with no active call or fallback to the retained server submit paths. The old assertions therefore fail because their governing architecture was superseded, not because the current implementation regressed.

## 2. Authority and decision

The effective authority is:

1. the user's 2026-09-09 browser-direct and combined prerelease approvals;
2. `PRERELEASE_PUBLIC_PATHS_FORMS_AND_RESOURCE_ACTIVATION_DESIGN_V1.0.md`;
3. this applicability ruling;
4. the historical APP-000 Gate 8 and Gate 9 evidence for the candidate to which it was bound.

The old APP-000 suite must **not** remain as an executable current-contract suite, and it must **not** be silently skipped or merely removed from a default command while still appearing current. D16 must migrate the APP-specific E2E coverage to the approved active contract. Git history and the immutable D23 Gate 9 records preserve the old test semantics; a second executable historical copy is unnecessary and creates accidental external-submit risk.

The dedicated `playwright.app000.config.ts` may remain only if another current test entry still consumes it. Otherwise it should be removed as obsolete test plumbing. This is test maintenance within the already approved implementation scope, not a new page or business behavior.

## 3. Required migrated APP-000 coverage

The migrated suite must retain the useful APP-specific checks and replace only the superseded assumptions:

1. Assert the exact five approved child Application links rather than zero child links.
2. Retain the thirty Grade relationship occurrences, fourteen Grade endpoint identities, three support paths, approved responsive disclosure behavior, keyboard/focus behavior, accessible names, no horizontal overflow and applicable automated accessibility checks.
3. Retain the Buyer Clean boundary for visible body copy, accessible names, metadata, JSON-LD, browser history and browser storage. Governance identities such as Edge, contract, package, review and audit IDs remain prohibited from those surfaces.
4. Do not treat the fixed browser transport fields required by the approved active flow, including `site_scope`, workflow/page routing fields and request-token field names, as Buyer Clean copy. They may appear only in the provider request boundary and must remain absent from visible copy and sanitized evidence.
5. Replace the `/api/rfq/submit` plus private-receiver assertion with a locally intercepted `https://api.web3forms.com/submit` request. The test must intercept before submission, make no real provider request, assert exactly one provider POST, assert zero POSTs to the retained RFQ/Sample server submit paths, and verify the strict simulated provider-positive result leads to the matching Quote Thank You state.
6. The intercepted payload may be inspected inside the test for the approved fixed routing values and synthetic form values. Test output and committed evidence must not contain the access key, destination mailbox, buyer values, full payload, cookies or session-marker contents.
7. Add a fail-closed network guard so an unmocked non-read request or provider request fails the test before any real external submission.

The current `prerelease-public-paths.spec.ts` remains the collection/readiness authority for the five child routes and 58-object scope. The migrated APP-000 suite remains the APP-specific behavior and regression authority; the shared form unit and active-flow tests remain the receiver behavior authority. Passing one does not replace the others.

## 4. APP source attribution disposition

The earlier F01-R2 result remains valid historical evidence only for implementation `6ece488cf88f060457890ad7f37da0db752564ef`, where the active server receiver privately recovered `source_page_id=APP-000`.

For the current browser-direct flow:

- the clean APP-000 RFQ link does not establish server-private APP attribution;
- `/api/rfq/context`, its opaque cookie and the retained private receiver may remain compatibility plumbing if otherwise unchanged, but no current active-flow test or Gate 9 record may use them as proof that the Web3Forms submission contains `source_page_id=APP-000`;
- the current test must not infer or manufacture APP-000 attribution that the actual browser-direct payload does not carry;
- restoring private APP attribution in the active flow would require a separate architecture decision because it would change the approved browser-direct boundary.

This supersedes the active-flow applicability of the old private-attribution assertion. It does not invalidate or rewrite the immutable historical F01-R2 evidence.

## 5. Evidence and acceptance effect

D16 must record the migration as part of the final Task 9 implementation/evidence HEAD and rerun the migrated APP suite with all provider traffic intercepted. The Gate 8 handoff must list:

- the old assertions that were superseded;
- the current replacement tests;
- the zero-real-submit result;
- the exact current candidate, Build and runtime identity.

The independent pre-merge Reviewer must examine the migrated test and the actual candidate behavior. It must not carry the earlier private-attribution PASS forward to the browser-direct implementation. Final Gate 9 remains dependent on the clean-main prerelease and the three separately recorded real provider and inbox results.

This ruling does not authorize merge, push, deployment, publication, indexing, Gate 10 or a real external form submission beyond the existing controlled prerelease authorization.
