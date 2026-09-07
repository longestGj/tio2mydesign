# Legal / Privacy CONV-DOC Post-Gate 9 Targeted Read-Only QA Evidence V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `LEGAL-PRIVACY-G9-CONV-DOC-PARITY-PCR-02` |
| Review date | 2026-09-05 |
| Scope | `LEGAL-PRIV-EN`, `LEGAL-PRIV-MS`; V0.2 Buyer-visible runtime parity only |
| D16 implementation commit | `f3409f1d4b2455e99fcbc1881e73fc90df049100` |
| D16 parent | `33fe5fa45a4339a0679a79e99cacfb5883f27f0d` |
| Review mode | D23 independent read-only inspection; no D16 edit |
| Result | `PASS / ZERO_P0_P1_P2` |
| Gate 10 / deployment / publication / indexing | `NOT_AUTHORIZED` |

## 1. Authority and implementation identity

The reviewed D16 commit exists at the checked-out HEAD and changes twelve files: the EN/BM policy contract, four targeted test files, one runtime evidence record and six EN/BM browser screenshots. `git diff --check f3409f1^ f3409f1` returned exit code 0.

The reviewed implementation binds the two Privacy records to:

| Page | Approved source SHA-256 | Runtime normalized SHA-256 |
|---|---|---|
| `LEGAL-PRIV-EN` | `896A4CBCEE2CF5A9B19C9B65B62B7C247668A3C5C84DA17E0E61CB0B8E556A37` | `143242D903FD9AA09D8C170340BA06211803BB35A7207269B955D63A328E22AA` |
| `LEGAL-PRIV-MS` | `00FB18D246D7FFEA787CDB9BE06EF3B74D547607D62F4E846EFBF2DD0E4FB594` | `B47CEB633A0517544469EF3047726522A281D594C3403546F771D375D993AB49` |

D23 independently extracted the Buyer-visible source sections, normalized line endings and compared them with `tio2-my-legal-pages.json`. EN and BM were both byte-equal after that normalization.

## 2. Data-flow and leakage review

Independent static/runtime checks found:

- EN Request Documents fields: exactly `8`;
- BM Request Documents fields: exactly `8`;
- upload, telephone/WhatsApp, Website and Market/Destination fields in each Request Documents block: `0`;
- rendered email identities across both policy contracts: only `info@tio2malaysia.com`;
- access-key environment identifier or `access_key=` disclosure in Buyer-visible copy: `0`;
- internal release-control content in initial HTML/browser body: `0`;
- Sample is the only future-form disclosure; Request Documents is current;
- the 30-day dashboard visibility and physical retention up to three years wording remains present;
- browser-direct Free-plan fixed-endpoint and non-guarantee wording is present in both languages.

No Access Key value or provider-bound recipient address was printed, stored in this evidence or rendered by the reviewed policy runtime.

## 3. Fresh D23 verification

| Check | Fresh result |
|---|---|
| Legal unit/integration/infrastructure | `6 files / 21 tests PASS` |
| TypeScript | `tsc --noEmit PASS` |
| Changed-file ESLint | `PASS / 0 errors` |
| Next production build | `PASS / 35 of 35 static pages generated`; both Privacy routes emitted |
| Source/runtime normalized parity | `EN=true`; `BM=true` |
| Request Documents boundary | `EN 8 / forbidden 0`; `BM 8 / forbidden 0` |
| Identity/leakage | only `info@tio2malaysia.com`; key identifier leak=`false` |
| D23 read-only browser matrix | `2 languages × 3 widths = 6/6 PASS` |
| Project-control full Legal Playwright | `13/13 PASS / 0 failed / exit 0`; explicit `127.0.0.1:3004` binding |

The browser matrix used 390, 768 and 1440 CSS-pixel widths. A D23-owned temporary read-only GraphQL proxy supplied only the checked-in Legal V0.2 contract and forwarded other queries to local WordPress. The normal Next.js query, DTO, rendering and initial-HTML path was exercised without a WordPress write. Checks covered HTTP 200, language, update date, disclosure lead, exactly eight fields, prohibited-field absence, key/recipient leakage, internal-control exclusion and horizontal overflow.

