# MARKET-BR-PT Gate 4 Layout and Interaction Verification V1.1

Date: 2026-09-07. Role: author targeted verification. Status: `AUTHOR_VERIFICATION_COMPLETE / DRAFT_FOR_INDEPENDENT_REREVIEW`.

Reviewed `BRPT-G4-V11R1-SOURCE-01` at 1440×900 DPR1, 768×900 DPR1 and 390×844 DPR2. The page-visual shared-selector scan returns zero hits. Hero CTA normal/hover/focus and five representative surface-family focus targets were operated at every viewport. Required values pass: white on `#008078` normal, `#006c66` hover, teal focus on white/pale surfaces and white focus on dark surfaces, with 3px width and 3px offset.

Regression checks pass: all five modules remain ordered and visible; exact normalized main copy, all 14 links and seven inline language markers match Gate 3; `scrollWidth = clientWidth`; no page error; Inter loads; every visible control is at least 44×44px. Menu and Cookie keyboard open/close, focus transfer/return, background inerting and scroll lock continue to pass.

Author Findings: 0. Independent rereview of `BR-PT-G4-IR-01–03` remains required. Production implementation remains outside this artifact.

