# DOI Marketing + Design Co. — Design System

Strategy. Direction. Execution.

A complete brand and UI system for **DOI Marketing + Design Co.** — a fractional
marketing-director practice that gives growing brands senior marketing leadership and
creative direction without the cost of a full-time hire. Founder: **Eric Doi**, a Marketing
+ Creative Director with 10+ years building and scaling brands (VSSL, TruAudio, Soundvision).

This system is **dark, premium, editorial, and confident.** It exists so any agent or
designer can produce on-brand interfaces, decks, and assets in minutes.

---

## Sources

This system was assembled from the brand owner's master brand prompt plus the uploaded logo
suite. The associated repository was provided but is currently **empty** (no commits), so no
code or tokens were imported from it — explore it directly if it gains content later:

- **GitHub:** https://github.com/edoi2-dev/doi-marketing-design *(private; empty at time of build)*
- **Website:** https://doimarketingdesign.com
- **Logo source files:** `uploads/Doi-DarkBackground.svg`, `Doi-LightBK.svg`,
  `Doi-Icon-darkBK.svg`, `Doi-Icon-LightBK.svg` — cleaned, recolored, and shipped in
  `assets/logos/`.

> **Font note (needs your input):** No font binaries were supplied. The three brand
> families — **Bebas Neue**, **Cormorant Garamond**, **Montserrat** — are all loaded from
> **Google Fonts** (`tokens/fonts.css`), which is the canonical source for each. If you hold
> licensed/self-hosted copies, drop them in and swap the `@import` for `@font-face` rules.

---

## Content fundamentals — how DOI writes

**Voice:** Strategic but direct. Confident without arrogance. Premium but approachable.
Action-oriented — every sentence should move someone forward. No fluff, no buzzwords.

- **Person:** Speaks as **"we"** (the practice) to **"you"** (the founder/CEO). First-person
  singular only in Eric's bio.
- **Casing:** Headlines in Bebas Neue are **ALL CAPS**. Section titles in Cormorant are
  **mixed case** with *italic emphasis* words. Eyebrows and nav are **small caps with wide
  tracking**. Body is sentence case.
- **Punctuation:** Short declarative sentences. Em dashes for asides. Periods used
  rhythmically as statements — "Strategy. Direction. Execution."
- **Emoji:** **Never.** Not part of the brand.
- **Numbers:** Used as proof, not decoration — `$500K managed`, `10+ years`, `$497`,
  `90-day roadmap`. Prices are always concrete.

**Words to use:** strategy, execution, leadership, craft, direction, results, systems,
growth, brand, creative.
**Words to avoid:** passionate, innovative, synergy, leverage (verb), guru, ninja, rockstar,
disruption, "we're passionate about your brand."

**Example copy:**
- Hero: *"Strategy. Direction. Execution."* / *"Senior marketing leadership and creative
  direction for growing brands — without the cost of a full-time hire."*
- Differentiators: *"Most marketing consultants can strategize or execute. We do both."* ·
  *"Director-level thinking without a director-level salary."* · *"Async-first process. No
  micromanagement, no weekly status calls."*

---

## Visual foundations

**Aesthetic:** Dark. Premium. Editorial. Confident. Think a high-end agency monograph, not a
SaaS dashboard.

- **Background:** Always dark. `--dark-bg #0A0B0C` is the page; `--black` for deepest
  sections. **Never** a light or white background (light logo variants exist only for rare
  off-brand contexts).
- **Color:** Crimson `#751D2F` is the **only** accent and is used **sparingly** — eyebrow
  lines, bottom borders, dividers, emphasis words, CTA fills. Never a large crimson fill.
  Silver `#B0B3B8` is **secondary text only**, never headings. Off-white `#F7F7F8` is primary
  text. No bright colors, no pastels, no gradients beyond subtle radial crimson glows.
- **Type:** Three families, **never more than two per layout**. Bebas Neue (display/hero,
  ALL CAPS, line-height 0.92–1.0), Cormorant Garamond (editorial titles, mixed case, italic
  emphasis), Montserrat (body/UI, 300–500, line-height 1.85).
- **Spacing:** Wide. 8px base scale; `--section-pad-x: 3rem` (48px) on all sections;
  `--section-pad-y: 6rem`. 12-column grids for work, 2-column for content splits.
- **Backgrounds & texture:** Subtle film-grain overlay across the dark canvas (`body::after`
  / `.doi-grain`, ~3.5% opacity). Low-opacity (8–15%) **radial crimson glows** behind key
  sections. The geometric logo mark appears **ghosted** (≈5% opacity) as a hero background
  element.
