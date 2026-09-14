# TiO2 Malaysia Full Public SEO / GA4 / GSC Gate 9 Targeted Recheck V1.0

## 1. Review identity

| Field | Value |
|---|---|
| Review ID | `TIO2-MY-G9-PCR-02` |
| Date | `2026-09-13` |
| Site scope | `tio2-my` |
| Branch | `codex/tio2-my-full-public-seo-ga4` |
| Baseline | `c5976a23ab1dc93618b0c79008c02fda69ed9f5a` |
| Implementation | `1bbcd0910c67d328e69afac5a78c034194ff764c` |
| Evidence commit | `40993a930574894368f4cdb1dd8f17e75878ab39` |
| Reviewed HEAD | `07e803852f50a33334ee37b4423e03127dc9ad23` |
| Build ID | `tio2-my-seo-ga4-1bbcd091` |
| Next runtime | `http://127.0.0.1:3123` |
| CMS runtime | `http://127.0.0.1:8280` |

## 2. Outcome

`RETURN_FOR_TARGETED_GATE8_REVISION / GATE9_NOT_PASS`

The inactive-Analytics consent defect is closed. The authorized GSC root file is also implemented and verified. The Trade freshness return is not fully closed because two buyer-visible body sentences still describe checks performed on 7 September even though the current controlling fact closure requires the checked date to be 13 September 2026 throughout the four Trade pages and projections.

No Gate 10, merge, deployment, publication, DNS, GSC verification action or indexing request is authorized by this review.

## 3. Findings

### P0 — Trade freshness correction is incomplete

The current controlling source, `TIO2_MY_LAUNCH_FACT_CLOSURE_V1.0.md`, requires the four Trade content contracts and Manifests to replace their checked date with `2026-09-13` and requires public Trade facts to expose `last reviewed: 13 September 2026`.

Two public payloads still contain an older checked-date proposition:

- `wordpress/plugins/tio2-site-model/config/tio2-my-editorial-res-trade-uk.json`: the registration/stop-notice answer says no stop notice was located in sources “checked on 7 September”.
- `wordpress/plugins/tio2-site-model/config/tio2-my-editorial-res-trade-br.json`: the current-measure paragraph says the MDIC in-force index was “checked on 7 September”.

This is not cured by changing only the page opening and `Last reviewed` label to 13 September. The old sentences remain visible to buyers and create two competing freshness dates inside each page.

Required correction:

1. Bind both sentences to the approved 13 September 2026 fact closure without changing the supported proposition.
2. Update the corresponding CMS fixtures/runtime projection.
3. Strengthen the runtime and unit checks to reject old checked-date phrases both with and without a year across all four Trade detail pages and the Resource Hub.
4. Rebuild and return a new committed Gate 8 evidence package.

### Closed — inactive Analytics consent

The inactive runtime now fails closed:

- stale `analytics_accepted` storage is normalized to `necessary_only`;
- shared consent is `denied`;
- the dialog exposes no Analytics checkbox, Accept, Save or withdrawal action;
- no Google Analytics or Tag Manager request was observed.

Independent targeted Vitest and runtime Playwright checks passed. This closure does not activate Analytics.

### Closed — GSC ownership file

`/googleaa2e91750b47f47a.html` returned HTTP 200 with the exact authorized payload:

- bytes: `53`
- SHA-256: `23C09B78F763724DDDB0470B133ACC3F3D2129B663209E6B8007C290D2B0B32D`

Production `www` to apex behavior remains a Gate 10 runtime check and was not claimed by this local review.

## 4. Independent verification evidence

- Targeted Vitest rerun: `6 files passed / 36 tests passed`.
- Runtime Playwright rerun: `4 / 4 passed` against `http://127.0.0.1:3123`.
- GSC direct HTTP/hash check: HTTP 200, 53 bytes, exact SHA-256 match.
- Visual evidence inspected at original detail: inactive Cookie Settings, EU Trade full page and Resources Hub 768 px; no new blocking visual defect found in those supplied views.
- Git worktree was clean at reviewed HEAD.

The generic evidence validator returned `EVIDENCE_INCOMPLETE` only because the Manifest declares the evidence commit while the final documentation commit necessarily follows it. Branch, ancestry, clean state, build identity, evidence files, hashes and receipt references otherwise passed. This is recorded as a tooling/self-reference limitation, not as the Trade implementation defect above.

## 5. Remaining known release dependency

The current candidate intentionally keeps optional Analytics inactive. Real production GTM and GA4 identifiers, the matching container-to-destination binding, atomic active Privacy EN/BM + Cookie Policy + Cookie Settings content, and clean-browser denied/accepted/withdrawn evidence remain a release-level dependency under the approved Gate 6 contract. Until that evidence exists, the full Gate 9 release conclusion cannot be `PASS`, even after the Trade text is corrected.

