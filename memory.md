# LibOS - The Developer's Library Project Memory

## Vision & Purpose
LibOS is a minimalistic, curated, and premium web directory designed for developers, innovators, and AI enthusiasts. It serves as an elevated alternative to standard layouts like GitHub, focusing on deep, actionable overviews of the best repositories, frameworks, tools, and workflows in the tech ecosystem.

## Tech Stack
- **Framework**: Astro (v6.x) + Vanilla CSS
- **Content Approach**: Markdown files managed via Astro Collections.

## Design Philosophy "Deep Black Metallic & Minimal"
- **Theme**: Ultra-premium deep black mode (`#0d0d0d` piano-lacquer finish).
- **Aesthetics**: 
  - **Metallic Cards**: Linear gradients, razor-thin silver edges, and top-edge catch-lights.
  - **Interactions**: Hover shimmer sweeps, vertical timeline markers, and glowing status badges.
  - **Layout**: Floating sticky navbar with proper screen gutters, two-column main layout with independently scrollable sidebar.
- **Typography**: `Inter` (Body) + `Fira Code` (Technical/Mono).
- **Mobile First**: Fully responsive with a minimalist hamburger menu toggle for small screens.

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

## Features & Pages
1. **Directory Hub (`/`)**: Main search and filter interface with the deep black metallic card grid.
2. **Global Leaderboard (`/top-rated`)**: Dynamic ranking of all libraries sorted by star counts, with category-specific filtering.
3. **Release Timeline (`/releases`)**: Architectural tracking of major version releases with status badges (Alpha/Beta/Stable).
4. **Tech Stacks (`/stacks`)**: Visual breakdown of architectural synergies (e.g., Python + MuJoCo).
5. **Trending (`/trending`)**: Highlights of top repositories and legendary open-source innovators.

## Domains & Categories
LibOS covers a vast scientific and technical landscape:
- **AI & Machine Learning**: Neural networks, LLMs, and data-ops.
- **Robotics & Simulation**: ROS 2, MuJoCo, and hardware bridges.
- **Quantum Computing**: Qiskit and simulator SDKs.
- **Physics & Chemistry**: RDKit, symbolic math, and dynamics engines.
- **Finance & Trading**: Algorithmic trading and quant engines (e.g., Freqtrade).
- **3D & VFX**: Blender and real-time rendering pipelines.
- **Web & Infrastructure**: React, Next.js, and core utility libraries.
- **AI Agents**: Autonomous workflows and skill-sets.

## Git & License
- **Repository**: [AyushSahoo19/LibOS](https://github.com/AyushSahoo19/LibOS)
- **License**: MIT (Copyright © 2025 Ayush Kumar Sahoo)
