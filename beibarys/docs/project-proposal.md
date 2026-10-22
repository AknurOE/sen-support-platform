# SEN Support Platform — Project Proposal

**Status:** Draft for pre-defense 1, 22 October 2026  
**Team:** Ondasyn Aknur (SE-2420), Zhumagali Beibarys (SE-2423), Zhuparbai Yerkebulan (SE-2423)  
**Supervisor:** A. K. Makatov

## Problem

Families supporting a child with special educational needs (SEN) may coordinate appointments, share observations, and track agreed support across home, school, and specialist settings. These records can be scattered across messages, calendars, paper notes, and separate apps. This project investigates and prototypes a privacy-conscious shared workspace for those coordination tasks. The size and local relevance of this problem still need validation with intended users in Kazakhstan; the statements in this proposal are a problem hypothesis, not a result of completed local fieldwork.

## Aim

Design and evaluate a web platform prototype that lets an authorized guardian and an assigned specialist coordinate support sessions and maintain a visibility-controlled developmental diary for a child, with server-enforced access controls and auditable changes.

## Objectives

1. Identify user needs and constraints through 3–5 discussions with parent/guardian and specialist representatives, or document a substantive agreement with a client.
2. Review relevant research and compare existing products and technical alternatives.
3. Specify functional, quality, security, and privacy requirements with measurable acceptance criteria.
4. Design the system context, use cases, components, data model, and principal user flows.
5. Implement the minimum viable product after the analysis/design milestone: authentication, relationship-based access, support sessions, diary visibility, and audit history.
6. Evaluate the prototype against the access matrix, usability scenarios, and the verification metrics in `verification-plan.md`.

## Target users and stakeholders

- Parent or legal guardian coordinating the child's support.
- Assigned specialist (for example, teacher or therapist) contributing session and diary information within granted permissions.
- Platform administrator, limited to account and assignment administration and not diary text by default.
- Supervisor and diploma committee reviewing engineering decisions and evidence.

The project does not replace clinical judgement, diagnose a child, prescribe interventions, or represent an official medical record.

## Scope

**In scope for the planned MVP:** account access; guardian/specialist relationships; child profile with data minimisation; support-session planning and status; diary entries with visibility; edit history and audit events; responsive web UI; role- and relationship-based server authorization; synthetic test data; security and usability evaluation.

**Out of scope for the current diploma MVP:** clinical diagnosis or recommendations; video calls; billing; school/clinic integrations; automated decision-making; production hosting of real children's data; legal certification or a claim of compliance with GDPR/Kazakhstan law without specialist review.

## Expected outcomes

- An evidence-traceable requirements and architecture package.
- An interactive prototype and, in later milestones, a working web application.
- A threat model, access matrix, privacy/data inventory, and verification report.
- A comparison of the prototype with a baseline and documented limitations.

## Engineering complexity and feasibility

The engineering challenge is not a static information site: multiple roles share child-linked records with different permissions, revocable relationships, privacy-sensitive diary visibility, audit/history needs, and measurable authorization tests. To keep the scope feasible, the first implementation milestone is limited to access and profiles; support/diary workflows follow. The repository currently contains domain-model drafts and a frontend starter; the backend API, persistence, and business logic are not yet implemented.

## Assumptions and open decisions

- The product is a coordination tool; diary content may reveal health/disability information. Exact legal classification, consent model, retention, and data-localisation requirements require supervisor/legal confirmation.
- Initial prototype data will be synthetic; no real child data will be used.
- API contract, role definitions, and relationship semantics must be agreed before implementation.
- Local user needs are not yet evidenced in the materials reviewed; see `evidence-of-relevance.md`.

## Success criteria for the diploma prototype

- Each must requirement has an acceptance criterion and traceable test or review method.
- All unauthorized cross-family reads/writes are denied; diary visibility is enforced server-side.
- Representative parent and specialist flows can be completed in the prototype.
- Findings and limitations are reported; no planned check is described as a passed test until executed.

## Related materials

- [Functional and quality requirements](requirements.md)
- [Architecture and diagrams](architecture.md)
- [Evidence of relevance](evidence-of-relevance.md)
- [Literature review](literature-review.md)
- [Verification plan](verification-plan.md)
