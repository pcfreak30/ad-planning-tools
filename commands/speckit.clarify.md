---
description: Identify and resolve ambiguous areas in feature specification
arguments:
  - description: Specific areas to clarify (optional)
    required: false
includeContext: false
---

Identify underspecified areas and ask up to 5 targeted clarification questions.

## Input File
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Spec: $FEATURE_SPEC"'

## Clarification Taxonomy

Cover these categories:

| Category | Check |
|----------|-------|
| **Functional Scope** | Core goals, out-of-scope, user roles |
| **Domain & Data** | Entities, relationships, lifecycle, scale |
| **Interaction & UX** | User journeys, error states, accessibility |
| **Non-Functional** | Performance, scalability, reliability, security |
| **Integration** | External APIs, data formats, protocols |
| **Edge Cases** | Negative scenarios, rate limiting, conflicts |
| **Constraints** | Technical limits, tradeoffs |
| **Terminology** | Glossary, consistent naming |

## Question Constraints

- Maximum 5 questions total
- Each question must be answerable with:
  - Multiple choice (2-5 options), OR
  - Short answer (≤5 words)
- Prioritize by (Impact × Uncertainty)

## Question Format

For multiple choice:
```
**Recommended:** Option [X] - <reasoning>

| Option | Description |
|--------|-------------|
| A | Option A |
| B | Option B |
| C | Option C |

Reply with letter (A, B, C), "yes" for recommendation, or short answer.
```

For short answer:
```
**Suggested:** <answer> - <reasoning>

Format: Short answer (≤5 words). Reply "yes" or provide own answer.
```

## Integration After Each Answer

1. Add to spec under `## Clarifications`:
   ```
   - Q: <question> → A: <answer>
   ```

2. Apply to appropriate section:
   - Functional → Update Functional Requirements
   - Data → Update Key Entities
   - Non-functional → Update Success Criteria
   - Edge case → Add to Edge Cases section
   - Terminology → Normalize across spec

3. Save after each integration

## Validation

- ≤5 questions asked
- No lingering `[NEEDS CLARIFICATION]` markers resolved
- No contradictory statements remain
- Terminology consistent across updated sections

## Output

- Number of questions asked
- Path to updated spec
- Sections touched
- Coverage summary table
- Recommended next command