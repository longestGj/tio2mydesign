# RES-TRADE-BR Gate 2 Full Copy Revision Response V0.1

## Control

| Field | Value |
|---|---|
| Page ID | `RES-TRADE-BR` |
| Review addressed | `RES-TRADE-BR-G2-FULL-BR-01` |
| Findings | `RES-TRADE-BR-G2-BR-F01`, `RES-TRADE-BR-G2-BR-F02` |
| Formal Review | `RES-TRADE-BR_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` |
| Revised Buyer Copy | `RES-TRADE-BR_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| Revised content contract | `RES-TRADE-BR_GATE2_CONTENT_CONTRACT_V0.2.md` |
| Version | V0.1 |
| Status | `FINDINGS_ADDRESSED / READY_FOR_INDEPENDENT_REREVIEW` |
| Date | 2026-09-07 |

This is an execution response. It is not independent verification, Project Control approval, user approval or Gate closure.

## F01 response — accessible Resolution 850 official landing

**Affected locations:** B, `Official sources`; C §7, `Required official link set`.

The inaccessible direct Resolution 850 URL was replaced with:

> [Official GECEX resolutions index: Resolution 850/2026](https://www.gov.br/mdic/pt-br/assuntos/camex/resolucoes/resolucoes?b_start:int=120) — the official index records Resolution 850’s removal of Siegwerk from the named producer/exporter list.

The label now identifies the actual index landing. The adjacent description states the exact indexed correction without assigning a replacement band, exemption or shipment treatment. C V0.2 freezes the same official landing, label purpose and Siegwerk-removal predicate in the required source contract.

`RES-TRADE-BR-G2-BR-F01 = ADDRESSED_PENDING_INDEPENDENT_VERIFICATION`

## F02 response — dated Buyer Clean stale-list warning

**Affected location:** B, final explanatory paragraph under `Four definitive duty bands`.

**Before:**

> The MDIC detail page captured for the measure still displays the older name, so do not use that page’s long list without the later resolution.

**After:**

> When checked on 7 September 2026, the MDIC measure detail page still displayed the older name, so do not use that page’s long list without the later resolution.

The revision removes internal evidence-handling language, gives the buyer the public check date and retains Resolution 850 as the later correction. The following sentence still prevents an inferred replacement band or shipment result.

`RES-TRADE-BR-G2-BR-F02 = ADDRESSED_PENDING_INDEPENDENT_VERIFICATION`

## Version and exact-diff record

- B advances from V0.1 to V0.2. Apart from the version heading, its only changes are the one F02 sentence and the F01 Resolution 850 source label, target and adjacent source description.
- C advances from V0.1 to V0.2 because the required official source landing and source predicate changed materially. Apart from the version heading and Buyer-copy pointer, its only change is the Resolution 850 entry in §7.
- A remains V0.1 because the buyer task, module order and action architecture did not change.
- The same-stage Manifest remains V0.2 and is updated in place to point to B V0.2, C V0.2, the formal Review and this Revision Response.

## Regression record

- The eight-module order is unchanged.
- All four USD/t amounts, China-origin conditions, exact-entity logic, Resolution 850 Siegwerk removal and no-replacement-result boundary are unchanged.
- Rutile scope, anatase and complete Ex-001 boundaries are unchanged.
- Public-interest status, duty/tax separation, Malaysia-origin boundary, shipment checklist, receiver expectations, SEO/GEO/Schema and freshness statement are unchanged.
- Buyer Copy contains no `captured`, Gate, Manifest, readiness, evidence-control or source-control language.
- The revised Resolution 850 source uses the required accessible official index URL and identifies its landing as an index.

## Current artifact hashes

| Artifact | SHA-256 |
|---|---|
| `RES-TRADE-BR_GATE2_CONTENT_SKELETON_V0.1.md` | `17209BCE23F3EB3441B4CEB5A254E23E1992C63B9FBCADDB8B5DE67E12861186` |
| `RES-TRADE-BR_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `BB83ADEB1A2A21EE7B7C4D854D569D5B73BA6A9FC75421A387FE9EEDED5B6C5F` |
| `RES-TRADE-BR_GATE2_CONTENT_CONTRACT_V0.2.md` | `0A0E9E16A5BD8334DDFCF4B1C13A5B09DC87C050C5396695B25CE2BB20108C36` |
| `RES-TRADE-BR_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md` | `445233E1B07D468D39588065B06B4F37A45147FC4A62D880D187C1FF778FD9EF` |

## Stop

`NEXT = INDEPENDENT_BUYER_REREVIEW`

`GATE2 = OPEN`

`GATE3 = NOT_STARTED / NOT_AUTHORIZED`
