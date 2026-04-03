---
title: "Claude Code Prompts (Repowise)"
description: "Independently written drop-in prompt templates — safety/risk tiers, reversibility gates, tool routing, multi-agent coordination, and delegation."
domain: "Tool"
stars: 620
links:
  github: "https://github.com/repowise-dev/claude-code-prompts"
tags: ["Claude Code", "Prompts", "Safety", "Multi-Agent", "Workflow"]
---

## Overview
A clean, independently authored set of prompt templates designed to slot directly into any Claude Code-based coding agent. Especially strong on safety architecture — reversibility tiers, destructive action gates, and risk assessment frameworks.

## Features
- **System Prompt Architecture:** Layered identity + safety + behavior prompt composition.
- **Safety & Risk Assessment:** Reversibility tiers for every tool action category.
- **Tool Routing:** Custom routing logic for directing tasks to the right subagent.
- **Multi-Agent Coordination:** Handoff protocols, context isolation, and delegation templates.

## Use Cases
- Adding professional-grade safety rails to your Claude Code pipeline.
- Building a custom orchestrator with proper reversibility enforcement.
- Drop-in templates for any team adopting Claude Code as a shared developer tool.

## Technical Advantages
- Written independently of Anthropic — unbiased analysis of what actually works.
- Templates are format-agnostic: works with CLAUDE.md, skills, and slash commands.
