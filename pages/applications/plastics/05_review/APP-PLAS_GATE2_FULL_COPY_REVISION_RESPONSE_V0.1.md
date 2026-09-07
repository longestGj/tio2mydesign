# APP-PLAS Gate 2 Full Copy Revision Response V0.1

## 1. Control

| Field | Value |
|---|---|
| Page ID | `APP-PLAS` |
| Date | `2026-09-07` |
| Input review | `APP-PLAS_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` |
| Input review SHA-256 | `866C589F4E59BCE9C38AD93E995BD58C3DC3DF037E470E83E290BBAF471C9AA5` |
| Findings | `APP-PLAS-G2-BR-F01`–`F03` |
| Response status | `REVISED / PENDING_INDEPENDENT_REREVIEW` |

## 2. Version decisions

| Artifact | SHA-256 | Decision | Reason |
|---|---|---|---|
| `APP-PLAS_GATE2_CONTENT_SKELETON_V0.2.md` | `370CEFBD64F9146AAA5146989FAD25312F7EB6EC0051C4A445ECE74650365128` | A upgraded to V0.2 | F03 changes the visible source count from 14 to 13. A's source-module description must remain accurate. |
| `APP-PLAS_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `27910C5EF40C4064581FA7D4D92065C57D709F0A9F402CB919D9CF0E88A608DD` | B upgraded to V0.2 | Contains the three required Buyer Copy/source fixes. V0.1 remains unchanged. |
| `APP-PLAS_GATE2_CONTENT_CONTRACT_V0.2.md` | `90A1380B0FD21C1914576897DF29F0019128B6D40D35A45003D641E6F78B2A69` | C upgraded to V0.2 | F03 changes the stable required source set and the resin-context source predicate. F01/F02 alone would not require a C revision. |
| `APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` | Self-hash omitted by Manifest rule | Updated in the same stage | Selects revised A/B/C and records the initial Review and Finding state. No new Manifest version is created. |

## 3. Finding response

### `APP-PLAS-G2-BR-F01` — accepted

Before:

> The following are neutral Plastics relationships. They are navigation options, not a shortlist, ranking or statement of resin-specific suitability.

After:

> Use these eight Grades as starting points for technical review. The list does not rank or recommend a Grade or establish suitability for a particular resin.

The adjacent instruction still tells the buyer to open the page for one candidate, compare relevant pages for several candidates, keep trial results separate and continue without guessing when the Grade is unknown. All eight Grades remain equal.

### `APP-PLAS-G2-BR-F02` — accepted

Before:

> Price per kilogram, nominal TiO2 content and loading make a meaningful cost comparison only when the incumbent and candidate plastic reach the same accepted technical endpoint. State which costs the comparison includes, such as material, testing, scrap or rework. The buyer owns that accounting boundary; this page does not predict savings or commercial outcome.

After:

> Price per kilogram, nominal TiO2 content and loading make a meaningful cost comparison only when the incumbent and candidate plastic systems reach the same accepted technical endpoint. Define which cost categories to include, such as material, testing, scrap and rework, and apply that same basis throughout the comparison.

The new wording identifies the comparison objects as plastic systems, keeps the equal accepted endpoint, and directly tells the buyer to define and consistently apply the cost categories. It introduces no savings, ROI, price or commercial-outcome claim.

### `APP-PLAS-G2-BR-F03` — accepted

The BASF URL was not replaced with an unverified source. The visible BASF record was deleted because its public landing page no longer identifies `ULTRAMID® 8233GHS TN7317` or product `30216475`. The Polyamide question remains supported by Wetzel et al. 2023 and ISO 1110:2019 and still makes no drying, processing, compatibility or Grade conclusion.

Sources formerly numbered 12–14 are now 11–13. A and C both state 13 reader-visible sources. C removes BASF from `PLAS-G2-C05` and records why the obsolete record is excluded.

## 4. Full-page adjacent regression

| Check | Result |
|---|---|
| Visible sequence | One H1, 11 H2 sections and the same 12-module order including Hero |
| Source list | 13 contiguous notes, numbered 1–13; BASF/`8233GHS`/`30216475` occurrences in B V0.2: `0` |
| Source-to-copy correspondence | Optics, FPV/film, durability, resin examples, PA conditioning and cost predicates retain at least one stated supporting source; Source 8 remains background-only and adds no masterbatch formulation claim |
| APP-PLAS / APP-MB | Final-plastic ownership and the high-concentration masterbatch handoff are unchanged |
| Grade rows | Exactly 8: M-350, M-510, M-200, M-108, M-210, M-340, M-886 and M-2377; 6 Chloride / 2 Sulfate |
| Grade paths | One, several and unknown-Grade paths remain; no ranking, recommendation, equivalence, resin suitability, performance or availability claim |
| Documents | One known Grade, one or more document types, and separate request for another Grade retained |
| Sample | Known or unknown Grade, application, destination and test objective retained; review/arrangement boundary unchanged |
| RFQ | Known lead Grade or `Not sure / Need help`, required or estimated MT, destination and other candidates in `Additional Requirements` retained |
| RFQ outcome | Team reviews requirements/details and contacts using provided information; no quote or commercial-output promise |
| Private/internal text | Zero approved-article trace markers and no visible Gate, evidence-status, readiness or qualification-SOP language |
| Non-target Buyer semantics | Unchanged outside F01, F02 and F03 source deletion/renumbering |

## 5. Handoff

All three Findings are implemented and ready for independent rereview. Gate 2 remains open; this response does not approve Gate 2, authorize Gate 3 or unlock APP-MB.
