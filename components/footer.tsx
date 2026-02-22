import Link from 'next/link'
import { Scissors, MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <Scissors className="w-5 h-5" />
              Anila Stitching Center
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-base">
              Your trusted local stitching center for professional ladies tailoring, blouse stitching, and alterations near Technopark, Trivandrum.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground">+91 9X XXX XXXXX</p>
                  <p className="text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground">Near Technopark</p>
                  <p className="text-sm">Trivandrum, Kerala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-base">
                Home
              </Link>
              <Link href="/services" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-base">
                Services
              </Link>
              <Link href="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-base">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/70 text-sm">
            &copy; {currentYear} Anila Stitching Center. All rights reserved. | Professional Ladies Tailoring near Technopark, Trivandrum
          </p>
        </div>
      </div>
    </footer>
  )
}
