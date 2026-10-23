# SEN Support Platform

A web platform project exploring how parents and assigned specialists can coordinate a child’s support sessions and share development observations in a privacy-conscious workspace.

## Project status

The project is at the analysis, design, and interactive-prototype stage for Pre-Defense 1. The repository contains a React/TypeScript frontend demo, draft Go domain models, and project documentation. The backend API, database integration, and business logic are not implemented. Survey findings are preliminary and based on seven respondents; they are not representative. Submission: tag `pre-defense-1`.

## Problem and scope

The project explores a shared workspace for coordinating support sessions and maintaining visibility-controlled observations for children receiving additional support. It does not diagnose a child or prescribe interventions. The planned MVP includes account access, guardian/specialist relationships, minimized child profiles, session planning, diary entries, edit history, audit events, and security/usability evaluation using synthetic data.

See the [project proposal](docs/proposal.md) and [Software Requirements Specification](docs/srs.md) for scope and open decisions.

## Prototype

The clickable prototype is in [`/frontend`](frontend). From the repository root, run:

```bash
cd frontend
npm ci
npm run dev
```

Screenshots are deferred; no hosted demo is available. The frontend uses sample data and in-memory state and is not connected to authentication or a backend API. Consent controls in the demo are illustrative and are not a validated legal consent process.

## User research

An anonymous exploratory survey was conducted on 22–23 October 2026 with three parents/guardians and four specialists. See the [survey method](docs/research/survey-method.md) and [evidence mapped to requirements](docs/research/evidence-to-requirements.md). The survey link was shared in WhatsApp groups, Telegram groups, and groups on other messaging platforms. The raw response export is excluded because one response contains personal contact information. No usability-study results are claimed.

## Team

| Team member | Responsibilities |
|---|---|
| Ondasyn Aknur (SE-2420) | Security, privacy, and quality assurance |
| Zhumagali Beibarys (SE-2423) | Backend development and system architecture |
| Zhuparbai Yerkebulan (SE-2423) | Frontend development and UX design |

**Supervisor:** A. K. Makatov

## Repository structure

```text
.
├── docs/             # Shared research, requirements, architecture, and security documents
│   ├── decisions/    # Architecture and security decisions
│   ├── diagrams/     # Canonical Mermaid docs and visual exports
│   ├── frontend/     # UX, frontend research, and usability planning
│   └── research/     # Survey method and findings
├── frontend/         # Interactive React/TypeScript prototype
├── backend/          # Go domain models and planned API structure
├── prototype/        # Prototype access information
├── submissions/      # Submission summary
└── .github/          # CI workflows
```

## Key documentation

- [Project proposal](docs/proposal.md)
- [Requirements](docs/requirements.md) and [SRS](docs/srs.md)
- [Survey method](docs/research/survey-method.md) and [evidence-to-requirements](docs/research/evidence-to-requirements.md)
- [Literature review](docs/literature-review.md)
- [Existing systems comparison](docs/existing-systems-comparison.md)
- [Technology comparison](docs/technology-comparison.md)
- [Architecture and diagrams](docs/architecture.md)
- [Security and privacy requirements](docs/security-privacy-requirements.md) and [traceability matrix](docs/traceability-matrix.md)
- [Verification plan](docs/verification-plan.md)
- [Usability plan](docs/frontend/usability-plan.md)
- [Supervisor feedback log](docs/supervisor-feedback.md)
- [YouTrack project](https://honchikon1.youtrack.cloud/projects/SSP/agiles/204-1/current)

## Git workflow

Use a separate branch for each YouTrack task, include its ID in the branch name and pull request, and merge through a reviewed PR. Each team member should commit from their own GitHub account. Git history and review activity are available in the GitHub repository.

## Data and privacy

Use synthetic data in development. Do not commit credentials, real child data, or identifiable survey responses. Legal classification, consent, retention, and hosting decisions remain open.

## License

No license has been specified yet.
