# Initial Functional and Quality Requirements

**Status:** Draft for pre-defense 1; assumptions pending user validation.  
**Traceability:** Security/privacy IDs remain in [security-privacy-requirements.md](security-privacy-requirements.md) and [traceability-matrix.md](traceability-matrix.md).

Priority: **M** = must for MVP; **S** = should; **C** = could. Acceptance criteria describe planned verification, not completed results.

## Functional requirements

| ID | Requirement | Priority | Acceptance criterion |
|---|---|---:|---|
| FR-01 | A user can register and sign in using an individual account. | M | A valid account can sign in; invalid credentials receive a generic failure; account and session rules satisfy SEC-01–08. |
| FR-02 | A parent/guardian can view and update child profiles for children linked to that guardian. | M | Linked guardian reads own child; unlinked guardian receives 404; non-primary guardian cannot perform primary-only changes. |
| FR-03 | An administrator can create and end a specialist-to-child assignment. | M | Assignment has an active interval; ended assignment grants no further child access, including requests using an earlier token. |
| FR-04 | A guardian or assigned specialist can view support sessions for a child only within their relationship and permissions. | M | Authorized user sees session date, status, and responsible specialist; unrelated user receives 404. |
| FR-05 | An authorized user can create and update support-session details permitted to their role. | M | Invalid fields are rejected; forbidden updates are denied; accepted changes have an audit event. |
| FR-06 | A guardian or assigned specialist can create a diary entry with an explicit visibility value. | M | Entry requires author, child, timestamp, content, and visibility; missing or invalid visibility is rejected. |
| FR-07 | Diary queries apply visibility rules on the server for list, detail, search, and export. | M | Guardian never receives `specialists_only` content; tests cover every API path, including errors. |
| FR-08 | Authorized users can inspect a diary entry's edit history; updates retain prior versions. | M | A changed entry has an immutable prior version, actor, and timestamp; users without access cannot inspect versions. |
| FR-09 | The system records audit events for child-data access and changes. | M | Tests reconcile each create/read/update/delete/export action with exactly one event; event records do not include diary text. |
| FR-10 | The interface provides parent and specialist flows for profile, sessions, and diary. | M | A representative user can complete the prototype tasks in `prototype/index.html`; implementation acceptance is assessed later with users. |
| FR-11 | A user can see the currently selected child and their role in the interface. | S | Child and role context are visible on every child-specific screen; switching child updates all data views. |
| FR-12 | An authorized user can request an export of permitted records. | S | Export includes only records the requester may view; export action is audited. |

## Non-functional requirements

| ID | Requirement | Priority | Acceptance criterion |
|---|---|---:|---|
| NFR-01 | Authorization is enforced by the backend, denies by default, and checks both role and relationship. | M | Access matrix tests pass 100%; no cross-family read/write succeeds; see SEC-10/11. |
| NFR-02 | Child data is minimized, classified, and not used in logs or analytics by default. | M | Data inventory maps each field to purpose/readers/retention; log inspection finds no diary content or secrets. |
| NFR-03 | Authentication, session handling, and secret management meet the security requirements. | M | SEC-01–08 checks pass in the release verification report. |
| NFR-04 | Diary visibility and access revocation are consistent across API endpoints. | M | Visibility and ended-assignment tests pass for list, detail, search, export, and old tokens. |
| NFR-05 | The UI is usable on a current desktop and mobile browser viewport and supports keyboard navigation. | S | Manual accessibility review verifies keyboard access, visible focus, labels, semantic headings, and responsive layout. |
| NFR-06 | Normal read API requests target p95 <300 ms at 50 virtual users for 5 minutes. | S | Report k6 output and hardware; this is a proposed prototype target, not production SLO. |
| NFR-07 | The system uses synthetic data in development and evaluation. | M | Seed/test fixtures contain fictional records; repository review finds no real child data. |
| NFR-08 | Requirements, diagrams, code changes, and checks are traceable to tasks and review evidence. | M | Each meaningful deliverable links to a YouTrack issue and PR/commit; exact board tasks still need confirmation. |

## Actors and permissions summary

| Actor | Profile | Sessions | Diary | Assignment | Audit |
|---|---|---|---|---|---|
| Guest | No child access | No access | No access | No access | No access |
| Parent/guardian | Read linked child; primary guardian may update | Read linked child; permitted changes per API contract | Read guardian-visible; create allowed; visibility enforced | No direct assignment management | Own relevant audit summary only if specified |
| Specialist | Read assigned child subset | Read/create/update assigned sessions within contract | Read guardian-visible and specialist-only; create allowed | No direct assignment management | No general audit access |
| Admin | Manage accounts/assignments; no diary text by default | No content access by default | No diary content | Create/end assignments | Security metadata only, not diary text |

This is an initial product matrix and must be reconciled with the detailed security matrix before implementation. Legal duties and child/teen consent rules are open questions, not inferred from this matrix.

## Open questions

1. Which fields and actors are essential in local practice? Pending E-01–E-03 discussions.
2. What consent/assent and guardian verification model is approved for the deployment context?
3. Should specialists create diary entries, or only session notes? What does “specialists-only” mean operationally?
4. What language(s), low-connectivity behaviour, and accessibility targets are required?
5. Which retention period and hosting region are permissible? Confirm with supervisor/legal reviewer.
6. Should child/teen participation or access change at a particular age? Requires legal and institutional decision.
