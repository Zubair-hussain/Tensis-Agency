# GitHub Issues — Copy & Post These

Paste each issue into GitHub → Issues → New Issue.
Then post the "Your Response" comment underneath it.

---

## ISSUE #1 — Mobile Responsive Breakpoints

**Title:** Hero stats overlap on mobile viewports below 768px

**Body:**
Hey, great project! Noticed the `.stats` block in the Hero section sits with `position: absolute; right: 60px` — on screens below 768px this overlaps the headline text.

Steps to reproduce:
1. Clone the repo and run `npm run dev`
2. Open DevTools → toggle device toolbar → set to iPhone 14 (390px)
3. The three stat numbers (48+, 12M, 9+) overlap the "MASTER THE GAME" heading

Expected: stats should stack below the headline or hide on mobile
Actual: overlapping content, text unreadable

**Label:** `bug`

---

### ✅ YOUR RESPONSE TO #1:

Good catch — this is a known gap. The hero was initially designed desktop-first. Fix planned in the next update:

```css
/* Hero.module.css — add below .stats */
@media (max-width: 768px) {
  .stats {
    position: static;
    flex-direction: row;
    justify-content: flex-start;
    gap: 32px;
    margin-top: 48px;
    animation: fadeUp 0.9s 1.1s forwards;
  }
  .stat { text-align: left; }
  .statDivider { margin-left: 0; }
}
```

Will also add breakpoints for the hero title font-size and nav collapse. Tracking this in the v1.1 milestone. Thanks for the detailed report!

---

## ISSUE #2 — Dark/Light Theme Toggle

**Title:** Feature request: light mode / theme toggle

**Body:**
The dark theme looks premium but some use cases (pitch decks shown on projectors, printed proposals) need a light version.

Would love to see:
- A toggle button in the nav (sun/moon icon)
- CSS variable swap on `:root` when `data-theme="light"`
- Minimal light palette: cream background, dark text, red accents stay

I can submit a PR for this if you want to sketch out the variable names first.

**Label:** `enhancement`

---

### ✅ YOUR RESPONSE TO #2:

Love this idea — especially the projector use case, hadn't thought of that.

Here's the variable skeleton I'm planning to use, happy to accept a PR against this:

```css
/* global.css */
[data-theme="light"] {
  --black: #f5f0e8;
  --white: #0d0d0d;
  --dim: #e8e3d8;
  --dim2: #ddd8ce;
  /* --red and --gold stay identical */
}
```

The toggle would live in `Navbar.jsx` using a `useState` + `useEffect` that sets `document.documentElement.dataset.theme`. I'll add `good first issue` label — this is a solid PR if you want to take it!

---

## ISSUE #3 — Marquee Pauses on Tab Blur

**Title:** Marquee animation desync after switching browser tabs

**Body:**
When I switch to another browser tab and come back, the two marquee rows (row 1 scrolling left, row 2 scrolling right) lose sync and the timing looks off.

Browser: Chrome 123, macOS Sonoma
Steps: load page → switch tab for ~10s → return

Is this intentional (save CPU) or a bug?

**Label:** `discussion`

---

### ✅ YOUR RESPONSE TO #3:

Great observation — this is actually browser-native behaviour. Chrome throttles CSS animations on hidden tabs to save CPU. When you return, the animations resume from where they left off rather than resyncing.

It's not intentional but also not harmful. Two options I'm considering:

1. **Accept it** — most users won't notice, and CPU savings are real
2. **Force resync on visibility change:**

```js
// in Marquee.jsx useEffect
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // restart animations by toggling a class
  }
})
```

Going to leave this as `discussion` for now and revisit in v1.2. If the desync bothers you on a demo, a quick page refresh fixes it!

---

## ISSUE #4 — Cursor on Touch Devices

**Title:** Custom cursor div renders but cursor: none causes issues on touch devices

**Body:**
On iPad (touch + pointer) the custom cursor elements `#cursor` and `#cursor-ring` render but don't move since there's no `mousemove` event on touch. Also the `cursor: none` on `body` might interfere with tap targets.

Suggestion: detect pointer type and skip cursor rendering on touch-only devices.

**Label:** `bug`

---

### ✅ YOUR RESPONSE TO #4:

Solid bug — the `useCursor` hook currently just fires on `mousemove` with no touch guard. Here's the fix I'll ship:

```js
// hooks/useCursor.js
export function useCursor() {
  useEffect(() => {
    // Skip on touch-only devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    document.body.style.cursor = 'none'
    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
      ring.style.left   = e.clientX + 'px'
      ring.style.top    = e.clientY + 'px'
    }
    document.addEventListener('mousemove', move)
    return () => document.removeEventListener('mousemove', move)
  }, [])
}
```

`(pointer: fine)` returns true for mouse/trackpad and false for touch-only. This will be in the next patch. Thanks!

---

## ISSUE #5 — Scroll Progress Indicator

**Title:** Enhancement: add scroll progress bar to navbar

**Body:**
Would be a nice touch for the TENS brand — a thin red progress bar under the navbar that fills left-to-right as you scroll the page. Matches the overall aesthetic perfectly.

Something like:
- `position: fixed` just below the nav at `top: 72px`
- 2px height, `background: var(--red)`
- Width driven by `(scrollY / (docHeight - viewportHeight)) * 100`

Happy to contribute this if the maintainer is open to it.

**Label:** `enhancement`

---

### ✅ YOUR RESPONSE TO #5:

This fits the design language really well — a 2px red bar under the nav is clean. Here's a `useScrollProgress` hook stub you can build on if you want to PR it:

```js
// hooks/useScrollProgress.js
import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return progress
}
```

Then in `Navbar.jsx`:
```jsx
const progress = useScrollProgress()
// render: <div style={{ width: `${progress}%` }} className={styles.progressBar} />
```

Go for it — I'll review and merge!
