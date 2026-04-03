# LibOS - The Developer's Library Project Memory

## Vision & Purpose
LibOS is a minimalistic, curated, and premium web directory designed for developers, innovators, and AI enthusiasts. It serves as an elevated alternative to standard layouts like GitHub, focusing on deep, actionable overviews of the best repositories, frameworks, tools, and workflows in the tech ecosystem.

## Tech Stack
- **Framework**: Astro (v6.x) + Vanilla CSS
- **Content Approach**: Markdown files managed via Astro Collections.

## Design Philosophy "Minimalist, Cool, Creative"
- **Theme**: Premium dark mode.
- **Aesthetics**: Glassmorphism (translucent panels over deep backgrounds), subtle edge glows (`--accent-glow`, `--accent-neon`), negative space, avoiding clutter.
- **Typography**: Modern and highly legible (`Inter` for base, `Fira Code` for technical text).
- **Interactions**: Smooth hover transitions, scale effects without being overwhelmingly animated or loud. Never "over-designed". Keep it stark.

## Content Structure
Located in `src/content/library/`

The required markdown structure for any entry:
```markdown
---
title: "Name of the Tech"
description: "A succinct 1-2 sentence pitch."
domain: "Framework / Tool / Repository / Workflow"
stars: <number>
links:
  github: "URL"
  website: "URL"
tags: ["tag1", "tag2"]
---

## Overview
A brief introduction pointing out why it exists.

## Features
- Outline core capabilities in bullet points.

## Use Cases
- When and why to use it.

## Technical Advantages
- Performance, architectural benefits, ecosystem leverage etc.
```

## Domains Explained
1. **Frameworks**: High-level application development foundations (e.g., Next.js, Astro).
2. **Tools**: Utilities for databases, testing, or building (e.g., Supabase, Playwright).
3. **Repositories**: Open source projects, boilerplates, and knowledge collections.
4. **Workflows**: Methodologies or systems configured for teams (e.g., GitFlow, CI/CD templates).
