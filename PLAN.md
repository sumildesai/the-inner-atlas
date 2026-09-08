# Ten Upanishads Interactive — Implementation Plan

## Problem and product direction

Create a beginner-friendly, visually contemplative web experience introducing the ten principal Upanishads through concise summaries, relationships among ideas, selected placeholder quotations, comparison, and search.

The repository is currently empty, so this is a greenfield project.

Based on research into interactive philosophy maps, museum learning collections, mythology encyclopedias, and sacred-text archives, the recommended experience is a **constellation-style concept map paired with an accessible editorial explorer**. The map creates curiosity and communicates relationships; conventional cards, detail pages, search, and comparison ensure the material remains understandable and usable. A purely cinematic scrollytelling site would be attractive but less effective for comparison, repeat visits, and nonlinear exploration.

## Audience and initial scope

- Primary audience: curious general readers and beginners
- Content depth: concise overview rather than scholarly commentary
- Initial content: placeholders structured for later editorial replacement
- Included: ten profiles, concept graph, comparison, curated passages, search
- Excluded from the first release: accounts, personalization, community features, CMS, audio, full translations, scholarly commentary, and cross-tradition comparisons

The ten initial profiles are:

1. Isha
2. Kena
3. Katha
4. Prashna
5. Mundaka
6. Mandukya
7. Taittiriya
8. Aitareya
9. Chandogya
10. Brihadaranyaka

## Recommended stack

- **Next.js with TypeScript and the App Router** for routing, static generation, metadata, and future expansion
- **Tailwind CSS** plus CSS custom properties for a coherent design system
- **D3 utilities with custom SVG/React rendering** for the concept constellation; avoid a heavyweight graph editor because the graph is curated rather than user-authored
- **Fuse.js** for small, client-side fuzzy search across static content
- **Zod** to validate content records during development/build
- **Vitest and Testing Library** for data utilities and interactive components
- **Playwright** for a small set of critical user journeys, if the scaffold includes it cleanly
- Static-first deployment suitable for Vercel, with no backend in the initial release

## Experience architecture

### 1. Home / constellation

- A concise orientation: what the Upanishads are, what this project does, and how to explore
- An interactive SVG constellation containing ten text nodes and core concept nodes such as Atman, Brahman, knowledge, liberation, consciousness, death, meditation, and creation
- Hover/focus previews and click/tap navigation
- Filters that highlight texts connected to a chosen concept
- A reduced-motion and small-screen fallback rendered as grouped cards/list, preserving all information without the graph

### 2. Explore all Upanishads

- Responsive card collection for the ten texts
- Filtering by theme and searchable title/keyword content
- Each card shows a one-sentence orientation, key themes, relative length/category where editorially appropriate, and a route to the profile

### 3. Individual profile

Each `/upanishads/[slug]` page contains:

- Plain-language overview
- “Why it matters” summary
- Three to five key ideas
- One or more placeholder passages with source/translation fields clearly marked
- Related concepts and related Upanishads
- A compact visual motif or color identity derived from the shared design system
- Add-to-compare control
- Editorial/source-status notice so placeholder material cannot be mistaken for authoritative translation

### 4. Concept explorer

- `/concepts` index and `/concepts/[slug]` detail pages
- Plain-language concept definitions
- Links showing where and how each concept appears across the ten texts
- Mini relationship visualization plus an accessible text equivalent

### 5. Comparison workspace

- Select two or three Upanishads
- Compare overview, central question, key themes, notable passages, and related concepts in aligned columns
- Encode similarities with labels and prose, not color alone
- Keep selections in URL query parameters so comparisons are shareable and restorable

### 6. Search

- Global command/search dialog and a dedicated results view
- Search titles, alternate spellings, summaries, concepts, themes, and passage metadata
- Group results by Upanishad, concept, and passage
- Provide useful empty states and direct theme browsing

### 7. About and methodology

- Explain selection of the ten texts, beginner-oriented editorial intent, placeholder status, and future sourcing process
- Explain that the Upanishads are diverse texts rather than a single uniform doctrine
- Reserve fields for translator, edition, citation, review status, and reviewer before real quotations are published

## Content model

Store initial content as typed local TypeScript or JSON data, separated from presentation. Define validated schemas for:

