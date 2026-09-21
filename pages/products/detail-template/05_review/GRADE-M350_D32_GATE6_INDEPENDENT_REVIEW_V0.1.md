# GRADE-M350 D32 Gate 6 Independent Review V0.1

## 1. Control

| Field | Value |
|---|---|
| Review ID | `GRADE-M350-D32-G6-INDEPENDENT-REVIEW-01` |
| Dispatch | `GRADE-M350-D32-G6-EXEC-01` |
| Page / path | `GRADE-M350` / `/products/m-350/` |
| Date | `2026-09-20` |
| Review mode | `INDEPENDENT_REVIEW` |
| Package author | `/root` |
| Independent reviewer | `/root/m350_gate6_independent_review` |
| Candidate package | `06_handoff/GRADE-M350_D32_GATE6_HANDOFF_PACKAGE_V0.1.md` |
| Candidate package SHA-256 | `8B05B9DDC219E626B88CBD93EB339C9EFCBA5336C80D98ECBEF89E7AFC33E5FD` |
| Package-check JSON SHA-256 | `CF6F5CFB7994071B5D535FBA5182A02A352AAB7A63495ECF9A5D98E08A49B07A` |
| Result | `CHANGES_REQUIRED` |

The Reviewer did not author or edit the candidate package, its package-check JSON, the approved upstream sources, the current Manifest or D32 code. This report is the only file added by the review.

## 2. Exact inputs and inherited coverage

The review read the current M-350 Manifest V0.5, Gate 2 Full Copy and user closure, Gate 3 specification and closure, Gate 4 Freeze 02 source/evidence, the complete Gate 5 first-review/recheck chain, the Gate 4/new Gate 5 Controller closure, the current Products Playbook/addendum and M-350 Brief. It also read the active Gate 6 Agent, both Gate 6 methods, the Gate 6 execution/review contract, Gate 5→6 acceptance contract and Gate 8→9 evidence contract.

The following identities independently reproduce the package's declarations:

| Input | Bytes | SHA-256 |
|---|---:|---|
| Gate 2 Full Copy V0.1 | `13942` | `85A4C0183A382F2F8CBFC57D7F59D7DF515111C22F811D97AE195D64C4A6957A` |
| Gate 2 user closure | `2449` | `044AB84DCBD6DA46EDC475A09046DB20B6834FC1B3E42C9A648B26711188943F` |
| Gate 3 specification | `9326` | `202E56807DE4542F488ABE1C687314745F26D3B358FFC4D37E20D7C20979B2D3` |
| Gate 3 source | `27564` | `B5F748B870BA5A6FF1A2C8450DE91633152E7F1A3004ADA88BA405F3E60C36D5` |
| Gate 4 Freeze 02 source | `31375` | `AAB959A66FD8790C04D1754EE746D5C1E2F9177A52CFA59C0B9EE68E40E44F32` |
| Gate 4 Freeze 02 evidence index | `12914` | `DB0082B97984CA51DBC822BA062D218F0E8663B126B81C435D0FA082F546DE83` |
| Gate 5 targeted recheck | `5994` | `FB88FA96FB4D8BD8BB6E27F8A00E706949E83C5AC6A56C8940116B63EE738E95` |
| Gate 4/new Gate 5 Controller closure | `4332` | `2F6DB74EEA8B97C224695D4602035D10C431CECF5B89D3D9EB28C2ECBBCE7D50` |

The valid Gate 5 review chain remains inherited. No new visual trigger was found, so this review did not repeat the three-viewport visual review or create duplicate screenshots.

The D32 architecture was checked read-only against `AGENTS.md`, `README.md`, `CONTRIBUTING.md`, current `develop` at `5a7801b05bdb4aeccf7a95b336ef04c3740579ab`, the Home content/identity implementation and the accepted Product Hub worktree. The package correctly leaves post-meta names, option names, template filenames and migration mechanics to D32; its WordPress/PHP/MariaDB, managed-content, shared-Chrome, isolated-worktree and fail-closed direction is compatible with the current repository pattern.

## 3. Independent package checks

Fresh PowerShell parsing reproduced `16` unique acceptance IDs and `8` unique dependency IDs. The package correctly preserves these reviewed requirements:

