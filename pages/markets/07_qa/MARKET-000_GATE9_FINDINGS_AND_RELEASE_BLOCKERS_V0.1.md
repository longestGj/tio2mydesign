# MARKET-000 Gate 9 Findings and Release Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-000` / `/markets/` |
| Review ID | `MARKET-000-G9-ROQA-02` |
| Date | 2026-09-04 |
| Current status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Decision | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Gate 10 | `NOT_AUTHORIZED` |

## 1. Closed earlier findings

The three items previously grouped under `MARKET-000-G9-ROQA-01` are all `VERIFIED_FIXED / CLOSED`:

1. Market typography no longer leaks into shared Global Chrome.
2. Footer headings do not overlap at 390, 768 or 1440 and remain visually closed at 320.
3. Missing, multiple or invalid MARKET-000 CMS records fail closed through the verified resolver.

These closures are independent from the findings below.

## 2. Closed implementation finding and current external blockers

### MARKET-G9-P0-01 — Canonical target redirects away

Owner: shared development as the sole MARKET-000 implementation P0 in this return.

Observed:

- `GET /markets/` → 308 `Location: /markets`;
- `GET /markets` → 200;
- the 200 document declares `https://tio2malaysia.com/markets/` as Canonical.

This is not a self-Canonical result and conflicts with the approved stable URL and Gate 7 redirect/Canonical parity contract.

Required correction:

1. Preserve the approved `/markets/` Canonical unless project governance separately changes the registered URL.
2. Make the approved Canonical resolve directly to the intended 200 representation, with the non-canonical variant redirecting to it.
3. Recheck browser final URL, redirect chain, Canonical element, internal links, sitemap policy and Schema URLs together.

Resolution: `VERIFIED_FIXED / CLOSED` on 2026-09-04. Commit `616193f3dbf059f0e081c8d59119c008ba2b848b` makes `/markets/` the direct 200 representation and `/markets` the 308 variant; targeted tests, production build, browser, API, Schema, sitemap and four-viewport checks passed. See `MARKET-000_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.1.md` and `MARKET-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md`.

### MARKET-G9-P0-02 — Visible destination routes are broken

Owners: the ten Market child-page owners and `APP-000` owner, coordinated by project control; these are external dependencies/publication gates, not authorization for this task or shared development to create the pages.

Observed:

- all 10 visible Market actions return final 404;
- visible `Explore Applications` returns final 404;
- the 10-item Schema `ItemList` contains the same unavailable Market targets.

Required correction/dependency resolution:

1. Keep the 10 child-Market publication gate open; do not fabricate child content or silently substitute other destinations.
2. Coordinate separate approval and implementation of all 10 visible child-Market routes before MARKET-000 release acceptance.
3. Coordinate `APP-000` route readiness with its owning task.
4. Re-run every visible anchor through redirect, response, Canonical, scope and accessibility checks.
5. Verify `ItemList` remains atomic with the same 10 visible, working actions.

This finding does not itself authorize development or publication of Market child pages.

### MARKET-G9-P0-03 — Fixed RFQ cannot complete its required path

Owner: CONV-RFQ/environment receiver owner; external dependency and release gate.

Observed:

- all shared-Chrome RFQ actions remain visible and target `/request-a-quote/`;
- the route returns 200;
- the page renders `The quotation request form is temporarily unavailable.` and contains no submit control;
- the audited environment has no `NEXT_PUBLIC_TIO2_MY_WEB3FORMS_ACCESS_KEY`.

Required correction/dependency resolution:

1. Keep RFQ visible; do not replace it with Contact or hide the action.
2. Configure the approved receiver/access key only through the authorized external development/environment process; do not commit a secret.
3. Provide fresh browser evidence for validation, privacy notice, server failure, retry, success acknowledgement and the same destination from Desktop Header, Mobile Header, Mobile Menu and Footer.
4. Keep release and indexing blocked until the end-to-end path passes.

### MARKET-G9-P1-04 — Unresolved planned routes return server errors

Owners: CONV-DOC, Trade-route owners and the shared route layer; full-site route-cleanliness P1/release gate.

Observed:

- `CONV-DOC` returns 500 because its required WordPress record is absent;
- all four specific Trade planned URLs return 500 through the generic Resources route;
- PT-BR and Trade remain absent from MARKET-000 DOM, Schema, hreflang and sitemap, so no frozen content leak occurred.

Required correction:

1. Resolve `CONV-DOC` with its owning task before any surface depends on it.
2. Ensure unapproved or missing specific Trade records fail closed without public content, guessed fallback or server error.
3. Do not expose specific Trade links until source, scope, date, content and freshness are independently approved.

## 3. Carry-forward status

| Gate 7 item | Gate 9 state |
|---|---|
| `MARKET-G6-B01` — routes | `OPEN / FAIL` because visible Market and Applications destinations are broken |
| `MARKET-G6-B02` — RFQ route/form | `OPEN / FAIL` because the actual form path is unavailable |
| `MARKET-G6-B03` — runtime DOM/metadata/Schema/keyboard/responsive | `PASS / CLOSED_FOR_MARKET-000`; self-Canonical parity and all other tested subdomains pass |
| `MKT-R002`–`MKT-R005` | Remain OPEN/FROZEN; unchanged |

## 4. Re-review closure

The MARKET-000 implementation re-review passed. The following remain external or full-site release requirements:

- 10/10 child-Market actions plus `APP-000` returning approved behavior;
- `ItemList` URLs matching the same 10 live actions;
- RFQ validation/failure/retry/success evidence with receiver configuration present;
- no PT-BR, specific Trade or row-level PRODUCT V0.3 leakage;
- repeat 320/390/768/1440 overflow, target, keyboard, focus and Axe checks;
- fresh test, typecheck and production-build evidence;
- clean D16 tracked state.

Current result:

`MARKET-G9-P0-01 = VERIFIED_FIXED / CLOSED`

`MARKET-000-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

`MARKET-000 Gate 9 = READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`

`Gate 10 = NOT_AUTHORIZED`
