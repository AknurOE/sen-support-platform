# Project Management, Milestones, Dependencies and Risks

**Project:** SEN Support Platform  
**Owner for security/privacy/QA:** Ondasyn Aknur (SE-2420)  
**Status:** Draft for pre-defense 1, updated 22 October 2026

## Repository and tracking

- Repository: https://github.com/AknurOE/sen-support-platform (`main` is the reviewed baseline).
- YouTrack board: https://honchikon1.youtrack.cloud/projects/SSP/agiles/204-1/current (task details require an authenticated session).
- Workflow: one branch per task using the task ID; commits and PRs reference the ID; another team member reviews; link the PR in YouTrack; mark done only when acceptance criteria are met.
- Submission tags: `pre-defense-1`, `pre-defense-2`, `final-pre-defense`; never move a submitted tag.

## Allocation

| Member | Role | Responsibilities |
|---|---|---|
| Ondasyn Aknur (SE-2420) | Security, Privacy & QA | Security/privacy requirements, access control, threat model, verification, privacy/legal analysis, relevance evidence consolidation, risk register, submission tags |
| Zhumagali Beibarys (SE-2423) | Backend and architecture | Scope, SRS, architecture, API contract, technology comparison, domain model, repository infrastructure |
| Zhuparbai Yerkebulan (SE-2423) | Frontend and UX | User research/flows, personas, mockups and clickable prototype, UX system comparison, frontend skeleton |
| A. K. Makatov | Supervisor | Review key deliverables and decisions; comments and resulting changes recorded in `supervisor-feedback.md` |

Shared: literature review, consolidated system comparison, README, and consistency review.

## Milestones

| Milestone | Target | Deliverables / exit condition |
|---|---|---|
| Pre-defense 1 | 24 Oct 2026 | Proposal, relevance evidence, literature and system/technology comparisons, initial requirements, diagrams, prototype, verification plan, README, YouTrack tasks, actual supervisor feedback/evidence; tag `pre-defense-1` |
| Access and Profiles backend | After pre-defense 1 | Registration/login, tokens, RBAC, profiles/links; auth, RBAC, IDOR tests |
| Support and Diary backend | After Access and Profiles | Sessions, visibility-controlled diary, audit/edit history; visibility/audit/history tests |
| Quality and launch | Before final stage | OWASP review, ZAP baseline, load tests, verification report, Docker/API documentation |
| Pre-defense 2 / final | Programme dates | Working implementation and verified results; dates to confirm with programme |

## Dependencies

| ID | Dependency | Reason |
|---|---|---|
| D1 | API contract before frontend integration/tests | UI and tests depend on endpoints, error codes, and 404/403 semantics |
| D2 | Requirements before final diagrams and mockups | Scenarios, components, and screens need traceability |
| D3 | Session/token design before auth and frontend token handling | Storage, refresh, and CSRF decisions are coupled |
| D4 | Domain model before ER diagram/migrations/access tests | Consent, refresh tokens, diary versions, and lockout affect schema |
| D5 | Supervisor/legal decision before legal checklist/deployment choice | Data classification/localisation affect controls and hosting |
| D6 | User evidence before requirements are called confirmed | Separate observed findings from assumptions |
| D7 | Repository infrastructure before CI tests | CI assumes configuration, Compose, and dependency scans |

## Risk register

| ID | Risk | L | I | Mitigation | Owner |
|---|---|:---:|:---:|---|---|
| R1 | Too few user discussions; needs remain assumptions | M | H | Recruit through more than one channel; record limitations; do not claim representativeness | Aknur, Yerkebulan |
| R2 | Late or limited supervisor feedback | M | H | Share drafts in advance; agree checkpoint; record every comment and response | Aknur |
| R3 | Uneven contributions or unclear history | M | M | Commit coherent work progressively; use task branches and peer-reviewed PRs | All |
| R4 | Scope too large for available time | M | H | Prioritize must requirements; reduce depth before dropping required artefacts | Beibarys |
| R5 | Inconsistent terminology/roles across docs | M | M | Maintain traceability matrix and final consistency review | Aknur |
| R6 | Backend arrives late, limiting verification | M | M | Agree API contract early; prioritize access-matrix tests | Aknur, Beibarys |
| R7 | Legal meaning of health data/consent/localisation uncertain | M | H | Record assumptions; confirm with supervisor/qualified reviewer; avoid compliance claims | Aknur |
| R8 | Team member unavailable | Lo | H | Keep shared repository, task notes, and handoff-ready deliverables | All |
| R9 | Repository/YouTrack/prototype access blocks review | Lo | M | Check member/supervisor/committee access before tag | Aknur |
| R10 | Load hardware differs from production | M | Lo | Document hardware and compare relative to baseline | Aknur |

## Pre-defense 1 status and limitations

The public repository shows a `main` branch, three contributors, PR #1 merged on 22 October, and security/privacy documentation. The current code README says only draft domain models exist; API, database, and business logic are not implemented. This is acceptable for the analysis/design pre-defense but must be stated in the submission summary. Supervisor review was received on 23 October 2026 and is logged with decisions in `supervisor-feedback.md`. Following SF-10, every member commits at least weekly, every PR is reviewed by another member before merge, and the YouTrack ID is used in branch and PR names. Confirm YouTrack task IDs, assignees, priorities, due dates, and acceptance criteria directly in the board before tagging.
