# APP-000 E2E Browser-Direct Contract Supersession Ruling V1.1

Date: 2026-09-09

Status: `PROJECT_CONTROL_APPLICABILITY_RULING / EFFECTIVE`

Supersedes: `APP000_E2E_BROWSER_DIRECT_CONTRACT_SUPERSESSION_RULING_V1.0.md`

Applies to: `TIO2-MY-PRERELEASE-PUBLIC-PATHS-2026-09-09-V1`

## 1. Correction purpose

V1.0 correctly required migration of the historical APP-000 E2E suite from the zero-child/server-receiver implementation to the approved five-child/browser-direct implementation. Its evidence wording was too broad: it said Page routing fields and request-token fields must remain absent from sanitized evidence. That wording conflicts with the already approved combined design and implementation plan, which expressly use an opaque request token to correlate one provider acknowledgement with one separately confirmed inbox receipt.

This V1.1 corrects that evidence boundary. It does not change the page, form, provider, fields, Buyer Clean copy, recipient, Application activation, test scope or release authority.

## 2. Authority order

The effective authority is:

1. the user's 2026-09-09 browser-direct and combined prerelease approvals;
2. `PRERELEASE_PUBLIC_PATHS_FORMS_AND_RESOURCE_ACTIVATION_DESIGN_V1.0.md`;
3. `docs/superpowers/plans/2026-09-09-prerelease-public-paths-forms-resource-activation.md`;
4. this V1.1 applicability ruling;
5. V1.0 and the historical APP-000 Gate 8/9 records as immutable history.

V1.0 section 3 items 4 and 6 are superseded only where they prohibit approved internal sanitized evidence from containing Page ID or an opaque request token. All other V1.0 requirements remain effective.

## 3. Current sanitized evidence contract

The following fields are permitted in private project verification artifacts because they are required to prove workflow outcome and provider-to-inbox correlation:

- `workflow`;
- the fixed Page ID for that workflow;
- a client-generated opaque UUID request token containing no buyer or recipient information;
- provider HTTP status and normalized provider category;
- the public Thank You request state;
- UTC timestamp;
- run, command, candidate, Build and evidence identities.

The request token may be stored under the internal evidence name `requestToken` and may be repeated in the separately stored inbox-correlation row. This is the same non-personal correlation identifier sent to the provider as `request_token`; it is not Buyer Clean copy, a buyer field, an access credential or provider-returned personal content.

The following remain prohibited from sanitized artifacts, test output, screenshots, traces and error messages:

- Web3Forms access key;
- destination or receiver mailbox;
- buyer-entered values, including the synthetic Reply-To address used for the controlled test;
- full or partial serialized provider request payloads;
- raw provider response messages or bodies;
- cookies and session-marker contents;
- form DOM snapshots containing entered values;
- governance package, review, audit or Edge identities unrelated to the run/evidence identity.

`site_scope`, provider field names and routing metadata may be asserted transiently inside a test against the intercepted provider request. They do not need to be copied into the provider-attempt artifact when workflow and Page ID already establish the tested route.

## 4. Public boundary remains strict

Workflow, Page ID and request token are allowed only in the private verification artifacts and provider request needed by the approved browser-direct flow. They must not render as Buyer Clean content, accessible names, metadata, JSON-LD, browser history or buyer-visible error text.

This distinction preserves the user's established rule: internal control concepts do not leak into the buyer page, while internal evidence still contains the minimum identity needed to prove which controlled request reached the provider and inbox.

## 5. APP-000 active-flow test decision

The APP-specific suite must still be migrated rather than archived. It must:

1. assert the exact five approved child Application links;
2. retain the thirty Grade occurrences, fourteen endpoints, three support paths and applicable interaction/accessibility checks;
3. use a locally intercepted Web3Forms provider request and a fail-closed network guard;
4. assert one simulated provider POST and zero active POSTs to retained server submit paths;
5. avoid real provider submission;
6. avoid claiming the historical private server receiver recovered `source_page_id=APP-000` for the current browser-direct flow.

The historical F01-R2 private-attribution result remains valid only for its bound historical implementation. `/api/rfq/context` and the retained private receiver may remain compatibility assets but cannot prove current active-flow attribution.

## 6. Disposition of pre-merge Finding F01

`PPF-G9-PREMERGE-F01` was technically consistent with the superseded V1.0 wording but is not consistent with the prior user-approved combined design and plan. The current candidate must not be changed merely to remove Page ID or the opaque request token from internal sanitized evidence.

The independent Reviewer must re-evaluate the same exact candidate under V1.1. If the artifacts contain only the allowed fields above and all prohibited content remains absent, record:

```text
PPF-G9-PREMERGE-F01 = WITHDRAWN / SUPERSEDED_RULE_CONFLICT
```

If independent inspection finds any prohibited content, return a new precise Finding for that actual disclosure. Do not convert the V1.0 wording conflict into a code repair.

## 7. Impact, risk and later change

This correction preserves one-to-one inbox correlation and avoids replacing an approved proof with a weaker manual inference based only on subject or workflow. The stored token is an opaque UUID, but it still identifies one controlled transaction; access to the verification artifact therefore remains limited to project evidence handling.

If the user later requires correlation tokens to be absent or hashed in stored evidence, the inbox confirmation design must be revised as one coordinated change. It must not be changed inside an APP E2E applicability ruling.

This ruling does not authorize merge, push, deployment, publication, indexing, Gate 10 or additional real external form submissions.
