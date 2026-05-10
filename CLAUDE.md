# ESL Adult Program — Website Project

## Project Summary

A static marketing website for an adult ESL (English as a Second Language) program.
Hosted on GitHub Pages. No backend, no forms, no database.
Target audience: Spanish-speaking adults in the local community.

---

## Business Context

- **Program:** 8-week adult ESL course
- **Schedule:** 3 classes per week, 1 hour each (24 total sessions)
- **Pricing:** $720 for the full 8-week bundle ($90/week, $30/class)
- **Instructor:** Texas state-certified bilingual teacher
- **Registration:** Via WhatsApp or direct phone contact only — NO online forms
- **Language:** Site must support English and Spanish (bilingual toggle)

---

## Tech Stack

| Layer       | Technology              | Notes                              |
|-------------|-------------------------|------------------------------------|
| Structure   | HTML5                   | Semantic, accessible markup        |
| Styling     | Tailwind CSS (CDN)      | No build step, loaded via CDN link |
| Scripts     | Vanilla JavaScript      | No frameworks, no bundler          |
| Hosting     | GitHub Pages            | Static files only                  |

**No React, no Node, no build pipeline.** Everything must work as plain static files
that GitHub Pages can serve directly.

---

## File Structure

```
esl-website/
├── index.html          ← Landing page (main entry point)
├── about.html          ← About the teacher
├── program.html        ← Program details, schedule, weekly outline
├── contact.html        ← Contact page (WhatsApp + phone only, no form)
├── css/
│   └── style.css       ← Custom styles on top of Tailwind
├── js/
│   ├── main.js         ← Shared logic: nav, mobile menu, smooth scroll
│   └── i18n.js         ← Bilingual EN/ES toggle logic
└── locales/
    ├── en.json         ← All English text strings
    └── es.json         ← All Spanish text strings
```

---

## Pages

### index.html — Landing Page
- Sticky navigation with mobile hamburger menu
- Hero section: headline, subheadline, WhatsApp CTA button
- 3 benefit cards (get a job, help your family, gain independence)
- Pricing block: bundle vs. drop-in comparison table ($720 vs $840)
- Instructor credential callout (Texas-certified bilingual teacher)
- Cohort start date / urgency block (limited seats)
- Footer: phone, WhatsApp link, social link (if any)

### about.html — About the Teacher
- Teacher photo (placeholder if not yet available)
- Name and Texas certification credential
- Personal story / teaching philosophy
- Why she teaches ESL

### program.html — Program Details
- Schedule: days, times, location
- 8-week outline: what students learn each week
- FAQ accordion (click to expand/collapse answers)
- WhatsApp CTA at the bottom

### contact.html — Contact
- Clear instructions: "To enroll, contact us via WhatsApp or phone"
- Large WhatsApp button linking to `https://wa.me/[PHONE_NUMBER]`
- Phone number displayed prominently
- NO form, NO email field

---

## Key Interactive Features

1. **Mobile hamburger menu** — collapsible nav for small screens
2. **EN/ES language toggle** — single button swaps all page text, no reload
3. **FAQ accordion** — click to expand answers on program.html
4. **Smooth scroll** — anchor links scroll smoothly
5. **Sticky header** — nav stays visible while scrolling
6. **Floating WhatsApp button** — fixed position on all pages, links to WhatsApp

---

## Bilingual System

All visible text must be stored in `locales/en.json` and `locales/es.json`.
HTML elements use a `data-i18n="key_name"` attribute.
`js/i18n.js` reads the active language and replaces `textContent` on all tagged elements.
Default language: Spanish (`es`). Toggle button switches to English and back.
Language preference is saved in `localStorage`.

Example:
```html
<h1 data-i18n="hero_headline"></h1>
```
```json
// en.json
{ "hero_headline": "Speak Confident English in 8 Weeks" }

// es.json
{ "hero_headline": "Habla inglés con confianza en 8 semanas" }
```

---

## WhatsApp Integration

All CTAs link to WhatsApp using this URL format:
```
https://wa.me/1XXXXXXXXXX?text=Hola%2C%20me%20interesa%20el%20programa%20de%20ingl%C3%A9s
```
Replace `1XXXXXXXXXX` with the full international phone number (country code + number).
The pre-filled message reads: "Hola, me interesa el programa de inglés"

---

## Design Guidelines

- **Primary color:** Deep blue (e.g. `#1e3a5f`) — trustworthy, professional
- **Accent color:** Warm gold/yellow (e.g. `#f59e0b`) — energy, optimism
- **Font:** System sans-serif stack or Google Fonts `Inter` (loaded via CDN)
- **Tone:** Warm, welcoming, simple — not corporate
- **Images:** Use free stock photos from Unsplash if teacher photo unavailable
- **Mobile-first:** Most users will be on phones

---

## GitHub Pages Deployment

- Repository name: `esl-website` (or custom)
- Branch: `main`
- Source: root `/` folder
- Enable Pages in repo Settings → Pages → Branch: main / folder: root
- Custom domain (optional): add a `CNAME` file with the domain name

---

## Placeholders to Fill In Before Launch

| Placeholder         | Where                        |
|---------------------|------------------------------|
| `[PHONE_NUMBER]`    | WhatsApp links, contact page |
| `[START_DATE]`      | Hero section, program page   |
| `[SCHEDULE]`        | Program page (days/times)    |
| `[LOCATION]`        | Program page                 |
| `[TEACHER_NAME]`    | About page, footer           |
| `[TEACHER_PHOTO]`   | About page                   |

---

## Out of Scope

- No backend or server-side logic
- No contact forms or email submission
- No payment processing
- No user accounts or login
- No CMS
- No analytics (can be added later with Google Analytics snippet)