# TiO2 Malaysia GA4 Active Gate 8 Development Acceptance V1.0

## 0. Control

| Field | Value |
|---|---|
| Date | `2026-09-13` |
| Review scope | GTM-only GA4 activation, Consent Mode, Privacy EN/BM, Cookie Policy, Cookie Settings and three provider-accepted events |
| Site scope | `tio2-my` |
| Handoff ID | `G8-G9-TIO2-MY-GA4-ACTIVE-20260913-01` |
| Gate 8 outcome | `GATE8_IMPLEMENTATION_ACCEPTED / CLOSED` |
| Next responsibility | `GATE9_INDEPENDENT_READ_ONLY_ACCEPTANCE` |
| Gate 10 / release | `NOT_AUTHORIZED` |

This record accepts the exact Gate 8 candidate and its evidence intake. It does not approve Gate 9, GTM publication, merge, deployment, production publication, DNS, GSC verification or indexing.

## 1. Exact candidate identity

- Branch: `codex/tio2-my-full-public-seo-ga4`
- Baseline: `b52702cf52a1eb6a8292db160920158a3def3eed`
- Implementation: `30e026318006c141b725a1231f1942f555cd9a07`
- Test alignment: `691ad3ed24384eea9f72a269da49035814c93bbd`
- Evidence commit: `c55eb8f8dec38f9d96a817228cf7d66bfac9afeb`
- Handoff HEAD: `2cf213c43bd0d2b6ad3e5cbfeb1d09b8053eaee2`
- Build ID: `tio2-my-ga4-g8-30e02631-20260913`
- Runtime: `http://127.0.0.1:3123`
- Isolated CMS: `http://127.0.0.1:8280`
- GTM: `GTM-MWQVK7J4`, Preview only, not published
- GA4: `G-QDHLMRH2WB`

The worktree was independently read as clean at handoff HEAD. The four public/legal runtime probes and isolated CMS probe returned HTTP 200 during project-control intake.

## 2. Independent evidence intake

The submitted Manifest and receipt contain 16 evidence objects. Project control independently confirmed:

- 16/16 paths exist;
- 16/16 worktree SHA-256 values equal the Manifest;
- 16/16 paths are Git-tracked;
- receipt and Manifest reference sets are exactly equal;
- the recorded logs contain 8/8 Vitest files and 37/37 tests passed, GA4/CMP Playwright 2/2 passed, legal/CMP Playwright 13/13 passed, typecheck passed and targeted ESLint passed;
- the held runtime exposes the approved active Privacy EN/BM and Cookie Policy content, semantic Cookie inventory and Cookie Settings states;
- Tag Assistant evidence records all-denied default, Analytics-only grant, withdrawal to all-denied, `_ga` and `_ga_QDHLMRH2WB` creation/removal, exactly one accepted reload `page_view`, and one hit for each approved provider event;
- the three event payloads contain only `site_scope`, `page_id`, `source` and `form_type`; the sanitized evidence contains no buyer PII and no cross-scope measurement ID;
- no real form was submitted and no production WordPress data was written.

## 3. Preflight tool limitation

The current D23 validator reports `EVIDENCE_INCOMPLETE` only for `git_head` and `receipt_committed`: the Manifest declares evidence commit `c55eb8f...`, while the subsequent commit `2cf213c...` adds the Manifest/receipt handoff itself. Requiring a committed Manifest to contain its own final commit hash is circular and cannot be satisfied without creating a new commit identity.

This is the previously recognised self-reference limitation, not an implementation, runtime, hash, tracking, content or privacy defect. All 16 evidence objects, their hashes, tracking status and receipt-reference parity independently passed. Gate 9 must report this limitation explicitly and must not silently describe the current validator result as a full preflight PASS.

## 4. Disposition and remaining boundary

The exact candidate is accepted as the Gate 8 implementation baseline and Gate 8 may stop. Existing continuous user authorization permits handoff to Gate 9 without another approval prompt.

Gate 9 remains responsible for an independent read-only recheck of candidate identity, runtime, consent ordering, Cookie lifecycle, page-view cardinality, three approved event hits, payload privacy and scope isolation. This Gate 8 acceptance does not authorize GTM publication, merge, deployment, production publication, DNS, GSC action, indexing or Gate 10.
