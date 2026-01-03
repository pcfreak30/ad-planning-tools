---
name: BMad + Spec Kit Integration Workflow
description: End-to-end workflow combining BMad project planning with Spec Kit feature implementation
keywords: [workflow, integration, bmad, spec-kit, project, feature, end-to-end]
context:
  - Complete project lifecycle from idea to implementation
  - Coordinating project-level and feature-level work
  - Scale-adaptive methodology selection
---

# BMad + Spec Kit Integration Workflow

## The Big Picture

**BMad** answers: "What are we building and why?"
**Spec Kit** answers: "How do we build this feature right now?"

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           PROJECT LEVEL                                  │
│                                                                          │
│    BMad Method                                                          │
│    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────────────┐    │
│    │ Analyze │ →  │  Plan   │ →  │Solution │ →  │ Implementation  │    │
│    │         │    │  PRD    │    │ Arch    │    │ (Coordination)  │    │
│    └─────────┘    └─────────┘    └─────────┘    └─────────────────┘    │
│         ↓               ↓              ↓                   ↓             │
│    Research       User Stories    Epics/Stories        Stories          │
│    Product Brief  Requirements    Architecture         Tasks            │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                          FEATURE LEVEL                                   │
│                                                                          │
│    Spec Kit                                                             │
│    ┌─────────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌────────┐  │
│    │Constitution │→ │ Specify │→ │  Plan   │→ │  Tasks  │→ │Implement│  │
│    └─────────────┘  └─────────┘  └─────────┘  └─────────┘  └────────┘  │
│         ↓               ↓             ↓            ↓            ↓        │
│    Principles      spec.md      plan.md      tasks.md     Code+Tests   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

## Phase 1: Project Initiation (BMad)

### Step 1.1: Load BMad Core

```bash
# Load the foundation
load_skill bmad-core
```

**What this gives you:**
- C.O.R.E. framework principles
- Artifact locations (`{planning_artifacts}`, `{implementation_artifacts}`)
- Phase definitions and transitions

### Step 1.2: Analysis Phase

```bash
# Start analysis
/bmad-analyze "Project name or concept"

# Or for existing projects
load_skill bmad-analysis
```

**Activities:**
- [ ] Define project vision
- [ ] Identify target users
- [ ] Research market/competition
- [ ] Document pain points
- [ ] Create product brief

**Outputs:**
```
{planning_artifacts}/
├── research/
│   ├── market-research.md
│   ├── user-research.md
│   └── competitive-analysis.md
└── product-brief.md
```

### Step 1.3: Planning Phase

```bash
# Transition to planning
load_skill bmad-planning
/bmad-plan "Project name"
```

**Activities:**
- [ ] Create PRD with functional requirements
- [ ] Define non-functional requirements
- [ ] Design user experience
- [ ] Identify technical considerations

**Outputs:**
```
{planning_artifacts}/
├── PRD.md                    # Product Requirements Document
├── UX-design/
│   ├── user-journeys.md
│   └── wireframes/
└── tech-spec.md              # Technical considerations
```

### Step 1.4: Solutioning Phase

```bash
# Transition to solutioning
load_skill bmad-solutioning
/bmad-solution "Project name"
```

**Activities:**
- [ ] Design system architecture
- [ ] Break into epics
- [ ] Create user stories
- [ ] Plan test strategy (TEA review)
- [ ] Assess implementation readiness

**Outputs:**
```
{planning_artifacts}/
├── architecture.md           # System architecture
├── epics/
│   ├── epic-001-auth.md
│   ├── epic-002-payments.md
│   └── epic-003-notifications.md
└── stories/
    ├── story-001-user-signup.md
    ├── story-002-user-login.md
    └── ...
```

### Step 1.5: Establish Spec Kit Constitution

Before implementing features, establish project principles:

```bash
load_skill spec-kit
/speckit.constitution
```

**Constitution Articles (customize for project):**

