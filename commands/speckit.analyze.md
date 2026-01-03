---
description: Cross-artifact consistency and quality analysis (read-only)
arguments:
  - description: Focus areas or empty for full analysis
    required: false
includeContext: false
---

Perform cross-artifact consistency analysis across spec.md, plan.md, and tasks.md.

## Input Files
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Spec: $FEATURE_SPEC | Plan: $IMPL_PLAN | Tasks: $TASKS"'

## Operating Constraints

**STRICTLY READ-ONLY**: Do NOT modify any files. Output analysis report only.

**Constitution Authority**: Constitution violations are CRITICAL and require adjustment—not dilution or ignoring.

## Detection Passes

### A. Duplication
- Near-duplicate requirements
- Lower-quality phrasing for consolidation

### B. Ambiguity
- Vague adjectives (fast, scalable, secure, intuitive) lacking metrics
- Unresolved placeholders (TODO, ???, `<placeholder>`)

### C. Underspecification
- Requirements missing measurable outcome
- User stories missing acceptance criteria
- Tasks referencing undefined components

### D. Constitution Alignment
- Requirements conflicting with MUST principles
- Missing mandated sections from constitution

### E. Coverage Gaps
- Requirements with zero associated tasks
- Non-functional requirements not in tasks (performance, security)

### F. Inconsistency
- Terminology drift (same concept, different names)
- Data entities in plan but absent in spec
- Task ordering contradictions

## Severity Heuristic

| Severity | Criteria |
|----------|----------|
| **CRITICAL** | Constitution MUST violation, missing artifact, zero coverage |
| **HIGH** | Duplicate/conflicting requirement, ambiguous security |
| **MEDIUM** | Terminology drift, missing NFR coverage |
| **LOW** | Style improvements, minor redundancy |

## Output Format

```markdown
## Specification Analysis Report

| ID | Category | Severity | Location | Summary | Recommendation |
|----|----------|----------|----------|---------|----------------|
| A1 | Duplication | HIGH | spec.md:L120 | Two similar... | Merge phrasing |

**Coverage Summary:**

| Requirement | Has Task? | Task IDs |
|-------------|-----------|----------|
| user-can-upload | Yes | T005, T006 |

**Constitution Alignment Issues:**
- [CRITICAL] Article III: Test-first not reflected in tasks

**Metrics:**
- Total Requirements: 12
- Total Tasks: 24
- Coverage %: 92%
- Critical Issues: 1
```

## Next Actions

- CRITICAL issues: Resolve before `/speckit.implement`
- LOW/MEDIUM: User may proceed with improvement suggestions
- Provide explicit remediation commands