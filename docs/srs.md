# Software Requirements Specification

**Project:** SEN Support Platform  
**Status:** Draft for pre-defense 1; requirements and targets are not verification results.

## 1. Purpose and scope

This document consolidates the product requirements for the prototype. The project purpose, objectives, boundaries and expected outcomes are defined in the [project proposal](../beibarys/docs/project-proposal.md). Security and privacy controls remain specified by Aknur in [security-privacy-requirements.md](security-privacy-requirements.md); this SRS references those identifiers and does not replace that source.

## 2. Roles and scenarios

Roles below use the exact names in the access matrix in [rbac-and-threat-model.md](rbac-and-threat-model.md).

| Role | Meaning in access matrix |
|---|---|
| Guest | Unauthenticated visitor. Can see public pages, register and log in. No access to any child data. |
| Parent | Parent or guardian linked to one or more children through `ChildGuardian`. |
| Specialist | Teacher, therapist or other professional linked to a child through an active `ChildSpecialist` assignment. |
| Admin | Platform administrator: manages accounts, assignments and system settings. |

| Scenario | Description | Roles |
|---|---|---|
| SC-01 | Register, sign in and establish an authenticated session. | Guest, Parent, Specialist, Admin |
| SC-02 | View and, when permitted, update a linked child profile. | Parent, Specialist, Admin |
| SC-03 | Plan, view, update or cancel a support session within the actor's permissions. | Parent, Specialist |
| SC-04 | Create and read diary entries according to role and entry visibility. | Parent, Specialist |
| SC-05 | Inspect an authorized diary entry's version history. | Parent, Specialist |
| SC-06 | View permitted audit events showing who accessed a child's records. | Parent, Admin |
| SC-07 | Manage accounts and create or end specialist assignments. | Admin |

## 3. Functional requirements

MoSCoW priority is stated for this SRS. Sources are repository documents; a scenario does not assert that the feature is implemented.

| ID | Description | Role | Scenario | Priority | Acceptance criterion | Verification | Source |
|---|---|---|---|---|---|---|---|
| FR-01 | A user can register and sign in with an individual account. | Guest, Parent, Specialist | SC-01 | Must | A valid account can sign in; invalid credentials return a generic failure; account and session behavior meets SEC-01–08. | test | [requirements.md](../beibarys/docs/requirements.md); [security-privacy-requirements.md](security-privacy-requirements.md) |
| FR-02 | A Parent can view linked child profiles and only the primary guardian can make primary-only profile changes. | Parent | SC-02 | Must | A linked Parent reads the profile; a Parent without a relationship receives 404; a non-primary guardian attempting a primary-only change receives 403. | test | [requirements.md](../beibarys/docs/requirements.md); [rbac-and-threat-model.md](rbac-and-threat-model.md), SEC-11 |
| FR-03 | A primary Parent or Admin can create and end a Specialist assignment to a child. | Parent, Admin | SC-02, SC-07 | Must | An authorized primary Parent or Admin can create/end the assignment; ending it removes the Specialist's child access on the next request, including with a previously issued token. | test | [requirements.md](../beibarys/docs/requirements.md); [rbac-and-threat-model.md](rbac-and-threat-model.md), SEC-11 |
| FR-04 | A Parent or assigned Specialist can view support sessions for a related child, subject to the access matrix. | Parent, Specialist | SC-03 | Must | An authorized actor receives permitted session fields; an actor without a child relationship receives 404. | test | [requirements.md](../beibarys/docs/requirements.md); [rbac-and-threat-model.md](rbac-and-threat-model.md) |
| FR-05 | A Parent or Specialist can create and update support-session details permitted to their role. | Parent, Specialist | SC-03 | Must | Invalid fields are rejected; a forbidden update is denied; an accepted change has an audit event. | test | [requirements.md](../beibarys/docs/requirements.md); [rbac-and-threat-model.md](rbac-and-threat-model.md); AUD-01 |
| FR-06 | A Parent or Specialist can create a diary entry with an explicit visibility value. | Parent, Specialist | SC-04 | Must | Entry creation requires author, child, timestamp, content and valid visibility; missing or invalid visibility is rejected. Parent-created entries use permitted visibility per access matrix. | test | [requirements.md](../beibarys/docs/requirements.md); [rbac-and-threat-model.md](rbac-and-threat-model.md) |
| FR-07 | Diary visibility is enforced on server-side list, detail, search and export paths. | Parent, Specialist | SC-04 | Must | A Parent never receives `specialists_only` content through list, detail, search, export or error responses. | test | [requirements.md](../beibarys/docs/requirements.md); SEC-12 |
| FR-08 | Authorized users can inspect diary edit history; edits retain prior versions. | Parent, Specialist | SC-05 | Must | An edit produces a prior version with actor and timestamp; a user lacking access cannot inspect versions. | test | [requirements.md](../beibarys/docs/requirements.md); AUD-03 |
| FR-09 | The system records audit events for child-data access and changes. | Parent, Specialist, Admin | SC-04, SC-06, SC-07 | Must | Each create/read/update/delete/export action on child-related resources produces exactly one matching event, including denied outcomes; events contain no diary text. | test | [requirements.md](../beibarys/docs/requirements.md); AUD-01 |
| FR-10 | The interface provides Parent and Specialist profile, session and diary flows. | Parent, Specialist | SC-02, SC-03, SC-04 | Must | A representative actor completes the defined profile, session and diary tasks in the prototype. Which user representatives and task protocol will be used is an assumption pending agreement. | demo | [requirements.md](../beibarys/docs/requirements.md) |
| FR-11 | Child and role context is visible in the interface. | Parent, Specialist | SC-02, SC-03, SC-04 | Should | Child and role context are visible on every child-specific screen; switching child updates all data views. | review | [requirements.md](../beibarys/docs/requirements.md) |
| FR-12 | An authorized user can request an export of permitted records. | Parent | SC-06 | Should | Export contains only records the requester may view and the export action is audited. | test | [requirements.md](../beibarys/docs/requirements.md); PRV-05; [rbac-and-threat-model.md](rbac-and-threat-model.md) |
| FR-13 | An Admin can manage accounts and assignments within the access matrix. | Admin | SC-07 | Must | Admin can create/deactivate accounts and create/end assignments; admin operations do not expose diary content. | test | [rbac-and-threat-model.md](rbac-and-threat-model.md); SEC-15 |
| FR-14 | An Admin can inspect permitted account, assignment and system audit information. | Admin | SC-06, SC-07 | Should | Admin can view system audit events and child metadata only where the matrix permits; diary content is absent. | test | [rbac-and-threat-model.md](rbac-and-threat-model.md); AUD-04; SEC-15 |

