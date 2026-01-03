---
description: Create feature specification from natural language description
arguments:
  - description: Feature description (what and why, not how)
    required: true
includeContext: false
---
Create a structured feature specification from the following description: {{1}}

## Branch Name
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/branch-naming.sh && main "{{1}}" "" "" "./specs"'

## Output Location
`specs/$(BRANCH_NAME)/spec.md`

## Required Sections

### 1. User Scenarios & Testing
- Prioritized user stories (P1 = essential, P2 = important, P3 = nice-to-have)
- Each story INDEPENDENTLY TESTABLE
- Acceptance scenarios: Given/When/Then format

### 2. Requirements
- Functional requirements with FR-### numbering
- Use `[NEEDS CLARIFICATION: question]` for ambiguities (max 3)
- Requirements MUST be testable

### 3. Key Entities
- Data models involved (if applicable)
- Relationships between entities

### 4. Success Criteria
- Measurable, technology-agnostic outcomes
- Quantitative metrics (time, performance, volume)
- Qualitative measures (user satisfaction, task completion)

## Constraints

- Focus on WHAT and WHY, not HOW (tech stack comes later in /speckit.plan)
- Each user story must be independently deployable
- Maximum 3 `[NEEDS CLARIFICATION]` markers total
- Prioritize clarifications by impact: scope > security > UX > technical

## Environment Variable

Set `SPECIFY_FEATURE=$BRANCH_NAME` for downstream commands