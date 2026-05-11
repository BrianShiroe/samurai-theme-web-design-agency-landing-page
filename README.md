# Samurai Theme Web Design Agency Landing Page

A polished, responsive landing page built with Next.js and Cloudflare Workers. This repository delivers a modern agency-style marketing site with smooth interactions, responsive sections, and reusable React components.

## Live Demo

Experience the live site here:

https://samurai-theme-web-design-agency-landing-page.brianshiroe.workers.dev/

## Features

- Responsive landing page layout
- Hero section, services, projects, about, contact, and footer
- Smooth scrolling navigation
- Theme switcher with light/dark mode support
- Cloudflare-compatible deployment setup

## Tech Stack

- Next.js 14+ with the App Router
- React
- TypeScript
- Cloudflare Workers / OpenNext runtime
- Tailwind CSS via `globals.css`

## Installation

Install dependencies:

```bash
npm install
```

## Development

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view the site.

## Preview

Preview the application locally on the Cloudflare runtime:

```bash
npm run preview
```

## Deployment

Deploy the application to Cloudflare Workers:

```bash
npm run deploy
```

## Project Structure

- `src/app/` — app entry, layout, global styles, and pages
- `src/components/` — reusable UI components for the landing page
- `public/` — static assets, icons, and media
- `next.config.ts` — Next.js configuration
- `wrangler.jsonc` — Cloudflare Workers deployment config

## Notes

The live version is deployed on Cloudflare Workers and is configured using `wrangler.jsonc` and the OpenNext runtime.

If you want to customize the landing page, update the component files under `src/components/` and the main page in `src/app/page.tsx`.
