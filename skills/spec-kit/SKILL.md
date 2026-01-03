---
name: spec-kit
description: Spec-Driven Development methodology for Aider Desk - specifications as executable truth
keywords: [spec-driven-development, sdd, specifications, templates, constitution]
context:
  - Aider Desk projects requiring structured development
  - Teams practicing specification-first workflows
---

# Spec Kit - Spec-Driven Development for Aider Desk

## Core Philosophy

**Specifications are the source of truth, not code.** SDD inverts traditional development: specifications generate implementation rather than merely guiding it.

## Available Commands

| Command | Purpose | When |
|---------|---------|------|
| `/speckit.wizard` | Interactive workflow guide | Any time |
| `/speckit.constitution` | Establish project principles | Start |
| `/speckit.specify` | Define feature requirements | After constitution |
| `/speckit.clarify` | Resolve ambiguities | Before plan |
| `/speckit.plan` | Create technical plan | After spec complete |
| `/speckit.tasks` | Generate task list | After plan |
| `/speckit.analyze` | Cross-artifact analysis | Before implement |
| `/speckit.implement` | Execute implementation | After tasks |
| `/speckit.review` | Final quality gate | Before merge |
| `/speckit.audit` | Audit dependencies/architecture | Any time |
| `/speckit.retro` | Post-implementation retrospective | After review |
| `/speckit.scope` | Track scope changes | During implement |
| `/speckit.release` | Prepare for release | After review |
| `/speckit.checklist` | Quality checklists | Any time |
| `/speckit.taskstoissues` | Convert tasks to GitHub issues | For teams |

## Workflow Order

```
/speckit.wizard → /speckit.constitution → /speckit.specify → /speckit.clarify → 
/speckit.plan → /speckit.tasks → /speckit.analyze → /speckit.implement → 
/speckit.scope → /speckit.review → /speckit.audit → /speckit.retro → /speckit.release
```

## Helper Scripts

Located in `~/.aider-desk/skills/spec-kit/scripts/`:

| Script | Purpose | Usage |
|--------|---------|-------|
| `common.sh` | Path resolution, branch detection | `source common.sh && get_feature_paths` |
| `branch-naming.sh` | Generate feature branch names | `./branch-naming.sh "feature description"` |
| `check-prerequisites.sh` | Validate feature structure | `./check-prerequisites.sh --json` |

### common.sh Functions

```bash
source ~/.aider-desk/skills/spec-kit/scripts/common.sh

# Get all feature paths as variables
eval $(get_feature_paths)
# Sets: REPO_ROOT, CURRENT_BRANCH, FEATURE_DIR, FEATURE_SPEC, IMPL_PLAN, TASKS, etc.

# Check if on feature branch
check_feature_branch "$CURRENT_BRANCH" "$HAS_GIT"

# Find feature directory by prefix
find_feature_dir_by_prefix "$REPO_ROOT" "$CURRENT_BRANCH"
```

### branch-naming.sh Usage

```bash
# Generate branch name from description
./branch-naming.sh "Add user authentication system"
# Output: 001-user-auth

# With custom short name
./branch-naming.sh "description" --short-name "custom-name" --number 5
# Output: 005-custom-name

# As function
source branch-naming.sh
main "Add OAuth2 integration" "" "" "./specs"
```

### check-prerequisites.sh Usage

```bash
# JSON output for parsing
./check-prerequisites.sh --json
# {"FEATURE_DIR":"...","AVAILABLE_DOCS":["research.md","contracts/"]}

# Require tasks.md
./check-prerequisites.sh --require-tasks --include-tasks --json

# Paths only (no validation)
./check-prerequisites.sh --paths-only
```

## Key Patterns

### Constitution Pattern
`.specify/memory/constitution.md` with 5 core articles:
1. Library-first design
2. CLI interface mandate
3. Test-first imperative
4. Simplicity over abstraction
5. Integration-first testing

### Template-Driven Specs
Structured specifications with:
- Prioritized user stories (P1, P2, P3)
- Given/When/Then acceptance scenarios
- [NEEDS CLARIFICATION] markers
- Measurable success criteria

### Branch-Per-Feature
`###-short-name` pattern (001, 002, etc.)

## Directory Structure

```
.specify/
├── memory/
│   └── constitution.md
├── scripts/
└── templates/
specs/
└── ###-feature-name/
    ├── spec.md
    ├── plan.md
    ├── data-model.md
    ├── contracts/
    ├── research.md
    ├── quickstart.md
    └── tasks.md
```

## See Also

- `references/sdd-methodology.md` - Full methodology
- `references/constitution.md` - Constitution pattern
- `references/templates.md` - Template reference
- `references/quick-start.md` - 5-minute setup
- `references/workflow.md` - Complete workflow reference