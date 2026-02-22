'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const metadata: Metadata = {
  title: 'Contact | Anila Stitching Center - Get in Touch',
  description: 'Contact Anila Stitching Center near Technopark, Trivandrum. Phone, address, working hours, and directions.',
}

export default function ContactPage() {
  const detailsRef = useRef<HTMLDivElement>(null)
  const reasonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Details animations
    if (detailsRef.current) {
      const items = detailsRef.current.querySelectorAll('.contact-item')
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
            trigger: detailsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Reasons animations
    if (reasonsRef.current) {
      const cards = reasonsRef.current.querySelectorAll('.reason-card')
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out',
          scrollTrigger: {
            trigger: reasonsRef.current,
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
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-8 md:py-11">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-3 text-balance">
              Get in Touch
            </h1>
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
              Have questions or ready to bring your garments? Contact Anila Stitching Center today.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-8 md:py-11 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {/* Contact Details */}
              <div ref={detailsRef}>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">Contact Information</h2>

                {/* Phone */}
                <div className="contact-item mb-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="text-base font-semibold text-primary">Phone</h3>
                  </div>
                  <p className="text-foreground/70 ml-7 text-sm">
                    <a href="tel:+919XXXXXXXXX" className="font-medium text-primary hover:text-accent transition-colors">
                      +91 9X XXX XXXXX
                    </a>
                  </p>
                  <p className="text-foreground/50 ml-7 text-xs mt-0.5">Call during business hours</p>
                </div>

                {/* Location */}
                <div className="contact-item mb-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="text-base font-semibold text-primary">Address</h3>
                  </div>
                  <p className="text-foreground/70 ml-7 text-sm leading-snug">
                    Anila Stitching Center<br />
                    Near Technopark<br />
                    Trivandrum, Kerala
                  </p>
                  <a href="https://maps.google.com/?q=Anila+Stitching+Center+Technopark+Trivandrum" target="_blank" rel="noopener noreferrer" className="inline-block ml-7 mt-2">
                    <Button variant="outline" size="sm" className="h-9 text-xs">Get Directions</Button>
                  </a>
                </div>

                {/* Working Hours */}
                <div className="contact-item mb-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="text-base font-semibold text-primary">Hours</h3>
                  </div>
                  <div className="text-foreground/70 ml-7 text-sm space-y-1">
                    <p><span className="font-medium text-foreground">Mon - Sat:</span> 10 AM - 7 PM</p>
                    <p><span className="font-medium text-foreground">Sunday:</span> Closed</p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="contact-item bg-secondary/5 rounded-lg p-4 mt-6 border border-border">
                  <p className="text-xs md:text-sm text-foreground/70 leading-snug">
                    <strong>Visit us with measurements or bring the garment you'd like stitched.</strong> Our team will provide a quotation and confirm delivery time.
                  </p>
                </div>
              </div>

              {/* Contact Reasons */}
              <div ref={reasonsRef}>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">Why Contact Us?</h2>

                <div className="space-y-4">
                  <div className="reason-card bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <h3 className="text-base font-semibold text-primary mb-1">Free Consultation</h3>
                    <p className="text-sm text-foreground/70 leading-snug">
                      Unsure about your design? Our team guides you to get the perfect fit.
                    </p>
                  </div>

                  <div className="reason-card bg-accent/5 rounded-lg p-4 border border-accent/10">
                    <h3 className="text-base font-semibold text-primary mb-1">Get a Quote</h3>
                    <p className="text-sm text-foreground/70 leading-snug">
                      Bring your garment or describe what you need. We'll provide accurate pricing.
                    </p>
                  </div>

                  <div className="reason-card bg-secondary/5 rounded-lg p-4 border border-secondary/10">
                    <h3 className="text-base font-semibold text-primary mb-1">Urgent Orders</h3>
                    <p className="text-sm text-foreground/70 leading-snug">
                      Have a rush deadline? Call us to discuss urgent stitching options.
                    </p>
                  </div>

                  <div className="reason-card bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <h3 className="text-base font-semibold text-primary mb-1">Track Your Order</h3>
                    <p className="text-sm text-foreground/70 leading-snug">
                      Call us to check your garment status and confirm pickup date.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-10 pt-10 border-t border-border">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Find Us on the Map</h2>
              <div className="rounded-lg overflow-hidden h-80 bg-secondary/5 border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-primary/30 mx-auto mb-3" />
                  <p className="text-foreground/50 text-sm mb-4">Anila Stitching Center - Near Technopark, Trivandrum</p>
                  <a href="https://maps.google.com/?q=Anila+Stitching+Center+Technopark+Trivandrum" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="h-10 text-sm">Open in Google Maps</Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 md:p-8 text-center border border-primary/10">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">Ready to Start?</h2>
              <p className="text-sm md:text-base text-foreground/70 mb-5 leading-relaxed">
                Call us today to discuss your stitching needs or visit our center near Technopark.
              </p>
              <a href="tel:+919XXXXXXXXX">
                <Button size="lg" className="h-11 text-sm font-semibold px-6">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