```markdown
# Project Constitution

## Article I: Library-First
Every feature MUST begin as a standalone library.

## Article II: CLI Interface
All interfaces MUST accept text input, produce text output.

## Article III: Test-First (NON-NEGOTIABLE)
All implementation MUST follow TDD: tests → fail → implement → pass.

## Article IV: [Project-Specific]
[Your custom principle]

## Article V: [Project-Specific]
[Your custom principle]

## Article VI: [Project-Specific]
[Your custom principle]

## Article VII: Simplicity
Maximum 3 projects for initial implementation.

## Article VIII: Anti-Abstraction
Use framework features directly.

## Article IX: Integration-First
Tests use realistic environments.
```

---

## Phase 2: Feature Implementation (Spec Kit)

For each story from BMad, use Spec Kit:

### Story: "User Signup"

```bash
# Step 1: Specify the feature
/speckit.specify "Implement user signup with email verification"

# Creates: specs/001-user-signup/spec.md
```

**spec.md structure:**
```markdown
# Feature: User Signup

## User Stories
- P1: As a user, I can register with email/password
- P2: As a user, I receive email verification
- P3: As a user, I can complete profile

## Requirements
- FR-001: Email format validation
- FR-002: Password strength requirements
- FR-003: Email uniqueness check
- NFR-001: Signup < 2 seconds

## Success Criteria
- 95% signup completion rate
- Zero email delivery failures
```

```bash
# Step 2: Create technical plan
/speckit.plan

# Creates:
# - specs/001-user-signup/plan.md
# - specs/001-user-signup/data-model.md
# - specs/001-user-signup/contracts/
```

```bash
# Step 3: Generate tasks
/speckit.tasks

# Creates: specs/001-user-signup/tasks.md
```

**tasks.md structure:**
```markdown
# Tasks: User Signup

## T001: Create user table migration
- [ ] Write migration
- [ ] Apply to database
- [ ] Verify schema

## T002: Implement User model
- [ ] Create model class
- [ ] Add validation rules
- [ ] Write unit tests

## T003: Implement signup API
- [ ] Create endpoint
- [ ] Add email validation
- [ ] Write integration tests

## T004: Implement email service
- [ ] Integrate email provider
- [ ] Create email template
- [ ] Write email tests

## T005: Wire up signup flow
- [ ] Connect API to frontend
- [ ] E2E test signup flow
- [ ] Performance test
```

```bash
# Step 4: Implement (TDD)
/speckit.implement

# For each task:
# 1. file_write failing test
# 2. Verify test fails
# 3. Implement code
# 4. Verify test passes
# 5. Refactor
```

```bash
# Step 5: Review quality
/speckit.review

# Validates:
# - Constitution compliance
# - Test coverage
# - Cross-artifact consistency
```

---

## Phase 3: Coordination Pattern

### Tracking Progress Across Both Systems

```
PROJECT TRACKER (BMad)
├── Epic: Authentication
│   ├── Story: User Signup ──→ specs/001-user-signup/ (Spec Kit)
│   ├── Story: User Login ───→ specs/002-user-login/ (Spec Kit)
│   └── Story: Password Reset → specs/003-password-reset/ (Spec Kit)
│
├── Epic: Payments
│   ├── Story: Credit Card ──→ specs/010-credit-card/ (Spec Kit)
│   └── Story: PayPal ───────→ specs/011-paypal/ (Spec Kit)
│
└── Epic: Notifications
    ├── Story: Email ─────────→ specs/020-email/ (Spec Kit)
    └── Story: Push ──────────→ specs/021-push/ (Spec Kit)
```

### Progress Reporting

```bash
# At BMad level (sprint status)
/bmad-sprint

# Reports:
# - Epics completed
# - Stories in progress
# - Stories remaining
# - Blockers
```

```bash
# At Spec Kit level (per feature)
/speckit.analyze

# Reports:
# - Task completion per feature
# - Constitution violations
# - Coverage gaps
```

---

## Phase 4: Scale-Adaptive Selection

### Decision Matrix

| Situation | Approach | Commands |
|-----------|----------|----------|
| New project | Full BMad | `/bmad-analyze` → `/bmad-plan` → `/bmad-solution` |
| New feature (complex) | BMad + Spec Kit | `/bmad-solution` + Spec Kit per story |
| New feature (simple) | Spec Kit only | `/speckit.specify` → `/speckit.plan` → `/speckit.implement` |
| Bug fix | Spec Kit only | `/speckit.specify` → `/speckit.plan` → `/speckit.implement` |
| Architecture change | BMad | `/bmad-solution` → `/bmad-implement` |
| Refactor | Spec Kit | `/speckit.specify` → `/speckit.implement` |

