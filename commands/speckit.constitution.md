---
description: Create or update project constitution with principle inputs
arguments:
  - description: Constitution principles and updates
    required: false
includeContext: false
---
Create or update `.specify/memory/constitution.md` with project governing principles: {{1}}

## Output Location
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "$REPO_ROOT/.specify/memory/constitution.md"'

## Required Sections

### Core Principles
List 5-9 articles governing the project:

1. **Library-First** - Every feature begins as a standalone library
2. **CLI Interface** - Text in/out, JSON support
3. **Test-First** - TDD mandatory (NON-NEGOTIABLE)
4. **Simplicity** - Max 3 projects, no future-proofing
5. **Anti-Abstraction** - Use framework directly
6. **Integration-First** - Real environments over mocks

### Governance Section
- Amendment procedure
- Versioning policy
- Compliance review expectations

## Version Bumping

| Change Type | Version Increment |
|-------------|-------------------|
| Backward incompatible principle removal/redefinition | MAJOR |
| New principle added or materially expanded | MINOR |
| Clarifications, wording, typo fixes | PATCH |

## Sync Impact Report

After updating, validate template alignment:

1. **plan-template.md** - Constitution Check section alignment
2. **spec-template.md** - Mandatory sections still present
3. **tasks-template.md** - Task categorization reflects principles
4. **All command files** - No outdated references

## Output Format

```markdown
# [PROJECT_NAME] Constitution

## Core Principles

### Article I: [Name]
[Description with MUST/SHOULD language]

### Article II: [Name]
[Description]

[...more articles]

## Governance

[Amendment procedure, versioning, compliance]

**Version**: X.Y.Z | **Ratified**: YYYY-MM-DD | **Last Amended**: YYYY-MM-DD
```

## Guidelines

- Be specific about quality standards
- Use declarative, testable language ("MUST" not "should")
- Document assumptions and rationale
- Include governance for how principles guide decisions