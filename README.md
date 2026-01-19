Portfolio

A personal portfolio built with Next.js (App Router), React, Tailwind CSS and Three.js, showcasing projects, experience and interactive visual components.

## Features

- Clean, responsive portfolio layout with App Router-based pages.
- Interactive 3D visuals using `three` and `@react-three/fiber`.
- Tailwind CSS for utility-first styling and animations.
- Sentry integrated for error monitoring.
- Handy components: Hero, Grid, RecentProjects, Experience, Clients, Footer, and various UI helpers.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Three.js, @react-three/fiber, three-globe

## Getting Started

Prerequisites:

- Node.js 18+ and npm

Install dependencies:

```bash
npm install
```

Run in development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

Linting:

```bash
npm run lint
```

Deploy (example):

```bash
npm run deploy
```

## Project Structure (high level)

- `app/` — Next.js App Router pages and API routes
- `components/` — Page sections and UI components
- `components/ui/` — Reusable UI primitives and effects
- `data/` — Static data (JSON, indexes)
- `lib/` — Utilities
- `public/` — Static assets

## Configuration

- Tailwind is configured in `tailwind.config.ts`.

## Contributing

Contributions are welcome — open an issue or submit a PR. Please follow existing code style and ensure TypeScript types and linting rules pass.

## Contact

If you'd like help or want to collaborate, open an issue or contact the owner via the links on the site.
