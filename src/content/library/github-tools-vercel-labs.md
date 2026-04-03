---
title: "GitHub Tools for AI SDK (vercel-labs)"
description: "GitHub API as Vercel AI SDK tools — 21 tools, preset modes (code-review, issue-triage, repo-explorer, maintainer), and a built-in ToolLoopAgent. Drop directly into any AI scaffold."
domain: "Tool"
stars: 1100
links:
  github: "https://github.com/vercel-labs/github-tools"
tags: ["GitHub", "Vercel AI SDK", "Tool Calling", "AI Agents", "Code Review", "TypeScript"]
---

## Overview
Official Vercel Labs package that wraps the GitHub API as a set of 21 Vercel AI SDK-compatible tools. Comes with preset agent modes pre-configured for the most common GitHub automation workflows.

## Features
- **21 GitHub Tools:** Repo read/write, branch management, PR creation, issue management, commit history, code search.
- **Preset Modes:** `code-review`, `issue-triage`, `repo-explorer`, `maintainer` — pre-configured tool subsets with optimized prompts.
- **ToolLoopAgent:** Built-in multi-step agent that resolves GitHub tasks requiring multiple sequential tool calls.
- **TypeScript-First:** Full type safety for all 21 tool parameters and responses.

## Use Cases
- Building a GitHub bot or automation agent with Claude or GPT.
- Automating code review, issue triage, or PR management workflows.
- Creating a scaffold generator that commits files directly to GitHub repos.

## Technical Advantages
- `createGithubTools()` is a one-liner setup — no raw Octokit wrangling needed.
- Official Vercel Labs means it tracks the AI SDK API surface faithfully.
- Preset modes reduce prompt engineering work for the most common use cases.
