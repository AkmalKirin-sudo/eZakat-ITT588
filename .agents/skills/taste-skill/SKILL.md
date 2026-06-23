---
name: design-taste-frontend
description: Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ships interfaces that do not look templated. Real design systems when applicable, audit-first on redesigns, strict pre-flight check.
---

# tasteskill: Anti-Slop Frontend Skill

> Landing pages, portfolios, and redesigns. Not dashboards, not data tables, not multi-step product UI.
> Every rule below is **contextual**. None of it fires automatically. First read the brief, then pull only what fits.

---

## 0. BRIEF INFERENCE (Read the Room Before Anything Else)

Before touching code or tweaking dials, **infer what the user actually wants**. Most LLM design output is bad because the model jumps to a default aesthetic instead of reading the room.

### 0.A Read these signals first
1. **Page kind** - landing (SaaS / consumer / agency / event), portfolio (dev / designer / creative studio), redesign (preserve vs overhaul), editorial / blog.
2. **Vibe words** the user used - "minimalist", "calm", "Linear-style", "Awwwards", "brutalist", "premium consumer", "Apple-y", "playful", "serious B2B", "editorial", "agency-y", "glassy", "dark tech".
3. **Reference signals** - URLs they linked, screenshots they pasted, products they named, brands they're competing with.
4. **Audience** - B2B procurement panel vs. design-conscious consumer vs. recruiter scanning a portfolio. The audience picks the aesthetic, not your taste.
5. **Brand assets that already exist** - logo, color, type, photography. For redesigns, these are starting material, not optional input (see Section 11).
6. **Quiet constraints** - accessibility-first audiences, public-sector, regulated industries, trust-first commerce, kids' products. These constraints OVERRIDE aesthetic preference.

### 0.B Output a one-line "Design Read" before generating
Before any code, state in one line: **"Reading this as: \<page kind> for \<audience>, with a \<vibe> language, leaning toward \<design system or aesthetic family>."**

### 0.C If the brief is ambiguous, ask one question, do not guess

### 0.D Anti-Default Discipline
Do not default to: AI-purple gradients, centered hero over dark mesh, three equal feature cards, generic glassmorphism on everything, infinite-loop micro-animations everywhere, Inter + slate-900.

---

## 1. THE THREE DIALS (Core Configuration)

* **`DESIGN_VARIANCE: 8`** - 1 = Perfect Symmetry, 10 = Artsy Chaos
* **`MOTION_INTENSITY: 6`** - 1 = Static, 10 = Cinematic / Physics
* **`VISUAL_DENSITY: 4`** - 1 = Art Gallery / Airy, 10 = Cockpit / Packed Data

**Baseline:** `8 / 6 / 4`.

### 1.A Dial Inference (design read → dial values)
| Signal | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| "minimalist / clean / calm / editorial / Linear-style" | 5-6 | 3-4 | 2-3 |
| "premium consumer / Apple-y / luxury / brand" | 7-8 | 5-7 | 3-4 |
| "playful / wild / Dribbble / Awwwards / experimental / agency" | 9-10 | 8-10 | 3-4 |
| "landing page / portfolio / marketing site (default)" | 7-9 | 6-8 | 3-5 |
| "trust-first / public-sector / regulated / accessibility-critical" | 3-4 | 2-3 | 4-5 |
| "redesign - preserve" | match existing | +1 | match existing |
| "redesign - overhaul" | +2 | +2 | match existing |

### 1.B Use-Case Presets
| Use case | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| Landing (SaaS, mainstream) | 7 | 6 | 4 |
| Landing (Agency / creative) | 9 | 8 | 3 |
| Landing (Premium consumer) | 7 | 6 | 3 |
| Portfolio (Designer / studio) | 8 | 7 | 3 |
| Portfolio (Developer) | 6 | 5 | 4 |
| Editorial / Blog | 6 | 4 | 3 |
| Public-sector service | 3 | 2 | 5 |
| Redesign - preserve | match | match+1 | match |
| Redesign - overhaul | +2 | +2 | match |

---

## 2. BRIEF → DESIGN SYSTEM MAP

