# Bank Kon Khmer

A personal finance dashboard built with vanilla HTML, CSS, and JavaScript. Track income and expenses, transfer and deposit money, filter and sort transactions, and view spending stats, all saved locally in the browser.

## Features

- **Dashboard** — financial overview on load
- **Transactions** — search, filter by type/category, sort by date or amount
- **Transfer** — send money between accounts
- **Deposit** — add funds via bank, card, or mobile
- **Statistics** — spending breakdown by category
- **Settings** — light/dark theme toggle, saved across sessions
- **Data persistence** — transactions stored in `localStorage`, no backend required

## Tech stack

- HTML5, CSS3 (custom properties for theming, no framework)
- Vanilla JavaScript (ES modules)
- Font Awesome for icons
- `localStorage` for data persistence

## Project structure

```
/Page       → HTML pages (dashboard, transactions, transfer, deposit, statistics, settings)
/Style      → CSS per page, plus shared nav styles
/Script     → theme toggle and shared scripts
/Data       → transactions.js (data layer, reads/writes localStorage)
/Image      → logo and static assets
```

## Running locally

No build step. Clone the repo and open `Page/index.html` in a browser, or serve the folder with any static server (e.g. the VS Code Live Server extension).

## AI assistance disclosure

Parts of this project were built with help from Claude (Anthropic). Specifically:

- Debugging CSS layout issues (sidebar overlap, dropdown positioning, nesting syntax that doesn't run outside a Sass/Less compiler)
- Refactoring hardcoded colors into CSS custom properties for dark/light theme support
- General explanations of concepts (flexbox, positioning, async/await, event handling) while learning them

The overall structure, features, and design decisions are my own. AI was used as a debugging and learning aid, not to generate the project wholesale.

## Author

Built by Heang Hongyang, software development student at Norton University, Phnom Penh.
