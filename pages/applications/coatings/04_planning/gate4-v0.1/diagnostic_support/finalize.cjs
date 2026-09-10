const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const sharp=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root='D:/23MySec',out=root+'/pages/applications/coatings/04_planning/gate4-v0.1',review=root+'/pages/applications/coatings/05_review';
const norm=p=>p.replace(/\\/g,'/');
const id=p=>{const b=fs.readFileSync(p);return{path:norm(p),bytes:b.length,sha256:crypto.createHash('sha256').update(b).digest('hex')}};
const write=(p,v)=>fs.writeFileSync(p,typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');
const formal=JSON.parse(fs.readFileSync(out+'/diagnostic_support/formal-runtime-checks.json','utf8'));
if(formal.errors.length||formal.summary.failed||formal.summary.checks!==720||formal.assets.length!==48)throw new Error('Formal result incomplete');
const source=id(out+'/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html'),css=id(out+'/visual-direction.css'),freeze=id(out+'/approval_core/source-freeze.json'),formalId=id(out+'/diagnostic_support/formal-runtime-checks.json'),exportId=id(out+'/approval_core/export-inventory.json');
const core=fs.readdirSync(out+'/approval_core').filter(x=>x.endsWith('.png')).sort().map(x=>id(out+'/approval_core/'+x));
const segments=fs.readdirSync(out+'/diagnostic_support/readable-segments').filter(x=>x.endsWith('.png')).sort().map(x=>id(out+'/diagnostic_support/readable-segments/'+x));
if(core.length!==14||segments.length!==34)throw new Error(`Unexpected formal images ${core.length}/${segments.length}`);

(async()=>{
 const comparisons=[];
 for(const f of segments){const name=path.basename(f.path),pre=out+'/diagnostic_support/preflight-r4/readable-segments/'+name,preId=id(pre);let pixel={};if(preId.sha256===f.sha256)pixel={byteExact:true,differentChannels:0,maxDelta:0};else{const a=await sharp(pre).raw().toBuffer({resolveWithObject:true}),b=await sharp(f.path).raw().toBuffer({resolveWithObject:true});let differentChannels=0,maxDelta=0;for(let i=0;i<a.data.length;i++){const d=Math.abs(a.data[i]-b.data[i]);if(d){differentChannels++;maxDelta=Math.max(maxDelta,d)}}pixel={byteExact:false,differentChannels,maxDelta,totalChannels:a.data.length};}comparisons.push({formal:f,preflight:preId,...pixel})}
 const exact=comparisons.filter(x=>x.byteExact).length;
 const formalReadback={workset_id:'COAT-G4-COMPLETE-V01',freeze_id:'COAT-G4-COMPLETE-V01-F01',status:'AUTHOR_FORMAL_VISUAL_READBACK_COMPLETE',at:new Date().toISOString(),source,opened:{approvalCore:core.map(x=>({...x,opened:true,mode:x.path.endsWith('-full.png')?'complete-page overview':'original scale state evidence',judgment:'No unresolved clipping, overflow, missing content, unintended state, unequal Grade emphasis or request-owner ambiguity observed.'})),readableSegments:{count:segments.length,byteExactToOpenedPreflight:exact,manualFormalOriginalScale:['diagnostic_support/readable-segments/768-readable-01.png'],comparison:comparisons}},judgment:'The complete 1440, 768 and 390 pages, Menu/Cookie states, keyboard focus, hover states, responsive endpoint/Grade transformations, all six sources and Footer were visually read. The eight Grades retain equal treatment and approved order. Documents, Sample and RFQ remain three separate peer owner paths.',limits:['Author self-check, not independent review.','One 768 first-segment rerender differed from preflight only by 3,994 colour channels at a maximum delta of 1/255; it was opened separately at original scale.','Local headless Chrome; real device and assistive-technology validation remain later-stage work.']};
 write(out+'/diagnostic_support/formal-visual-readback.json',formalReadback);

 const inventory={workset_id:'COAT-G4-COMPLETE-V01',freeze_id:'COAT-G4-COMPLETE-V01-F01',status:'COMPLETE',at:new Date().toISOString(),source,counts:{exported:48,approvalCorePng:14,readableSegmentPng:34,fullPages:3,menuStates:2,cookieStates:3,highRiskStates:6},formalRuntime:formalId,exportInventory:exportId,approvalCore:core,readableSegments:segments,diagnosticExclusions:['diagnostic_support/formal-r1-failure.json','diagnostic_support/formal-r2-failure.json','diagnostic_support/preflight-r3-runtime-checks.json','diagnostic_support/4a-runtime-checks.json'],note:'Excluded diagnostics preserve the audit trail for test-harness failures and one pre-freeze contrast finding; they are not formal approval evidence.'};
 write(out+'/approval_core/asset-inventory.json',inventory);
 const inventoryId=id(out+'/approval_core/asset-inventory.json'),readbackId=id(out+'/diagnostic_support/formal-visual-readback.json');

 const report=`# APP-COAT Gate 4 Visual and Execution Report V0.1

## Result

| Field | Value |
|---|---|
| Page / workset | \`APP-COAT\` / \`COAT-G4-COMPLETE-V01\` |
| Freeze | \`COAT-G4-COMPLETE-V01-F01\` |
| Status | \`COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW\` |
| Candidate | \`${source.path}\` |
| Candidate SHA-256 | \`${source.sha256}\` |
| Visual CSS SHA-256 | \`${css.sha256}\` |
| Frozen inputs | 52 inputs, 6 candidate dependencies, 5 bound execution records |
| Formal runtime | 720 / 720 checks passed; zero runtime errors; zero remote requests |
| Formal visual evidence | 48 images: 3 complete pages, 34 continuous readable segments, 2 Menu, 3 Cookie, 6 high-risk focus/hover states |

This execution completes Gate 4A and Gate 4B for the exact frozen candidate. It is an executor self-check and does not perform independent review or close Gate 4.

## Visual direction applied

The page keeps the approved ten-part decision path and uses a Deep Navy technical Hero, restrained grid and circular field, Teal actions and section markers, alternating neutral sections, readable technical prose rails, and high-contrast tables/cards. No qualified application media existed, so no product, plant or coating imagery was invented.

The five decision endpoints remain a full three-column table at 1440, two-column labelled records at 768 and single labelled records at 390. The eight Grades remain in approved order with equal row/card treatment, four Chloride-process labels and four Sulfate-process labels. No ranking, recommendation, equivalence or preferred Grade was introduced.

Documents, Sample and RFQ remain three separate request-owner paths. At 1440 they are equal peer cards; at 768 and 390 they retain the approved single-column sequence. Each action preserves its exact approved label, target and submission boundary.

## Identity and content checks

- The Gate 3 \`main\`, inherited shared style and behavior are exact after normalizing only approved local font/logo asset paths; the additional stylesheet is page-scoped.
- Approved B V0.2 visible text, link labels and targets match exactly at all three widths.
- One H1, ten sections, nine ordered H2 headings, five endpoint records, eight Grade records and six source records were verified.
- Shared Consumer V0.2, Applications current navigation, production logos, legal utility order and absence of Terms were verified.
- No horizontal overflow, ellipsis, line clamp, section gap/overlap, cross-scope brand string or buyer-visible internal status was found.

## Interaction and accessibility checks

Every visible Header, main, Footer and Cookie control was checked in normal, true hover and keyboard-focus states for at least 44×44 CSS px, text contrast, focus visibility and geometry stability. Menu was checked at 768 and 390 for open focus, modal-style isolation, two-way focus loop, Escape return, every selection path and breakpoint close. Cookie Settings was checked at all widths for entry focus, native modal isolation, two-way focus loop, Escape and Close return.

The 720 CSS-pixel reflow proxy passed without overflow or sub-44px controls. This is documented as a 200%-equivalent layout probe and is not native browser zoom.

## Closed pre-freeze issue and diagnostic history

\`COAT-G4-PF01\` was a real visual finding: the primary CTA hover state measured 4.3387:1 against the inherited soft teal surface. The hover surface was changed to approved \`#F5F8FB\`; the final measured ratio is 4.5797:1. It was closed before freeze and all final runs passed.

Early diagnostic runs also exposed evidence-tool issues: an in-section region start, Chromium tall-bitmap rollover on the 390 full-page image, a Sample path selector typo and a non-unique source selector. These changed only diagnostic scripts. Final long-page evidence uses exact 1200px-or-shorter live-scroll segments stitched losslessly into the complete-page overview. Failure records remain under \`diagnostic_support\` and are excluded from the approval inventory.

## Limits and next step

The evidence is from local headless Chrome 152 at 1440, 768 and 390 CSS pixels. Navigation clicks are intent simulations; production receivers, external source availability, real devices, assistive technology, CMS/Schema, canonical routing, development, deployment and publication are outside Gate 4.

Independent review must start from \`evidence_index.json\`, recompute the freeze and asset identities, and issue its own Finding/PASS result. This executor does not self-approve or start Gate 6.
`;
 write(out+'/APP-COAT_GATE4_VISUAL_AND_EXECUTION_REPORT_V0.1.md',report);
 const reportId=id(out+'/APP-COAT_GATE4_VISUAL_AND_EXECUTION_REPORT_V0.1.md');

 const selfcheck=`# APP-COAT Gate 4 Execution Self-Check V0.1

| Field | Value |
|---|---|
| Workset / freeze | \`COAT-G4-COMPLETE-V01\` / \`COAT-G4-COMPLETE-V01-F01\` |
| Candidate SHA-256 | \`${source.sha256}\` |
| Result | \`PASS / EXECUTOR_SELF_CHECK_ONLY\` |
| Formal checks | 720 / 720 passed |
| Formal images | 48 total: 3 full, 34 readable, 2 Menu, 3 Cookie, 6 high-risk |

I verified the exact Gate 3 main content, B visible copy, links, ten-part order, five endpoint objects, all eight neutral Grades, six sources and three request-owner paths. I checked 1440/768/390 responsive relationships, complete-page extent, all 34 readable segments, Menu/Cookie operation, actual hover/focus, 44px targets, contrast, overflow and clipping.

The formal run used the exact frozen dependencies. All 14 approval-core images were opened. Thirty-three final readable segments are byte-identical to the opened preflight segments; final 768 segment 01 was opened separately and differs only by 1/255 antialiasing noise. No unresolved visual defect remains in this self-check.

One real pre-freeze finding, CTA hover contrast, was fixed and reverified before the freeze. Diagnostic screenshot and selector failures are retained but do not alter the candidate or formal result.

This record is not independent review, Project Control approval, Gate 4 closure, Gate 6 authorization, development approval or publication approval.
`;
 write(review+'/APP-COAT_GATE4_EXECUTION_SELF_CHECK_V0.1.md',selfcheck);
 const selfcheckId=id(review+'/APP-COAT_GATE4_EXECUTION_SELF_CHECK_V0.1.md');

 const entry=`# APP-COAT Gate 4 Independent Review Entry V0.1

## Review object

Start at \`${out}/evidence_index.json\`. Review workset \`COAT-G4-COMPLETE-V01\`, freeze \`COAT-G4-COMPLETE-V01-F01\`, candidate SHA-256 \`${source.sha256}\`. Candidate and Manifest are read-only during review. Write the independent result as a new APP-COAT file in \`${review}\`.

The reviewer must independently recompute all 52 input identities, 6 dependency identities, 5 bound-record identities, source-freeze identity, export and asset inventories. Re-run or otherwise independently verify the 720 assertions. Inspect all three complete pages and 34 continuous readable segments; inspect both Menu states, all three Cookie states and all six high-risk focus/hover states.

Review exact B copy and link targets, ten-part order, five endpoint records, eight equal Grades with no ranking/recommendation, responsive tables/records, three separate request-owner paths, Shared Consumer V0.2, Applications current state, production Logo, Footer/legal order, hover/focus/44px/contrast, overflow, clipping and evidence continuity. Recheck the closed pre-freeze CTA-hover contrast finding and ensure the final hover surface remains \`#F5F8FB\` with measured contrast at least 4.5:1.

Each Finding must state severity, exact evidence, exact remediation and re-review condition. A PASS must explicitly state required Finding count 0, the exact workset/freeze/source identities, the 720/720 result, 48-image count and the local-runtime limitations. Independent review does not itself start Gate 6, development, deployment or publication.
`;
 write(review+'/APP-COAT_GATE4_INDEPENDENT_REVIEW_ENTRY_V0.1.md',entry);
 const entryId=id(review+'/APP-COAT_GATE4_INDEPENDENT_REVIEW_ENTRY_V0.1.md');

 const manifest=`# APP-COAT Current Gate Baseline Manifest V0.7 — Draft

## 0. Candidate status

| Field | Value |
|---|---|
| Page ID / URL | \`APP-COAT\` / \`/applications/titanium-dioxide-for-coatings/\` |
| Site scope | \`tio2-my\` |
| Previous approved Manifest | \`APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md\` / \`${id(root+'/pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md').sha256}\` |
| Gate 1–3 | \`APPROVED / CLOSED\` |
| Gate 4 execution | \`COMPLETE / FROZEN\` |
| Gate 4 independent review | \`PENDING\` |
| Gate 4 Project Control / closure | \`PENDING / NOT_CLOSED\` |
| Gate 6 / development / release | \`NOT_STARTED / NOT_AUTHORIZED\` |

V0.7 is a review draft. V0.6 remains the approved current baseline until independent review and Project Control complete the authorized closure conditions.

## 1. Gate 4 candidate

| Role | Path | SHA-256 | State |
|---|---|---|---|
| Workset | \`04_planning/gate4-v0.1/workset.json\` | recorded by final receipt | \`COMPLETE_VISUAL_FROZEN\` |
| Candidate HTML | \`04_planning/gate4-v0.1/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html\` | \`${source.sha256}\` | \`FROZEN_CANDIDATE\` |
| Visual layer | \`04_planning/gate4-v0.1/visual-direction.css\` | \`${css.sha256}\` | \`FROZEN_CANDIDATE\` |
| Source freeze | \`04_planning/gate4-v0.1/approval_core/source-freeze.json\` | \`${freeze.sha256}\` | \`COAT-G4-COMPLETE-V01-F01\` |
| Formal checks | \`04_planning/gate4-v0.1/diagnostic_support/formal-runtime-checks.json\` | \`${formalId.sha256}\` | \`720/720 PASS\` |
| Export inventory | \`04_planning/gate4-v0.1/approval_core/export-inventory.json\` | \`${exportId.sha256}\` | \`48 ASSETS\` |
| Asset inventory | \`04_planning/gate4-v0.1/approval_core/asset-inventory.json\` | \`${inventoryId.sha256}\` | \`COMPLETE\` |
| Formal readback | \`04_planning/gate4-v0.1/diagnostic_support/formal-visual-readback.json\` | \`${readbackId.sha256}\` | \`AUTHOR READBACK\` |
| Execution report | \`04_planning/gate4-v0.1/APP-COAT_GATE4_VISUAL_AND_EXECUTION_REPORT_V0.1.md\` | \`${reportId.sha256}\` | \`COMPLETE\` |
| Self-check | \`05_review/APP-COAT_GATE4_EXECUTION_SELF_CHECK_V0.1.md\` | \`${selfcheckId.sha256}\` | \`PASS / NOT_INDEPENDENT\` |
| Independent review entry | \`05_review/APP-COAT_GATE4_INDEPENDENT_REVIEW_ENTRY_V0.1.md\` | \`${entryId.sha256}\` | \`PENDING_INDEPENDENT_REVIEW\` |

## 2. Locked upstream and page contract

A V0.1 (\`efa3c0af5bf2e69d6942dafdc83df2decdc571b4c988589788bd0f77a55b0fc2\`), B V0.2 (\`e5c9ffa7bcd7ae0375e45e27ba9bc26b95d00d317ff19c243e7e931b17706531\`) and C V0.1 (\`ab5fd1d67eae464193d6e20b3f80a94afd36e29383ffb5a2c99db8e7103de400\`) remain the approved content combination. B remains the sole visible-copy source.

The exact ten-part order, five endpoints, eight equal Grades, neutral process labels, Grade routes, Products path, six sources and Documents/Sample/RFQ owner paths are retained. No ranking, recommendation, equivalence, performance, availability or commercial outcome was introduced.

## 3. Evidence and limits

Formal evidence contains 3 complete pages, 34 continuous readable segments, 2 Menu states, 3 Cookie states and 6 high-risk focus/hover states. The local headless Chrome run does not prove production receivers, external availability, real-device/assistive-technology behavior, CMS/Schema, canonical route, deployment or publication.

The independent reviewer must use \`04_planning/gate4-v0.1/evidence_index.json\` and the dedicated review entry. This draft records no independent PASS, Project Control approval or Gate 4 closure and does not authorize Gate 6.
`;
 write(root+'/pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.7_DRAFT.md',manifest);
 const manifestId=id(root+'/pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.7_DRAFT.md');

 const evidence={workset_id:'COAT-G4-COMPLETE-V01',freeze_id:'COAT-G4-COMPLETE-V01-F01',status:'COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW',candidate:source,visualLayer:css,sourceFreeze:freeze,inputIndex:id(out+'/input_index.json'),direction:id(out+'/4A-direction-check.json'),preflight:id(out+'/approval_core/preflight-record.json'),formalRuntime:formalId,exportInventory:exportId,assetInventory:inventoryId,formalVisualReadback:readbackId,report:reportId,selfcheck:selfcheckId,candidateManifest:manifestId,independentReviewEntry:entryId,counts:{formalChecks:720,formalChecksPassed:720,formalChecksFailed:0,formalAssets:48,completePages:3,readableSegments:34,menuStates:2,cookieStates:3,highRiskStates:6,frozenInputs:52,frozenDependencies:6,frozenBoundRecords:5},specific:['Exact approved B copy and targets at 1440/768/390.','Five endpoint records; eight equal Grades in approved order with 4 Chloride and 4 Sulfate process labels.','Full tables at 1440, two-column labelled records at 768, single labelled records at 390.','Documents, Sample and RFQ remain three distinct owner paths.','All normal/hover/keyboard-focus controls satisfy 44px, contrast and focus checks.','Menu/Cookie state coverage and shared Chrome/Logo/Footer/legal contracts verified.'],diagnosticHistory:{closedFinding:'COAT-G4-PF01 primary CTA hover contrast closed before freeze: 4.3387:1 to 4.5797:1.',excluded:['diagnostic_support/4a-runtime-checks.json','diagnostic_support/preflight-r3-runtime-checks.json','diagnostic_support/formal-r1-failure.json','diagnostic_support/formal-r2-failure.json']},limitations:['Local headless Chrome only.','720 CSS px is a reflow proxy, not native 200% zoom.','Local navigation intent does not prove production receiver or external source availability.','Author self-check does not replace independent review.'],next:'Independent review from the dedicated entry; do not start Gate 6.'};
 write(out+'/evidence_index.json',evidence);
 const workset=JSON.parse(fs.readFileSync(out+'/workset.json','utf8'));workset.status='COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW';workset.independent_review_entry=entryId.path;workset.candidate_manifest=manifestId.path;fs.writeFileSync(out+'/workset.json',JSON.stringify(workset,null,2)+'\n');
 const receipt={at:new Date().toISOString(),workset:id(out+'/workset.json'),evidenceIndex:id(out+'/evidence_index.json'),candidate:source,visualLayer:css,freeze,formalRuntime:formalId,exportInventory:exportId,assetInventory:inventoryId,report:reportId,selfcheck:selfcheckId,candidateManifest:manifestId,independentReviewEntry:entryId,checks:formal.summary,assets:formal.assets.length};
 write(out+'/diagnostic_support/final-receipt.json',receipt);
 console.log(JSON.stringify(receipt,null,2));
})().catch(e=>{console.error(e.stack);process.exitCode=1});
