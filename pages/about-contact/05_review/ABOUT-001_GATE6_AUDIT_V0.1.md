# ABOUT-001 Gate 6 Audit V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Date | 2026-09-01 |
| Review ID | `ABOUT-001-G6-PCR-01` |
| Input | User-approved Gate 5 baseline and current project authorities |
| Audit status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 7 readiness | `NOT_READY_PENDING_REVIEW_DISPOSITION` |

## 1. Executive Finding

The approved Gate 5 direction is coherent with the About trust-page role and retains the user-approved long copy. The page is not yet safe to promote to Gate 7 because the current visual proof contains unsupported operational wording, unresolved media provenance, no native Tablet proof, and state/interaction assets that conflict with the newer shared Global Chrome authority.

Submission of this audit does not reverse Gate 5 approval. It identifies the controls project control must close, accept as a written override, or return for revision.

## 2. Blocking Findings

| ID | Finding | Evidence / risk | Required disposition before Gate 7 |
|---|---|---|---|
| `ABOUT-G6-B01` | Media provenance and usage rights are absent | Hero/footer port, containers, product bag/powder and industrial imagery can imply real facilities, inventory or logistics; application photos also lack a rights record | Approve source, rights, exact usage and claim-neutral ALT for each asset, or omit/replace with non-claim visual treatment |
| `ABOUT-G6-B02` | Several visible statements exceed the approved first-party evidence boundary | Phrases such as reliable infrastructure ensuring continuity/efficiency, global-trade alignment, timely/compliant deliveries and reliable supply are not supported by the current evidence register | Rewrite to neutral service/process language or attach approved evidence and qualifiers |
| `ABOUT-G6-B03` | Priority markets are presented as proven customer/service markets | EU, UK, India and Brazil are approved website target markets, not verified destination/customer facts. The page also separately claims customers in 30+ countries | Label the four as priority markets supported by the website and remove customer-serving assertions unless destination evidence is approved |
| `ABOUT-G6-B04` | Required Tablet proof is absent | Gate 6 scope requires Desktop, Tablet and 390px coverage; Gate 5 has no Tablet visual artifact | Provide a Tablet visual/state proof or receive an explicit project-control acceptance of the written Tablet contract as sufficient |
| `ABOUT-G6-B05` | Mobile and Desktop approved rasters are not native acceptance proofs | Desktop raster is 853px wide; mobile is a two-column composite, not one continuous 390px logical page | Preserve as visual direction, but require native 1440/Tablet/390 acceptance evidence in the authorized downstream specification |
| `ABOUT-G6-B06` | Auxiliary state assets conflict with current shared Chrome and final body labels | Visible `CURRENT` text and outdated CTA/copy occur in Mobile Menu and interaction/state boards | Treat those pixels as superseded and provide updated state proof, or obtain project-control acceptance of the written V0.5 override |

## 3. Important Findings

| ID | Finding | Required control |
|---|---|---|
| `ABOUT-G6-I01` | `Legal Entity` can imply SSM verification, but SSM Company Profile/ACGS remains absent | Prefer `Operating Company`; otherwise retain only with the visible company-provided qualifier and no `legalName` Schema |
| `ABOUT-G6-I02` | Taiping `Location` is a company-stated manufacturing-site address, not a verified registered address | Use `Manufacturing site (company-provided)` in visible facts and a `Place` node only; never map it to Organization registered `address` |
| `ABOUT-G6-I03` | Hero carries multiple evidence-bearing claims while the source/review line appears later | Keep a source/qualifier adjacent to the Hero claim block or create an accessible in-page evidence reference |
| `ABOUT-G6-I04` | Long mobile Hero delays the first action and creates a dense first screen | Preserve approved copy, but validate reading width, CTA visibility, paragraph rhythm and no fixed-height crop at 375/390/430px |
| `ABOUT-G6-I05` | Several child Application URLs remain provisional and public route readiness is not demonstrated | Route verification is a release blocker; do not emit a broken link or silently invent a fallback |
| `ABOUT-G6-I06` | RFQ, Contact and Request Documents route readiness is not demonstrated | Shared RFQ remains visible; record route failure as `RELEASE_BLOCKER`, never as hidden/disabled/Contact fallback |

## 4. Evidence and Claim Disposition

| Claim / field | Gate 6 state | Public rule |
|---|---|---|
| `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` | `COMPANY_PROVIDED / PROJECT_BASELINE` | May render as operating company with source and review date; not `legalName` |
| Taiping manufacturing site and stated address | `COMPANY_PROVIDED` | May render with manufacturing-site label and qualifier; not registered address |
| Malaysia manufacturing / origin | `COMPANY_PROVIDED` | May render with first-party attribution; no independent-verification implication |
| More than 35,000 metric tons | `COMPANY_PROVIDED` | Label annual supply; do not relabel as audited production capacity |
| 30+ countries / 200+ factory customers | `COMPANY_PROVIDED` | May render with source/review line; no named-customer or target-market inference |
| Packaging, Port Klang, FCL/LCL | `COMPANY_PROVIDED` | Render only with applicable/scope qualifier; no fixed route, lead-time or availability guarantee |
| Quality control | `COMPANY_PROVIDED` | Plain process claim only; no certified QMS, ISO or badge |
| TDS, SDS, COA, COO and REACH/FDA-related support | `COMPANY_PROVIDED / TRANSACTION_DEPENDENT` | State availability/applicability by grade, transaction and destination; no certification claim |
| Registration number, company status, incorporation date, registered office, legal business nature | `FROZEN / DO_NOT_RENDER` | Omit from HTML, API and Schema |
| ISO / certified QMS | `FROZEN / DO_NOT_RENDER` | Omit text, icon and badge |
| Batch traceability | `FROZEN / DO_NOT_RENDER` | Omit visible and machine-readable claim |

## 5. Page-Role and Cannibalization Review

- About retains identity, manufacturing/origin, quality, company-provided capability and export-collaboration trust.
- Home retains broad supplier positioning and receives the in-copy `titanium dioxide supplier in Malaysia` link at `/`.
- Documents retains file availability, request and controlled-management responsibility.
- Contact retains communication tools; About only links to `/contact/`.
- Markets and Applications own their detailed child intents; About presents a qualified overview only.
- No new top-level navigation item, page, URL or Primary Keyword is introduced.

## 6. Gate 6 Disposition

`ABOUT-001-G6-PCR-01` is submitted with six Blocking and six Important findings. Project control must record each disposition. Until that occurs, Gate 6 is not passed and Gate 7 is not authorized.
