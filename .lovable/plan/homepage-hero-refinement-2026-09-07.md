# Homepage hero refinement

## Changes
- Remove the homepage hero photograph and its unused import.
- Rebalance the banner as a wide, text-led composition that uses the available page width.
- Add a reusable staggered entrance animation for the eyebrow, headline, supporting copy, and actions.
- Respect reduced-motion preferences and keep the animation CSS lightweight.

## Technical details
- Define the animation once in the global design system and apply it through shared utility classes.
- Use transform and opacity only for smooth rendering.
- Keep the existing links, wording, responsive behavior, and semantic heading structure unchanged.
- Verify the current build and the rendered homepage after implementation.
