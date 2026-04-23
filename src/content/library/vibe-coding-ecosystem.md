---
title: "Vibe Coding Ecosystem"
description: "The official guide to Agent-Driven Development (ADD). A collection of tools and prompts that allow you to code at the speed of thought."
domain: "Ecosystem"
collection: "founders-startup"
stars: 9800
links:
  github: "https://github.com/vibe-coding/awesome-vibe-coding"
tags: ["Vibe Coding", "AI-First", "Cursor", "Bolt.new", "Prompt Engineering"]
---

## Overview
Vibe Coding is the paradigm shift where the developer focuses on "vibe" (intent, architecture, and logic) while the AI handles the "syntax" (boilerplate, types, and implementation). This repo is the definitive playbook for this movement.

## Core Components
- **The IDE:** Cursor (AI-native fork of VS Code) — specifically the `Composer` mode.
- **The Engine:** Claude 3.5 Sonnet / GPT-4o.
- **The Prompts:** A library of `.cursorrules` and `system-prompts` for different roles (Frontend Expert, Security Audit, SQL Architect).

## The Full Phased Setup
### Phase 1: Environment Configuration
- Setup your `.cursorrules` file to define your project's coding standards.
- Integrate `OpenDevin` for long-running background tasks (like refactoring an entire folder).

### Phase 2: The Loop
- **Speak:** Describe the feature in natural language.
- **Review:** Use the diff view to see what the AI changed.
- **Vibe:** If it feels right, commit. If not, refine the prompt.

### Phase 3: Automation
- Use `Bolt.new` or `v0.dev` for rapid UI prototyping.
- Pipe the results into your main repo using `repowise` or similar context-packing tools.

## Documentation
- **Playbook:** How to use multi-step agents to build complex SaaS features.
- **Skills:** Specialized sub-agent definitions for "Founders" (e.g. Market Research Agent, Legal Compliance Agent).
