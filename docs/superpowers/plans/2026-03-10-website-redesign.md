# Website UI Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the personal portfolio into a Modern Tech SaaS aesthetic using a hybrid layout (Bento Grid) while remaining purely static for Cloudflare deployment.

**Architecture:** We will replace the existing SCSS styles with Tailwind CSS, add Framer Motion for scroll animations, and redesign the layout into distinct sections (Hero, Bento Grid, Experience, Projects). Dark Mode will be the primary visual language.

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS, Framer Motion, Lucide React (for icons).

---

### Task 1: Setup Tailwind CSS & Dependencies

**Files:**
- Create/Modify: `tailwind.config.mjs`, `postcss.config.mjs`, `app/globals.css`, `package.json`

- [ ] **Step 1: Install dependencies**
Run: `npm install -D tailwindcss postcss autoprefixer framer-motion lucide-react`
Run: `npx tailwindcss init -p`

- [ ] **Step 2: Configure Tailwind**
Modify `tailwind.config.js` to include `app/**/*.{js,ts,jsx,tsx}`, `components/**/*.{js,ts,jsx,tsx}`. Add custom colors for dark mode (e.g., bg-slate-950).

- [ ] **Step 3: Setup Global CSS**
Replace `styles/globals.scss` (or create `app/globals.css`) with Tailwind directives `@tailwind base; @tailwind components; @tailwind utilities;` and global body styles for dark theme.

- [ ] **Step 4: Update Layout.jsx**
Modify `app/layout.jsx` to import `globals.css` and remove old SCSS imports. Apply a dark background to the `body` tag.

- [ ] **Step 5: Commit**
Run: `git add . && git commit -m "chore: setup tailwind css and framer motion"`

---

### Task 2: Redesign Hero Section & Header

**Files:**
- Modify: `components/Header.jsx`, `components/Navbar.jsx` (if exists)

- [ ] **Step 1: Rewrite Header Component**
Refactor `Header.jsx` to use Tailwind CSS. Implement a clean, high-contrast, centered Hero section with the name "Sumo", taglines, and a call-to-action button linking to the resume.

- [ ] **Step 2: Add framer-motion animations**
Add simple `initial={{ opacity: 0, y: 20 }}` animations to the main text elements to fade them in on mount.

- [ ] **Step 3: Commit**
Run: `git add components/Header.jsx && git commit -m "feat: redesign hero section"`

---

### Task 3: Implement Experience Timeline

**Files:**
- Modify: `components/Experience.jsx`

- [ ] **Step 1: Rewrite Experience Component**
Refactor `Experience.jsx` using Tailwind CSS to display a vertical timeline of roles (GEICO, UNC Charlotte, SOC Analyst).
Map through `experience` in `sitedata.js`.

- [ ] **Step 4: Commit**
Run: `git add components/Experience.jsx && git commit -m "feat: redesign experience section"`

---

### Task 4: Build the Bento Grid (About & Skills)

**Files:**
- Modify: `components/About.jsx`, `components/Skills.jsx` -> Combine or redesign into a Bento Box.
- Create: `components/BentoGrid.jsx` (optional) or just handle in `page.jsx`.

- [ ] **Step 1: Redesign About/Skills**
Since they are separate components, we can re-compose them in `page.jsx` or create a new `components/AboutSkillsBento.jsx` that replaces both. We'll build a CSS Grid (e.g., `grid-cols-1 md:grid-cols-3` etc) using Tailwind. Card styling: `bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6`.

- [ ] **Step 2: Map Data**
Map `aboutParaOne`, `skills`, and `social` into the various cards.

- [ ] **Step 3: Commit**
Run: `git add components/About.jsx components/Skills.jsx app/page.jsx && git commit -m "feat: implement bento grid layout"`

---

### Task 5: Redesign Projects & Footer

**Files:**
- Modify: `components/Work.jsx`, `components/Footer.jsx`, `components/Promotion.jsx`

- [ ] **Step 1: Redesign Projects (Work)**
Refactor `Work.jsx` into a clean grid of project cards with hover effects (`hover:-translate-y-1 transition-transform`). Use the images provided in `sitedata.js`.

- [ ] **Step 2: Clean up Footer and Promotion**
Style the promotion block and footer to match the dark SaaS theme.

- [ ] **Step 3: Commit**
Run: `git add components/Work.jsx components/Footer.jsx components/Promotion.jsx && git commit -m "feat: redesign projects and footer"`

---

### Task 6: Final Review & Build Test

- [ ] **Step 1: Test Build**
Run `npm run build` to ensure `output: "export"` succeeds without errors.

- [ ] **Step 2: Commit**
Run: `git add . && git commit -m "chore: final polish and build fix"`

- [ ] **Step 3: Push to Remote**
Run: `git push`
