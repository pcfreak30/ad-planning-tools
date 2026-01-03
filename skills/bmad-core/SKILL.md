---
name: BMad Core
description: Core principles, phases, artifact locations, and C.O.R.E. framework for BMad Method
---

# BMad Core Skill

## Overview

BMad Method is a **modular AI-driven agile development framework** built on **BMad Core**, a universal human-AI collaboration framework (C.O.R.E. - Collaboration Optimized Reflection Engine). This skill provides the foundational knowledge and configuration needed to work with any BMad Method phase.

## When to Use

Load this skill first when:
- Starting any BMad Method engagement
- Working across multiple BMad phases
- Need to understand project configuration or artifact locations
- Setting up a new BMad project

## C.O.R.E. Framework

**C.O.R.E. (Collaboration Optimized Reflection Engine)** is the foundation of BMad Core:

- **C**ollaborative Intelligence - Human and AI agents work together with clear roles
- **O**ptimized Workflows - Structured phases with progressive disclosure
- **R**eflection Points - Built-in checkpoints for quality and alignment
- **E**volutionary Adaptation - Scale-adaptive planning depth

## Four Phases

BMad Method follows a structured progression:

### Phase 1: Analysis
Research, brainstorming, and product briefs. Understand the problem space before building solutions.

### Phase 2: Planning
PRD creation, UX design, and technical specifications. Define what to build and how it works.

### Phase 3: Solutioning
Architecture design, epic/story breakdown, and test planning. Prepare for implementation.

### Phase 4: Implementation
Sprint planning, development stories, and code review. Build and deliver working software.

## Core Configuration

These settings apply across all BMad phases:

| Setting | Default | Description |
|---------|---------|-------------|
| `user_name` | "BMad" | How agents address the user (use team name for group contexts) |
| `communication_language` | "English" | Preferred chat language/style (e.g., English, Mandarin, English Pirate) |
| `document_output_language` | "English" | Preferred document output language |
| `output_folder` | "_bmad-output" | Default location for generated artifacts |

## Artifact Locations

| Path | Purpose |
|------|---------|
| `{output_folder}/` | Default output directory for all artifacts |
| `{planning_artifacts}/` | Planning phase outputs (PRDs, specs, designs) |
| `{implementation_artifacts}/` | Implementation phase outputs (stories, code) |
| `{project-root}/_bmad/` | Installed BMad modules |

## Key Principles

### Scale-Adaptive Intelligence
Planning depth automatically adjusts based on project complexity:
- Bug fixes: Minimal ceremony, focused execution
- Features: Standard BMad workflow
- Systems: Full multi-phase engagement

### IDE-Agnostic
Works with Claude Code, Cursor, Windsurf, VS Code, and other AI IDEs through standardized agent definitions.

### Extensible
Custom modules, agents, and workflows can be built with BMad Builder (BMB) for domain-specific needs.

## Related Skills

- `bmad-analysis` - Phase 1 workflows (load when starting analysis)
- `bmad-planning` - Phase 2 workflows (load when transitioning to planning)
- `bmad-solutioning` - Phase 3 workflows (load when transitioning to solutioning)
- `bmad-implementation` - Phase 4 workflows (load when transitioning to implementation)

## Module Structure Reference

BMad Method is organized as:

```
BMAD-METHOD/
├── src/
│   ├── core/                    # Core module (shared across all modules)
│   │   ├── _module-installer/   # Module installation logic
│   │   ├── workflows/           # Core workflows (party-mode, brainstorming)
│   │   └── resources/           # Excalidraw helpers, templates
│   ├── modules/
│   │   ├── bmm/                 # BMad Method (agile development)
│   │   ├── bmb/                 # BMad Builder (create custom agents/workflows)
│   │   ├── cis/                 # Creative Intelligence Suite
│   │   ├── bmgd/                # BMad Game Development
│   │   └── bmm-bmad-method/     # BMM documentation
│   └── utility/
├── tools/
│   ├── cli/                     # Main CLI and installer
│   ├── schema/                  # Zod schemas for agent validation
│   ├── flattener/               # Document flattening for context optimization
│   └── validate-agent-schema.js # Schema validation script
└── docs/                        # Documentation
```

## Common Commands

```bash
# Installation and setup
npx bmad-method install              # Install BMAD with interactive prompts

# Development
npm run lint                         # Lint JS/YAML files
npm run lint:fix                     # Auto-fix linting issues
npm run format:check                 # Check formatting
npm run format:fix                   # Auto-format files

# Validation
npm run validate:schemas             # Validate all agent YAML files
npm run test:schemas                 # Validate agent schemas
```

## Next Steps

1. **Load the appropriate phase skill** based on your current work
2. **Configure project settings** using the core configuration variables
3. **Follow the phase workflow** defined in the loaded skill
4. **Create artifacts** in the specified output locations