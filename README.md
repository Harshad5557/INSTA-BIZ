# TeddyPups U.A.E.

React, TypeScript, Vite, and React Router recreation of the TeddyPups website.

## Setup

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

## Routes

- `/` homepage.
- `/puppies` lists the available-puppy snapshot and the Gone Home preview.
- `/puppies/:slug` displays available or archived puppy details.
- `/gone-home` lists the archived puppies.
- `/how-it-works` explains local and imported puppy journeys, delivery, and support.
- `/faq` lists the nine verified reference questions and answers.
- `/happy-families` displays the 64 locally stored reference gallery photos.
- `/contact` contains the reference contact form, contact methods, and showroom details.
- Unknown routes display a 404 page.

The listing filters are encoded in query parameters: `origin`, `collection=korean-teacup`, `breed`, and `gender`. Availability is captured from the reference as of 30 Oct 2026 and should be confirmed with TeddyPups before relying on it.

The contact form validates fields in the browser but is not connected to a submission service. It never reports success or transmits data; valid submissions explain this and link to verified WhatsApp and email contact methods.

See [REFERENCE_NOTES.md](REFERENCE_NOTES.md) for verified reference observations and implementation boundaries. Image provenance is documented in [src/assets/reference/README.md](src/assets/reference/README.md).