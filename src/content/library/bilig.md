---
title: "Bilig"
description: "Formula WorkPaper runtime for Node.js services and agent tools: edit cells through an API, recalculate formulas, verify readback, persist JSON, and expose workbook state through MCP."
domain: "Library"
collection: ["open-source-tools", "autonomous-coding"]
stars: 24
links:
  github: "https://github.com/proompteng/bilig"
  website: "https://proompteng.github.io/bilig/"
tags: ["TypeScript", "Spreadsheet", "Formula", "WorkPaper", "MCP", "Agents", "Node.js"]
---

## Overview

Bilig is an open-source formula WorkPaper runtime for backend services and agent tools. It gives services and agents a reviewable workbook model without driving Excel or Google Sheets through a UI.

## Features

- **API-first WorkPapers:** Edit workbook cells programmatically and recalculate formulas in process.
- **Verified readback:** Read calculated values after mutation so agents can prove the resulting state.
- **JSON persistence:** Save workbook state as portable JSON for server-side workflows.
- **MCP workflows:** Expose spreadsheet-style formula state to agent tools and local automation.

## Use Cases

- Pricing, quoting, payout, or finance-rule services that need reviewable formula logic.
- Agent workflows that need spreadsheet calculations without brittle UI automation.
- Backend validation pipelines that need deterministic workbook-style recalculation.