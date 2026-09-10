# CONTACT-001 Gate 9 Real-Device and Assistive-Technology Scope Decision V1.0

Date: 2026-09-10  
Decision ID: `CONTACT-G9-SCOPE-20260910-01`  
Status: `USER_APPROVED / ACTIVE_PAGE_SPECIFIC_OVERRIDE`

## 1. User decision

After Project Control showed that the current CONTACT-001 Gate 6 package still required real-device and screen-reader/assistive-technology evidence, the user decided: `不需要。我现在确定不需要这些。`

This is the latest user decision for `CONTACT-001`. It removes the following from the required Gate 9 and release evidence set for this page:

- physical-device and touch-device testing;
- screen-reader and other assistive-technology runtime testing.

The decision is page-specific. It does not automatically change another page's acceptance contract.

## 2. Contract effect

The decision supersedes only the real-device and assistive-technology portions of:

- `CONTACT-001_GATE6_HANDOFF_PACKAGE_V0.2.md` §7 item 9;
- `CONTACT-G9-15` in §9;
- `CONTACT-DEP09` in §10.

The historical Gate 6 package and its hash remain unchanged. Existing missing-test records are retained as `NOT_TESTED / NO_LONGER_REQUIRED_BY_USER_DECISION`; they are not converted into test passes.

`CONTACT-G9-15` continues to require the evidence that was not removed by this decision: keyboard operation and visible focus, native 200% zoom, reduced-motion behavior, stable Chromium and non-Chromium coverage, correct native semantics/state announcements, accessibility-tree inspection and automated Axe results where applicable.

`CONTACT-DEP09` no longer blocks Gate 9 or release because real-device or named screen-reader/AT evidence is absent. It may remain open only for a missing or failed retained check.

## 3. Boundary

This decision does not approve Gate 9, Gate 10, integration, deployment, publication, DNS or indexing. It does not approve a Contact processor, receiver, success predicate, external submission or Privacy/retention parity, and it does not change `CONTACT-G9-06–09` or `CONTACT-DEP03–06/10`.

