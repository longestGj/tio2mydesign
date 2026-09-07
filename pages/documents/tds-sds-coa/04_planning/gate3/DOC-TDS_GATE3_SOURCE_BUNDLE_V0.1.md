# DOC-TDS Gate 3 Source Bundle V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Date | `2026-09-04` |
| Status | `ACTIVE GATE 3 GENERATION INPUT` |
| User-approved direction | `APPROACH A / DECISION-FIRST` |
| Superdesign project | `f0b8ff8d-3fde-4581-b3f7-2ea4a63a4cc1` |
| Canvas | `https://superdesign.dev/teams/748bead0-f9b5-4101-ae48-150238cc276b/projects/f0b8ff8d-3fde-4581-b3f7-2ea4a63a4cc1` |
| Draft model | `gpt-5.6-sol` |
| Model rationale | Flagship complex-UI model selected for a long responsive page with content, interaction and evidence constraints |
| Gate ceiling | Gate 3 only |

## 1. Text and design context

| Path | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `docs/superpowers/specs/2026-09-04-doc-tds-gate3-wireframe-design.md` | 9983 | `ED914575D1AE68A9DFBFDEBF4972A8BE1C920F95E77BA4099308E19982A70FB3` | User-approved Gate 3 design specification |
| `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` | 13143 | `2F4B929FDE72831909B187E5F87E678E59A16AC94D06C6499CABD1A67EF3F376` | Current approved Buyer Clean and internal request/evidence controls |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | 7235 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | Shared Chrome contract |
| `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` | 2310 | `C1F0011408ED1D87CFF6D36C11F7E9812CC9A803431A3F7030C771FAF41BF633` | Current approved Footer legal/utility row |
| `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | 11671 | `75CF7BBD306A4B2BF2662414DFB28813B094B8552AF8A7FE54231F3837E524EC` | Approved visual direction; used only as future styling boundary at Gate 3 |
| `.superdesign/design-system.md` | 764 | `409EE6A7789F341A1A4D92049895126B628FFFD8C519D41C3A46520EE9F4ED48` | Superdesign project design-system context |
| `.superdesign/init/components.md` | 303 | `360D2C710F88D6CAFF4F396BB0C02C4BF24D5B5AE552F964A1E2568BF507CA7F` | Existing component context |
| `.superdesign/init/layouts.md` | 42032 | `740B128287A15654D121D04386F06FD9A36DC8E8020BD8F6364CC26F15667A78` | Existing responsive shell/layout context |
| `.superdesign/init/routes.md` | 556 | `49E0752F92EEF764B75374737AB5F4B2267E5ABF52CEAB53B4DAE42C66E539FC` | Route context |
| `.superdesign/init/theme.md` | 962 | `96621FB2789ABAA9DCA0A34549A07D40A78D5293ED0E26DD273CA1292ED255AE` | Theme tokens |
| `.superdesign/init/pages.md` | 752 | `0AA1D4FF2ADA35201A9E383992BEBC8638A8205829FFC079C478BD6D23606E1F` | Existing page inventory |
| `.superdesign/init/extractable-components.md` | 1186 | `0BDE3E4DC1C4DC5C27B8C55E3E30B87E619ACD18AAAAAEB9C295CF16C9C70EAC` | Reusable-component candidates |
| `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | 8090 | `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894` | Production Logo authority |

## 2. Uploaded Brand Assets

| Asset | Local path | Bytes | SHA-256 | Superdesign asset key |
|---|---|---:|---|---|
| Light-surface horizontal Logo | `brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg` | 4342 | `EEED3A758E7AE1B847238D1C88E86EEE7A8E67B863969AF4D286747E9A72487C` | `brand-logo-candidates-v0.1-tio2-malaysia-primary-horizontal-v0.1.svg` |
| Dark-surface reverse Logo | `brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg` | 2725 | `7CFAEAFA02AC8469A006C9489DB2F92B15B2621E4151B04EFE1B30FC734C1B5E` | `brand-logo-candidates-v0.1-tio2-malaysia-reverse-monochrome-v0.1.svg` |

The assets are byte-identical to the Production SVG Logo Manifest V1.0 hashes. Historical PNG Logo material is excluded.

## 3. Authority order

1. User-approved Gate 3 design specification.
2. Current approved Gate 2 Buyer Clean V0.3.
3. Global Chrome V0.5 and Production SVG Logo Manifest V1.0.
4. Visual Standard V1.0.
5. Superdesign design-system and init context.

No uploaded or generated artifact may override the approved content, evidence, route or Gate ceiling.

## 4. Generation route record

- Superdesign authentication, project creation, model discovery and Brand Asset uploads succeeded.
- The first draft-generation call using `gpt-5.6-sol` was blocked before draft creation because the account returned `out of credits`.
- No generated Superdesign draft id or version exists for this target.
- The approved design was therefore implemented as a deterministic local HTML/CSS wireframe and rendered with the existing local browser runtime.
- The Superdesign project and uploaded production Logo assets remain recorded for provenance; they are not represented as proof of a generated draft.
