# HOME-001 Applications-Aligned Gate 6 Handoff Package V1.0

## 0. Package control

| Field | Value |
|---|---|
| Page / route | `HOME-001` / `/` |
| Site scope / language | `tio2-my` / `en` |
| Package ID | `HOME-001-G6-APP-ALIGN-PACKAGE-V1` |
| Handoff ID | `HOME-001-G6-APP-ALIGN-HANDOFF-V1` |
| Dispatch candidate | Existing task `01My开发1` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e` |
| Date | `2026-09-11` |
| Status | `READY_FOR_INDEPENDENT_GATE6_REVIEW / NOT_APPROVED / NOT_SENT` |
| Change class | Home presentation-only visual unification |
| Current runtime until Gate 9 pass | Rollback/current record `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` |
| Gate 8 authorization | User explicitly authorized, but actual dispatch waits for independent Gate 6 review and project-control close |
| Release authority | None |

This is the sole Gate 8 development entry for the Applications-aligned Home revision. It supersedes no historical Home package or runtime by itself. Older Gate 7 files remain source history and approved nonvisual references only where the current page Manifest explicitly inherits them.

## 1. Required consumption order

Gate 8 must read these sources in order and must not use version-number preference to override the current Manifest:

1. `pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.0.md` — current Home planning navigation entry.
2. `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_CLOSEOUT_V1.0.md` — exact accepted visual combination and valid review chain.
3. `pages/home/04_planning/18_homepage_applications_aligned_visual_design_v1.1.md` — approved visual contract.
4. `pages/home/04_planning/visual-designs/home-applications-aligned-v1.1/freeze-record.json` — source, dependency and seven-asset identities.
5. `pages/home/04_planning/visual-designs/home-applications-aligned-v1.1/homepage-applications-aligned-preview-v1.1.html` — complete visual prototype and exact Home body reference.
6. `pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE6_ACCEPTANCE_AND_BLOCKERS_V1.0.md` — stable `HOME-VU-A01..A12` implementation/Gate 9 contract.
7. `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` and `pages/home/06_handoff/HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md` — current approved nonvisual meaning as inherited by the page Manifest; their historical Gate labels do not control this revision.
8. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`, `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`, `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`, and `brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md` — shared authorities.
9. `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` — rollback/current implementation identity until the new candidate passes Gate 9.

No historical rejected visual, old conditional Tablet treatment, page-private Chrome prototype, another `site_scope`, or `mytio2.com` content may override this set.

## 2. Frozen input identities

| Input | Bytes | SHA-256 | Role |
|---|---:|---|---|
| Current Home Manifest V1.0 | 2,528 | `E78D6634C0FC49D9E3857C63A20E322ED81E376150BCA583980C38930DC1F6B5` | current planning pointer at Gate 6 intake |
| Gate 4 closeout V1.0 | 3,538 | `5F0189E8B505FF1893FF26CDA6B877211D065F30721140630B4C868C6225BD69` | accepted visual/review/authorization entry |
| Gate 4 visual contract V1.1 | 4,630 | `DAB1DADC3F859CE30A0A54B833296074DE92A114BAC277AA455479CF2C55D735` | approved visual result |
| V1.1 frozen HTML source | 32,550 | `FADA718489C6558EE1025B70FB1DFD9F2303DF7226EADBE20C3A22C4177708DF` | complete visual prototype/reference |
| V1.1 freeze record | 9,506 | `06DBDA1AEE5FFAED6FBEF9BB7543A34B7D2D60971C85E5EE0C41A9327A1DEA07` | exact evidence/dependency identity |
| Gate 5 initial review | 9,454 | `680AC9A617A48435963E490C6BFCF47C3815857BCA6D2638CC7F50EE962F2125` | unchanged-body review plus original P0 finding |
| Gate 5 targeted recheck | 7,396 | `12C3FB295FB188BD9213B8FC2154DCF154AD45A2E1076E659D322EC2B838665D` | closes `HOME-G5-VR-01` on V1.1 |
| Current SEO/GEO/Schema contract | 11,649 | `C76EFDA95E797B80BB2B4E34095B6E002C51ADEF2A936CDEF349A33D192657C1` | exact nonvisual output contract |
| Historical/current content handoff | 28,386 | `49B34C52B5B761C0A66190A55329CDB7717097E81638491E11DA88DD3212DB4F` | exact visible copy/link semantics only, where inherited |
| Current rollback implementation Manifest | 6,029 | `C86009C47ACF8E8C0D588DBF4938F4D34FB4853156AED2D5F5CD1CD23F774E85` | executable rollback/current evidence record |
| Shared Chrome V0.5 | 7,235 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | shared behavior/geometry authority |
| Footer legal addendum V1.0 | 2,310 | `C1F0011408ED1D87CFF6D36C11F7E9812CC9A803431A3F7030C771FAF41BF633` | legal utility contract |
| Production SVG Manifest V1.0 | 8,090 | `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894` | exact production asset keys and hashes |

