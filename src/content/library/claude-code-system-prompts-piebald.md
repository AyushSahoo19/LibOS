---
title: "Claude Code System Prompts (Piebald)"
description: "Every Claude Code system prompt — main agent, subagent, skill prompts, memory, session — updated within minutes of each release."
domain: "Tool"
stars: 3100
links:
  github: "https://github.com/Piebald-AI/claude-code-system-prompts"
tags: ["Claude Code", "System Prompts", "AI Agents", "Prompts", "Reverse Engineering"]
---

## Overview
The most up-to-date repository of reconstructed Claude Code system prompts. Covers the main orchestrator agent, subagent worker forks, memory selection, skill invocation, security classifier, and session management prompts — all updated within minutes of new Claude Code releases.

## Features
- **Main Agent Prompt:** Full orchestrator prompt showing how Claude Code structures reasoning and tool calls.
- **Worker Fork Prompt:** How subagent delegation is framed to prevent further spawning.
- **Memory Prompts:** Context selection and memory consolidation prompt patterns.
- **Skill Prompts:** How skill MD files are injected and scoped during execution.

## Use Cases
- Understanding exactly what Claude Code sees when it reads your `CLAUDE.md`.
- Learning how to write `CLAUDE.md` and skills that align with the actual prompt structure.
- Reverse-engineering agent behavior to design better multi-agent pipelines.

## Technical Advantages
- Real extracted prompts, not guesses — verified against observable Claude Code behavior.
- Updated same-day as Claude Code releases, often within the hour.
- Annotated with structural analysis and behavioral notes.
