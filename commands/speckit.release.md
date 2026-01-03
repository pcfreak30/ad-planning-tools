---
description: Prepare feature for release (changelog, version bumps, release notes)
arguments:
  - description: Release type (patch, minor, major) or empty for review
    required: false
includeContext: false
---

Prepare feature for release with changelog, version bumps, and release notes.

## Current Context
!bash -c 'source ~/.aider-desk/skills/spec-kit/scripts/common.sh && eval $(get_feature_paths) && echo "Feature: $FEATURE_DIR"'

## Prerequisites

- `/speckit.review` shows ✅ READY
- All tasks complete
- Tests passing
- No blocking issues

## Release Checklist

### 1. Version Management

| Current Version | Next Version | Increment Type |
|-----------------|--------------|----------------|
| X.Y.Z | X.Y.(Z+1) | PATCH - Bug fixes |
| X.Y.Z | X.(Y+1).0 | MINOR - New features |
| X.Y.Z | (X+1).0.0 | MAJOR - Breaking changes |

**Version file locations:**
- `package.json` → `"version"`
- `pyproject.toml` → `version = "X.Y.Z"`
- `__version__` in `src/__init__.py`
- `CHANGELOG.md` header

### 2. Changelog Generation

**Changes to document:**
- New features (from spec.md user stories)
- Bug fixes (from completed tasks)
- Performance improvements
- Breaking changes
- Deprecations

**Changelog format:**
```markdown
## [VERSION] - YYYY-MM-DD

### Added
- Feature A (from US1)
- Feature B (from US2)

### Changed
- Improved X performance
- Updated Y behavior

### Fixed
- Bug in Z functionality

### Breaking
- Removed deprecated API (migration required)
```

### 3. Release Notes Generation

**Audience-specific notes:**

| Audience | Content |
|----------|---------|
| Users | What new, what changed, how to upgrade |
| Developers | Technical details, migration guide |
| Operations | Deployment requirements, config changes |

**Release notes template:**
```markdown
# Release Notes: [FEATURE] vVERSION

## Overview
Brief description of this release

## What's New
- Feature 1: Description
- Feature 2: Description

## Breaking Changes
- Change 1: Migration steps
- Change 2: Migration steps

## Upgrade Guide
1. Step one
2. Step two

## Full Changelog
[Link to CHANGELOG.md]
```

### 4. Pre-release Validation

| Check | Status |
|-------|--------|
| All tests passing | ✅ / ❌ |
| No linting errors | ✅ / ❌ |
| Documentation updated | ✅ / ❌ |
| Migration scripts ready | ✅ / ❌ |
| Deployment verified | ✅ / ❌ |

## Release Report

```markdown
## Release Report: [FEATURE] v2.1.0

### Version Information
| Field | Current | Next |
|-------|---------|------|
| Semantic Version | 2.0.0 | 2.1.0 |
| Increment Type | - | MINOR |
| Breaking Changes | - | No |

### Changelog Entries

#### Added (3)
- Album import functionality (US3)
- Analytics tracking (from retro)
- Performance metrics endpoint

#### Changed (2)
- Drag-and-drop reorg → Click-to-move (US1)
- Database schema optimized

#### Fixed (5)
- Memory leak in image processing
- Authentication timeout edge case
- Race condition in concurrent uploads
- Error handling for empty albums
- TypeScript type definitions

### Release Notes

**For Users:**
- New: Import albums from external sources
- Improved: Faster album reorganization
- Fixed: Various stability issues

**For Developers:**
- New: `importAlbum()` API endpoint
- Breaking: `reorganizeAlbums()` signature changed
- Migration: Update import statements

### Pre-release Checklist
| Check | Status | Notes |
|-------|--------|-------|
| Tests | ✅ | 45/45 passing |
| Linting | ✅ | 0 errors |
| Docs | ✅ | Updated |
| Migration | ✅ | Tested |

### Next Steps
1. Create release branch: `release/v2.1.0`
2. Tag commit: `v2.1.0`
3. Build artifacts
4. Deploy to staging
5. Verify in staging
6. Deploy to production
7. Announce release
```

## Git Workflow

```bash
# Create release branch
git checkout -b release/v2.1.0

# Update version
sed -i 's/"version": "2.0.0"/"version": "2.1.0"/' package.json

# Update changelog
git changelog v2.0.0..v2.1.0 > CHANGELOG.new.md
cat CHANGELOG.new.md CHANGELOG.md > CHANGELOG.tmp
mv CHANGELOG.tmp CHANGELOG.md

# Commit
git add -A
git commit -m "release: v2.1.0"

# Tag
git tag -a v2.1.0 -m "Release v2.1.0"

# Push
git push origin release/v2.1.0 --tags
```

## Guidelines

- Follow semantic versioning strictly
- Document all breaking changes with migration steps
- Generate changelog from actual changes, not assumptions
- Validate in staging before production deployment
- Announce release to stakeholders