The V1.1 freeze record pins the Home body `<main>...</main>` SHA-256 to `A9CC17BA5C40D943949D56820F336CFFB384A61900B11791A31549E0866DC138`, identical to V1.0. It also records the Gate 4 author's read-only D16 inspection identities. Those D16 hashes are historical intake evidence, not permission for Gate 8 to assume the same repository state. Gate 8 must inspect and report the actual baseline before editing.

Formal Gate 4 visual evidence:

| State | File | Dimensions | SHA-256 |
|---|---|---:|---|
| 1440 default | `home-001-applications-aligned-1440-v1.1.png` | `1440×6614` | `64243AEE18C29624B3720E7ED7205275F41E22F205B07C6352A03B6F22B2F1F4` |
| 1024 default | `home-001-applications-aligned-1024-v1.1.png` | `1024×7525` | `918A9B32C1BD06D35791BBA6FC2A610F6CFEDCC0D0F7F7CF6F0F0084057A0C6D` |
| 768 default | `home-001-applications-aligned-768-v1.1.png` | `768×8299` | `86E47B22E9C96D63FB72D307A55436BB09B6A7DAD30F2940B97EAD68D4A44A31` |
| 390 default | `home-001-applications-aligned-390-v1.1.png` | `390×10356` | `91BC39DABE371F689F9C36A6837EFBD5C5FED75BC184E3DF71475C7068AA566D` |
| 320 default | `home-001-applications-aligned-320-v1.1.png` | `320×11031` | `6C0655D73DCB575A36E72CC0D03DFF09A46376A91AC3C5E30FA8F4039C6A33FE` |
| 390 Mobile Menu open | `home-001-mobile-menu-390-v1.1.png` | `390×844` | `E1C1C7EA289F8DC14AF3528FAB2B6EE9060C1139336068E41EABAB1BF360C308` |
| 390 Products expanded | `home-001-products-expanded-390-v1.1.png` | `390×11041` | `B8447D73AFB5006373E0A5CBC280057E1E6D11A5B2ED6F4DCB9B7DE74B1D1F4F` |

All files reside in `pages/home/04_planning/visual-designs/home-applications-aligned-v1.1/`; the freeze record remains the canonical byte-count source.

## 3. Code and evidence identity classes

