# MARKET-BR-PT Gate 4 Layout and Interaction Verification V1.0

Date: 2026-09-07. Role: author verification. Status: `AUTHOR_VERIFICATION_COMPLETE / DRAFT_FOR_PROJECT_CONTROL_REVIEW`.

Reviewed freeze `BRPT-G4-V10-SOURCE-01` at 1440×900 DPR1, 768×900 DPR1 and 390×844 DPR2. Evidence categories are kept separate: full-page and state PNGs are `STATIC_VISUAL`; browser dimensions, font loading, control geometry and operated Menu/Cookie behavior are `ACTUAL_RUNTIME`; copy/link/module parity is `SOURCE_INSPECTION` plus browser readback.

The complete pages contain all five modules in approved order. Normalized visible main copy, all 14 main link labels/targets, module IDs and seven inline language declarations match the frozen Gate 3 source. Each viewport has `scrollWidth = clientWidth`, no page error, Inter loaded, and a minimum visible control size of 44×44px. The longest PT-BR headings, three application cards, document rule, trade CTA, five RFQ requirements and Footer remain readable in the complete pages and overlapping segments.

At 768 and 390, keyboard activation opens Menu with `aria-expanded=true`, moves focus to Home, makes main and Footer inert and restores focus to the Menu control on Escape. At all three viewports, keyboard activation opens Cookie settings with focus on Close and Escape returns focus to Cookie Settings. No production request was sent.

Author Findings: 0. Production route/canonical/hreflang, real receiving pages, browser/device matrix and Gate 9 implementation verification remain outside this planning artifact. This report is not independent review or Gate approval.

