# AD Planning Tools

A modular AI-driven development framework combining two complementary methodologies for systematic project and feature development.

## Overview

AD Planning Tools provides structured workflows for AI-assisted software development through:

- **BMad Method**: Project-level agile framework with four distinct phases
- **Spec Kit**: Feature-level spec-driven development workflow

The framework is designed for IDE-agnostic use across Claude Code, Cursor, Windsurf, and VS Code through standardized agent definitions and commands.

## Inspiration

This project is derived from and inspired by:

- **[Spec Kit](https://github.com/github/spec-kit)**: A spec-driven development workflow from GitHub
- **[BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD)**: A project-level agile framework for AI-assisted development

## Installation

This is a methodology framework that provides commands and skills for AI-assisted development. No installation is required beyond cloning the repository.

## Getting Started

### For New Projects

1. Load the relevant skills: `bmad-core`, `bmad-analysis`, `bmad-planning`, `bmad-solutioning`, `spec-kit`
2. Begin with BMad Method for project-level planning
3. Use Spec Kit for feature-level implementation

### For Feature Work

1. Load skills: `bmad-core`, `spec-kit`
2. Run `/speckit.constitution` to establish project principles
3. Use `/speckit.specify` to create feature specifications

### For Bug Fixes

1. Load skills: `spec-kit`, `bmad-testing`
2. Use Spec Kit for quick turnaround with precise specifications

## Project Structure

```
ad-planning-tools/
├── commands/           # Slash commands for BMad and Spec Kit workflows
├── hooks/              # Event-driven automation hooks
├── skills/
│   ├── bmad-*/        # BMad methodology skills
│   ├── spec-kit/      # Spec Kit methodology
│   └── cis-*/         # Creative Intelligence Suite
├── AGENTS.md           # AI agent guidance
└── LICENSE             # MIT License
```

## Skills

This framework provides specialized skills for different aspects of AI-assisted development:

### BMad Methodology

| Skill | Description |
|-------|-------------|
| `bmad-core` | Core principles, phases, artifact locations, and C.O.R.E. framework |
| `bmad-analysis` | Phase 1: Research, brainstorming, and product briefs |
| `bmad-planning` | Phase 2: PRD, UX design, and technical specifications |
| `bmad-solutioning` | Phase 3: Architecture, epics, stories, and test planning |
| `bmad-implementation` | Phase 4: Sprint planning, dev stories, and code review |
| `bmad-testing` | Testing patterns, fixtures, and quality frameworks |

### Spec Kit

| Skill | Description |
|-------|-------------|
| `spec-kit` | Spec-Driven Development methodology - specifications as executable truth |

### Creative Intelligence Suite (CIS)

| Skill | Description |
|-------|-------------|
| `cis-brainstorming` | Interactive ideation using 36 techniques across 7 categories |
| `cis-design-thinking` | Human-centered design through five phases |
| `cis-innovation` | Identify disruption opportunities using JTBD, Blue Ocean, and more |
| `cis-problem-solving` | Systematic challenge resolution using TRIZ, TOC, and root cause analysis |
| `cis-storytelling` | Craft compelling narratives using proven story frameworks |

### Methodology

| Skill | Description |
|-------|-------------|
| `development-methodology` | Guidance for choosing and combining BMad and Spec Kit |

## Available Commands

### BMad Phase Commands

| Command | Description |
|---------|-------------|
| `/bmad-analyze` | Phase 1: Research and product briefs |
| `/bmad-plan` | Phase 2: PRD, UX design, technical specs |
| `/bmad-solution` | Phase 3: Architecture, epics, stories |
| `/bmad-implement` | Phase 4: Sprint planning and dev stories |
| `/bmad-sprint` | Sprint planning from epics |

### Spec Kit Commands

| Command | Description |
|---------|-------------|
| `/speckit.constitution` | Establish project principles (run once) |
| `/speckit.specify` | Create feature specification |
| `/speckit.plan` | Create technical implementation plan |
| `/speckit.tasks` | Generate task list |
| `/speckit.implement` | Execute TDD implementation |
| `/speckit.review` | Cross-artifact consistency review |
| `/speckit.analyze` | Analyze specs, plans, tasks consistency |
| `/speckit.clarify` | Resolve specification ambiguities |
| `/speckit.scope` | Track scope changes |
| `/speckit.retro` | Post-implementation retrospective |

### Utility Commands

| Command | Description |
|---------|-------------|
| `/speckit.wizard` | Interactive spec wizard |
| `/speckit.taskstoissues` | Convert tasks to GitHub issues |
| `/speckit.release` | Release preparation |
| `/speckit.audit` | Audit implementation against constitution |

## Workflow Systems

### BMad Method (Project-Level)

```
Analysis → Planning → Solutioning → Implementation
```

| Phase | Artifacts |
|-------|-----------|
| Analysis | `research/`, `product-brief.md` |
| Planning | `prd.md`, `ux-design.md`, `tech-spec.md` |
| Solutioning | `architecture.md`, `epics/`, `stories/`, `test-plan.md` |
| Implementation | `sprint-status.yaml`, `stories/`, `dev-agent-record.md` |

### Spec Kit (Feature-Level)

```
Constitution → Specify → Plan → Tasks → Implement → Review
```

| Step | Output |
|------|--------|
| Constitution | `.specify/memory/constitution.md` |
| Specify | Feature specification in `specs/###-feature-name/` |
| Plan | Technical implementation plan |
| Tasks | Task list for implementation |
| Implement | TDD implementation |
| Review | Quality gate validation |

## Core Principles

### C.O.R.E. Framework

BMad Core is built on four foundational principles:

- **Collaborative Intelligence**: Human and AI agents work together with clear roles
- **Optimized Workflows**: Structured phases with progressive disclosure
- **Reflection Points**: Built-in checkpoints for quality and alignment
- **Evolutionary Adaptation**: Scale-adaptive planning depth

### Scale-Adaptive Intelligence

Planning depth automatically adjusts based on project complexity:

| Complexity | Approach |
|------------|----------|
| Bug fixes | Minimal ceremony, focused execution |
| Features | Standard BMad workflow |
| Systems | Full multi-phase engagement |

### Spec Kit Non-Negotiables

The constitution establishes these rules:

1. **Library-First**: Every feature begins as a standalone library
2. **CLI Interface**: Text in/out with JSON support
3. **Test-First**: TDD implementation is mandatory
4. **Simplicity**: Maximum three projects, no over-engineering
5. **Anti-Abstraction**: Use frameworks directly without unnecessary indirection
6. **Integration-First**: Real environments over mocks

## Hooks System

Three hooks provide workflow automation:

| Hook | Purpose |
|------|---------|
| `bmad-phase-transition.js` | Suggests next phase, validates prerequisites |
| `bmad-artifact-tracker.js` | Tracks artifacts by phase and type |
| `sdd-workflow.js` | Enforces spec-driven development workflow |

## Documentation Standards

All documentation follows these guidelines:

- **Format**: CommonMark specification (strict compliance)
- **Diagrams**: Mermaid v10+ syntax with specified types and max 15 nodes
- **Voice**: Active voice, present tense, second person
- **Structure**: Task-oriented (answers "how do I...")
- **Estimates**: No time estimates in any documentation

See `skills/bmad-core/references/documentation-standards.md` for complete guidelines.

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

## Contributing

This framework is designed to be extended. To add new commands, skills, or hooks, follow the patterns established in the existing codebase.

## License

MIT License - See LICENSE file for details.