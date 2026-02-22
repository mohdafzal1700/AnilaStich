'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Clock, Zap, Shield, Sparkles } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      const h1 = heroRef.current.querySelector('h1')
      const p = heroRef.current.querySelector('p')
      const buttons = heroRef.current.querySelectorAll('a')
      const serviceBox = heroRef.current.querySelector('.service-box')

      gsap.fromTo(
        h1,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )

      gsap.fromTo(
        p,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      )

      gsap.fromTo(
        buttons,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.4, stagger: 0.1, ease: 'back.out' }
      )

      gsap.fromTo(
        serviceBox,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' }
      )
    }

    // Benefits scroll animations
    if (benefitsRef.current) {
      const cards = benefitsRef.current.querySelectorAll('.benefit-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Services scroll animations
    if (servicesRef.current) {
      const items = servicesRef.current.querySelectorAll('.service-item')
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Info cards scroll animations
    if (infoRef.current) {
      const infoCards = infoRef.current.querySelectorAll('.info-card')
      gsap.fromTo(
        infoCards,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="bg-gradient-to-br from-primary/10 to-secondary/10 py-8 md:py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4 leading-tight text-balance">
              Professional Ladies Stitching & Alteration Center near Technopark, Trivandrum
            </h1>
            <p className="text-sm md:text-base text-foreground/80 mb-5 leading-relaxed">
              Welcome to Anila Stitching Center, your trusted destination for quality ladies tailoring and stitching. Whether you need expert blouse stitching, professional alterations, or custom office wear, we deliver reliable, timely results with perfect fitting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="tel:+919XXXXXXXXX" className="flex-1">
                <Button size="lg" className="w-full h-11 text-sm font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="https://maps.google.com/?q=Anila+Stitching+Center+Technopark+Trivandrum" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="lg" className="w-full h-11 text-sm font-semibold">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>

            {/* Services Overview */}
            <div className="service-box bg-white/80 backdrop-blur rounded-lg p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Our Services</h2>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                  <span className="text-foreground">Ladies stitching and custom tailoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                  <span className="text-foreground">Expert blouse stitching and fitting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                  <span className="text-foreground">Professional alterations and hemming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                  <span className="text-foreground">Office wear tailoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                  <span className="text-foreground">Urgent stitching available</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-8 md:py-11 bg-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 text-center">Why Choose Anila Stitching Center</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="benefit-card bg-white rounded-lg p-4 shadow-sm border border-border">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-1">Nearby Location</h3>
                    <p className="text-sm text-foreground/70 leading-snug">
                      Located near Technopark, easily accessible for working professionals. Drop off your garments on your way to work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="benefit-card bg-white rounded-lg p-4 shadow-sm border border-border">
                <div className="flex gap-3">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-1">Quick Turnaround</h3>
                    <p className="text-sm text-foreground/70 leading-snug">
                      We understand your busy schedule. Efficient stitching process with urgent service options available.
                    </p>
                  </div>
                </div>
              </div>
              <div className="benefit-card bg-white rounded-lg p-4 shadow-sm border border-border">
                <div className="flex gap-3">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-1">Quality & Fitting</h3>
                    <p className="text-sm text-foreground/70 leading-snug">
                      Every stitch is done with precision. Perfect fitting for casual to formal office wear.
                    </p>
                  </div>
                </div>
              </div>
              <div className="benefit-card bg-white rounded-lg p-4 shadow-sm border border-border">
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-1">Reliable Service</h3>
                    <p className="text-sm text-foreground/70 leading-snug">
                      We take pride in consistent quality and keeping our commitments on time, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section ref={infoRef} className="py-8 md:py-11 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-6 text-center">Quick Information</h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              <div className="info-card text-center bg-primary/5 rounded-lg p-4 border border-primary/10">
                <Clock className="w-8 h-8 md:w-9 md:h-9 text-primary mx-auto mb-2.5" />
                <h3 className="text-base font-semibold text-primary mb-1">Hours</h3>
                <p className="text-xs md:text-sm text-foreground/70 leading-snug">
                  Mon - Sat: 10 AM - 7 PM<br />
                  Sunday: Closed
                </p>
              </div>
              <div className="info-card text-center bg-primary/5 rounded-lg p-4 border border-primary/10">
                <Phone className="w-8 h-8 md:w-9 md:h-9 text-primary mx-auto mb-2.5" />
                <h3 className="text-base font-semibold text-primary mb-1">Contact</h3>
                <p className="text-xs md:text-sm text-foreground/70 leading-snug">
                  <a href="tel:+919XXXXXXXXX" className="hover:text-primary font-medium">+91 9X XXX XXXXX</a><br />
                  (Quick assistance)
                </p>
              </div>
              <div className="info-card text-center bg-primary/5 rounded-lg p-4 border border-primary/10">
                <MapPin className="w-8 h-8 md:w-9 md:h-9 text-primary mx-auto mb-2.5" />
                <h3 className="text-base font-semibold text-primary mb-1">Location</h3>
                <p className="text-xs md:text-sm text-foreground/70 leading-snug">
                  Near Technopark<br />
                  Trivandrum, Kerala
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-8 md:py-11">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Ready for Perfect Stitching?</h2>
            <p className="text-sm md:text-base mb-5 leading-relaxed">
              Contact us today for your stitching and tailoring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+919XXXXXXXXX">
                <Button size="lg" variant="secondary" className="h-11 text-sm font-semibold px-6">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-11 text-sm font-semibold px-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
