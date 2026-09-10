# APP-COAT Gate 4 Independent Rereview Submission V0.2

## Review object

Review workset `COAT-G4-COMPLETE-V02`, freeze `COAT-G4-COMPLETE-V02-F01`, response `COAT-G4-IR-01-R1`.

Start at `D:/23MySec/pages/applications/coatings/04_planning/gate4-v0.2/evidence_index.json`, SHA-256 `aad86687d0c8ca055d18482f49f86737ca3c35db72a3d88be5a71c6fb9f404ed`. Recompute the V0.2 freeze at `approval_core/source-freeze.json`, SHA-256 `7f40b7202990a25b17448bd6d75480caebd813cb71a4905d9f8d4a7d1a551226`.

The reviewed candidate remains the inherited V0.1 HTML, `33997` bytes, SHA-256 `a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2`. The visual CSS remains `6196` bytes, SHA-256 `f4c2e703345cb3eae1221937ff63b61b3742c6f2da6ccf9c1f3da730db67ca8c`. Candidate and V0.1 history are read-only during rereview.

## Required focused rereview

1. Confirm the V0.2 source and CSS are byte-identical to the V0.1 freeze.
2. Reproduce true hover on `.heroActions .primaryAction` at 1440, 768 and 390. The accepted frozen state is `#FFFFFF` foreground on `#007F77` background, measured `4.881302249384679:1`; the target must remain at least 44×44 CSS pixels and geometry must remain stable.
3. Confirm `#007F77` on `#F5F8FB` at `4.5796989189682495:1` belongs to non-primary link hover and is not used as the primary CTA acceptance condition.
4. Inspect the three new hover captures and three complete-page rerenders. Confirm 1440×10070, 768×11531 and 390×17825 extents, no horizontal overflow, ten-section order, one H1, nine H2 headings, eight equal Grades, three request owners and six sources.
5. Recompute the inherited-asset verification: all 48 V0.1 formal files must match their recorded bytes, SHA-256, dimensions and decoded pixel identities. New diagnostic rerenders must not replace the exact inherited formal files.
6. Confirm V0.1 workset/freeze and `gate4-complete-independent-v0.1/REVIEW.md` remain retained failure history.

The V0.2 executor runtime is `24/24 PASS`; the inherited formal runtime is `720/720 PASS`. The executor reports required Finding count `0` for the remediation submission. Independent rereview must issue its own PASS or stable Finding.

This submission does not approve or close Gate 4 and does not start Gate 6, development, deployment or publication.
