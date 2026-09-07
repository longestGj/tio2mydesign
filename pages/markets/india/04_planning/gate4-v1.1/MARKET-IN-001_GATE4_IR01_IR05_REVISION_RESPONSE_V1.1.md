# MARKET-IN-001 Gate 4 IR01–IR05 Revision Response V1.1

Date: 2026-09-07. Status: `DRAFT_FOR_INDEPENDENT_REREVIEW`. This revision responds to the five required findings in independent report V1.0; the V1.0 candidate and report remain unchanged as history.

| Finding | Revision | Author acceptance evidence |
|---|---|---|
| `IN-G4-IR01` | Restored linear IN-02 and IN-05 relationships; 768 application contexts again use one row per context with a 175px heading column and remaining body column; 390 remains stacked. | `diagnostic_support/ir-acceptance.json`: relationship PASS at 1440/768/390; full-page evidence reread. |
| `IN-G4-IR02` | Applied border-box sizing to the document index and reserved the mobile shadow inset. | 390 painted block fits the composition; no hidden edge in the final full page; targeted clipping check PASS. |
| `IN-G4-IR03` | Placed the approved `#008078` links on white, expanded line spacing, used isolated 44px inline-flex targets and an inset focus treatment. | Both links at all three widths measure 4.8177:1; six 44×44 pixel hit maps have zero misses; focus remains inside each link box. |
| `IN-G4-IR04` | Removed the Header shadow and all page-owned Header/Footer RFQ hover, transform, shadow and transition changes. | Computed shared styles match Gate 3 owner-consumer output at all three widths. |
| `IN-G4-IR05` | Replaced the incomplete inventory with workset `IN-G4-WORKSET-V11R2` / freeze `IN-G4-V11R2-SOURCE-01`. It binds 21 exact inputs, four durable dependencies, source, render conditions, eight formal assets, operations and 17 readable segments. | `approval_core/export-inventory.json`; author Finding state records the five targets as resolved pending independent rereview. |

The revised source is `MARKET-IN-001_GATE4_COMPLETE_VISUAL_V1.1.html`, 29,205 bytes, SHA-256 `fbad54492a465484a7a4eac05e5a402a8d399722b79d814b369d70a9c6032efe`. Three complete pages, two Menu states and three Cookie states were freshly rendered. Runtime heights are 4617px at 1440, 5253px at 768 and 6793px at 390 logical @2x; page errors and horizontal overflow are zero; minimum visible control remains 44×44px.

The author also raised the CSS-generated supporting labels/counters to 14px. This was a nonblocking observation, not a new content or structural change.

Author Finding count after targeted revision: 0. Independent rereview and user decision remain required; Gate 4 is not closed and Gate 6–10 remain unauthorized.



