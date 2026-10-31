# TeddyPups U.A.E.

A responsive React recreation of the TeddyPups puppy website, built from live-reference inspection and the supplied mobile screenshot.

## Features

- Homepage with responsive hero, puppy cards, process, trust, family gallery, FAQ preview, and contact CTA.
- Available-puppy catalogue with URL-backed origin, Korean Teacup, breed, and gender filters.
- Puppy details with gallery controls, status-aware actions, and a distinct Gone Home archive.
- How It Works page with keyboard-operable local/imported tabs.
- Nine static FAQs and the full 64-photo family gallery.
- Contact form with required-field validation and an honest no-backend response. It never claims to send a message.
- Responsive mobile navigation, route-aware metadata, and a Vercel SPA fallback.

## Technology

- React 19, TypeScript (strict), Vite 8, React Router 7
- Lucide React, CSS Modules-style organization with shared CSS tokens and global/component styles
- ESLint and Vite production bundling

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install And Run

```sh
npm install
npm run dev
```

## Build And Checks

```sh
npm run lint
npm run build
npm run preview
```

There is no `npm test` script or configured unit-test runner. Browser interaction and responsive checks were performed using the VS Code integrated browser.

## Routes

- `/` homepage
- `/puppies` available listings and filters
- `/puppies/:slug` available or archived puppy detail
- `/gone-home` archive
- `/how-it-works` local/imported process, delivery, and support
- `/faq` verified static answers
- `/happy-families` full 64-photo gallery
- `/contact` enquiry form and showroom details
- Unknown paths show a 404 page

Filters are query-backed with `origin`, `collection=korean-teacup`, `breed`, and `gender`.

## Project Structure

```text
src/
  app/                 Router, shell, route metadata
  assets/reference/    Locally bundled reference images
  components/          Shared layout, homepage, contact, and UI components
  data/                Puppy, FAQ, process, and family-gallery data
  pages/               Route-level pages
  styles/              Tokens, global styles, page styles
  types/               Shared TypeScript interfaces
public/                Static favicon and Vite public assets
```

## Environment

No environment variables are required. The contact form has no backend integration; it validates locally and directs visitors to verified WhatsApp or email links without transmitting data or displaying a success state.

## Deployment

Vercel settings: build command `npm run build`, output directory `dist`. [`vercel.json`](vercel.json) rewrites application routes to `index.html` for React Router deep links.

- To create an account-owned deployment, authenticate with `npx vercel login`, then run `npx vercel deploy --prod --verify`.
- An unauthenticated temporary deployment was attempted, but the generated preview returned HTTP 403 and is not a verified live URL.
- GitHub repository: no remote is configured yet; select the destination before pushing.

## Known Limitations

- Puppy availability is a reference snapshot dated 30 Oct 2026 and should be confirmed with TeddyPups.
- No backend exists for contact submissions.
- The reference's puppy video is not included; Max's two still photos are local.
- Some decorative artwork is recreated with CSS. Most family captions use neutral photo numbering where no caption was available.
- Reference image usage rights should be confirmed before public redistribution; see [asset provenance](src/assets/reference/README.md).

See [REFERENCE_NOTES.md](REFERENCE_NOTES.md) for verified observations, assumptions, and inspection boundaries.