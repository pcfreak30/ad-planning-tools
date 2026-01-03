# Constitution Pattern

## Purpose

The constitution (`.specify/memory/constitution.md`) acts as the architectural DNA of the project, ensuring every generated implementation maintains consistency, simplicity, and quality.

## The Nine Articles

### Article I: Library-First Principle
Every feature MUST begin as a standalone library—no exceptions. This forces modular design from the start.

### Article II: CLI Interface Mandate
All CLI interfaces MUST:
- Accept text as input (via stdin, arguments, or files)
- Produce text as output (via stdout)
- Support JSON format for structured data exchange

### Article III: Test-First Imperative (NON-NEGOTIABLE)
All implementation MUST follow strict TDD:
1. Unit tests are written first
2. Tests are validated and approved
3. Tests are confirmed to FAIL (Red phase)
4. Only then is implementation code written

### Article IV: [Project-Specific]
[Your project's custom principle]

### Article V: [Project-Specific]
[Your project's custom principle]

### Article VI: [Project-Specific]
[Your project's custom principle]

### Article VII: Simplicity
- Maximum 3 projects for initial implementation
- Additional projects require documented justification
- No future-proofing (implement for current needs)

### Article VIII: Anti-Abstraction
- Use framework features directly rather than wrapping them
- Single model representation per entity
- Avoid unnecessary indirection layers

### Article IX: Integration-First Testing
Tests MUST use realistic environments:
- Prefer real databases over mocks
- Use actual service instances over stubs
- Contract tests mandatory before implementation

## Template Integration

The implementation plan template enforces constitutional principles through "Phase -1 Gates":

```markdown
### Phase -1: Pre-Implementation Gates

#### Simplicity Gate (Article VII)
- [ ] Using ≤3 projects?
- [ ] No future-proofing?

#### Anti-Abstraction Gate (Article VIII)
- [ ] Using framework directly?
- [ ] Single model representation?

#### Integration-First Gate (Article IX)
- [ ] Contracts defined?
- [ ] Contract tests written?
```

## Example Constitution

```markdown
# Project Constitution

## Core Principles
This project prioritizes code quality, testability, and maintainability through strict adherence to specification-driven development.

## Articles

### Article I: Library-First
Every feature in this project MUST begin its existence as a standalone library. No feature shall be implemented directly within application code without first being abstracted into a reusable library component.

### Article II: CLI Interface
All library interfaces MUST:
- Accept text as input (via stdin, arguments, or files)
- Produce text as output (via stdout)
- Support JSON format for structured data exchange

### Article III: Test-First
This is NON-NEGOTIABLE: All implementation MUST follow strict TDD.
1. Unit tests are written
2. Tests are validated and approved by the user
3. Tests are confirmed to FAIL (Red phase)
4. Implementation code is written

### Article VII: Simplicity
- Maximum 3 projects for initial implementation
- Additional projects require documented justification in Complexity Tracking
- No future-proofing - implement for current requirements only

### Article VIII: Anti-Abstraction
- Use framework features directly
- Single model representation per entity
- Avoid wrapper patterns unless justified

### Article IX: Integration-First
- Tests use realistic environments
- Real databases preferred over mocks
- Contract tests mandatory before implementation

## Amendment Process
Modifications to this constitution require documented rationale, review, and backwards compatibility assessment.
```

## Enforcement Points

| Phase | Gate | Article |
|-------|------|---------|
| Plan | Simplicity Gate | VII |
| Plan | Anti-Abstraction Gate | VIII |
| Plan | Integration-First Gate | IX |
| Implement | Test-First | III |
| All | Library-First | I |
| All | CLI Interface | II |