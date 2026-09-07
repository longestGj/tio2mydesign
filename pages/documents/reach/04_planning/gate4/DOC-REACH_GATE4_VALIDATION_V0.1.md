# DOC-REACH Gate 4 Validation V0.1

## 1. Result

`DOC-REACH-G4-VALIDATION-01 = PASS`

Project-control result: `P0=0 / P1=0 / P2=0` for the submitted Direction A. Final Gate 4 approval remains with the user.

## 2. Test-first verification

The Gate 4 visual contract was written before the Direction A HTML existed. The initial run failed on the missing candidate, establishing the RED state. After implementation, the complete contract passed.

During original-scale visual review, the separate state board was found to retain a Gate 3 heading. A new failing assertion reproduced the issue; the generator was corrected, the candidate rebuilt, all assets rerendered and the full suite passed again.

Command:

```text
node 99_workspace/DOC-REACH/gate4/build-doc-reach-gate4.mjs
node 99_workspace/DOC-REACH/gate4/test-doc-reach-gate4.mjs
node 99_workspace/DOC-REACH/gate4/render-doc-reach-gate4.mjs
```

Final result:

```text
DOC-REACH Gate 4 Direction A visual and responsive contract: PASS
```

Verified controls include:

- all eleven approved Buyer Clean modules;
- four official-source ledger rows, three legal actors, three jurisdictions and seven buyer checks;
- Direction A `regulatory-evidence-ledger` marker and defined evidence-rail treatment;
- zero buyer-visible blocked/internal phrases;
- zero horizontal overflow at 1440, 768 and 390 logical px;
- minimum 44px visible interactive targets at Tablet and Mobile;
- eight-item Mobile Menu with explicit Close state;
- Gate 4-labelled key-state board and request fail-closed evidence.

## 3. Manual visual review

- Desktop: the evidence-ledger identity is clear without mimicking an official authority; source, scope and dates read as one decision system.
- Tablet: two-column groups retain hierarchy; source dates remain attached to their source rows; no clipping or crowding was observed.
- Mobile: the full Buyer Clean copy remains in natural single-column order, actions remain readable and no horizontal overflow is present.
- Mobile Menu: shared `Logo | RFQ | Menu` chrome and approved eight-item order remain intact.
- Key states: FAQ focus, optional `Source updated` and request-route-unavailable behaviour are distinct and understandable.

## 4. Formal raster evidence

| Asset | Dimensions | SHA-256 |
|---|---:|---|
| `DOC-REACH_G4_DIRECTION_A_DESKTOP_1440_V0.1.png` | `1440×7591` | `13EDB73116AE11395BC68BD8AD3B4EA39E93D4B0ECB23554A345EFE3B5FC6117` |
| `DOC-REACH_G4_DIRECTION_A_TABLET_768_V0.1.png` | `768×9981` | `257C4798BB1B2C82B945B0F376D51B1EC4029523428A11E95D50975AA6D64AE8` |
| `DOC-REACH_G4_DIRECTION_A_MOBILE_390_LOGICAL_2X_V0.1.png` | `390 logical @2x / 780×26404` | `173EA48454E6B39E1E4F67334D7178A72287D3D383702DB0CA43E61A90DB4B64` |
| `DOC-REACH_G4_DIRECTION_A_MOBILE_MENU_390_LOGICAL_2X_V0.1.png` | `390 logical @2x / 780×26404` | `20EB4010A8DE917E69234841E47601A79D8523734D1B347CD022B303F14764B6` |
| `DOC-REACH_G4_DIRECTION_A_KEY_STATES_V0.1.png` | `1440×1000` | `BF4D9DB3AA78A00AEFEBCEEA7B6DFA69B850D759CDA2BAA5C58D7A47AFD5ED6F` |

## 5. Source evidence

| File | SHA-256 |
|---|---|
| `99_workspace/DOC-REACH/gate4/DOC-REACH_GATE4_DIRECTION_A_V0.1.html` | `345664FB28EC3DD0B14EB2109FED5BF41D90F252C061A19D3B93716F13AAEA59` |
| `.superdesign/tmp/doc-reach-gate4-direction-a-v0.1.html` | `345664FB28EC3DD0B14EB2109FED5BF41D90F252C061A19D3B93716F13AAEA59` |
| `99_workspace/DOC-REACH/gate4/build-doc-reach-gate4.mjs` | `07B5B6AA70E2ED399927E7B8948D54DACFAEE9045520FC235849A32AAF57E017` |
| `99_workspace/DOC-REACH/gate4/test-doc-reach-gate4.mjs` | `42DE33CC88B39F1D052F8F726991ED8B7F4B6C5ACE275D13474F596AB0B0298F` |
| `99_workspace/DOC-REACH/gate4/render-doc-reach-gate4.mjs` | `1F1EAA9DC3B02A093527453EBB6943FD1241D73379D27F22E6C1C44350DB9F86` |

## 6. Superdesign continuity

- Project: `ab00e0d4-ad19-44d1-8825-84dc020f3cb3`.
- New Gate 4 draft: `02c20623-7f87-4edf-b87e-24ef2137d028`, version `v1`.
- Approved Gate 3 draft remains unchanged and recorded as the baseline.
- Server-fetched and local candidate hashes match exactly.
- Production primary and reverse Logo URLs remain present.

## 7. Boundary

This verification proves the Gate 4 direction and representative responsive/key states. It does not constitute Gate 4 user approval, Gate 5 approval, implementation, deployment, publication, DNS or indexing authorisation.
