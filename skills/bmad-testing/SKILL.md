---
name: BMad Testing Knowledge Base
description: Testing patterns, fixtures, selectors, CI/CD, and quality frameworks for Playwright and test automation
keywords: [testing, playwright, fixtures, selectors, ci-cd, quality, tdd, atdd]
context:
  - Aider Desk projects requiring test automation guidance
  - Teams using Playwright for E2E/API testing
  - Quality-focused development workflows
---

# BMad Testing Knowledge Base

## Overview

Comprehensive testing patterns and best practices for Playwright-based test automation. This knowledge base covers selector resilience, fixture architecture, CI/CD pipelines, and quality frameworks.

## Core Principles

### Selector Resilience
**Priority Order:** `data-testid` → ARIA roles → text content → CSS/IDs (last resort)

Robust selectors survive UI changes (styling, layout, content updates) and remain human-readable.

### Fixture Architecture
Build test helpers as **pure functions first**, then wrap in framework-specific fixtures. Compose capabilities using `mergeTests` instead of inheritance.

### CI/CD Excellence
- Burn-in testing (run changed tests multiple times)
- Parallel execution with intelligent test selection
- Fail-fast disabled for full evidence preservation

## Knowledge Categories

### 1. Selectors & Locators
| Document | Purpose |
|----------|---------|
| `selector-resilience.md` | Selector hierarchy, anti-patterns, debugging |
| `test-healing-patterns.md` | Auto-healing selectors, maintenance |

### 2. Fixtures & Architecture
| Document | Purpose |
|----------|---------|
| `fixture-architecture.md` | Pure function → fixture pattern |
| `fixtures-composition.md` | Composable fixtures with mergeTests |
| `data-factories.md` | Test data generation patterns |

### 3. Authentication & Sessions
| Document | Purpose |
|----------|---------|
| `email-auth.md` | Magic links, OTP, passwordless login |
| `auth-session.md` | Token persistence, multi-user auth |

### 4. Network & API
| Document | Purpose |
|----------|---------|
| `api-request.md` | Typed HTTP client with schema validation |
| `network-first.md` | Network interception patterns |
| `network-recorder.md` | HAR record/playback |
| `intercept-network-call.md` | Spy/stub with auto JSON parsing |
| `network-error-monitor.md` | HTTP 4xx/5xx detection |

### 5. CI/CD & Execution
| Document | Purpose |
|----------|---------|
| `ci-burn-in.md` | GitHub Actions with parallelization |
| `burn-in.md` | Standalone burn-in loop patterns |
| `selective-testing.md` | Changed file detection, tag-based selection |

### 6. Quality & Coverage
| Document | Purpose |
|----------|---------|
| `test-levels-framework.md` | Unit/integration/E2E分层 |
| `test-priorities-matrix.md` | Priority classification (P0-P3) |
| `test-quality.md` | Quality metrics and standards |
| `contract-testing.md` | API contract validation |

### 7. Debugging & Analysis
| Document | Purpose |
|----------|---------|
| `visual-debugging.md` | Trace viewer, HAR recording |
| `timing-debugging.md` | Async condition debugging |
| `log.md` | Playwright report-integrated logging |
| `error-handling.md` | Graceful failure handling |

### 8. Configuration & Setup
| Document | Purpose |
|----------|---------|
| `playwright-config.md` | Playwright configuration patterns |
| `overview.md` | `@seontechnologies/playwright-utils` overview |

### 9. Specialized Testing
| Document | Purpose |
|----------|---------|
| `component-tdd.md` | Component-level TDD patterns |
| `feature-flags.md` | Feature flag testing strategies |
| `file-utils.md` | CSV/XLSX/PDF/ZIP handling |
| `recurse.md` | Cypress-style polling for async |

### 10. NFR & Risk
| Document | Purpose |
|----------|---------|
| `nfr-criteria.md` | Non-functional requirements |
| `probability-impact.md` | Risk probability/impact matrix |
| `risk-governance.md` | Risk management in testing |

## Quick Reference

### Selector Best Practice
```typescript
// ✅ BEST: data-testid
await page.getByTestId('login-button').click();

// ✅ GOOD: ARIA roles
await page.getByRole('button', { name: 'Sign In' }).click();

// ✅ ACCEPTABLE: Text content
await page.getByText('Create New Order').click();

// ❌ LAST RESORT: CSS classes
// await page.locator('.btn-primary').click();
```

### Fixture Pattern
```typescript
// Step 1: Pure function (ALWAYS FIRST!)
export async function apiRequest({ request, method, url }) {
  return request.fetch(url, { method });
}

// Step 2: Fixture wrapper
export const test = base.extend({
  apiRequest: async ({ request }, use) => {
    await use((params) => apiRequest({ request, ...params }));
  }
});
```

### CI Burn-In Pattern
```yaml
# Run changed specs 10x before full suite
- name: Run burn-in on changed specs
  run: |
    for i in {1..10}; do
      npm run test -- $CHANGED_SPECS || FAILED=$?
    done
    if [ -n "$FAILED" ]; then exit 1; fi
```

## Related Skills

- `bmad-implementation` - Development phase (use testing patterns here)
- `bmad-solutioning` - Test design during solutioning
- `spec-kit` - Spec-driven development with test-first mandate

## References

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [@seontechnologies/playwright-utils](https://www.npmjs.com/package/@seontechnologies/playwright-utils)