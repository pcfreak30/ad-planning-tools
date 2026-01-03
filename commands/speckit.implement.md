---
description: Execute implementation following the task list with TDD approach
arguments: []
includeContext: false
---

Execute implementation following the task list in `tasks.md`.

## Prerequisites Check
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Constitution: $REPO_ROOT/.specify/memory/constitution.md" && echo "Spec: $FEATURE_SPEC" && echo "Plan: $IMPL_PLAN" && echo "Tasks: $TASKS"'

## Execution Phases

### Phase 1: Setup
- Initialize project structure, dependencies, configuration
- Create/verify ignore files (.gitignore, .dockerignore, etc.)

### Phase 2: Foundational
- Blocking prerequisites for all user stories
- Shared infrastructure

### Phase 3+: User Stories (P1, P2, P3...)
- Tests (if requested) → Models → Services → Endpoints → Integration
- Each phase independently testable

### Final Phase: Polish
- Unit tests, performance optimization, documentation

## TDD Approach

For each task:
1. Write failing tests first
2. Implement code to make tests pass
3. Verify tests pass
4. Mark task complete in tasks.md: `- [x]`

## Ignore File Patterns

Create/verify based on tech stack:

| Language | Patterns |
|----------|----------|
| Node.js | `node_modules/`, `dist/`, `build/`, `*.log`, `.env*` |
| Python | `__pycache__/`, `*.pyc`, `.venv/`, `dist/`, `*.egg-info/` |
| Java | `target/`, `*.class`, `*.jar`, `.gradle/`, `build/` |
| Rust | `target/`, `debug/`, `release/`, `*.rs.bk`, `.idea/` |
| Go | `*.exe`, `*.test`, `vendor/` |
| Universal | `.DS_Store`, `Thumbs.db`, `*.tmp`, `.swp`, `.vscode/`, `.idea/` |

## Progress Tracking

Update tasks.md as you complete:
```markdown
- [ ] T001 Description
- [x] T002 Description (completed)
- [ ] T003 Description
```

## Constraints

- Follow constitution principles at all times
- Run tests after each implementation
- Sequential tasks must complete before dependent tasks
- Parallel tasks `[P]` can execute together
- Mark complete only when tests pass