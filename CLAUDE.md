# Terra Banal — Portfolio Site

## Who this is for
Terra Banal, Senior Visual Designer specializing in Design Systems. This site is her
professional portfolio — used for active job search (Staff-level design systems /
senior visual design roles) and to share work internally at her current job.
Contact: terrabanaldesign@gmail.com · 740.338.7970

## What we're building
A responsive, coded portfolio website, rebuilt from an existing high-fidelity Figma
prototype that was designed at fixed desktop width only (not responsive).
Goal: match the Figma design closely at desktop width, then build genuinely responsive
behavior for tablet and mobile — the source file won't tell you what to do there, so ask
or use your best judgment against the design tokens below, not arbitrary values.

## Stack
- Vite + React + Tailwind CSS
- Deploy target: Vercel or Netlify (static export, no backend needed)

## Source of truth
Figma file: https://www.figma.com/design/XTOUNmpGQhwYr2AxoreoIm/TerraBanal_Intapp
This is canonical for layout, spacing, and copy. When building any section, pull the
specific frame link for that section via the Figma MCP connection rather than guessing
from this doc alone — this file gives you the system and structure, Figma gives you the
per-section specifics.

## Design tokens — CONFIRMED from Figma (Homepage frame, node 76:1617)
Fonts: Fraunces (display/headlines, serif) + IBM Plex Sans (body/UI, sans)
Grid (desktop, matches Figma exactly): 1440px container, 12 columns, 32px gutter, 96px margins

Colors (pulled from the real Homepage frame — a white background + warm neutral
"stone" scale, no accent color present on this frame):
- `--paper: #FFFFFF` — base background
- `--ink: #292221` — headlines, body text (stone/950)
- `--ink-soft: #73605B` — secondary/caption text (stone/700)
- `--border: #E6E1DC` — dividers, hairlines (stone/200)
- `--border-soft: #F2F0EE` — subtle borders, hover fills (stone/100)
- `--surface: #F7F6F5` — off-white surface fill (stone/50)

No accent color (e.g. navy/brass) was found anywhere on the Homepage frame — the
site as designed here is white/ink/stone only. If a case study page, link, or CTA
turns up an accent elsewhere in the file, confirm it there before adding it back
as a token.

Type scale (adapt proportionally for a web context, weights confirmed from the frame):
- Hero/display: Fraunces, large, Light/Regular weight (mixed within one string for emphasis)
- Headline: Fraunces, Regular
- Subhead: Plex Sans Medium
- Body: Plex Sans Regular/Light
- Eyebrow/label: Plex Sans SemiBold, uppercase, letter-spaced

## Breakpoints (not defined in Figma — use these)
- Desktop: 1440px baseline, matches Figma 1:1
- Tablet: 768–1023px — margins scale down to ~48px
- Mobile: <768px — margins scale down to ~24px, single-column stacking for
  multi-column sections (case study cards, stat grids, galleries)

## Content architecture
1. **Homepage** — hero statement, tag bar, 3 case study cards linking out
2. **Case Study: Uniform Design Language & System** (Intapp) — the flagship piece
3. **Case Study: Network Diagram Redesign** (IBM Security) — includes patent + research narrative
4. **Case Study: Steamies Dumplings** (Brand Identity) — logo, packaging, mural, sauce labels
5. **About** — bio, doodle stickies visual, skills list, contact info, resume download link
6. **Freelance & Side Projects** — Talisman Coffee, Desert Tsunami, Valine's Cocktail Sauce,
   Lot Lizard Video (logo only — treat as a light/incomplete piece, don't over-feature it)

## Assets
Exported images live in `/public/images/`, named by section + content
(e.g. `gallery-coffeebags.png`, `gallery-cards.png`, `gallery-tees.png`).
Some images in the Figma file still have manual crop transforms applied to the layer
rather than being flat exports — if a pulled image looks stretched or misaligned,
that's the likely cause; ask before assuming the export is wrong.

## Working conventions
- Build one section at a time: generate → run locally → compare against the Figma frame
  → commit before moving to the next section
- Use the design tokens above (as CSS variables / Tailwind theme config), never
  hardcoded hex values or magic pixel numbers, once tokens are set up
- First session priority: set up the Tailwind theme / CSS variables from the tokens
  above *before* building any UI, so every component inherits correctly
- Don't regenerate an entire working section from scratch to make a small change —
  make targeted edits instead
- This is a portfolio for a design systems specialist — consistency and restraint
  matter more than novelty. When in doubt, do less, not more.

## Build order (planned)
1. Project + theme setup (tokens, fonts, Tailwind config)
2. Homepage hero
3. One case study card component (reused across homepage + case study pages)
4. Remaining sections, iterating from there
