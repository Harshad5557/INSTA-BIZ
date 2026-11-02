# Loom Walkthrough Outline

**Target length:** 5–7 minutes

This is a recording outline, not a recorded video. Add the final live-site, repository, and Loom URLs after those destinations are created and verified.

## 1. Introduction

“This is my Insta Biz Web puppy-site recreation. I used the live TeddyPups U.A.E. site and the supplied mobile screenshot as references. I’ll show the main routes, reusable data/components, responsive behavior, validation, and what remains intentionally unconnected.”

## 2. Reference Analysis

Show `REFERENCE_NOTES.md`. Explain that notes separate measured live observations from assumptions. Mention the verified section order, mobile menu, catalogue controls, detail fields, nine FAQ entries, 64 family photos, and the form’s lack of a submission endpoint.

## 3. Technology And Structure

Show the project tree and `package.json`: React, TypeScript strict mode, Vite, React Router, Lucide, and ESLint. Point out `src/app`, `src/pages`, `src/components`, `src/data`, `src/styles`, and `src/assets/reference`.

## 4. Design System

Show `src/styles/tokens.css` and `src/styles/global.css`. Explain the measured cream/cocoa/caramel palette, Fraunces/Figtree type pairing, reusable spacing/container/radius tokens, visible focus, and reduced-motion handling.

## 5. Homepage

Open `/`. Walk through the hero and the eight sections in order. Mention that the puppy collage mascot is a CSS approximation and the hero photos/brand mark are locally bundled reference assets.

## 6. Puppy Data And Filters

Open `/puppies`. Show `src/types/index.ts`, `src/data/puppies.ts`, and `src/pages/PuppiesPage.tsx`. Demonstrate Imported, a breed filter, adding gender, clearing filters, and an empty result. Explain that filters update query parameters and that the displayed available inventory is a dated reference snapshot, not a live feed.

## 7. Details And Gone Home

Open Max’s profile, switch between the two photos, and show breed/gender/age/origin and WhatsApp/email actions. Open an archived profile to show its Gone home state and absence of an availability CTA. Visit `/gone-home` to show the separate 27-record archive.

## 8. Supporting Pages

Open `/how-it-works` and demonstrate the arrow-key-accessible In Dubai/Imported tabs. Open `/faq` and explain the static definition-list presentation follows the reference. Open `/happy-families` and demonstrate a photo dialog from the 64-item gallery.

## 9. Contact Behavior

Open `/contact`. Submit empty fields to show required errors and focus behavior; then enter valid values and submit. Explain that the form clearly says the details were not sent because there is no configured service, and direct visitors to verified WhatsApp/email contacts. Do not describe this as a successful submission.

## 10. Navigation, Responsive Checks, And 404

Demonstrate the mobile menu opening, Escape closing it, and navigation closing it. Visit an invalid route for the 404. Explain that browser checks covered 360, 390, 768, 1024, and 1440px with no horizontal overflow on the implemented routes.

## 11. Testing And Deployment

Show actual terminal output for `npm run lint` and `npm run build`. Explain that there is no `npm test` script. Show `vercel.json` and the Vercel build/output settings (`npm run build`, `dist`). Only show a deployment URL after it has loaded and its routes have been checked.

## 12. AI Tools And Prompts

State accurately: “I used GitHub Copilot in VS Code to help inspect the reference, scaffold and implement components, review accessibility, and debug build/browser findings. I reviewed the changes and verified them with browser checks, lint, and the production build.”

Representative prompts, paraphrased from the actual task briefs:

- “Inspect the live puppy-site reference and supplied screenshot. Record verified observations separately from assumptions, then prepare a React/TypeScript/Vite foundation.”
- “Implement the homepage to match the reference using reusable, typed components and locally stored images.”
- “Implement the listing filters, puppy details, and Gone Home archive based on observed routes and data; do not invent facts.”
- “Complete How It Works, FAQ, Families, and Contact pages. Do not claim a form submission succeeded without a backend.”
- “Audit routes, interactions, accessibility, responsive layouts, console/build output, and fix critical defects.”

## 13. Challenges And Limitations

- The reference’s image optimizer rejected one requested image size; downloads succeeded at a supported size.
- The reference contact form exposed no submission endpoint, so this implementation validates locally and never claims data was sent.
- The source video and some custom illustrations are not reproduced; some family captions use neutral numbered labels.
- Puppy availability is a snapshot dated 30 Oct 2026 and can become stale.
- The GitHub remote and authenticated Vercel account are not configured in this workspace. The repository and production deployment URLs must be selected and verified before final submission.

## Submission Links

- Live Website: https://teddypuppy.vercel.app/
- GitHub Repository: https://github.com/Harshad5557/INSTA-BIZ
- Video Walkthrough: https://drive.google.com/file/d/1PN0yDv4wmWWlvm6u9IeEzkl66AlY2tSy/view?usp=sharing
