---
title: "Claude Code Prompts (Leonxlnx)"
description: "30+ reconstructed Claude Code prompt patterns — coordinator, verification agent, explore agent, memory selection, security classifier."
domain: "Tool"
stars: 890
links:
  github: "https://github.com/Leonxlnx/claude-code-system-prompts"
tags: ["Claude Code", "Prompts", "Multi-Agent", "System Prompts", "AI Agents"]
---

## Overview
Deep structural analysis of Claude Code's prompt architecture, with 30+ reconstructed patterns covering every major agent role in the orchestration hierarchy.

## Features
- **Coordinator Pattern:** How the top-level agent farms out tasks and manages execution flow.
- **Verification Agent:** The post-execution check pattern for confirming subagent outputs.
- **Explore Agent:** How Claude Code performs bounded codebase exploration without infinite recursion.
- **Security Classifier:** The safety-tier routing prompt that gates destructive actions.

## Use Cases
- Understanding multi-agent prompt design for complex pipelines.
- Studying how delegation chains maintain context isolation.
- Building custom agent roles that integrate cleanly with Claude Code's native hierarchy.

## Technical Advantages
- Each pattern includes behavioral analysis — not just the prompt text, but what it causes Claude Code to do.
- Cross-referenced against multiple Claude Code versions for stability tracking.