### 2.A When to reach for a real design system (use official packages)
| Brief reads as… | Reach for |
|---|---|
| Microsoft / enterprise SaaS / dashboards | `@fluentui/react-components` |
| Google-ish UI, Material-flavored product | `@material/web` |
| IBM-style B2B / enterprise analytics | `@carbon/react` |
| Shopify app surfaces | `polaris.js` |
| Atlassian / Jira-style product | `@atlaskit/*` |
| GitHub-style devtool / community page | `@primer/css` |
| Public-sector UK service | `govuk-frontend` |
| US public-sector / trust-first | `uswds` |
| Fast local-business / agency MVP | Bootstrap 5.3 |
| Modern accessible React foundation | `@radix-ui/themes` |
| Modern SaaS where you own the components | shadcn/ui |
| Tailwind-based modern SaaS / AI marketing | Tailwind v4 utilities + `dark:` variant |

**One system per project.**

### 2.B When the brief is an aesthetic, not a system
| Aesthetic | Implementation |
|---|---|
| Glassmorphism / "frosted glass" | `backdrop-filter`, layered borders, solid-fill fallback |
| Bento (Apple-style tile grids) | CSS Grid with mixed cell sizes |
| Brutalism | Native CSS, monospace, raw borders |
| Editorial / magazine | Serif type, asymmetric grid, generous whitespace |
| Dark tech / hacker | Mono + accent neon, terminal motifs |
| Aurora / mesh gradients | SVG or layered radial gradients |
| Kinetic typography | Native CSS animations, scroll-driven animations, GSAP |

---

## 3. DEFAULT ARCHITECTURE & CONVENTIONS

### 3.A Stack
* **Framework:** React or Next.js. Default to Server Components (RSC).
* **Styling:** **Tailwind v4** (default).
* **Animation:** **Motion** (import from `motion/react`).
* **Fonts:** Always use `next/font` or self-host with `@font-face` + `font-display: swap`.

### 3.B State
* Local `useState` / `useReducer` for isolated UI.
* Global state ONLY for deep prop-drilling avoidance.
* **NEVER** use `useState` to track continuous values driven by user input. Use Motion's `useMotionValue`.

### 3.C Icons
* **Allowed:** `@phosphor-icons/react`, `hugeicons-react`, `@radix-ui/react-icons`, `@tabler/icons-react`.
* **Discouraged:** `lucide-react`.
* **NEVER hand-roll SVG icons.**
* **One family per project.**

### 3.D Emoji Policy
Discouraged by default. Replace with icon-library glyphs.

### 3.E Responsiveness & Layout Mechanics
* Standardize breakpoints (`sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`).
* Contain page layouts using `max-w-[1400px] mx-auto` or `max-w-7xl`.
* Never `h-screen` — always `min-h-[100dvh]`.
* CSS Grid over Flexbox percentage math.

### 3.F Dependency Verification
Before importing ANY 3rd-party library, check `package.json`.

---

## 4. DESIGN ENGINEERING DIRECTIVES (Bias Correction)

### 4.1 Typography
* **Display / Headlines:** Default `text-4xl md:text-6xl tracking-tighter leading-none`.
* **Body / Paragraphs:** Default `text-base text-gray-600 leading-relaxed max-w-[65ch]`.
* **Sans font choice:** `Inter` discouraged as default. Pick `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi` first.
* **SERIF DISCIPLINE:** Serif is very discouraged as default. BANNED as defaults: `Fraunces` and `Instrument_Serif`.
* **ITALIC DESCENDER CLEARANCE:** Use `leading-[1.1]` minimum + `pb-1` or `mb-1`.

### 4.2 Color Calibration
* Max 1 accent color. Saturation < 80% by default.
* No automatic purple button glows, no random neon gradients.
* **One palette per project.** Do not fluctuate between warm and cool grays.
* **PREMIUM-CONSUMER PALETTE BAN:** Warm beige/cream + brass/clay/oxblood/ochre + espresso is banned as default. Rotate between: Cold Luxury, Forest, Black and Tan, Cobalt + Cream, Terracotta + Slate, etc.

### 4.3 Layout Diversification
* **ANTI-CENTER BIAS:** Centered Hero sections avoided when `DESIGN_VARIANCE > 4`.

### 4.4 Materiality, Shadows, Cards
* Cards ONLY when elevation communicates real hierarchy.
* Tint shadows to background hue.
* **SHAPE CONSISTENCY LOCK:** Pick ONE corner-radius scale and stick to it.

