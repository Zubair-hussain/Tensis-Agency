# Contributing to TENS Agency

Thanks for your interest in contributing! Here's how to get involved.

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/tens-agency.git
cd tens-agency
npm install
npm run dev
```

## Project Structure

```
src/
├── components/   # One JSX + CSS Module per component
├── hooks/        # useCursor, useScrollReveal
├── assets/       # data.js — edit content here
└── styles/       # global.css — CSS variables only
```

## Guidelines

- **One component per file** — JSX paired with its `.module.css`
- **CSS variables only** — never hardcode colors, use `var(--red)` etc.
- **No inline styles** — keep styling in CSS Modules
- **Animations in CSS** — use `@keyframes` in the module file, not JS
- **Data in `data.js`** — if it's content (names, copy, icons), it goes there

## Pull Request Process

1. Fork the repo and create your branch: `git checkout -b feat/your-feature`
2. Make your changes following the guidelines above
3. Test locally with `npm run dev`
4. Build to confirm no errors: `npm run build`
5. Open a PR with a clear title and description

## Issue Labels

| Label | Meaning |
|-------|---------|
| `bug` | Something is broken |
| `enhancement` | New feature or improvement |
| `performance` | Speed or animation issue |
| `good first issue` | Great for newcomers |
| `help wanted` | Community input appreciated |

## Code of Conduct

Be respectful. Focus on the code, not the person.  
Questions? Open an issue or email [hello@tensagency.com](mailto:hello@tensagency.com).
