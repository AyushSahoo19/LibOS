<div align="center">

<br />

```
██╗     ██╗██████╗  ██████╗ ███████╗
██║     ██║██╔══██╗██╔═══██╗██╔════╝
██║     ██║██████╔╝██║   ██║███████╗
██║     ██║██╔══██╗██║   ██║╚════██║
███████╗██║██████╔╝╚██████╔╝███████║
╚══════╝╚═╝╚═════╝  ╚═════╝ ╚══════╝
```

### **The Ultimate Open-Source Library**

*A curated, minimalist directory of the world's most critical repositories, tools, frameworks, and workflows — for developers, researchers, engineers, and innovators.*

<br />

[![Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/AyushSahoo19/LibOS/pulls)
[![Stars](https://img.shields.io/github/stars/AyushSahoo19/LibOS?style=flat-square&color=yellow)](https://github.com/AyushSahoo19/LibOS/stargazers)

<br />

---

</div>

## ▲ What is LibOS?

**LibOS** is a high-performance, minimalist developer hub that curates and indexes the **absolute best open-source projects** running the modern world — from web frameworks and AI tools to robotics stacks, quantum computing SDKs, physics engines, trading algorithms, chemistry libraries, and 3D software.

It serves as a **living directory** — continuously updated with new releases, tracked global rankings, and deeply curated [Collections](file:///src/pages/collections/index.astro) of the most impactful technologies across every domain of computing and science.

> *Think of it as a curated Wikipedia meets GitHub Explore, but specifically designed for developers who want signal without the noise.*

---

## 🌐 Ecosystem Overview

LibOS is organized around a **multi-domain taxonomy** covering every major field of software and scientific computing:

| Domain | Description |
|---|---|
| 🧩 **Frameworks** | Web, ML, and application development frameworks |
| 🛠️ **Tools** | Developer utilities, CLIs, and productivity tools |
| 🤖 **AI Agents** | Autonomous AI workflows and LLM-powered toolchains |
| 🧠 **Machine Learning** | Deep learning, neural network, and data science stacks |
| 🦾 **Robotics** | ROS, simulation, kinematics, and motion planning |
| ⚛️ **Quantum Computing** | Quantum circuit SDKs and simulators |
| 🔭 **Physics Engines** | Real-time rigid body and multi-joint simulators |
| 🧪 **Chemistry** | Cheminformatics, molecular AI, and drug discovery |
| 📈 **Trading** | Algorithmic and quantitative trading engines |
| 🎨 **3D Software** | Open-source 3D modeling, VFX, and rendering pipelines |
| 📐 **Math** | Symbolic computation and scientific computing libraries |
| 📦 **Libraries** | Foundational utility and numerical computing packages |

---

## ✨ Features

### 📂 Curated Directory
- **100+ handpicked repositories** spanning all major domains of computing.
- Each entry includes: title, description, domain tag, star count, GitHub link, use cases, and technical breakdowns.
- Search and filter by domain in real-time with instant results.

### 🗂️ Curated Collections Hub (`/collections`)
- **7 specialized collections** focused on distinct engineering paths:
    - **Design & Video Coding** — From Three.js to R3F.
    - **Claude Skills** — Specialized subagent and skill definitions.
    - **AI Mastery & Agents** — Autonomous agents and LLM frameworks.
    - **Blockchain Tools** — Ethereum/Solana developer stacks.
    - **Learning & Skills** — Roadmaps and deep-dive technical resources.
    - **AI Frameworks** — Core ML tools like PyTorch and Jax.
    - **Open Source Tools** — Essential developer utilities.

### 🏎️ Interactive Scroll Gallery
- Animated, infinite-scrolling "Best Collections" gallery on the homepage.
- **Universal Scroll Architecture**: Support for mouse-dragging, horizontal trackpad "sliding", and native vertical page scrolling while hovering.
- "Pause-on-Hover" interaction logic for effortless browsing.

### 🗂️ Advanced Filtering
- Single-row **horizontal scrollable filter bar** with all domain categories.
- Live search that matches across titles and descriptions simultaneously.
- Empty state handling with clear visual feedback.

### 📊 Global Leaderboard (`/top-rated`)
- Dynamically generated **ranked leaderboard** populated from the content library.
- Supports category-level filtering: ML, Robotics, Frameworks, Engines, Libraries, and more.
- Auto-recalculates rank numbers when filters are applied.

### 📰 Release Timeline (`/releases`)
- A vertical timeline view of major framework and engine version updates.
- Status badges: **Alpha**, **Beta**, **Stable**.
- Links directly to official GitHub release notes.

### 🧬 Tech Stacks Hub (`/stacks`)
- Detailed architectural breakdown of powerful technology combinations.
- Covers: *T3 Stack*, *Python + MuJoCo*, *Supabase + Next.js*, *Rust + WebAssembly*, and more.
- Explains *why* each pairing is effective with usage context labels.

### 📈 Trending Page (`/trending`)
- Sorted leaderboard of repositories by star count.
- Highlights of the world's most influential open-source innovators.

### 🌟 Right Sidebar (Live on Homepage)
- **Top Innovators** — Linked profiles of legendary open-source contributors (Linus Torvalds, Yann LeCun, etc.)
- **Trending Stacks** — Fastest growing technological combinations.
- **Weekly Spotlight** — A featured repository curated each week.

### 🎨 Design System
- **Deep Black Metallic Cards** — Piano-lacquer finish with catch-light shimmer.
- **Minimalist Typography** — Inter body, Fira Code monospace, tight editorial spacing.
- **Staggered Hero Animations** — CSS `slideFadeUp` with staggered delays on load.
- **Breathing Background Glow** — Ambient neon pulse animation in the hero.
- **Sticky Floating Navbar** — Glassmorphism pill nav with proper screen gutters.
- **Scrollable Sidebar** — Independent right-column scroll without layout shifts.
- Fully responsive — collapses gracefully to single-column on mobile.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18.x`
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/AyushSahoo19/LibOS.git

# Navigate to the project
cd LibOS

# Install dependencies
npm install

# Start the development server
npm run dev
```

The platform will be available at `http://localhost:4321`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
LibOS/
├── src/
│   ├── components/
│   │   ├── Card.astro       # Repository card component
│   │   └── TerminalChart.astro  # Ecosystem Pulse visualization
│   ├── content/
│   │   ├── library/         # 100+ repository markdown entries
│   │   └── collections/     # Metadata for curated collections
│   ├── layouts/
│   │   └── Layout.astro     # Global layout with nav + footer
│   ├── pages/
│   │   ├── index.astro      # Main directory hub + Hero Scroller
│   │   ├── collections/     # Collections listing & dynamic detail routes
│   │   ├── trending.astro   # Trending repositories
│   │   ├── top-rated.astro  # Global leaderboard
│   │   └── ...
│   └── styles/
│       └── global.css       # Global design tokens
├── astro.config.mjs
└── README.md
```

---

## ➕ Adding a Repository

Every repository in LibOS is a simple Markdown file inside `src/content/library/`.

Create a new file: `src/content/library/your-repo.md`

```markdown
---
title: "Your Repo Name"
description: "A one-line description of what it does."
domain: "Framework" # e.g., Tool, Library, AI Agent, Robotics, etc.
collection: "ai-frameworks" # The collection ID it belongs to (optional)
stars: 12500
links:
  github: "https://github.com/owner/repo"
  website: "https://yourrepo.dev/"
tags: ["TypeScript", "Web", "Open Source"]
---

## Overview
What the project does and why it matters.

## Features
- Key feature 1
- Key feature 2

## Use Cases
- Use case 1
- Use case 2
```

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| [Astro v6](https://astro.build) | Core framework (zero-JS by default) |
| TypeScript | Type safety across all components |
| Vanilla CSS | Custom design system, no framework overhead |
| Astro Content Collections | Type-safe Markdown content layer |
| Google Fonts (Inter + Fira Code) | Typography system |

---

## 🤝 Contributing

Contributions are extremely welcome! To add a new repository or improve the platform:

1. **Fork** the repository
2. **Create** a new branch: `git checkout -b feat/add-my-repo`
3. **Add** your `.md` file to `src/content/library/`
4. **Submit** a Pull Request with a brief description

Please ensure all entries are genuinely open-source, actively maintained, and broadly useful to the developer/scientific community.

---

## 📄 License

Copyright © 2025 **Ayush Sahoo**. All rights reserved.

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for full details.

---

<div align="center">

Built with ▲ and obsession by **[Ayush Sahoo](https://github.com/AyushSahoo19)**

*If LibOS is useful to you, consider giving it a ⭐ — it genuinely helps.*

</div>
