---
description: Final review and quality gate for feature implementation
arguments:
  - description: Review focus areas (constitution, code, tests, all)
    required: false
includeContext: false
---

Run a final consolidated review of the current feature, validating constitution alignment, code health, and spec coverage.

## Input Files
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Constitution: $REPO_ROOT/.specify/memory/constitution.md" && echo "Spec: $FEATURE_SPEC" && echo "Plan: $IMPL_PLAN" && echo "Tasks: $TASKS"'

## Review Phases

### Phase 1: Constitution Alignment

Parse constitution and check:

| Principle | Check |
|-----------|-------|
| **Library-First** | Features as standalone modules |
| **CLI Interface** | Text in/out, JSON support |
| **Test-First** | Tests written before implementation |
| **Simplicity** | ≤3 projects, no future-proofing |
| **Anti-Abstraction** | Framework used directly |
| **Integration-First** | Real environments over mocks |

**Output**: List violations with file:line references

### Phase 2: Code Health Analysis

#### Unused Code Detection
- Unused functions, classes, variables
- Dead code branches (feature flags)
- Orphaned modules

#### Duplicate Code
- Near-duplicate blocks (>80% similarity)
- Copy-paste patterns
- Repeated utility functions

#### Code Smells
- Functions >50 lines
- Classes >300 lines
- High cyclomatic complexity
- Deep nesting (>4 levels)

### Phase 3: Spec & Plan Alignment

| Check | Status |
|-------|--------|
| Tasks from plan implemented? | ✅ / ❌ |
| Code matches requirements? | ✅ / ⚠️ / ❌ |
| No scope creep? | ✅ / ⚠️ |
| Tests cover requirements? | ✅ / ⚠️ / ❌ |

### Phase 4: Quality & Hygiene

#### Automated Checks
- Test status and coverage %
- Linting issues (key violations only)
- Formatting consistency

#### Manual Markers
- TODO/FIXME categorized by severity
- Hard-coded secrets (security scan)
- Missing error handling
- Inconsistent naming

### Phase 5: Review Report

```markdown
## Review Report: [FEATURE]

### Status: ✅ READY / ⚠️ NEEDS ATTENTION / ❌ BLOCKED

### Constitution Compliance
| Principle | Status | Violations |
|-----------|--------|------------|
| Library-First | ✅ | None |
| Test-First | ⚠️ | 2 tests missing |
| Simplicity | ✅ | None |

**Key Violations:**
- `src/utils/auth.js:45` - Function exceeds 50 lines
- `tests/unit/api.test.js` - Missing contract tests

### Spec & Plan Coverage
- **Tasks Implemented**: 12/14 (86%)
- **Requirements Covered**: 8/10 (80%)
- **Scope Creep**: 2 behaviors not in spec
  - `src/services/analytics.js` - Analytics tracking (not in spec)

### Code Health
- **Unused Code**: 3 functions identified
- **Duplication**: 1 near-duplicate block (src/models/*.py)
- **Smells**: 5 functions >50 lines

### Tests & Coverage
- **Unit Tests**: 45/50 (90%)
- **Integration Tests**: 8/10 (80%)
- **Contract Tests**: 2/2 (100%)
- **Coverage**: 78%

### Recommended Next Steps
1. Add missing unit tests for `UserService`
2. Remove unused `calculateLegacyMetric()` function
3. Refactor `processPayment()` to reduce complexity
4. Document the analytics tracking feature or remove it
```

## Output Summary

| Metric | Value |
|--------|-------|
| Constitution Violations | N |
| Unused Code Items | N |
| Duplicate Blocks | N |
| Spec Coverage | % |
| Test Coverage | % |
| Overall Status | READY/NEEDS ATTENTION/BLOCKED |

## Guidelines

- Be specific: include file:line references
- Distinguish between blocking and advisory issues
- Prioritize constitution violations (always blocking)
- Suggest concrete refactors, not just problems
- Keep report concise but actionable