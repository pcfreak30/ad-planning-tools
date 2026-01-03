---
description: Convert tasks.md into GitHub issues for the feature
arguments:
  - description: Additional issue labels or options
    required: false
includeContext: false
tools:
  - github/github-mcp-server/issue_write
---

Convert tasks from `tasks.md` into GitHub issues.

## Tasks File
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Tasks: $TASKS"'

## Prerequisites

1. Git remote must be a GitHub URL
2. GitHub MCP server must be configured
3. `tasks.md` must exist in feature directory

## Execution Steps

1. Run prerequisite check script to get FEATURE_DIR
2. Get Git remote URL: `git config --get remote.origin.url`
3. Verify remote is GitHub (abort if not)
4. Parse tasks.md for task list
5. Create GitHub issue for each task

## Issue Format

```markdown
# [T###] Task Description

**Feature**: [FEATURE_NAME]
**Phase**: [Phase #]
**Story**: [US1/US2/None]

## Description
[Task description with file paths]

## Dependencies
- Depends on: [T###, T###]
- Can run in parallel with: [T###, T###] (if marked [P])

## Acceptance Criteria
- [ ] Task implementation complete
- [ ] Tests pass
- [ ] Code reviewed
```

## Labels to Apply

| Task Type | Label |
|-----------|-------|
| Setup | `type:setup` |
| Foundational | `type:foundation` |
| User Story | `type:feature` |
| Polish | `type:polish` |
| Tests | `type:test` |

## Safety Rules

⚠️ **CRITICAL**:
- ONLY create issues in repositories matching the Git remote
- NEVER create issues without verifying the remote URL
- Abort if remote is not GitHub