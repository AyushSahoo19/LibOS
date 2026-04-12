# LibOS - The Developer's Library Project Memory

## Vision & Purpose
LibOS is a minimalistic, curated, and premium web directory designed for developers, innovators, and AI enthusiasts. It serves as an elevated alternative to standard layouts like GitHub, focusing on deep, actionable overviews of the best repositories, frameworks, tools, and workflows in the tech ecosystem.

## Tech Stack
- **Framework**: Astro (v6.x) + Vanilla CSS
- **Content Approach**: Markdown files managed via Astro Collections.

## Design Philosophy "Metallic Contrast & Minimal"
- **Theme**: Ultra-premium dual-mode system (Dark: "Deep Black", Light: "Silver/Platinum").
- **Aesthetics**: 
  - **Metallic Cards**: Linear gradients, razor-thin silver edges, and top-edge catch-lights.
  - **Silver Mode**: A polished platinum finish (`#f8f8fa`) as a counterpart to the piano-lacquer black.
  - **Interactions**: Hover shimmer sweeps, vertical timeline markers, and glowing status badges.
  - **Layout**: Floating sticky navbar with themed glass panels (`--glass-bg`), two-column main layout.
- **Typography**: `Inter` (Body) + `Fira Code` (Technical/Mono).
- **Theme Native**: Persistent theme switching via a clean Sun/Moon UI with `localStorage` memory.

## Content Structure
Located in `src/content/library/`

The required markdown structure for any entry:
```markdown
---
title: "Name of the Tech"
description: "A succinct 1-2 sentence pitch."
domain: "Framework / Tool / Repository / Workflow"
collection: "slug-of-collection" (e.g., claude-skills)
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
1. **Directory Hub (`/`)**: Main search and filter interface with theme-aware metallic cards.
2. **Global Leaderboard (`/top-rated`)**: Dynamic ranking of all libraries sorted by star counts, category-specific filtering, and silver/dark mode support.
3. **Release Timeline (`/releases`)**: Architectural tracking of major version releases with themed status badges.
4. **Tech Stacks (`/stacks`)**: Visual breakdown of architectural synergies (e.g., Python + MuJoCo).
5. **Collections Hub (`/collections`)**: Specialized curated groupings of repositories (e.g., Claude Skills, Design).
6. **Best Collections (Hero)**: High-access mini-cards on the homepage with live repository counts.
7. **Theme Engine**: Persistent Black & White (Silver/Platinum) toggle using CCS variables and `localStorage`.
8. **Mobile First**: Fully responsive with a minimalist hamburger menu and high-contrast mobile navigation.

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
