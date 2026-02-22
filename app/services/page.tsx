'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const metadata: Metadata = {
  title: 'Services | Anila Stitching Center - Ladies Tailoring in Trivandrum',
  description: 'Explore our stitching services: blouse stitching, ladies tailoring, alterations, office wear, and urgent stitching near Technopark.',
}

export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const whyChooseRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      title: 'Ladies Stitching & Tailoring',
      description: 'Custom stitching for all types of ladies wear. From casual sarees to formal attire, we provide precise measurements and perfect fitting.',
    },
    {
      title: 'Blouse Stitching',
      description: 'Expert blouse stitching is our specialty. We handle all designs—simple, with sleeves, backless, or decorative patterns.',
    },
    {
      title: 'Alterations & Hemming',
      description: 'Professional alterations for perfect fit. Whether you need adjustments in length, width, or simple hemming, we ensure quality work.',
    },
    {
      title: 'Office Wear Tailoring',
      description: 'We understand professional dress codes. Our office wear tailoring ensures you look polished and confident at work.',
    },
    {
      title: 'Urgent Stitching',
      description: 'Need your garment quickly? We offer urgent stitching service for customers with tight deadlines. Quality never compromised.',
    },
    {
      title: 'Fitting Consultations',
      description: 'Our experienced team provides fitting consultations to help you choose the right design and measurements for your body type.',
    },
  ]

  useEffect(() => {
    // Services grid animations
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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

    // Why choose section animations
    if (whyChooseRef.current) {
      const items = whyChooseRef.current.querySelectorAll('.why-item')
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: whyChooseRef.current,
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
              Our Services
            </h1>
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
              Anila Stitching Center offers a comprehensive range of ladies stitching and tailoring services. From custom blouses to professional alterations, we handle every detail with care and expertise.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="py-8 md:py-11 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {services.map((service, index) => (
                <div key={index} className="service-card bg-secondary/5 rounded-lg p-4 md:p-5 border border-border">
                  <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/70 leading-snug">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div ref={whyChooseRef} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 md:p-8 mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Why Choose Us?</h2>
              <ul className="space-y-2.5">
                <li className="why-item flex items-start gap-2">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base text-foreground"><strong>Quality Craftsmanship:</strong> Every stitch done with precision and attention to detail.</span>
                </li>
                <li className="why-item flex items-start gap-2">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base text-foreground"><strong>Perfect Fitting:</strong> Accurate measurements ensure your garments fit perfectly.</span>
                </li>
                <li className="why-item flex items-start gap-2">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base text-foreground"><strong>Timely Delivery:</strong> We respect your time and deliver work on schedule.</span>
                </li>
                <li className="why-item flex items-start gap-2">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base text-foreground"><strong>Experienced Team:</strong> Skilled tailors with years of experience.</span>
                </li>
                <li className="why-item flex items-start gap-2">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base text-foreground"><strong>Convenient Location:</strong> Located near Technopark for easy access.</span>
                </li>
                <li className="why-item flex items-start gap-2">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm md:text-base text-foreground"><strong>Affordable Pricing:</strong> Quality stitching at reasonable rates.</span>
                </li>
              </ul>
            </div>

            {/* Pricing Note */}
            <div className="bg-primary/5 border-l-4 border-primary p-4 md:p-5 rounded mb-8">
              <h3 className="text-base font-semibold text-primary mb-1">Service Pricing</h3>
              <p className="text-sm text-foreground/70 leading-snug">
                Prices vary based on complexity and garment type. Call us for accurate pricing and quotations.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">Ready to Get Started?</h2>
              <p className="text-sm md:text-base text-foreground/70 mb-5">
                Bring your garments and let us create the perfect fit for you.
              </p>
              <a href="tel:+919XXXXXXXXX">
                <Button size="lg" className="h-11 text-sm font-semibold px-6">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
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
