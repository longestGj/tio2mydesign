# CONTACT-001 Gate 4 Complete Visual Specification V0.1

Date: 2026-09-10. Workset: `CONTACT-001-G4-WORKSET-20260910-01`. Review request ID: `CONTACT-001-G4-EXEC-SUB-20260910-01`. Status: `COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

## Frozen identity and method

| Field | Value |
|---|---|
| Editable source | `CONTACT-001_GATE4_COMPLETE_VISUAL_V0.1.html` |
| Source identity | 35,914 bytes / `6D4F4AAF1300B75A384B18E011DEE21D43C5ED551596C6D9C524E689F3BFF78E` |
| Bundle | `CONTACT-001-G4-BUNDLE-V0.1-6D4F4AAF` |
| Direction checkpoint | `VISUAL_DIRECTION_CHECKED`; internal 4A only |
| Complete preflight | 50/50 responsive/interaction assertions plus 24/24 visual/copy/contrast assertions |
| Formal exports | 11 approval-core assets from the frozen source |
| Methods | Brand Applied Visual Design V0.4, Full Page Visual Composition V0.4, Layout & Interaction Verification V0.8 |
| Paid Superdesign | Not used |

## Visual direction

The page presents general contact as a calm, high-trust utility rather than a commercial landing page. A Deep Navy hero concentrates the page identity and primary general-inquiry action. Verified facts remain on white cards. Dedicated Quote/Documents/Sample routing sits on Soft Background to make the task split unmistakable without competing with the hero. The form returns to a bright, elevated surface with persistent labels, clear privacy context and explicit bounded states.

Decoration is limited to a low-contrast, CSS-only orbital/grid motif in the hero. It carries no factory, certification, location, delivery or service claim and does not introduce a media dependency.

## Applied visual rules

| Role | Actual treatment |
|---|---|
| Page background | White; dedicated-routing section `#F5F8FB`; form section fades from white to the same soft neutral |
| Hero | Solid Deep Navy `#031B3A`; white H1; supporting text `#D4E0EB`; restrained teal/blue decorative particles and rings |
| Headings | Inter 700, Primary Navy `#062B5B`; desktop H1 68px maximum, tablet 54px, mobile 43px; H2 40/36/31px |
| Body | Inter 400, `#334155` or darker contextual neutral; 1.6–1.72 line height |
| Primary action | Accessible Teal `#008078`, white 700 text, 6px radius, ≥52px height; hover `#006B65` |
| Secondary route actions | White surface, 2px Accessible Teal border/text, 6px radius, ≥50px height; subtle light-teal hover |
| Contact/route cards | White, `#D9E2EC` boundary, 12px radius, subtle Navy shadow and 4px Accessible Teal leading rule |
| Form | White, 12px radius, restrained Navy shadow; inputs 50px minimum, persistent labels/help; Message 190px minimum |
| Focus | 3px Accessible Teal outline plus 4px low-opacity teal halo on form controls; owner focus treatment retained in shared chrome |
| Error/failure | `#A32424` on `#FFF2F2`, 2px boundary, text plus shape—not color alone |
| Success | `#17633A` on `#EDF8F1`, 2px boundary, bounded confirmation panel |
| Logo | Approved primary SVG at 180×60 / 120×40 and reverse SVG on Deep Navy Footer; no modification or page-specific asset |

Measured text contrast samples all meet 4.5:1: hero H1 `17.19`, hero lead `12.82`, white on Accessible Teal `4.82`, Accessible Teal on white `4.82`, Privacy link on light surface `4.60`, hover white on deepened teal `6.38`; error, failure and success state text also pass in the formal state audit.

## Responsive and state specification

| View/state | Locked visual behavior |
|---|---|
| 1440 | 84px shared Header; wide Deep Navy hero; details/routes each three columns; short fields two columns; Subject/Message full width; Footer closes page |
| 768 | 64px shared Header; Menu pattern available; cards retain Gate 3 `2 + 1`; form remains two columns; long entity/address copy wraps without truncation |
| 390 | 64px shared Header; all page cards and fields single-column; primary actions use available width; legal row wraps in owner order; no horizontal scroll |
| Menu open | 768 and 390 use owner Menu; About is active, no `CURRENT`, background inert, persistent RFQ remains visible |
| Focus | Business Email shows actual keyboard focus without layout shift |
| Validation-long | Six applicable errors, summary first, real long values, preserved field context and no clipped text |
| Submitting | Values remain visible/read-only; action reads `Sending your inquiry…`; duplicate action blocked |
| Failure-preserved | Error panel and `Try again` precede the unchanged six values |
| Success | Bounded confirmation replaces the cleared/hidden form fields; no response-time or fulfilment promise |
| Restricted contact | Manufacturing Site and its referring sentence are both absent; remaining two verified cards close naturally; no phone/WhatsApp/empty slot |

## Gate 3 and shared-owner parity

Visible text was compared between Gate 3 and Gate 4 for default, restricted, validation, submitting, failure and success at 1440, 768 and 390: 18/18 exact normalized parity. An initial page-local `text-transform` made contact-card labels visually uppercase; it was removed before freeze and all evidence was regenerated. No Buyer Copy changed.

Header, Footer and Consent dialog markup is identical to the approved Gate 3 shared assembly. Gate 4 adds no Contact navigation item and does not restyle shared owner selectors. Shared RFQ instances remain permanent `/request-a-quote/` actions. `info@tio2malaysia.com` remains plain text; no `mailto:`, Phone, WhatsApp or excluded mailbox exists.

## Evidence roles and unresolved implementation work

`approval_core` contains the three formal full pages and eight formal state images. `diagnostic_support` contains the 17 original-resolution reading segments, runtime measurements, contrast/copy audit, preflight state captures and the manual visual readback. Temporary render/audit scripts remain in `99_workspace` and are not design-source dependencies.

The production form processor/receiver, authenticated result, spam controls, storage/retention, analytics/Consent, route readiness, real devices and assistive technology remain Gate 6/8/9 work. The visual candidate does not present them as implemented.
