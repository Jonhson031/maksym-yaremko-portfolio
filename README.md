# Maksym Yaremko — Portfolio

A Next.js (App Router) + TypeScript rebuild of the portfolio, styled entirely
with CSS Modules and driven by typed data files instead of hardcoded JSX.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Editing content

You almost never need to touch a component to change the site's content —
edit the data instead:

| What you want to change | File |
| --- | --- |
| Projects in "Selected Work" | `src/data/projects.ts` |
| "Stack" categories/technologies | `src/data/stack.ts` |
| "From Idea to Production" steps | `src/data/process.ts` |
| Nav links, socials, About facts, Currently Building, hero status | `src/data/site.ts` |

Each project is one object in the `projects` array — add, remove, or reorder
entries and the homepage updates automatically (`SelectedWork.tsx` maps over
the array). Every project also needs a `visual` value (`'bracket' |
'marketing' | 'shop' | 'translate'`), which picks one of the four illustrative
mock components in `src/components/sections/SelectedWork/mocks/`.

**Replace the placeholders:** `socials` in `src/data/site.ts` currently uses
`#` for GitHub/LinkedIn/Resume and a placeholder email — swap those for the
real links before shipping. Project `href`/`url` fields in `projects.ts` are
placeholders too.

## Design tokens

All colors, fonts, spacing, and the container width live in
`src/styles/variables.css` as CSS custom properties. Component CSS Modules
reference these (e.g. `color: var(--color-accent)`) rather than hardcoding
values, so re-theming the site means editing one file.

The dark "Approach" and "Stack" sections work by locally overriding the same
custom properties inside their own CSS Module (see `.dark` in
`Process.module.css` / `Stack.module.css`) — every child component inside
that section automatically picks up the dark palette without any extra
props.

## Project structure

```
src/
  app/
    layout.tsx        Root layout — fonts, metadata, imports globals.css
    page.tsx           Composes every section in order
    icon.svg            Favicon
  components/
    ui/                Reusable, generic building blocks
      Container/       max-width + centered layout wrapper
      Button/           Primary/ghost CTA, renders <a> or <button>
      Tag/               Small tech-stack pill
      SectionHeading/   Eyebrow + title + note, shared by 3 sections
      Reveal/            Scroll-triggered fade/slide-in wrapper
      Icons.tsx           Arrow / close / check icon components
    layout/
      Nav/               Sticky nav + mobile menu (client component)
      Footer/
    sections/            One folder per homepage section
      Hero/               + StatusPanel.tsx (live clock/uptime)
      SelectedWork/       + ProjectCard.tsx + mocks/ (4 illustrative visuals)
      Process/
      About/
      Stack/
      CurrentlyBuilding/
      Contact/            + ContactModal.tsx
  data/                  Typed content arrays — see table above
  types/                 Shared TypeScript types (Project, etc.)
  styles/
    variables.css        Design tokens (colors, fonts, spacing)
    globals.css           Reset + a couple of shared utility classes
```

## Notes

- The contact modal builds a `mailto:` link from the form fields and hands
  the visitor to their own email client — there's no backend, so nothing is
  actually "sent" from the page itself. The UI is upfront about this in its
  copy.
- Animations respect `prefers-reduced-motion`.
- Fonts (Bricolage Grotesque, Instrument Sans, JetBrains Mono) are loaded via
  a Google Fonts `<link>` in `layout.tsx` rather than `next/font`, so the
  build doesn't require network access to Google's font CDN.
