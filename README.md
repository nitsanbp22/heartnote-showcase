# HeartNote | Interactive Digital Greeting Platform

**Live co-founded product | Product, Brand, UI/UX and Front-End Showcase**

[heartnote.co.il](https://heartnote.co.il)

HeartNote is a Hebrew-first platform for creating animated and interactive digital greetings. Instead of sending a static card, users choose an experience, personalize it, preview it and share it through a unique link.

The live product includes an interactive template gallery, responsive editors, real-time preview, shareable greeting pages, accessibility support and free and premium product tiers.

> This repository is a curated portfolio case study of **my contribution to HeartNote**, not a clone of the full production codebase.

## Product preview

![HeartNote landing](assets/screenshots/heartnote-landing-desktop.png)

### From discovery to creation

![HeartNote gallery](assets/screenshots/heartnote-gallery-desktop.png)

The gallery helps users choose an experience by occasion and interaction type, with search, categories and clear free or premium states.

### Guided customization with live preview

![HeartNote interactive editor](assets/screenshots/heartnote-quiz-editor-desktop.png)

Different greeting types expose different controls, while the preview stays visible so the sender can understand the result while editing.

### Responsive product experience

<p align="center">
  <img src="assets/screenshots/heartnote-mobile-landing.png" width="38%" alt="HeartNote mobile landing" />
  <img src="assets/screenshots/heartnote-mobile-gallery.png" width="38%" alt="HeartNote mobile gallery" />
</p>

For the full visual flow, see [Product Walkthrough](docs/PRODUCT_WALKTHROUGH.md).

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

## Product and UX decisions

### Discovery before editing

The gallery is designed as a product discovery surface rather than a technical list of templates. Occasion categories, previews, search and pricing states help users choose an experience before they enter a creation flow.

### Guided creativity

Each greeting exposes only the fields relevant to its interaction. The product gives users enough control to make the result personal without turning creation into a complex design task.

### Interaction before decoration

The templates are not only different visual themes. Many are different interaction concepts with their own pacing, reveal or playful mechanic.

Examples include:

- birthday candle interactions
- quizzes and game-like experiences
- wedding and holiday scenes
- decision-based interactions
- love coupons
- reveal and surprise mechanics

### Preview as part of the product

Preview is not treated as a final technical check. A sender needs confidence that text, animation and interaction all work together before sharing something personal.

### Low-friction recipient experience

The greeting opens through a shareable URL. The recipient does not need to install an app or create an account.

### Mobile as a primary surface

Greeting creation and sharing are naturally mobile behaviors. The product therefore has separate mobile and desktop editor experiences instead of relying on simple scaling.

### Hebrew-first RTL

RTL behavior, typography, microcopy and hierarchy were designed around Hebrew from the beginning rather than added as a localization layer later.

## Brand direction

HeartNote's brand needed to feel emotional and playful without becoming childish or visually noisy.

The visual language was designed around:

- warmth and celebration
- coral and navy brand accents
- clean interface surfaces around expressive templates
- approachable Hebrew typography
- rounded forms and soft depth
- playful motion and small moments of surprise
- enough consistency to support many different occasions

Read more: [Design system & interaction principles](docs/DESIGN_SYSTEM_AND_INTERACTIONS.md)

## Monetization and packaging

![HeartNote pricing](assets/screenshots/heartnote-pricing-desktop.png)

HeartNote combines a free path with paid creation options. The product challenge is to communicate what users gain by paying without hiding the core experience behind an immediate paywall.

Pricing and packaging remain product decisions that can evolve as the live product generates more learning about user behavior and willingness to pay.

## Front-end contribution

My technical contribution focused primarily on translating product and design decisions into working user-facing interfaces.

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
- [`InteractiveShell.tsx`](code-samples/InteractiveShell.tsx) - reusable RTL shell for interactive greeting experiences

These files are focused examples relevant to my contribution. They are not a runnable copy of the production application.

## Product scope today

The live product includes:

- interactive greeting gallery
- around 20 interactive template types
- template-specific customization
- live preview
- shareable greeting links
- responsive Hebrew-first RTL experience
- free and premium product tiers
- authentication and user profiles
- accessibility support
- dark mode

The wider production system also includes backend, database, authentication, infrastructure, deployment and security work built collaboratively. Those areas are outside the primary scope of this portfolio case study.

## Collaboration

HeartNote demonstrates a different kind of product work from my solo projects.

Working with a technical co-founder required:

- aligning product ideas with technical constraints
- communicating visual and interaction intent clearly
- deciding where concepts needed simplification
- iterating on a real implementation instead of static mockups
- dividing ownership while maintaining one coherent product

I want that collaboration to be visible rather than presenting HeartNote as a generic "full-stack project".

## Tech context

The production system currently uses Next.js, React, TypeScript, PostgreSQL, Prisma, Auth.js and AWS infrastructure. These technologies shape product constraints and tradeoffs, but this showcase intentionally places **product decisions and user experience before infrastructure**.

## Showcase scope

This repository contains curated documentation, approved product screenshots and selected front-end examples only.

It does not contain:

- production credentials or environment files
- AWS or deployment configuration
- database configuration
- authentication secrets
- production user data
- the complete HeartNote source tree

The full collaborative production repository remains separate.

See [SHOWCASE_SCOPE.md](SHOWCASE_SCOPE.md).

## Case study

- [Product Walkthrough](docs/PRODUCT_WALKTHROUGH.md)
- [Product & UX Case Study](docs/PRODUCT_UX_CASE_STUDY.md)
- [Role & Collaboration](docs/ROLE_AND_COLLABORATION.md)
- [Design System & Interaction Principles](docs/DESIGN_SYSTEM_AND_INTERACTIONS.md)

## Status

**Live product**

HeartNote continues to evolve through product, content, design and technical iterations.
