# Quick Start Guide

## What You Have

A fully converted **React + Vite** website for Anila Stitching Center with:
- ✅ 3 responsive pages (Home, Services, Contact)
- ✅ GSAP scroll animations throughout
- ✅ Mobile-first design with Tailwind CSS
- ✅ React Router for client-side navigation
- ✅ Smooth, professional UI

## Installation (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

That's it! The site is now running.

## Project Files

### Key Files You'll Interact With

| File | Purpose |
|------|---------|
| `src/pages/Home.jsx` | Main landing page |
| `src/pages/Services.jsx` | Services listing |
| `src/pages/Contact.jsx` | Contact information |
| `src/components/Navigation.jsx` | Header/navigation bar |
| `src/components/Footer.jsx` | Footer |
| `src/index.css` | Global styles |
| `vite.config.js` | Vite configuration |
| `tailwind.config.js` | Tailwind CSS config |

### Configuration Files (Usually Don't Touch)

- `.eslintrc.cjs` - Linting rules
- `.gitignore` - Git ignore patterns
- `package.json` - Dependencies

## Common Tasks

### Change Business Info
Edit these files to update phone, address, hours:
- `src/components/Navigation.jsx`
- `src/components/Footer.jsx`
- `src/pages/Home.jsx`
- `src/pages/Contact.jsx`

### Add a New Page
1. Create `src/pages/NewPage.jsx`
2. Import in `src/App.jsx`
3. Add route: `<Route path="/newpage" element={<NewPage />} />`
4. Add link in Navigation

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary: oklch(0.45 0.15 310);  /* Purple */
  --secondary: oklch(0.92 0.08 300);  /* Light */
  --accent: oklch(0.55 0.15 300);     /* Dark Purple */
}
```

### Modify Styling
Use Tailwind classes in JSX:
```jsx
<div className="bg-primary text-white p-4 rounded-lg">
  Your content
</div>
```

## Development Commands

```bash
# Start dev server (instant HMR)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## Deployment

### To Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repo
5. Vercel detects Vite automatically
6. Build settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
7. Click Deploy ✅

### To Other Hosts

1. Run `npm run build`
2. Upload `dist/` folder to your host
3. Set up server to serve `dist/index.html` for all routes

## Folder Structure

```
src/
├── pages/           # Page components
├── components/      # Reusable components
├── App.jsx         # Main routing
├── main.jsx        # Entry point
└── index.css       # Styles
```

## Technologies

- **React 18** - UI library
- **Vite** - Fast build tool
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **Lucide Icons** - Icons

## Important Notes

### From Next.js to Vite

**Changed:**
- No more `next/link` → use `react-router-dom` Link
- No server-side rendering
- All components are client components
- Metadata in `index.html` not `layout.tsx`

**Stayed the Same:**
- All Tailwind CSS styling
- GSAP animations
- Component structure
- Page layouts

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### Styles Not Loading
- Clear browser cache (Ctrl+F5)
- Restart dev server
- Check `src/index.css` is imported in `src/main.jsx`

### Pages Not Found
- Check route path in `App.jsx`
- Ensure component is imported
- Check Navigation link `to` prop matches route

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

## Next Steps

1. **Customize**: Update business info, colors, content
2. **Test**: Click through all pages, test mobile view
3. **Build**: Run `npm run build`
4. **Deploy**: Push to Vercel or your host
5. **Monitor**: Check console for any errors

## File Locations to Edit

Update these with your actual information:

- **Phone**: Search for `+919XXXXXXXXX` - replace with real number
- **Address**: "Near Technopark, Trivandrum, Kerala"
- **Hours**: "Mon - Sat: 10 AM - 7 PM"
- **Maps Link**: Google Maps search query
- **Logo**: Add image to public folder, import in Navigation

## Support

For issues:
1. Check the `MIGRATION_GUIDE.md` for detailed conversion info
2. Check `PROJECT_STRUCTURE.md` for file explanations
3. Review React Router docs: [reactrouter.com](https://reactrouter.com)
4. Check Tailwind docs: [tailwindcss.com](https://tailwindcss.com)

## Performance Tips

1. Vite is **much faster** than Next.js dev server
2. HMR (Hot Module Replacement) updates instantly
3. Build size is smaller (~100KB vs 500KB+ for Next.js)
4. Perfect for a static site like this

---

**Ready to go!** Your React Vite site is fully functional. Enjoy the fast development experience! 🚀
