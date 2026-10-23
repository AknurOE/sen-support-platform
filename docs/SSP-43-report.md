# SSP-43 — OpenAPI draft

`docs/openapi.yaml` describes the HTTP contract using OpenAPI 3.0.3 and bearer JWT for authenticated API calls. It has 15 URL paths and 18 HTTP operations covering registration, sign-in and session rotation; child profiles and relationships; support sessions; diary entries and history; child audit events; and guardian export. Each operation description contains SRS traceability plus a short request and response example. Resource DTO schemas use fields represented in `docs/diagrams/er.mmd`; password hashes, token hashes, lockout counters, source IP and attempted-identifier keys are not returned in API DTOs. An OpenAPI validator is not available in the local environment, so the contract was not validator-checked.

## Differences and decisions

- The ER includes planned `ConsentRecord`, `LoginLockout`, specialist approval status, and audit security-event fields, but this draft has no public endpoints for consent administration, lockout management, or approval workflow. The source requirements describe these as system-controlled requirements; they are not exposed as client DTOs.
- `DiaryEntryVersion` is a planned entity, not a current Go domain type. Version response fields follow the ER snapshot design and AUD-03 requirement.
- The Go model's IDs are string aliases, so path and DTO identifiers are strings. The architecture draft used UUID labels; the source code does not enforce UUID encoding.
- Email/password are needed by FR-01 and SEC-01 but no plaintext password field exists in the ER. Registration and login therefore use HTTP Basic credentials; the JWT is returned in the Authorization response header and refresh secret in an HttpOnly cookie. Confirm that this transport is acceptable for the product.
- `source_ip` and `attempted_identifier_key` are present in the ER for AUD-05 but are omitted from output schemas. `password_hash`, `token_hash`, and lockout counters are storage-only. The response schemas do not expose Admin access to diary content.
- The source matrix grants Admin child audit access, metadata-only profile/export access, and assignment management, while SEC-11 describes 404 for actors without a child relationship. Admin has no `ChildGuardian`/`ChildSpecialist` relationship fielded in the ER; privileged Admin operations are treated as matrix exceptions. Confirm whether this interpretation is intended because the SRS does not define dedicated Admin endpoints.
- SRS FR-05 covers updating/cancelling sessions but the existing `SupportSession` model has no separate cancellation operation. The draft uses PATCH and the existing `status` field with the `cancelled` value.

## Questions

- Should registration/login credentials use HTTP Basic, or should the API contract permit a credential request DTO containing a transient password field that is not persisted?
- Which specialist approval states, endpoint, and approving role should be defined for SEC-14?
- Should Admin child audit and metadata exports require an active child relationship, a documented request, or an explicit privileged exception?
- Should the API add consent recording/retrieval and a system-wide audit route, or remain scoped to the SRS scenarios?
- What API base URL and exact child-data export format should replace the placeholder contract?

## Endpoint traceability

| Endpoint | FR / SC | ER entity |
|---|---|---|
| `POST /auth/register` | FR-01 / SC-01 | User |
| `POST /auth/token` | FR-01 / SC-01 | User, AuditEvent |
| `POST /auth/refresh` | FR-01 / SC-01 | RefreshToken, User, AuditEvent |
| `POST /auth/logout` | FR-01 / SC-01 | RefreshToken, AuditEvent |
| `GET /children/{childId}` | FR-02, FR-15 / SC-02 | Child, ChildGuardian, ChildSpecialist |
| `PATCH /children/{childId}` | FR-02 / SC-02 | Child, ChildGuardian |
| `POST /children/{childId}/guardians` | FR-03 / SC-07 | ChildGuardian, User |
| `POST /children/{childId}/specialist-assignments` | FR-03 / SC-07 | ChildSpecialist, SpecialistProfile |
| `PATCH /children/{childId}/specialist-assignments/{specialistId}` | FR-03 / SC-07 | ChildSpecialist |
| `GET /children/{childId}/sessions` | FR-04 / SC-03 | SupportSession |
| `POST /children/{childId}/sessions` | FR-05 / SC-03 | SupportSession, AuditEvent |
| `PATCH /children/{childId}/sessions/{sessionId}` | FR-05 / SC-03 | SupportSession, AuditEvent |
| `GET /children/{childId}/diary-entries` | FR-07 / SC-04 | DiaryEntry |
| `POST /children/{childId}/diary-entries` | FR-06, FR-09 / SC-04 | DiaryEntry, AuditEvent |
| `PUT /children/{childId}/diary-entries/{entryId}` | FR-08 / SC-05; FR-09 / SC-04 | DiaryEntry, DiaryEntryVersion, AuditEvent |
| `GET /children/{childId}/diary-entries/{entryId}/versions` | FR-08 / SC-05 | DiaryEntry, DiaryEntryVersion |
| `GET /children/{childId}/audit-events` | FR-09, FR-14 / SC-06, SC-07 | AuditEvent |
| `POST /children/{childId}/exports` | FR-12 / SC-08 | Child, SupportSession, DiaryEntry, AuditEvent |
