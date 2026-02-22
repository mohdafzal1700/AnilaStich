import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import workImg from './work.jpg'

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

const SERVICES = [
  { emoji: '🧵', title: 'Ladies Custom Tailoring',    desc: 'Custom stitching for all types of ladies wear. Sarees, churidars, kurtis — precise measurements and a flawless fit every time.', badge: 'Most Popular' },
  { emoji: '👘', title: 'Blouse Stitching',            desc: 'Expert blouse stitching is our specialty. All designs from simple to elaborate, backless, sleeves, or decorative patterns.', badge: null },
  { emoji: '✂️', title: 'Alterations & Hemming',      desc: 'Professional alterations for a perfect fit. Adjustments in length, width, or simple hemming — quality guaranteed.', badge: null },
  { emoji: '🏫', title: 'School Uniforms',             desc: 'Neat, durable uniforms for students stitched to exact specifications. Bulk institutional orders handled with care.', badge: 'Bulk Orders' },
  { emoji: '🎖️', title: 'Military & Formal Uniforms', desc: 'Precision stitching for military and formal uniforms. Strict quality standards and accurate measurements, always.', badge: 'Specialist' },
  { emoji: '💼', title: 'Office Wear Tailoring',       desc: 'Professional attire tailored for the modern workplace. Look polished and confident — near Technopark and beyond.', badge: null },
  { emoji: '⚡', title: 'Urgent Stitching',            desc: 'Need your garment quickly? We offer urgent stitching for tight deadlines. Quality is never compromised, ever.', badge: 'Express' },
  { emoji: '📐', title: 'Fitting Consultations',       desc: 'Our experienced team provides consultations to help you choose the right design and measurements for your body type.', badge: 'Free' },
]

const WHY = [
  { title: 'Quality Craftsmanship', desc: 'Every stitch done with precision and attention to detail.' },
  { title: 'Perfect Fitting',        desc: 'Accurate measurements ensure your garments fit perfectly.' },
  { title: 'Timely Delivery',        desc: 'We respect your time and deliver work on schedule.' },
  { title: 'Experienced Team',       desc: 'Skilled tailors with years of experience across all garment types.' },
  { title: 'Convenient Location',    desc: 'Located near Technopark — easy drop-off for working professionals.' },
  { title: 'Affordable Pricing',     desc: 'Quality stitching at transparent, reasonable rates.' },
]

export default function Services() {
  const hRef   = useRef(null)
  const svcRef = useRef(null)
  const whyRef = useRef(null)

  useEffect(() => {
    if (hRef.current) {
      gsap.fromTo(hRef.current.querySelectorAll('[data-h]'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out' }
      )
    }
    if (svcRef.current) {
      gsap.fromTo(svcRef.current.querySelectorAll('.sc'),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: svcRef.current, start: 'top 80%' } }
      )
    }
    if (whyRef.current) {
      gsap.fromTo(whyRef.current.querySelectorAll('.wi'),
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: whyRef.current, start: 'top 80%' } }
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
            What We Offer
          </p>
          <div className="anila-hero-grid" style={{ alignItems: 'end' }}>
            <h1 data-h style={{ fontFamily: F.head, fontSize: 'clamp(36px, 5.5vw, 72px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.02, color: C.ink, margin: 0 }}>
              Every kind of<br />stitching, done<br />right.
            </h1>
            <p data-h style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.75, color: C.stone, maxWidth: 400 }}>
              From delicate ladies blouses to school and military uniforms — Anila Stitching Center handles every garment with care, precision, and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section ref={svcRef} style={{ background: C.white, padding: '72px 0' }}>
        <div className="anila-wrap">
          <div className="anila-svc-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="sc" style={{ borderRadius: 14, padding: '26px 24px', background: C.bg, border: `1px solid ${C.border}`, position: 'relative', transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.07)'; e.currentTarget.style.borderColor = 'rgba(17,17,16,0.16)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = C.border }}
              >
                {s.badge && (
                  <span style={{ position: 'absolute', top: 18, right: 18, fontFamily: F.body, fontSize: 10, fontWeight: 600, padding: '3px 9px', borderRadius: 100, background: 'rgba(17,17,16,0.06)', color: C.stone, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {s.badge}
                  </span>
                )}
                <div style={{ fontSize: 28, marginBottom: 16 }}>{s.emoji}</div>
                <h3 style={{ fontFamily: F.head, fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em', color: C.ink, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: F.body, fontSize: 13.5, color: C.stone, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section ref={whyRef} style={{ background: C.bg, padding: '88px 0' }}>
        <div className="anila-wrap">
          <div className="anila-two-col" style={{ gap: 72 }}>
            <div>
              <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 16 }}>Our Promise</p>
              <h2 style={{ fontFamily: F.head, fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.025em', color: C.ink, lineHeight: 1.06, marginBottom: 44 }}>
                Why choose<br />Anila Stitching?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {WHY.map((w, i) => (
                  <div key={i} className="wi" style={{ display: 'flex', gap: 16 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: C.greenSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <CheckCircle2 size={14} color={C.green} />
                    </div>
                    <div>
                      <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: C.ink, marginBottom: 3 }}>{w.title}</p>
                      <p style={{ fontFamily: F.body, fontSize: 13, color: C.stone, lineHeight: 1.6 }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ borderRadius: 18, height: 320, overflow: 'hidden' }}>
                <img
                  src={workImg}
                  alt="Anila Stitching Center work"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
              </div>
              <div style={{ borderRadius: 14, padding: '22px 24px', background: C.white, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.green}` }}>
                <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 8 }}>Service Pricing</p>
                <p style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: C.ink, marginBottom: 6 }}>Prices vary by garment type and complexity.</p>
                <p style={{ fontFamily: F.body, fontSize: 13, color: C.stone, lineHeight: 1.65 }}>Call or visit for a free quote — always transparent, no surprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── CTA ── */}
      <section style={{ background: C.green, padding: '88px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: F.head, fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.05, marginBottom: 18 }}>
            Ready to get started?
          </h2>
          <p style={{ fontFamily: F.body, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 40 }}>
            Bring your garments or call us to discuss. We'll measure, advise, and deliver on time.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919XXXXXXXXX" style={{ textDecoration: 'none' }}>
              <button style={{ height: 52, padding: '0 34px', background: '#fff', color: C.ink, border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Phone size={16} /> Call Now
              </button>
            </a>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ height: 52, padding: '0 28px', background: 'transparent', color: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Contact Us <ArrowRight size={15} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}