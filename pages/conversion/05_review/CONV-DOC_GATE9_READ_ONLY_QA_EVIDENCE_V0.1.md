# CONV-DOC Gate 9 Read-only QA Evidence V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Review date | 2026-09-04 |
| Gate 9 authorization | `CONV-DOC_GATE9_USER_AUTHORIZATION_RECORD_V0.1.md` |
| Approved authority | `CONV-DOC-G7-HANDOFF-01` |
| Gate 8 status input | `IMPLEMENTED / DEVELOPMENT_COMPLETE_PENDING_GATE_9_AUTHORIZATION` |
| Implementation branch | `codex/home-001-tio2-my` |
| CONV-DOC commits | `985beab` and `a7d2cc4` |
| Current submission ceiling | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 9 approval | `NOT_GRANTED` |

All D16 inspection and command execution was read-only with respect to source, tests and configuration. Build and browser tools generated ignored build/runtime output only. Final `git status --short` and `git diff --check` for the development worktree produced no output.

## 1. Authority identity

| Authority | Bytes | SHA-256 | Result |
|---|---:|---|---|
| Gate 7 current handoff Manifest | 5729 | `18D6F72F1563D657DE01A9DC044895120D2A70A497986E33F041064E04B3E400` | MATCH |
| Gate 7 handoff package | 6650 | `CD0505F25118BD604138CC2A9B5EC04B04AF62B6C72E8C5BF3DAC16BD08C511A` | MATCH |
| Gate 7 CMS/API/component inventory | 8368 | `12F3BF9169DEF3FA6CCF79496A77D2C0D4579D03B5DEEC3FDB8874E85835BEAA` | MATCH |
| Gate 7 SEO/GEO/Schema contract | 2421 | `164507DECD4545BA443FD9170DE08D6CF8438F34ED2B5830BC2B139239DA5D13` | MATCH |
| Gate 7 responsive/accessibility contract | 2781 | `BB3DA935095F373EA61D7A98BD56122E074080620257642469DB9408A8791959` | MATCH |
| Gate 7 Gate 8/9 acceptance matrix | 5149 | `510B97CB8038A117BBAD40DDC8DF705C373CDE30AB5BCB03C823B0716FA199FC` | MATCH |
| Gate 7 fresh validation | 2723 | `4C6274A6679DC77BA5DFE571010D2B20DBA84BD5A2F6DD39A9FF8A9777CF74B6` | MATCH |
| Gate 7 project-control review submission | 2578 | `AFAC489E8AC0F9ACFD86CA41CA7474A320FEC1CFD50923F9DDD1318EB132A5B9` | MATCH |
| Gate 8 completion record | 5177 | `4BE006766E056BAFB070061FB0F9C925B149A56FEDEDBE519305F9D74A686FE4` | MATCH |
| Gate 8 local verification record | 9726 | `DDD6D65EE62B591D492A1ECD21B94F969166C928D9CCA7919F5752C05540961D` | MATCH |

The Gate 8 completion record also carries the earlier project-control independent combined CONV-DOC + CONV-SAMPLE rerun: 22 files / 91 tests PASS, typecheck PASS and diff-check PASS. This is inherited authority evidence and is not represented as a fresh Gate 9 command; the fresh Gate 9 page-specific executions are listed below.

Git identity was independently resolved:

- branch: `codex/home-001-tio2-my`;
- `985beab` → `985beabd8995f451180f5f3938ff8ea7a4ec494a`;
- `a7d2cc4` → `a7d2cc4905c9e162521f888b45ef83c5c025ff47`;
- both commits are ancestors of current worktree HEAD `f7fc16e991d8a51f13cdc2376549dce8367578f7`;
- the later HEAD change is CONV-SAMPLE and was excluded from CONV-DOC finding scope except where shared build/type checks necessarily cover the current worktree.

## 2. Independent executable checks

