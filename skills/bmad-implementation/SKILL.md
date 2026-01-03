---
name: BMad Implementation Workflow
description: "Phase 4: Sprint planning, dev stories, code review - guides the agent through implementation activities"
---

# BMad Implementation Workflow

## Overview
Phase 4 executes the plan through sprint planning, development stories, and code review.

## When to Use
- Solutioning phase is complete
- Starting development work
- Conducting code reviews
- Managing sprint execution

## Workflow Steps

### 1. Sprint Planning Workflow
Generate sprint-status.yaml:

1. file_read epics and stories
2. Prioritize stories for sprint
3. Estimate sprint capacity
4. Select stories for sprint
5. Create sprint-status.yaml

### 2. Create Story Workflow
Prepare developer-ready stories:

1. file_read epic and architecture
2. Define task breakdown
3. Set up development environment
4. Create story file with tasks
5. Validate story readiness

### 3. Dev Story Workflow
Execute development with TDD:

1. file_read story file
2. Follow red-green-refactor cycle
3. Implement tasks in order
4. Write failing tests first
5. Make tests pass
6. Refactor code
7. Document in dev-agent-record

### 4. Code Review Workflow
Review implementation:

1. file_read changed files
2. Check against story requirements
3. Review code quality
4. Check test coverage
5. Provide feedback

## Key Artifacts
- `{implementation_artifacts}/sprint-status.yaml` - Sprint status
- `{implementation_artifacts}/stories/` - Developer stories
- `{implementation_artifacts}/dev-agent-record.md` - Dev execution record

## Related Skills
- `bmad-core` - Core principles (always load first)
- `bmad-solutioning` - Previous phase
