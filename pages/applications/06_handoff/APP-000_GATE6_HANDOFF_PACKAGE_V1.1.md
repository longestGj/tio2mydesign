# APP-000 Gate 6 development handoff package V1.1

Date: 2026-09-08. Package ID and Gate 8 handoff ID: `APP-000-G6-HANDOFF-02`. Dispatch: `APP-000-G6-AUTHOR-DISPATCH-01`. Actual author: `/root/app000_gate6_author`. Status: **`DRAFT_FOR_PROJECT_CONTROL_REVIEW / READY_FOR_TARGETED_RECHECK / NOT_SENT`**. This is the targeted revision candidate produced against both V1.0 independent reports. V1.0 and its author self-check remain unchanged history. This file does not close Gate 6, create or edit a current Manifest, record an external handoff, implement the page, or authorize merge, deployment, publication, DNS or indexing.

Gate 2 B remains the sole editable Buyer Copy source. This package binds approved sources and defines observable implementation and Gate 9 requirements without prescribing WordPress types, API fields, React components, cache products, cache keys/tags or repository paths.

## 1. Gate 5 → Gate 6 admission and execution path

| Required object | Exact binding and disposition |
|---|---|
| Approved visual combination | Accepted input `APP-000-G4-G6-ACCEPTED-01`, bundle `APP-000-G4-BUNDLE-001`; source `pages/applications/04_planning/gate4-v1.0/index.html`, SHA-256 `EA8B5CB0AD39226C9C392103379A09DB5AD7D7A96E725336DC55348EA05230E4`; freeze SHA-256 `BFCC957D0F425D4E864CD9B6DA76698C70B19A175E555328237C7197A9FC09BA`; evidence index SHA-256 `36E00B8E8107D3B7692B244B3C7601218EF1320A72B7E962B36C3C2CAD826011`; accepted handoff SHA-256 `25A5DF4F3C8C9F650FB12C061E42C91E4DC84546FD273815DAB2F9CD66511715`. |
| Effective review chain | Gate 5 review `pages/applications/05_review/APP-000_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md`, SHA-256 `ED508A2494F3295179EB6AD3DB04F812CACF90B3E663D6953B886EB528932129`, complete `REVIEW_PASS`; Gate 6 V1.0 independent review `pages/applications/05_review/APP-000_GATE6_INDEPENDENT_REVIEW_V1.0.md`, SHA-256 `0E13743FC0531AF29712A3B822691A7ADB073EA0E571485F47B1E8C31CAD279A`, `CHANGES_REQUIRED`; internal-link planning review `pages/applications/05_review/APP-000_INTERNAL_LINK_PLANNING_REVIEW_V1.0.md`, SHA-256 `793E1DAFD88863BF3970E80A13AAF4CC771FF6CF3E3D6F1F8C05B4C19F867014`, `CHANGES_REQUIRED`. §15 maps all eight Required Findings to this revision. |
| Controller closure | `APP-000-G4-DELEGATED-CLOSURE-01`, file SHA-256 `7052E7A1324F5BCCA2DF9866194E4C68E1CA0F51B578D7F767AC87034629674A`; approval basis `USER_STANDING_AUTHORITY / G346-DELEGATED-CLOSURE-20260907`; current intake Manifest V1.3 SHA-256 `6EC2FD5D1D627A8BD230D8683E4DDA0BD5D51D8EF563B45E69209E6D3467D89C`. |
| Gate 6 start authority | User authorized continuous APP-000 execution from Gate 2 through the Gate 9 result; Controller dispatch `APP-000-G6-AUTHOR-DISPATCH-01`; this author may write only the Gate 6 package and author self-check, and stops at `READY_FOR_TARGETED_RECHECK`. No explicit pause applies. |
| Open dependencies | Thirteen stable dependencies in §10 cover APP-000, shared targets, destinations, RFQ, evidence/runtime, nine-page F02 and two separately named Process consumers. Each has owner, closure evidence and blocking layer. |
| Post-closure change | Read-back found no approved B/C, frozen visual, Gate 5 review or Controller-closure change. The two Gate 6 reports identify handoff precision gaps only. They trigger a targeted package revision, not a source/visual rerender or a new upstream Gate. |

Execution path: **`FAST_PATH` with `TARGETED_GATE6_REVISION`**. Escalation trigger: the exact V1.0 reports above found five Gate 6 package-contract defects and three internal-link coverage defects. No approved source conflict or visual defect was found, so valid upstream quality reviews are inherited and the full visual is not rerendered or rereviewed. This revision still requires independent targeted recheck.

## 2. Page identity, authoritative sources and public/internal boundary

`APP-000` / Applications / Navigation hub / Global EN / P1 / `/applications/` / `site_scope=tio2-my` / `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET`.

