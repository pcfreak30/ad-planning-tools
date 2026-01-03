---
name: BMad Solutioning Workflow
description: "Phase 3: Architecture, epics, stories, test design - guides the agent through solutioning activities"
---

# BMad Solutioning Workflow

## Overview
Phase 3 creates the implementation roadmap through architecture design, epic decomposition, user story creation, and test planning.

## When to Use
- Planning phase is complete
- Need to design system architecture
- Breaking down work into epics and stories
- Planning test strategy and approach

## Workflow Steps

### 1. Architecture Workflow
Create Architecture Document:

1. file_read PRD and Technical Specification
2. Define system boundaries and context
3. Design component architecture
4. Document data flow and storage
5. Define technology stack
6. Complete and validate architecture

### 2. Epics and Stories Workflow
Generate epics and user stories:

1. file_read Architecture Document and PRD
2. Decompose into epics
3. Create user stories for each epic
4. Define acceptance criteria
5. Estimate effort
6. Complete and validate

### 3. Test Design Workflow
Plan testing approach:

1. file_read Architecture and Stories
2. Identify test types needed
3. Define test coverage strategy
4. Create test scenarios
5. Complete test design

## Key Artifacts
- `{planning_artifacts}/architecture.md` - Architecture document
- `{planning_artifacts}/epics/` - Epic files
- `{implementation_artifacts}/stories/` - User stories
- `{planning_artifacts}/test-plan.md` - Test design

## Related Skills
- `bmad-core` - Core principles (always load first)
- `bmad-planning` - Previous phase
- `bmad-implementation` - Next phase