## 4. Non-functional requirements

Security requirement details and acceptance criteria are maintained in Aknur's [security and privacy requirements](security-privacy-requirements.md) and its [access matrix](rbac-and-threat-model.md). This SRS does not restate or alter them. Referenced security/privacy IDs are **SEC-01–08, SEC-10–15, SEC-20–25; PRV-01–08 including PRV-03a; AUD-01–05; LEG-01–04**. Their priorities and acceptance criteria remain authoritative in the source document. Listing LEG IDs is traceability, not a claim of legal compliance.

| ID | Category | Requirement / measurable target | Role | Scenario | Priority | Verification | Source |
|---|---|---|---|---|---|---|---|
| NFR-01 | Security | Apply the security/privacy IDs above. In particular, enforce backend RBAC, object relationships, diary visibility, audit and session controls as specified by Aknur. | Parent, Specialist, Admin | SC-01–SC-07 | Must | test/review per source requirements and verification plan | [security-privacy-requirements.md](security-privacy-requirements.md); [verification-plan.md](verification-plan.md) |
| NFR-02 | Performance | **Proposed target, not yet validated:** read API p95 latency below 300 ms at 50 concurrent virtual users over 5 minutes on a single-node test deployment, with read auditing enabled. | Parent, Specialist, Admin | SC-02–SC-06 | Should | test with k6 or vegeta; report hardware and results | [verification-plan.md](verification-plan.md), §3 |
| NFR-03 | Performance | **Proposed target, not yet validated:** error rate below 1% in the same normal-load run. Under a ramp to 5× normal load, no crash and excess requests receive 429 or 503. | Parent, Specialist, Admin | SC-01–SC-07 | Should | load test; report hardware and results | [verification-plan.md](verification-plan.md), §3 |
| NFR-04 | Availability | **Proposed target, not yet validated:** at least 99% successful health-check availability during each scheduled five-day evaluation window, excluding announced maintenance. Window and exclusions are assumptions pending agreement; no deployment-level availability target is present in source documents. | Parent, Specialist, Admin | SC-01–SC-07 | Could | review timestamped health-check log for the agreed window | Assumption; no source target in repository |
| NFR-05 | Usability | **Proposed target, not yet validated:** at least 4 of 5 representative participants complete each agreed key task (sign-in, profile view, session planning, diary entry, history or access view) within 3 minutes per task without facilitator intervention. Participant count and thresholds are assumptions pending a study protocol; no interview results are asserted. | Parent, Specialist | SC-01–SC-06 | Should | demo with recorded task outcomes and time | Proposal §Objectives/Success criteria; threshold is assumption |
| NFR-06 | Usability | Support current desktop and mobile browser viewports and keyboard navigation, with visible focus, labels and semantic headings. | Parent, Specialist, Admin | SC-01–SC-07 | Should | review/manual accessibility check | [requirements.md](../beibarys/docs/requirements.md), NFR-05 |
| NFR-07 | Privacy | Development and evaluation use synthetic data only; child data is minimized and sensitive values are excluded from logs as specified by PRV-02, PRV-04 and PRV-08. | Parent, Specialist, Admin | SC-01–SC-07 | Must | review data inventory, fixtures and logs per source requirements | [data-inventory.md](data-inventory.md); security/privacy requirements |

## 5. Traceability matrix

Every FR/NFR in this SRS is mapped to at least one role and scenario.