| Ref | Authority and responsibility |
|---|---|
| M | `pages/applications/APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.3.md`, SHA-256 `6EC2FD5D1D627A8BD230D8683E4DDA0BD5D51D8EF563B45E69209E6D3467D89C`: sole Gate 6 intake Manifest. |
| REG/KW | `docs/architecture/PAGE_REGISTRY_V0.2.md` SHA-256 `3DA1956FE15AD5E15E078BC43FE291804C151BB45528C778F7177C40825A9552`; `research/keyword/11_page_keyword_master.csv` SHA-256 `EF9B37FF9BA70AF8BC1AA65740F99A2CF3B7DF4B08484D72ADD801A5697270C7`. |
| PB/BR | `docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md` SHA-256 `8C647681B15E9C3EE9E73D322A599A7B7E0F9EABA65960A96FA7D323413C153C`; `docs/page-briefs/APP-000_APPLICATIONS_BRIEF_V0.1.md` SHA-256 `F3735EF738B2CDC63F9B08D44C31CA80872CA18118F1B01701B892DB7B667C88`. |
| B | `pages/applications/04_planning/APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md`, SHA-256 `C57DB3F8E1AFB9B4D33A1498843CF8228B7FADDECCDAA79C7E6A6D76C1A234B1`: sole editable Buyer Copy and approved metadata wording authority. |
| C/A | `pages/applications/04_planning/APP-000_GATE2_CONTENT_CONTRACT_V1.0.md`, SHA-256 `6F7EF60C6BC6CBE5398F9F1CF4E2E713FCFB48CE65BC28FE49D699CA61B26F6E`: ordered map, actions, conditions, facts and owner boundaries. |
| G3 | Approved source SHA-256 `EC5136BDB812751E341F16F06D86DD14E1EAE790062FFDF9E068373BB653FCB5`; independent review `478E50372DF464DD8ECF13A369813A640512594A7F432D5351401C825B1EE5B8`; closure `3716AB525B1C3E8B5D9DDECEF4737E641FCFAEAA6E20B0EC614EC6A2E8AB14BB`; handoff `E31E622B6BE53240E1976AB6A5E198F6FA5127FC2A96078A4702CFB4D981368E`. |
| G4/G5 | Exact accepted visual combination in §1; every code/prototype asset is classified in §3. |
| REL | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`, SHA-256 `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`; unified audit SHA-256 `338F2D4F2083E2E56B00637A4771982D08BFA15C1283022D6A28D506F0DEDEDB`. |
| CHROME | `shared-chrome-data.json` SHA-256 `7DB02EBB526A74BB757B6C2592CED519921E951C1BE082D23377C5CCA74FAFB4`; `shared-consent-data.json` SHA-256 `2FB48B3CBFE42A27416471DB46C982803D4FCCAB517B49429320E32BA0C2596C`; shared manifest `EACB20113A0BAD1C9022C5D618178EF6482AA8913FCD1197443DC7B596548EEB`; CTA addendum `1F6CB1F9913BD78AED3CAB30AF56CE1EEABB0C46CB354F09F05E2D00A3897E9A`; Logo manifest `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894`; Footer Legal `C1F0011408ED1D87CFF6D36C11F7E9812CC9A803431A3F7030C771FAF41BF633`; Consent baseline `BE03EF117B2F3F575AA59964D80C10B6B223FC5D1748A6BF7CEDF08205BAD659`. |
| RFQ/DOC | `pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md`, SHA-256 `B35B3A4969A9D0753FA63AEF987E6BD06AD473D5DF3EC473EC7FEE2A780A74EE`; `pages/documents/06_handoff/DOC-000_CURRENT_GATE7_BASELINE_MANIFEST_V0.2.md`, SHA-256 `58E0557D24875C95ACA777062E7CEC665DD4F5603FD7EA1E791340F485125B51`. APP-000 transports only approved source context and opens the Documents hub; it does not own receiver fields or document availability. |

Public Buyer Clean surfaces comprise browser-delivered HTML and accessible names/descriptions/states, visible and hidden accessibility text, metadata, social fields, canonical/robots/lang, JSON-LD and any public GEO/search projection. They must contain no Gate/Finding/approval/evidence/readiness/control/fallback wording, hidden suitability or recommendation, `source_page_id`, internal `page_id`, or `site_scope`. A browser-facing or otherwise public API/view-model response **must not expose** `page_id`, `site_scope`, `source_page_id`, Gate IDs or audit fields.

Internal non-public transport/data/audit surfaces may carry only what their owner requires: `source_page_id=APP-000` for RFQ attribution; scoped Page ID and `site_scope=tio2-my` inside private/server-side CMS/API lookup and identity traces; and non-public Gate 8/9 acceptance IDs, evidence paths and hashes. Those fields must be stripped before the public projection. Internal identity evidence may be redacted for secrets while still proving the binding. This boundary permits necessary implementation traceability without creating public claims or public query contracts.

## 3. Code and prototype identity

The classifications below apply to every code/HTML/script/style asset in the accepted 50-file freeze. No APP-000 code asset is classified as `APPROVED_CONTRACT` or `REFERENCE_IMPLEMENTATION`. B/C and shared owner documents are approved semantic contracts, but are not production code.

| Asset | SHA-256 | Identity and Gate 8 treatment |
|---|---|---|
| `pages/applications/04_planning/gate4-v1.0/build-visual.cjs` | `9818BC031B71508DF5690DE14A591CAABAB3F550B2A961304724D60A9EC5D1A3` | `PROTOTYPE_ONLY`; planning generator. |
| `pages/applications/04_planning/gate4-v1.0/visual.css` | `B208C16A5F906D18B4F56486C53A3804F5973992C08CB64FFDAE7A6EB1AECC65` | `PROTOTYPE_ONLY`; planning visual style. |
| `pages/applications/04_planning/gate4-v1.0/verify-visual.cjs` | `96996090AC7DEC1403E9BE1D4E5A8381A15FCC6C41F458E606C2C86837A7D6E9` | `PROTOTYPE_ONLY`; planning verification utility. |
| `pages/applications/04_planning/gate4-v1.0/verify-targeted.cjs` | `3A098360EB6ADE9386EE8381DF7D9ACA979525024389DE2763DC6C9768B43760` | `PROTOTYPE_ONLY`; planning verification utility. |
| `pages/applications/04_planning/gate4-v1.0/capture-direction.cjs` | `1BC21DD7BBEB9BE9BEFD7A511D4BF308AD4BCFE3FA695EC0F2BC9FAD502366F5` | `PROTOTYPE_ONLY`; planning capture utility. |
| `pages/applications/04_planning/gate4-v1.0/freeze-candidate.cjs` | `264AF55A97CB86DC2042FBF94F0E97559AA463FB00FB28FC7ADE682E13323E9A` | `PROTOTYPE_ONLY`; planning freeze utility. |
| `pages/applications/04_planning/gate4-v1.0/index.html` | `EA8B5CB0AD39226C9C392103379A09DB5AD7D7A96E725336DC55348EA05230E4` | `PROTOTYPE_ONLY`; full visual/conditional reference. |
| `pages/applications/04_planning/gate4-v1.0/mixed.html` | `D1B1AB356158C13345BF01BEF2FFEB5F6D77B8DB8B8C80ECF1BF716FC89F396B` | `PROTOTYPE_ONLY`; mixed-eligibility reference. |
| `pages/applications/04_planning/gate4-v1.0/constrained.html` | `590411E5F842F81588D4E4706E5F705193CA11E2A69B419920D7F87D8BBC04A7` | `PROTOTYPE_ONLY`; no-destination reference. |
| `pages/applications/04_planning/gate4-v1.0/grades-only.html` | `0456CFE556CFCB671D6319CBAF1062999E74F578185699C9A6D2DBF21E668924` | `PROTOTYPE_ONLY`; Grade-only reference. |
| `pages/applications/04_planning/gate4-v1.0/apps-only.html` | `2876E6B745A01AE7E3E59E8592A95D4115CB18DF95270CBAC0BD1E5CB80ABBA9` | `PROTOTYPE_ONLY`; Application-only reference. |
| `docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs` | `A4115396E52D4E7500972EFDCE7C07D183832969CAC8703DFF940E5575C3E085` | `PROTOTYPE_ONLY`; page-neutral planning renderer. |
| `docs/architecture/gate3-shared-consumer-v0.2/shared-chrome.css` | `E8F8B7D2BC2D31EA562CD46B93F0F9A789942F2A8405D3A7175092DF09EEAC7E` | `PROTOTYPE_ONLY`; page-neutral planning style. |
| `docs/architecture/gate3-shared-consumer-v0.2/shared-chrome-behavior.js` | `63C3CB0BAE379E7AC77D5CC6D2E60BC16654079E3E71F75F5FC5743034E85E56` | `PROTOTYPE_ONLY`; page-neutral planning behavior. |
| `docs/architecture/gate3-shared-consumer-v0.2/consumer-smoke-fixture.html` | `439819F56F666465B2F38AC2C61CC6703109F7BBB72AD9E88725371AAECD452A` | `PROTOTYPE_ONLY`; page-neutral planning fixture. |

Gate 8 may inspect these assets, but it must not treat their structure or assertions as production implementation, tests, CMS models, route evidence, security code or receiver integration. Production must consume the existing shared-owner implementation and must not create an APP-000 fork. The controlling exact inventory remains `pages/applications/04_planning/gate4-v1.0/freeze-record.json`, SHA-256 `BFCC957D0F425D4E864CD9B6DA76698C70B19A175E555328237C7197A9FC09BA`. Unlisted JSON, PNG, SVG, font, license and Markdown files in that freeze are evidence, data, media, dependency or contract sources rather than code fragments. Gate 8 must first inspect the actual D16 project and decide reuse/adaptation/new implementation without changing the observable requirements below.


## 4. WordPress semantic ownership, Next.js result and exact-copy boundary

WordPress owns one scoped APP-000 semantic identity: B's five ordered modules; six application collections and scopes; 30 ordered neutral Grade occurrences bound to Page IDs; child/support/RFQ owner references; approved metadata; and C's conditions. This package does not prescribe field count, storage shape or endpoint design.

Next.js must render semantic initial HTML from the same `tio2-my` record. Gate 8 chooses its implementation after inspecting D16. The page-owned exact-copy comparison begins at the visible breadcrumb `Home › Applications` and ends at M5's visible `Request a Quote` action. It covers B lines 9–136: breadcrumb plus M1–M5, including the exact conditional sentence variants in B's metadata appendix. It excludes B's authoring comments, sample shared header/footer projection, horizontal rules and metadata/JSON-LD appendix from page-body comparison. Approved metadata values are compared separately under §8. Shared opening and closing are compared separately to the current CHROME owners in §6; the historical `Contact` sample in B is not restored and no Terms link is allowed.

| Order | Required visible and semantic result |
|---:|---|
| Shared opening | Current owner Header/Menu/Logo/RFQ; Applications current; no visible `CURRENT`; one H1 after breadcrumb. |
| Breadcrumb | Home is a link to `HOME-001` `/`, EN, `tio2-my`; Applications is exact non-action current text. |
| M1 Hero | Exact B H1/body, `Explore Applications`, conditional body RFQ, `Choose an Application`, six same-page links; no selection/prefill. |
| M2 Application paths | Exact B heading, neutral sentence and condition-specific second sentence; Coatings, Plastics, Masterbatch, Printing Inks, Paper, Specialty Materials in order; all 30 §5 occurrences; five maximum child CTAs. |
| M3 Evaluation guide | Exact three steps: choose application, compare current technical information, validate in buyer's own system. |
| M4 Procurement paths | Products, Documents, Markets in order; whole-card eligibility; Documents does not pass Grade/document/availability/request context. |
| M5 Final RFQ | Exact B heading/body/action; receiver-owned unselected options; Hero RFQ and M5 removed atomically when body RFQ is ineligible. |
| Shared closing | Current Footer/Legal/Consent owner projection in §6, with no Contact or Terms restoration. |

No Process Classification directory, complete product directory, FAQ, embedded form, sample action, download, performance table, company-origin claim, ranking, comparison, suitability promise or hidden selection is added.

## 5. Exact 30-edge Grade occurrence inventory

Each occurrence below is independently reportable. `Position` is display order, never rank. The eligible/ineligible result must be recorded for **all 30 source edges before** endpoint HTTP/canonical checks may deduplicate the fourteen unique destinations. Repetition of a Grade Page ID never permits an occurrence to be skipped.

| Edge ID | Application key / label / position | Grade Page ID | Exact accessible label | Registered href / canonical | Required per-occurrence mapping |
|---|---|---|---|---|---|
| `APP000-EDGE-COAT-01` | `COAT` / Coatings / 1 | `GRADE-M350` | `M-350` | `/products/m-350/`; canonical `https://tio2malaysia.com/products/m-350/` | Eligible: one semantic link whose accessible name is exactly `M-350` and whose internal target trace resolves `GRADE-M350` / EN / `tio2-my`. Ineligible: exact `M-350` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-COAT-02` | `COAT` / Coatings / 2 | `GRADE-M510` | `M-510` | `/products/m-510/`; canonical `https://tio2malaysia.com/products/m-510/` | Eligible: one semantic link whose accessible name is exactly `M-510` and whose internal target trace resolves `GRADE-M510` / EN / `tio2-my`. Ineligible: exact `M-510` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-COAT-03` | `COAT` / Coatings / 3 | `GRADE-M896` | `M-896` | `/products/m-896/`; canonical `https://tio2malaysia.com/products/m-896/` | Eligible: one semantic link whose accessible name is exactly `M-896` and whose internal target trace resolves `GRADE-M896` / EN / `tio2-my`. Ineligible: exact `M-896` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-COAT-04` | `COAT` / Coatings / 4 | `GRADE-M996` | `M-996` | `/products/m-996/`; canonical `https://tio2malaysia.com/products/m-996/` | Eligible: one semantic link whose accessible name is exactly `M-996` and whose internal target trace resolves `GRADE-M996` / EN / `tio2-my`. Ineligible: exact `M-996` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-COAT-05` | `COAT` / Coatings / 5 | `GRADE-M2196` | `M-2196` | `/products/m-2196/`; canonical `https://tio2malaysia.com/products/m-2196/` | Eligible: one semantic link whose accessible name is exactly `M-2196` and whose internal target trace resolves `GRADE-M2196` / EN / `tio2-my`. Ineligible: exact `M-2196` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-COAT-06` | `COAT` / Coatings / 6 | `GRADE-M895` | `M-895` | `/products/m-895/`; canonical `https://tio2malaysia.com/products/m-895/` | Eligible: one semantic link whose accessible name is exactly `M-895` and whose internal target trace resolves `GRADE-M895` / EN / `tio2-my`. Ineligible: exact `M-895` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-COAT-07` | `COAT` / Coatings / 7 | `GRADE-M52` | `M-52` | `/products/m-52/`; canonical `https://tio2malaysia.com/products/m-52/` | Eligible: one semantic link whose accessible name is exactly `M-52` and whose internal target trace resolves `GRADE-M52` / EN / `tio2-my`. Ineligible: exact `M-52` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-COAT-08` | `COAT` / Coatings / 8 | `GRADE-M2377` | `M-2377` | `/products/m-2377/`; canonical `https://tio2malaysia.com/products/m-2377/` | Eligible: one semantic link whose accessible name is exactly `M-2377` and whose internal target trace resolves `GRADE-M2377` / EN / `tio2-my`. Ineligible: exact `M-2377` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PLAS-01` | `PLAS` / Plastics / 1 | `GRADE-M350` | `M-350` | `/products/m-350/`; canonical `https://tio2malaysia.com/products/m-350/` | Eligible: one semantic link whose accessible name is exactly `M-350` and whose internal target trace resolves `GRADE-M350` / EN / `tio2-my`. Ineligible: exact `M-350` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PLAS-02` | `PLAS` / Plastics / 2 | `GRADE-M510` | `M-510` | `/products/m-510/`; canonical `https://tio2malaysia.com/products/m-510/` | Eligible: one semantic link whose accessible name is exactly `M-510` and whose internal target trace resolves `GRADE-M510` / EN / `tio2-my`. Ineligible: exact `M-510` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PLAS-03` | `PLAS` / Plastics / 3 | `GRADE-M200` | `M-200` | `/products/m-200/`; canonical `https://tio2malaysia.com/products/m-200/` | Eligible: one semantic link whose accessible name is exactly `M-200` and whose internal target trace resolves `GRADE-M200` / EN / `tio2-my`. Ineligible: exact `M-200` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PLAS-04` | `PLAS` / Plastics / 4 | `GRADE-M108` | `M-108` | `/products/m-108/`; canonical `https://tio2malaysia.com/products/m-108/` | Eligible: one semantic link whose accessible name is exactly `M-108` and whose internal target trace resolves `GRADE-M108` / EN / `tio2-my`. Ineligible: exact `M-108` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PLAS-05` | `PLAS` / Plastics / 5 | `GRADE-M210` | `M-210` | `/products/m-210/`; canonical `https://tio2malaysia.com/products/m-210/` | Eligible: one semantic link whose accessible name is exactly `M-210` and whose internal target trace resolves `GRADE-M210` / EN / `tio2-my`. Ineligible: exact `M-210` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PLAS-06` | `PLAS` / Plastics / 6 | `GRADE-M340` | `M-340` | `/products/m-340/`; canonical `https://tio2malaysia.com/products/m-340/` | Eligible: one semantic link whose accessible name is exactly `M-340` and whose internal target trace resolves `GRADE-M340` / EN / `tio2-my`. Ineligible: exact `M-340` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PLAS-07` | `PLAS` / Plastics / 7 | `GRADE-M886` | `M-886` | `/products/m-886/`; canonical `https://tio2malaysia.com/products/m-886/` | Eligible: one semantic link whose accessible name is exactly `M-886` and whose internal target trace resolves `GRADE-M886` / EN / `tio2-my`. Ineligible: exact `M-886` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PLAS-08` | `PLAS` / Plastics / 8 | `GRADE-M2377` | `M-2377` | `/products/m-2377/`; canonical `https://tio2malaysia.com/products/m-2377/` | Eligible: one semantic link whose accessible name is exactly `M-2377` and whose internal target trace resolves `GRADE-M2377` / EN / `tio2-my`. Ineligible: exact `M-2377` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-MB-01` | `MB` / Masterbatch / 1 | `GRADE-M510` | `M-510` | `/products/m-510/`; canonical `https://tio2malaysia.com/products/m-510/` | Eligible: one semantic link whose accessible name is exactly `M-510` and whose internal target trace resolves `GRADE-M510` / EN / `tio2-my`. Ineligible: exact `M-510` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-MB-02` | `MB` / Masterbatch / 2 | `GRADE-M200` | `M-200` | `/products/m-200/`; canonical `https://tio2malaysia.com/products/m-200/` | Eligible: one semantic link whose accessible name is exactly `M-200` and whose internal target trace resolves `GRADE-M200` / EN / `tio2-my`. Ineligible: exact `M-200` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-MB-03` | `MB` / Masterbatch / 3 | `GRADE-M108` | `M-108` | `/products/m-108/`; canonical `https://tio2malaysia.com/products/m-108/` | Eligible: one semantic link whose accessible name is exactly `M-108` and whose internal target trace resolves `GRADE-M108` / EN / `tio2-my`. Ineligible: exact `M-108` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-MB-04` | `MB` / Masterbatch / 4 | `GRADE-M210` | `M-210` | `/products/m-210/`; canonical `https://tio2malaysia.com/products/m-210/` | Eligible: one semantic link whose accessible name is exactly `M-210` and whose internal target trace resolves `GRADE-M210` / EN / `tio2-my`. Ineligible: exact `M-210` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-MB-05` | `MB` / Masterbatch / 5 | `GRADE-M340` | `M-340` | `/products/m-340/`; canonical `https://tio2malaysia.com/products/m-340/` | Eligible: one semantic link whose accessible name is exactly `M-340` and whose internal target trace resolves `GRADE-M340` / EN / `tio2-my`. Ineligible: exact `M-340` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-MB-06` | `MB` / Masterbatch / 6 | `GRADE-M886` | `M-886` | `/products/m-886/`; canonical `https://tio2malaysia.com/products/m-886/` | Eligible: one semantic link whose accessible name is exactly `M-886` and whose internal target trace resolves `GRADE-M886` / EN / `tio2-my`. Ineligible: exact `M-886` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-MB-07` | `MB` / Masterbatch / 7 | `GRADE-M2377` | `M-2377` | `/products/m-2377/`; canonical `https://tio2malaysia.com/products/m-2377/` | Eligible: one semantic link whose accessible name is exactly `M-2377` and whose internal target trace resolves `GRADE-M2377` / EN / `tio2-my`. Ineligible: exact `M-2377` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-INK-01` | `INK` / Printing Inks / 1 | `GRADE-M350` | `M-350` | `/products/m-350/`; canonical `https://tio2malaysia.com/products/m-350/` | Eligible: one semantic link whose accessible name is exactly `M-350` and whose internal target trace resolves `GRADE-M350` / EN / `tio2-my`. Ineligible: exact `M-350` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-INK-02` | `INK` / Printing Inks / 2 | `GRADE-M510` | `M-510` | `/products/m-510/`; canonical `https://tio2malaysia.com/products/m-510/` | Eligible: one semantic link whose accessible name is exactly `M-510` and whose internal target trace resolves `GRADE-M510` / EN / `tio2-my`. Ineligible: exact `M-510` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-INK-03` | `INK` / Printing Inks / 3 | `GRADE-M52` | `M-52` | `/products/m-52/`; canonical `https://tio2malaysia.com/products/m-52/` | Eligible: one semantic link whose accessible name is exactly `M-52` and whose internal target trace resolves `GRADE-M52` / EN / `tio2-my`. Ineligible: exact `M-52` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-INK-04` | `INK` / Printing Inks / 4 | `GRADE-M2377` | `M-2377` | `/products/m-2377/`; canonical `https://tio2malaysia.com/products/m-2377/` | Eligible: one semantic link whose accessible name is exactly `M-2377` and whose internal target trace resolves `GRADE-M2377` / EN / `tio2-my`. Ineligible: exact `M-2377` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PAPER-01` | `PAPER` / Paper / 1 | `GRADE-M350` | `M-350` | `/products/m-350/`; canonical `https://tio2malaysia.com/products/m-350/` | Eligible: one semantic link whose accessible name is exactly `M-350` and whose internal target trace resolves `GRADE-M350` / EN / `tio2-my`. Ineligible: exact `M-350` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-PAPER-02` | `PAPER` / Paper / 2 | `GRADE-M2377` | `M-2377` | `/products/m-2377/`; canonical `https://tio2malaysia.com/products/m-2377/` | Eligible: one semantic link whose accessible name is exactly `M-2377` and whose internal target trace resolves `GRADE-M2377` / EN / `tio2-my`. Ineligible: exact `M-2377` plain, nonfocusable text with no href, role, action styling or tooltip. |
| `APP000-EDGE-SPEC-01` | `SPEC` / Specialty Materials / 1 | `GRADE-CR901` | `CR-901` | `/products/cr-901/`; canonical `https://tio2malaysia.com/products/cr-901/` | Eligible: one semantic link whose accessible name is exactly `CR-901` and whose internal target trace resolves `GRADE-CR901` / EN / `tio2-my`. Ineligible: exact `CR-901` plain, nonfocusable text with no href, role, action styling or tooltip. |