| Check | Fresh result |
|---|---|
| Focused Vitest: unit, integration and infrastructure CONV-DOC suites | PASS — 11 files / 47 tests |
| TypeScript `pnpm typecheck` | PASS |
| ESLint limited to TypeScript/TSX/MJS files changed by `8f206f6..a7d2cc4` | PASS — 0 errors / 0 warnings |
| `SITE_ID=tio2-my`, complete local WordPress GraphQL, `NEXT_DIST_DIR=.next-tio2-my`, preview production build | PASS — 35 routes finalized; `/request-documents` and `/api/tio2-my/request-documents` emitted as dynamic routes |
| PHP 8.3 syntax: request-documents singleton and seed | PASS — no syntax errors |
| PHP 8.3 taxonomy lifecycle harness | PASS — `CONV-DOC taxonomy runtime: PASS` |
| Production-build Playwright against the scoped CONV-DOC CMS stub | PASS — 14/14 |
| D16 final worktree status | PASS — clean; diff-check clean |

Discarded setup attempts were not counted as product failures or passing evidence: one ESLint invocation passed its file array as a single argument; one build was attempted before the CMS endpoint was available and automatically added a temporary dist include that was immediately restored and verified clean; the first PHP harness call omitted its required target paths; custom-server origin probes were repeated with the Next production `startServer` path. Only the corrected fresh commands above support this review.

## 3. Browser and visual evidence

The browser suite covered 1440, 768 and 390 full-page rendering; 320, 375, 430, 1024 and 1280 overflow/target checks; validation/error-summary focus; failure retention; real `Try again`; stable logical request token; explicit receipt-confirmed success; editable prefill; market-safe Country behavior; 254-character email; 500-character notes; and visible retained 501-character over-limit correction.

Fresh evidence was written only under `D:/23MySec/99_workspace/conv-doc-g9-browser-run/docs/verification/conv-doc/`, not over the returned D16 files.

| Evidence | Dimensions | SHA-256 | Comparison |
|---|---:|---|---|
| `conv-doc-desktop-1440.png` | 1440×3116 | `68B892FF2E82CBB9F3DC30E29DCA86A2C7F9C4CE2298C2B334EFFE4CF8C692B3` | Byte-identical to Gate 8 return |
| `conv-doc-tablet-768.png` | 768×3597 | `186164D261FD6BAEFED7C287E8FBCA19590A9DD26408D5FDE8476110839738B0` | Byte-identical to Gate 8 return |
| `conv-doc-mobile-390.png` | 390×4446 | `513982D62039BB2E200CC7B02B6010D0F373539EC53A437C73DCBC28A6C4D0A7` | Byte-identical to Gate 8 return |
| `conv-doc-state-validation.png` | 1280×2870 | `EA97AB242389D4D500C2504253B6736D05E8E7A7AE4777F1C4F4510576A6D2BA` | Byte-identical to Gate 8 return |
| `conv-doc-state-failure.png` | 1280×3020 | `D4427D5088201D2FB78EFD522C7DAC48AC56256F1C6712B1942D6C0C31C17BEE` | Byte-identical to Gate 8 return |
| `conv-doc-state-success.png` | 1280×3080 | `BA78743BD402D54E3FFCA4C0AAD3FE936A93530AB3CDEB580C6794786928507F` | Byte-identical to Gate 8 return |
| `conv-doc-state-prefill-390.png` | 390×3897 | `BC8DA79A2685B293D81C1C6ACA85F7AC9277AD3910A09E23020E2A427386D1AE` | Byte-identical to Gate 8 return |
| `conv-doc-state-other-only-390.png` | 390×3897 | `F3F30DA8F5730169B4CD6FF4AC98D41FEE66A506B8D2F8E98E7816F7815A24B5` | Byte-identical to Gate 8 return |
| `conv-doc-state-long-content-390.png` | 390×5217 | `2F8143DFC74DE4B69D87A16EAAF525E7DAA428D2BBEB2FBE0DBDCE2DD0C74996` | Byte-identical to Gate 8 return |
| `conv-doc-state-over-limit-390.png` | 390×5120 | `ED46B39A9C2E504B101521FF26ED662FBB43343C889431B4193B97E83F380D9A` | Byte-identical to Gate 8 return |
| `conv-doc-state-submitting.png` | 1280×2855 | `D445692C969808AB658D772820C56E236E2E7CD145E4139B037769BF01B95914` | Byte-identical to Gate 8 return |

