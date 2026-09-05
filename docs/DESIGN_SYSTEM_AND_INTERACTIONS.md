# Design System & Interaction Principles

## Design objective

HeartNote needed to support many visual moods and occasions while still feeling like one product.

A wedding greeting, a playful decision interaction and a holiday card can look very different. The shared product layer therefore needs to provide consistency without flattening the personality of each template.

## Brand characteristics

The intended brand feeling is:

- warm
- expressive
- playful
- personal
- modern
- approachable

The interface around the greetings stays relatively clean so the interactive content can carry more visual personality.

## Product shell versus template freedom

A key design-system decision is separating the stable product shell from the creative template layer.

### Stable product layer

The shared experience should remain predictable across templates:

- navigation
- gallery patterns
- editor controls
- preview behavior
- action hierarchy
- premium labels
- accessibility patterns
- back and close behavior
- recipient guidance
- HeartNote branding

### Flexible template layer

Individual greetings can vary in:

- illustration style
- motion
- interaction mechanic
- occasion palette
- content structure
- reveal sequence
- emotional tone

This split helps the template library grow without turning the overall product into a collection of unrelated mini-sites.

## Typography and Hebrew

Hebrew typography is part of the brand and usability system.

The design needs to support:

- clear hierarchy in RTL
- short interface labels
- emotional copy without sacrificing readability
- different text lengths across templates
- consistent alignment in forms and controls

For a product with personalized messages, typography must also tolerate unpredictable user-generated content.

## Motion

Motion is used in two different layers.

### Product motion

Small interface transitions can clarify state changes, focus and navigation.

### Experience motion

The greeting itself may use animation as the emotional payoff or interaction mechanic.

Examples include reveals, opening scenes, game-like movement and occasion-specific animations.

The design principle is to keep product motion supportive and let template motion carry the expressive moment.

## Responsive design

The editor is treated as two related experiences rather than one rigid layout.

### Desktop

Desktop can support:

- more persistent editing controls
- larger preview areas
- simultaneous context
- quicker switching between fields

### Mobile

Mobile prioritizes:

- focused editing steps
- touch targets
- reduced visual competition
- clear access to preview
- fewer controls visible at once

This matters because mobile is a primary use case for creating and sharing greetings.

## RTL interaction behavior

RTL support goes beyond `direction: rtl`.

Relevant details include:

- reading order
- back and forward icon direction
- alignment of controls and labels
- slide and transition direction where meaningful
- placement of close and navigation affordances
- Hebrew punctuation and microcopy rhythm

## Accessibility

An expressive product still needs usable fundamentals.

Important patterns include:

- keyboard navigation
- ARIA labeling
- focus management
- sufficient touch targets
- visible focus state
- clear instructions for interactive templates
- avoiding motion that prevents basic task completion

A creative interaction is not successful if users cannot understand how to activate it.

## Designing interactive greetings

When thinking about a new template concept, I evaluate both the sender and recipient experiences.

### Sender questions

- What needs to be personalized?
- How much input is reasonable?
- What should be previewed live?
- What can be constrained to protect visual quality?

### Recipient questions

- Is the interaction obvious?
- Is there a clear first action?
- Is the emotional reveal worth the interaction?
- Does the experience still work on a small screen?
- What happens if the recipient does not interact exactly as expected?

This dual perspective is one of the most important differences between designing a greeting template and designing a static visual asset.

## Design consistency checklist

For new or revised product surfaces, I would review:

- hierarchy
- spacing
- RTL alignment
- copy tone
- mobile behavior
- action priority
- accessibility
- loading and error states
- dark mode where relevant
- template versus product-brand balance

The goal is not visual sameness. The goal is recognizable product behavior across very different creative experiences.