Counts are exactly 8/8/7/4/2/1 = 30. M-2377 occurs five times; CR-901 is the sole Specialty relation. Rubber creates no collection/route/Schema item. M-996/M-2196 differentiation, rank, equivalence, substitution and selection rationale remain prohibited. `NO_PUBLIC_MAPPING` is not a negative suitability statement.

Gate 8 evidence must export a machine-readable 30-edge inventory containing `edge_id`, application key, position, exact accessible label, link-versus-plain state, effective href or explicit null, Grade Page ID, resolved target Page ID when linked, canonical, language and scope. Internal Page IDs/scope stay in non-public evidence and are not exposed in browser-facing API output.

## 6. Complete action and shared-owner target inventory

### 6.1 Page-owned actions and eligibility

| Surface | Required observable behavior |
|---|---|
| Same-page anchors | `#application-selector` and the six exact application fragments work by pointer, keyboard and direct fragment; target remains visible below the fixed Header; no selection/prefill/history context is created. |
| Child Application CTAs | APP-COAT/PLAS/MB/INK/PAPER resolve through actual same-scope effective routes. Each ineligible CTA and its ItemList entry disappear atomically; heading/scope/Grade set remain. Specialty has no child CTA. |
| Grade occurrence | Apply §5 independently to each of 30 occurrences. Missing/corrupt required tuple data is an integrity failure, never a valid constrained state. |
| Products/Documents/Markets | `PRODUCT-000 /products/`, `DOC-000 /documents/`, `MARKET-000 /markets/`; remove an ineligible whole card and M4 at zero; no Contact fallback. |
| Body RFQs | Both use clean `CONV-RFQ /request-a-quote/`; internal transport carries only `source_page_id=APP-000`; no Grade/application/quantity/destination/document prefill; APP-000 never submits. |
| RFQ receiver/result | Grade and Application are visible/editable/unselected; owner labels `Not sure / Need help`, `Other / Not sure`; positive acknowledgement is required for authorized receiver testing. HTTP 2xx/interception is insufficient. No real external submission is authorized. |
| Missing body RFQ | Remove Hero body RFQ and all M5 atomically; shared fixed RFQ remains owner-controlled. |

