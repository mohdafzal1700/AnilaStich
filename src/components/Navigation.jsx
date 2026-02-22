import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'

const FONTS_ID = 'anila-fonts'
if (typeof document !== 'undefined' && !document.getElementById(FONTS_ID)) {
  const link = document.createElement('link')
  link.id = FONTS_ID
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap'
  document.head.appendChild(link)
}

const C = { bg: '#f7f4ef', ink: '#111110', green: '#1a3d2b', stone: '#78716c', border: 'rgba(17,17,16,0.09)' }
const F = { head: "'Plus Jakarta Sans', sans-serif", body: "'Inter', sans-serif" }

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => setOpen(false), [pathname])

  const isActive = p => p === '/' ? pathname === '/' : pathname.startsWith(p)
  const NAV = [{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Contact', path: '/contact' }]

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, fontFamily: F.body, background: C.bg, borderBottom: `1px solid ${scrolled ? C.border : 'transparent'}`, boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.25s' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>

        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
              <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: F.head, fontSize: 14, fontWeight: 800, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Anila Stitching</div>
            <div style={{ fontFamily: F.body, fontSize: 9, fontWeight: 600, color: C.stone, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 2 }}>Center · Trivandrum</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="nav-d">
          {NAV.map(n => (
            <Link key={n.path} to={n.path} style={{ textDecoration: 'none', padding: '6px 14px', borderRadius: 7, fontSize: 14, fontWeight: isActive(n.path) ? 600 : 400, color: isActive(n.path) ? C.ink : C.stone, background: isActive(n.path) ? 'rgba(17,17,16,0.07)' : 'transparent', transition: 'all 0.15s' }}
              onMouseEnter={e => { if (!isActive(n.path)) { e.currentTarget.style.color = C.ink; e.currentTarget.style.background = 'rgba(17,17,16,0.04)' } }}
              onMouseLeave={e => { if (!isActive(n.path)) { e.currentTarget.style.color = C.stone; e.currentTarget.style.background = 'transparent' } }}
            >{n.label}</Link>
          ))}
          <div style={{ width: 1, height: 18, background: C.border, margin: '0 10px' }} />
          <a href="tel:+919XXXXXXXXX" style={{ textDecoration: 'none' }}>
            <button style={{ height: 36, padding: '0 18px', background: C.green, color: '#fff', border: 'none', borderRadius: 7, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            ><Phone size={13} /> Call Now</button>
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} className="nav-m" style={{ display: 'none', background: 'transparent', border: `1px solid ${C.border}`, borderRadius: 7, padding: '8px 9px', cursor: 'pointer', flexDirection: 'column', gap: 4.5 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: 18, height: 1.5, background: C.ink, borderRadius: 1, transition: 'transform 0.22s, opacity 0.22s', transform: open ? (i===0?'translateY(6px) rotate(45deg)':i===2?'translateY(-6px) rotate(-45deg)':'none') : 'none', opacity: open&&i===1?0:1 }} />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="nav-drawer" style={{ maxHeight: open ? 260 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
        <div style={{ padding: '6px 32px 20px', borderTop: `1px solid ${C.border}` }}>
          {NAV.map(n => (
            <Link key={n.path} to={n.path} style={{ display: 'block', padding: '12px 0', textDecoration: 'none', fontSize: 15, fontWeight: isActive(n.path) ? 600 : 400, color: isActive(n.path) ? C.ink : C.stone, borderBottom: `1px solid ${C.border}` }}>
              {n.label}
            </Link>
          ))}
          <a href="tel:+919XXXXXXXXX" style={{ textDecoration: 'none', display: 'block', marginTop: 16 }}>
            <button style={{ width: '100%', height: 44, background: C.green, color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: F.body, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <Phone size={15} /> Call Now
            </button>
          </a>
        </div>
      </div>

      <style>{`
        @media(max-width:767px){.nav-d{display:none!important}.nav-m{display:flex!important}}
        @media(min-width:768px){.nav-drawer{display:none!important}}
      `}</style>
    </nav>
  )
}