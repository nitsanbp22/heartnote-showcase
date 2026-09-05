# Product & UX Case Study

## Context

HeartNote is a live Hebrew-first platform for creating and sharing interactive digital greetings.

The product was designed around a simple observation: people often want to send something more meaningful than a message or image, but they do not necessarily want to design a full digital experience themselves.

The opportunity was to create a product that gives users **guided creativity**: enough personalization to feel personal, with enough structure to remain fast and easy to use.

## Product goal

Help a sender move from "I want to send something special" to a finished, shareable interactive greeting with as little friction as possible.

The experience needs to balance four things:

1. emotional expression
2. ease of creation
3. visual quality
4. predictable system behavior

## Primary user journey

### Discover

The user enters a gallery of greeting experiences and looks for something appropriate for an occasion or relationship.

The product question is not only "which template looks good?". It is also "which interaction communicates the feeling I want?"

### Choose

The user selects a greeting type based on visual preview, occasion, interaction and product tier.

A key UX goal is to make the difference between options understandable without requiring users to open every template.

### Personalize

The editor exposes the fields and controls relevant to the selected greeting.

Rather than forcing every template into one universal form, customization can adapt to the structure of the experience.

### Preview

The user sees how the final greeting will behave before creating or sharing it.

This is important because users are not only checking text. They are checking timing, visual hierarchy, media and interaction.

### Share

The final greeting is distributed through a unique link.

The recipient can experience it without installing an app or creating an account.

## UX challenge 1: many templates, one coherent product

Interactive greetings can vary dramatically. A birthday candle interaction does not behave like a decision wheel or a holiday reveal.

If every template behaves like a separate microsite, the product becomes inconsistent. If every template is forced into the same structure, the interactions lose personality.

The design approach was to separate:

- **shared product structure**: navigation, editor behavior, preview, branding, accessibility and sharing patterns
- **template personality**: visual theme, animation, interaction mechanic and occasion-specific content

This allows the product to scale to more creative concepts while preserving familiarity.

## UX challenge 2: personalization without a design-tool learning curve

A fully flexible editor gives power but introduces friction. Most users are not opening HeartNote to become designers. They want to personalize a greeting and send it.

The product therefore favors constrained personalization:

- relevant text fields
- image or media inputs where needed
- controlled color or content choices
- template-specific options
- immediate visual feedback

This keeps the sender inside a guided experience rather than presenting an empty canvas.

## UX challenge 3: mobile creation

A large part of the use case is naturally mobile: a user sees an occasion, creates something quickly, and shares it through a messaging app.

The editor therefore has distinct mobile and desktop experiences.

The mobile version needs to prioritize:

- fewer simultaneous controls
- touch-friendly targets
- clear transitions between editing and preview
- preserving enough preview context while editing
- avoiding long, overwhelming forms

The desktop version can use more simultaneous space for controls and preview.

This is a product decision, not only a responsive CSS decision.

## UX challenge 4: Hebrew-first RTL

HeartNote was conceived for a Hebrew-speaking audience.

The product was not designed in LTR and mirrored later. RTL affects:

- reading order
- navigation placement
- icon direction
- typography
- form alignment
- editor hierarchy
- animation direction in some interactions
- microcopy length and tone

Designing for Hebrew from the start helped keep the product feeling native rather than translated.

## UX challenge 5: premium boundaries without breaking the emotional flow

Monetization appears inside a highly emotional use case. A user may already be invested in a greeting when discovering that a template or feature is premium.

That means product-tier communication needs to be visible early enough to prevent surprise.

Relevant product principles include:

- show premium state before deep customization
- make free options genuinely usable
- avoid blocking basic discovery
- keep upgrade language clear rather than manipulative
- preserve the user's work where possible

## Interaction design principles

### Motion should explain or delight

Animations are strongest when they either communicate state or create the emotional payoff of the greeting.

Motion should not make basic product controls harder to understand.

### The recipient experience is part of the product

The product does not end when the sender clicks Share.

The greeting needs to load clearly, communicate how to interact, and deliver the intended reveal or moment without requiring product knowledge.

### Preview reduces emotional risk

Sending a personalized greeting can feel more sensitive than submitting a normal form. A trustworthy preview gives users confidence before sharing.

### Creativity should stay understandable

A novel interaction is only successful if the recipient understands what to do.

Visual affordances, instructions and pacing need to support the creative concept.

## Product thinking behind the template library

New greeting concepts can be evaluated with questions such as:

- Does the interaction add emotional value or only novelty?
- Can a sender personalize it without excessive setup?
- Is the recipient action obvious?
- Does it work well on mobile?
- Can it fit the shared HeartNote product shell?
- Is it reusable across enough occasions to justify development?
- Should it be free or premium?

This turns template ideation into a product decision rather than only a visual design exercise.

## What I would measure

For a mature analytics setup, the most useful product funnel would include:

- gallery visit to template selection
- template selection to editor start
- editor start to preview
- preview to completed creation
- completed creation to share action
- free versus premium template conversion
- abandonment by editor step or field type
- mobile versus desktop completion rate
- repeat creators

For individual templates, I would also compare selection rate, completion rate and sharing rate to identify concepts that look attractive in the gallery but create too much editing friction.

## Iteration opportunities

Potential future product work includes:

- stronger occasion and relationship-based discovery
- improved template preview before editing
- faster creation paths for returning users
- reusable sender preferences
- better differentiation between simple and highly interactive greetings
- experimentation with per-greeting pricing versus broader product tiers
- more explicit recipient-side accessibility testing
- richer analytics around interaction completion

## What this project demonstrates

From a Product and UI/UX perspective, HeartNote demonstrates:

- product concept development
- emotional-product UX
- brand and product-system alignment
- responsive interaction design
- Hebrew-first RTL design
- information architecture for a growing template library
- monetization-aware UX
- collaborative product development
- translating visual ideas into working front-end behavior
