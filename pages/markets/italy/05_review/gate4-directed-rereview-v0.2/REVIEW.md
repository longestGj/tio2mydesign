# MARKET-EU-IT Gate 4 Directed Independent Rereview V0.2

Date: 2026-09-07. Review ID: `IT-G4-DIRECTED-REREVIEW-20260907-02`.

Status: **`PROJECT_CONTROL_REVIEW_PASS`**. Required Finding: **0**. Prior Finding **`IT-G4-PC-R01` is CLOSED** for workset `IT-G4-COMPLETE-20260907-02` at freeze `IT-G4-FREEZE-20260907-02`.

## Decision

The directed remediation satisfies every acceptance condition in `IT-G4-PC-R01`. The V0.2 ledger records complete, decoded physical dimensions and DPR for all 56 inherited visual assets; the 1440 direction sample is correctly recorded as `1440×436` at DPR 1; all 18 Request Documents and Federchimica normal/hover/focus records carry the expected physical dimensions and DPR 1. Every PNG remains byte-identical to the V0.1 evidence package, and the candidate HTML remains byte-identical to the source previously reviewed.

Exactly 19 evidence records changed from V0.1: one direction-sample height and the three physical identity fields on 18 state records. No other evidence field, page source, approved content, URL, module, visual rule or shared contract changed. The repaired freeze is eligible for the separate Project Control closure action under the existing standing authority. This review does not itself approve or close Gate 4 and does not start Gate 6.

## Independent identity recomputation

| Object | Recomputed result |
|---|---|
| Candidate HTML | 28,199 bytes / `ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615` |
| V0.2 input index | 13,388 bytes / `912a4992584b9eda13cfed869338b77eb86c269783046caa0e07ef84cc1e6e9a` |
| V0.2 workset | 891 bytes / `8b6184506c2aad2f2c19fe2a89443c0da4e007fbf9472c6f3fd512e598c96a0c` |
| V0.2 freeze | 16,133 bytes / `a5b0e25d7d294f5b486594a70b19fe7407b195180940daf7258f01f6aee90410` |
| V0.2 evidence index | 37,035 bytes / `deba8a2d8c1e10970dfc2d867fc7d694c7c08475e8960e37bd6b7b4fcb0fd116` |
| V0.2 image verification | 32,124 bytes / `0ed8500e59e8592808b110026514ab4500df7c34a45fa994fb7d9636ff142d89` |
| Executor remediation runtime | 10,670 bytes / `80ca0ee99fe9d1e78ed98fff26283920e62ee75ba33fdb82cd0d83fae4e76320` |

Independent recomputation returned:

- frozen input identities: `60/60 MATCH`;
- freeze copies of those input records: `60/60 MATCH`;
- frozen local dependencies: `2/2 MATCH`;
- V0.2 source/freeze/evidence/runtime/verification pointer bindings: `14/14 MATCH`;
- inherited executor PNG byte and SHA identities: `56/56 MATCH`;
- evidence-index physical width, height and DPR completeness: `56/56 PASS`;
- decoded PNG dimensions against evidence declarations: `56/56 MATCH`;
- verification-ledger records against files and evidence records: `56/56 MATCH`;
- intended V0.1→V0.2 field changes: `19/19`, with `0` unexpected changes;
- V0.2 full-page regression image identities and decoded dimensions: `3/3 MATCH`;
- candidate source inheritance from V0.1: `BYTE_IDENTICAL`.

Machine audit: `identity-audit.json`, 85,073 bytes, SHA-256 `548ad02a93a683d47ae4889b5e66481b426ba0f5d6d4805437bcfbd07139c81a`.

## Targeted visual and runtime rereview

I independently loaded the frozen HTML with external HTTP(S) blocked and rerendered the complete page at 1440×900, 768×900 and 390×844. All three renders were opened from the Header through the final legal footer. The independently produced PNGs are byte-identical to the executor's three V0.2 regression images.

The independent rerun passed `18/18` checks: seven modules in approved order, one H1, 19 body links, COO limitation adjacency, neutral Grade language and unknown path, Italy destination fields, EU-owner and RFQ boundaries, no buyer-visible `CURRENT`, no target below 44 px, no horizontal overflow, no detected text clipping, the footer at the document end, and no page, console or external-network error. Machine evidence: `independent-runtime.json`, 5,543 bytes, SHA-256 `16671945e1fdeaaa10f76498ed4c9cd1efef56d14c2b66813bf3548059adbcad`.

I also opened all 18 inherited state crops for Request Documents and Federchimica at 1440, 768 and 390. Normal, hover and focus states remain geometrically stable; hover differs from normal in every width/target pair; the 3 px focus outline is visible and uncropped. Their decoded dimensions are:

| Logical width | Request Documents N/H/F | Federchimica N/H/F |
|---:|---:|---:|
| 1440 | `980×120`, DPR 1 | `1156×120`, DPR 1 |
| 768 | `724×120`, DPR 1 | `700×120`, DPR 1 |
| 390 | `370×120`, DPR 1 | `346×120`, DPR 1 |

Targeted visual readback count is `21/21`: three independent complete-page renders plus 18 N/H/F state crops. The executor's independent-to-this-review remediation runtime also remains `20/20 PASS`.

## Contract continuity and scope

The candidate source SHA and all 60 frozen upstream identities match. That preserves the previously accepted exact Buyer Clean B/link order, seven-module page responsibility, COO limitation adjacency, neutral Grade path, Italy destination and EU-owner boundaries, Documents/Sample/RFQ contexts, shared Chrome and legal assembly, and Page ID/URL contract. V0.1's failed ledger remains unchanged history; V0.2 supersedes it only as the corrected submission freeze.

The reviewer did not produce the Italy Gate 4 candidate or its V0.2 metadata remediation. The prior executor self-check is not used as independent acceptance evidence.

Later production routes and receivers, real devices, other browser engines, native zoom, screen-reader speech, live consent persistence, development, deployment and publication remain later-stage scope. They do not reopen `IT-G4-PC-R01` and are not started here.

## Finding disposition

`IT-G4-PC-R01`: **CLOSED**. Re-review acceptance condition met in full. New Required Findings: **0**. Final rereview state: **`PROJECT_CONTROL_REVIEW_PASS / READY_FOR_SEPARATE_PROJECT_CONTROL_CLOSURE`**.
