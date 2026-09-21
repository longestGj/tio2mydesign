# MARKET-000 D32 Gate 6 Review Challenge V0.1

Date: 2026-09-21. Challenge ID: `MARKET000-D32-G6-RC-MKT-R003-20260921-01`. State: `REVIEW_CHALLENGE / TARGETED_GATE4_GATE5_RETURN_REQUIRED`.

## Conflict

Gate 6 FAST_PATH intake identified that the frozen MARKET-000 design still exposes ten English Market actions and zero Brazil Portuguese relation, preserving the old `MKT-R003 / LOCALIZATION_HOLD` behavior. A later approved source changes that exact publication-target dimension:

- `TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md` (2026-09-13, `APPROVED / CLOSED`) finalizes `MARKET-BR-PT`, its URL `/pt-br/markets/brazil/`, approved PT-BR page contract, and names `MARKET-000` as a required internal source.
- `MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md` binds that overlay and says it supersedes `PROVISIONAL_ROUTE` in the publication-target dimension.
- `MARKET-000_MARKETS_BRIEF_V0.1.md` already defines the conditional localized relation label as `Portuguese / Português` and the Hub family as eleven Market landing-page relations.

Therefore the old localization audit remains historical evidence for the pre-approval hold, but it cannot continue to suppress the now-approved internal discovery relation. This is a real approved-source-versus-frozen-combination conflict, not a Gate 8 implementation choice.

## Required targeted correction

Return only the affected MARKET-000 Gate 4 surfaces to the original author:

1. Add a buyer-clean visible Brazil Portuguese discovery relation to `/pt-br/markets/brazil/`, using the approved language relationship/label without changing the PT-BR child copy or making MARKET-000 a PT-BR alternate.
2. Keep MARKET-000 `hreflang=NOT_APPLICABLE`; reciprocal `en`/`pt-BR` hreflang belongs only to the two Brazil child pages when both actual responses satisfy their contract.
3. Update the visible relationship count and applicable `ItemList`/machine-readable relationship atomically so visible and machine meaning agree; do not emit a dead, hidden or one-sided relation.
4. Preserve all unrelated frozen MARKET content, hierarchy, shared narrow Eyebrow correction, H1, actions, visual family and valid Gate 5 coverage.
5. Produce additive source/freeze/evidence and send the exact changed scope to the original different Gate 5 reviewer for targeted recheck.

The Gate 6 draft may retain unaffected work but cannot return `READY_FOR_REVIEW` until the targeted Gate 4/5 chain passes and Project Control updates the accepted combination. Gate 8 remains not started.

## Controller disposition

The earlier closure `MARKET000-D32-G45-PC-CLOSURE-20260921-01` remains a true historical decision for its exact bundle, but it is no longer the current complete input after this later-authority conflict was identified. Project Control does not repeat the visual review and does not prescribe production implementation. The author and original reviewer own the targeted correction/recheck; Project Control will issue a successor closure only after PASS.
