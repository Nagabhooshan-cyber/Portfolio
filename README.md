# Nagabhooshan Bhat — Portfolio

A modern, dark, recruiter-focused developer portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Tech stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## 1. Install & run

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

Build for production:

```bash
npm run build
npm run preview
```

The production build is output to `dist/`, which you can deploy to Vercel, Netlify, GitHub Pages, or any static host.

## 2. Fill in your real information (important)

Per your instructions, no links, results, or credentials were invented. The following placeholders must be replaced before you publish:

**`src/data/config.js`**
```js
email: '[EMAIL]',
github: '[GITHUB_URL]',
linkedin: '[LINKEDIN_URL]',
resumeUrl: '[RESUME_URL]',
```
- Set `email` to your real email address.
- Set `github` / `linkedin` to your full profile URLs (e.g. `https://github.com/yourname`).
- Add your resume PDF to `public/Nagabhooshan_Bhat_Resume.pdf`, then set `resumeUrl: '/Nagabhooshan_Bhat_Resume.pdf'`.

**`src/data/projects.js`**
- Replace `githubUrl: '[GITHUB_URL]'` on each project with the real repo link.
- Add `liveUrl` if a project has a live demo (the "Live Demo" button only renders when this is set).

**`src/data/certifications.js`**
- Add `credentialUrl` for each certificate if you have a public/verifiable link.

**Open Graph image (optional)**
- `index.html` references `/og-image.png`. Add a 1200×630 image at `public/og-image.png` for rich social link previews, or remove the two `og:image` / `twitter:image` tags if you'd rather skip it.

## 3. Wire up the contact form

The contact form in `src/components/Contact.jsx` currently validates input client-side and simulates a submission. To make it actually send messages, open that file and replace the placeholder block inside `handleSubmit` with one of:

- **Formspree** — create a form at formspree.io and POST `new FormData(e.target)` to your form endpoint.
- **EmailJS** — install `@emailjs/browser` and call `emailjs.send(...)` with your service/template/public keys.
- **Your own backend** — POST `form` as JSON to an API route you control.

The relevant code is already commented in place, so you only need to uncomment/adjust one option.

## 4. Project structure

```
src/
  components/     UI components (Navbar, Hero, About, Skills, Projects, ...)
  data/           Content lives here — edit these files to update the site
    config.js       your name, links, resume
    navigation.js    navbar links
    skills.js        skill categories
    projects.js      project details
    experience.js    work experience timeline
    certifications.js
    achievements.js
    education.js
  hooks/
    useActiveSection.js   powers the "active link while scrolling" navbar behavior
  App.jsx           page composition / section order
  index.css         global styles, theme tokens, scrollbar, focus states
public/
  favicon.svg
```

To update content (a new project, a new certification, etc.), edit the relevant file in `src/data/` — you generally won't need to touch component code.

## 5. Design notes

- Theme: near-black charcoal background (`ink` scale) with a teal/indigo accent pair and warm amber reserved for the achievement highlight.
- Type: Space Grotesk for headings, Inter for body copy, JetBrains Mono for section labels ("// 01_about") and tags — a nod to the CS/terminal aesthetic without overusing it.
- Motion: entrance/staggered reveals on scroll (Framer Motion `whileInView`), a scroll progress bar, and a git-log–style timeline for Experience/Education. Respects `prefers-reduced-motion`.
- Accessibility: semantic sectioning, visible focus rings, labelled form fields with inline errors, keyboard-operable nav and buttons.
