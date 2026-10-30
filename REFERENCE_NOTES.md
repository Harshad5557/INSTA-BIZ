# Reference Notes: TeddyPups U.A.E.

Inspected on 2026-10-30 at [puppy.instabizweb.com](https://puppy.instabizweb.com/) and compared with the 707x768 screenshot supplied in the homepage request. A separate screen recording was not available, so behavior not shown by the screenshot is verified against the live site or explicitly marked unverified.

## Evidence Boundaries

- **Verified:** Directly observed in the live page, its accessibility snapshot, computed styles, or successful route responses.
- **Assumption:** A reasonable implementation starting point where a value or behavior was not directly verified. Do not treat it as a measured reference fact.
- The homepage and each top-level route below loaded successfully (HTTP 200). One puppy detail page was opened as a representative detail page; the other individual puppy routes were discovered from homepage links, not opened one by one.
- Hover, animation timing, keyboard focus styling, sticky-header behavior, and form submission were not inspected. No claims are made about these states.

## Discovered Routes

Top-level pages linked from the homepage navigation or footer and opened directly:

| Route | Observed page title / heading |
| --- | --- |
| `/` | TeddyPups U.A.E. — Premium teacup puppies in Dubai |
| `/puppies` | Available puppies |
| `/puppies/:slug` | Puppy detail; `/puppies/maltipoo-max-male` opened as a sample |
| `/gone-home` | Gone home |
| `/happy-families` | Happy families |
| `/how-it-works` | How it works |
| `/faq` | Questions & answers |
| `/contact` | Get in touch with us |

Homepage links exposed these puppy detail slugs:

- `/puppies/maltipoo-max-male`
- `/puppies/korean-teacup-maltipoo-female`
- `/puppies/korean-teacup-poodle-female`
- `/puppies/maltipoo-cavapoo-male`
- `/puppies/toy-poodle-male-female`
- `/puppies/maltipoo-female-2`
- `/puppies/pomeranian-female`
- `/puppies/copper-male`
- `/puppies/shitzu-female`
- `/puppies/shitzu-male`
- `/puppies/maltipoo-female-1`
- `/puppies/maltipoo-female`
- `/puppies/korean-teacup-pomeranian-1`
- `/puppies/korean-teacup-pomeranian`
- `/puppies/korean-teacup-pomeranian-male`

The listing also links to query variants: `/puppies?origin=local`, `/puppies?origin=imported`, and `/puppies?breed=maltipoo|pomeranian|poodle|cavapoo|shih-tzu`. The footer links to `/how-it-works#delivery`. These are discoverable URLs; not every query variant or detail slug was individually opened.

## Listing, Detail, And Archive

- The hydrated `/puppies` page has three filter groups: location (`Everywhere`, `Imported`, `Korean Teacup`), breed (`Maltipoo`, `Pomeranian`, `Poodle`, `Cavapoo`, `Shih Tzu`), and gender (`Boys`, `Girls`). Filters combine in the URL using `origin`, `collection=korean-teacup`, `breed`, and `gender`. There is no visible age filter, sort control, or pagination on the inspected page.
- At inspection time, `/puppies` showed 15 available puppies. `origin=imported` returned all 15, `origin=local` returned zero, the Korean Teacup collection returned five, `breed=maltipoo` returned six, and adding `gender=female` returned four. An unrecognized breed showed a zero-result message and a WhatsApp action.
- The page previews five Gone Home cards below the available list. `/gone-home` contains 27 distinct archive entries and labels them as already home; archived records are separate from active listings.
- A Max detail profile was opened through the listing. It presents breed, gender, age, origin, a two-item photo/video gallery, WhatsApp and enquiry actions, a journey section, and a health-claim section. The health claims are verified text on the reference but are intentionally omitted from this implementation to avoid repeating unverified medical claims. Both still photos are stored locally; the reference video is not reproduced.

## Remaining Pages

- `/how-it-works` uses two keyboard-selectable tabs: In Dubai and Imported. Each has four ordered steps. The page also includes the three puppy-promise items, four delivery/collection notes, the three Why choose us items, and the final quality section. The copy is transcribed from the live reference; no additional policies were added.
- `/faq` contains nine static question/answer pairs. The reference uses definition-list content rather than an accordion, so the clone preserves the static presentation.
- `/happy-families` contains the reference's 64 gallery photos. Eight gallery captions are available in the reference markup; other items are identified with neutral numbered captions rather than invented customer names or endorsements.
- `/contact` mirrors the name, phone, optional email/area/puppy/message fields and showroom details. The reference page exposes no form action or method, so the clone does not submit data or claim success. After valid local validation it reports that nothing was sent and presents the verified WhatsApp/email links. No fake loading state is shown because no async request occurs.

## Verified Layout And Behavior

- Header brand is TeddyPups. Desktop navigation exposes Home, Puppies, Happy families, How it works, FAQ, and Visit & contact. At 390px the Menu control opens a full-screen menu with those same links and a Close control. The menu can be opened; Escape and close-button behavior were not tested on the reference.
- The homepage section order is: hero; Meet the pups; Two ways to meet your puppy; Your puppy journey; Why families trust TeddyPups; Happy families & puppies; Questions, answered; final contact CTA; footer.
- The hero has a small lowercase family tagline, a two-line display headline, supporting copy, a primary available-puppies link, a WhatsApp action, and a horizontal set of puppy portraits.
- The supplied 707x768 screenshot confirms the logo mark/wordmark and Menu button, centered two-line headline, paired pill CTAs, six arch-cropped puppy portraits, a “peekaboo!” speech bubble, a central puppy illustration, a scalloped foreground, and the persistent WhatsApp/Call dock.
- The screenshot samples place the fixed header at 64px high, the hero from y=64 to y=768, the speech bubble at approximately y=497, the scalloped foreground at approximately y=644, and the contact dock from approximately y=696 to the viewport bottom.
- The footer uses a dark brown background and groups brand description, Explore links, contact details, social links, copyright, and the family tagline.
- Mobile menu was verified at 390px. The homepage rendered at 390px, 768px, and 1440px with no content wider than the browser's client area. Header height sampled as 64px at 390px and 76px at 768px/1440px. The Menu control is hidden at 1440px and visible at 390px/768px.
- The contact route exposes a letter-style form with name and phone inputs, optional email/area/puppy/message fields, a puppy select, a submit button, contact links, and a Downtown Dubai showroom section. The form was not submitted.
- The FAQ route displays question-and-answer content. The homepage family gallery exposes buttons labelled to open individual photos, and the puppy journey includes a Play video button. These controls were observed but not activated.

## Verified Visual Samples

Computed values from the live homepage; sizes are samples at the stated viewport, not a full CSS specification:

| Property | Observation |
| --- | --- |
| Page background | `#fffdf8` at the sampled body element |
| Main text | `#2a170e` |
| Footer background | `#24130b` |
| Primary action | `#a24a1a`, warm-white text, pill radius (`999px`), 52px tall |
| Secondary action | Transparent background, cocoa text, pill radius, 52px tall |
| Display type | Fraunces; homepage H1 computed at weight 800 |
| Body type | Figtree; body computed at 17px / 27.2px and weight 400 |
| H1 size | About 41.6px at 390px, 69.3px at 768px, and 110px at 1440px |
| Puppy portrait images | First six sample ratios range about 0.63–0.73 width/height; `object-fit: cover` |

Portrait `img` elements sampled with a zero radius; the surrounding frames and other page imagery may have different shapes. The live page uses additional illustrated/decorative imagery that was not measured here.

## Assumptions To Revisit

- The supplied recording may show details that differ from the live site; it was unavailable here. Request screenshots or the recording only if those details become necessary.
- A 1024px navigation breakpoint is inferred from the live button's `lg:hidden` class and visibility samples at 768px and 1440px. The exact transition was not measured at 1024px.
- Hover colors, transition durations, card radii, section spacing, container max-width, tablet-specific image arrangement, and mobile gallery behavior remain unverified. The initial CSS tokens for these should be treated as implementation defaults, not reference measurements.