| Object | Identity | Gate 8 treatment |
|---|---|---|
| Visual contract V1.1, freeze record and A01–A12 outcomes | `APPROVED_CONTRACT` after Gate 6 closure | Must achieve the specified visible/observable result; implementation technique remains with Gate 8 |
| Exact Home copy, module order, hrefs, 14 Grades, SEO/GEO/Schema output, shared Chrome and Logo contracts | `APPROVED_CONTRACT` | Must remain unchanged; changes return to D23 owner |
| Current D16 Home renderer/CSS and rollback commit recorded in Gate 9 Manifest V0.2 | `REFERENCE_IMPLEMENTATION` | Inspect actual repository first; reuse/refactor only within the allowed Home visual scope |
| V1.1 frozen HTML/CSS/JS | `PROTOTYPE_ONLY` as code; its approved visual/body results are contract inputs | May be studied or selectively adapted; do not copy its private Header/Footer/Menu into production and do not treat its scripts as production behavior |
| V1.1 PNGs | `APPROVED_CONTRACT` visual evidence | Compare result and intended layout; they do not prove runtime behavior |
| Prototype-local Inter font file and capture/verifier scripts | `PROTOTYPE_ONLY` | Do not add them to production merely because the prototype used them; use the D16 project's approved font/test toolchain |

Any code or snippet not explicitly classified above defaults to `PROTOTYPE_ONLY`.

## 4. Gate 8 repository preflight

Before writing tests or code, `01My开发1` must:

1. read the actual `D:\16Wordpress_nextjs\AGENTS.md` and every applicable nested instruction;
2. resolve the repository root, saved project/worktree, branch, HEAD, upstream relationship and full dirty status;
3. inventory the current Home renderer, Home CSS, responsive Product group component, Home tests, CMS JSON, metadata, JSON-LD, shared Malaysia Global Chrome, production SVG assets and existing Home verification directories;
4. compare those actual identities with this package, the V1.1 freeze record and rollback Manifest without checking out, resetting, deleting or overwriting user changes;
5. create or select an isolated feature worktree/branch under D16 rules; do not assume an old Market-page branch/worktree or the historical `codex/home-001-tio2-my` worktree is the correct base;
6. return `INPUT_IDENTITY_CONFLICT` before affected edits if the actual current Home content, hrefs, metadata, Schema, shared Chrome, Logo or overlapping dirty files cannot be reconciled with the frozen contract.

A newer legitimate baseline is not automatically rolled back to a historical hash. Gate 8 must map it to the same approved public result and preserve its unrelated changes.

## 5. Authorized implementation scope

### 5.1 May modify

Only after test-first red evidence:

- the current Home renderer, expected at `components/sites/tio2-my/homepage/malaysia-homepage.tsx`;
- the current Home CSS Module, expected at `components/sites/tio2-my/homepage/malaysia-homepage.module.css`;
- `responsive-product-groups.tsx` only if a failing `HOME-VU-A05` or `HOME-VU-A09` test proves the current component cannot satisfy the approved responsive/accessibility result without a Home-owned change;
- existing Home-focused unit/integration/E2E tests and one new Home visual-unification test as needed;
- the Home-only Gate 8 evidence directory and machine Manifest/receipt.

If actual D16 paths differ, Gate 8 must record the mapping and keep the same ownership boundary.

### 5.2 Frozen files and surfaces

Gate 8 must record before/after hashes and leave these byte-identical:

- `wordpress/plugins/tio2-site-model/config/tio2-my-homepage.json`;
- `lib/seo/homepage-metadata.ts`;
- `lib/seo/homepage-jsonld.ts`;
- the shared Malaysia Global Header/Footer/Menu implementation and CSS;
- all four production SVG Logo assets and their D16 bindings unless the binding already consumes the approved keys without file change;
- all other pages, their content/data/styles/components/tests and all D23 sources.

The resulting public content, hrefs, Grade order, metadata/JSON-LD and shared Global Chrome behavior are frozen even if the actual repository represents one item through a different file path.

Every Home content, route, cache, menu, metadata, Schema and media lookup remains explicitly bound to `site_scope=tio2-my`; no cross-scope fallback is permitted.

### 5.3 Explicitly outside scope

- WordPress content-model or CMS data changes;
- Header/Footer/Menu/Logo redesign, private fork or shared-component refactor;
- any child page, Market/Product/Application/Documents/Resources/About/Contact/Conversion/Legal implementation;
- RFQ receiver, form schema, submissions, email, privacy data flow, analytics or consent-system changes;
- new routes, redirects, page IDs, keywords, Canonical strategy or Schema relations;
- merging to local main, remote push, deployment, publication, DNS, indexing, Gate 9 approval or Gate 10.

