# Setup Instructions - React Vite Project

## Prerequisites

Before starting, make sure you have:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **pnpm** (comes with Node.js)
- **Git** (optional, for version control)
- A code editor like VS Code

### Check Node Installation

```bash
node --version    # Should be v16+
npm --version     # Should be v8+
```

## Step 1: Install Dependencies (2 minutes)

Navigate to project directory and install all required packages:

```bash
npm install
```

This will:
- Create `node_modules/` folder
- Install React, Vite, GSAP, React Router, etc.
- Generate `package-lock.json`

**If using pnpm:**
```bash
pnpm install
```

## Step 2: Start Development Server (1 minute)

```bash
npm run dev
```

You should see:
```
VITE v5.0.8 ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Press h to show help
```

Open your browser to `http://localhost:5173/`

## Step 3: Verify Installation

Check that you can see:
- ✅ Navigation bar with logo
- ✅ Hero section
- ✅ Services cards
- ✅ Contact information
- ✅ Footer
- ✅ Smooth animations when scrolling

Test navigation:
- ✅ Click "Services" - should go to services page
- ✅ Click "Contact" - should go to contact page
- ✅ Click "Home" - should return to home

## Making Changes

The dev server watches for changes automatically:

1. Open `src/pages/Home.jsx`
2. Change some text
3. Save file
4. Browser updates instantly (HMR)

## Common Development Tasks

### View Mobile Design

1. Open DevTools (F12 or Cmd+Option+I)
2. Click device toolbar icon
3. Select mobile device (iPhone 12, etc.)
4. Refresh page
5. Test responsive design

### Debug Console

1. Open DevTools (F12)
2. Go to "Console" tab
3. Any errors will appear here
4. Use `console.log()` in code for debugging

### Disable Browser Cache

In DevTools → Settings → Disable Cache (while DevTools open)

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates:
- Optimized files in `dist/` folder
- Minified JavaScript and CSS
- Production-ready output

Preview the build locally:
```bash
npm run preview
```

## Environment Variables

Create `.env.local` file for sensitive data:

```bash
# .env.local
VITE_API_URL=https://api.example.com
VITE_PUBLIC_KEY=your_public_key
```

Access in code:
```javascript
console.log(import.meta.env.VITE_API_URL)
```

**Note:** Variables must start with `VITE_` prefix

## Project Structure After Setup

```
node_modules/     ← Downloaded packages (ignore in git)
src/
├── pages/        ← Page components
├── components/   ← Reusable components
├── App.jsx       ← Main app with routes
├── main.jsx      ← Entry point
└── index.css     ← Global styles
dist/             ← Build output (created after npm run build)
.env.local        ← Environment variables (create if needed)
package.json      ← Project metadata
vite.config.js    ← Vite configuration
```

## Troubleshooting Setup

### Issue: `npm: command not found`
**Solution:** Node.js not installed. Download from [nodejs.org](https://nodejs.org/)

### Issue: Port 5173 already in use
**Solution:** Use different port
```bash
npm run dev -- --port 3000
```

### Issue: Dependencies fail to install
**Solution:** Clear cache and retry
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: `Cannot find module 'react'`
**Solution:** Dependencies not installed
```bash
npm install
```

### Issue: Styles not showing
**Solution:** Restart dev server
```bash
# Ctrl+C to stop
npm run dev
```

### Issue: Browser stuck on old version
**Solution:** Hard refresh
- Windows: Ctrl+Shift+Delete
- Mac: Cmd+Shift+Delete
- Or disable cache in DevTools

## File Permissions (Mac/Linux)

If you get permission errors:

```bash
# Make scripts executable
chmod +x node_modules/.bin/*
```

## Using Package Manager

### npm (Default)
```bash
npm install      # Install packages
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Run built app
```

### pnpm (Faster alternative)
```bash
pnpm install     # Install packages
pnpm dev         # Start dev server
pnpm build       # Build for production
```

### Yarn (Another alternative)
```bash
yarn install     # Install packages
yarn dev         # Start dev server
yarn build       # Build for production
```

## Code Editor Setup

### VS Code (Recommended)

Recommended extensions:
- **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
- **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
- **Prettier** - esbenp.prettier-vscode
- **ESLint** - dbaeumer.vscode-eslint

### Useful VS Code Shortcuts

- `Ctrl+K Ctrl+C` - Comment line
- `Ctrl+/` - Toggle comment
- `Alt+Up/Down` - Move line
- `Ctrl+D` - Select word
- `Ctrl+Shift+L` - Select all occurrences
- `Ctrl+H` - Find and replace

## Git Setup (Optional)

Initialize git repository:

```bash
git init
git add .
git commit -m "Initial commit: React Vite project setup"
```

Add remote (for GitHub):
```bash
git remote add origin https://github.com/yourusername/repo.git
git push -u origin main
```

## Next: Customization

After setup, customize:

1. **Contact Info**
   - Phone number
   - Address
   - Business hours
   - Google Maps link

2. **Branding**
   - Logo image
   - Colors in CSS variables
   - Company name

3. **Content**
   - Service descriptions
   - Hero text
   - Contact details

See `QUICK_START.md` for specific file locations.

## Performance Notes

- First load may take 5-10 seconds (Vite setup)
- Subsequent changes update instantly (HMR)
- Build takes 10-30 seconds
- Production build is ~50-100KB

## Security Notes

- Never commit `.env.local` to git
- Add `.env.local` to `.gitignore`
- Never expose API keys in code
- Use environment variables for sensitive data

## Getting Help

1. **Documentation**
   - Vite: [vitejs.dev](https://vitejs.dev/)
   - React: [react.dev](https://react.dev/)
   - React Router: [reactrouter.com](https://reactrouter.com/)
   - Tailwind: [tailwindcss.com](https://tailwindcss.com/)

2. **Troubleshooting Guides**
   - See `MIGRATION_GUIDE.md` for conversion issues
   - See `PROJECT_STRUCTURE.md` for file organization
   - See `QUICK_START.md` for common tasks

3. **Console Messages**
   - Check browser console (F12) for errors
   - Read error messages carefully - they're helpful

## You're All Set! 🎉

Your development environment is ready:
- ✅ Node.js installed
- ✅ Dependencies installed
- ✅ Dev server running
- ✅ Hot module replacement working
- ✅ Ready to code!

Start making changes and see them update instantly. Happy coding! 🚀
