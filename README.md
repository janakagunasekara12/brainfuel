# BrainFuel 🧠⚡

A free knowledge-sharing website offering step-by-step tutorials on real skills — Excel, maths, coding and more. Clear, free, built for all ages.

**Live site:** [brainfuel.online](https://brainfuel.online)

---

## Project Overview

| Detail | Info |
|--------|------|
| **Site name** | BrainFuel |
| **Domain** | brainfuel.online |
| **Hosting** | GitHub Pages (free) |
| **Technology** | Pure HTML5, CSS3, Vanilla JavaScript |
| **Analytics** | Google Analytics 4 (G-7D9854X2HX) |
| **Monetisation** | Google AdSense (pending approval) |

---

## File Structure

```
brainfuel/
│
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page (Formspree form)
├── privacy-policy.html     # Privacy policy (required for AdSense)
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # Search engine crawl instructions
├── Brainfuel Logo.png      # Site logo
│
├── css/
│   └── style.css           # Main stylesheet (design system)
│
├── js/
│   └── main.js             # Main JavaScript (interactions, animations)
│
└── excel/
    ├── index.html          # Excel topic hub page
    ├── basics.html         # Lesson 1 – Excel Basics (8 min)
    ├── formulas.html       # Lesson 2 – Essential Formulas (12 min)
    ├── charts.html         # Lesson 3 – Creating Charts (10 min)
    └── pivot-tables.html   # Lesson 4 – Pivot Tables (11 min)
```

---

## Pages

### Homepage (`index.html`)
- Animated gradient hero with floating shapes
- Scrolling topics ticker strip
- Browse Topics section (categories grid)
- Featured Excel lessons
- Why BrainFuel section

### Excel Hub (`excel/index.html`)
- Lists all 4 Excel lessons with difficulty badges
- Sidebar with quick start guide

### Excel Lessons
| File | Topic | Level | Read time |
|------|-------|-------|-----------|
| `basics.html` | Excel Basics for Beginners | Beginner | 8 min |
| `formulas.html` | Essential Excel Formulas | Beginner | 12 min |
| `charts.html` | Creating Charts in Excel | Intermediate | 10 min |
| `pivot-tables.html` | Excel Pivot Tables Guide | Intermediate | 11 min |

### Supporting Pages
| File | Purpose |
|------|---------|
| `about.html` | About BrainFuel |
| `contact.html` | Contact form (Formspree) |
| `privacy-policy.html` | Privacy policy covering cookies and AdSense |

---

## Features

- **SEO optimised** — semantic HTML, meta tags, Open Graph, Schema.org JSON-LD, canonical URLs, sitemap.xml, robots.txt
- **Google Analytics 4** — tracking on all pages
- **AdSense ready** — privacy policy, about and contact pages in place
- **Responsive** — mobile-first design, works on all screen sizes
- **Animated hero** — gradient drift, floating shapes, animated counters, pulse dot badge
- **Topics ticker** — scrolling strip showing all planned subjects
- **Scroll reveal** — cards and section headers animate in on scroll
- **Search modal** — searchable across all pages (Ctrl+K)
- **Reading progress bar** — on all article pages
- **Table of contents** — sticky sidebar with active highlight on lesson pages
- **Back to top button** — appears on scroll

---

## Design System (`css/style.css`)

### Colours
| Variable | Value | Use |
|----------|-------|-----|
| `--primary` | `#1d4ed8` | Main blue |
| `--primary-light` | `#3b82f6` | Hover states |
| `--accent` | `#f97316` | Orange highlights |
| `--text` | `#111827` | Body text |
| `--bg` | `#ffffff` | Page background |

### Typography
- **Headings:** Poppins (Google Fonts)
- **Body:** Inter (Google Fonts)

### Key Dimensions
- Nav height: `96px` desktop / `88px` mobile
- Container max-width: `1200px`
- Content max-width: `800px`

---

## SEO Setup

- `sitemap.xml` — lists all pages, submitted to Google Search Console
- `robots.txt` — allows all crawlers, points to sitemap
- Each page has unique `<title>`, `<meta description>`, Open Graph tags
- Article pages have Schema.org `Article` + `BreadcrumbList` JSON-LD
- Homepage has Schema.org `WebSite` + `SearchAction` JSON-LD
- All images have descriptive `alt` attributes

---

## How to Deploy Updates

1. Make changes to the files locally
2. Open terminal in the project folder
3. Run:
```
git add .
git commit -m "Describe your change here"
git push
```
4. GitHub Pages automatically rebuilds — live within 1–2 minutes

---

## Planned Topics (Coming Soon)

- MS Word
- Google Sheets
- Programming
- Mathematics
- Design Tools
- Science
- Finance
- Web Skills

---

## Contact

**GitHub:** [github.com/janakagunasekara12](https://github.com/janakagunasekara12)