- `Upanishad`: slug, names/alternate names, short summary, orientation question, key ideas, themes, concept IDs, related text IDs, passages, source status, display metadata
- `Concept`: slug, label, concise definition, text relationships, related concept IDs
- `Passage`: excerpt, translation, locator, translator, edition, source URL, rights status, editorial status
- `Relationship`: source ID, target ID, relationship type, short explanation, strength/display weight
- `Theme`: stable ID, label, description, visual token

Create all ten placeholder records early so routing, graph behavior, comparison, and search are developed against the complete information architecture.

## Visual and interaction direction

- Contemporary, contemplative visual language with subtle sacred geometry rather than literal or decorative religious imagery
- Warm parchment/dusk neutrals, restrained saffron/gold accents, and distinct accessible theme colors
- Strong editorial typography with careful Devanagari/Sanskrit font fallback only where actual Sanskrit is present
- Slow, subtle ambient motion that never blocks reading; honor `prefers-reduced-motion`
- Avoid exoticizing language, claims of a single definitive interpretation, and ornamental symbols without context
- Mobile-first layouts; the experience must not depend on hover

## Accessibility and quality requirements

- Target WCAG 2.2 AA contrast and interaction behavior
- Full keyboard operation for graph nodes, search, filters, and comparison controls
- Semantic headings, landmarks, skip links, visible focus, descriptive labels, and live-region announcements where needed
- Accessible list/table alternatives for every visualization
- Touch targets of practical mobile size
- No essential information communicated only by position, animation, shape, or color
- Responsive behavior tested at phone, tablet, and desktop sizes
- Metadata, sitemap, Open Graph image strategy, and structured content suitable for indexing

## Implementation todos

### 1. Scaffold the application

Initialize the Next.js TypeScript project, establish formatting/linting from the scaffold, add the design tokens, base layout, fonts, and core dependencies.

### 2. Define and seed the content system

Create Zod-backed content schemas and complete placeholder records for ten Upanishads, initial concepts, themes, passages, and graph relationships. Add validation that catches broken IDs, missing routes, and incomplete citation metadata.

### 3. Build the shared application shell

Implement responsive navigation, footer, search trigger, route metadata, page container patterns, loading/empty states, focus behavior, and reduced-motion support.

### 4. Build the explorer and profiles

Implement the collection page, filters, Upanishad cards, statically generated profile routes, related-content navigation, passage treatment, and add-to-compare behavior.

### 5. Build the concept constellation

Implement the curated SVG layout, node/link rendering, concept filtering, hover/focus/touch details, navigation, responsive adaptations, and semantic list fallback.

### 6. Build concepts, comparison, and search

Implement concept routes, URL-driven selection of two or three texts, aligned comparison sections, Fuse.js indexing, search dialog/results, result grouping, and no-result recovery.

### 7. Refine the visual narrative

Add restrained transitions, sacred-geometry motifs, per-text visual tokens, landing-page orientation, and polished responsive states without compromising readability or performance.

### 8. Validate the experience

Add targeted unit/component tests for schemas, relationships, search, filtering, compare state, and keyboard interactions. Add critical end-to-end journeys for exploring from the graph, opening a profile, comparing texts, and searching. Run existing lint, type-check, test, and production-build commands.

### 9. Prepare for publication and editorial handoff

Add methodology/about content, placeholder warnings, deployment configuration, SEO metadata, sitemap, and a concise content replacement guide documenting citation and rights requirements.

## Todo dependencies

- Content-system work follows the initial scaffold.
- Shared shell and explorer can begin after scaffold; profile completion depends on the content schemas.
- The constellation depends on stable content and relationship schemas.
- Concepts, comparison, and search depend on stable records and shared UI patterns.
- Visual refinement follows functional feature completion.
- Validation follows all functional work.
- Publication preparation follows validation and final content-status review.

## Important decisions and considerations

- The concept graph is an invitation into the material, not the sole navigation mechanism.
- Content remains local/static until editorial workflow requirements justify a CMS.
- Placeholder passages must be visibly labeled and must not ship as unattributed authoritative quotations.
- Sanskrit transliteration should use a consistent standard once real content is curated.
- Any public-domain translation added later still requires edition, translator, locator, attribution, and rights verification.
- Performance should be protected by using curated SVG data and avoiding unnecessary 3D/WebGL effects.

## Research references

