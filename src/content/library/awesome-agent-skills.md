---
title: "Awesome Agent Skills (VoltAgent)"
description: "Official skills from Anthropic, Google Labs, Vercel, Stripe, Cloudflare, Netlify, Sentry, Figma, and Expo. The most trusted multi-agent compatible skills collection."
domain: "Repository"
stars: 5800
links:
  github: "https://github.com/VoltAgent/awesome-agent-skills"
tags: ["Claude Code", "Skills", "Multi-Agent", "Vercel", "Stripe", "Cloudflare"]
---

## Overview
The official and most trusted collection of Claude Code skills, contributed directly by Anthropic and major platform partners including Vercel, Stripe, Cloudflare, Netlify, Sentry, Figma, and Expo. Drop any skill folder directly into `mnt/skills/`.

## Features
- **Official Platform Skills:** Vercel deploy, Stripe payments, Cloudflare workers, Netlify functions, Sentry error tracking, Figma design tokens, Expo mobile.
- **Multi-Agent Compatible:** Every skill is designed to work safely when invoked by a subagent inside a multi-agent pipeline.
- **Version Pinned:** Each skill is tagged to the platform version it targets.

## Use Cases
- Instantly giving Claude Code knowledge of Vercel's deployment API, Stripe's billing API, or Cloudflare's edge runtime.
- Building production apps without Claude Code having to guess at platform-specific patterns.
- Extending your `mnt/skills/` directory with battle-tested, partner-authored knowledge.

## Technical Advantages
- Partner-authored means the knowledge is exact, not hallucinated.
- Format follows the official Claude Code skill SKILL.md specification.
- Plugin-marketplace installable: `/plugin install vercel@awesome-agent-skills`