- one English M-350 Grade page, the exact path/canonical and `site_scope=tio2-my`;
- the approved public-copy source, exact module order, 15-row technical data and deliberate omissions;
- zero public TDS version exposure, including the internal `V3 2023` identity;
- contextual Quote/Sample/Document URL exception while keeping the shared fixed RFQ clean;
- WordPress-managed ordinary content with implementation freedom, migration/idempotence/rollback expectations and cross-scope fail-closed behavior;
- Freeze 02 visual authority, shared Chrome, four automated CSS viewports and the user-excepted physical-device/manual-screen-reader/native-zoom items recorded as not tested rather than passed;
- Product plus Breadcrumb machine meaning, preview `noindex,nofollow`, sitemap exclusion and no Gate 10 authority;
- Gate 8 evidence-manifest, clean-identity, held-runtime and two-round preflight requirements;
- a separate page, integration and release status boundary.

The count checks do not close the semantic gaps below. The package-check JSON records the correct ID sets and boolean declarations, but it does not itself record the generating command, candidate-package hash, time or limitations. The independent checks above therefore bind its assertions for this review; the JSON alone is not treated as proof of semantic completeness.

## 4. Findings

### `GRADE-M350-D32-G6-F01` — Important — OPEN

**Object:** package §6 and §10, Product Hub dependency state.

**Expected:** Gate 6 must record changes after the Gate 4/new Gate 5 closure and bind the actual accepted Product Hub baseline if it becomes available before handoff. The M-350 developer must know the exact immutable dependency identity and whether the final candidate consumes it or keeps integration open.

**Observed:** the package states that the Product Hub replacement candidate is still undergoing Gate 9. That statement is now stale. The current Product Hub Manifest V0.2 records Gate 9 `PASS / CLOSED` for implementation `95ed4c4c47481ef78f64fa90b95a1096ea45bfae`, evidence/clean HEAD `8a4e3f5cb88cc30d0aecc36955ccb3ac19b8307c`, build `wp-9fcfb835a0e8b3709924a3d05cfe0bf5173fcd4db200308e0c4edf96845b68df`. The accepted branch is still separate from D32 `develop`, so saying only “start from latest develop” plus “consume an accepted baseline or keep the dependency open” leaves the exact integration candidate unresolved.

**Impact:** `02开发` can start from a baseline that lacks the accepted Products owner/resolver, can treat an already accepted dependency as mutable, or can return an M-350 page without the required Product Hub readiness integration. Gate 9 would then receive an avoidable candidate-identity ambiguity.

**Owner:** Gate 6 package author / Project Control for dispatch sequencing.

**Acceptance condition:** revise §2/§6/§10 to cite the current Product Hub Manifest and exact accepted implementation/evidence/build identities; state the permitted D32 integration route from latest `develop` without authorizing release; require the M-350 evidence Manifest to distinguish the M-350 implementation commit from the exact consumed Product Hub ancestor/composition. If integration is intentionally deferred, preserve `M350-D32-DEP-PRODUCT-HUB=OPEN` and state why the final candidate cannot claim `M350-D32-AC-PRODUCT-HUB` PASS.

### `GRADE-M350-D32-G6-F02` — Important — OPEN

**Object:** package §5, §9 `M350-D32-AC-CONDITIONAL-ROUTES` / `M350-D32-AC-CONVERSION-CONTEXT`, and §10 route/receiver dependencies.

**Expected:** a readiness check that requires the “expected page identity” must name that identity. The approved Brief binds `PRODUCT-PROC-CL`, `APP-COAT`, `APP-INK`, `APP-PLAS`, `APP-PAPER`, `MARKET-EU-001`, `MARKET-UK-001`, `MARKET-IN-001` and `MARKET-BR-EN`; the registry supplies their current paths. The approved Full Copy also requires the ready RFQ receiver to render `Request a Quote for M-350`, ask for destination, quantity range, application and purchasing requirements, and avoid price/stock/MOQ/Incoterm/freight/lead-time/delivery promises.

**Observed:** §5 names only generic “validated process target”, “four application topic relations” and “four market relations”. It does not give their Page IDs or current paths and therefore cannot determine wrong-owner failure. §10 groups the related dependencies without an exact target map. The RFQ dependency says only “real receiver accepting validated context”; the exact receiver-side heading/helper/no-promise acceptance from Full Copy §3 is absent. `M350-D32-AC-CONVERSION-CONTEXT` verifies the outgoing URL but not the approved receiving result.