### Quick Flow (Brownfield)

For existing projects with good docs:

```bash
# Skip BMad phases, go straight to Spec Kit
load_skill spec-kit
load_skill bmad-testing

/speckit.constitution
/speckit.specify "Feature description"
/speckit.plan
/speckit.tasks
/speckit.implement
```

### Full Flow (Greenfield)

For new projects:

```bash
load_skill bmad-core
load_skill bmad-analysis
load_skill spec-kit

/bmad-analyze "Project vision"
/bmad-plan "Project requirements"
/bmad-solution "Project architecture"

/speckit.constitution

# For each story:
/speckit.specify "Story description"
/speckit.plan
/speckit.tasks
/speckit.implement
```

---

## Complete Workflow Example

### Project: "Task Management App"

#### BMad Phase (Project Setup)

```bash
load_skill bmad-core
load_skill bmad-analysis

/bmad-analyze "Task management app for teams"
# Creates: research/, product-brief.md

load_skill bmad-planning

/bmad-plan "Task management app"
# Creates: PRD.md, UX-design/

load_skill bmad-solutioning

/bmad-solution "Task management app"
# Creates: architecture.md, epics/, stories/
```

**Stories created:**
- Story 001: User authentication
- Story 002: Create/manage tasks
- Story 003: Task assignments
- Story 004: Notifications
- Story 005: Reports

#### Spec Kit Phase (Feature Implementation)

```bash
load_skill spec-kit

/speckit.constitution
# Establish project principles

# Feature 1: Authentication
/speckit.specify "Implement user authentication with JWT"
/speckit.plan
/speckit.tasks
/speckit.implement
/speckit.review

# Feature 2: Task CRUD
/speckit.specify "Implement task create, read, update, delete"
/speckit.plan
/speckit.tasks
/speckit.implement
/speckit.review

# Feature 3: Assignments
/speckit.specify "Implement task assignment to users"
/speckit.plan
/speckit.tasks
/speckit.implement
/speckit.review

# ... continue for remaining stories
```

#### BMad Coordination

```bash
load_skill bmad-implementation

/bmad-sprint
# Review progress across all stories
# Identify blockers
# Plan next sprint
```

---

## Anti-Patterns

| Anti-Pattern | What Happens | Solution |
|--------------|--------------|----------|
| BMad for everything | Overhead for simple features | Use Spec Kit for single stories |
| Spec Kit for projects | No coordination, inconsistent architecture | Use BMad for multi-story work |
| Skipping constitution | Inconsistent implementations | Always run `/speckit.constitution` |
| Skipping BMad phases | Unclear architecture for complex features | Use BMad for system design |
| No testing focus | Technical debt accumulates | Use bmad-testing + Article III |
| Mixing phase names | Confusion about where you are | BMad phases = project, Spec Kit = feature |

---

## Quick Reference

### Starting a Project

```bash
# Full approach (new project)
load_skill bmad-core
load_skill bmad-analysis
load_skill bmad-planning
load_skill bmad-solutioning
load_skill spec-kit

# Quick approach (existing project)
load_skill spec-kit
load_skill bmad-testing
```

### Implementing a Feature

```bash
load_skill spec-kit

/speckit.constitution    # Once per project
/speckit.specify         # Create spec
/speckit.plan            # Create plan
/speckit.tasks           # Create tasks
/speckit.implement       # TDD build
/speckit.review          # Quality gate
```

### Tracking Progress

```bash
# Project level
load_skill bmad-implementation
/bmad-sprint

# Feature level
load_skill spec-kit
/speckit.analyze
```

---

## Related Skills

- `bmad-core` - BMad framework details
- `bmad-analysis` - Phase 1 workflows
- `bmad-planning` - Phase 2 workflows
- `bmad-solutioning` - Phase 3 workflows
- `bmad-implementation` - Phase 4 workflows
- `bmad-testing` - Testing patterns
- `spec-kit` - Spec Kit methodology