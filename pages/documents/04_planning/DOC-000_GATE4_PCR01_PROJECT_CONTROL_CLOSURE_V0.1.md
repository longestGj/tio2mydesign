# DOC-000 Gate 4 PCR-01 Project-Control Closure V0.1

## 0. Decision record

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Parent review | `DOC-000-G4-DOC-EDITORIAL-01` |
| Targeted revision ID | `DOC-000-G4-PCR-01` |
| Final targeted status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Parent status after closure | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL / NOT_APPROVED` |
| Review date | 2026-09-02 |
| Review source | Independent project-control re-review conclusion relayed to the execution task |

## 1. Closed findings

| Finding | Independent result |
|---|---|
| P0-01 Tablet Selector geometry | PASS; dropdown=`x72..696,y1200..1252`; Continue=`x72..696,y1330..1380`; gap=78px; overlap=0 |
| P0-02 Mobile Explore Products helper | PASS; Buyer-visible hit=1; located between stable validation region and Continue |

Tablet and Mobile originals were visually rechecked with no evident coverage, clipping or horizontal sliding.

## 2. Preserved contracts

- Hero `Start a Document Request` remains an accessible direct link to `/request-documents/` with no query or default Grade.
- Four categories, 14 Grades, six FAQ questions and default-collapsed FAQ remain unchanged.
- Shared Global Chrome remains unchanged.
- Desktop, Selector/FAQ state board and Global Chrome PNGs are byte-identical to the submitted PCR-01 package.

## 3. Asset verification

| PNG | SHA-256 |
|---|---|
| Desktop 1440 | `00954FE377B03ACA2FCB2E6E95769FDA9A00FC8D2B8FE174C34C280AF2ABA4F9` |
| Tablet 768 | `6EFAF5DE4B922CF492732F71931CDFD561C85C23943EBB6DE36FBB391FA45E2A` |
| Mobile 390 logical @2x | `09D653A84AC3E79CC2AFB81D50D842F482D9F6BEE62689FD62BE927D03BEF471` |
| Selector / FAQ states | `DC35B27469AE29E4B6EDA6C501049A32003CABB92366763BF6325FFFB1F73C63` |
| Global Chrome assembly | `CE69A907B22BEDC1FCA80C737171EEF72A4265B8D942A250CB2AE7303C815AC9` |

The submitted pre-closure Manifest self SHA-256 was `42647080CF63CFFFC88300173E623691C8054AD1E1070D3DB832E58CAD879C5B`. Governance synchronization creates a new Manifest hash but does not modify any PNG or SVG.

## 4. Parent Gate 4 disposition

`DOC-000-G4-DOC-EDITORIAL-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL / NOT_APPROVED`.

The project-control pass does not constitute user approval or Gate 4 closure. Gate 5 remains `NOT_STARTED / NOT_AUTHORIZED`. No development, D16, deployment or publication authority is created.
