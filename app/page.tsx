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
        <Image src="/images/f1.png" alt="Graminee plants by the window" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6 sm:p-8">
          <p className="text-white text-sm sm:text-base max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-0 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8">
        {/* Mobile: Full-width image with overlay content */}
        <div className="md:hidden relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[600px] sm:h-[500px]">
          <Image src="/images/f2.png" alt="Dried flowers arrangement" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-center items-center px-6 py-12 text-center">
            <h2 className="text-2xl font-light text-white text-balance mb-4">Lorem Ipsum</h2>
            <p className="text-sm text-white/90 leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Desktop: Grid layout without wrapper constraints */}
        <div className="hidden md:grid grid-cols-2 gap-0 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative w-full h-auto overflow-hidden bg-amber-100 rounded-r-2xl -ml-8">
            <Image
              src="/images/f2.png"
              alt="Dried flowers arrangement"
              width={800}
              height={1200}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Right - Text */}
          <div className="space-y-4 sm:space-y-6 px-8 lg:px-0">
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

          {/* Gallery Grid - Updated to display 4 custom flower images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { id: 1, src: "/images/gallery-1.png", alt: "Colorful mixed bouquet arrangement" },
              { id: 2, src: "/images/gallery-2.png", alt: "Hand holding mixed flowers bouquet" },
              { id: 3, src: "/images/gallery-3.png", alt: "Orange and peach flowers in vase" },
              { id: 4, src: "/images/gallery-4.png", alt: "Hand holding white peonies bouquet" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative h-[406px] rounded-t-[5rem] sm:rounded-[5rem] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-lg transition-shadow duration-300 mb-8"
              >
                <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <section id="contact" className="w-full py-0 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
        <div className="hidden md:block h-px bg-[#999999] w-full mb-12" />

        <div className="md:hidden flex flex-col w-full">
          {/* Header with Logo */}
          <div className="w-full bg-muted/40 px-6 py-8 text-center">
            <h3 className="text-lg font-light text-foreground mb-1">graminee</h3>
            <p className="text-sm text-muted-foreground">生花店</p>
          </div>

          <div className="relative w-full aspect-[3/4] max-h-[600px]">
            <Image src="/images/footer-hero.png" alt="Woman with red flowers" fill className="object-cover" />
          </div>

          {/* Contact Info */}
          <div className="w-full px-6 py-12 space-y-8 flex flex-col items-center text-center bg-background">
            {/* Tagline */}
            <p className="text-sm text-muted-foreground max-w-xs">お花がお家に</p>

            {/* Hours */}
            <div className="space-y-2">
              <Clock className="w-5 h-5 text-muted-foreground mx-auto" />
              <p className="text-sm font-light text-foreground">木｜金｜土</p>
              <p className="text-sm text-muted-foreground">14:00～18:00</p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Phone className="w-5 h-5 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                012-3456-789
              </p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Mail className="w-5 h-5 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                info@email.com
              </p>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <MapPin className="w-5 h-5 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground">横浜</p>
            </div>
          </div>
        </div>

        <div className="hidden md:grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative px-6 lg:px-0">
          {/* Left - Image & Text */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="/images/footer-hero.png" alt="Woman with red flowers" fill className="object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-light text-foreground mb-2">graminee</h3>
              <p className="text-sm text-muted-foreground">生花空</p>
              <p className="text-xs text-muted-foreground mt-2">お花でお愛に</p>
            </div>
          </div>

          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-px bg-[#999999]" />

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
