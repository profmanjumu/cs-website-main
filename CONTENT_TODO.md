# Content still to fill in

This checklist tracks **new UI slots** added in the wireframe redesign that need real links, IDs, or assets. Existing course names, bios, syllabus text, press URLs, Instagram, and LinkedIn were preserved and should not be rewritten here.

## Footer

- [ ] **TikTok URL** — uncomment the TikTok entry in [`components/landing-page/footer.tsx`](components/landing-page/footer.tsx) and set `href` (import `SiTiktok` from `react-icons/si`).

## Discord widgets (class pages)

Widget IDs live in [`lib/data.ts`](lib/data.ts) as `discordWidgetIds`. Values were restored from an older build — **verify** each ID in Discord Server Settings → Widget.

| Slug   | Key in `discordWidgetIds` | Status |
|--------|---------------------------|--------|
| CS 210 | `cs210`                   | Pre-filled — verify |
| CS 250 | `cs250`                   | Empty — add when ready |
| CS 460 | `cs460`                   | Pre-filled — verify |
| CS 577 | `cs577`                   | Pre-filled — verify |

- [ ] Confirm or replace widget IDs
- [ ] If a course has no Discord server, set that key to `''` (empty string) to show the placeholder panel

## Club logos (About page)

Placeholder squares render until you drop files here:

| Club | Suggested path |
|------|----------------|
| Bolts Robotics - SDSU VexU | `public/clubs/bolts-robotics.png` |
| Girls Who Code - SDSU College Loop | `public/clubs/girls-who-code.png` |
| Sally Ride Science - UCSD | `public/clubs/sally-ride-science.png` |
| SDSU CS | `public/clubs/sdsu-cs.png` |

- [ ] Add logo image files
- [ ] Update [`components/about/club-logos.tsx`](components/about/club-logos.tsx) to render `<Image src="/clubs/...">` once files exist

## UCSD UI (hidden)

`showUcsdUi` in [`lib/data.ts`](lib/data.ts) is currently **`false`**. Set it to `true` to restore:

- Nav **UCSD** link and home **UCSD** CTA
- `/ucsd` hub in the UI
- About press / Sally Ride bio paragraph / Sally Ride club slot
- SDSU hub Sally Ride affiliation pill

The `/ucsd` route and SRS course data remain in the codebase either way.

## UCSD hub (when re-enabled)

## CS 250

New SDSU tab / route `/cs250` — placeholder only:

- [ ] Course title + schedule in `courseMeta['CS 250']`
- [ ] Google Drive folder ID in [`app/(classes)/[slug]/page.tsx`](app/(classes)/[slug]/page.tsx)
- [ ] Full syllabus body in [`components/classes/syllabus.tsx`](components/classes/syllabus.tsx)
- [ ] Discord widget ID in `discordWidgetIds.cs250`

## Resources tab (class pages)

| Course | Status |
|--------|--------|
| CS 210 | Uses existing `externalLinks210` |
| CS 460 | Uses existing `externalLinks460` (still has a `test` entry) |
| CS 577 | Empty — shows placeholder |

- [ ] Add real Resources content for CS 577 (and clean up CS 460 test links if desired)

## Navigation / pages added

These routes are live:

| Route | Purpose |
|-------|---------|
| `/` | Home hub (SDSU CTA) |
| `/sdsu` | Tabbed SDSU courses with in-page Syllabus / Topics / Resources |
| `/ucsd` | UCSD outreach hub (hidden unless `showUcsdUi`) |
| `/about` | Bio + Clubs (+ In media when UCSD UI on) |
| `/cs210`, `/cs250`, `/cs460`, `/cs577` | Direct class pages (same content as SDSU tabs) |

No further page creation is required unless you want dedicated UCSD program pages instead of external UCSD links.
