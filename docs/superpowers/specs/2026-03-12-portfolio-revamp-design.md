# Portfolio Revamp Design Spec

**Date:** 2026-03-12
**Project:** Sumo Portfolio — Tech-Forward Professional Revamp
**Goal:** Portfolio-first personal website for a security engineer, showcasing projects and technical credibility

---

## 1. Site Structure

Sections rendered top-to-bottom on a single page (`/`):

| Order | Section | Anchor | Purpose |
|-------|---------|--------|---------|
| 1 | Navbar | — | Fixed floating nav, smooth scroll links |
| 2 | Hero | `#home` | Name, role, one-liner |
| 3 | Projects | `#projects` | Featured GitHub repos (portfolio-first) |
| 4 | Experience | `#experience` | Career timeline |
| 5 | Skills & Certs | `#skills` | Compact skill grid + cert badges |
| 6 | Education | `#education` | MS + BS side by side |
| 7 | Footer/Contact | `#contact` | Email CTA + social links |

**Removed:** Quote/Promotion section (does not serve portfolio-first goal).

---

## 2. Visual Design System

### 2.1 Colors

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#09090b` (zinc-950) | Page background |
| `bg-surface` | `#18181b` (zinc-900) | Cards, navbar |
| `bg-surface-hover` | `#27272a` (zinc-800) | Card hover states |
| `border` | `#3f3f46` (zinc-700) | Card borders, dividers |
| `text-primary` | `#fafafa` (zinc-50) | Headings, primary text |
| `text-secondary` | `#a1a1aa` (zinc-400) | Body text, descriptions |
| `text-muted` | `#a1a1aa` (zinc-400) | Labels, metadata (same as secondary for a11y) |
| `accent` | `#06b6d4` (cyan-500) | Links, CTAs, highlights |
| `accent-hover` | `#22d3ee` (cyan-400) | Hover states for accent |

### 2.2 Typography

| Role | Font | Weight | Source |
|------|------|--------|--------|
| Headings | Space Grotesk | 500–700 | Google Fonts |
| Body | DM Sans | 400–500 | Google Fonts |
| Monospace accents | Fira Code | 400 | Google Fonts |

**Import:**
```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=Fira+Code:wght@400;500&display=swap
```

**Typographic scale (desktop / mobile):**

| Element | Size (desktop) | Size (mobile) | Weight |
|---------|---------------|---------------|--------|
| Hero name | `text-6xl` (60px) | `text-4xl` (36px) | 700 |
| Section heading | `text-4xl` (36px) | `text-3xl` (30px) | 700 |
| Card title | `text-xl` (20px) | `text-lg` (18px) | 600 |
| Body text | `text-base` (16px) | `text-base` (16px) | 400 |
| Section label | `text-sm` (14px) | `text-sm` (14px) | 400 |
| Badges / tags | `text-xs` (12px) | `text-xs` (12px) | 400 |

**Usage rules:**
- Section labels use Fira Code in `text-muted` color: `// projects`, `// experience`
- Headings use Space Grotesk
- Body copy uses DM Sans
- Tech tags and metadata use Fira Code at smaller size

### 2.3 Spacing & Grid

- **Base unit:** 8px
- **Grid:** CSS grid, `max-w-6xl` (72rem / 1152px), centered with `mx-auto`
- **Section padding:** `py-24` (96px) vertical, `px-6` horizontal
- **Card gap:** `gap-6` (24px)

### 2.4 Effects

- **Card hover:** `border-color` transition to `zinc-600`, subtle `translate-y: -2px`, `transition-all duration-200`
- **No glows, no glitch, no scanlines** — clean and professional
- **`prefers-reduced-motion`:** Disable all Framer Motion animations
- **Navbar:** `backdrop-blur-md`, semi-transparent `bg-zinc-900/80`, `border border-zinc-800 rounded-2xl`

---

## 3. Component Specifications

### 3.1 Navbar

- Fixed position, floating style with `top-4 left-4 right-4` (not edge-to-edge)
- Logo: "Sumo." in Space Grotesk bold
- Links: Projects, Experience, Skills, Contact — smooth scroll
- No resume download button
- Mobile: hamburger icon toggles a dropdown panel below navbar with same `bg-zinc-900/80 backdrop-blur-md` styling, links stacked vertically, close on link click or outside tap
- Background: `bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl`

### 3.2 Hero

- Large heading: "Sumanth Dodda" in Space Grotesk 700
- Subheading: "Security Engineer" in accent cyan color
- One-liner: "Building secure, scalable, and AI-driven platforms." in DM Sans, `text-secondary`
- Two CTAs: "View Projects" (solid cyan bg, dark text `zinc-950`) and "Get In Touch" (outline cyan border, cyan text)
- Monospace label above name: `// hello world` in Fira Code, `text-muted`
- Minimal background — no large glow effects. Subtle grid pattern or nothing.

### 3.3 Projects

- Section label: `// projects` in Fira Code
- Heading: "Featured Work"
- 4 cards in a 2x2 grid (desktop), stacking to 1 column on mobile
- Each card contains:
  - Repo name as title (Space Grotesk 600)
  - Description from GitHub (DM Sans, `text-secondary`)
  - Language tag in Fira Code (small pill/badge with dot color for language)
  - Star count (if > 0)
  - GitHub link icon (Lucide `ExternalLink` or `Github`)
- Card style: `bg-zinc-900 border border-zinc-800 rounded-xl p-6`
- Hover: border lightens, slight lift

**Repo data (hardcoded from GitHub, profile: `sumododda`):**

