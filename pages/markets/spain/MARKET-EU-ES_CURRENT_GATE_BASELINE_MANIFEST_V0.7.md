# MARKET-EU-ES Current Gate Baseline Manifest V0.7

Date: 2026-09-07. This is the only current page authority pointer. It supersedes [V0.6](MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md), SHA-256 `25d7627982ae26398e7b9afdd734d53765b4d12741964235bc7f3475e4ea0333`; all earlier versions remain historical.

## Current state

| Field | Value |
|---|---|
| Page / URL / language / scope | `MARKET-EU-ES` / `/markets/spain/` / EN / `tio2-my` |
| Gate 1–2 | `USER_APPROVED / CLOSED` |
| Gate 3 | `USER_PREAUTHORIZED_COMPLETION / APPROVED / CLOSED` |
| Gate 3 decision | `MARKET-EU-ES-G3-PREAUTH-CLOSE-01`, 2026-09-07 |
| Gate 4–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Handoff | `READY_FOR_GATE4_WHEN_AUTHORIZED` |

## Approved upstream combination

| Role | File | SHA-256 |
|---|---|---|
| A — module order | `04_planning/MARKET-EU-ES_GATE2_CONTENT_SKELETON_V0.2.md` | `1948282e44ebbca4606aa57c6498fcf6c24a07a4ada2efdbececc628aac02e1c` |
| B — Buyer Copy | `04_planning/MARKET-EU-ES_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `6cf3a3c91e24c4f36c189dcd37feb4d4487944f05513c8916ce61068db9738ed` |
| C — stable contract | `04_planning/MARKET-EU-ES_GATE2_CONTENT_CONTRACT_V0.4.md` | `1f82bfa4b394399a4bf04449390c149c7f0a569addb1c7e2f46453c5e56f7ced` |
| Gate 2 approval | `../../../docs/architecture/GATE2_EIGHT_PAGE_USER_APPROVAL_AND_CLOSURE_V1.0.md` | `4af59554d6413e5fd603a074f0cbe5a88273b81a85b69203b3048da32bb1cd86` |

## Approved Gate 3 combination

| Object | File / identity | Status |
|---|---|---|
| Frozen source | `04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`; 17,843 bytes; `d2fb26ae9ee230886d9cb31c401cc47d0deba3f030d578f16697c97a79a1ca64` | `FROZEN / APPROVED` |
| Preflight | `04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_PREFLIGHT_RECORD_V0.1.json`; `264446448830b6b0edb529152e6da472053c56443ac1ad7c0f8e36f591835077` | `PASS_FOR_FORMAL_RENDER` |
| Freeze record | `04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_FREEZE_RECORD_V0.1.json`; `d488f6af52607df10a9204418cd7d923a5a0a5665acd6c9a466cb8ce10ca6bb0` | `VALID` |
| Formal assets | 3 full pages + 2 Menu + 3 Cookie; `04_planning/gate3-v0.1/MARKET-EU-ES_GATE3_ASSET_INVENTORY_V0.1.json`; `b907db1f3e65eb0e9f2f086d41bf07ead82e2b4259d7f9541fd77f41747837af` | `8 / APPROVED` |
| Execution self-check | `05_review/MARKET-EU-ES_GATE3_EXECUTION_SELF_CHECK_V0.1.md`; `a5814ca1ccbc5513e40a0b49c30201555a47dda297872ddbaf780816539adea4` | `COMPLETE` |
| Project-control review | `05_review/MARKET-EU-ES_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md`; `c140bc4d865571f224e487e5df1202ffc4ba58af2972a191e1714cb1ade49068` | `PASS / FINDINGS 0` |
| Closure | `05_review/MARKET-EU-ES_GATE3_PREAUTHORIZED_APPROVAL_AND_CLOSURE_V0.1.md`; `808386c01a5c050e048833fb08b1b622cd6f6cadeea86f2caf197ff3830cdaf2` | `GATE3 CLOSED` |
| Gate 3→4 handoff | `05_review/MARKET-EU-ES_GATE3_TO_GATE4_HANDOFF_V0.1.md`; `f48537d83af07a011cb82fda91f29e21bc399f44437d550a23162cf78695570e` | `READY_FOR_GATE4_WHEN_AUTHORIZED` |

The approved structure retains the four modules, two peer application groups, document/COO limits and Spain RFQ meaning across 1440/768/390. Shared Consumer V0.2 remains the planning source for Header, Footer, Mobile Menu and Cookie; shared owners retain authority.

Production routes/receivers, destination persistence, actual Cookie technology, device/browser/accessibility QA, Gate 4 and all implementation or publication work remain outside this approval.
