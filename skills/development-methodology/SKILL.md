---
name: Development Methodology
description: High-level guidance for choosing and combining BMad Method and Spec Kit in your workflow
keywords: [methodology, bmad, spec-kit, workflow, integration, decision-guide, dev-help]
context:
  - Choosing the right methodology for your project
  - Combining BMad and Spec Kit effectively
  - Scale-adaptive development planning
  - Project vs feature level planning
---

# Development Methodology Skill

## Overview

Guide for choosing and combining **BMad Method** (project-level agile framework) and **Spec Kit** (feature-level spec-driven development) in your workflow. These systems are complementary—BMad provides structure at the project level, Spec Kit provides precision at the feature level.

**See also:** `bmad-spec-kit-workflow.md` for detailed end-to-end integration guide.

## The Two Systems at a Glance

| Aspect | BMad Method | Spec Kit |
|--------|-------------|----------|
| **Scope** | Project-level | Feature-level |
| **Philosophy** | Human-AI collaboration | Specifications as source of truth |
| **Phases** | Analysis → Planning → Solutioning → Implementation | Constitution → Specify → Plan → Tasks → Implement |
| **Artifacts** | PRD, Architecture, Epics, Stories | spec.md, plan.md, tasks.md, contracts/ |
| **Agents** | PM, Architect, Dev, TEA, UX, etc. | Single workflow orchestration |
| **Quality Gates** | Reflection points, TEA reviews | Constitution enforcement, cross-artifact analysis |
| **Best For** | Multi-epic projects, complex systems | Single features, bug fixes, rapid delivery |

## When to Use Each

### Use BMad When:

- **Multi-epic projects** - Multiple features requiring coordination
- **Complex systems** - Architecture decisions with wide impact
- **New product development** - Defining vision, users, and scope
- **Team collaboration** - Multiple stakeholders need alignment
- **Quality-first culture** - TEA reviews, test design, code review

### Use Spec Kit When:

- **Single features** - Self-contained work items
- **Bug fixes** - Quick turnaround with constitution enforcement
- **Rapid delivery** - Time-sensitive features
- **Individual contributors** - Solo developers
- **Spec-first teams** - Teams valuing precise specifications

### Use Both When:

- **Large projects with features** - BMad for project structure, Spec Kit for implementation
- **Enterprise systems** - BMad for architecture, Spec Kit for stories
- **Mixed complexity** - Some epics need full BMad, others need Spec Kit

## Quick Start

### New Project (Full Approach)

```bash
load_skill bmad-core
load_skill bmad-analysis
load_skill bmad-planning
load_skill bmad-solutioning
load_skill spec-kit

/bmad-analyze "Project name"
/bmad-plan "Project name"
/bmad-solution "Project name"

/speckit.constitution

# For each story:
/speckit.specify "Feature description"
/speckit.plan
/speckit.tasks
/speckit.implement
```

### Existing Project (Quick Approach)

```bash
load_skill spec-kit
load_skill bmad-testing

/speckit.constitution
/speckit.specify "Feature or bug fix"
/speckit.plan
/speckit.tasks
/speckit.implement
```

## Decision Tree

```
START: What are you working on?

├── NEW PROJECT?
│   └── Use BMad for full project setup
│       → /bmad-analyze → /bmad-plan → /bmad-solution
│       → Creates PRD, architecture, epics
│
├── NEW FEATURE (in existing project)?
│   ├── Complex feature (multi-story)?
│   │   └── Use BMad: /bmad-plan → /bmad-solution
│   │       → Creates detailed spec, architecture
│   │
│   └── Simple feature (single story)?
│       └── Use Spec Kit: /speckit.specify → /speckit.plan → /speckit.tasks
│           → Creates spec.md, plan.md, tasks.md
│
├── BUG FIX?
│   └── Use Spec Kit (Quick Flow):
│       → /speckit.specify → /speckit.plan → /speckit.tasks → /speckit.implement
│       → Constitution enforces test-first
│
└── REFACTORING?
    ├── Architecture change?
    │   └── Use BMad: /bmad-solution → /bmad-implement
    │
    └── Code refactor?
        └── Use Spec Kit: /speckit.specify → /speckit.implement
```

## Integration Pattern

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROJECT LEVEL (BMad)                         │
│                                                                  │
│  Phase 1: Analysis     → Research, product brief                │
│  Phase 2: Planning     → PRD, UX design, tech specs             │
│  Phase 3: Solutioning  → Architecture, epics, stories           │
│  Phase 4: Implementation → Coordination, not individual work    │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   FEATURE LEVEL (Spec Kit)                      │
│                                                                  │
│  /speckit.constitution → Establish project principles           │
│  /speckit.specify      → Create spec.md from story              │
│  /speckit.plan         → Create plan.md, data-model.md, contracts/
│  /speckit.tasks        → Break into tasks.md                    │
│  /speckit.implement    → TDD implementation                     │
│  /speckit.review       → Quality gate                           │
└─────────────────────────────────────────────────────────────────┘
```

## Workflow Examples

### Example 1: New Product (BMad Only)

```bash
/bmad-analyze "E-commerce platform"
  → Creates research/, product-brief.md

/bmad-plan "E-commerce platform"
  → Creates PRD.md, UX design

/bmad-solution "E-commerce platform"
  → Creates architecture.md, epics/, stories/
