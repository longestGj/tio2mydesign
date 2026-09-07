# RES-000 Gate 7 H0–H5 Deterministic State Fixtures V0.1

## 0. Control and Safety Boundary

| Field | Value |
|---|---|
| Page | `RES-000` / `/resources/` |
| Date | 2026-09-01 |
| Package ID | `RES-000-G7-HANDOFF-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Purpose | Deterministic specification examples for Gate 8 implementation and Gate 9 QA |

These are documentation fixtures, not seed data. Values marked `FIXTURE_ONLY`, URLs under `example.invalid`, and hypothetical approval states are prohibited from production CMS, API, HTML, Schema, caches and snapshots. Registered Page IDs are used only to prove state transitions and do not upgrade their real project status.

## 1. Shared Fixture Rules

- The singleton RES-000 Buyer Clean is constant across all states.
- Scope filtering occurs before eligibility evaluation.
- Public arrays contain distinct eligible Page IDs only.
- ItemList is generated from the same public arrays.
- DOM counts below refer to server-rendered public output.
- `featured_section_root=0` means the root, heading, divider, card, link and spacing are absent and consume 0px.
- `latest_section_root=0` means the root, heading, divider, items and spacing are absent and consume 0px.

## 2. H0 — Current Public State

### 2.1 CMS input

```json
{
  "fixture_id": "RES-G7-H0-CURRENT",
  "page_id": "RES-000",
  "site_scope": "tio2-my",
  "resource_relations": []
}
```

### 2.2 Public ViewModel

```json
{
  "state": {"h_state": "H0_NO_QUALIFIED_RESOURCE", "qualified_public_count": 0},
  "featured_resources": [],
  "latest_resources": [],
  "schema": {
    "collection_page": "PRESENT",
    "breadcrumb_list": "PRESENT",
    "item_list": null
  }
}
```

### 2.3 Expected DOM/Schema

| Atom | Count/result |
|---|---:|
| H1 | 1 |
| Featured section root | 0 |
| Featured links | 0 |
| Latest section root | 0 |
| Latest links | 0 |
| Decision paths | 3 |
| Evidence principles | 3 |
| Buyer Questions | 5 |
| ItemList | absent |
| ItemList items | 0 |

## 3. H1 — One Design Candidate, Public Output Equals H0

### 3.1 CMS input

```json
{
  "fixture_id": "RES-G7-H1-DESIGN-CANDIDATE",
  "page_id": "RES-000",
  "site_scope": "tio2-my",
  "resource_relations": [{
    "resource_page_id": "RES-ORIGIN",
    "resource_type": "PROCUREMENT_GUIDE",
    "mapping_status": "APPROVED_PRD_V0.3",
    "child_content_status": "IN_REVIEW",
    "claim_status": "NOT_REVIEWED",
    "public_eligibility_status": "NOT_ELIGIBLE",
    "route_status": "NOT_IMPLEMENTED",
    "canonical_status": "NOT_VERIFIED"
  }]
}
```

### 3.2 Public ViewModel

The complete public state object is identical to H0:

```json
{
  "state": {"h_state": "H0_NO_QUALIFIED_RESOURCE", "qualified_public_count": 0},
  "featured_resources": [],
  "latest_resources": [],
  "schema": {
    "collection_page": "PRESENT",
    "breadcrumb_list": "PRESENT",
    "item_list": null
  }
}
```

Expected DOM/Schema counts are identical to H0. The API must not expose the H1 candidate, title, summary, route or internal state. V0.5 demonstrates only how the card would fit after H2 eligibility.

## 4. H2 — Exactly One Eligible Child

### 4.1 CMS input test vector

```json
{
  "fixture_id": "RES-G7-H2-ONE-ELIGIBLE-FIXTURE_ONLY",
  "fixture_only": true,
  "site_scope": "tio2-my",
  "resource_relations": [{
    "resource_page_id": "RES-ORIGIN",
    "resource_type": "PROCUREMENT_GUIDE",
    "title": "Non-China Titanium Dioxide Supply Guide",
    "summary": "FIXTURE_ONLY_APPROVED_CHILD_SUMMARY",
    "canonical_path": "/resources/non-china-titanium-dioxide/",
    "mapping_status": "APPROVED_PRD_V0.3",
    "child_content_status": "APPROVED",
    "claim_status": "APPROVED",
    "public_eligibility_status": "ELIGIBLE",
    "route_status": "VERIFIED_PUBLIC",
    "canonical_status": "VERIFIED",
    "last_reviewed_at": "2026-09-01",
    "display_order": 10,
    "featured_rank": 1,
    "cta_label": "Read the sourcing guide"
  }]
}
```

### 4.2 Public ViewModel test expectation

```json
{
  "state": {"h_state": "H2_ONE_PUBLIC_RESOURCE", "qualified_public_count": 1},
  "featured_resources": [{"page_id": "RES-ORIGIN", "position": 1}],
  "latest_resources": [],
  "schema": {"collection_page": "PRESENT", "breadcrumb_list": "PRESENT", "item_list_count": 1}
}
```

### 4.3 Expected DOM/Schema

| Atom | Count/result |
|---|---:|
| Featured section/card/link | 1 / 1 / 1 |
| Latest section root/items | 0 / 0 |
| ItemList/items | 1 / 1 |
| Duplicate Page IDs | 0 |

This vector does not assert that RES-ORIGIN has real eligibility today.

## 5. H3 — Two Eligible Children, No Duplication

### 5.1 CMS input test vector

```json
{
  "fixture_id": "RES-G7-H3-TWO-ELIGIBLE-FIXTURE_ONLY",
  "fixture_only": true,
  "site_scope": "tio2-my",
  "resource_relations": [
    {
      "resource_page_id": "RES-ORIGIN",
      "resource_type": "PROCUREMENT_GUIDE",
      "canonical_path": "/resources/non-china-titanium-dioxide/",
      "mapping_status": "APPROVED_PRD_V0.3",
      "child_content_status": "APPROVED",
      "claim_status": "APPROVED",
      "public_eligibility_status": "ELIGIBLE",
      "route_status": "VERIFIED_PUBLIC",
      "canonical_status": "VERIFIED",
      "last_reviewed_at": "2026-09-01",
      "featured_rank": 1,
      "display_order": 10
    },
    {
      "resource_page_id": "RES-PROC",
      "resource_type": "TECHNICAL_GUIDE",
      "canonical_path": "/resources/chloride-vs-sulfate-titanium-dioxide/",
      "mapping_status": "FIXTURE_PUBLIC_ELIGIBLE",
      "child_content_status": "APPROVED",
      "claim_status": "APPROVED",
      "public_eligibility_status": "ELIGIBLE",
      "route_status": "VERIFIED_PUBLIC",
      "canonical_status": "VERIFIED",
      "last_reviewed_at": "2026-09-01",
      "display_order": 20
    }
  ]
}
```

`FIXTURE_PUBLIC_ELIGIBLE` is deliberately not a production enum. It proves the branch without changing the real `NEW_PAGE_CANDIDATE` status of RES-PROC.

### 5.2 Public ViewModel test expectation

```json
{
  "state": {"h_state": "H3_MULTIPLE_PUBLIC_RESOURCES", "qualified_public_count": 2},
  "featured_resources": [{"page_id": "RES-ORIGIN", "position": 1}],
  "latest_resources": [{"page_id": "RES-PROC", "position": 2}],
  "schema": {"collection_page": "PRESENT", "breadcrumb_list": "PRESENT", "item_list_count": 2}
}
```

### 5.3 Expected DOM/Schema

| Atom | Count/result |
|---|---:|
| Featured Page IDs | `RES-ORIGIN` only |
| Latest Page IDs | `RES-PROC` only |
| ItemList order | `RES-ORIGIN`, `RES-PROC` |
| Duplicate Page IDs | 0 |

## 6. H4 — Trade Item Pass Vector

### 6.1 CMS input test vector

The following `example.invalid` and `FIXTURE_ONLY` values are structurally deterministic and must never be published:

```json
{
  "fixture_id": "RES-G7-H4-TRADE-FIXTURE_ONLY",
  "fixture_only": true,
  "resource_page_id": "RES-TRADE-EU",
  "site_scope": "tio2-my",
  "resource_type": "TRADE_UPDATE",
  "title": "FIXTURE_ONLY_TRADE_UPDATE",
  "summary": "FIXTURE_ONLY_TRADE_SUMMARY",
  "canonical_path": "/resources/eu-titanium-dioxide-anti-dumping-duty/",
  "mapping_status": "FIXTURE_PUBLIC_ELIGIBLE",
  "child_content_status": "APPROVED",
  "claim_status": "APPROVED",
  "public_eligibility_status": "ELIGIBLE",
  "route_status": "VERIFIED_PUBLIC",
  "canonical_status": "VERIFIED",
  "official_source_name": "FIXTURE_ONLY_OFFICIAL_SOURCE",
  "official_source_url": "https://example.invalid/official-source",
  "applicable_scope": "FIXTURE_ONLY_SCOPE",
  "source_date": "2026-08-01",
  "review_date": "2026-09-01",
  "freshness_status": "CURRENT_APPROVED",
  "public_status_label": "FIXTURE_ONLY_STATUS",
  "freshness_owner": "FIXTURE_ONLY_ROLE",
  "next_review_due": "2026-10-01",
  "event_review_trigger": "FIXTURE_ONLY_EVENT_TRIGGER",
  "display_order": 30
}
```

### 6.2 Public ViewModel test expectation

With the two H3 guide records plus this isolated Trade pass vector:

```json
{
  "state": {"h_state": "H4_TRADE_ITEM", "qualified_public_count": 3},
  "featured_resources": [{"page_id": "RES-ORIGIN", "position": 1}],
  "latest_resources": [
    {"page_id": "RES-PROC", "position": 2},
    {"page_id": "RES-TRADE-EU", "position": 3, "trade_metadata_complete": true}
  ],
  "schema": {"item_list_count": 3}
}
```

All seven buyer-relevant Trade atoms—source name/link, scope, source date, review date, approved freshness/status expression and canonical action—appear together or not at all. Real public output requires real verified values; this vector only proves the conditional branch.

## 7. H5 — Atomic Revocation

### 7.1 Revocation input

```json
{
  "fixture_id": "RES-G7-H5-REVOKE-TRADE-FIXTURE_ONLY",
  "resource_page_id": "RES-TRADE-EU",
  "transition": {
    "freshness_status": ["CURRENT_APPROVED", "STALE"],
    "public_eligibility_status": ["ELIGIBLE", "REVOKED"],
    "record_review_date": "2026-09-01"
  }
}
```

### 7.2 Expected public recomputation

```json
{
  "transition_state": "H5_STALE_OR_REVOKED",
  "steady_state": {"h_state": "H3_MULTIPLE_PUBLIC_RESOURCES", "qualified_public_count": 2},
  "featured_resources": [{"page_id": "RES-ORIGIN", "position": 1}],
  "latest_resources": [{"page_id": "RES-PROC", "position": 2}],
  "schema": {"item_list_count": 2}
}
```

### 7.3 Atomic removal assertions

| Removed atom for RES-TRADE-EU | Expected |
|---|---:|
| Card/list row | 0 |
| Link | 0 |
| Display-order position | 0 |
| Source/status/date metadata | 0 |
| ItemList entry | 0 |
| Hidden JSON-LD relation | 0 |

No stale HTML or Schema may survive cache revalidation.

## 8. Cross-scope Negative Vector

```json
{
  "fixture_id": "RES-G7-CROSS-SCOPE-NEGATIVE",
  "site_scope": "another-site",
  "resource_page_id": "RES-ORIGIN",
  "all_other_predicates": "PASS"
}
```

Expected result: excluded before eligibility evaluation; zero API, DOM, link, cache reuse, media binding and Schema output.

## 9. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Added deterministic H0–H5 CMS inputs, public ViewModels, DOM/Schema expectations and cross-scope negative vector | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`; documentation fixtures only |

