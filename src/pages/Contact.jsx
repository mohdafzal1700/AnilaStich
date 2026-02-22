import { useRef, useEffect } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Tag, Zap, Package, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const FONTS_ID = 'anila-fonts'
if (typeof document !== 'undefined' && !document.getElementById(FONTS_ID)) {
  const link = document.createElement('link')
  link.id = FONTS_ID
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap'
  document.head.appendChild(link)
}

const C = {
  bg: '#f7f4ef', bg2: '#f0ece5', white: '#ffffff', ink: '#111110',
  green: '#1a3d2b', greenSoft: '#dde8e1', stone: '#78716c',
  stoneLt: '#a9a199', border: 'rgba(17,17,16,0.08)'
}
const F = { head: "'Plus Jakarta Sans', sans-serif", body: "'Inter', sans-serif" }

const REASONS = [
  { icon: <MessageCircle size={18} />, title: 'Free Consultation', desc: 'Unsure about the design? Our team guides you toward the perfect fit for your style and measurements.' },
  { icon: <Tag size={18} />,           title: 'Get a Quote',        desc: 'Bring your garment or describe what you need. Accurate pricing with no hidden charges, always.' },
  { icon: <Zap size={18} />,           title: 'Urgent Orders',      desc: 'Have a rush deadline? Call us to discuss express stitching — quality is never compromised for speed.' },
  { icon: <Package size={18} />,       title: 'Track Your Order',   desc: 'Call us to check garment status, confirm pickup date, or ask any question about your order.' },
]

