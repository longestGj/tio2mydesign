# APP-COAT Gate 4 Execution Self-Check V0.2

| Field | Value |
|---|---|
| Workset / freeze | `COAT-G4-COMPLETE-V02` / `COAT-G4-COMPLETE-V02-F01` |
| Finding response | `COAT-G4-IR-01-R1` |
| Candidate SHA-256 | `a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2` |
| Source change | `NONE / BYTE-IDENTICAL V0.1 INHERITANCE` |
| Result | `PASS / EXECUTOR_SELF_CHECK_ONLY` |
| V0.2 checks | `24/24 PASS` |
| Inherited formal checks | `720/720 PASS` |
| Formal asset inheritance | `48/48 PASS` |

I reproduced the frozen primary CTA at 1440, 768 and 390 as `#FFFFFF` text on `#007F77`, `4.881302249384679:1`, with a target larger than 44 CSS pixels and unchanged normal/hover geometry. The V0.1 `#F5F8FB` / `4.5796989189682495:1` statement was a record attribution error: that pairing belongs to non-primary link hover, not the primary CTA.

The candidate HTML and CSS remained byte-identical before and after the run. Three complete-page rerenders retain the exact prior dimensions, full section order, content objects, Grade neutrality, request-owner paths, shared footer endpoint and zero horizontal overflow. I opened the three full-page rerenders and the three affected hover captures.

All 48 inherited formal assets match their V0.1 inventory bytes, SHA-256 values and dimensions and have independently recomputed decoded RGBA pixel digests. No V0.1 formal image was copied or rewritten.

The V0.1 workset/freeze and failed independent review remain unchanged. This record is not an independent review, Project Control approval, Gate 4 closure, Gate 6 authorization, development approval or publication approval.
