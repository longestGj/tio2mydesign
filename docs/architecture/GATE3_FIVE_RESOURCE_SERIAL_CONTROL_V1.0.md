# Gate 3 Five-resource Serial Control V1.0

Date: 2026-09-07  
Control ID: `G3-5RESOURCE-SERIAL-01`  
Status: `USER_AUTHORIZED / ACTIVE`

## 1. Authority and completion rule

The user requested a fresh inventory of Gate 2-complete pages and instructed project control to execute them serially. The current inventory identifies exactly five Resource pages whose Gate 2 is `USER_APPROVED / CLOSED` and whose Gate 3 is not yet closed. The user's established Gate 3 operating rule continues: subagent execution is strict serial, no page-by-page approval stop is required, and a page passes when the complete execution/evidence package and independent project-control review are finished with no unresolved required Finding.

A page may close as `USER_PREAUTHORIZED_COMPLETION / GATE3 APPROVED / CLOSED` only after the subagent has applied the current Gate 3 Agent and both V0.2 Skills, hard preflight records `PASS_FOR_FORMAL_RENDER`, the candidate is frozen before formal export, required 1440/768/390 and state evidence is read back, fixed core plus page-specific risks are self-checked, and project control independently reviews the frozen combination. A failed check requires targeted revision and re-review inside this authority.

## 2. Fixed serial queue

| Order | Page ID | Gate 2 approved baseline | Gate 3 state |
|---:|---|---|---|
| 1 | `RES-R706` | `RES-R706_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md` | `IN_PROGRESS` |
| 2 | `RES-TRADE-EU` | `RES-TRADE-EU_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md` | `AUTHORIZED / QUEUED` |
| 3 | `RES-TRADE-UK` | `RES-TRADE-UK_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md` | `AUTHORIZED / QUEUED` |
| 4 | `RES-TRADE-IN` | `RES-TRADE-IN_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md` | `AUTHORIZED / QUEUED` |
| 5 | `RES-TRADE-BR` | `RES-TRADE-BR_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md` | `AUTHORIZED / QUEUED` |

The next page starts only after the previous page is closed and the control receives a successor version. No previously closed Gate 3 page is repeated.

## 3. Method and evidence contract

- Current baseline: `docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.2.md`.
- Execution role: `agents/gate3-execution/agent.md` V0.2.
- Design method: `skills/responsive-wireframe-design/SKILL.md` V0.2.
- Verification method: `skills/layout-interaction-verification/SKILL.md` V0.2.
- Shared source: `docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md`.
- Handoff contract: `docs/superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.1.md`.

Each page uses its own approved A/B/C and risks. Shared Header/Footer/Menu/Cookie may come only from the neutral shared consumer; no business page is a source template for another. Approval core and diagnostic support remain separate.

## 4. Page-specific boundaries

- `RES-R706`: candidate mapping, final route and indexing remain unresolved; do not imply equivalence, replacement, performance match, Chemours affiliation or transfer TS-6706 evidence to an IKHLAS Grade.
- `RES-TRADE-EU`: preserve Regulation 2025/4, Notice C/2026/4533, entity/invoice predicates and visible dates exactly; no shipment ruling or unstated current-law conclusion.
- `RES-TRADE-UK`: preserve active-investigation/import-registration status, GB/NI and possible-retrospective boundaries; do not present a current duty rate.
- `RES-TRADE-IN`: preserve quashed 2025 levy versus 2026 DGTR recommendation, six paths, the two USD 681 paths and invoice predicates; a recommendation is not a verified payable duty.
- `RES-TRADE-BR`: preserve Resolution 802/850, four entity bands, anatase/Ex-001 and public-interest boundaries without extending them to shipment outcomes.

Current-law freshness remains subject to the approved 30-day/event-triggered recheck before implementation or publication. Gate 3 visualizes the approved copy and does not independently update legal facts.

## 5. Scope boundary

This control authorizes Gate 3 only for the five exact pages. It does not authorize Gate 4–10, mapping/indexing decisions, development, deployment, publication, DNS or production changes.
