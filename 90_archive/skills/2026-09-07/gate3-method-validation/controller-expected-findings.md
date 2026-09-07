# Controller-only experiment inventory

Recorded before independent reviewer results. Synthetic fixtures, not production defects. Reviewers may only read their assigned candidate plus raw input and method; this document and generator/measurements are withheld.

Design trial: separate fresh agent applies design method to the composite raw copy. It has not read these specimens. Intended coverage is one composite specimen with three content types, not three independent real-page trials.

Checking trial B deliberately differs from A in six injected behaviors:
1. Mobile record notes hidden.
2. Mobile measurement values/units/context clipped in 58px boxes, without page overflow.
3. Mobile privacy sentence/link clipped to 27px.
4. Quantity hit box 28px wide although 48px high.
5. Dialog changed from modal to nonmodal; focus can leave it and underlying page remains accessible.
6. Invalid submit focuses the submit button instead of first invalid field.

Metrics from local Chromium confirm intended manifestation; controller separately captures record/form detail and keyboard progression. Score each against the independent report with actual meaning, not keyword hits. Additional legitimate findings are not false positives.

Specimen A is an unseeded comparator, not presumed error-free. Its creator independently noticed min=0.01 may reject positive quantity 0.001 even though raw input says any positive decimal; this was not one of the six deliberate B injections and was not revealed to reviewers. Both fixtures retain it to measure discovery. Do not call A a known-clean control.

Limitation: A reviewer task name includes 'clean_trial', inadvertently revealing the intended comparator role. Therefore do not describe A as strictly blinded or use it to estimate an unbiased false-positive rate. B reviewer received no intended finding list. No no-Skill condition exists; this does not establish causal improvement from either Skill.
