# Migration from Next.js to React Vite

This document outlines the conversion from a Next.js project to React Vite with JSX.

## What Changed

### Framework
- **From:** Next.js 16 with Server Components (App Router)
- **To:** React 18 + Vite with Client Components (React Router)

### File Structure
```
Before (Next.js):
app/
├── layout.tsx
├── page.tsx
├── services/page.tsx
└── contact/page.tsx
components/
├── ui/... (shadcn components)
├── navigation.tsx
└── footer.tsx

After (Vite + React):
src/
├── main.jsx
├── App.jsx
├── index.css
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   └── Contact.jsx
├── components/
│   ├── Navigation.jsx
│   └── Footer.jsx
```

### Key Conversions

#### 1. Metadata & Head Tags
**Next.js:**
```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Description',
}
```

**Vite/React:**
Update in `index.html` or use `react-helmet` library for dynamic meta tags.

#### 2. Routing
**Next.js:**
```typescript
<Link href="/services">Services</Link>
```

**Vite/React:**
```jsx
import { Link } from 'react-router-dom'
<Link to="/services">Services</Link>
```

#### 3. Server vs Client Components
**Next.js:**
```typescript
export default function Page() { // Server Component by default
  return <div>Content</div>
}
```

**Vite/React:**
```jsx
export default function Page() { // Client Component by default
  return <div>Content</div>
}

// Or with explicit directive:
'use client'
```

#### 4. UI Components
Removed shadcn/ui dependency. Using basic HTML buttons and Tailwind CSS instead.

#### 5. GSAP Animations
Kept the same GSAP implementation - no changes needed!

### Dependencies

**Removed:**
- `next` - Server framework
- All shadcn/ui components
- `@radix-ui/*` - Radix UI primitives
- `react-hook-form` - Form handling
- `@vercel/analytics` - Vercel-specific
- Other Next.js-specific packages

**Added:**
- `react-router-dom` - Client-side routing
- `@vitejs/plugin-react` - Vite React plugin
- `vite` - Build tool
- `@tailwindcss/vite` - Tailwind CSS integration

### Development Workflow

**Before:**
```bash
npm run dev          # Runs Next.js dev server
npm run build        # Next.js build
```

**After:**
```bash
npm run dev          # Runs Vite dev server (faster!)
npm run build        # Vite build
npm run preview      # Preview production build locally
```

### Performance Improvements

1. **Vite Dev Server** - Instant HMR (Hot Module Replacement)
2. **Smaller Bundle** - No Next.js overhead
3. **Faster Build Times** - Vite's optimized bundling
4. **Client-Side Routing** - No server round-trips for navigation

### Styling Notes

- Kept all Tailwind CSS utilities
- Design tokens converted from CSS variables
- No shadcn/ui components - using plain Tailwind classes
- All custom styling is in `src/index.css`

### Animation Changes

No changes! GSAP animations work the same:
- Scroll triggers with ScrollTrigger plugin
- All page transitions remain identical
- useRef and useEffect patterns are unchanged

### Browser Support

Same as before - all modern browsers supported.

### Deployment

For Vercel:
1. Update build command: `npm run build`
2. Output directory: `dist`
3. Environment variables: Same process as before

### Troubleshooting

**Issue:** Import paths not working
**Solution:** Check `vite.config.js` alias configuration

**Issue:** Tailwind styles not applying
**Solution:** Ensure `src/index.css` is imported in `src/main.jsx`

**Issue:** React Router not working
**Solution:** Ensure `<Router>` wraps all routes in `App.jsx`

**Issue:** Build errors
**Solution:** Clear `node_modules` and `dist`, then `npm install && npm run build`

### Next Steps

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Test all pages and animations
4. Build for production: `npm run build`
5. Deploy to Vercel with dist folder

