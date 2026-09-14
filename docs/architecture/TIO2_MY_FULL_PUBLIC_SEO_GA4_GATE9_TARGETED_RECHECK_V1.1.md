# TiO2 Malaysia Full Public SEO / GA4 / GSC Gate 9 Targeted Recheck V1.1

## Review identity

| Field | Value |
|---|---|
| Review ID | `TIO2-MY-G9-PCR-03` |
| Date | `2026-09-13` |
| Site scope | `tio2-my` |
| Branch | `codex/tio2-my-full-public-seo-ga4` |
| Baseline | `c5976a23ab1dc93618b0c79008c02fda69ed9f5a` |
| Implementation | `975a573ec09f4dcb0aca46422b2e9e2e4d20c742` |
| Evidence commit | `2a376883d88afc48179c6070be5fa374236b7b10` |
| Reviewed HEAD | `b52702cf52a1eb6a8292db160920158a3def3eed` |
| Build ID | `tio2-my-seo-ga4-975a573e` |
| Runtime | `http://127.0.0.1:3123` |
| CMS GraphQL | `http://127.0.0.1:8280/graphql` |

## Outcome

- `RECHECK_SCOPE_STATUS = PASS`
- `PAGE_GATE9_STATUS = NOT_PASS`
- `INTEGRATION_STATUS = BLOCKED_PENDING_REAL_GTM_GA4_AND_ATOMIC_LEGAL_ACTIVATION`
- `RELEASE_STATUS = NOT_AUTHORIZED`
- `GATE8_RETURN_WORK = STOP`

The single P0 from V1.0 is closed. UK and Brazil no longer contain the stale `checked on 7 September` propositions. All four Trade detail payloads and the Resource Hub are bound to the approved 13 September 2026 fact closure in source, isolated CMS output and held Next runtime.

This targeted PASS does not grant Gate 10, merge, deployment, publication, DNS, GSC verification action or indexing.

## Independent verification

- Source scan: zero occurrences of `checked on 7 September`, `checked on 2 September`, `7 September 2026` or `2 September 2026` across the four Trade payloads and Resource Hub.
- Targeted Vitest rerun: `6 files passed / 36 tests passed`.
- Runtime Playwright rerun: `4 / 4 passed` against the held Build.
- CMS audit: four Trade records publish with `reviewDate=2026-09-13`; old checked-date phrases absent; Resource Hub projection valid.
- Runtime audit: four detail pages and Hub expose the 13 September closure and reject old checked-date phrases.
- Original-detail visual inspection: UK page, Brazil page and Resources Hub 768 px are complete and readable; no new blocking visual defect found.
- GSC root file: HTTP 200, 53 bytes, SHA-256 `23C09B78F763724DDDB0470B133ACC3F3D2129B663209E6B8007C290D2B0B32D`.
- Git worktree was clean at reviewed HEAD.

The standard Manifest validator reports only the known `git_head` self-reference mismatch: the declared evidence commit precedes the final Manifest documentation commit. Branch, ancestry, clean state, Build identity, evidence existence and hashes otherwise pass. This is retained as an evidence-tool limitation and does not reopen the corrected Trade implementation.

## Remaining integration and release item

The held candidate intentionally keeps optional Analytics inactive. Full Gate 9 remains open until the project receives and verifies:

1. the real site-specific GTM Container ID;
2. the matching GA4 Measurement ID and container-to-destination mapping;
3. the production build bound to both identifiers without direct-gtag bypass or cross-scope reuse;
4. atomic active Privacy EN, Privacy BM, Cookie Policy and Cookie Settings content;
5. clean-browser default-denied, Necessary only, Accept analytics and withdrawal evidence;
6. GA4 page-view and three provider-accepted events with exact cardinality and no PII.

## Gate 8 pass notice

```json
{
  "gate8_pass_notice": {
    "notice_type": "TARGETED_SCOPE_PASS",
    "recheck_scope_status": "PASS",
    "page_gate9_status": "NOT_PASS",
    "integration_status": "BLOCKED_PENDING_REAL_GTM_GA4_AND_ATOMIC_LEGAL_ACTIVATION",
    "release_status": "NOT_AUTHORIZED",
    "implementation_commit": "975a573ec09f4dcb0aca46422b2e9e2e4d20c742",
    "evidence_head": "2a376883d88afc48179c6070be5fa374236b7b10",
    "reviewed_head": "b52702cf52a1eb6a8292db160920158a3def3eed",
    "build_id": "tio2-my-seo-ga4-975a573e",
    "closed_findings": [
      "TIO2-MY-G9-PCR-02.P0.TRADE_FRESHNESS_INCOMPLETE"
    ],
    "remaining_items": [
      "REAL_GTM_GA4_IDS_AND_ATOMIC_LEGAL_ACTIVATION",
      "GATE9_FOUR_CONSENT_STATES_AND_ANALYTICS_EVENT_EVIDENCE",
      "GSC_WWW_TO_APEX_PRODUCTION_PROOF_AT_GATE10"
    ],
    "gate8_should_stop_return_work": true
  }
}
```

