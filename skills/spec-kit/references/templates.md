# Template Structure Reference

## Spec Template (`spec-template.md`)

### Required Sections

1. **Feature Header** - Branch, date, status, input
2. **User Scenarios & Testing** - Prioritized user stories (P1, P2, P3)
   - Each story independently testable
   - Acceptance scenarios: Given/When/Then format
3. **Requirements** - Functional requirements with FR-### numbering
   - Use `[NEEDS CLARIFICATION]` for ambiguities (max 3)
   - Requirements MUST be testable
4. **Key Entities** - Data models (if feature involves data)
5. **Success Criteria** - Measurable, technology-agnostic outcomes

### Key Constraints

- User stories PRIORITIZED as user journeys
- Each story INDEPENDENTLY TESTABLE
- Maximum 3 [NEEDS CLARIFICATION] markers
- Requirements MUST be testable

## Plan Template (`plan-template.md`)

### Phases

- **Phase -1**: Pre-Implementation Gates (Constitution compliance)
- **Phase 0**: Outline & Research (resolve clarifications)
- **Phase 1**: Design & Contracts (data model, APIs)
- **Phase 2**: Implementation Details

### Generated Artifacts

| File | Purpose |
|------|---------|
| `research.md` | Technology research and decisions |
| `data-model.md` | Entity definitions |
| `contracts/` | API specifications (OpenAPI/GraphQL) |
| `quickstart.md` | Key validation scenarios |

## Tasks Template (`tasks-template.md`)

### Strict Checklist Format

```
- [ ] [TaskID] [P?] [Story?] Description with file path
```

**Components:**
1. **Checkbox**: `- [ ]`
2. **Task ID**: Sequential (T001, T002...)
3. **[P] marker**: Parallelizable (different files, no dependencies)
4. **[Story] label**: `[US1]`, `[US2]`, etc. (user story phases only)
5. **Description**: Clear action with exact file path

### Phase Structure

| Phase | Content |
|-------|---------|
| Phase 1 | Setup (project initialization) |
| Phase 2 | Foundational (blocking prerequisites) |
| Phase 3+ | User Stories in priority order |
| Final | Polish & cross-cutting concerns |

## Command Templates

| Command | Purpose |
|---------|---------|
| `speckit.constitution.md` | Establish project principles |
| `speckit.specify.md` | Create feature specification |
| `speckit.plan.md` | Generate implementation plan |
| `speckit.tasks.md` | Break plan into tasks |
| `speckit.implement.md` | Execute implementation |
| `speckit.clarify.md` | Structured clarification |
| `speckit.analyze.md` | Cross-artifact analysis |
| `speckit.checklist.md` | Quality checklists |

## Template Variables

| Variable | Purpose |
|----------|---------|
| `{SCRIPT}` | Path to execution script |
| `$ARGUMENTS` | User input arguments |
| `{AGENT_SCRIPT}` | Agent context update script |
| `__AGENT__` | Current agent name |
| `{1}`, `{2}` | Positional arguments |
| `{ARGS}` | All arguments as string |

## Directory Structure

```
.specify/
├── memory/
│   └── constitution.md
├── scripts/
├── templates/
│   ├── spec-template.md
│   ├── plan-template.md
│   ├── tasks-template.md
│   └── checklist-template.md
specs/
└── ###-feature-name/
    ├── spec.md
    ├── plan.md
    ├── data-model.md
    ├── contracts/
    ├── research.md
    ├── quickstart.md
    ├── tasks.md
    └── checklists/
        ├── ux.md
        ├── security.md
        └── test.md
```