M2's neutral first sentence always remains. Its second sentence is exactly B's full, Grade-only, Application-only or absent variant. Omitted actions lose words, icon, wrapper and focus target together. A valid same-scope last-known-good result may be used only if the existing implementation proves compatible identity; otherwise return controlled unavailable behavior with no foreign/default fallback.

### 6.2 Breadcrumb and shared-owner per-instance targets

This matrix is semantic and implementation-neutral. Gate 9 records every instance visible in each applicable desktop, compact/mobile menu, footer and Cookie dialog state. All navigational targets are EN / `tio2-my` except Privacy BM, which is BM / `tio2-my`. Internal target Page-ID/scope proof stays non-public.

| Semantic owner target | Required instances/states | Exact target and behavior |
|---|---|---|
| Logo/Home | Desktop Header logo and compact/mobile Header logo | `HOME-001` `/`; accessible home identity; same-scope target. |
| Home | Desktop nav, open compact/mobile menu, Footer Explore, visible breadcrumb | `HOME-001` `/`; breadcrumb label exactly `Home`. |
| Markets | Desktop nav, open compact/mobile menu, Footer Explore | `MARKET-000` `/markets/`. |
| Products | Desktop nav, open compact/mobile menu, Footer Explore, M4 card | `PRODUCT-000` `/products/`. |
| Applications | Desktop nav, open compact/mobile menu, Footer Explore | `APP-000` `/applications/`; current semantics on active nav; visible breadcrumb `Applications` is plain current text with no href/action. |
| Documents | Desktop nav, open compact/mobile menu, Footer Information, M4 card | `DOC-000` `/documents/`. |
| Resources | Desktop nav, open compact/mobile menu, Footer Information | `RES-000` `/resources/`. |
| About | Desktop nav, open compact/mobile menu, Footer Information | `ABOUT-001` `/about/`. |
| Fixed/body/footer RFQ | Desktop fixed control, compact/mobile Header/menu control, Footer Procurement, M1 and M5 body actions | `CONV-RFQ` `/request-a-quote/`; fixed shared instance remains owner-controlled; body instances follow §6.1. |
| Privacy EN | Footer legal | `LEGAL-PRIV-EN` `/privacy-policy/`, EN. |
| Privacy BM | Footer legal | `LEGAL-PRIV-MS` `/ms/privacy-policy/`, BM. |
| Cookie Policy | Footer legal | `LEGAL-COOKIE-EN` `/cookie-policy/`, EN. |
| Cookie Settings | Footer legal utility | Semantic `button`, no href/navigation; accessible name `Cookie Settings`; opens the owner dialog and moves/returns focus per Consent owner. |
| Dialog Cookie Policy | Open Cookie settings dialog | Link `Read Cookie Policy` → `LEGAL-COOKIE-EN` `/cookie-policy/`; dialog Close and focus behavior remain owner-controlled. |

