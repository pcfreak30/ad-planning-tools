---
description: Interactive wizard to guide you through the Spec-Driven Development workflow
arguments:
  - description: Skip questions and jump to specific phase (constitution, specify, plan, tasks, implement, review)
    required: false
includeContext: false
---

Interactive wizard to guide you through the Spec-Driven Development workflow.

## Current Context
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Branch: $CURRENT_BRANCH | Feature: $FEATURE_DIR"'

## Usage

```
/speckit.wizard              # Start full interactive wizard
/speckit.wizard {{1}}        # Jump to specific phase: constitution, specify, plan, tasks, implement, review
```

## Wizard Flow

### Step 1: Where Are You?

**Question**: What stage are you at?

| Option | Meaning |
|--------|---------|
| 1️⃣ New project | Just starting, no constitution yet |
| 2️⃣ Have constitution | Principles defined, ready to specify |
| 3️⃣ Have spec | Feature spec created, need plan |
| 4️⃣ Have plan | Implementation plan ready, need tasks |
| 5️⃣ Have tasks | Task list ready, ready to implement |
| 6️⃣ Implementing | In progress, need guidance |
| 7️⃣ Almost done | Ready for final review |

### Step 2: Context-Aware Guidance

#### If New Project (1️⃣)
```
🎯 Next Step: /speckit.constitution

Example:
  /speckit.constitution This project follows:
  - Library-first design (all features as reusable libraries)
  - Test-first development (TDD mandatory)
  - CLI interface mandate (text in/out, JSON support)
```

#### If Have Constitution (2️⃣)
```
🎯 Next Step: /speckit.specify

Example:
  /speckit.specify Build a photo album application where users can
  organize photos into albums grouped by date.

Tips:
  - Focus on WHAT and WHY, not HOW (tech stack comes later)
  - Be specific about user needs
  - Include acceptance criteria
```

#### If Have Spec (3️⃣)
```
🎯 Options:
  A) /speckit.clarify  - Resolve ambiguities first
  B) /speckit.plan     - Create technical implementation plan

Questions to consider:
  - Any [NEEDS CLARIFICATION] markers in spec?
  - Tech stack decided?
  - Architecture choices clear?
```

#### If Have Plan (4️⃣)
```
🎯 Next Step: /speckit.tasks

Example:
  /speckit.tasks

What you'll get:
  - Task list organized by user story
  - Dependency ordering
  - Parallel execution markers [P]
```

#### If Have Tasks (5️⃣)
```
🎯 Options:
  A) /speckit.analyze  - Validate plan-task alignment first
  B) /speckit.implement - Start implementation

Before implementing:
  - Review task order
  - Identify parallelizable tasks [P]
  - Ensure tests are first (TDD)
```

#### If Implementing (6️⃣)
```
🎯 Guidance Options:

A) Show current task list
B) Mark task complete
C) Skip to next user story
D) Report blocker
E) Run tests

Current Phase: [Phase #]
Completed: [N/M] tasks
In Progress: [Task description]
```

#### If Almost Done (7️⃣)
```
🎯 Next Step: /speckit.review

Example:
  /speckit.review

Review will check:
  ✅ Constitution alignment
  ✅ Code health (unused, duplicates, smells)
  ✅ Spec & plan coverage
  ✅ Test coverage
  ✅ Quality & hygiene
```

## Quick Reference

| Current State | Next Command |
|---------------|--------------|
| No constitution | `/speckit.constitution` |
| Constitution ready | `/speckit.specify` |
| Spec has clarifications | `/speckit.clarify` |
| Spec complete | `/speckit.plan` |
| Plan ready | `/speckit.tasks` |
| Tasks ready | `/speckit.analyze` → `/speckit.implement` |
| Implementation done | `/speckit.review` |

## Progress Tracking

The wizard tracks your progress:

```
📊 Project Progress

Stage                    Status     Next Action
─────────────────────────────────────────────────
Constitution             ✅ Done    /speckit.specify
Feature Specification    ✅ Done    /speckit.plan
Implementation Plan      ✅ Done    /speckit.tasks
Task Breakdown           ✅ Done    /speckit.implement
Implementation           🔄 In Prog /speckit.review
Final Review             ⏳ Pending  Merge!
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Lost track of where I am | Run `/speckit.wizard` to get context |
| Don't know what to write | Ask for examples, then customize |
| Stuck on a task | Use `/speckit.analyze` for guidance |
| Spec doesn't match code | Use `/speckit.review` to identify drift |

## Tips

1. **Start with constitution** - It guides everything else
2. **Clarify early** - Resolve ambiguities before planning
3. **One story at a time** - Implement P1, then P2, then P3
4. **Review before merge** - Catch issues early
5. **Use the wizard** - It remembers where you are