**Impact:** D32 can connect a correct-looking path to the wrong managed owner, invent a target, or call a receiver “ready” without the approved M-350 context presentation. The package would then pass its own broad wording while violating the approved route and receiver contract.

**Owner:** Gate 6 package author; target-page owners remain responsible for their implementations.

**Acceptance condition:** add one exact route map with Page ID, current path, current URL-status boundary, expected `tio2-my` ownership and unready behavior for Process, four Application and four Market relationships. Add the RFQ receiver-side acceptance to `M350-D32-DEP-RFQ` and the applicable acceptance mapping. Keep provisional target URLs conditional and WordPress-managed; do not authorize or implement the sibling pages in this task.

### `GRADE-M350-D32-G6-F03` — Important — OPEN

**Object:** package §3–§4, §7 and §9 content/technical/schema conditions.

**Expected:** the Gate 6 package must preserve the approved conditional rendering contract as well as the normal 15-row state. Full Copy §6 requires an affected TDS claim/row and matching Schema value to be suppressed if that field is withdrawn or conflicted, and requires the Paper path/link to be omitted if the neutral Paper relation is withdrawn. These conditions must remain aligned across visible output and Schema.

**Observed:** the package requires an exact 15-row list and six application blocks, treats an incomplete record as a page-level fail-closed error and has no withdrawn/conflicted-row or withdrawn-Paper behavior. Its acceptance IDs check only the normal 15-row and current-Paper state. This replaces two approved field/relation-level conditions with a different whole-record behavior.

**Impact:** Gate 8 has no valid implementation rule for a later approved field/relation withdrawal. It may continue rendering conflicted machine claims, or take the whole page down when the approved contract requires only the affected row/relation to disappear.

**Owner:** Gate 6 package author.

**Acceptance condition:** add source-bound visibility/status handling for each technical row and the Paper relation without guessing database mechanics; require visible/Schema synchronization; add normal, affected-row, restored-row, Paper-withdrawn and restored-Paper evidence under the existing content/technical/schema/conditional-route acceptance IDs. Keep the current initial seed at all 15 approved rows and the approved Paper treatment.

### `GRADE-M350-D32-G6-F04` — Important — OPEN

**Object:** package §3, §7, §9 identity/CMS/Schema mapping.

**Expected:** the M-350 Brief requires identity, slug, path, locale and a content-contract revision to match the approved Gate 6 package. Full Copy §5 gives the Product `@id` as `https://tio2products.com/products/m-350/#product`. The Product description must point to one exact approved visible string so D32 and Gate 9 compare the same value.

**Observed:** the package identifies an English page and path but assigns no content-contract revision. It requires a Product node with canonical URL/name/SKU and “the visible Hero description”, but omits the approved exact Product `@id` and does not say which of the three Hero paragraphs is the Schema description. The 16-ID table therefore cannot prove an exact content-record revision or exact Product identity/description.

**Impact:** two implementations with different schema identities/descriptions or content revisions could both claim conformance. Evidence and migration could bind only a hash without proving which approved contract it represents.

**Owner:** Gate 6 package author.

**Acceptance condition:** assign a stable M-350 content-contract revision and require it in the internal managed record/evidence without public exposure; state `locale=en`; bind the exact Product `@id`; identify the exact approved Hero sentence/paragraph used as Product description; add these values to `M350-D32-AC-IDENTITY`, `M350-D32-AC-CMS`, `M350-D32-AC-SCHEMA` and the Gate 8 content-identity evidence.

## 5. Review disposition

No Blocker was found. Four Important Gate 6 contract findings remain open. The package is therefore not eligible for Gate 6 `REVIEW_PASS`, Project-Control closure, approved dispatch to `02开发`, or Gate 8 start in its current identity.

`GRADE-M350-D32-G6-INDEPENDENT-REVIEW-01 = CHANGES_REQUIRED`

The valid upstream Gate 2–5 coverage, the D32 architecture compatibility conclusion, the 16/8 ID-set checks and all unaffected package sections may be inherited in a targeted recheck. The author should preserve V0.1, issue a revised package/check identity, close F01–F04 with a source comparison, and request `TARGETED_RECHECK`. This review does not authorize Gate 10, merge to release, deployment, publication, sitemap inclusion or indexing.
