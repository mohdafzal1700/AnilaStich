import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import heroImg    from './main.jpg'
import subImg     from './submain.jpg'
import imgNcc     from './ncc.jpg'
import imgOffice  from './office.jpg'
import imgSchool  from './schooluniform.jpg'
import imgKurthi  from './kurthi1.jpg'
import imgCustomer from './customer.webp'
import imgBlouse  from './BLAS52XG_1.jpg'
import imgArmy    from './army.webp'

gsap.registerPlugin(ScrollTrigger)

/* ── Fonts ───────────────────────────────────────────── */
const FONTS_ID = 'anila-fonts'
if (typeof document !== 'undefined' && !document.getElementById(FONTS_ID)) {
  const link = document.createElement('link')
  link.id = FONTS_ID; link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap'
  document.head.appendChild(link)
}

/* ── Global responsive CSS ───────────────────────────── */
const RESP_ID = 'anila-resp'
if (typeof document !== 'undefined' && !document.getElementById(RESP_ID)) {
  const s = document.createElement('style')
  s.id = RESP_ID
  s.textContent = `
    *, *::before, *::after { box-sizing: border-box; }
    .anila-wrap { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
    .anila-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
    .anila-two-col   { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
    .anila-three-col { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px; }
    .anila-svc-grid  { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }
    .anila-gall-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 200px;
      gap: 12px;
    }
    .gall-item { border-radius: 14px; overflow: hidden; position: relative; cursor: default; }
    .gall-item img { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; transition: transform 0.4s ease; }
    .gall-item:hover img { transform: scale(1.05); }
    .gall-item.tall { grid-row: span 2; }
    .gall-label {
      position: absolute; bottom: 0; left: 0; right: 0;
      padding: 10px 14px;
      background: linear-gradient(to top, rgba(0,0,0,0.55), transparent);
      color: #fff;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    .gall-item:hover .gall-label { opacity: 1; }
    #anila-progress { position:fixed; top:0; left:0; height:3px; background:#1a3d2b; z-index:9999; width:0%; }
    .hero-line { display:block; overflow:hidden; line-height:1.05; }
    .hero-line-inner { display:block; }
    .gs { clip-path: inset(100% 0 0 0); will-change: transform; }
    .wi { opacity:0; }
    @media (max-width: 900px) {
      .anila-wrap { padding: 0 24px; }
      .anila-hero-grid { grid-template-columns: 1fr; gap: 40px; }
      .anila-two-col   { grid-template-columns: 1fr; gap: 40px; }
      .anila-gall-grid { grid-template-columns: repeat(2,1fr); }
      .h-img-secondary { display: none !important; }
    }
    @media (max-width: 600px) {
      .anila-wrap { padding: 0 16px; }
      .anila-gall-grid { grid-template-columns: 1fr 1fr; }
      .anila-svc-grid  { grid-template-columns: 1fr; }
    }
  `
  document.head.appendChild(s)
}

/* ── Design tokens ───────────────────────────────────── */
const C = {
  bg: '#f7f4ef', bg2: '#f0ece5', white: '#ffffff', ink: '#111110',
  green: '#1a3d2b', greenSoft: '#dde8e1', stone: '#78716c',
  stoneLt: '#a9a199', border: 'rgba(17,17,16,0.08)'
}
const F = { head: "'Plus Jakarta Sans', sans-serif", body: "'Inter', sans-serif" }

/* ── Data ────────────────────────────────────────────── */
const SERVICES = [
  { emoji: '🧵', title: 'Ladies Custom Tailoring',    desc: 'Sarees, churidars, kurtis — stitched to exact measurements with a flawless fit.' },
  { emoji: '👘', title: 'Blouse Stitching',            desc: 'All designs from simple to elaborate, fitted by hand, every detail considered.' },
  { emoji: '✂️', title: 'Alterations & Hemming',      desc: 'Any garment adjusted until the fit is exactly right — length, waist, shoulders.' },
  { emoji: '🏫', title: 'School Uniforms',             desc: 'Durable, neat uniforms for students. Bulk institutional orders handled with care.' },
  { emoji: '🎖️', title: 'Military & Formal Uniforms', desc: 'Precision stitching to strict standards. Accurate measurements, always.' },
  { emoji: '💼', title: 'Office Wear',                 desc: 'Professional attire tailored for working women near Technopark and beyond.' },
  { emoji: '⚡', title: 'Urgent Orders',               desc: 'Tight deadline? Call us — express stitching taken without dropping quality.' },
  { emoji: '📐', title: 'Fitting Consultation',        desc: 'Our team guides you to the right design and measurements for your body type.' },
]

