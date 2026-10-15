# Sri Aiswarya Lakshmi Green Energies LLP — Corporate Website

> **Clean Energy. Greener Tomorrow.**  
> Transforming Napier grass and agricultural biomass into high-efficiency renewable biogas, clean industrial fuel, and organic biofertilizers in India.

---

## 🌿 Project Overview

This repository contains the complete corporate website for **Sri Aiswarya Lakshmi Green Energies LLP**, an Indian renewable-energy enterprise converting Napier grass (*Pennisetum purpureum*) and agricultural biomass into clean biogas and organic bio-digestate.

### Core Business Narrative
```
Napier Grass Cultivation ➔ Biomass Preparation ➔ Anaerobic Digestion ➔ Biogas Production ➔ Clean Industrial Energy & Biofertilizer
```

---

## 🚀 Key Features

1. **6 Comprehensive Pages**:
   - **Home (`/`)**: Wide panoramic hero with authentic biogas plant and Napier grass plantation imagery, "From Grass to Gas" 4-step process cards, industrial technology highlights, renewable capabilities, sustainability bio-loop, and business enquiry CTA.
   - **About Us (`/about`)**: Enterprise profile, mission, vision, core values, non-food agro-biomass focus, and verified LLP corporate governance.
   - **Our Process (`/process`)**: Interactive 5-step process switcher and detailed timeline covering sourcing, chopping, anaerobic digestion stages (hydrolysis to methanogenesis), gas scrubbing, and nutrient recycling.
   - **Plant & Technology (`/plant-technology`)**: Continuous Stirred-Tank Reactors (CSTR), automated feeding shredders, SS316 gas scrubbers, SCADA telemetry, ATEX safety zoning, and interactive photo gallery with modal lightbox.
   - **Products & Applications (`/products`)**: Configurable product cards for industrial scrubbed biogas, fermented bio-digestate, compressed biogas (CBG), and combined heat & power (CHP), including a fossil fuel comparison table.
   - **Contact Us (`/contact`)**: Production-ready enquiry form with client and server validation, enquiry category routing, demonstration feedback banner, direct WhatsApp link, corporate office address, and interactive FAQ.

2. **Brand & Visual Identity**:
   - Official SVG brand logo with circular gold-and-green border, golden sun, and green Napier leaves.
   - Vector favicon (`/favicon.svg`) and transparent logo assets (`/logo.svg`).
   - Official brand palette: Primary Green (`#087A35`), Deep Forest Green (`#14532D`), Dark Green Background (`#0B2E1B`), Warm Gold (`#E9B83F`), and Soft Green (`#F3F8F4`).
   - Typography: **Manrope** for bold industrial headings and **Inter** for legible body text.

3. **Strict Compliance & Truth in Information**:
   - Zero invented plant capacities, false certifications, or fabricated production statistics.
   - Clear distinction between active outputs (scrubbed biogas, bio-digestate) and potential future pathways (CBG, CHP).
   - Illustrative photography clearly identified with editorial badges.

4. **Fully Responsive Across All Breakpoints**:
   - Verified across **1920px**, **1440px**, **1280px**, **1024px**, **768px**, **600px**, **430px**, **375px**, and minimum **320px** without horizontal scrollbar overflow.
   - Touch-friendly mobile drawer menu with smooth open/close transitions and keyboard accessibility.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite 8, React Router 7
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with custom tokens (`/src/styles/tokens.css`, `global.css`, `components.css`, `responsive.css`)
- **Backend API**: Node.js & Express (`/server/server.js`) with input validation, honeypot spam protection, and CORS
- **Linter**: Oxlint (0 warnings, 0 errors)
- **SEO & Metadata**: Semantic HTML5, dynamic `<SEOHead />`, Open Graph tags, JSON-LD Schema Organization, `robots.txt`, and XML sitemap (`/sitemap.xml`)

---

## 📂 Project Directory Structure

