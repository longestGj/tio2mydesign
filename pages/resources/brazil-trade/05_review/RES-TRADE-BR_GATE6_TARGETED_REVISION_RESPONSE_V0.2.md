# RES-TRADE-BR Gate 6 Targeted Revision Response V0.2

Date: 2026-09-08. Response ID: `RES-TRADE-BR-G6-RC-RESPONSE-02`. Finding: `RES-TRADE-BR-G6-RC-F01`. Status: **`ADDRESSED_IN_V0.2 / PENDING_INDEPENDENT_TARGETED_RECHECK`**.

This response records the bounded repair requested by `RES-TRADE-BR-G6-RC-01`. Original package author: `/root/gate6_trade_br`; challenge reviewer: `/root`; V0.2 targeted revision executor: `/root/g6_res_trade_eu_uk`. The executor is distinct from both prior identities. This is an author-side revision response, not an independent recheck, Gate 6 closure, Manifest update or Gate 8 handoff.

## 1. Locked inputs

| Object | Exact identity |
|---|---|
| Challenge | `pages/resources/brazil-trade/05_review/RES-TRADE-BR_GATE6_REVIEW_CHALLENGE_V0.1.md`; 4,317 bytes; SHA-256 `686CBBCCE652B517EF5889C2EF75DEFE08D1A16E755A49DEA44B05FB6DCDB0BC` |
| Superseded candidate | `pages/resources/brazil-trade/06_handoff/RES-TRADE-BR_GATE6_HANDOFF_PACKAGE_V0.1.md`; 38,689 bytes; SHA-256 `3E2D65F8D00CE09D02CA6980A1E00EEC7C6720F1A5F83D7E36FBC3F52C03A284` |
| Approved B | `pages/resources/brazil-trade/04_planning/RES-TRADE-BR_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`; 12,786 bytes; SHA-256 `BB83ADEB1A2A21EE7B7C4D854D569D5B73BA6A9FC75421A387FE9EEDED5B6C5F`; line 112 requires the visible Portuguese procurement link to `/pt-br/markets/brazil/` |
| Approved C | `pages/resources/brazil-trade/04_planning/RES-TRADE-BR_GATE2_CONTENT_CONTRACT_V0.2.md`; 10,579 bytes; SHA-256 `0A0E9E16A5BD8334DDFCF4B1C13A5B09DC87C050C5396695B25CE2BB20108C36`; §5 / line 74 binds the supporting localized action to `/pt-br/markets/brazil/` |
| Original author self-check | `pages/resources/brazil-trade/05_review/gate6-v0.1/RES-TRADE-BR_GATE6_AUTHOR_SELF_CHECK_V0.1.json`; 2,207 bytes; SHA-256 `BF79CDCA7138CF46BDE956BEF1AD3CF18A6818F82211DD1257520E20E5B3B34A` |
| Execution/review contract | `docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.1.md`; 6,627 bytes; SHA-256 `D2AAFFAADF6BA44F3472B4045A40C165B170AA4FDFDC4EE1D824FE66415E9F67` |
| Revised candidate | `pages/resources/brazil-trade/06_handoff/RES-TRADE-BR_GATE6_HANDOFF_PACKAGE_V0.2.md`; Package ID `RES-TRADE-BR-G6-HANDOFF-02`; 40,032 bytes; SHA-256 `9D0B24B5F49A7F275F6385E2DB34ADE3F12FFAB58AA52012B59CE284B1DAC592` |

## 2. Finding response

The approved B and C require the PT-BR support action to render. V0.1 `BRTRADE-G9-06` instead allowed the action to appear only after its destination was live, which could make a missing downstream route suppress approved Buyer Clean content.

V0.2 changes the `BRTRADE-G9-06` contract so that:

- the PT-BR support link **must appear**;
- its target must be exactly `/pt-br/markets/brazil/`;
- the target must be live, scope-correct and accepted before the affected path and complete-site release;
- a missing, hidden, disabled or relinked link, any alternate target, an unavailable/provisional/wrong-scope target treated as ready, or fallback masking the missing target fails the affected path and complete-site release.

The repair therefore preserves the approved link while retaining the downstream release blocker. It does not convert a provisional route into a live fact, infer hreflang/canonical approval, hide content, redirect to EN/Product, or introduce cross-scope fallback.

## 3. Bounded delta and adjacent controls

The only substantive delivery-contract change is the `BRTRADE-G9-06` row. Package version/ID, revision identity, execution-path note, Finding state, self-check pointer and stop state were updated only to make this repair auditable.

Machine comparison requires the full V0.1 and V0.2 rows for `BRTRADE-G9-01`, `BRTRADE-G9-05` and `BRTRADE-DEP-02` to be byte-for-byte equal after line extraction. Their meanings remain:

- `BRTRADE-G9-01`: the exact B V0.2 remains the only visible-copy authority and all approved content remains required;
- `BRTRADE-G9-05`: every body/shared action instance still needs its exact same-scope owner or official target, and a hidden/disabled/relinked action fails;
- `BRTRADE-DEP-02`: dead/wrong/provisional-as-live/cross-scope/fallback/hidden/relinked behavior still fails the affected path and complete-site release.

No approved B/C, Gate 3/4 asset, visual evidence, current Manifest, Status, Index, implementation repository or D16 file was modified. No new visual capture was needed because the challenge is a concrete Gate 6 delivery-contract contradiction.

## 4. Verification and stop

The bound machine record is `pages/resources/brazil-trade/05_review/RES-TRADE-BR_GATE6_TARGETED_REVISION_SELF_CHECK_V0.2.json`. It records actual PowerShell commands/results for source and reference existence, exact B/C obligations, `BRTRADE-G9-06`, adjacent-row preservation, AC/DEP definition uniqueness and status boundaries. File checks cannot prove route liveness, production rendering, site-scope behavior, legal currency or release readiness; those conditions remain for the named owners and Gate 8/9.

Response conclusion: **`READY_FOR_TARGETED_RECHECK`** for the exact V0.2 package identity above. A different identity must issue `REVIEW_PASS` or `CHANGES_REQUIRED`. This response does not close the Finding, independently approve the package, close Gate 6, update the current Manifest, mark `HANDED_OFF=YES`, or authorize external handoff, Gate 8, deployment, publication or indexing.