const WHY = [
  'Perfect fit — every single time',
  'School & military uniform specialists',
  'Expert blouse stitching in all styles',
  'Urgent orders always accepted',
  'Near Technocity — easy for working women',
  'Transparent pricing, no hidden charges',
]

const MARQUEE = ['Ladies Stitching','Blouse Stitching','School Uniforms','Military Uniforms','Office Wear','Alterations','Urgent Orders','Perfect Fitting']

/* Gallery items — using real images */
const GALLERY = [
  { label: 'Ladies Blouse',    img: imgBlouse,   tall: true  },
  { label: 'School Uniform',   img: imgSchool,   tall: false },
  { label: 'Military Uniform', img: imgArmy,     tall: false },
  { label: 'Office Wear',      img: imgOffice,   tall: true  },
  { label: 'NCC Uniform',      img: imgNcc,      tall: false },
  { label: 'Happy Customer',   img: imgKurthi, tall: false },
  // { label: 'Kurti Design',     img: imgKurthi,   tall: false },
]

/* ── Magnetic button hook ────────────────────────────── */
function useMagnetic(ref, strength = 0.35) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = e => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left  - r.width  / 2
      const y = e.clientY - r.top   - r.height / 2
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.4, ease: 'power2.out' })
    }
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1,0.4)' })
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [ref, strength])
}

