# Quick Start Guide - Spec-Driven Development

## The 6-Step Process

### Step 1: Install Specify CLI

```bash
# Create new project
uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>

# Or initialize in current directory
uvx --from git+https://github.com/github/spec-kit.git specify init .
```

### Step 2: Define Constitution

```markdown
/speckit.constitution This project follows a "Library-First" approach. All features must be implemented as standalone libraries first. We use TDD strictly.
```

### Step 3: Create the Spec

```markdown
/speckit.specify Build an application that helps organize photos in separate albums grouped by date.
```

### Step 4: Refine the Spec

```bash
/speckit.clarify Focus on security and performance requirements.
```

### Step 5: Create Technical Plan

```markdown
/speckit.plan The application uses Vite with vanilla HTML/CSS/JS. SQLite for metadata.
```

### Step 6: Break Down and Implement

```bash
/speckit.tasks
/speckit.implement
```

## Optional Enhancement Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/speckit.analyze` | Cross-artifact consistency check | After `/speckit.tasks`, before `/speckit.implement` |
| `/speckit.checklist` | Generate quality checklists | After `/speckit.plan` |
| `/speckit.taskstoissues` | Convert tasks to GitHub issues | For team collaboration |

## Context Awareness

Spec Kit commands automatically detect the active feature based on your current Git branch (e.g., `001-feature-name`). To switch features, switch branches.

## Directory Structure

```
.specify/
├── memory/
│   └── constitution.md
├── scripts/
├── templates/
│   ├── spec-template.md
│   ├── plan-template.md
│   ├── tasks-template.md
│   └── checklist-template.md
specs/
└── ###-feature-name/
    ├── spec.md
    ├── plan.md
    ├── data-model.md
    ├── contracts/
    ├── research.md
    ├── quickstart.md
    ├── tasks.md
    └── checklists/
        ├── ux.md
        ├── security.md
        └── test.md
```

## Branch Naming Convention

- Format: `###-short-name` (e.g., `001-user-auth`)
- Generated from feature description
- Stop words filtered (the, a, to, for, etc.)
- Max 244 bytes (GitHub limit)