export default function Contact() {
  const hRef   = useRef(null)
  const detRef = useRef(null)
  const rsnRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (hRef.current) {
      gsap.fromTo(hRef.current.querySelectorAll('[data-h]'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out' }
      )
    }
    if (detRef.current) {
      gsap.fromTo(detRef.current.querySelectorAll('.ci'),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.45, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: detRef.current, start: 'top 80%' } }
      )
    }
    if (rsnRef.current) {
      gsap.fromTo(rsnRef.current.querySelectorAll('.rc'),
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: rsnRef.current, start: 'top 80%' } }
      )
    }
    if (mapRef.current) {
      gsap.fromTo(mapRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: mapRef.current, start: 'top 85%' } }
      )
    }
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div style={{ fontFamily: F.body, background: C.bg, color: C.ink, minHeight: '100vh' }}>
      <Navigation />

      {/* ── Header ── */}
      <section ref={hRef} style={{ background: C.bg, padding: '80px 0 72px' }}>
        <div className="anila-wrap">
          <p data-h style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 20 }}>
            Get in Touch
          </p>
          <div className="anila-hero-grid" style={{ alignItems: 'end' }}>
            <h1 data-h style={{ fontFamily: F.head, fontSize: 'clamp(36px, 5.5vw, 72px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.02, color: C.ink, margin: 0 }}>
              We're here<br />whenever you<br />need us.
            </h1>
            <p data-h style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.75, color: C.stone, maxWidth: 380 }}>
              Questions about stitching? Ready to drop off a garment? Call us, visit us, or get directions — we make it easy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact details + Reasons ── */}
      <section style={{ background: C.white, padding: '72px 0' }}>
        <div className="anila-wrap">
          <div className="anila-two-col" style={{ gap: 72 }}>
            {/* Contact details */}
            <div ref={detRef}>
              <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 16 }}>Contact Information</p>
              <h2 style={{ fontFamily: F.head, fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 800, letterSpacing: '-0.025em', color: C.ink, marginBottom: 44 }}>
                Reach out any time
              </h2>

              {/* Phone */}
              <div className="ci" style={{ display: 'flex', gap: 18, marginBottom: 36 }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: C.greenSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={19} color={C.green} />
                </div>
                <div>
                  <p style={{ fontFamily: F.body, fontSize: 10.5, fontWeight: 600, letterSpacing: '0.13em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 6 }}>Phone</p>
                  <a href="tel:+919207542886" style={{ fontFamily: F.body, fontSize: 20, fontWeight: 700, color: C.ink, textDecoration: 'none', display: 'block', marginBottom: 4 }}
                    onMouseEnter={e => e.currentTarget.style.color = C.green}
                    onMouseLeave={e => e.currentTarget.style.color = C.ink}
                  >+91 92 07 542886</a>
                  <p style={{ fontFamily: F.body, fontSize: 13, color: C.stoneLt }}>Call during business hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="ci" style={{ display: 'flex', gap: 18, marginBottom: 36 }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: C.greenSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={19} color={C.green} />
                </div>
                <div>
                  <p style={{ fontFamily: F.body, fontSize: 10.5, fontWeight: 600, letterSpacing: '0.13em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 6 }}>Address</p>
                  <p style={{ fontFamily: F.body, fontSize: 15, fontWeight: 600, color: C.ink, marginBottom: 6, lineHeight: 1.5 }}>
                    Anila Stitching Center<br />Near CPRF Pallipuram , Technocity<br />Trivandrum, Kerala
                  </p>
                  <a href="https://maps.google.com/?q=Anila+Stitching+Center+Technopark+Trivandrum" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ height: 34, padding: '0 14px', background: 'transparent', color: C.green, border: `1.5px solid ${C.border}`, borderRadius: 7, fontSize: 12.5, fontWeight: 600, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 5 }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = C.green}
                      onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
                    ><MapPin size={12} /> Get Directions</button>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="ci" style={{ display: 'flex', gap: 18, marginBottom: 36 }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: C.bg2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={19} color={C.stone} />
                </div>
                <div>
                  <p style={{ fontFamily: F.body, fontSize: 10.5, fontWeight: 600, letterSpacing: '0.13em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 6 }}>Working Hours</p>
                  <p style={{ fontFamily: F.body, fontSize: 15, color: C.ink, lineHeight: 1.7 }}>
                    <strong>Mon – Sat:</strong> 10 AM – 7 PM<br />
                    <span style={{ color: C.stoneLt }}>Sunday: Closed</span>
                  </p>
                </div>
              </div>

              <div className="ci" style={{ borderRadius: 12, padding: '18px 20px', background: C.bg, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.green}` }}>
                <p style={{ fontFamily: F.body, fontSize: 13.5, color: C.stone, lineHeight: 1.7 }}>
                  <strong style={{ color: C.ink }}>Visit us with your measurements or bring the garment.</strong>{' '}
                  We'll give you a quotation and confirm delivery time on the spot.
                </p>
              </div>
            </div>

            {/* Reasons */}
            <div ref={rsnRef}>
              <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 16 }}>Why Contact Us</p>
              <h2 style={{ fontFamily: F.head, fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 800, letterSpacing: '-0.025em', color: C.ink, marginBottom: 36 }}>
                We're ready to help
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {REASONS.map((r, i) => (
                  <div key={i} className="rc" style={{ borderRadius: 12, padding: '18px 20px', background: C.bg, border: `1px solid ${C.border}`, display: 'flex', gap: 16, alignItems: 'flex-start', transition: 'transform 0.18s, box-shadow 0.18s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: C.greenSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.green }}>
                      {r.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: C.ink, marginBottom: 4 }}>{r.title}</p>
                      <p style={{ fontFamily: F.body, fontSize: 13, color: C.stone, lineHeight: 1.65 }}>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section style={{ background: C.bg, padding: '72px 0' }}>
        <div ref={mapRef} className="anila-wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24, flexWrap: 'wrap', gap: 14 }}>
            <div>
              <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 10 }}>Location</p>
              <h2 style={{ fontFamily: F.head, fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 800, letterSpacing: '-0.025em', color: C.ink, margin: 0 }}>Find us on the map</h2>
            </div>
            <a href="https://maps.google.com/?q=Anila+Stitching+Center+Technopark+Trivandrum" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ height: 38, padding: '0 18px', background: C.green, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={13} /> Open in Google Maps
              </button>
            </a>
          </div>
          <div style={{ borderRadius: 18, height: 320, background: C.bg2, border: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <MapPin size={36} color={C.green} style={{ opacity: 0.2 }} />
            <p style={{ fontFamily: F.body, fontSize: 13, color: C.stoneLt }}>Anila Stitching Center — Near Technopark, Trivandrum</p>
            <p style={{ fontFamily: F.body, fontSize: 11, color: C.stoneLt, opacity: 0.6 }}>Embed Google Maps iframe here</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: C.green, padding: '88px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: F.head, fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.05, marginBottom: 18 }}>
            Ready to start?<br />Call us today.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 40 }}>
            Call or walk in near Technopark. Ladies wear, school uniforms, military uniforms — we handle it all.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919XXXXXXXXX" style={{ textDecoration: 'none' }}>
              <button style={{ height: 52, padding: '0 34px', background: '#fff', color: C.ink, border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Phone size={16} /> Call Now
              </button>
            </a>
            <a href="https://maps.google.com/?q=Anila+Stitching+Center+Technopark+Trivandrum" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ height: 52, padding: '0 28px', background: 'transparent', color: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <MapPin size={15} /> Get Directions
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}