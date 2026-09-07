# ABOUT-001 Gate 6 Audit V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Date | 2026-09-01 |
| Review ID | `ABOUT-001-G6-PCR-03` |
| Parent disposition | `ABOUT-001-G6-PCR-02 = CONDITIONAL_RETURN / TARGETED_GOVERNANCE_AND_SCHEMA_REVISION_REQUIRED` |
| Visual layer | Reviewed; no further change requested |
| Current status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 6 outcome | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORIZATION` |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |

## 1. Targeted Revision Result

PCR-03 corrects the authorization model only under root `D:\23MySec\AGENTS.md` §2.3. User-approved visible page content is formal public content and may enter SEO metadata, GEO, social metadata and Schema when the output matches a visible fact, uses a semantically valid property and does not add an inference. The three V0.3 PNGs remain byte-for-byte unchanged.

## 2. Authorized Visible-to-Machine Mapping

| Visible page fact | Permitted mapping | Constraint |
|---|---|---|
| `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` under Operating Company | Organization `name` | Do not use `legalName` |
| Visible About identity and business summary | Organization `description`; AboutPage `mainEntity` / `about` | Description must stay within visible wording |
| Taiping address | Organization `location` → Place `address` → PostalAddress | Manufacturing/location context only; not registered address |
| European Union, United Kingdom, India, Brazil market cards | Organization `areaServed` | Use named AdministrativeArea/Place nodes or exact Text; no extra market |
| More than 35,000 metric tons annual supply | Organization `description` | Do not relabel as audited production capacity or use an unrelated quantitative property |
| Customers in over 30 countries | Organization `description` | Do not fabricate country list or individual customer relations |
| More than 200 factory customers | Organization `description` | Do not map to employee count, rating or customer entities |
| Port Klang export coordination | Organization `description` | Do not infer guaranteed route, lead time or shipment |
| FCL/LCL | Description only when the same wording is visible in the final page state | Current Schema output must not add it if absent from the same rendered page |

## 3. Continued Prohibitions

- No Organization `legalName`, SSM number/status, incorporation date, registered address or legal business nature.
- No ISO, certified QMS, certification, badge, rating, Review, Offer or batch-traceability claim.
- No hidden fact or guarantee absent from the visible page.
- No use of `numberOfEmployees` for customer count.
- No invented customer entities, export events, country list or production-facility relationship.
- No `image` or `og:image` registration until the exact asset has approved rights and usage scope.

## 4. SEO, GEO and Page-Role Review

The proposed title and description may use Malaysia manufacturing, rutile TiO2 supply, documentation and export coordination because those facts are visible and user-authorized. About continues to own identity, manufacturing/origin and trust; Home owns broad supplier intent; Documents owns document request/management; Contact owns contact tooling; Markets and Applications own their detailed child intents.

## 5. Route and Shared-Component Boundary

- Global Header/Footer remain shared Global Chrome V0.5; no ABOUT-local fork.
- Application child, RFQ, Contact and Request Documents route readiness remains Gate 8 implementation plus Gate 9 read-only QA/release control.
- Fixed Global RFQ remains visible; false readiness blocks release rather than producing hidden/disabled/fallback UI.

## 6. Current Disposition

`ABOUT-001-G6-PCR-03 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.

Gate 6 outcome is `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORIZATION`. Gate 7 remains `LOCKED / NOT_AUTHORIZED`.
