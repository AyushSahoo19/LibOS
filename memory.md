# LibOS - The Developer's Library Project Memory

## Vision & Purpose
LibOS is a minimalistic, curated, and premium web directory designed for developers, innovators, and AI enthusiasts. It serves as an elevated alternative to standard layouts like GitHub, focusing on deep, actionable overviews of the best repositories, frameworks, tools, and workflows in the tech ecosystem. 

**Current Scale**: 100+ handpicked repositories across 7 curated collections.

## Tech Stack
- **Framework**: Astro (v6.x) + Vanilla CSS
- **Content Approach**: Markdown files managed via Astro Content Collections (`library` and `collections`).
- **Interactions**: Vanilla JavaScript with Native Scroll APIs.

## Design Philosophy "Metallic Contrast & Minimal"
- **Theme**: Ultra-premium dual-mode system (Dark: "Deep Black", Light: "Silver/Platinum").
- **Aesthetics**: 
  - **Metallic Finish**: Linear gradients, razor-thin silver edges, and top-edge catch-lights.
  - **Micro-Texture**: Use of low-opacity noise/grain overlays (`mix-blend-mode: overlay`) to simulate brushed metal.
  - **Silver Mode**: A polished platinum finish (`#f8f8fa`) using `--bg-primary` variables.
  - **Layout**: Two-column main layout with a floating sticky glass pill navbar.
- **Typography**: `Inter` (Body) + `Fira Code` (Technical/Mono).

## Content Structure
### Library (`src/content/library/`)
Required YAML frontmatter:
```markdown
---
title: "Name"
description: "Succinct pitch."
domain: "Framework/Tool/etc."
collection: "ai-frameworks" (slug from collections)
stars: 125000
links: { github: "URL", website: "URL" }
tags: ["tag1"]
---
```

### Collections (`src/content/collections/`)
Used to group related repositories with metadata and SVG branding.

## Interactive System Architecture
### Universal Native Scroll
Implemented in `src/pages/index.astro` for the "Best Collections" gallery.
- **Mechanism**: Uses `wrapper.scrollLeft` (native) instead of CSS `translateX` transforms.
- **Features**: 
  - Supports natural trackpad "sliding" and horizontal mouse wheels.
  - Does NOT hijack the vertical wheel, allowing normal page scrolling while hovering over cards.
  - **Infinite Loop**: Resets `scrollLeft` instantly when boundary is hit (Teleport Loop).
  - **Grab-to-Scroll**: Manual mouse dragging synced with `scrollLeft`.
  - **Pause-on-Hover**: Auto-scrolling stops when user navigates content.

## Features & Pages
1. **Directory Hub (`/`)**: Search/filter interface with auto-scrolling hero collections.
2. **Collections Hub (`/collections`)**: Premium grid of 7 category paths with asymmetric visual depth.
3. **Leaderboard (`/top-rated`)**: Ranking by star counts with dynamic category filters.
4. **Timeline (`/releases`) & Stacks (`/stacks`)**: Architectural tracking and technology synergies.
5. **Theme Engine**: Persistent state via `localStorage` and CSS variables.

## Domains & Categories
- **AI & ML**: Frameworks, Agents, and NLP.
- **Engineering**: Robotics, Simulation, and Systems.
- **Ecosystem**: Web3, Blockchain, and Open Source utilities.

## Git & License
- **Repository**: [AyushSahoo19/LibOS](https://github.com/AyushSahoo19/LibOS)
- **License**: MIT (Copyright © 2025 Ayush Kumar Sahoo)
