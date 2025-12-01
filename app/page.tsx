"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react"
import { useState } from "react"

export default function GramineeHomepage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-light tracking-wide text-foreground">graminee</h1>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex gap-8 text-sm">
            <a href="#gallery" className="hover:text-accent transition-colors">
              Gallery
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="sm:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-3 flex flex-col">
              <a
                href="#gallery"
                className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block py-2 px-4 hover:bg-muted rounded-lg transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="/plants-on-wooden-table-by-window.jpg"
          alt="Graminee plants by the window"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6 sm:p-8">
          <p className="text-white text-sm sm:text-base max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-amber-100">
              <Image
                src="/dried-flowers-arrangement-on-tan-background.jpg"
                alt="Dried flowers arrangement"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground text-balance">Lorem Ipsum</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-center mb-2 text-foreground">Our Gallery</h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16">Lorem ipsum dolor sit amet</p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative aspect-square rounded-t-4xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={`/flower-arrangement-number-.jpg?height=300&width=300&query=flower arrangement number ${item}`}
                  alt={`Flower arrangement ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Image & Text */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/woman-holding-red-flower-bouquet.jpg"
                alt="Woman with red flowers"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-light text-foreground mb-2">graminee</h3>
              <p className="text-sm text-muted-foreground">生花空</p>
              <p className="text-xs text-muted-foreground mt-2">お花でお愛に</p>
            </div>
          </div>

          {/* Vertical Divider Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-1/2 w-px bg-border" />

          {/* Right - Contact Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-6">
              {/* Hours */}
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">木｜金｜土</p>
                  <p className="text-sm text-muted-foreground">14:00 - 18:00</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                    012-3456-789
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                    info@email.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">横浜</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
