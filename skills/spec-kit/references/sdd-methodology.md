# Spec-Driven Development Methodology

## The Power Inversion

For decades, code has been king. Specifications served code—they were the scaffolding we built and then discarded once the "real work" of coding began.

**SDD inverts this power structure:** Specifications don't serve code—code serves specifications. The PRD isn't a guide for implementation; it's the source that generates implementation.

## Why SDD Matters Now

1. **AI capabilities** - Natural language specs can reliably generate working code
2. **Software complexity** - SDD provides systematic alignment through specification-driven generation
3. **Pace of change** - SDD transforms requirement changes from obstacles into systematic regenerations

## Core Principles

1. **Specifications as Lingua Franca** - The spec becomes the primary artifact
2. **Executable Specifications** - Precise, complete, unambiguous enough to generate working systems
3. **Continuous Refinement** - Consistency validation happens continuously
4. **Research-Driven Context** - Research agents gather critical context
5. **Bidirectional Feedback** - Production reality informs specification evolution
6. **Branching for Exploration** - Generate multiple implementation approaches

## The 5-Command Workflow

### 1. `/speckit.constitution`
Create project governing principles. Run once at project start.

### 2. `/speckit.specify`
Transform feature description into structured specification:
- Auto-generates branch name (`###-short-name`)
- Creates `specs/###-feature-name/spec.md`
- Includes user stories, requirements, success criteria

### 3. `/speckit.plan`
Create technical implementation plan:
- Generates `plan.md`, `data-model.md`, `contracts/`, `quickstart.md`
- Validates against constitution
- Resolves all clarifications through research

### 4. `/speckit.tasks`
Break plan into actionable tasks:
- Creates `tasks.md` with dependencies
- Marks parallelizable tasks with `[P]`
- Orders by user story

### 5. `/speckit.implement`
Execute tasks following TDD approach.

## Optional Enhancement Commands

- `/speckit.clarify` - Structured questioning to de-risk ambiguous areas
- `/speckit.analyze` - Cross-artifact consistency analysis
- `/speckit.checklist` - Generate quality checklists

## Directory Structure

```
.specify/
├── memory/
│   └── constitution.md    # Project principles
├── scripts/
├── specs/
│   └── ###-feature-name/
│       ├── spec.md
│       ├── plan.md
│       ├── data-model.md
│       ├── contracts/
│       ├── research.md
│       ├── quickstart.md
│       └── tasks.md
└── templates/
    ├── spec-template.md
    ├── plan-template.md
    ├── tasks-template.md
    └── ...
```