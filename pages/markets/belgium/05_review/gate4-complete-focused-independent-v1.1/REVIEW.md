# MARKET-EU-BE Gate 4 focused independent re-review V1.1

Date: 2026-09-07. Review ID: `BE-G4-IR-20260907-02`. Reviewed workset `BE-G4-COMPLETE-20260907-02` and freeze `BE-G4-FREEZE-20260907-02`.

## Decision

**PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL**

Required Findings: **0**.

`BE-G4-IR-01`: **CLOSED_IN_BE-G4-FREEZE-20260907-02**. The two BE-04 paragraph links now provide a visible inset keyboard-focus outline without intersecting their labels, neighboring words, punctuation or adjacent lines at 1440, 768 and 390. This closes the one root Finding from `BE-G4-IR-20260907-01`; it does not close Gate 4.

The V1.1 execution/self-check author and this independent reviewer are separate roles and tasks. This reviewer did not create or edit the candidate, freeze, evidence index, Manifest or execution reports. All review writes are confined to this directory. The executor's PASS was treated as a claim to verify, not as review evidence sufficient for this decision.

## Fixed combination and identity audit

The focused submission, old Finding, current authority history and V1.1 freeze chain were read directly. Key recalculated identities are:

| Object | Bytes | SHA-256 |
|---|---:|---|
| Workset V1.1 | 1,552 | `7377b70a2a141aaf65ea557f29d91272f6c8c3df7ed148c02a9dc96c71de0269` |
| Input index V1.1 | 19,000 | `f368d7d9a959434bbbf3f291b92bed20a7493c99f018aee08fd2f36a54002f70` |
| Preflight record V1.1 | 2,252 | `440369ae3e13c289899a9d454b81de745c43c61918d2908653a4c123457bfb55` |
| Visual source V1.1 | 21,728 | `9e58374966ad2f13de0074ecfbf24f4c69644e55d340c070d7aa9b82debc9aa3` |
| Freeze record V1.1 | 4,287 | `43410a43435de2e41b0d32372bb5db18c19e12592bb1505a50af35a70c84a23b` |
| Evidence index V1.1 | 30,141 | `24a8b43f5663707d91c13c9d0fb614012d43e39d785f1e851ece928e11a3ac54` |
| Composition report V1.1 | 2,715 | `8d063cee65b88187a977c9cf14f2805feac7f9f9379949bfbcc41967f114c849` |
| Execution self-check V1.1 | 2,110 | `5a6bb125746406881cac2bf5b1924a5f580f3706f5e49f75ba9594d932773088` |
| Focused review submission V1.1 | 1,540 | `b1e685555d8f5b85497b90bcfda995a3c35797755f273bfaca57799774baad26` |
| Old independent Finding report | 10,776 | `b8ba7cc0b69a85ffc1e9a8c5f0f43c21ac077de88b4e358186a72f95d63c2ce1` |
| Authority Manifest V0.6 | 5,181 | `fe3e469b3511957d0ca48af61131c108874d904b39fdf6f1f9a3387fea572025` |
| Historical/rejected Manifest V0.7 | 3,796 | `6dc915f84948344c00f8a64128d9f6dfe107f98d5b874354c82b51b3b25094ee` |
| Repair draft Manifest V0.8 | 5,340 | `d15d5eab216720b27dad3a617fc4346381b150ce1e69c6ab0489d5f974bfd821` |

The independent recursive audit collected **255 path/hash claim occurrences over 125 unique paths** from the V1.1 input, workset, preflight, freeze, evidence and diagnostic records. Actual bytes and SHA-256 matched every claim; missing files 0, mismatches 0, conflicting identities 0. The input index contains 45 approved upstream records, 11 current method/contract records and 5 previous/finding records.

## Finding replay

The V1.1 source is exactly the rejected V1.0 source with one scoped replacement in `main [data-module='BE-04'] p:not(.action) a`: `padding-inline:6px` and `outline-offset:-3px` were added. Reversing that one replacement reproduces the V1.0 source byte for byte. No other source difference exists.

