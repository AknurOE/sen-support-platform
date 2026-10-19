package domain

import "time"

type AuditEventID string

type AuditAction string

const (
	AuditActionCreate AuditAction = "create"
	AuditActionRead   AuditAction = "read"
	AuditActionUpdate AuditAction = "update"
	AuditActionDelete AuditAction = "delete"
	AuditActionLogin  AuditAction = "login"
)

type AuditOutcome string

const (
	AuditOutcomeSuccess AuditOutcome = "success"
	AuditOutcomeDenied  AuditOutcome = "denied"
	AuditOutcomeFailure AuditOutcome = "failure"
)

type AuditEvent struct {
	ID         AuditEventID
	ActorID    UserID
	Action     AuditAction
	Resource   string
	ResourceID string
	Outcome    AuditOutcome
	RequestID  string
	OccurredAt time.Time
}
