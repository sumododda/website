# Website UI Redesign Design Spec

## Overview
This document specifies the design for revamping Sumo's personal website (https://github.com/sumododda/website) from a standard single-page scroll portfolio into a Modern Tech SaaS-themed site using a hybrid layout and Bento Grid for key sections.

## Purpose
To create a highly professional, modern, and memorable portfolio that highlights Sumo's expertise as an AI/Security Engineer.

## Aesthetics & Tone
- **Direction:** Modern Tech SaaS
- **Theme:** Default Dark Mode (deep blacks, very dark grays, high contrast white/light gray text).
- **Styling:** Glassmorphism (subtle blurs, semi-transparent borders and backgrounds).
- **Typography:** Clean sans-serif for body, perhaps a slightly technical/geometric sans-serif for headings.
- **Animations:** Subtle & Professional (fade-ins on scroll, slight lift on hover).

## Architecture & Tech Stack
- **Framework:** Next.js 15 (App Router, though currently `pages` or `app` dir is used? Let me check, the project uses `app/page.jsx`).
- **Styling Library:** Tailwind CSS (migrating from SCSS).
- **Animations:** Framer Motion.
- **Constraints:** Must remain a static export (`output: "export"`) compatible with Cloudflare Pages.

## Layout Structure (Hybrid)

### 1. Hero Section
- Centered layout.
- High-contrast typography for the name "Sumo".
- Taglines: "Security Engineer", "AI-driven Threat Modeling", "Zero Trust".
- Calls to Action: "View Work" and "Download Resume".
- Visuals: Subtle background grid or glow effect.

### 2. Experience Section
- Vertical timeline or clean list showing GEICO, UNC Charlotte, SOC Analyst roles.
- Badges for tech stack (LangGraph, Splunk, etc.).

### 3. Bento Grid (About & Skills)
An interactive CSS Grid combining About and Skills:
- **Card 1 (Large):** "About Me" bio emphasizing AI/Security.
- **Card 2 (Square):** Certifications (OSCP, Sec+, CCNA).
- **Card 3 (Wide):** Core Competencies (Cloud, AI Automation, Security).
- **Card 4 (Small):** Social/Contact links.
- *Interaction:* Glassmorphism styling, hover lift effects.

### 4. Projects (Work) Section
- Grid displaying recent projects ("MCP Review", "Zero Trust", "Reconnaissance Tool").
- Includes project images, tags, and GitHub links.

## Data Source
Content will continue to be driven by `data/sitedata.js`. We will adapt the components to consume this data effectively within the new layout.