| Requirement | Role(s) | Scenario(s) |
|---|---|---|
| FR-01 | Guest, Parent, Specialist | SC-01 |
| FR-02 | Parent | SC-02 |
| FR-03 | Parent, Admin | SC-02, SC-07 |
| FR-04 | Parent, Specialist | SC-03 |
| FR-05 | Parent, Specialist | SC-03 |
| FR-06 | Parent, Specialist | SC-04 |
| FR-07 | Parent, Specialist | SC-04 |
| FR-08 | Parent, Specialist | SC-05 |
| FR-09 | Parent, Specialist, Admin | SC-04, SC-06, SC-07 |
| FR-10 | Parent, Specialist | SC-02, SC-03, SC-04 |
| FR-11 | Parent, Specialist | SC-02, SC-03, SC-04 |
| FR-12 | Parent | SC-06 |
| FR-13 | Admin | SC-07 |
| FR-14 | Admin | SC-06, SC-07 |
| NFR-01 | Parent, Specialist, Admin | SC-01–SC-07 |
| NFR-02 | Parent, Specialist, Admin | SC-02–SC-06 |
| NFR-03 | Parent, Specialist, Admin | SC-01–SC-07 |
| NFR-04 | Parent, Specialist, Admin | SC-01–SC-07 |
| NFR-05 | Parent, Specialist | SC-01–SC-06 |
| NFR-06 | Parent, Specialist, Admin | SC-01–SC-07 |
| NFR-07 | Admin | SC-01–SC-07 |

## 6. Assumptions and open decisions

- Guest is present in the access matrix, so SC-01 includes Guest only for public access, registration and login; Guest has no child-data access. The proposal's target-user list does not identify Guest as a target user. Confirm whether Guest is an actor in product diagrams or only an unauthenticated state.
- Role labels above preserve the access matrix exactly. The proposal uses “Parent or legal guardian” and `requirements.md` uses “Parent/guardian”; these are descriptive variations, not replacement role names.
- The access matrix allows a Specialist to view child profiles only within a relationship and allows Admin profile metadata only. Profile scenarios do not grant broader permissions.
- Performance, availability and usability values are proposed targets, not validated commitments. Availability and usability thresholds have no source target in the repository.
- No interviews, user findings, supervisor approval, legal review, GDPR compliance or Kazakhstan-law compliance are claimed. Local user needs and legal classification remain open in the proposal and Aknur's documents.
- Priorities in this SRS are product priorities. The security/privacy source has its own M/S/C priorities; those remain authoritative for the referenced IDs.

## 7. Consistency check

Compared with [verification-plan.md](verification-plan.md), draft revision 2:

- The verification plan's cross-family access target is **404** (0 successful reads/writes). This agrees with SEC-11 and the access matrix. The task's illustrative acceptance wording says “returns 403”; that example conflicts with those sources. This SRS follows the documented 404 rule for no relationship; 403 applies only when a relationship exists but the actor lacks the required right.
- The verification plan's load target, p95 below 300 ms for read endpoints at 50 virtual users for 5 minutes, is reflected as NFR-02 and explicitly marked proposed/not validated. Its 50-user workload is based on an assumption of 20 concurrent pilot users, not confirmed usage evidence.
- Verification plan acceptance covers all “M” requirements, while the SRS's Must FR-10 demo has no named representative participants or agreed protocol. The source `requirements.md` says user assessment is later; a task protocol and participant plan need definition before this can be evaluated.
- The plan lists authentication and child-resource audit events separately (AUD-05 and AUD-01); FR-09 is scoped to child-data events and FR-01 retains account/session checks. No audit test result is claimed.
- The verification plan's “availability” checks describe overload behavior (no crash; excess requests receive 429 or 503), not uptime. NFR-04 adds a separate assumed availability target; confirm whether to retain it.
- The verification plan lists access-matrix coverage and security checks, but does not define usability task-time/participant thresholds or an uptime evaluation window. NFR-04 and NFR-05 are proposed assumptions pending agreement.
- `requirements.md` FR-03 attributes assignment creation/end to Admin, while the detailed access matrix also grants it to a primary Parent. FR-03 follows the detailed matrix; this product-requirements mismatch remains for the owners to reconcile.
- The security requirement AUD-05 includes password-change events. Verification-plan §3's authentication audit metric names login success/failure, logout, refresh and lockout, but omits password change. This SRS leaves the source requirement intact and records the missing metric/test case here.
- The verification plan's section 2 test-level table does not explicitly list coverage for PRV-02, PRV-03, PRV-03a, PRV-05, PRV-06, PRV-07 or LEG-01–04. Some related checks appear in Aknur's separate traceability matrix, but the verification plan's high-level table does not show them. Confirm their planned verification coverage; none is claimed as completed.
- The verification plan lists AUD-05 in integration coverage, but its authentication-audit metric does not name password change as above. Its rate-limit metric refers to SEC-04 for uniform behavior; the rate-limit requirement itself is SEC-03, with SEC-04 governing response uniformity.
- Source `requirements.md` FR-10 refers to `prototype/index.html`, which is not present in the repository file list on this branch. The SRS does not treat that path as available evidence or claim a prototype task has been demonstrated.

