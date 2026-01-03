# AGENTS.md
This file provides guidance to various AI agents when working with code in this repository.

---

## Project Overview

AD Planning Tools is a **modular AI-driven development framework** combining two complementary methodologies:

1. **BMad Method** - Project-level agile framework with 4 phases
2. **Spec Kit** - Feature-level spec-driven development workflow

The framework is designed for IDE-agnostic use (Claude Code, Cursor, Windsurf, VS Code) through standardized agent definitions and commands.

---

## High-Level Architecture

### Directory Structure

| Directory | Purpose |
|-----------|---------|
| `commands/` | Slash commands for BMad phases and Spec Kit workflows |
| `hooks/` | Event-driven hooks for artifact tracking, phase transitions, SDD enforcement |
| `skills/bmad-*/` | BMad methodology skills (core, analysis, planning, solutioning, implementation, testing) |
| `skills/spec-kit/` | Spec Kit methodology for feature-level development |
| `skills/cis-*/` | Creative Intelligence Suite for exploration and innovation |

### Workflow Systems

#### BMad Method (Project-Level)
```
Phase 1: Analysis    → Research, product briefs
     ↓
Phase 2: Planning    → PRD, UX design, technical specs
     ↓
Phase 3: Solutioning → Architecture, epics, stories
     ↓
Phase 4: Implementation → Sprint planning, dev stories, code review
```

#### Spec Kit (Feature-Level)
```
/speckit.constitution → Establish project principles
     ↓
/speckit.specify      → Create feature specification
     ↓
/speckit.plan         → Create technical plan
     ↓
/speckit.tasks        → Generate task list
     ↓
/speckit.implement    → TDD implementation
     ↓
/speckit.review       → Quality gate
```

### Artifact Locations

| Path Pattern | Phase | Content |
|--------------|-------|---------|
| `_bmad-output/planning/research/` | Analysis | Research documents |
| `_bmad-output/planning/product-brief*.md` | Analysis | Product briefs |
| `_bmad-output/planning/prd.md` | Planning | Product Requirements Document |
| `_bmad-output/planning/ux-design.md` | Planning | UX design document |
| `_bmad-output/planning/tech-spec.md` | Planning | Technical specification |
| `_bmad-output/planning/architecture.md` | Solutioning | Architecture document |
| `_bmad-output/planning/epics/` | Solutioning | Epic files |
| `_bmad-output/planning/test-plan.md` | Solutioning | Test design |
| `.specify/memory/constitution.md` | Spec Kit | Project governing principles |
| `specs/###-feature-name/` | Spec Kit | Feature specifications |

---

## Available Commands

### BMad Phase Commands

```bash
/bmad-analyze    # Phase 1: Analysis - Research, product briefs
/bmad-plan       # Phase 2: Planning - PRD, UX design, tech specs
/bmad-solution   # Phase 3: Solutioning - Architecture, epics, stories
/bmad-implement  # Phase 4: Implementation - Sprint planning, dev stories
/bmad-sprint     # Sprint planning from epics
```

### Spec Kit Commands

```bash
/speckit.constitution    # Establish project principles (run once per project)
/speckit.specify         # Create feature specification from description
/speckit.plan           # Create technical implementation plan
/speckit.tasks          # Generate task list from plan
/speckit.implement      # Execute TDD implementation
/speckit.review         # Cross-artifact consistency review
/speckit.analyze        # Analyze specs, plans, tasks consistency
/speckit.clarify        # Resolve ambiguities in specifications
/speckit.scope          # Track scope changes
/speckit.retro          # Post-implementation retrospective
```

### Other Commands

```bash
/speckit.wizard         # Interactive spec wizard
/speckit.taskstoissues  # Convert tasks to GitHub issues
/speckit.scope          # Scope change tracking
/speckit.release        # Release preparation
/speckit.audit          # Audit implementation against constitution
```

---

## Hooks System

Three hooks provide automation:

### bmad-phase-transition.js
- `onPromptFinished`: Suggests next phase after command completion
- `onBeforeCommand`: Validates prerequisites before BMad commands

### bmad-artifact-tracker.js
- `onFileAdded`: Tracks new artifacts by phase and type
- `onFileRead`: Logs artifact access
- `getArtifactStatus`: Returns phase progress summary

### sdd-workflow.js
- `onPromptSubmitted`: Enforces SDD workflow (warns if skipping constitution/specs)
- `onTaskCreated`: Suggests SDD naming convention (e.g., "001-feature-name")

---

## C.O.R.E. Framework Principles

BMad Core is built on the C.O.R.E. framework:

- **C**ollaborative Intelligence - Human and AI agents work together with clear roles
- **O**ptimized Workflows - Structured phases with progressive disclosure
- **R**eflection Points - Built-in checkpoints for quality and alignment
- **E**volutionary Adaptation - Scale-adaptive planning depth

### Scale-Adaptive Intelligence

Planning depth automatically adjusts:
- **Bug fixes**: Minimal ceremony, focused execution
- **Features**: Standard BMad workflow
- **Systems**: Full multi-phase engagement

---

## Spec Kit Core Principles

When using Spec Kit, the constitution establishes these non-negotiable rules:

1. **Library-First**: Every feature begins as a standalone library
2. **CLI Interface**: Text in/out, JSON support
3. **Test-First**: TDD mandatory (NON-NEGOTIABLE)
4. **Simplicity**: Max 3 projects, no future-proofing
5. **Anti-Abstraction**: Use framework directly
6. **Integration-First**: Real environments over mocks

---

## Skill Loading Guide

| Situation | Skills to Load |
|-----------|----------------|
| New project (full) | `bmad-core`, `bmad-analysis`, `bmad-planning`, `bmad-solutioning`, `spec-kit` |
| Feature work | `bmad-core`, `spec-kit` |
| Bug fix | `spec-kit`, `bmad-testing` |
| Testing focus | `bmad-testing` |
| Creative exploration | `cis-brainstorming`, `cis-design-thinking` |
| Methodology questions | `development-methodology` |

---

## Documentation Standards

All documentation follows:
- **CommonMark** specification (strict compliance)
- **No time estimates** in any documentation
- **Mermaid v10+** syntax for diagrams (always specify type, max 15 nodes)
- **Active voice**, present tense, second person
- **Task-oriented** structure (answers "how do I...")

See `skills/bmad-core/references/documentation-standards.md` for complete guidelines.

---

## When to Use Each Methodology

### Use BMad When:
- Multi-epic projects requiring coordination
- Complex systems with wide-impact architecture decisions
- New product development requiring vision definition
- Team collaboration with multiple stakeholders

### Use Spec Kit When:
- Single, self-contained features
- Bug fixes requiring quick turnaround
- Individual contributors working solo
- Teams valuing precise specifications

### Use Both When:
- Large projects with multiple features (BMad structure, Spec Kit implementation)
- Enterprise systems (BMad architecture, Spec Kit stories)
- Mixed complexity projects

---

## Key Artifacts by Phase

| Phase | Key Artifacts |
|-------|---------------|
| Analysis | `research/`, `product-brief.md` |
| Planning | `prd.md`, `ux-design.md`, `tech-spec.md` |
| Solutioning | `architecture.md`, `epics/`, `stories/`, `test-plan.md` |
| Implementation | `sprint-status.yaml`, `stories/`, `dev-agent-record.md` |

---

## Integration with External Tools

- **Spec Kit** uses shell scripts in `skills/spec-kit/scripts/` for path resolution
- Branch naming: `###-feature-name` format (e.g., `001-user-auth`)
- Environment variable `SPECIFY_FEATURE` set for downstream commands