| Repo | Description | Language | Stars |
|------|-------------|----------|-------|
| mcp-scanner | Security scanner for Model Context Protocol (MCP) servers. 3-tier detection pipeline with pattern matching, capability analysis, and LLM-powered semantic analysis. | Python | 0 |
| Trishul | The Ultimate Recon Framework | Shell | 11 |
| skills-as-mcp | MCP server for dynamic AI agent skill management | Python | 0 |
| Prep-Notes | This is my personal notes for every shit i learn, feel free to use it :) | Go | 2 |

### 3.4 Experience

- Section label: `// experience` in Fira Code
- Heading: "Experience"
- Vertical timeline with left-aligned dot + line
- 3 entries from resume:
  1. **Engineer II, Product Security** — GEICO — July 2024–Present
  2. **Graduate Teaching Assistant** — UNC Charlotte — Dec 2022–Dec 2023
  3. **SOC Analyst Intern** — Idea Dunes — Dec 2021–Jun 2022
- Each entry: role title (Space Grotesk 600), company + date in `text-muted`, 2-3 bullet points max (tighten from resume)
- Timeline line: `border-l-2 border-zinc-800`, dots: `bg-cyan-500` circles

### 3.5 Skills & Certs

- Section label: `// skills` in Fira Code
- Heading: "Skills & Certifications"
- **Skills:** 4 compact cards in a row (desktop), 2x2 on tablet, stack on mobile
  - Security Engineering — Threat Modeling, SSDLC, Supply Chain Security, Vulnerability Assessment
  - AI & Automation — LangGraph, LLM Evaluation, Automated Scanning, Prompt Injection Detection
  - Cloud & Infrastructure — AWS, Azure, Splunk, Active Directory, Docker, Kubernetes
  - Programming — Python, Bash, Golang, SQL, FastAPI, SvelteKit, PostgreSQL, Redis
- Each card: icon (Lucide) + title + comma-separated skills in `text-secondary`
- **Certifications:** Row of small badges below skills grid
  - CompTIA Security+, CCNA, RHCSA, AWS Solutions Architect, AWS Cloud Practitioner, eJPT
  - Style: `bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1 text-sm font-mono`

### 3.6 Education

- Section label: `// education` in Fira Code
- Heading: "Education"
- Two cards side by side (desktop), stacked on mobile
  - **MS Cybersecurity** — UNC Charlotte — 2022–2023 — GPA 3.8/4.0
  - **BS Computer Science, Information Security** — VIT — 2018–2022 — GPA 8.5/10
- Compact cards: degree title, school, dates, GPA. No coursework details.

### 3.7 Footer/Contact

- Section label: `// contact` in Fira Code
- Heading: "Let's Talk"
- Subheading: "Have a project in mind or want to collaborate?" in `text-secondary`
- Email CTA button: `doddasumo@gmail.com` — solid cyan bg, dark text (`zinc-950`), rounded
- Social links row: GitHub, LinkedIn, TryHackMe, Medium, ResearchGate, Instagram — Lucide/Simple Icons, `text-muted` with cyan hover
- Copyright: `© 2026 Sumanth Dodda` in `text-muted`

---

## 4. Technical Details

### 4.1 Stack

- **Framework:** Next.js 15 (App Router, static export) — no changes
- **Styling:** Tailwind CSS 4 — no changes
- **Animations:** Framer Motion — keep but simplify
- **Icons:** Lucide React — keep
- **Fonts:** Google Fonts via `next/font/google` (self-hosted, no external requests)
- **Deployment:** Cloudflare Pages — no changes

### 4.2 Data

- Update `data/sitedata.js` with:
  - Resume-aligned experience content (tightened bullet points)
  - GitHub repo data for projects (hardcoded)
  - Updated skills grouped into 4 categories
  - Certifications list
  - Education entries
  - Social links (keep existing)

### 4.3 Files to Modify

| File | Action |
|------|--------|
| `app/globals.css` | Update theme colors, add font imports |
| `app/layout.jsx` | Update font configuration, metadata |
| `app/page.jsx` | Reorder sections (projects before experience) |
| `data/sitedata.js` | Rewrite all content from resume + GitHub |
| `components/Navbar.jsx` | Redesign: floating, rounded, no resume CTA |
| `components/Header.jsx` | Redesign: monospace label, cleaner hero |
| `components/Work.jsx` | Redesign: 2x2 grid, GitHub repo cards with language tags |
| `components/Experience.jsx` | Redesign: tighter timeline, cleaner styling |
| `components/BentoGrid.jsx` | Replace with `Skills.jsx`: 4-card grid + cert badges |
| `components/Footer.jsx` | Redesign: cleaner contact section |
| `components/Promotion.jsx` | Delete |
| `components/Education.jsx` | Create new component |

### 4.4 Accessibility

- All text meets WCAG AA contrast (4.5:1 minimum)
- Cyan on zinc-950: `#06b6d4` on `#09090b` = 8.19:1 ratio (passes AAA)
- `text-secondary` / `text-muted` zinc-400 on zinc-950: `#a1a1aa` on `#09090b` = 7.76:1 (passes AAA)
- CTA buttons use dark text (`zinc-950`) on cyan backgrounds for 8.19:1 contrast
- Note: existing `--color-brand-500` and slate-* classes will be migrated to zinc-* and cyan-* throughout all components
- Visible focus rings on all interactive elements
- `prefers-reduced-motion` disables Framer Motion animations
- Semantic HTML throughout
- `aria-label` on icon-only buttons (social links)
- Touch targets minimum 44x44px

---

## 5. Out of Scope

- Blog / writing section
- Dynamic GitHub API fetching (hardcoded is simpler and faster)
- Light mode toggle
- Multi-page routing
- CMS integration
