---
description: Sprint planning command - Generate sprint-status.yaml from epics
arguments:
  - description: Sprint number or name
    required: false
includeContext: true
---

# BMad Sprint Planning

Execute sprint planning:

1. file_read all epic files from `{planning_artifacts}/epics/`
2. Prioritize stories for the sprint
3. Generate `{implementation_artifacts}/sprint-status.yaml`
4. Report sprint composition

**Related Skills:**
- `bmad-implementation` - Implementation workflows
