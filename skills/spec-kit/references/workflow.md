# Complete SDD Workflow Reference

## Command Sequence

```
/speckit.constitution  →  /speckit.specify  →  /speckit.clarify  →  /speckit.plan  →  /speckit.tasks  →  /speckit.analyze  →  /speckit.implement
```

## Phase Gate Model

| Phase | Gate | Artifact | Pass Criteria |
|-------|------|----------|---------------|
| Specify | None | spec.md | User stories, requirements, success criteria |
| Clarify | None | spec.md + Clarifications | ≤5 questions answered, no [NEEDS CLARIFICATION] |
| Plan | Phase -1 | plan.md | All constitution gates pass |
| Tasks | None | tasks.md | All user stories have tasks |
| Analyze | None | Analysis report | No CRITICAL issues |
| Implement | None | Working code | All tasks complete, tests pass |

## Artifact Dependencies

```
spec.md
  ├── plan.md (requires spec.md)
  │   ├── data-model.md (optional)
  │   ├── contracts/ (optional)
  │   ├── research.md (optional)
  │   └── quickstart.md (optional)
  └── tasks.md (requires plan.md)
      └── GitHub issues (optional, via /speckit.taskstoissues)
```

## Path Resolution

Commands use context-aware path resolution:

1. **Git branch detection**: `git rev-parse --abbrev-ref HEAD`
2. **SPECIFY_FEATURE env var**: Override for non-git repos
3. **Fallback**: Latest `specs/###-*` directory by numeric prefix

## Common.sh Functions

```bash
get_repo_root()          # Find repository root
get_current_branch()     # Get current feature branch
get_feature_paths()      # Get all feature paths as variables
find_feature_dir_by_prefix()  # Support multiple branches per spec
check_feature_branch()   # Validate branch naming
```

## Check-prerequisites.sh Options

| Option | Purpose |
|--------|---------|
| `--json` | JSON output format |
| `--require-tasks` | Fail if tasks.md missing |
| `--include-tasks` | Include tasks.md in AVAILABLE_DOCS |
| `--paths-only` | Output paths without validation |

## Task ID Sequencing

| Phase | ID Range | Example |
|-------|----------|---------|
| Setup | T001-T009 | T001 Create project structure |
| Foundational | T010-T019 | T010 Setup database schema |
| User Story 1 | T020-T029 | T020 [US1] Create User model |
| User Story 2 | T030-T039 | T030 [US2] Create Project model |
| Polish | TXXX | TXXX Documentation updates |

## Parallel Execution Markers

Tasks marked `[P]` can run in parallel:
- Different files
- No dependencies on incomplete tasks
- Same user story or across stories

## Constitution Versioning

| Change | Version Bump |
|--------|--------------|
| Backward incompatible principle change | MAJOR |
| New principle added | MINOR |
| Clarifications, wording fixes | PATCH |

## Quality Gates

### Before /speckit.plan
- [ ] spec.md complete
- [ ] No [NEEDS CLARIFICATION] markers
- [ ] User stories independently testable

### Before /speckit.implement
- [ ] plan.md complete
- [ ] tasks.md generated
- [ ] /speckit.analyze shows no CRITICAL issues
- [ ] All Phase -1 gates pass