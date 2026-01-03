---
description: Post-implementation retrospective to improve constitution based on lessons learned
arguments:
  - description: Focus areas for retro (process, architecture, quality)
    required: false
includeContext: false
---

Conduct a retrospective to improve the constitution and future implementations.

## Current Context
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Feature: $FEATURE_DIR"'

## When to Run

After `/speckit.review` shows ✅ READY status, before merging.

## Retro Format

### Step 1: What Went Well?

| Category | What Worked | Evidence |
|----------|-------------|----------|
| Constitution | Principles that guided well | Examples from implementation |
| Spec quality | Requirements that were clear | User stories that translated well |
| Task breakdown | Tasks that were well-scoped | Task descriptions |
| Process | Steps that helped | Specific commands or approaches |

### Step 2: What Could Be Improved?

| Category | Issue | Impact | Suggestion |
|----------|-------|--------|------------|
| Constitution | Missing principle | High | Add observability requirement |
| Spec | Ambiguous requirement | Medium | More concrete acceptance criteria |
| Tasks | Tasks too large | Low | Break into smaller units |
| Process | Too many clarifications | Medium | Better initial spec |

### Step 3: Constitution Amendments

Based on lessons learned, propose changes:

| Current Principle | Proposed Change | Rationale |
|-------------------|-----------------|-----------|
| Test-first | Add "Contract tests mandatory" | API changes caught late |
| Library-first | Clarify "no organizational libs" | Created utils that weren't reused |

### Step 4: Process Improvements

| Issue | Proposed Process Change | Expected Benefit |
|-------|------------------------|------------------|
| Clarifications came late | Add clarification checkpoint in spec template | Earlier resolution |
| Tasks missed edge cases | Add "edge cases" section to task template | Better coverage |

## Retro Report

```markdown
## Retro Report: [FEATURE]

### What Went Well ✅
- Constitution's CLI mandate ensured all modules are testable
- User Story 2 was perfectly scoped - 4 tasks, 2 days
- Parallel execution [P] markers worked well

### What Could Be Improved ⚠️
- FR-003 (error handling) was underspecified → 3 clarifications needed
- TDD approach wasn't followed for User Story 3 → tests retrofitted
- Research phase missed performance requirements → added later

### Proposed Constitution Amendments

| Article | Change | Rationale |
|---------|--------|-----------|
| III. Test-First | Add: "Contract tests before integration" | API contracts changed after integration |
| V. Observability | Add: "All services must emit metrics" | No observability in production |

### Process Improvements

| Current Process | Proposed Change | Benefit |
|-----------------|-----------------|---------|
| Clarify after plan | Clarify before plan | Reduces rework |
| Tasks from plan only | Include research findings | Better task context |

### Action Items

- [ ] Update constitution with new observability requirement
- [ ] Add "edge cases" section to spec template
- [ ] Create task checklist for contract tests
- [ ] Document performance requirements in research template

### Next Implementation Recommendations

1. Spend more time in research phase on non-functional requirements
2. Add "contract test" as explicit task type
3. Consider adding security review checkpoint
```

## Constitution Update Workflow

If amendments proposed:

1. Run `/speckit.constitution` with amendments
2. Review sync impact report
3. Update dependent templates
4. Commit with message: `docs: retro amendments to constitution vX.Y.Z`

## Guidelines

- Be specific with examples
- Distinguish constitution issues from process issues
- Prioritize high-impact improvements
- Create actionable follow-up items