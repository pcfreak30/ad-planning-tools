---
description: Generate actionable, dependency-ordered tasks.md from plan and spec
arguments: []
includeContext: false
---

Generate `tasks.md` organized by user story with proper dependencies.

## Input Files
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Spec: $FEATURE_SPEC | Plan: $IMPL_PLAN | Data: $DATA_MODEL | Contracts: $CONTRACTS_DIR"'

**Files (in priority order):**
1. `$IMPL_PLAN` - tech stack, libraries, project structure
2. `$FEATURE_SPEC` - user stories with priorities (P1, P2, P3...)
3. `$DATA_MODEL` - entities (if exists)
4. `$CONTRACTS_DIR` - API endpoints (if exists)
5. `$RESEARCH` - technical decisions (if exists)
6. `$QUICKSTART` - test scenarios (if exists)

## Output Format

### Strict Checklist Format (REQUIRED)

```
- [ ] [TaskID] [P?] [Story?] Description with file path
```

**Components:**
1. **Checkbox**: `- [ ]` (always)
2. **Task ID**: Sequential (T001, T002, T003...)
3. **[P] marker**: Only if parallelizable (different files, no dependencies)
4. **[Story] label**: REQUIRED for user story phases only
   - Format: `[US1]`, `[US2]`, `[US3]`
   - Setup/Foundational/Polish: NO story label
5. **Description**: Clear action with exact file path

**Examples:**
```
- [ ] T001 Create project structure per plan
- [ ] T005 [P] Implement auth middleware in src/middleware/auth.py
- [ ] T012 [P] [US1] Create User model in src/models/user.py
- [ ] T014 [US1] Implement UserService in src/services/user_service.py
```

## Phase Structure

| Phase | Content |
|-------|---------|
| Phase 1 | Setup (project initialization) |
| Phase 2 | Foundational (blocking prerequisites) |
| Phase 3+ | User Stories in priority order (P1, P2, P3...) |
| Final | Polish & cross-cutting concerns |

## Task Organization Principles

1. **From User Stories** - PRIMARY ORGANIZATION
   - Each story gets its own phase
   - Map: Models → Services → Endpoints → Integration
   - Tests (if requested) before implementation

2. **From Contracts**
   - Map each endpoint → user story it serves
   - Contract tests `[P]` before implementation

3. **From Data Model**
   - Entity → earliest story or Setup phase
   - Relationships → service layer in appropriate phase

4. **From Setup/Infrastructure**
   - Shared → Setup phase
   - Blocking → Foundational phase
   - Story-specific → within that story's phase

## Output Summary

Report:
- Total task count
- Task count per user story
- Parallel opportunities
- Independent test criteria per story
- Suggested MVP scope (typically US1 only)