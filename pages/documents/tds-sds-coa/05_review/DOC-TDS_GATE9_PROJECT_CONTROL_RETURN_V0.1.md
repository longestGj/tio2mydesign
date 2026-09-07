# DOC-TDS Gate 9 Project-Control Return V0.1

## 0. Decision

| Field | Value |
|---|---|
| Review ID | `DOC-TDS-G9-PCR-01` |
| Date | 2026-09-05 |
| Submitted commit | `8968fc0657d3e6e355c98e6bcf0e98a1601ec814` |
| Result | `RETURN_TO_DEVELOPMENT / OPEN` |
| Gate 9 | `NOT_APPROVED` |
| Findings | `P0=1 / P1=2 / REQUIRED_P2=1` |
| Page lifecycle | `READ_ONLY_QA_IN_REVIEW` |
| Gate 10 | `NOT_AUTHORIZED` |

## 1. Return requirements

The next development revision must close all of the following without changing approved Buyer Clean, route ownership, evidence meaning or release controls:

1. prevent the full internal DTO and all governance/evidence fields from entering public HTML/RSC output;
2. make checkbox, Grade, summary and all three CTA URLs coherent after browser Back/Forward;
3. restore Gate 5 visual composition, Inter typography, exact locked tokens and approved radii/treatments at 1440/768/390 while preserving route-based omission;
4. add the missing selected/menu/FAQ evidence and effective visual/back-forward regression tests.

## 2. Retest minimum

- full rendered-source negative scan for internal keys and prohibited governance values;
- exact content/hash and ten-module checks;
- neutral, TDS+M-2196 and SDS+COA/no-Grade three-action synchronization;
- browser Back/Forward state coherence;
- CONV-DOC visible/editable prefill and hidden source;
- real-runtime ineligible state plus eligible fixture state;
- Gate 5 visual comparison at 1440/768/390 and all nine overflow widths;
- Mobile Menu, FAQ, keyboard, focus, Axe, zoom, forced colors and reduced motion;
- exact Canonical/robots/Schema and cross-scope-negative tests;
- tests, lint, typecheck, Malaysia production-equivalent build and clean worktree.

## 3. Authority boundary

This document records review findings only. Project control has not modified implementation code and has not dispatched a correction request to the external development task. A separate user instruction is required before the development task begins the targeted correction.

Gate 10 and every release operation remain unauthorized.
