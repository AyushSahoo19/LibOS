---
title: "CI/CD for Agents"
description: "How to implement continuous integration and delivery for your autonomous agent workers."
collectionId: "founders-startup"
order: 6
category: "Ecosystem Setup"
---

# CI/CD for Agents

Deploying an agent is easy. Keeping it reliable is hard. This guide covers the "Ops" in "AgentOps."

## The Agentic CI Pipeline

### 1. The Prompt Regression Test
Every time you update an agent's system prompt, you must ensure it hasn't "forgotten" how to handle previous edge cases.
*   **Tool:** Use **Ragas** to run a suite of benchmark questions against the new prompt.

### 2. The Tool-Call Sandbox
Agents should never be tested against production data.
*   **Workflow:** Use **GitHub Actions** to spin up an ephemeral **Supabase** instance with anonymized data for the agent to "practice" on.

### 3. Continuous Monitoring (Agent Evaluation)
Once deployed, the agent's work must be continuously audited.
*   **Action:** Pipe 5% of all agent tool calls to a human-in-the-loop (HITL) dashboard for manual review.
*   **Alerting:** Use **LangSmith** to trigger alerts if an agent's "Latency" or "Token Usage" spikes unexpectedly.

## Automated Redeployment
If an agent's performance score falls below a certain threshold, the pipeline should automatically rollback to the last known-stable prompt version.