An independent local Chrome 152 / Playwright run used actual Tab traversal and separately measured normal, hover and focused geometry. Each focus outline is `3px solid rgb(0,128,120)` with `-3px` offset and 6px inline padding.

| Width | Link | Keyboard tabs | Target px | Self collisions | Neighbor/punctuation/line collisions | Contrast on white | Geometry stable |
|---:|---|---:|---:|---:|---:|---:|---|
| 1440 | Product Hub | 16 | 116.938×44 | 0 | 0 | 4.8177:1 | Yes |
| 1440 | quotation request | 1 | 159.188×44 | 0 | 0 | 4.8177:1 | Yes |
| 768 | Product Hub | 10 | 116.938×44 | 0 | 0 | 4.8177:1 | Yes |
| 768 | quotation request | 1 | 159.188×44 | 0 | 0 | 4.8177:1 | Yes |
| 390 | Product Hub | 10 | 111.516×44 | 0 | 0 | 4.8177:1 | Yes |
| 390 | quotation request | 1 | 151.609×44 | 0 | 0 | 4.8177:1 | Yes |

All **6/6** required width/link collision cases pass. The 18 independently captured normal/hover/focus readbacks are in [focus-readback](focus-readback/); all six focus images were opened at native resolution and visually confirm clearance and visible focus.

## Evidence inheritance and adjacent regression

The new index contains 45 unique PNGs: 3 regenerated full pages, 19 regenerated continuous segments, 18 new BE-04 focus-state images and 5 retained Menu/Cookie states. The old 42-image freeze is not implicitly reused. Its three full pages and 19 segments were regenerated because layout pixels changed; its 15 focus/Footer diagnostics were replaced by the 18 targeted state images; only the five unaffected Menu/Cookie formal states were retained.

The five retained states are legitimate inheritance: independent V1.1 rerenders at 1440/768/390 reproduce each old PNG SHA-256 exactly (2 Menu + 3 Cookie, mismatch 0). The states open, render and close normally; Footer returns to its normal state. This also confirms that the page-local BE-04 repair does not alter shared Menu/Cookie behavior or presentation.

All three full pages independently rerender byte-identically to their indexed PNGs. They have no horizontal overflow or clipped main content and retain the expected heights: 3654px at 1440, 4170px at 768 and 5369px at 390. All three full pages were opened as overviews. The 19 overlapping segments provide gap-free coverage through each full-page end (5/6/8 by width); the BE-04-containing segment at each width was opened at native resolution as a readable continuity sample. No seam, truncation, collision or adjacent module regression was found.

## Approved content and contract drift

At all three widths, the rendered V1.1 document signature matches the already independently reviewed V1.0 signature exactly: language, title, canonical, full normalized main text, ordered main links and destinations, five ordered modules `BE-01` through `BE-05`, Header DOM, Footer DOM and Cookie dialog DOM. Drift count is 0.

This preserves approved Buyer Clean B V0.2, `/markets/belgium/`, the Hero → product/origin/destination → buyer contexts → Documents → Belgium RFQ sequence, the three distinct buyer contexts, neutral Product Hub direction, exact COO sentence, selected/supplementary Grade distinction, EU overview exit, four RFQ preparation items and human-review outcome. The Global Chrome, brand/CTA, Footer legal utility and shared consent contracts remain unchanged and are inherited through the frozen identities.

## Evidence and boundary

- [Independent runtime and identity record](independent-verification.json) records 56 checks, failures 0, errors 0, identity traversal, page signatures, six focus cases, three full-page rerenders, five retained-state rerenders and segment coverage.
- [Reproduction script](independent-verify.cjs) reads the fixed candidate and writes only this review directory.
- Manual visual readback covered all three full-page overviews, the three BE-04 continuous segments, all six independently captured focus states and all five retained Menu/Cookie states.

The remaining production-route/receiver acceptance, real devices, non-Chrome engines, native browser zoom, screen-reader speech, and actual tracking/consent persistence are correctly deferred to their later implementation/QA stages. They are not Gate 4 defects in this local frozen visual scope.

This decision is pending user approval. It does not write `APPROVED` or `CLOSED` for Gate 4, does not authorize or start Gate 6, and does not authorize implementation, deployment or publication.