```text
biogas/
├── public/
│   ├── images/
│   │   ├── hero_biogas_plant.jpg       # Biogas plant & Napier fields hero
│   │   ├── napier_grass_farming.jpg    # Agricultural harvesting & field team
│   │   └── biogas_plant_technology.jpg # SS316 scrubber & digester dome
│   ├── favicon.svg                     # Official circular gold-green emblem
│   ├── logo.svg                        # Official full brand logo vector
│   ├── robots.txt                      # Search engine crawler configuration
│   └── sitemap.xml                     # XML sitemap for all 6 pages
├── server/
│   └── server.js                       # Express lead submission endpoint & validation
├── src/
│   ├── components/
│   │   ├── Footer.jsx                  # Corporate footer with quick links & info
│   │   ├── Header.jsx                  # Sticky header, top bar & mobile drawer
│   │   ├── ImageModal.jsx              # Lightbox modal for gallery photos
│   │   ├── Logo.jsx                    # Official brand emblem & typography
│   │   ├── ScrollToTop.jsx             # Auto-scroll on route transition
│   │   ├── SectionTitle.jsx            # Reusable section heading with badges
│   │   └── SEOHead.jsx                 # Dynamic page title & meta descriptions
│   ├── pages/
│   │   ├── About.jsx                   # Company profile, mission & governance
│   │   ├── Contact.jsx                 # Form, WhatsApp, address & FAQs
│   │   ├── Home.jsx                    # Homepage narrative & value chain
│   │   ├── PlantTechnology.jsx         # Technical showcase & photo gallery
│   │   ├── Process.jsx                 # 5-step anaerobic digestion walkthrough
│   │   └── Products.jsx                # Biogas & biofertilizer offerings
│   ├── styles/
│   │   ├── components.css              # Cards, forms, modals & hero styles
│   │   ├── global.css                  # CSS reset, typography & buttons
│   │   ├── responsive.css              # Breakpoint media queries (320px–1920px)
│   │   └── tokens.css                  # Color palette, spacing & radii tokens
│   ├── App.jsx                         # Main router configuration
│   ├── index.css                       # Root stylesheet bundle
│   └── main.jsx                        # React root entry point
├── .env.example                        # Server environment variable template
├── index.html                          # HTML5 shell, fonts & JSON-LD schema
├── package.json                        # Scripts & dependencies
└── vite.config.js                      # Vite build configuration
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended, tested on v24)
- npm (v9 or higher)

### Installation
Clone or navigate to the repository and install dependencies:
```bash
npm install
```

### Running Locally

#### Option 1: Frontend Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`

#### Option 2: Backend API Server
```bash
npm run server
```
Runs the Express lead processing server on `http://localhost:5000/`

---

## 📦 Production Build & Validation

To test and compile the production bundle:
```bash
# 1. Run linter (must pass with 0 warnings)
npm run lint

# 2. Compile optimized production build
npm run build

# 3. Preview production build locally
npm run preview
```

---

## 🌐 Deployment Guidelines

### Static Frontend (Vercel, Netlify, Cloudflare Pages, AWS S3)
The output of `npm run build` is placed in the `dist/` directory. Deploy this directory directly to your static hosting provider.
- Configure client-side routing rewrites so all routes fallback to `index.html`.
  - For Vercel: add a `vercel.json` with `{"routes": [{"handle": "filesystem"}, {"src": "/.*", "dest": "/index.html"}]}`.
  - For Netlify: add a `_redirects` file with `/*  /index.html  200`.

### Backend API Server (Node.js / Docker)
Deploy `/server/server.js` to any Node-compatible environment (Heroku, AWS Elastic Beanstalk, DigitalOcean App Platform, or Docker).
- Copy `.env.example` to `.env` and set your production environment variables (`PORT`, `SMTP_HOST`, `NOTIFICATION_EMAIL`).

---

## ⚖️ Legal & Copyright

&copy; 2026 Sri Aiswarya Lakshmi Green Energies LLP. All rights reserved.  
*Clean Energy. Greener Tomorrow.*
