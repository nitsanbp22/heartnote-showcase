# HeartNote | Interactive Digital Greeting Platform

**Live co-founded product | Product, Brand, UI/UX and Front-End Showcase**

[heartnote.co.il](https://heartnote.co.il)

HeartNote is a Hebrew-first platform for creating animated and interactive digital greetings. Instead of sending a static card, users choose an experience, personalize it, preview it, and share it through a unique link.

The live product includes a gallery of interactive templates, a responsive editor, real-time preview, shareable greeting pages, account flows, accessibility support, and free and premium product tiers.

> This repository is a curated portfolio case study of **my contribution to HeartNote**, not a clone of the full production codebase.

## My role

HeartNote was co-founded and built together with **Ilay Admoni**.

My main ownership areas were:

- product concept and early product direction
- brand identity and visual language
- UI/UX and information architecture
- user flows from discovery to creation and sharing
- interactive greeting concepts and creative mechanics
- visual direction for templates and product surfaces
- content, tone and Hebrew-first microcopy
- responsive and RTL experience
- front-end implementation and iteration
- product feedback, QA and continuous UX refinement

My contribution was strongest on the **product, creative, design and front-end side**. The complete production system is a collaborative product, so this showcase intentionally focuses only on the areas I owned or directly shaped.

Read more: [Role & collaboration](docs/ROLE_AND_COLLABORATION.md)

## The product problem

Traditional digital greetings often fall into one of two categories:

1. a static image or text message that is easy to send but not memorable
2. a complicated design tool that gives flexibility but requires too much effort for a simple personal gesture

HeartNote explores a middle ground: **guided interactive experiences that feel personal without requiring the sender to design from scratch**.

The product goal is to make creating a thoughtful digital greeting feel fast, visual and enjoyable while keeping the result expressive enough to feel unique.

## Core product journey

```text
Discover a greeting
        ↓
Choose an interactive template
        ↓
Personalize text, media and options
        ↓
Preview the experience
        ↓
Create the greeting
        ↓
Share a unique link
        ↓
Recipient experiences the interaction
```

This journey influenced most of the design decisions: the gallery must help people choose quickly, the editor must expose only relevant controls, and the final greeting must work without requiring the recipient to sign in or install anything.

## Product experience

### 1. Gallery and discovery

The gallery organizes different greeting experiences around occasions and interaction types. The goal is not to show a long list of technical templates, but to help users answer a simple question: **what kind of experience do I want to send?**

Product considerations included:

- occasion-based discovery
- clear free and premium differentiation
- visual previews before committing to a template
- reducing decision fatigue
- Hebrew-first hierarchy and category naming

### 2. Guided customization

Each greeting has different creative inputs, so a single generic form would create unnecessary complexity. The editor adapts to the selected template and keeps the customization experience focused on the fields that matter for that greeting.

The live front end has separate mobile and desktop editor experiences rather than treating mobile as a scaled-down desktop layout.

### 3. Interactive greeting concepts

HeartNote currently supports a broad library of animated and interactive greeting types, including playful mechanics, event-specific scenes and reveal-based experiences.

Examples include:

- birthday candle interactions
- wedding experiences
- holiday greetings
- decision and game-like interactions
- love coupons
- reveal and surprise mechanics

For me, this was one of the most interesting product-design challenges: translating an emotional idea into an interaction that is understandable, delightful and still simple enough to personalize.

### 4. Preview before sharing

Preview is a core part of the product rather than a final technical step. A sender needs confidence that text, media, animation and interaction all work together before sharing something personal with another person.

### 5. Sharing without recipient friction

The recipient experience is intentionally lightweight. The greeting opens through a shareable URL, with no app installation and no recipient account required.

This keeps the emotional moment separate from account creation or onboarding friction.

## Product and UX decisions worth discussing

### Interaction before decoration

The product is not built around decorative card layouts alone. Each template is treated as a small experience with its own interaction, pacing and reveal.

### Guided creativity

Users get enough control to make a greeting personal, while the template keeps the visual and interaction quality coherent.

### Mobile is a primary creation surface

Greeting creation is naturally social and mobile. Editor behavior, controls and preview therefore need to work as a real mobile workflow rather than a desktop interface squeezed into a smaller screen.

### Hebrew-first instead of translated RTL

The interface was designed for Hebrew from the beginning. RTL behavior, typography, text hierarchy and microcopy are part of the product experience, not a localization layer added later.

### Emotional products still need clear system behavior

A playful product can still create anxiety when users are about to send something personal. Clear preview states, predictable editing behavior, accessible controls and understandable premium boundaries are especially important in this context.

## Brand direction

HeartNote's brand needed to feel emotional and playful without becoming childish or visually noisy.

The visual language was designed around:

- warmth and celebration
- clean interface surfaces around expressive templates
- approachable Hebrew typography
- playful motion and small moments of surprise
- enough consistency for many different occasions and visual themes

Read more: [Design system & interaction principles](docs/DESIGN_SYSTEM_AND_INTERACTIONS.md)

## Front-end contribution

My technical contribution focused primarily on the user-facing experience and translating product and design decisions into working interfaces.

The production front end uses:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- responsive mobile and desktop layouts
- Hebrew RTL
- accessibility patterns

Selected examples included in this showcase:

- [`TemplateEditor.tsx`](code-samples/TemplateEditor.tsx) - separate mobile and desktop editor experiences
- [`InteractiveShell.tsx`](code-samples/InteractiveShell.tsx) - a reusable RTL interaction shell for greeting experiences

These files are included as focused examples of the front-end patterns relevant to my contribution. They are not a runnable copy of the production application.

## Product scope today

The live product includes:

- interactive greeting gallery
- around 20 interactive template types
- template-specific customization
- live preview
- shareable greeting links
- Hebrew-first RTL experience
- responsive editor flows
- free and premium product tiers
- authentication and user profiles
- accessibility support
- dark mode

The wider production system also includes backend, authentication, database, infrastructure, deployment and security work that was built collaboratively and is outside the primary scope of this portfolio case study.

## Collaboration

A major reason I wanted HeartNote represented separately in my portfolio is that it demonstrates a different kind of product work from my solo projects.

It required:

- aligning product and technical constraints
- communicating visual and interaction intent clearly
- deciding where a concept needed simplification
- iterating on real implementation rather than static mockups
- separating ownership while maintaining one coherent product

That collaboration is part of the case study, not something I want to hide behind a generic "full-stack project" label.

## Tech context

The production system currently uses Next.js, React, TypeScript, PostgreSQL, Prisma, Auth.js and AWS infrastructure. Those technologies matter because they shape product constraints and tradeoffs, but this showcase intentionally places **product decisions and user experience before infrastructure**.

## Showcase scope

This repository contains curated documentation and selected front-end examples only.

It does not contain:

- production credentials or environment files
- AWS or deployment configuration
- database configuration
- authentication secrets
- production data
- the complete HeartNote source tree

The full collaborative repository remains separate.

See [SHOWCASE_SCOPE.md](SHOWCASE_SCOPE.md).

## Case study

For the deeper product and UX rationale, see:

[Product & UX Case Study](docs/PRODUCT_UX_CASE_STUDY.md)

## Status

**Live product**

HeartNote continues to evolve through product, content, design and technical iterations.
