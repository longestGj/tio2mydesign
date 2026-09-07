# DOC-COO Gate 4 targeted revision instruction V0.1

2026-09-07. Decision ID `COO-G4-REV-01`. Root controller under G4-8PAGE-SERIAL-01. Current Gate 4 remains in progress under Manifest V0.8. This is a bounded repair instruction, not page or Gate approval.

## Evidence and decision

V0.1 source freeze COO-G4-V01-SOURCE-01 remains immutable. The author completed and submitted a failed self-check; the independent reviewer completed all 32 formal images and the page's source/runtime discovery and saved [initial independent observations](gate4-project-control-v0.1/independent-review/initial-observations.md), before comparing author conclusions. Root also viewed all 32 images and independently confirmed the two issues; see [root readback](gate4-project-control-v0.1/controller-visual-readback.json). Root's 97 identity records match and original main/style/script remain identical to G3. Identity integrity does not override the demonstrated rendering failure.

The independent reviewer is completing final author/inventory/shared-link checks and its formal report. No other substantive visual defect was found in its completed discovery. The following two stable findings define the targeted repair; any additional material final-review finding must be handled before a new freeze.

| Finding | Required repair and acceptance |
|---|---|
| `COO-G4-IR01` / author `COO-G4-AUTHOR-01` | Both long official-source links must remain fully readable in actual normal, hover and keyboard focus at 1440/768/390. Prevent background/underline/focus from crossing or obscuring neighboring copy, source dates or limitations. Retain every B word, punctuation, sentence order and exact URL. Targeted source-link flow/spacing changes are permitted to provide a real 44×44 hit region; enclosing multiple line fragments or overlapping padding is insufficient. Verify client rectangles and actual hit points, ≥4.5 text contrast and ≥3 focus contrast, no clipping/orphan punctuation or overflow. Removing only hover background is insufficient if focus/hit geometry remains wrong. |
| `COO-G4-IR02` / author `COO-G4-AUTHOR-02` | Keep V0.1 originals and explicit errata. New normal Footer images must be captured with no active hover/focus and the actual state verified. Any retained focus example must be separately and accurately labeled. Do not change the shared Footer default appearance to compensate for a capture-state mistake. |

## New version and scope

Create only this page's `04_planning/gate4-v0.2/`, preserving V0.1 as failed history. Preserve all approved six modules, three-type equal comparison and responsive pairings, four context details, origin/traceability distinction, five preparation items, complete dates and qualifiers, two origin-document prefill actions and hidden DOC-COO source. Keep shared Consumer V0.2 unchanged. No new fact, image, form, URL, field, navigation or receiver behavior.

Use a targeted page CSS/markup solution to the two long source links. Small resulting paragraph/section height changes are within this visual repair scope; record them explicitly rather than claiming all G3 geometry remains identical. Keep the rest of the page stable and test affected neighbors. No change to approved copy or module order is authorized.

Before freezing, actually inspect both source links in all three states at all three widths, including adjacent text and real hit areas; check genuine normal Footer captures. Then freeze source/dependencies, export formal evidence with exact viewport/DPR/state/hash metadata, actually view all new formal images, self-check and submit for independent targeted re-review plus relevant content/shared/interaction regression. Do not repeat checks only to increase counts.

Freeze this instruction and the completed independent report as stable inputs. Dynamic Progress/Status/Index remain excluded. The author cannot close findings or approve Gate 4 itself. Root will record closure only after independent acceptance and final identity/visual review, using the user's existing preapproval without another approval request. Netherlands remains queued until DOC-COO closes.