`Contact` and `Terms` must be absent from Header, menu, Footer, breadcrumb and dialog. Their absence is checked in all responsive/menu/dialog states. A label/order match without correct Page ID, path, language, scope and resolution does not pass.

## 7. Responsive, interaction and accessibility result

The accepted Gate 4 evidence is the visual comparator; it is not runtime proof. Gate 8 and Gate 9 cover actual full, mixed, constrained, grades-only and applications-only states at 1440/768/390; mobile disclosure closed/open; compact menu; Cookie dialog; keyboard focus; reduced motion; no-script; loading/error/long-label states. Current Chromium plus one applicable non-Chromium, native browser 200% zoom, an actual touch device and a named screen-reader/AT are required. Core text and eligible links remain usable without client JavaScript. Visible and accessibility surfaces remain Buyer Clean under §2.

## 8. SEO, GEO, social and Schema

| Surface | Exact approved result |
|---|---|
| H1 | `Explore Titanium Dioxide by Application` |
| Title / OG / social title | `Applications | TiO2 Malaysia` |
| Meta / OG / social description | `Explore titanium dioxide application paths for coatings, plastics, masterbatch, printing inks, paper and specialty materials.` |
| Canonical / `og:url` | `https://tio2malaysia.com/applications/`; query/fragment/source-free |
| Language / OG type | `en`; no hreflang; exact OG type `website` |
| Social image | None required; no placeholder, broken, generic or implied-image card. |
| Robots/sitemap | Preview/staging non-indexable. Production index/follow and sitemap remain `DECISION_REQUIRED` pending Gate 10. |