## 6. Home renderer and layout mapping

Gate 8 preserves the current semantic elements, headings, links, IDs, `data-module` order and data mapping, adding only Home-owned visual grouping hooks where necessary.

| Existing Home module | Required presentation result | Responsive result | Contract ID |
|---|---|---|---|
| Hero | Rounded light/bordered outer surface; left copy/actions; right bounded powder media card | side-by-side at 1440/1024/768; stacked copy/actions/media at 390/320 | `HOME-VU-A02`, `HOME-VU-A03` |
| Start Here | Three equal-family entry cards immediately below Hero | three columns at 1440/1024/768; one column at 390/320 | `HOME-VU-A04` |
| Markets | Four Applications-family cards | `2×2` at 1440/1024/768; one column Mobile | `HOME-VU-A02`, `HOME-VU-A08` |
| Products | Four rounded group cards and a separate process/action row | four columns at 1440; `2×2` at 1024/768; accessible disclosures Mobile | `HOME-VU-A05` |
| Applications | Five same-family cards | `3+2` at 1440; `2+2+1` at 1024/768; one column Mobile | `HOME-VU-A02`, `HOME-VU-A08` |
| Company & Supply | One light rounded container with current two-part content | responsive stack without semantic or copy change | `HOME-VU-A01`, `HOME-VU-A08` |
| Documents | Two white cards inside a light section | two columns where space permits; one column Mobile | `HOME-VU-A01`, `HOME-VU-A08` |
| Resources & Buyer Answers | Five same-family cards | balanced `2+3` at 1440; two columns 1024/768; one column Mobile | `HOME-VU-A01`, `HOME-VU-A08` |
| Page RFQ | One rounded Deep Navy body emphasis with exact six labels and CTA | visible 1440/1024/768; absent from layout/a11y tree at 390/320 | `HOME-VU-A06` |

The Home body shell uses a centered maximum width of `1200px` with responsive safe margins. Do not make Home content identical to Applications; only the approved visual language, not page role or module content, is shared.

## 7. Shared Chrome assembly

Production must continue to use the actual shared Malaysia Header/Footer/Menu components. The private Chrome markup in the static prototype exists only to render planning evidence. Home-specific CSS must not target or override the shared component's internal classes.

Gate 8 must prove:

- Desktop 84px and Mobile 64px Header geometry;
- navigation order `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`;
- fixed RFQ in Desktop Header, Mobile Header, Mobile Menu and Footer;
- Home current indicator with zero buyer-visible `CURRENT`;
- one active accessible primary navigation and no hidden-surface focus leak;
- Deep Navy Mobile Menu, approved eight-item order and terminal RFQ;
- Footer legal utilities and semantic Cookie Settings behavior;
- approved production SVG assets, unchanged.

If a shared defect is discovered, Gate 8 reports it to the Global Chrome owner and keeps it outside the Home edit set. This package does not authorize a shared repair.

## 8. Test-first execution

Gate 8 must create or update failing tests before implementation. The first test commit records that the old Home does not satisfy the Applications-aligned visual contract while existing content/order/link assertions remain green. Tests then drive the smallest Home-owned renderer/CSS changes.

Expected affected tests, subject to actual-repository confirmation:

- `tests/unit/homepage/malaysia-template.test.tsx`;
- `tests/unit/homepage/malaysia-styles.test.ts`;
- existing Home integration/infrastructure tests;
- `tests/e2e/malaysia-homepage-gate9.spec.ts`;
- a new `tests/e2e/malaysia-homepage-visual-unification.spec.ts`.

At minimum the final regression run must cover the full Home unit/integration/infrastructure set, TypeScript, targeted lint, production build, Home visual/interaction E2E and shared Global Navigation E2E. Gate 8 records exact commands, versions, exits and outputs rather than claiming a fixed command exists when the repository differs.