```

### Example 2: New Feature (BMad + Spec Kit)

```bash
# BMad for feature definition
/bmad-plan "Add subscription feature"
  → Updates PRD.md

/bmad-solution "Add subscription feature"
  → Creates subscription architecture, 5 stories

# Spec Kit for each story
/speckit.specify "Implement subscription API"
  → Creates specs/001-subscription-api/spec.md

/speckit.plan
  → Creates plan.md, data-model.md, contracts/

/speckit.tasks
  → Creates tasks.md

/speckit.implement
  → TDD implementation
```

### Example 3: Bug Fix (Spec Kit Only)

```bash
/speckit.specify "Fix payment timeout race condition"
  → Creates specs/fix-payment-timeout/spec.md

/speckit.plan
  → Creates plan.md

/speckit.tasks
  → Creates tasks.md

/speckit.implement
  → TDD implementation with test-first
```

## Phase Mapping

| BMad Phase | Spec Kit Command | Purpose |
|------------|------------------|---------|
| Analysis | `/bmad-analyze` | Research and context |
| Planning | `/bmad-plan` | Requirements definition |
| Solutioning | `/bmad-solution` | Architecture design |
| - | `/speckit.constitution` | Establish principles |
| - | `/speckit.specify` | Feature specification |
| - | `/speckit.plan` | Technical planning |
| Implementation | `/speckit.tasks` | Task breakdown |
| Implementation | `/speckit.implement` | TDD execution |
| Implementation | `/speckit.review` | Quality gate |

## Artifact Mapping

| BMad Artifact | Spec Kit Artifact | When to Use |
|---------------|-------------------|-------------|
| PRD.md | spec.md | PRD for projects, spec.md for features |
| Architecture.md | plan.md + data-model.md | Architecture for systems, plan.md for features |
| Epic | - | BMad only (multi-feature) |
| Story | spec.md + plan.md | Story maps to spec+plan |
| Tasks.md | tasks.md | Both use tasks.md |
| - | contracts/ | Spec Kit only (API contracts) |

## Quality Gates

### BMad Quality Gates

| Phase | Gate | Purpose |
|-------|------|---------|
| Solutioning | TEA Review | Testability, coverage |
| Solutioning | Implementation Readiness | Stories complete, architecture sound |
| Implementation | Code Review | Standards, patterns |
| Implementation | Traceability | Requirements → Tests → Code |

### Spec Kit Quality Gates

| Command | Gate | Purpose |
|---------|------|---------|
| `/speckit.plan` | Constitution Check | 9 articles enforced |
| `/speckit.tasks` | Coverage Analysis | Requirements → Tasks |
| `/speckit.implement` | Test-First | Tests before code (Article III) |
| `/speckit.review` | Final Quality | Cross-artifact consistency |

## Skill Loading Guide

| Situation | Skills to Load |
|-----------|----------------|
| New project | `bmad-core`, `bmad-analysis`, `bmad-planning`, `bmad-solutioning`, `spec-kit` |
| Feature work | `bmad-core`, `spec-kit` |
| Bug fix | `spec-kit`, `bmad-testing` |
| Testing focus | `bmad-testing` |
| Creative exploration | `cis-brainstorming`, `cis-design-thinking` |
| Agent creation | `skill-creator`, `agent-builder` |
| Methodology questions | `development-methodology` |

## Anti-Patterns to Avoid

| Anti-Pattern | Problem | Solution |
|--------------|---------|----------|
| BMad for everything | Overhead for simple tasks | Use Spec Kit for single features |
| Spec Kit for projects | Missing coordination | Use BMad for multi-epic work |
| Skipping constitution | Inconsistent implementations | Always run `/speckit.constitution` |
| Skipping BMad phases | Unclear architecture | Use BMad for complex systems |
| No testing focus | Technical debt | Use bmad-testing + Article III |

## Command Quick Reference

### BMad Commands

```bash
/bmad-analyze    # Phase 1: Analysis - Research, product brief
/bmad-plan       # Phase 2: Planning - PRD, UX design
/bmad-solution   # Phase 3: Solutioning - Architecture, stories
/bmad-implement  # Phase 4: Implementation - Sprint, dev stories
/bmad-sprint     # Sprint management and tracking
```

### Spec Kit Commands

```bash
/speckit.constitution    # Establish project principles (run once)
/speckit.specify         # Create feature specification
/speckit.plan           # Create technical plan
/speckit.tasks          # Generate task list
/speckit.implement      # Execute TDD implementation
/speckit.review         # Final quality gate
/speckit.analyze        # Cross-artifact consistency analysis
/speckit.clarify        # Resolve ambiguities
/speckit.scope          # Track scope changes
/speckit.retro          # Post-implementation retrospective
```

## Documentation Structure

```
development-methodology/
├── SKILL.md                    # This file - quick reference
└── bmad-spec-kit-workflow.md   # Detailed integration guide
```

## Related Skills

- `bmad-core` - BMad framework details
- `bmad-analysis` - Phase 1 workflows
- `bmad-planning` - Phase 2 workflows
- `bmad-solutioning` - Phase 3 workflows
- `bmad-implementation` - Phase 4 workflows
- `bmad-testing` - Testing patterns
- `spec-kit` - Spec Kit methodology
- `cis-*` - Creative intelligence for exploration
