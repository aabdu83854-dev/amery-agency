---
name: Slide layout overflow
description: Why vw/vh slide layouts overflow the footer and how to avoid repeated QA cycles
---

# Slide layout overflow (fixed-viewport decks)

In the slides framework each slide is a fixed `w-screen h-screen overflow-hidden`
box. Content overflow does NOT scroll — it silently slips under absolute footers
or off-screen, only caught by screenshot QA.

**Rule:** Budget vertical space before writing. A two-column body where one column
stacks an intro paragraph + 3 multi-line items will almost always overflow once the
header + footer are accounted for.

**Why:** Inner columns are ~42vw wide, so any description over ~26 chars wraps to 2
lines; three 2-line items + a 3–5 line intro exceeds the ~50vh body region.

**How to apply:**
- Put `min-h-0` on every `flex-1`/grid container that holds content, or it grows past
  the viewport instead of shrinking.
- Prefer single-line list items (numbered headings alone, no wrapping descriptions)
  when stacking 3+ items beside a second column.
- Move a lead paragraph into the header as a constrained subtitle rather than into a
  narrow body column.
- Always screenshot every slide at `/slide<N>` (route pattern is `/slideN`, not `/N`)
  — overflow is invisible without it.
