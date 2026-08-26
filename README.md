# Manju's Classroom

Next.js site for SDSU Computer Science courses and UCSD / Sally Ride Science outreach.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Homepage hold (404 on `/`)

The live homepage is hidden by default:

- **Static hosts** serving repo root: deploy [`index.html`](index.html) — a standalone 404 page.
- **Next.js** (`next start` / Vercel): `/` calls `notFound()` unless `SITE_HOLD=false`.

For local development, add to `.env.local`:

```bash
SITE_HOLD=false
```

When you are ready to launch the real homepage, set `SITE_HOLD=false` on your host (or remove the hold).

## Design

Wireframe hub layout (Home → SDSU / UCSD) with a Dusty Mulberry / Stormy Blue / Silver Mist palette. See [`CONTENT_TODO.md`](CONTENT_TODO.md) for anything that still needs real links, Discord widget IDs, club logos, or embed URLs.

## Content fill-ins

**Do not invent URLs or IDs.** Track open items in:

→ **[CONTENT_TODO.md](CONTENT_TODO.md)**

## Stack

- Next.js App Router
- Tailwind CSS
- Google Drive API for class topic folders (requires `GOOGLE_APPLICATION_CREDENTIALS` in `.env`)