- **Imagery:** Dark, atmospheric, high-contrast — real environments (tradeshow floors, event
  setups, product detail, behind-the-scenes). No stock clichés. Images are **always**
  darkened with a `--img-overlay` (linear gradient to bottom, 55–85% `#0A0B0C`). In this
  system, photography is represented by the `Media` placeholder until real assets are dropped in.
- **Borders:** Thin **1px hairlines** in `rgba(176,179,184,0.08–0.18)`. Sections are
  separated by border lines — **never** solid blocks of a different color.
- **Corners:** **Sharp. Always.** `border-radius: 0` on every card and button. The only
  rounding is `--radius-full` for avatars / status dots.
- **Cards:** Hairline border on a near-transparent wash (`--surface-1`). On hover: subtle
  background lift (`--surface-2`) + an **animated crimson bottom border** sweeping in.
- **Shadows:** Dark UI gets depth from borders + glow, not soft drop shadows. A single
  restrained shadow (`--shadow-overlay`) exists for dialogs / slide-over panels.
- **Motion:** Quiet and precise. Fades and short translates on `--ease-out`
  (`cubic-bezier(0.22,1,0.36,1)`); 160–520ms. The CTA **arrow nudges right** on hover. A
  slow horizontal **marquee** of keywords runs between sections. No bounces, no infinite
  decorative loops on content. Honors `prefers-reduced-motion`.
- **Hover / press:** Links and nav lift to off-white. Primary buttons brighten crimson
  (`--crimson-bright`). Outline buttons gain a crimson border. Ghost buttons turn crimson.
- **Transparency / blur:** The fixed nav is transparent over the hero, then becomes
  `rgba(10,11,12,0.72)` with a 14px backdrop-blur once scrolled. The contact slide-over uses
  a blurred scrim.

---

## Iconography

DOI is **typographically driven, not icon-driven.** The brand leans on large Bebas Neue
**numbers** (`01–04`) for services and process steps rather than pictographic icons.

- **Brand mark:** The geometric **interlocking-chevron "X"** mark (`assets/logos/`) is the
  signature graphic device — used at nav size (~38px), ghosted in heroes, and as a section
  motif. Two-tone: off-white + crimson on dark; charcoal + crimson on light.
- **UI glyphs:** Kept minimal and **thin-stroke** — a right arrow on CTAs, a chevron on
  selects, a close ✕ on the contact panel. These are inline 1.5px-stroke SVGs drawn to match
  the brand's restraint (no filled icon sets).
- **Recommended icon set (substitution):** When a broader icon set is needed (footer social,
  feature lists), use **[Lucide](https://lucide.dev)** via CDN — its 1.5–2px outline weight
  and square-ish caps match the brand. *Flagged as a substitution: the brand package shipped
  no icon font or sprite.*
- **Emoji / unicode:** **Never** used as icons.

---

## Index — what's in this system

**Foundations (root)**
- `styles.css` — single entry point; consumers link this. Imports everything below.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css` — tokens
  (93 custom properties) + the brand base layer (grain, eyebrow, container, display/editorial
  utilities).
- `guidelines/*.card.html` — 14 foundation specimen cards (Colors, Type, Spacing, Brand).

**Assets**
- `assets/logos/` — cleaned, recolored logo + mark, dark and light variants.

**Components** (`window.DOIMarketingDesignDesignSystem_a12e37.<Name>`)
- `components/core/` — **Button**, **Card**, **Eyebrow**, **SectionHeading**, **Stat**,
  **Badge**, **Marquee**.
- `components/forms/` — **Input**, **Textarea**, **Select**.

**UI kits**
- `ui_kits/marketing-site/` — the full DOI homepage recreation (nav, hero, marquee, intro
  split, services, asymmetric work grid, industries, process, testimonial, CTA, footer, +
  slide-over contact form). Interactive click-through.

**Other**
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.
- Generated automatically (do not edit): `_ds_bundle.js`, `_ds_manifest.json`,
  `_adherence.oxlintrc.json`.

---

## Quick start

```html
<link rel="stylesheet" href="styles.css">
<!-- React UMD + ReactDOM UMD + Babel, then: -->
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Eyebrow, SectionHeading } = window.DOIMarketingDesignDesignSystem_a12e37;
  // <Button variant="primary" arrow>Book a Diagnostic</Button>
</script>
```

Run `check_design_system` after edits to confirm the project still compiles cleanly.
