# RES-000 Root Page Hero · Targeted Gate 4 Binding V1.1

## Status and preservation

- Record ID: `RES-ROOT-HERO-G4-BINDING-V1.1`
- Candidate ID: `RES-ROOT-HERO-G4-CANDIDATE-02`
- Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`
- Supersedes for this targeted candidate only: V1.0, retained as history

V1.1 repairs the V1.0 independent-review findings without replacing the Gate 5 Manifest, modifying H0 inventory, or authorizing Gate 6/8, D16, release or publication.

## Targeted correction record

| Finding | V1.1 correction |
|---|---|
| P0 Mobile Global Chrome | At 768/390, the operable Menu exposes the fixed `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote` order. It has `aria-expanded`/`aria-controls`, Resources is the one active mobile link, closed content is hidden/inert, and Escape closes and returns focus. Desktop remains unchanged. |
| P1 filled CTA token | `Explore Procurement Resources` retains exact `#research-paths` behavior and now uses `#008078` with a white label and visible white focus outline. |
| P1 H1 layout | The 390px H1 removes forced width and `scaleX`; it is an undistorted 36px/700 normal layout using explicit, legal mobile letter-spacing only, three lines, and no overflow/clipping. |
| P1 decorative semantics | The visible three-path graphic is now a non-landmark `div aria-hidden="true"`; it exposes no accessible name or decorative endpoint text. |
| P2 media breakpoint | The technical illustration remains visible above 900px (including 901/1023) and hides at `≤900px` with zero reserved space. |

## Unchanged binding

The exact breadcrumb, eyebrow, H1, intro, H0 CTA destination, contained Deep Navy Shell, no Hero left rule, H0 no-inventory state, direct `Choose the right research path` transition, three approved panel bodies, no Featured/Latest/ItemList/RES-ORIGIN content, SEO/GEO/Schema, relationship holds and current Global Chrome ownership remain as V1.0.
