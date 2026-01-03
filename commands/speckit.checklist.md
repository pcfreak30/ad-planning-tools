---
description: Generate quality checklists for requirements completeness and clarity
arguments:
  - description: Checklist type (ux, security, test, performance, etc.) or feature context
    required: true
includeContext: false
---

Generate a quality checklist based on feature context and requirements: {{1}}

## Input Files
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Spec: $FEATURE_SPEC | Plan: $IMPL_PLAN | Tasks: $TASKS"'

## Checklist Types

| Type | Focus |
|------|-------|
| `ux` | User experience, accessibility, flows |
| `security` | Auth, data protection, compliance |
| `test` | Coverage, edge cases, scenarios |
| `performance` | Latency, throughput, scalability |
| `general` | Requirements completeness |

## Output Format

```markdown
# [TYPE] Checklist: [FEATURE]

**Purpose**: [What this checklist validates]
**Created**: [DATE]

## [Category 1]

- [ ] CHK001 First checklist item with clear action
- [ ] CHK002 Second checklist item

## [Category 2]

- [ ] CHK003 Another category item
- [ ] CHK004 Item with specific criteria
```

## Checklist Generation

Generate items based on:
- Feature requirements from spec.md
- Technical context from plan.md
- Implementation details from tasks.md
- Best practices for the checklist type

## Validation

- Check items off as `[x]` when completed
- Add comments or findings inline
- Link to relevant resources
- Items numbered sequentially (CHK001, CHK002...)

## Output Location
`specs/###-feature-name/checklists/[type].md`