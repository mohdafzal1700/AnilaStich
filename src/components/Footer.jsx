import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'

const C = {
  bg: '#f7f4ef', ink: '#111110', green: '#1a3d2b',
  stone: '#78716c', stoneLt: '#a9a199', border: 'rgba(17,17,16,0.08)'
}
const F = { head: "'Plus Jakarta Sans', sans-serif", body: "'Inter', sans-serif" }

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, fontFamily: F.body }}>
      <div className="anila-wrap" style={{ paddingTop: 52, paddingBottom: 32 }}>
        <div className="anila-footer-grid" style={{ marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: C.green, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                  <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: F.head, fontSize: 14, fontWeight: 800, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Anila Stitching</div>
                <div style={{ fontFamily: F.body, fontSize: 9, fontWeight: 600, color: C.stoneLt, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 2 }}>Center · Trivandrum</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.65, maxWidth: 260 }}>
              Professional ladies stitching and tailoring center near Technocity, Trivandrum. Quality stitching with perfect fitting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: F.head, fontSize: 13, fontWeight: 700, color: C.ink, marginBottom: 16, letterSpacing: '-0.01em' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Contact', to: '/contact' }].map(l => (
                <Link key={l.to} to={l.to} style={{ fontSize: 13, color: C.stone, textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.ink}
                  onMouseLeave={e => e.currentTarget.style.color = C.stone}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontFamily: F.head, fontSize: 13, fontWeight: 700, color: C.ink, marginBottom: 16, letterSpacing: '-0.01em' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone size={13} color={C.stoneLt} style={{ flexShrink: 0 }} />
                <a href="tel:+919XXXXXXXXX" style={{ fontSize: 13, color: C.stone, textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = C.ink}
                  onMouseLeave={e => e.currentTarget.style.color = C.stone}
                >+91 92 075 42886</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <MapPin size={13} color={C.stoneLt} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13, color: C.stone, lineHeight: 1.5 }}>Near CPRF Pallipuram , Technocity, Trivandrum, Kerala</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <Clock size={13} color={C.stoneLt} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13, color: C.stone }}>Mon – Sat: 10 AM – 7 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
          <p style={{ fontSize: 12, color: C.stoneLt, textAlign: 'center' }}>
            © {currentYear} Anila Stitching Center. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .anila-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 1fr;
          gap: 48px;
        }
        @media (max-width: 700px) {
          .anila-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 440px) {
          .anila-footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </footer>
  )
}