- Philosophy Tree — interactive visual history of philosophical ideas: https://philosophytree.org/
- Smithsonian Learning Lab — collection-based educational exploration: https://learninglab.si.edu/
- Mythlok — approachable mythology/culture browsing: https://mythlok.com/
- Mythopedia — accessible editorial encyclopedia patterns: https://mythopedia.com/
- Internet Sacred Text Archive — searchable sacred-text collection and contextual presentation: https://sacred-texts.com/

These are interaction and information-architecture references, not content authorities for the Upanishads.

## Implementation status

Implemented in the current directory:

- Next.js App Router application with static export support
- Home constellation, explorer, profiles, concepts, comparison, search, about, and Śānti mantra routes
- Responsive visual system with keyboard focus, reduced-motion support, and mobile text alternatives
- Static sitemap and robots routes
- GitHub Pages workflow at `.github/workflows/deploy-pages.yml`
- Local git history initialized on `main`

Validation passes with ESLint, TypeScript, and a production Pages build using `NEXT_PUBLIC_BASE_PATH=/the-inner-atlas`.

## Remaining publishing step

GitHub publication is blocked until the local GitHub CLI authentication is refreshed. The stored token for `sumildesai` is invalid. After running `gh auth refresh -h github.com`, create the private repository (default name: `the-inner-atlas`), add it as `origin`, push `main`, and enable Pages using GitHub Actions. The workflow is ready for that deployment.

## Approved mnemonic emblem direction

Use the existing Katha buffalo emblem as the baseline for a family of compact, monochrome line-art mnemonics. Each emblem should remain recognizable at card size, use restrained accent color, avoid unnecessary facial expression, and derive from a memorable image or teaching associated with its Upanishad.

| Upanishad | Approved emblem concept | Textual reference | Concept-sketch status |
|---|---|---|---|
| Isha | A parted sun-disc revealing the presence within | 15–16: the golden covering is removed and the Sun's rays gathered so the seeker may behold the Person within | Concept only |
| Kena | A question mark formed from an eye and the profile of a nose | 1.1–1.2: "By whom?" and the source behind sight, breath, hearing, speech, and thought | [Approved sketch](docs/mnemonic-concepts/kena-eye-nose.svg) |
| Katha | A calm, expressionless buffalo head representing Yama | Nachiketa's dialogue with Yama structures the text; the buffalo is Yama's later traditional *vāhana* and is not described in a Katha verse | Existing production prototype |
| Prashna | A simple human figure containing five directional currents: inward prāṇa, downward apāna, circling samāna, outward vyāna, and upward udāna | 3.3–3.7: the five functions of the one life-breath | [Approved thin-line sketch](docs/mnemonic-concepts/prashna-five-pranas.svg) |
| Mundaka | Two birds on one branch, one tasting a fruit and the other resting as the silent witness | 3.1.1–3.1.2: the experiencing and witnessing selves as inseparable companions | [Approved sketch](docs/mnemonic-concepts/mundaka-two-birds.svg) |
| Mandukya | A–U–M curves dissolving into one silent line | 8–12: the three audible measures and the soundless fourth, *turīya* | Concept only |
| Taittiriya | Five nested human silhouettes progressing inward to a quiet bliss center | 2.1–2.5: the food, vital-breath, mind, understanding, and bliss persons later systematized as the five sheaths | [Approved sketch](docs/mnemonic-concepts/taittiriya-five-silhouettes.svg) |
| Aitareya | An open eye within a cosmic egg, with subtle marks of the worlds emerging around it | 1.1–1.3 and 3.1.3: cosmic unfolding and *Prajñānam brahma*, "Consciousness is Brahman" | [Approved sketch](docs/mnemonic-concepts/aitareya-cosmic-eye.svg) |
| Chandogya | A vast banyan tree emerging from a nearly invisible seed point | 6.12.1–6.12.3: the immense tree arises from an unseen subtle essence | Concept only |
| Brihadaranyaka | A gently wagging raised index finger representing *neti neti*, "not this, not this" | 2.3.6 and 3.9.26: every limited description of the Self is negated | [Approved sketch](docs/mnemonic-concepts/brihadaranyaka-neti-finger.svg) |

Production emblems should be redrawn as coherent `120 × 120` SVG paths rather than importing the exploratory sketches directly. Preserve the approved visual metaphors, simplify detail until each survives the smallest card treatment, and provide concise accessible labels that state the mnemonic rather than interpreting it as a literal depiction.