### 4.5 Interactive UI States
Always implement: Loading (skeletal), Empty, Error, Tactile Feedback (`active:scale-[0.98]`).
* **BUTTON CONTRAST CHECK:** WCAG AA min (4.5:1 for body, 3:1 for large text).
* **NO DUPLICATE CTA INTENT:** One label per intent.
* **FORM CONTRAST CHECK:** Inputs, placeholders, focus rings all pass WCAG AA.

### 4.6 Data & Form Patterns
* Label ABOVE input. Helper text optional. Error text BELOW input.
* No placeholder-as-label.

### 4.7 Layout Discipline (Hard Rules)
* Hero MUST fit in initial viewport. Headline max 2 lines, subtext max 20 words.
* **HERO TOP PADDING CAP:** Max `pt-24` desktop.
* Navigation MUST render on single line on desktop.
* Navigation height cap: 80px max.
* **Section-Layout-Repetition Ban:** Once you use a layout family, max once on the page.
* **ZIGZAG ALTERNATION CAP:** Max 2 alternating image+text sections.
* **EYEBROW RESTRAINT:** Max 1 eyebrow per 3 sections.
* **SPLIT-HEADER BAN:** Left big headline + right small explainer paragraph pattern banned as default.
* **BENTO CELL COUNT RULE:** Exactly as many cells as you have content for.
* **Bento Background Diversity:** At least 2-3 cells need real visual variation.
* Mobile collapse explicit per section.

### 4.8 Image & Visual Asset Strategy
Priority: Image-generation tool → real web images → tell the user.
* **Never skip images** because the dial is low.
* **Div-based fake screenshots banned.**
* **Real company logos:** Use Simple Icons CDN.

### 4.9 Content Density
* Short headline (≤ 8 words) + short sub-paragraph (≤ 25 words) + one visual or one CTA.
* **Long lists need different UI** — not a longer `<ul>`.
* **COPY SELF-AUDIT:** Re-read every visible string before shipping.
* **Fake-precise numbers flagged.**
* **One copy register per page.**

### 4.10 Quotes & Testimonials
* Max 3 lines quote body.
* Attribution: name + role + company.

### 4.11 Page Theme Lock
The page has ONE theme. Sections do not invert.

---

## 5. CONTEXT-AWARE PROACTIVITY

Tools, not defaults. None fire automatically:
* **Liquid Glass / Glassmorphism:** For premium consumer, Apple-adjacent. Not for dashboards.
* **Magnetic Micro-physics:** When `MOTION_INTENSITY > 5`.
* **Perpetual Micro-Interactions:** Not every card needs infinite loop.
* **"Motion claimed, motion shown":** If `MOTION_INTENSITY > 4`, page must actually move.
* **MOTION MUST BE MOTIVATED:** Each ScrollTrigger, marquee, pinned section needs a reason.
* **MARQUEE MAX-ONE-PER-PAGE.**
* **GSAP Sticky-Stack / Horizontal-Pan** canonical skeletons available.

**Forbidden Animation Patterns:**
* `window.addEventListener("scroll", ...)` banned.
* Custom `window.scrollY` in React state.
* `requestAnimationFrame` loops touching React state.

---

## 6. PERFORMANCE & ACCESSIBILITY GUARDRAILS

* Animate ONLY `transform` and `opacity`.
* **Reduced Motion:** Must honor `prefers-reduced-motion`.
* **Dark Mode:** Design for both modes from start.
* **Core Web Vitals:** LCP < 2.5s, INP < 200ms, CLS < 0.1.
* Grain/noise on `fixed`, `pointer-events-none` only.
* **Z-Index Restraint:** Systematic layers only.

---

## 7. DIAL DEFINITIONS (Technical Reference)

### DESIGN_VARIANCE
* **1-3:** Symmetrical CSS Grid, equal paddings, centered alignment.
* **4-7:** Varied aspect ratios, left-aligned headers.
* **8-10:** Masonry, fractional CSS Grid, massive empty zones.
* **MOBILE:** Levels 4-10 collapse to strict single-column below 768px.

### MOTION_INTENSITY
* **1-3:** Static. CSS hover/active only.
* **4-7:** `cubic-bezier(0.16, 1, 0.3, 1)`, animation-delay cascades.
* **8-10:** Scroll-triggered reveals, parallax, GSAP. Never `window.addEventListener('scroll')`.

