# Portfolio 2026

Personal professional portfolio built with React and Vite, showcasing my projects and web development skills.

[portfolio.jeremybourqui.ch]

## Technologies

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **React Router** - Navigation and routing (SPA)
- **Embla Carousel** - Image carousel
- **CSS Modules** - Component-scoped styles

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header/       # Main navigation
│   ├── Hero/         # Landing section
│   ├── Projects/     # Project grid
│   ├── Skills/       # Technical skills
│   ├── Contact/      # Contact section
│   ├── ContactForm/  # Contact form
│   ├── Footer/       # Page footer
│   ├── ProjectCard/  # Individual project card
│   ├── EmblaCarousel/ # Image carousel
│   ├── BlobDivider/  # SVG visual divider
│   └── SvgFilters/   # SVG filters (dither, etc.)
├── pages/            # Application pages
│   ├── Home/         # Home page
│   └── ProjectDetail/ # Project detail page
├── data/             # Project data
├── assets/           # Images and resources
└── styles/           # Global styles and CSS variables
```

## Installation

```bash
npm install
```

## Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Linting
npm run lint
```
