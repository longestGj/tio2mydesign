# RES-PROC Gate 9 Comparative Review Report V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / Chloride vs Sulfate Titanium Dioxide |
| Route | `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Review date | 2026-09-08 |
| Review identity | D23 Project Control / independent Gate 9 read-only QA |
| Contract | `PROC-A01`–`PROC-A28` in `RES-PROC_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` |
| Result | `COMPARISON_COMPLETE / NO_CANDIDATE_PASSES_GATE9` |
| Recommendation | Return candidate one to Gate 8 for three bounded repairs; do not select or integrate candidate two |
| Gate 10 | Not authorized |

This review independently assessed both Gate 8 candidates against the same sealed 28-condition contract. Gate 8 self-checks were treated as evidence inputs, not acceptance decisions. D16 remained read-only throughout this review.

## 1. Candidate Identities and Evidence State

| Candidate | Identity | Recheck scope | Runtime state | Gate 9 conclusion |
|---|---|---|---|---|
| Candidate one | task `01a07406-9447-77b2-b44e-e32e1cfee617`; baseline `53ec50213f806ed4a9995042c4431f8e4376d36d`; implementation `a0a1253a25959fa704e9b2a23ffa69287c61f2c7`; evidence HEAD `1928a2a9276cec8a07901b5d2802fa106178b931`; Build ID `YdJaIk7sxHg5-cqRGbdWK` | `PASS` | Exact local-production runtime at `127.0.0.1:3232` returned HTTP 200; manifest validator and preflight passed | `RETURN_FOR_REPAIR` — 23 PASS, 4 FAIL, 1 NOT_VERIFIED |
| Candidate two | task `01a07432-d148-7013-a516-0af87f4fe233`; last observed code ref `818a3ef3587fbf5ea755150bafa804a92bb0454e` | `FAIL` | Former preview at `127.0.0.1:3488` now returns 502; detached worktree and commit object are no longer available from the current D16 repository | `NOT_PASS / NOT_SELECTABLE_AS_IS` — 8 FAIL, 20 NOT_VERIFIED |

Candidate one's evidence package passed schema, hash, Git ancestry, clean-worktree, Build ID and one-request runtime preflight checks. Its receipt records 187 scoped Vitest passes with two environment-gated skips, one exact WordPress runtime pass, a successful production build and 8/8 Playwright cases. Independent source and browser review found contract defects that those checks did not detect.

Candidate two had useful prototype-level tests and screenshots in its earlier task, but it did not deliver a current-baseline Gate 9 receipt. The loss of its runtime/worktree means those observations cannot be promoted to current Gate 9 PASS results.

## 2. Same-Contract Matrix

`NOT_VERIFIED` means the mandatory condition lacks evidence bound to the exact candidate and current runtime. It is blocking; it is not treated as a pass.

| ID | Candidate one | Candidate two | Independent basis |
|---|---|---|---|
| `PROC-A01` | PASS | FAIL | Candidate one exact `tio2-my` route/runtime passed. Candidate two was built on a stale parallel route layer and production-gated the local draft path. |
| `PROC-A02` | PASS | NOT_VERIFIED | Candidate one wrong-scope/missing-record fixtures passed. Candidate two has no current runtime-bound negative proof. |
| `PROC-A03` | PASS | FAIL | Candidate one WordPress payload and route identity align. Candidate two lacks the required WordPress model/config/seed/resolver/GraphQL implementation. |
| `PROC-A04` | PASS | NOT_VERIFIED | Candidate one registry/metadata ownership tests passed. Candidate two lacks a current integrated registry proof. |
| `PROC-A05` | PASS | NOT_VERIFIED | Candidate one exact H1/head/canonical passed in runtime. Candidate two preview evidence is no longer reproducible. |
| `PROC-A06` | PASS | NOT_VERIFIED | Candidate one renders 14 modules in order. Candidate two only had isolated prototype assertions. |
| `PROC-A07` | PASS | NOT_VERIFIED | Candidate one fixed collection counts passed across payload and DOM. Candidate two lacks current-bound proof. |
| `PROC-A08` | FAIL | NOT_VERIFIED | Candidate one adds an unapproved buyer-facing evidence-unavailable sentence in a revoked-source state. Candidate two lacks current-bound copy parity. |
| `PROC-A09` | PASS | NOT_VERIFIED | Candidate one runtime and six-width visuals show equal route-card weight. Candidate two visuals are not bound to a current runtime. |
| `PROC-A10` | PASS | NOT_VERIFIED | Candidate one keeps six question/evidence/interpretation records. Candidate two lacks current-bound proof. |
| `PROC-A11` | PASS | NOT_VERIFIED | Candidate one exposes all four answers in initial server HTML and disclosure behavior passed. Candidate two lacks current-bound SSR evidence. |
| `PROC-A12` | PASS | NOT_VERIFIED | Candidate one runtime/schema checks exclude FAQPage, QAPage and HowTo. Candidate two lacks current-bound schema evidence. |
| `PROC-A13` | PASS | FAIL | Candidate one complete/incomplete Article rules passed. Candidate two lacks the required current WordPress metadata path. |
| `PROC-A14` | PASS | NOT_VERIFIED | Candidate one negative schema assertions passed. Candidate two lacks current-bound schema evidence. |
| `PROC-A15` | PASS | NOT_VERIFIED | Candidate one `/products/` action and independent fail-closed relation passed. Candidate two lacks current-bound relation evidence. |
| `PROC-A16` | PASS | NOT_VERIFIED | Candidate one four-state process-pair truth table passed. Candidate two lacks current-bound route eligibility evidence. |
| `PROC-A17` | PASS | NOT_VERIFIED | Candidate one pair-off runtime has no disabled action, placeholder or orphan action gap. Candidate two lacks current-bound state evidence. |
| `PROC-A18` | PASS | NOT_VERIFIED | Candidate one exact seven-source map and adjacency passed. Candidate two lacks current-bound source evidence. |
| `PROC-A19` | FAIL | FAIL | Candidate one removes dependent claims/actions but replaces them with an unapproved evidence-gap note. Candidate two lacks the contracted WordPress source-withdrawal projection. |
| `PROC-A20` | PASS | NOT_VERIFIED | Candidate one boundary scan passed. Candidate two lacks a current public-output scan. |
| `PROC-A21` | FAIL | FAIL | Candidate one reuses but also changes the shared Global Chrome outside the page-owner boundary. Candidate two creates parallel Malaysia shell/chrome layers. |
| `PROC-A22` | PASS | NOT_VERIFIED | Candidate one six-width measurements/screenshots show no overflow or clipping. Candidate two runtime is unavailable. |
| `PROC-A23` | NOT_VERIFIED | NOT_VERIFIED | Candidate one's 16px/44px checks pass, but `Emulation.setPageScaleFactor` is page scaling rather than auditable browser UI zoom; built-in-browser attempts did not expose a verifiable 200% zoom value. Candidate two also lacks actual UI-zoom evidence. |
| `PROC-A24` | PASS | NOT_VERIFIED | Candidate one FAQ keyboard/focus and mobile-menu behavior passed in automation; built-in browser independently confirmed disclosure keyboard operation and visible focus. Candidate two runtime is unavailable. |
| `PROC-A25` | PASS | FAIL | Candidate one cache tags/invalidation include `tio2-my`. Candidate two uses a parallel local data/cache layer rather than the current WordPress integration contract. |
| `PROC-A26` | PASS | NOT_VERIFIED | Candidate one runtime is `noindex, nofollow` and Gate 10 remains off. Candidate two has no current runtime proof. |
| `PROC-A27` | PASS | FAIL | Candidate one did not promote RES-000 inventory/sitemap. Candidate two's stale-baseline generic route/config changes cannot establish unchanged current inventory/sitemap. |
| `PROC-A28` | FAIL | FAIL | Candidate one changes shared Global Chrome used by RES-ORIGIN and many other pages without owner-approved all-consumer closure. Candidate two diverges from the current Malaysia baseline and changes generic shared surfaces. |

## 3. Candidate One Findings Returned to Gate 8

### RES-PROC-G9-C1-F01 — P1 — Buyer-visible evidence-gap fallback

Affected conditions: `PROC-A08`, `PROC-A19`.

When required application evidence is unavailable, `resource-proc-v01-dto.ts` sets `evidenceAvailable: false` and the page renders: `The supporting evidence for this section is not currently available.` The revoked claim, citation and source action are removed, but the new sentence is not approved Gate 2 copy and is expressly prohibited by Gate 7 Section 3's buyer-visible placeholder/evidence-gap rule.

Closure required: remove the unapproved fallback sentence and implement the approved atomic removal with no buyer-visible evidence-gap wording and no orphan spacing. Preserve the 14-module contract unless Gate 6 issues a separately approved change. Add a regression assertion that the fallback sentence cannot enter server HTML in every revoked-source combination.

### RES-PROC-G9-C1-F02 — P1 — Shared Global Chrome changed outside the page-owner boundary

Affected conditions: `PROC-A21`, `PROC-A28`.

Candidate one changes `components/sites/tio2-my/malaysia-global-chrome.tsx` to apply and restore `inert` on `main, footer`. The change is functionally useful, but the component is shared by the homepage, Resources, RES-ORIGIN, RFQ, legal, product, document and market pages. The sealed rollback contract requires shared components to be preserved unless a separately evidenced shared regression requires their owner to act. The candidate has no Global Chrome owner approval or complete consumer regression receipt.

Closure required: route the change through the Global Chrome owner and return an approved shared-component baseline plus regression evidence for every registered consumer, or remove the shared change from the RES-PROC candidate and resolve the accessibility dependency through the current approved shared baseline. Do not create a page-specific chrome fork.

### RES-PROC-G9-C1-F03 — P1 evidence blocker — 200% browser UI zoom not proven

Affected condition: `PROC-A23`.

The submitted Playwright case invokes CDP `Emulation.setPageScaleFactor` with `pageScaleFactor: 2`. That emulates page/pinch scale and does not establish actual browser UI zoom at 200%. Independent built-in-browser keyboard attempts did not expose an auditable zoom percentage or a clearly attributable logical viewport change.

Closure required: provide actual browser UI zoom evidence at 200%, recording browser zoom state, logical/physical viewport and DPR before/after, plus overflow, clipping, fixed/sticky obstruction and target-usability checks. A viewport resize, CSS zoom, pinch scale or `Emulation.setPageScaleFactor` alone is insufficient.

## 4. Shared Root Finding

### RES-PROC-G9-RF-01 — Shared Malaysia chrome/architecture ownership is not closed

Candidate one modifies the current shared Global Chrome without owner-level regression closure. Candidate two creates a parallel shell/chrome/data architecture from a stale base and changes generic shared route/config surfaces. These map to one shared root: neither candidate, as delivered, proves conformance to the current shared-owner architecture across all consumers.

Closure is candidate-specific. Candidate one may close the root through the bounded owner-approved path in `RES-PROC-G9-C1-F02`. Candidate two would require a fresh implementation on the current D16 baseline with the current WordPress and Global Chrome contracts; its existing code is not a repair-ready integration candidate.

## 5. Browser and Source Evidence

- The built-in browser opened the exact candidate-one runtime and exposed the correct title, H1, complete page structure, Sources and final action.
- FAQ interaction was operated directly: focus was visible, a disclosure opened, and Enter closed it while retaining keyboard focus.
- Submitted 1440/1024/768/430/390/375 full-page captures, mobile-menu-open capture and FAQ-focus capture showed no blocker-level clipping or horizontal overflow.
- D23's manifest validator and preflight both returned `PASS`; preflight observed HTTP 200, 80,544 bytes, correct page markers and the exact Next 16 RSC Build ID marker.
- Source inspection located the unapproved fallback at `components/sites/tio2-my/resources/malaysia-resource-proc-page.tsx:206`, its DTO branch at `lib/wordpress/resource-proc-v01-dto.ts:168`, the shared `inert` change at `components/sites/tio2-my/malaysia-global-chrome.tsx:35`, and the page-scale test at `tests/e2e/res-proc-gate8.spec.ts:95`.
- Candidate two's last preview returned HTTP 502 on 2026-09-08. Its former detached worktree is absent from the current worktree registry, and `818a3ef…` is not resolvable from the current D16 object database.

## 6. Recommendation and Four-Layer Status

| Layer | Candidate one | Candidate two | Controlling interpretation |
|---|---|---|---|
| `RECHECK_SCOPE` | `PASS` | `FAIL` | Only candidate one has a fresh exact-candidate manifest, Git/build binding and accessible runtime. |
| `PAGE_GATE9` | `RETURN_FOR_REPAIR` | `NOT_PASS / NOT_SELECTABLE_AS_IS` | Candidate one has three P1 blockers; candidate two has P0/P1 architecture/evidence blockers and no recheckable runtime. |
| `INTEGRATION` | `NOT_SELECTED` | `NOT_SELECTED` | The user retains final implementation selection; no merge or code transfer is authorized by this report. |
| `RELEASE` | `NOT_AUTHORIZED` | `NOT_AUTHORIZED` | Gate 10, deployment, publication, production WordPress writes and indexing remain outside scope. |

The recommended path is to repair candidate one in place, then return a new exact implementation commit, evidence HEAD, Build ID, evidence manifest and runtime for a focused recheck of `PROC-A08`, `PROC-A19`, `PROC-A21`, `PROC-A23` and `PROC-A28`, followed by regression confirmation for the other 23 conditions. Candidate two should remain isolated and unselected.

## 7. Decision Boundary

This report completes the comparative review but does not close Gate 9. No `gate8_pass_notice` is issued. Candidate one receives `gate8_return_notice`; candidate two receives a non-selection/not-pass notice. The user retains final selection. Gate 10 remains unauthorized.