## 4. Browser evidence hashes

| Asset | SHA-256 |
|---|---|
| `legal-priv-en-390.png` | `862047B81186201471781A8AC661675CDFB5B6B792C24A3E2B3E0861EA774FD3` |
| `legal-priv-en-768.png` | `8C47A093EE7BBF31C274933EA5D4E359B7F6EB1E4DF40DFF11C5039DC9E48FF2` |
| `legal-priv-en-1440.png` | `5B10A6B8490D8A7D9719BEE424E135799A15F5A01D6B5EAD34C2E4EF33154494` |
| `legal-priv-ms-390.png` | `AF7D8E5D595DFFBC973BE5FF5C51FE844A8A7780D3E2B5AD7A4476C2F77BB1C7` |
| `legal-priv-ms-768.png` | `77DC5F7AC7510B9AC4658A5C4558BE91F9FBC28F6FB550FA3731DCDA8F3B80E8` |
| `legal-priv-ms-1440.png` | `E8AD5FE2F40B24F11F0C6EE228036DBF33A4B2BEC87FF719341AE6BB26924F90` |

The EN mobile and desktop assets were also visually inspected in D23. The approved shared Chrome, readable single-column mobile layout and desktop content/left-rail structure remain intact.

## 5. D16 evidence and hash correction

| Evidence | SHA-256 | Result |
|---|---|---|
| `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/docs/verification/legal-privacy/LEGAL_PRIVACY_CONV_DOC_V02_RUNTIME_PARITY_2026-09-05.md` | `985D2E644C869AFC3A79E169E8C888DD1D0EC77802E519CECDEA880DAFF0BAD3` | matches commit `f3409f1` |
| `D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/docs/verification/conv-doc/CONV-DOC_REAL_WEB3FORMS_E2E_EVIDENCE_2026-09-05.md` | `DC8633FE1CB8975964DE2B99BD2C1901EECA5AD5AC4910C3C3ED6AD45D62D9DA` | provider accepted; mailbox receipt not proved |

The initially transmitted runtime-evidence hash `DBF521705635165E1354EA42C1AE5B6EAD2EBBC9756AF7721144193FDFB5FC6D` was a pre-finalization hash from before the last verification-table row was added. D16 issued a correction after read-only recomputation. That value is superseded; `985D2E...` is the committed-file authority.

The first D23 snapshot found the D16 worktree clean. During later independent checks, another active D16 task temporarily regenerated five out-of-scope Cookie/Consent screenshot evidence files. Every file in commit `f3409f1` reviewed for this Privacy parity scope still matched HEAD. The owner task then cleaned its temporary state. Final independent inspection confirmed `HEAD=f3409f1...`, zero Git status lines and zero listeners on the temporary review ports 3004 and 8082.

## 6. CONV-DOC provider evidence

The current CONV-DOC chain is:

- Free browser-direct receiver: `c2a62677e6781ad21e9a05ee9e90f419ec61a167`;
- shared Malaysia Web3Forms Key wiring: `0b42ccfbb41f3e487c64dc4173dec5d608ed1141`;
- one real provider-accepted submission evidence: `33fe5fa45a4339a0679a79e99cacfb5883f27f0d`;
- Privacy runtime parity: `f3409f1d4b2455e99fcbc1881e73fc90df049100`.

The real test proves HTTP 200, `application/json`, `success=true` and the page success state. It does not prove that the message appeared in the recipient mailbox. Mailbox receipt remains a user-side external confirmation.

## 7. Decision boundary

The targeted V0.2 Privacy runtime parity has no open implementation P0, P1 or P2. Qualified BM legal/meaning-equivalence review, final qualified legal review, production host/provider/storage/network inventory, operational-retention parity, production WordPress application/read-back and the external mailbox-receipt confirmation remain outside this targeted implementation pass.

No deployment, production CMS write, publication, DNS, indexing or Gate 10 action was performed or authorized.