JSON-LD uses B's exact `CollectionPage` and two-item `BreadcrumbList`. A conditional `ItemList` exists only for 1–5 eligible visible child Application CTAs, in display order, with matching names/canonicals and `mainEntity`; Specialty is never a sixth item. At zero, omit both ItemList and `mainEntity`.

No Product, Offer, AggregateRating, Review, FAQPage, QAPage, hidden Grade relation, suitability, ranking, availability or recommendation may appear in public HTML/a11y, metadata, social, Schema or GEO. §2's public/private boundary applies.

## 9. Seven-plane `site_scope=tio2-my` isolation

Scope is applied before lookup, fallback, route, caching or public projection. The contract is observable and does not require any cache key/tag, field, library or internal shape.

| Plane | Required observable boundary and negative test |
|---|---|
| Query/data | APP-000, modules, 30 edges and conditional targets originate from the intended same-scope identity; wrong/missing/foreign/duplicate inputs fail controlled, never partial/default/foreign. |
| Route | `/applications/`, fragments and outbound targets resolve to intended Malaysia identities without same-slug foreign redirect/fallback. |
| Cache | Same-scope identity is preserved on warm/hit; a foreign-scope warm cannot change Malaysia output; same-scope content change becomes observable after the system's supported invalidation/revalidation path; forced refresh failure preserves a valid compatible result or returns controlled unavailable; recovery restores the intended current result without stale/foreign content. Evidence describes actual behavior, not invented internals. |
| Menu | Current Malaysia shared owner supplies Header/Menu/Footer/legal/RFQ and Applications current state; no foreign/private fork. |
| SEO | Public title/description/canonical/lang/social/robots/Schema derive from the same observable page result. |
| Form | Internal RFQ source attribution and receiver configuration remain Malaysia scoped; no foreign receiver/options/success mapping or inferred prefill. |
| Media | Current Malaysia logo/font/shared assets; no other-site media fallback; page remains complete without optional page media. |

## 10. Stable dependencies and blocking layers

| ID | Requirement / owner | Closure evidence / failure disposition | Blocking layer |
|---|---|---|---|
| `APP000-G6-D01` | APP-000 clean route/canonical; APP-000/platform owner. | Actual runtime, non-public Page-ID/scope trace and clean canonical; wrong/untraceable route fails. | `PAGE_GATE9` |
| `APP000-G6-D02` | Indexing/sitemap/publication; Controller/User. | Separate Gate 10 decision; Gate 9 PASS does not authorize release. | `RELEASE` |
| `APP000-G6-D03` | Five child Application endpoints/ItemList; child owners + Gate 8. | Same-scope eligibility evidence or exact atomic omission; unresolved eligibility stays integration-open. | `INTEGRATION` |
| `APP000-G6-D04` | Fourteen Grade endpoints across thirty §5 source edges; Grade owners + Gate 8. | All 30 occurrence records first, then optionally deduplicated endpoint response checks; otherwise exact plain labels. | `INTEGRATION` |
| `APP000-G6-D05` | Products/Documents/Markets; respective owners + Gate 8. | Target identity/response or exact whole-card omission. | `INTEGRATION` |
| `APP000-G6-D06` | RFQ source-only transport and receiver; CONV-RFQ owner + Gate 8. | Clean destination, private attribution only, neutral receiver state and authorized positive/failure evidence. | `INTEGRATION` |
| `APP000-G6-D07` | Breadcrumb plus Header/Footer/Menu/Logo/Legal/Consent; shared owners + Gate 8. | Every §6.2 instance/state resolves correct target/function; Contact/Terms absent; no fork. | `INTEGRATION` |
| `APP000-G6-D08` | WordPress→private CMS/API→Next.js/public projection; APP-000/platform owner. | Stored identity/edges, private trace, stripped public projection, SSR DOM, conditions and error/rollback fixtures; no prescribed shape. | `PAGE_GATE9` |
| `APP000-G6-D09` | Browser/zoom/touch/AT evidence; Gate 9/accessibility owner. | All §7 environments and states; missing evidence leaves page acceptance open. | `PAGE_GATE9` |
| `APP000-G6-D10` | Seven-plane isolation; platform/page/receiver/shared owners. | Positive and wrong/missing/foreign/failure/recovery evidence; any leak/fallback fails. | `INTEGRATION` |
| `APP000-G6-D11` | Existing `G9-T4A5-F02`; APP-000 route owner plus nine consumer owners: `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR`, `APP-COAT`, `APP-PLAS`, `APP-MB`, `APP-INK`, `APP-PAPER`. | Independent nine-page AC `APP000-G9-16` only. It tests the shared/body `/applications/` instances against the candidate; it is not conditioned on APP-000 outbound eligibility or Process regression and grants no consumer edits. | `INTEGRATION` |
| `APP000-G6-D12` | Gate 8 evidence identity/runtime hold/Gate 9 return; Gate 8/Gate 9 owners. | Schema-valid Manifest/receipt/evidence, commits/Build/runtime identity, held candidate and four layers. | `RECHECK_SCOPE` |
| `APP000-G6-D13` | Adjacent Process consumers, separate from D11: `PRODUCT-PROC-CL` `/products/chloride-process-titanium-dioxide/`; `PRODUCT-PROC-SU` `/products/sulfate-process-titanium-dioxide/`; each page retains its owner. | Independent Process AC `APP000-G9-17`. CL maps only the `/applications/` route subcondition of `CL-G9-F02`/`CL-G9-17`; receiver evidence remains separately open, so APP-000 never closes the combined Finding. SU maps the route subcondition of `G9-FIVE-F01`/`SU-G9-09`/`SU-DEP-01`. No Process-page edit is authorized. | `INTEGRATION` |

Nine-page F02 closure is reported solely under `APP000-G9-16`. APP-000 page/outbound conditions may pass or fail independently; Process regression is solely `APP000-G9-17`. APP-000 supplies the missing shared `/applications/` target but does not approve or modify any consumer, and cannot close any receiver or combined Process Finding.

## 11. Stable Gate 9 acceptance conditions

