---
name: BMad Analysis Workflow
description: "Phase 1: Research, brainstorming, product briefs - guides the agent through analysis activities"
---

# BMad Analysis Workflow

## Overview
Phase 1 of BMad Method focuses on understanding the problem space through research and collaborative discovery. This phase produces the foundational artifacts (research documents, product briefs) that inform all subsequent phases.

## When to Use
- User wants to understand a market, domain, or technical topic
- Project requires foundational research before planning
- Need to create a product brief from research and brainstorming inputs
- Starting a new BMad project or feature discovery

## Workflow Steps

### 1. Research Workflow
For comprehensive research across three domains:

**Market Research** - Market size, growth, competition, customer insights
**Domain Research** - Industry analysis, regulations, technology trends
**Technical Research** - Technology evaluation, architecture decisions

**Process:**
1. Discover research type through collaborative discussion
2. Initialize research scope with user confirmation
3. Conduct domain-specific analysis (customer insights → competitive landscape → synthesis)
4. Produce documented research with verified sources

### 2. Product Brief Workflow
For creating structured product briefs:

1. Initialize workflow and discover input documents (research, brainstorming)
2. Define product vision and value proposition
3. Identify target users and their needs
4. Establish success metrics and KPIs
5. Define scope boundaries
6. Complete and validate the brief

## Key Artifacts
- `{planning_artifacts}/research/` - Research documents by type
- `{planning_artifacts}/product-brief-{project_name}-{date}.md` - Product briefs

## Related Skills
- `bmad-core` - Core principles (always load first)
- `bmad-planning` - Next phase (load when analysis complete)
