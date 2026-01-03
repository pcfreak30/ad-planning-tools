---
description: Track scope changes during implementation (what was added/removed from original spec)
arguments:
  - description: Show full history or summary
    required: false
includeContext: false
---

Track and document scope changes between original spec and implementation.

## Current Context
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Feature: $FEATURE_DIR"'

## Scope Categories

| Category | Symbol | Meaning |
|----------|--------|---------|
| Added | ➕ | Not in original spec |
| Removed | ➖ | In spec, not implemented |
| Changed | 🔄 | Different from spec |
| Clarified | 💡 | Spec clarified, scope same |
| Deferred | ⏸️ | Moved to future release |

## Comparison Points

### 1. User Stories

| Original Spec | Implementation | Category | Notes |
|---------------|----------------|----------|-------|
| US1: Create albums | US1: Create albums | ✅ SAME | |
| US2: Share albums | US2: Share albums + comments | 🔄 CHANGED | Comments added |
| US3: Export albums | - | ➖ REMOVED | Deferred to v2 |
| US4: - | US4: Import albums | ➕ ADDED | Discovered need |

### 2. Requirements

| FR # | Requirement | Status | Change |
|------|-------------|--------|--------|
| FR-001 | Users can create albums | ✅ | |
| FR-002 | Albums grouped by date | ✅ | |
| FR-003 | Drag-and-drop reorg | 🔄 | Changed to click-to-move |
| FR-004 | Nested albums | ➖ | Removed per PO |

### 3. Technical Scope

| Plan Item | Implementation | Category | Notes |
|-----------|----------------|----------|-------|
| SQLite database | SQLite + Redis cache | 🔄 | Cache added for performance |
| Vanilla JS | React + TypeScript | 🔄 | Changed stack |
| Local storage | Local storage + cloud sync | ➕ | Cloud sync added |

## Scope Report

```markdown
## Scope Report: [FEATURE]

### Summary
| Metric | Count |
|--------|-------|
| Unchanged | 8 |
| Added | 3 |
| Removed | 2 |
| Changed | 4 |
| Deferred | 1 |

### Scope Creep Analysis
**Added Features (not in original spec):**
1. ➕ `src/services/import.js` - Album import from external sources
   - Rationale: Discovered need during user testing
   - Impact: +2 days, affects US1 and US2

2. ➕ `src/utils/analytics.js` - Usage analytics
   - Rationale: Product team request
   - Impact: +1 day, affects all user stories

**Removed Features (from original spec):**
1. ➖ Nested albums (FR-005)
   - Rationale: PO decision - too complex for MVP
   - Impact: -3 days, documented in v2 backlog

**Changed Requirements:**
1. 🔄 Drag-and-drop → Click-to-move
   - Original: "Drag and drop albums"
   - Actual: "Click album, select position"
   - Rationale: Accessibility requirement
   - Impact: No schedule impact

### Technical Scope Changes
| Plan | Actual | Impact |
|------|--------|--------|
| SQLite | SQLite + Redis | Performance improvement |
| Vanilla JS | React + TypeScript | +5 days learning curve |

### Scope Change Approval
| Change | Requested By | Approved By | Date |
|--------|--------------|-------------|------|
| Import feature | User testing | Product | 2025-01-15 |
| Analytics | Product | Tech Lead | 2025-01-18 |
| Stack change | Dev team | Architect | 2025-01-10 |

### Recommendations
1. **Review import feature** - Was it properly spec'd?
2. **Update spec** - Add import feature to spec.md
3. **Document stack change** - Update plan.md with React/TypeScript
4. **Track deferred items** - Add nested albums to v2 backlog
```

## Scope Drift Detection

Compare implementation against spec:

```bash
# Find files not referenced in spec
grep -r "src/" spec.md | grep -v "TODO\|NEEDS CLARIFICATION"

# Find spec requirements not implemented
grep "FR-" spec.md | grep -v implemented

# Find test coverage gaps
grep "Given\|When\|Then" spec.md | wc -l
```

## Guidelines

- Track changes as they happen, not retroactively
- Document rationale for each change
- Flag unauthorized scope creep
- Update spec when scope changes are approved