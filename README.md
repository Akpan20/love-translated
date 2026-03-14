# Love Translated

A website exploring love across languages, cultures, and communities — featuring resources, videos, and an interactive workbook.

## Project Structure

```bash
love-translated/
├── index.html          # Home page
├── about.html          # About page
├── community.html      # Community page
├── resources.html      # Resources page
├── videos.html         # Videos page
├── workbook.html       # Workbook entry point (static)
├── shared.js           # Shared JavaScript across pages
├── style.css           # Global styles
├── workbook/           # React/Vite workbook app (source)
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── dist/           # Built output
└── workbook-app/       # Deployed workbook build
```

## Pages

- **Home** (`index.html`) — Landing page
- **About** (`about.html`) — About the project
- **Community** (`community.html`) — Community section
- **Resources** (`resources.html`) — Curated resources
- **Videos** (`videos.html`) — Video content
- **Workbook** (`workbook.html`) — Interactive workbook powered by React

## Workbook App

The workbook is a React application built with [Vite](https://vitejs.dev/). The source lives in `workbook/` and the production build is served from `workbook-app/`.

### Development

```bash
cd workbook
npm install
npm run dev
```

### Build

```bash
cd workbook
npm run build
```

The built files will output to `workbook/dist/`. Copy or deploy the contents of `dist/` to `workbook-app/` to update the deployed version.

## Tech Stack

- **Main site** — Vanilla HTML, CSS, JavaScript
- **Workbook** — React 19, Vite, ESLint
- **Validation** — Zod

## Getting Started

Since the main site is plain HTML, you can open any `.html` file directly in a browser, or serve the project root with any static file server:

```bash
npx serve .
```

Then navigate to `http://localhost:3000`.
