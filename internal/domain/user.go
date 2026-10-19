package domain

import "time"

type UserID string

type Role string

const (
	RoleParent     Role = "parent"
	RoleSpecialist Role = "specialist"
	RoleAdmin      Role = "admin"
)

type UserStatus string

const (
	UserStatusActive   UserStatus = "active"
	UserStatusInactive UserStatus = "inactive"
)

type User struct {
	ID           UserID
	Email        string
	PasswordHash string
	FirstName    string
	LastName     string
	Role         Role
	Status       UserStatus
	CreatedAt    time.Time
	UpdatedAt    time.Time
}

type SpecialistProfile struct {
	UserID       UserID
	Specialty    string
	Organization string
	Bio          string
	CreatedAt    time.Time
	UpdatedAt    time.Time
}
