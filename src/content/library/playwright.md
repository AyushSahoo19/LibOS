---
title: "Playwright"
description: "A framework for Web Testing and Automation acting across major browsers."
domain: "Tool"
stars: 58000
links:
  github: "https://github.com/microsoft/playwright"
  website: "https://playwright.dev/"
tags: ["Testing", "E2E", "Automation"]
---

## Overview
Built by Microsoft, Playwright enables reliable end-to-end testing for modern web apps. It supports cross-browser testing natively (Chromium, Firefox, WebKit) and offers an incredibly powerful, auto-waiting API that destroys test flakiness.

## Features
- **Auto-Wait:** Automatically waits for elements to be actionable prior to performing actions.
- **Multi-Browser:** One API to orchestrate Chromium, WebKit, and Firefox.
- **Network Interception:** Mock APIs and stub network requests natively.
- **Trace Viewer:** A visual GUI to inspect test execution post-mortem, showing exactly what happened at each step.

## Use Cases
- Running high-stakes E2E tests in a continuous integration pipeline.
- Scraping web applications that heavily rely on complex JavaScript and SPAs.
- Visual regression testing across different devices and viewports.

## Technical Advantages
- Significantly reduces the "flakiness" endemic to end-to-end UI tests.
- Super fast execution speeds by reusing browser contexts.
- Outstanding developer experience and integration with VS Code.