| Gate 9 ID | Observable condition and minimum evidence | Failure / owner |
|---|---|---|
| `APP000-G9-01` | `/applications/` returns intended EN APP-000 from `tio2-my`; public output is clean and non-public Page-ID/scope trace binds the runtime. | Wrong/untraceable identity fails; page/platform owner. |
| `APP000-G9-02` | Exact page-owned body from visible breadcrumb through M5 matches B lines 9–136 and approved conditional variants; B comments/shared samples/metadata appendix are excluded. Approved metadata matches §8 separately. Shared opening/closing matches current owners separately, with no Contact/Terms. | Missing/duplicate/rewritten/internal copy or wrong boundary fails; content/shared owners. |
| `APP000-G9-03` | Exactly 30 §5 edge records and 8/8/7/4/2/1 rendered occurrences. Each records key, position, label, link/plain, href/null, Grade Page ID, resolved target Page ID if linked, canonical, EN and `tio2-my`; endpoint checks deduplicate only after this inventory. | Any skipped/reconstructed/mislinked/reordered edge fails; content/data/route owner. |
| `APP000-G9-04` | Full, applications-only, grades-only, mixed and no-destination fixtures implement exact sentence/link/plain/CTA/card/M4/M5/ItemList conditions without empty shells. | Partial omission/dead control/wrong sentence/visible-machine mismatch fails. |
| `APP000-G9-05` | Seven same-page paths work pointer/keyboard/direct; 390 disclosures expose all 30 in order/state; no-script retains core content/eligible links; no selection. | Obscured/JS-only/inaccessible/silent selection fails. |
| `APP000-G9-06` | Five child, thirty Grade source edges, three support and two body RFQ instances are resolved/omitted by exact owner identity and same-scope eligibility. | Dead/wrong/provisional-as-proven/cross-scope/inferred target fails; outbound owners/platform. |
| `APP000-G9-07` | Both clean body RFQ links deliver private `APP-000` attribution only; public URL/API/head/Schema stay clean; receiver Grade/Application remain editable/unselected with no browsing prefill. | Public ID leak, missing/wrong attribution or inferred prefill fails; page/RFQ owner. |
| `APP000-G9-08` | Every §6.2 breadcrumb/shared instance in desktop, compact/mobile menu, Footer and Cookie dialog has correct accessible name, link/button semantics, Page ID/path/language/scope/resolution; Applications current; Cookie Settings is a button; Contact/Terms absent. | Any wrong/missing/duplicate/forked shared target/control fails; shared/page owner. |
| `APP000-G9-09` | Actual full/state pages at 1440/768/390 materially match accepted Gate 4 without clipping/overflow/overlap. | Material visual/responsive/state mismatch fails. |
| `APP000-G9-10` | Chromium + non-Chromium, native 200%, physical touch and named AT cover §7 interactions, focus/reading order and reduced motion. | Missing environment/operation leaves open. |
| `APP000-G9-11` | Exact §8 metadata/social/canonical/lang and environment robots result; no placeholder; query/fragment/source states retain clean identity; no unauthorized indexing. | Exact-value/dirty URL/premature indexing mismatch fails. |
| `APP000-G9-12` | Exact CollectionPage/BreadcrumbList and conditional 1–5 child ItemList parity; zero removes ItemList/mainEntity. | Wrong cardinality/name/target/visible parity fails. |
| `APP000-G9-13` | Public HTML/a11y/metadata/social/Schema/GEO and browser-facing APIs contain no governance/control/hidden claim/internal IDs; private RFQ/CMS/audit fields are limited and stripped under §2. | Public leak/hidden claim or missing required private trace fails; content/data owners. |
| `APP000-G9-14` | Correct data renders; invalid inputs fail controlled; supported same-scope warm/invalidation/refresh-failure/recovery preserve intended observable identity without requiring an internal cache model. | Partial/default/foreign content, stale mix, invalid refresh poisoning or unproven recovery fails. |
| `APP000-G9-15` | Negative tests cover query, route, cache, menu, SEO, form and media before/after foreign warming and failure; no cross-scope output/receiver. | Any fallback/leak blocks page/integration. |
| `APP000-G9-16` | **Independent nine-page F02 AC:** in the same candidate, all approved shared/body `/applications/` instances on `RES-TRADE-EU/UK/IN/BR` and `APP-COAT/PLAS/MB/INK/PAPER` reach APP-000 Page ID, EN, `tio2-my`, clean canonical; keyboard activation and Back/Return pass; each consumer preserves accepted body/head/current-nav. This AC does not depend on APP-000 outbound links or either Process page. | Any remaining 404/wrong identity/return/regression keeps only `G9-T4A5-F02`/integration open; no consumer edit authority. |
| `APP000-G9-17` | **Independent Process regression AC:** `PRODUCT-PROC-CL` at `/products/chloride-process-titanium-dioxide/` and `PRODUCT-PROC-SU` at `/products/sulfate-process-titanium-dioxide/` each activate the approved `Explore Applications` action by pointer/keyboard to this APP-000 Page ID/EN/`tio2-my`/clean canonical and pass Back/Return while preserving accepted body/head/current-nav. CL result satisfies only the route subcondition of `CL-G9-F02`/`CL-G9-17`; its receiver subcondition remains under its owner. SU maps only the route subcondition of `G9-FIVE-F01`/`SU-G9-09`/`SU-DEP-01`. | A Process regression stays separately open with its owner. APP-000 cannot close the whole CL combined Finding or modify either page. |

## 12. Gate 8 evidence Manifest and runtime hold

Every initial or repair return includes repository-root-relative `gate8_evidence_manifest.json` conforming exactly to `docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json`, SHA-256 `CBD36D338412A5D311AE062A93982D9A5799E0CF3D459BCB72D41E4A155247AD`, with no additional properties. Required values:

- `schema_version=gate8-evidence-manifest-v1.0`, `handoff_id=APP-000-G6-HANDOFF-02`, actual task ID, `site_scope=tio2-my`, receipt path;
- one `pages` entry: `page_id=APP-000`, `runtime_path=/applications/`, `acceptance_condition_ids` containing `APP000-G9-01` through `APP000-G9-17` exactly once;
- actual repository/branch/baseline/implementation/evidence commits and clean timestamp; Build directory/ID tied to implementation commit;
- runtime URL, scope, environment/start time, APP-000-specific path checks and `hold_until=GATE9_PASS_OR_RETURN_NOTICE`;
- committed evidence files with SHA, allowed evidence type, proving IDs, command and environment; this includes the 30-edge inventory, shared-instance map and committed rollback record;
- receipt `EVIDENCE: <repo-relative-path>` lines and `receipt_evidence_references` equal the exact evidence path set needed for review, including rollback evidence;
- all still-open `APP000-G6-D01` through `APP000-G6-D13` in `known_open_items`, with actual owner, schema-enum blocking layer, closure evidence and timing.

