---
description: Create technical implementation plan from feature specification
arguments:
  - description: Tech stack and architecture choices
    required: true
includeContext: false
---
Create a technical implementation plan based on the existing spec and your tech stack choices: {{1}}

## Input Files
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Spec: $FEATURE_SPEC | Constitution: $REPO_ROOT/.specify/memory/constitution.md"'

## Output Location
`specs/###-feature-name/`

## Generated Artifacts

| File | Purpose |
|------|---------|
| `plan.md` | Main implementation plan |
| `data-model.md` | Entity definitions |
| `contracts/` | API specifications |
| `quickstart.md` | Key validation scenarios |
| `research.md` | Technology research |

## Phases

### Phase -1: Pre-Implementation Gates
Validate against constitution:
- [ ] Using ≤3 projects?
- [ ] No future-proofing?
- [ ] Using framework directly?
- [ ] Single model representation?
- [ ] Contracts defined?
- [ ] Contract tests written?

### Phase 0: Research
Resolve all `[NEEDS CLARIFICATION]` from spec:
- Research each unknown technology
- Document decisions with rationale
- List alternatives considered

### Phase 1: Design & Contracts
- Extract entities → `data-model.md`
- Generate API contracts → `contracts/` (OpenAPI/GraphQL)
- Create `quickstart.md` with validation scenarios

## Constraints

- Plan must pass all Phase -1 gates OR document justified exceptions
- All clarifications must be resolved in research.md
- Contracts must be testable (can generate tests from them)