# DOC-000 Gate 3 Responsive and Interaction Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `DOC-000-G3-V11-WF-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION` |
| Page | `DOC-000` / `/documents/` |
| Copy authority | `DOC-000-G2-V11-COPY-02 = APPROVED / CLOSED` |
| Wireframe authority candidate | `wireframes/DOC-000_WIREFRAME_V0.4.md` |
| Scope | Responsive structure and interaction only |

## 1. Viewport contract

| Evidence viewport | Header | Hero | Steps / scenarios | Category grid | Selector / request / closing | Footer |
|---|---|---|---|---|---|---|
| 1440px Desktop | Approved 84px Desktop Header | Required 7/12 + 5/12 split | 3 columns / 3 columns | 2 × 2 | Two columns | Full desktop shared Footer |
| 768px Tablet | Approved 64px compact Header | One column | vertical steps / 2 + 1 scenarios | 2 × 2 | One column | Shared Tablet reflow |
| 390px Mobile | Approved 64px Mobile Header | One column | one column / one column | one column | one column; full-width primary actions | Shared stacked Footer |

These are evidence widths, not permission to omit intermediate responsive behavior. The layout must reflow continuously without hiding approved content or actions.

## 2. Desktop composition lock

1. At 1440px, Hero left copy and right action rail remain side-by-side.
2. The body uses the available desktop width; it does not render as a narrow mobile column.
3. Horizontal desktop structures are required for the three steps, three scenarios, selector, request explanation and closing CTA.
4. Documentation categories use a wide 2 × 2 arrangement because their approved labels are long.
5. Buyer Questions remain a single wide disclosure list for scan order and accessible focus order.

## 3. Reflow contract

- Tablet may stack the Hero because the full approved H1/body would otherwise create narrow columns; this does not alter the Desktop lock.
- Tablet scenarios use two columns plus a full-width third item; category order remains row-major.
- Mobile follows source order exactly and never uses horizontal card carousels.
- Reflow does not change CTA meaning, FAQ order, Grade order or page module order.
- No module is hidden at 768px or 390px.
- No decorative fixed height is allowed where real copy can grow.

## 4. Navigation and shared Chrome

- Consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` and its approved production Logo dependency; do not redraw or fork shared components.
- Current navigation key is `Documents`.
- Desktop current state: approved structural current treatment, no visible `CURRENT` word.
- Mobile Menu current state: approved structural marker, no visible `CURRENT` word.
- Desktop Header, Mobile Header, Mobile Menu and Footer retain `Request a Quote` → `/request-a-quote/`.
- Mobile Menu order is Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- When Mobile Menu is open, it owns focus/navigation exposure; background page content is inert or otherwise excluded from active focus order.
- Shared Footer retains final-site legal controls: Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings. DOC-000 does not define their routes or behavior.

## 5. Product Grade selector

### 5.1 Data and states

- Allowed values are the 14 exact identifiers in the approved Gate 2 copy; no default value and no descriptive suffix.
- Initial state shows prompt and helper only.
- A Continue action is available only after a valid Grade selection.
- If continuation is attempted without a valid Grade, show the approved validation message and return focus to the field.
- Selected confirmation and CTA remain adjacent in reading and focus order.
- The Grade remains editable before handoff and on the receiving Request Documents page.

### 5.2 Handoff

- Pass only Grade using `/request-documents/?product={GRADE}` or a safe equivalent state transfer.
- Do not pass documentation category, scenario, market, destination, language, availability or approval state.
- A missing/unavailable request route is a release-control failure, not a public disabled/hidden/fallback state.

## 6. Anchor, focus and keyboard order

Base focus order follows visible source order:

1. Shared Header links and RFQ
2. Breadcrumb Home
3. Hero selector anchor
4. Selector control, valid-state Continue CTA and Explore Products link
5. Six Buyer Question buttons
6. Closing CTA
7. Shared Footer links, RFQ and legal controls

The Hero and closing no-Grade actions scroll/focus the Product Grade control with a sticky-Header offset. Focus must remain visible after the jump. Accordion buttons use Enter/Space and expose expanded state. Cookie Settings behavior remains owned by shared Footer.

## 7. Pointer and disclosure behavior

- Hover/pressed feedback applies only to interactive elements.
- Scenario and category cards are informational and must not suggest clickability.
- FAQ answers expand in normal flow and may not depend on hover.
- One or multiple FAQ panels may remain open according to the final accessible component pattern; either pattern must preserve question order and state communication. Gate 3 does not select a visual animation style.

## 8. Content resilience and accessibility

- All visible copy is real COPY-02 content; no lorem ipsum or shortened mobile copy.
- Headings and card labels wrap; no ellipsis or line clamp.
- Mobile controls meet or exceed `44 × 44px`.
- No horizontal page overflow at 390px.
- Focus is visible and not color-only; control name, role, value and validation association are exposed.
- Validation is announced without relying on color or icon alone.
- Breadcrumb has the accessible label `Breadcrumb`; current breadcrumb item is not an active duplicate link.
- No image is required. No decorative image placeholder is permitted.

## 9. Inventory, restricted facts and zero-state boundary

- Public inventory is not established; therefore no file list, result count, download state or inventory empty state is part of the page.
- The four category cards describe request domains, not verified files or coverage.
- `Regulatory & Compliance Documentation` is not an approved public group and does not render.
- `Other Documentation` does not render as a Hub category.
- The one visible limitation sentence remains only in the Request explanation.
- Internal terms such as pending, blocked, route unavailable, evidence required or do not render are not Buyer Clean content.

## 10. Gate boundary

Project control passed this Gate 3 responsive/interaction contract pending explicit user confirmation. It does not approve color, typography, iconography, imagery, visual effects, Gate 4/5 assets, Schema publication, development or release.