The committed rollback record is represented as a normal `evidence[]` object (`evidence_type=IDENTITY` or `TEST_RESULT`) and referenced by both receipt `EVIDENCE:` and `receipt_evidence_references`. The record itself states prior target commit/evidence HEAD or other exact repository identity, prior Build ID/directory, content/config identity, rollback command/procedure result and cache-clear plus restored-runtime verification, and `proves` at least `APP000-G9-14` and `APP000-G9-15`. No `rollback_target` or other unsupported top-level Manifest property is allowed.

Gate 8 keeps the exact candidate accessible until Gate 9 sends pass, repair return or explicit runtime-release notice. A repository/commit/Build/runtime replacement requires a new identity and difference statement. Schema validation and two-round preflight are mandatory; failures are classified `IMPLEMENTATION_FAILURE`, `ENVIRONMENT_FAILURE` or `EVIDENCE_INCOMPLETE`.

## 13. Four Gate 9 status layers, return and rollback

| Layer | APP-000 meaning |
|---|---|
| `RECHECK_SCOPE_STATUS` | Exact Gate 8 identity/evidence/runtime and all 17 IDs were available and checked. |
| `PAGE_GATE9_STATUS` | APP-000 itself passes `APP000-G9-01` through `APP000-G9-15`. |
| `INTEGRATION_STATUS` | Shared/destination integration plus independently reported nine-page `APP000-G9-16` and Process `APP000-G9-17` results. One may fail without changing the other's result. |
| `RELEASE_STATUS` | `NOT_AUTHORIZED` until separate Gate 10/publication/indexing authority, even if other layers pass. |

Failure returns stable acceptance/dependency IDs, expected/actual, evidence, owner and layer to the original Gate 8 task. Gate 9 remains read-only.

Rollback/negative requirements: content/data regression restores the last compatible same-scope identity or controlled-unavailable; deployment/config rollback restores the committed target described in §12 and verifies cache clear/recovery; destination failures use C's atomic branches; RFQ/shared failures return to their owners; cache tests cover warm/hit/supported invalidation/forced failure/recovery/cross-scope warm; route tests cover clean/query/fragment/missing/wrong-scope/unavailable. Rollback reruns APP-000 page tests, nine-page `APP000-G9-16` and Process `APP000-G9-17` separately and grants no consumer edits.

## 14. Source reverse map and author result

| Acceptance IDs | Controlling sources |
|---|---|
| `APP000-G9-01` | M; Registry/KW; C identity/scope; Gate 8→9 handoff/schema |
| `APP000-G9-02` | B lines 9–136 plus conditional appendix; C module order; current CHROME sources; approved G3/G4 |
| `APP000-G9-03…04` | B M2/conditional appendix; C §§2.1/2.3/4.1; REL; §5 edge inventory |
| `APP000-G9-05` | C interaction; accepted G3/G4 evidence |
| `APP000-G9-06…07` | C routes/RFQ; Registry; RFQ/DOC owners; §5 and §6.1 |
| `APP000-G9-08…10` | Current shared Chrome/CTA/Logo/Footer Legal/Legal/Consent sources; §6.2; accepted Gate 4 bundle/review |
| `APP000-G9-11…13` | B metadata/JSON-LD appendix; C SEO/GEO/Schema; §2 public/private boundary; shared entity owners |
| `APP000-G9-14…15` | C failure/scope rules; root scope rule; Gate workflow; Gate 6 contracts; schema-valid rollback evidence |
| `APP000-G9-16` | `docs/architecture/GATE9_TRADE4_APPLICATION5_TARGETED_RECHECK_V1.0.md` SHA-256 `F0B299A4A7A49C37FDF5579E256A6CB069A886839B16CA18C047D805040542D7`; nine consumer contracts; D11 |
| `APP000-G9-17` | `pages/products/chloride-process/07_qa/PRODUCT-PROC-CL_GATE9_READ_ONLY_ACCEPTANCE_V0.1.md` SHA-256 `E6FC412923B7F8B6E67D9B2DA25B5BEDDE647D2C931928D2A06952384B2E6F90`; `pages/products/sulfate-process/06_handoff/PRODUCT-PROC-SU_GATE6_HANDOFF_PACKAGE_V0.1.md` SHA-256 `343A220CB92D058A6C8914C4E30AF405D619076B14EC96EB06A2E59EF0B7F192`; current Process manifests/contracts; D13 |

Author self-check: `pages/applications/05_review/APP-000_GATE6_AUTHOR_SELF_CHECK_V1.1.json`. Machine checks establish identities, paths, exact counts, unique definitions/references and mappings; they do not establish independent semantic review or runtime PASS.

Author result: **`READY_FOR_TARGETED_RECHECK / NOT_APPROVED / NOT_SENT`**. This revision claims all eight V1.0 Required Findings are addressed in the package and awaits a different identity's targeted recheck.

## 15. Targeted review finding response ledger

| Required Finding | V1.1 response | Revision status |
|---|---|---|
| `APP-000-G6-IR-F01` | D11/G9-16 now independently bind only the nine named pages. APP-000 outbound eligibility and Process regression cannot gate or close F02. | `ADDRESSED_IN_V1.1 / PENDING_TARGETED_RECHECK` |
| `APP-000-G6-IR-F02` | §2 defines public Buyer Clean vs private transport/data/audit, explicitly prohibits Page ID/scope/source exposure in public APIs and permits stripped private trace. | `ADDRESSED_IN_V1.1 / PENDING_TARGETED_RECHECK` |
| `APP-000-G6-IR-F03` | §9 cache condition is observable and removes required cache key/tag/internal shape. | `ADDRESSED_IN_V1.1 / PENDING_TARGETED_RECHECK` |
| `APP-000-G6-IR-F04` | §4 and G9-02 fix exact body as breadcrumb→M5, exclude comments/appendix, compare metadata separately and bind shared opening/closing to current owners with no Contact/Terms. | `ADDRESSED_IN_V1.1 / PENDING_TARGETED_RECHECK` |
| `APP-000-G6-IR-F05` | §12 carries rollback as committed schema-valid `evidence[]` plus receipt references; no unsupported property. | `ADDRESSED_IN_V1.1 / PENDING_TARGETED_RECHECK` |
| `APP-000-IL-PLANNING-01-F01` | §5/G9-03 require all 30 source edges and per-occurrence label/href/link/plain/Page-ID/canonical/lang/scope before endpoint deduplication. | `ADDRESSED_IN_V1.1 / PENDING_TARGETED_RECHECK` |
| `APP-000-IL-PLANNING-01-F02` | §6.2/G9-08 bind breadcrumb and all shared targets per desktop/mobile/menu/footer/dialog instance; Cookie Settings is a button; Contact/Terms absent. | `ADDRESSED_IN_V1.1 / PENDING_TARGETED_RECHECK` |
| `APP-000-IL-PLANNING-01-F03` | D13/G9-17 name both Process pages/routes/mappings and constrain CL to route-only closure. | `ADDRESSED_IN_V1.1 / PENDING_TARGETED_RECHECK` |