## 9. Required Gate 8 evidence

Gate 8 creates one Home evidence directory, recommended:

`docs/verification/home-applications-aligned-v1.0/`

It must contain:

- `gate8_evidence_manifest.json` conforming to `docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json` from the D23 contract;
- a committed implementation receipt such as `GATE8_IMPLEMENTATION_RECEIPT.md`;
- `home-001-1440.png`;
- `home-001-1024.png`;
- `home-001-768.png`;
- `home-001-390.png`;
- `home-001-320.png`;
- `home-001-mobile-menu-390.png`;
- `home-001-products-expanded-390.png`;
- machine-readable test/build/a11y/bounding-box output needed to prove the complete acceptance set.

The Manifest and receipt must enumerate the stable IDs exactly as:

`HOME-VU-A01`, `HOME-VU-A02`, `HOME-VU-A03`, `HOME-VU-A04`, `HOME-VU-A05`, `HOME-VU-A06`, `HOME-VU-A07`, `HOME-VU-A08`, `HOME-VU-A09`, `HOME-VU-A10`, `HOME-VU-A11`, `HOME-VU-A12`.

The Manifest binds repository, branch, baseline commit, implementation commit, evidence HEAD, clean-check time, build directory and ID, runtime URL/path/scope/start time, Page ID, all acceptance IDs, evidence hashes/commands/environment, receipt references, open items and runtime hold. Every receipt evidence reference uses its own `EVIDENCE: <repo-relative-path>` line, and the reference set must exactly equal the Manifest set.

Gate 8 keeps the same candidate runtime available with hold reason `GATE9_PASS_OR_RETURN_NOTICE` until Gate 9 sends pass, return or release notice. If runtime identity changes, Gate 8 must return a new complete identity and difference record before review.

## 10. Before/after preservation table

The Gate 8 receipt must include this table populated with actual D16 paths and hashes:

| Surface | Baseline path/hash | Evidence HEAD path/hash | Required result |
|---|---|---|---|
| Home CMS JSON | actual | actual | byte-identical |
| Home metadata | actual | actual | byte-identical and rendered output exact |
| Home JSON-LD | actual | actual | byte-identical and rendered graph exact |
| Shared Chrome assembly | actual | actual | byte-identical |
| Shared Chrome client behavior | actual | actual | byte-identical |
| Shared Chrome CSS | actual | actual | byte-identical |
| Four production SVGs | actual | actual | 4/4 match Production Manifest |
| Home visible copy/hrefs/Grades | test/DOM identity | test/DOM identity | exact semantic parity |

Any authorized Home renderer/CSS hash change is listed separately with a short purpose and acceptance-ID mapping.

## 11. Failure and return rules

- A frozen file change, content/href drift, shared Chrome edit, site-scope fallback, Grade mismatch, metadata/Schema drift, missing evidence, failed build or unreported dirty overlap blocks Gate 8 return as complete.
- Gate 8 does not repair a D23 source problem, rewrite approved content, invent a route, or expand the task to another page. It returns one specific issue with path, actual/expected result and affected acceptance ID.
- A route or shared dependency outside Home ownership may remain an integration/release blocker with owner and evidence. It cannot be hidden, substituted or silently repaired under this package.
- The old Gate 9 V0.2 implementation remains the rollback/current runtime until the new evidence HEAD passes independent Gate 9. No file in D23 or D16 is deleted to make the new candidate fit.

## 12. Handoff and stop condition

After Gate 6 independent review and project-control close, project control may send this exact package to the user-authorized task `01My开发1`. Only successful delivery/receipt may be recorded as handed off. Gate 8 stops after committing the implementation, evidence Manifest and receipt and returning their exact identities while keeping the runtime available.

This package does not approve itself, does not indicate `HANDED_OFF`, and does not authorize merge, deployment, publication, DNS, indexing or Gate 10.
