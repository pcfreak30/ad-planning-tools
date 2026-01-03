---
description: Audit dependencies and architecture against the implementation plan
arguments:
  - description: Audit focus (dependencies, architecture, all)
    required: false
includeContext: false
---

Audit current implementation against the plan to detect drift.

## Input Files
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Plan: $IMPL_PLAN | Research: $RESEARCH"'

## Audit Categories

### 1. Dependency Audit

| Check | Status | Notes |
|-------|--------|-------|
| Plan dependencies installed? | ✅ / ❌ | |
| No unexpected dependencies? | ✅ / ⚠️ | |
| Version matches plan? | ✅ / ⚠️ | |
| Security vulnerabilities? | ⚠️ | List CVEs |

**Commands to check:**
```bash
# Node.js
npm list --depth=0

# Python
pip freeze | grep -f requirements.txt

# Go
go list -m all

# Rust
cargo tree
```

### 2. Architecture Audit

| Check | Status | Notes |
|-------|--------|-------|
| Project structure matches plan? | ✅ / ⚠️ | |
| Expected modules exist? | ✅ / ❌ | |
| No unauthorized modules? | ✅ / ⚠️ | |
| Layering respected? | ✅ / ⚠️ | Models → Services → API |

**Structure comparison:**
```
Plan Structure          | Actual Structure
────────────────────────────────────────────
src/models/            | src/models/ ✅
src/services/          | src/services/ ✅
src/api/               | src/api/ ✅
tests/                 | tests/ ✅
```

### 3. Version Drift

| Check | Status | Notes |
|-------|--------|-------|
| Language version | ✅ / ⚠️ | Plan: X.Y, Actual: A.B |
| Framework version | ✅ / ⚠️ | |
| Tooling versions | ✅ / ⚠️ | |

### 4. Test Coverage Drift

| Check | Status | Notes |
|-------|--------|-------|
| Contract tests exist? | ✅ / ❌ | |
| Integration tests exist? | ✅ / ⚠️ | |
| Unit test coverage | XX% | Plan expected: YY% |

## Audit Report

```markdown
## Audit Report: [FEATURE]

### Status: ✅ PASS / ⚠️ WARNINGS / ❌ FAILURES

### Dependency Compliance
| Dependency | Plan Version | Actual | Status |
|------------|--------------|--------|--------|
| react | ^18.0.0 | ^18.2.0 | ✅ |
| typescript | ^5.0.0 | ^4.9.0 | ⚠️ DOWNGRADE |

**Issues:**
- `package.json` contains 3 undocumented dependencies
- `lodash` used but not in plan

### Architecture Compliance
| Component | Expected | Exists | Status |
|-----------|----------|--------|--------|
| models/User.ts | Yes | Yes | ✅ |
| services/Auth.ts | Yes | Yes | ✅ |
| utils/Helpers.ts | No | Yes | ⚠️ UNPLANNED |

**Issues:**
- `utils/Helpers.ts` not in plan (possible abstraction violation)

### Version Compliance
| Tool | Plan | Actual | Status |
|------|------|--------|--------|
| Node.js | 18.x | 20.x | ⚠️ NEWER |
| TypeScript | 5.0 | 4.9 | ⚠️ OLDER |

### Recommendations
1. Add `lodash` to plan or remove from code
2. Document `utils/Helpers.ts` or refactor into appropriate layer
3. Update plan to reflect Node.js 20.x if intentional
```

## Output Summary

| Metric | Value |
|--------|-------|
| Dependency Issues | N |
| Architecture Issues | N |
| Version Drift | N |
| Overall Status | PASS/WARNINGS/FAIL |

## Guidelines

- Flag unplanned additions (possible scope creep)
- Note version upgrades/downgrades
- Distinguish blocking vs advisory issues
- Suggest specific remediation