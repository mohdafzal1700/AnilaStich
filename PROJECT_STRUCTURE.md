# Project Structure - React Vite

## Directory Layout

```
anila-stitching-center/
├── public/                 # Static assets (if needed)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx   # Header with mobile menu
│   │   └── Footer.jsx       # Footer with contact info
│   ├── pages/
│   │   ├── Home.jsx         # Landing page with hero + benefits
│   │   ├── Services.jsx     # Services listing page
│   │   └── Contact.jsx      # Contact information page
│   ├── App.jsx              # Main app with React Router
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore              # Git ignore rules
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
├── MIGRATION_GUIDE.md      # Next.js to Vite migration guide
└── PROJECT_STRUCTURE.md    # This file
```

## File Descriptions

### Core Files

#### `index.html`
- HTML entry point
- Links to Vite app bootstrap
- Meta tags for viewport and charset

#### `vite.config.js`
- Vite build configuration
- React plugin setup
- Path aliases for `@/` imports
- Dev server settings

#### `tailwind.config.js`
- Tailwind CSS configuration
- Content globs for template files
- Custom color theme with CSS variables
- Border radius utilities

#### `package.json`
- Project metadata
- Scripts: dev, build, preview, lint
- Dependencies: React, React Router, GSAP, Lucide Icons
- Dev dependencies: Vite, Tailwind, ESLint, TypeScript types

### Source Files (`src/`)

#### `main.jsx`
- React 18 entry point
- Renders App component into #root
- Imports global styles

#### `App.jsx`
- BrowserRouter setup
- Route definitions (/, /services, /contact)
- Main routing component

#### `index.css`
- Global Tailwind CSS import
- Design tokens (CSS variables)
- Custom font loading
- Light and dark mode colors

### Components (`src/components/`)

#### `Navigation.jsx`
- Sticky header navigation
- Logo with branding
- Desktop navigation links
- Mobile hamburger menu
- Active link highlighting with React Router

#### `Footer.jsx`
- Business information section
- Quick links
- Contact details
- Social links (if needed)
- Copyright notice

### Pages (`src/pages/`)

#### `Home.jsx` (274 lines)
Features:
- Hero section with headline and CTA
- Services overview with bullet points
- Benefits section (4 cards with icons)
- Quick info cards (hours, contact, location)
- CTA section
- GSAP animations on load and scroll
- Responsive design

#### `Services.jsx` (182 lines)
Features:
- Service grid (2 columns on desktop)
- "Why Choose Us" section with checkmarks
- Service pricing note
- CTA button
- Scroll-triggered GSAP animations

#### `Contact.jsx` (212 lines)
Features:
- Contact information section
- Why contact us cards
- Google Maps placeholder
- Contact CTA
- Scroll-triggered animations

### Configuration Files

#### `.eslintrc.cjs`
- ESLint rules for React and Hooks
- React Fast Refresh support
- Browser environment

#### `.gitignore`
- Node modules
- Build output (dist/)
- Environment files
- IDE directories (.vscode, .idea)
- OS files (.DS_Store)

#### `README.md`
- Project overview
- Installation instructions
- Development commands
- Technologies used
- Browser support

#### `MIGRATION_GUIDE.md`
- Step-by-step conversion notes
- Before/after code examples
- Dependency changes
- Performance improvements
- Troubleshooting guide

## Key Features

### Animations
- GSAP with ScrollTrigger plugin
- Staggered card animations
- Fade-in effects on page load
- Smooth scroll behavior

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints (md, lg)
- Hamburger menu on mobile
- Optimized images and icons

### Styling System
- Design tokens for colors
- Consistent spacing scale
- Custom Tailwind theme
- Light/dark mode support (CSS variables ready)

### Routing
- React Router v6
- Client-side navigation
- Active link highlighting
- Clean URL structure

### Performance
- Vite's fast HMR
- Code splitting by route
- Optimized build output
- Tree-shaking enabled

## Development Tips

### Adding New Pages
1. Create `src/pages/NewPage.jsx`
2. Import in `App.jsx`
3. Add route to `<Routes>`
4. Link from Navigation component

### Adding Components
1. Create file in `src/components/`
2. Export default function
3. Import where needed
4. Use Tailwind classes for styling

### Modifying Styles
1. Update `src/index.css` for global styles
2. Add inline Tailwind classes for component-specific
3. Design tokens are CSS variables in `:root`

### GSAP Animations
1. Import gsap and ScrollTrigger
2. Register plugin: `gsap.registerPlugin(ScrollTrigger)`
3. Use useRef for target elements
4. useEffect hook for animation setup
5. Cleanup triggers on unmount

## Build & Deploy

### Local Development
```bash
npm install
npm run dev        # Start dev server at localhost:5173
```

### Production Build
```bash
npm run build      # Create optimized build in dist/
npm run preview    # Test production build locally
```

### Deploy to Vercel
```bash
# Connect GitHub repo to Vercel
# Build command: npm run build
# Output directory: dist
# Framework: Vite
```

## Customization Checklist

- [ ] Update phone number in components
- [ ] Update address details
- [ ] Update business hours
- [ ] Add Google Maps embed or link
- [ ] Update company name/branding
- [ ] Customize color scheme
- [ ] Add logo image
- [ ] Add meta tags to index.html
- [ ] Add favicon
- [ ] Set up form handling (if needed)

