# R DIMAS ARN — Graphic Designer & Visual Creative Portfolio

A production-ready, high-performance creative portfolio website designed with Swiss editorial discipline, architectural typography, and responsive modern CSS.

Built strictly according to the reference design with a restrained palette of **Off-White (`#F7F6F4`) + Deep Carbon Black (`#111111`) + Architectural Red (`#D20F1B`)**.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📂 Project Architecture

```
d:/PortofolioWeb/
├── index.html                  # HTML5 entry with Inter & JetBrains Mono
├── package.json                # React 18, Vite 6, Lucide React
├── vite.config.js              # Vite React configuration
│
├── public/
│   ├── favicon.svg             # Minimal Swiss favicon
│   └── images/                 # Project placeholder SVGs (1600x1200 / 4:3)
│
├── src/
│   ├── main.jsx                # React root mount
│   ├── App.jsx                 # Application layout, scroll-spy, modal state
│   │
│   ├── data/                   # Centralized data files (Editable)
│   │   ├── siteConfig.js       # Personal info, links, email, tickers
│   │   ├── projects.js         # Scalable project database (Design & Video)
│   │   └── experience.js       # Career timeline, identity cards, skills
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Sticky nav, active spy, mobile drawer
│   │   ├── Hero.jsx            # Hero opening, big typography, dual CTAs
│   │   ├── InfoBar.jsx         # 4-column metrics overview
│   │   ├── About.jsx           # Bio narrative, identity cards, philosophy
│   │   ├── Experience.jsx      # Track record & involvement timeline
│   │   ├── Skills.jsx          # Competency matrix badges
│   │   ├── Portfolio.jsx       # Category filters, CSS Grid, Load More
│   │   ├── ProjectCard.jsx     # 4:3 rectangular project cards
│   │   ├── ProjectModal.jsx    # Accessible lightbox with video/image
│   │   ├── Contact.jsx         # Full-bleed red CTA closing section
│   │   └── Footer.jsx          # Footer, Back-to-top, archival bottom strip
│   │
│   └── styles/
│       ├── variables.css       # Design tokens & color system
│       ├── global.css          # Reset, typography clamp, button styles
│       ├── navbar.css          # Navigation, sub-bar, mobile menu
│       ├── hero.css            # Hero opening styles
│       ├── infobar.css         # Metrics 4-column layout
│       ├── about.css           # Editorial bio & timeline
│       ├── portfolio.css       # Responsive 3/2/1 column CSS Grid
│       ├── modal.css           # Accessible lightbox modal
│       ├── contact.css         # Red closing section
│       └── footer.css          # Footer & archival strip
│
└── test-site.js                # Automated verification test suite
```

---

## 🛠️ How to Customize Your Content

### 1. Update Personal & Contact Info
Edit `src/data/siteConfig.js`:
```javascript
export const siteConfig = {
  name: "R DIMAS ARN",
  fullName: "R Dimas Agung Ryanta Novanda",
  email: "your-real-email@example.com",     // Used in GET IN TOUCH buttons
  instagram: "https://instagram.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourprofile",
  // ...
};
```

### 2. Adding / Modifying Portfolio Projects
Edit `src/data/projects.js`:
To add a new project, simply append an object to the `projects` array:
```javascript
{
  id: 13,
  number: "13",
  title: "Your New Project Title",
  category: "design", // "design" or "video"
  type: "BRAND IDENTITY / PACKAGING",
  year: "2026",
  image: "/images/your-project-image.jpg", // Place image in public/images/
  format: "FORMAT · PRINT + DIGITAL",
  description: "Short 2-line summary for the card view.",
  fullDescription: "Detailed case study description displayed in modal.",
  tools: ["FIGMA", "ILLUSTRATOR"],
  client: "Client Name",
  deliverables: "Brand System, Guidelines, Packaging"
}
```
> **Notice:** No layout or CSS changes are required! The CSS Grid automatically adapts to 13, 20, 50+ projects, and the "Load More" pagination calculates remaining counts dynamically.

### 3. Video Projects
For video items, set `category: "video"`. You can supply:
- `videoUrl: "https://www.youtube.com/embed/..."` or Vimeo embed / `.mp4` file.
- If `videoUrl` is empty (`""`), the website gracefully displays the high-resolution poster with specs, without breaking or displaying an empty video player.

---

## 📐 Responsive Breakpoints Supported
- **Large Desktop**: 1920px+ (fluid container up to 1440px)
- **Standard Desktop**: 1440px / 1280px (3-column portfolio grid)
- **Tablet Landscape & Portrait**: 1024px / 768px (2-column portfolio grid)
- **Mobile**: 430px / 414px / 390px / 375px / 360px (1-column full width, touch-friendly hamburger drawer, zero horizontal overflow)
