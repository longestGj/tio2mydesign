# Review harness diagnostic — 2026-09-21

Initial independent run: 494 PASS / 5 FAIL. The five failures were H4 `one-card-no-duplicate` at 1440/1024/768/390/320. This incorrectly reused H2's single-guide/no-Latest expectation for H4. Read-only root-cause inspection of the frozen workset and inherited `RES-000_D32_BUILD.cjs` lines 26–31 confirms H4 deliberately contains a Featured guide plus one distinct trade metadata fixture in Latest. This is not duplicate publication or an H0 inventory change.

Reviewer corrected only the review harness: H2 expects one Featured/zero Latest, H4 one Featured/one Latest, with distinct card destination values. No author candidate was edited. Final fresh results are in `independent-results.json`; initial issue is a reviewer assertion error, not a candidate Finding.