### VISUAL_DENSITY
* **1-3:** `py-32` to `py-48`.
* **4-7:** `py-16` to `py-24`.
* **8-10:** Tight paddings, no card boxes, `font-mono` for all numbers.

---

## 8. DARK MODE PROTOCOL

* Use Tailwind `dark:` variant or CSS variables.
* No pure `#000000` and no pure `#ffffff` — use off-black and off-white.
* Respect `prefers-color-scheme`.
* Test in both modes before finishing.

---

## 9. AI TELLS (Forbidden Patterns)

### 9.A Visual & CSS
* No neon / outer glows.
* No pure black (`#000000`).
* No oversaturated accents.
* No excessive gradient text.
* No custom mouse cursors.

### 9.B Typography
* Avoid Inter as default.
* No oversized H1s.
* Serif for editorial / luxury / publication only.

### 9.C Layout & Spacing
* Banned: 3 equal columns of feature cards.
* Banned: centered hero when VARIANCE > 4.
* Banned: generic shadcn/ui defaults (customize radii, colors, shadows).
* Banned: `h-screen` — always `min-h-[100dvh]`.

### 9.D Content & Copy (Banned)
* No emojis.
* No generic names ("John Doe", "Acme", "Nexus").
* No fake round numbers (`99.99%`).
* No AI copywriting clichés ("Elevate", "Seamless", "Unleash", "Next-Gen").
* No "Scroll to explore", "Swipe down" filler text.
* No broken Unsplash links — use `picsum.photos/seed/{id}/{w}/{h}`.

---

## 10. PRE-FLIGHT CHECKLIST (Before Finishing)

- [ ] Design read declared in one line
- [ ] Three dials set consciously
- [ ] No banned fonts, icons, shadows, layouts
- [ ] Shape consistency lock applied
- [ ] One palette per page
- [ ] One icon family per project
- [ ] Hero fits viewport
- [ ] Nav single-line at desktop
- [ ] No duplicate CTA intent
- [ ] Eyebrow count ≤ ceil(sectionCount / 3)
- [ ] Section-layout-repetition ban respected
- [ ] Zigzag alternation cap (max 2)
- [ ] Bento cells match content count
- [ ] Copy self-audit done
- [ ] Dark mode functional
- [ ] `prefers-reduced-motion` honored
- [ ] Loading / empty / error states exist
- [ ] Responsive collapse verified at 768px

---

## 11. REDESIGN PROTOCOL

### 11.A Audit Phase (mandatory first step)
When the brief is a redesign/addition to existing, **read the existing design files first**.

**What to audit:**
| Asset | How to find it |
|---|---|
| CSS tokens / variables | `globals.css`, `:root` blocks, `@theme` blocks, Tailwind config |
| Brand guidelines | `DESIGN.md`, `BRAND.md`, `STYLEGUIDE.md` in project root |
| Existing components | `components/`, `components/ui/`, shadcn/ui config |
| Design docs | `docs/design/`, `docs/technical/Ui-Ux.md` |

**Audit checklist before changing anything:**
- [ ] Read all CSS variables / tokens (brand palette, spacing scale, radii)
- [ ] Read the project's DESIGN.md or styleguide if it exists
- [ ] Read existing component patterns (button, card, input variants)
- [ ] Identify the current corner-radius system and spacing scale
- [ ] Identify the font stack
- [ ] Identify the dark mode strategy

### 11.B Integration Rules
1. **Preserve existing tokens.** Your new pages MUST use the project's existing CSS variables (`var(--theme-bg)`, `var(--theme-text-main)`, etc.). Do not invent new color tokens unless the brief explicitly asks for a rebrand.
2. **Match the existing radius system.** If cards use 8px radius, do not ship 16px.
3. **Match the existing spacing rhythm.** If the project uses `p-6` / `gap-6`, do not ship `p-8` / `gap-10`.
4. **Use existing component patterns.** Read one existing page's component markup and reuse its patterns for buttons, cards, inputs.
5. **Extend, don't replace.** New pages should feel like they belong to the same project. If the brief requires a new section type, build it from the project's existing primitives.
6. **When in doubt: match the project's DESIGN.md** — it was written for a reason.
