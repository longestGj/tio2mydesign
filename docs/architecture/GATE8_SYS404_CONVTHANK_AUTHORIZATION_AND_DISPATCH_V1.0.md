# SYS-404 与 CONV-THANK Gate 8授权及派发 V1.0

Date: 2026-09-08. Dispatch ID: `G8-SYS404-CONVTHANK-20260908-01`. Status: `USER_AUTHORIZED / READY_TO_SEND`.

## Authorization and target

The user explicitly instructed: start Gate 6, and after pass hand the results to Gate 8 in the `00My开发2` task. Both pages have passed independent Gate 6 review and were closed by Project Control under standing authority. This record authorizes actual Gate 8 implementation for exactly these two pages in `site_scope=tio2-my`.

Target Codex task: `00My开发2`; thread ID `01a07e6a-546d-7532-aa06-02d2bffd5eed`; host `local`; configured project directory `D:\16Wordpress_nextjs`.

## Exact approved inputs

| Page | Current Manifest | Unique Gate 6 package | Closure |
|---|---|---|---|
| `SYS-404` | [V0.10](../../pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md), SHA `5BF167F8A2BA66A060CA6B9B791CE925273CCF313459ACFB5F68B3F7EA02B671` | [SYS-404 package](../../pages/system/404/06_handoff/SYS-404_GATE6_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md), 21039 bytes, SHA `20306E38DECE8F242DDCF37B991A8207044E57178BFB90DD2C75129172BA2C5F`; 11 Gate 9 ACs | [closure](../../pages/system/404/05_review/SYS-404_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md), SHA `387F632C4725D85EBE6816038D52CCB6255DC4630800E5C9D7377F25E4FE8671` |
| `CONV-THANK` | [V0.10](../../pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md), SHA `69FCB7B6E8E1041D2E609C65864990CFBA04B45E2698978875C9C8ADC51452B3` | [CONV-THANK package](../../pages/conversion/thank-you/06_handoff/CONV-THANK_GATE6_HANDOFF_PACKAGE_V0.1.md), 29278 bytes, SHA `D3B3C4B296BDA4A9D7951D7BC0A14B46E89F16840268D227490F0F2301E5ED9E`; 16 Gate 9 ACs | [closure](../../pages/conversion/thank-you/05_review/CONV-THANK_GATE6_DELEGATED_APPROVAL_AND_CLOSURE_V0.1.md), SHA `467DBBFB8EE570FEFC3EE868316219EC7FFD6710F8FA3BE1263B98396B1CBEEB` |

Gate 8 must read each complete package and its referenced sources. If any identity differs, stop only the affected page and report the mismatch. Do not substitute prior Manifest or prototype version.

## Gate 8 execution result required

Implement the two pages in the actual D16 project under its own AGENTS and isolated-worktree rules. Preserve every approved content, behavior, visual, shared-owner and scope result while choosing implementation details from the real repository. The planning HTML remains `PROTOTYPE_ONLY` where the packages say so.

- `SYS-404`: implement genuine unknown-route HTTP 404 behavior without intercepting valid routes; exact recovery content and five targets; search exclusion; shared Chrome/Consent; responsive/a11y; analytics sanitization; strict `tio2-my` isolation.
- `CONV-THANK`: implement four mutually exclusive states; preserve three distinct receiver success predicates, short same-session marker and `request` selector; all negative/legacy cases must reach Direct without receipt cue; no PII projection; exact SEO, shared components, responsive/a11y and scope/cache behavior.

Gate 8 must satisfy all stable AC IDs in both packages or return exact open items. It must create and commit `gate8_evidence_manifest.json` conforming to `docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json`, bind repository/branch/baseline/implementation/evidence HEAD/build/runtime/evidence identities, add exact receipt `EVIDENCE:` lines, and hold the runtime until `GATE9_PASS_OR_RETURN_NOTICE`. Return the implementation and evidence combination to this D23 task for Gate 9.

## Boundaries

This dispatch authorizes Gate 8 implementation, local tests, evidence generation and return only. It does not authorize merge to local main, remote push, deployment, publication, DNS or indexing. Real submissions that could contact external recipients require safe test fixtures or a non-sending test path; no live external business submission is authorized.