Direct review against the Gate 5 V0.6 Desktop, Tablet, Mobile and Interaction State authorities found no horizontal crop, hidden CTA, false navigation current state, page-local Chrome fork or state-copy substitution. Runtime height is greater than the static Gate 5 examples because the approved Gate 7 implementation renders the separate minimum-information module and all supplied review rows; this observation is not treated as a defect.

## 4. Contract-area results

| Area | Result | Evidence summary |
|---|---|---|
| Identity / URL / scope | PASS | Page ID, route, locale, `site_scope=tio2-my`, strict DTO, cache tags and 404-before-query foreign-site tests |
| Visible copy / options / fields | PASS | Exact Gate 7 JSON contract; one H1; one form; eight fields; five ordered Document Types; 14 ordered Grade options |
| Client/server validation | PASS | Required, email, allowlist, Other-only and Unicode 500-code-point rules repeat server-side; errors remain safe |
| Error/failure/retry/success | PASS | Summary focus and linked errors; no truncation; values retained; unchanged payload reuses token; only `receiptConfirmed:true` yields success |
| Privacy / minimization | PASS with release dependency | Exact short notice and `/privacy-policy/`; privacy precedes CTA; no consent checkbox or added analytics; production data-flow parity remains open |
| Shared Chrome | PASS with shared dependency | Shared Header/Menu/Footer imported; 84px/64px; permanent RFQ; no false current; no local clone |
| Responsive / a11y | PASS | 14 browser checks; ≥44px controls at required narrow widths; no overflow; Axe serious/critical 0; Escape/focus return |
| SEO / canonical / Schema | PASS with Gate 10 dependency | Exact title/meta/canonical; clean query canonical; no hreflang; current robots `noindex,nofollow`; only WebPage + BreadcrumbList |
| Receiver | PASS fail-closed / RELEASE_BLOCKED | Valid same-origin request reaches `503 unavailable` without production configuration; explicit receipt remains required |
| Prefill / relationship gates | FAIL — `DOC-G9-P1-01` | Application context and source attribution are globally safe-string/ID allowlisted but are not relation-bound |

## 5. Reproduced P1 evidence

Against the optimized production page with the scoped CONV-DOC stub, each request returned HTTP 200 and rendered the supplied text inside `Review your prefilled context`:

1. `?product=M-2377&application_industry=Specialty%20Materials&source_page_id=GRADE-M2377` → `Specialty Materials` visible.
2. `?product=M-2377&application_industry=Rubber&source_page_id=GRADE-M2377` → `Rubber` visible.
3. `?product=M-2377&application_industry=Unapproved%20Application&source_page_id=GRADE-M2377` → arbitrary context visible.

The implementation at `lib/request-documents/malaysia-request-documents-prefill.ts:53`, `:61` and `:64` checks only length/control characters before accepting `application_industry`; product grade, source page and approved relationship are normalized independently. The existing prefill tests do not cover Specialty Materials, Rubber, arbitrary safe text or mismatched Grade source attribution.

## 6. Production dependency probes

- Complete local WordPress GraphQL production build: PASS.
- Shared routes `/privacy-policy/`, `/ms/privacy-policy/`, `/cookie-policy/`, `/request-a-quote/` and `/documents/`: HTTP 200.
- `/request-documents/` against complete local WordPress: HTTP 500 with `The Malaysia Request Documents record is missing.` This confirms the declared WordPress migration blocker; the route works only against the scoped verification stub until the authorized singleton migration occurs.
- Receiver API with a valid same-origin payload and no production receiver configuration: HTTP 503, `{"ok":false,"kind":"unavailable"}`.
- Production receiver owner/endpoint/token, persistence/retention, transfer facts, acknowledgement semantics, authorized migration and Gate 10 indexing/release remain unverified or unauthorized.
