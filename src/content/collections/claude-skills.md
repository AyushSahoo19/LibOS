---
title: "Claude Skills"
description: "Specialized subagent definitions and skillsets for Claude-driven automation. Extend the capabilities of Claude Code and Sonnet."
icon: "🏗️"
---

## The Claude Extension Playbook

Claude is exceptionally good at following complex instructions and using tools. This playbook focuses on extending Claude's capabilities via subagents and specialized skillsets.

### Phase 1: Subagent Architecture
Learn how to spawn specialized instances of Claude to handle specific parts of a larger task.

*   **Definition:** Use **Claude-Skill-Support** to define subagents with restricted scopes.
*   **Prompting:** Implement **Anthropic's System Prompts** for high-precision tool calling.
*   **Handoff:** Set up a "Router Agent" that evaluates a request and routes it to the correct Claude subagent.

### Phase 2: Skillsets & MCP
Model Context Protocol (MCP) is the new standard for connecting AI models to data sources.

*   **MCP Servers:** Connect to **Official MCP Servers** for Google Drive, Slack, and GitHub.
*   **Custom Skills:** Write custom TypeScript skillsets for **Claude Code** to automate your specific development environment.
*   **Context Management:** Use **Context-Cleaning** agents to keep Claude's context window focused on the task at hand.

### Phase 3: Enterprise Integration
Deploying Claude-driven agents at scale in a corporate or production environment.

*   **Safety:** Implement **Constitutional AI** guardrails for your custom subagents.
*   **Scaling:** Use **AWS Bedrock** or **GCP Vertex AI** for high-throughput Claude API access.
*   **Feedback:** Set up a human-in-the-loop (HITL) system where Claude requests approval for sensitive tool calls.