/* ══════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef    = useRef(null)
  const heroImgRef = useRef(null)
  const trustRef   = useRef(null)
  const mqRef      = useRef(null)
  const gallRef    = useRef(null)
  const svcRef     = useRef(null)
  const whyRef     = useRef(null)
  const whyImgRef  = useRef(null)
  const infoRef    = useRef(null)
  const ctaRef     = useRef(null)
  const callBtnRef = useRef(null)
  const svcBtnRef  = useRef(null)
  const progressRef= useRef(null)

  useMagnetic(callBtnRef, 0.3)
  useMagnetic(svcBtnRef,  0.25)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 1. Scroll progress */
      gsap.to(progressRef.current, {
        width: '100%', ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
      })

      /* 2. Hero split-line entrance */
      const lines = heroRef.current.querySelectorAll('.hero-line-inner')
      gsap.set(lines, { y: '110%' })
      gsap.to(lines, { y: '0%', duration: 0.9, stagger: 0.12, ease: 'power4.out', delay: 0.1 })

      gsap.fromTo(heroRef.current.querySelectorAll('[data-h]'),
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.4 }
      )
      gsap.fromTo(heroImgRef.current,
        { opacity: 0, scale: 0.93, y: 32 },
        { opacity: 1, scale: 1, y: 0, duration: 1.05, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo(trustRef.current,
        { opacity: 0, y: 28, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'back.out(1.8)', delay: 0.9 }
      )
      gsap.to(heroImgRef.current, {
        y: -14, duration: 4.2, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 1.3
      })

      /* 3. Marquee */
      gsap.to(mqRef.current.querySelector('.mq'), { x: '-50%', duration: 28, ease: 'none', repeat: -1 })
      gsap.fromTo(mqRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.6,
        scrollTrigger: { trigger: mqRef.current, start: 'top 90%' }
      })

      /* 4. Gallery reveal */
      gsap.to(gallRef.current.querySelectorAll('.gs'), {
        clipPath: 'inset(0% 0 0 0)', duration: 0.72,
        stagger: { each: 0.08, from: 'start' }, ease: 'power3.inOut',
        scrollTrigger: { trigger: gallRef.current, start: 'top 78%' }
      })
      gsap.fromTo(gallRef.current.querySelector('.gall-head'),
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', scrollTrigger: { trigger: gallRef.current, start: 'top 82%' } }
      )

      /* 5. Services */
      gsap.fromTo(svcRef.current.querySelectorAll('.sc'),
        { opacity: 0, y: 44, rotateX: 10, transformOrigin: 'top center' },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.58, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: svcRef.current, start: 'top 78%' } }
      )
      gsap.fromTo(svcRef.current.querySelector('.svc-head'),
        { opacity: 0, x: -32 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: svcRef.current, start: 'top 82%' } }
      )
      svcRef.current.querySelectorAll('.sc').forEach(card => {
        const emoji = card.querySelector('.sc-emoji')
        card.addEventListener('mouseenter', () => {
          gsap.to(card,  { y: -7, boxShadow: '0 20px 44px rgba(0,0,0,0.1)', borderColor: 'rgba(17,17,16,0.2)', duration: 0.22, ease: 'power2.out' })
          gsap.to(emoji, { scale: 1.35, rotate: 14, duration: 0.38, ease: 'back.out(2)' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card,  { y: 0, boxShadow: '0 0px 0px rgba(0,0,0,0)', borderColor: C.border, duration: 0.38, ease: 'power2.inOut' })
          gsap.to(emoji, { scale: 1, rotate: 0, duration: 0.45, ease: 'elastic.out(1,0.4)' })
        })
      })

      /* 6. Why */
      gsap.fromTo(whyImgRef.current,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out', scrollTrigger: { trigger: whyRef.current, start: 'top 80%' } }
      )
      gsap.to(whyImgRef.current, {
        y: -56, ease: 'none',
        scrollTrigger: { trigger: whyRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.6 }
      })
      gsap.set(whyRef.current.querySelectorAll('.wi'), { x: -32 })
      gsap.to(whyRef.current.querySelectorAll('.wi'), {
        opacity: 1, x: 0, duration: 0.52, stagger: 0.09, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: whyRef.current, start: 'top 74%' }
      })

      /* 7. Info */
      gsap.fromTo(infoRef.current.querySelector('.info-head'),
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: infoRef.current, start: 'top 84%' } }
      )
      gsap.fromTo(infoRef.current.querySelectorAll('.ic'),
        { opacity: 0, y: 52, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.62, stagger: 0.13, ease: 'back.out(1.6)',
          scrollTrigger: { trigger: infoRef.current, start: 'top 80%' } }
      )
      infoRef.current.querySelectorAll('.ic').forEach(card => {
        card.addEventListener('mouseenter', () => gsap.to(card, { y: -5, boxShadow: '0 14px 36px rgba(0,0,0,0.09)', duration: 0.22, ease: 'power2.out' }))
        card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, boxShadow: 'none', duration: 0.42, ease: 'elastic.out(1,0.45)' }))
      })

      /* 8. CTA */
      gsap.fromTo(ctaRef.current.querySelectorAll('.cta-word'),
        { opacity: 0, y: 26, rotateY: 18 },
        { opacity: 1, y: 0, rotateY: 0, duration: 0.52, stagger: 0.09, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(ctaRef.current.querySelectorAll('[data-cta]'),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.52, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 76%' } }
      )
    })
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <div style={{ fontFamily: F.body, background: C.bg, color: C.ink, minHeight: '100vh' }}>
      <div id="anila-progress" ref={progressRef} />
      <Navigation />

      {/* ════ HERO ══════════════════════════════════════════ */}
      <section ref={heroRef} style={{ background: C.bg, padding: '80px 0 96px' }}>
        <div className="anila-wrap">
          <div className="anila-hero-grid">
            {/* Left */}
            <div>
              <p data-h style={{ fontFamily: F.body, fontSize: 12, fontWeight: 600, color: C.stoneLt, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 28, opacity: 0 }}>
                Near Technocity · Trivandrum, Kerala
              </p>
              <h1 style={{ fontFamily: F.head, fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em', color: C.ink, margin: '0 0 28px' }}>
                {['Expert', 'Stitching &', 'Tailoring.'].map((line, i) => (
                  <span key={i} className="hero-line">
                    <span className="hero-line-inner">{line}</span>
                  </span>
                ))}
              </h1>
              <p data-h style={{ fontFamily: F.body, fontSize: 16, lineHeight: 1.75, color: C.stone, maxWidth: 380, marginBottom: 40, opacity: 0 }}>
                Ladies wear, school uniforms, military uniforms — Anila Stitching Center delivers precision fits for every need in Trivandrum.
              </p>
              <div data-h style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48, opacity: 0 }}>
                <div ref={callBtnRef} style={{ display: 'inline-flex' }}>
                  <a href="tel:+919207542886" style={{ textDecoration: 'none' }}>
                    <button style={{ height: 52, padding: '0 32px', background: C.green, color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <Phone size={16} /> Call Now
                    </button>
                  </a>
                </div>
                <div ref={svcBtnRef} style={{ display: 'inline-flex' }}>
                  <Link to="/services" style={{ textDecoration: 'none' }}>
                    <button style={{ height: 52, padding: '0 28px', background: 'transparent', color: C.ink, border: `1.5px solid ${C.border}`, borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      View Services <ArrowRight size={15} />
                    </button>
                  </Link>
                </div>
              </div>
              <div data-h style={{ display: 'flex', gap: 8, flexWrap: 'wrap', opacity: 0 }}>
                {['Ladies Wear', 'School Uniforms', 'Military Uniforms', 'Urgent Orders'].map(t => (
                  <span key={t} style={{ fontFamily: F.body, fontSize: 11.5, fontWeight: 500, padding: '5px 13px', borderRadius: 100, border: `1px solid ${C.border}`, color: C.stone, background: C.white }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — images */}
            <div style={{ position: 'relative' }}>
              {/* Main hero image */}
              <div
                ref={heroImgRef}
                style={{ borderRadius: 20, height: 520, overflow: 'hidden', position: 'relative', opacity: 0, willChange: 'transform' }}
              >
                <img
                  src={heroImg}
                  alt="Anila Stitching Center"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
                {/* Trust badge */}
                <div ref={trustRef} style={{ position: 'absolute', bottom: 24, left: 24, background: C.white, borderRadius: 14, padding: '14px 20px', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 12, opacity: 0 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: C.greenSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={17} color={C.green} />
                  </div>
                  <div>
                    <p style={{ fontFamily: F.body, fontSize: 12.5, fontWeight: 700, color: C.ink, lineHeight: 1.2 }}>Urgent orders accepted</p>
                    <p style={{ fontFamily: F.body, fontSize: 11, color: C.stoneLt, marginTop: 2 }}>Call to check availability</p>
                  </div>
                </div>
              </div>

              {/* Secondary floating image */}
              <div
                className="h-img-secondary"
                style={{ position: 'absolute', top: 28, right: -20, width: 130, height: 130, borderRadius: 16, overflow: 'hidden', border: `1px solid ${C.border}`, boxShadow: '0 8px 28px rgba(0,0,0,0.12)' }}
              >
                <img src={subImg} alt="Work sample" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ MARQUEE ══════════════════════════════════════ */}
      <div ref={mqRef} style={{ background: C.ink, overflow: 'hidden', padding: '14px 0', opacity: 0 }}>
        <div className="mq" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[0, 1].map(r => (
            <div key={r} style={{ display: 'flex' }}>
              {MARQUEE.map((item, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 22, padding: '0 32px', fontFamily: F.body, fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  {item}
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 16, fontWeight: 300 }}>|</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ════ GALLERY ══════════════════════════════════════ */}
      <section ref={gallRef} style={{ background: C.white, padding: '88px 0' }}>
        <div className="anila-wrap">
          <div className="gall-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 16, opacity: 0 }}>
            <div>
              <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 12 }}>Our Work</p>
              <h2 style={{ fontFamily: F.head, fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.025em', color: C.ink, margin: 0 }}>
                See what we make
              </h2>
            </div>
            {/* <p style={{ fontFamily: F.body, fontSize: 13, color: C.stoneLt, maxWidth: 240, lineHeight: 1.6, textAlign: 'right' }}>
              Uniforms, blouses, kurtis & more — all stitched in-house
            </p> */}
          </div>

          {/* Real image grid */}
          <div className="anila-gall-grid">
            {GALLERY.map((g, i) => (
              <div key={i} className={`gall-item gs${g.tall ? ' tall' : ''}`}>
                <img src={g.img} alt={g.label} />
                <div className="gall-label">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SERVICES ═════════════════════════════════════ */}
      <section ref={svcRef} style={{ background: C.bg, padding: '88px 0', perspective: '1200px' }}>
        <div className="anila-wrap">
          <div className="svc-head" style={{ marginBottom: 52, opacity: 0 }}>
            <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 12 }}>What We Offer</p>
            <h2 style={{ fontFamily: F.head, fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.025em', color: C.ink, margin: 0, maxWidth: 480 }}>
              Every kind of stitching, handled with care.
            </h2>
          </div>
          <div className="anila-svc-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="sc" style={{ borderRadius: 14, padding: '24px 22px', background: C.white, border: `1px solid ${C.border}`, cursor: 'default', willChange: 'transform', opacity: 0 }}>
                <div className="sc-emoji" style={{ fontSize: 24, marginBottom: 14, display: 'inline-block' }}>{s.emoji}</div>
                <h3 style={{ fontFamily: F.head, fontSize: 15.5, fontWeight: 700, letterSpacing: '-0.01em', color: C.ink, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontFamily: F.body, fontSize: 13, color: C.stone, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontFamily: F.body, fontSize: 14, color: C.stone }}>Prices vary by garment and complexity. <strong style={{ color: C.ink }}>Call for a free quote.</strong></p>
            <a href="tel:+919207542886" style={{ textDecoration: 'none' }}>
              <button style={{ height: 44, padding: '0 24px', background: C.green, color: '#fff', border: 'none', borderRadius: 9, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                <Phone size={14} /> Call Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ════ WHY US ════════════════════════════════════════ */}
      <section ref={whyRef} style={{ background: C.white, padding: '88px 0' }}>
      <div className="anila-wrap">
        <div className="anila-two-col">
          <div ref={whyImgRef} style={{ borderRadius: 20, height: 440, overflow: 'hidden', willChange: 'transform', opacity: 0 }}>
            <img
              src={imgCustomer}
              alt="Happy customer at Anila Stitching Center"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </div>
          <div>
            <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 16 }}>Why Choose Us</p>
            <h2 style={{ fontFamily: F.head, fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, letterSpacing: '-0.025em', color: C.ink, lineHeight: 1.08, marginBottom: 40 }}>
              Quality you can<br />feel and see.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {WHY.map((w, i) => (
                <div key={i} className="wi" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: C.greenSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={14} color={C.green} />
                  </div>
                  <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: C.ink }}>{w}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <a href="tel:+919207542886" style={{ textDecoration: 'none' }}>
                <button
                  style={{ height: 50, padding: '0 32px', background: C.green, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.04, duration: 0.2, ease: 'power2.out' })}
                  onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.38, ease: 'elastic.out(1,0.4)' })}
                ><Phone size={15} /> Call & Book Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* ════ INFO ══════════════════════════════════════════ */}
      <section ref={infoRef} style={{ background: C.bg, padding: '88px 0' }}>
        <div className="anila-wrap">
          <div className="info-head" style={{ opacity: 0 }}>
            <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' }}>Find Us</p>
            <h2 style={{ fontFamily: F.head, fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, letterSpacing: '-0.025em', color: C.ink, textAlign: 'center', marginBottom: 56 }}>
              We're easy to reach
            </h2>
          </div>
          <div className="anila-three-col">
            {[
              { icon: <Clock size={19} color={C.green} />,  label: 'Hours',   primary: 'Mon – Sat: 10 AM – 7 PM', secondary: 'Sundays closed' },
              { icon: <Phone size={19} color={C.green} />,  label: 'Phone',   primary: '+91 92 075 42886', secondary: 'Call during business hours', link: 'tel:+919XXXXXXXXX' },
              { icon: <MapPin size={19} color={C.green} />, label: 'Address', primary: 'Near CRPF PALLIPPURAM , TECHNOCITY ', secondary: 'Trivandrum, Kerala' },
            ].map((c, i) => (
              <div key={i} className="ic" style={{ borderRadius: 14, padding: '28px 24px', background: C.white, border: `1px solid ${C.border}`, display: 'flex', gap: 18, alignItems: 'flex-start', willChange: 'transform' }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: C.greenSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ fontFamily: F.body, fontSize: 10.5, fontWeight: 600, letterSpacing: '0.13em', color: C.stoneLt, textTransform: 'uppercase', marginBottom: 5 }}>{c.label}</p>
                  {c.link
                    ? <a href={c.link} style={{ fontFamily: F.body, fontSize: 17, fontWeight: 700, color: C.ink, textDecoration: 'none', display: 'block', marginBottom: 3 }}>{c.primary}</a>
                    : <p style={{ fontFamily: F.body, fontSize: 17, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{c.primary}</p>
                  }
                  <p style={{ fontFamily: F.body, fontSize: 13, color: C.stoneLt }}>{c.secondary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ═══════════════════════════════════════════ */}
      <section ref={ctaRef} style={{ background: C.green, padding: '88px 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: F.head, fontSize: 'clamp(34px, 4.5vw, 60px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            {['Ready', 'for', 'a', 'perfect', 'fit?'].map((w, i) => (
              <span key={i} className="cta-word" style={{ display: 'inline-block', marginRight: '0.24em', opacity: 0 }}>{w}</span>
            ))}
          </h2>
          <p data-cta style={{ fontFamily: F.body, fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 44, opacity: 0 }}>
            Ladies wear, school uniforms, military uniforms — call us or walk in near Technopark.
          </p>
          <div data-cta style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}>
            <a href="tel:+919207542886" style={{ textDecoration: 'none' }}>
              <button
                style={{ height: 54, padding: '0 38px', background: '#fff', color: C.ink, border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2, ease: 'power2.out' })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1,    duration: 0.38, ease: 'elastic.out(1,0.4)' })}
              ><Phone size={16} /> Call Now</button>
            </a>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button
                style={{ height: 54, padding: '0 32px', background: 'transparent', color: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: 10, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: F.body, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.04, borderColor: 'rgba(255,255,255,0.6)', duration: 0.2, ease: 'power2.out' })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1,    borderColor: 'rgba(255,255,255,0.25)', duration: 0.38, ease: 'elastic.out(1,0.4)' })}
              >Contact Us <ArrowRight size={15} /></button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}