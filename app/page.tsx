"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function GramineeHomepage() {
  return (
    <main className="bg-background text-foreground">
      {/* Full-Screen Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image src="/images/f1.png" alt="Graminee plants by the window" fill className="object-cover md:blur-none blur-[1px]" priority />

        <div className="absolute top-0 left-2 md:top-0 md:left-2 flex items-center justify-center font-sans">
          <div className="md:w-[165px] md:h-[53px] w-[120px] h-[40px] md:text-[32px] text-[24px] md:font-[200] font-[200] md:leading-[100%] leading-[100%] md:tracking-[0.17em] tracking-[0.15em] text-center flex items-center justify-center bg-transparent text-[#595959] md:text-[#E5E0D8]">
            graminēe
          </div>
        </div>

        {/* Mobile: Center overlay */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-center items-center px-6 py-12 text-center">
          <p className="font-semibold text-[13px] leading-[100%] tracking-[0.17em] text-center align-middle text-[#E5E0D8] w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        {/* Desktop: Bottom-left overlay */}
        <div className="hidden md:flex absolute bottom-8 left-2 flex-col max-w-md space-y-4">
          <p className="font-semibold text-[13px] leading-[100%] tracking-[0.17em] align-middle text-[#E5E0D8]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-0 sm:py-16 lg:py-20 px-0 sm:px-6 lg:px-8">
        {/* Mobile: Full-width image with overlay content */}
        <div className="md:hidden relative w-screen left-1/2 right-1/2 -mx-[50vw] min-h-[100svh]">
          <Image src="/images/f2.png" alt="Dried flowers arrangement" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col justify-between items-center px-6 pt-20 pb-24 text-center">
            {/* Title – positioned near top but not touching */}
            <h2 className="font-semibold text-[15px] tracking-[0.17em] text-[#E5E0D8]">Lorem ipsum</h2>

            {/* Paragraph – positioned near bottom but not touching */}
            <p className="text-sm  text-[13] text-[#E5E0D8] leading-[100%] max-w-[240px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Desktop: Grid layout without wrapper constraints */}
        {/* <div className="hidden md:grid grid-cols-2 gap-0 lg:gap-12 items-center">
          Left - Image
          <div className="relative w-[604px] h-[808px] overflow-hidden bg-amber-100 rounded-r-2xl -ml-8">
            <Image src="/images/f2.png" alt="Dried flowers arrangement" fill className="object-cover" />
          </div>

          Right - Text
          <div className="absolute left-[768px] w-[436px] h-[154px]">
            <h2 className="font-bold text-[15px] leading-[100%] tracking-[0.17em] text-[#595959] mb-4">Lorem Ipsum</h2>

            <p className="font-semibold text-[13px] leading-tight tracking-[0.17em] text-[#595959]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div> */}
        <div className="hidden md:grid grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative w-[604px] h-[808px] overflow-hidden rounded-r-2xl -ml-8">
            <Image src="/images/f2.png" fill className="object-cover" />
          </div>

          {/* Right Text – no absolute positioning */}
          <div className="flex flex-col justify-center max-w-[436px]">
            <h2 className="font-bold text-[15px] tracking-[0.17em] text-[#595959] mb-4">
              Lorem Ipsum
            </h2>

            <p className="font-semibold text-[13px] leading-tight tracking-[0.17em] text-[#595959]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto items-center">
          <h2 className="font-bold text-[15px] leading-[100%] text-center tracking-[0.17em] text-[#595959] mb-4">
            Our Gallery
          </h2>
          <h2 className="font-semibold text-[13px] leading-[100%] text-center tracking-[0.17em] text-[#595959] mb-4">
            Lorem ipsum dolor sit amet
          </h2>

          {/* Gallery Grid - Updated to display 4 custom flower images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
            {[
              { id: 1, src: "/images/gallery-1.png", alt: "Colorful mixed bouquet arrangement" },
              { id: 2, src: "/images/gallery-2.png", alt: "Hand holding mixed flowers bouquet" },
              { id: 3, src: "/images/gallery-3.png", alt: "Orange and peach flowers in vase" },
              { id: 4, src: "/images/gallery-4.png", alt: "Hand holding white peonies bouquet" },
              { id: 1, src: "/images/gallery-1.png", alt: "Colorful mixed bouquet arrangement" },
              { id: 2, src: "/images/gallery-2.png", alt: "Hand holding mixed flowers bouquet" },
              { id: 3, src: "/images/gallery-3.png", alt: "Orange and peach flowers in vase" },
              { id: 4, src: "/images/gallery-4.png", alt: "Hand holding white peonies bouquet" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative h-[478px] rounded-t-[100px] sm:rounded-[5rem] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-lg transition-shadow duration-300 mb-8"
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

        <div className="md:hidden flex flex-col w-full min-h-screen">
          {/* Header with Logo */}
          <div className="w-full bg-muted/40 px-6 py-8 text-center">
            <h3 className="text-[32px] font-thin leading-tight tracking-[0.17em] text-[#595959] text-foreground mb-1">
              graminēe
            </h3>
            <p className="text-[24px] font-light leading-tight tracking-[0.17em] text-[#595959] text-foreground">
              生花店
            </p>
          </div>

          <div className="relative w-full aspect-[3/4] max-h-[600px]">
            <Image src="/images/footer-hero.png" alt="Woman with red flowers" fill className="object-cover" />
          </div>

          {/* Contact Info */}

          <div className="w-full px-6 pt-4 py-12 space-y-8 flex flex-col items-center text-center bg-background min-h-screen">
            {/* Hours */}
            <div className="flex flex-col items-center space-y-4">
              <p className="text-[24px] font-light leading-tight tracking-[0.17em] text-[#595959] text-foreground">お花が<br />お家に</p>
              <Clock className="w-8 h-8 text-[#595959] stroke-[1] mt-4" />

              <p className="text-[24px] font-light leading-none tracking-[0.17em] text-foreground">{"木｜金｜土"}</p>
              <p className="text-[24px] font-light leading-none tracking-[0.17em] text-muted-foreground">
                14:00 - 18:00
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center space-y-4">
              <Phone className="w-8 h-8 text-[#595959] stroke-[1]" />

              <p className="text-[24px] font-light leading-none tracking-[0.17em] text-foreground">012-3456-789</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center space-y-4">
              <Mail className="w-8 h-8 text-[#595959] stroke-[1]" />

              <p className="text-[24px] font-light leading-none tracking-[0.17em] text-foreground">info@email.com</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center space-y-4">
              <MapPin className="w-8 h-8 text-[#595959] stroke-[1]" />

              <p className="text-[24px] font-light leading-none tracking-[0.17em] text-foreground">{"横浜"}</p>
            </div>
          </div>
        </div>

        <div className="hidden md:grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative px-6 lg:px-0 pt-20">
          {/* Left - Image & Text */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-[32px] font-light leading-tight tracking-[0.17em] text-[#595959] text-foreground mb-1">
                graminēe
              </h3>
              <p className="text-[24px] font-light leading-tight tracking-[0.17em] text-[#595959] text-foreground">
                生花店
              </p>
            </div>
            <div className="relative w-[405px] h-[541px] rounded-[20px] overflow-hidden mx-auto">
              <Image src="/images/footer-hero.png" alt="Woman with red flowers" fill className="object-cover" />
            </div>

            <div className="text-center">
              <p className="text-[24px] font-light leading-tight tracking-[0.17em] text-[#595959] text-foreground">お花が<br />お家に
              </p>
            </div>
          </div>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-px h-[827px] bg-[#999999]" />

          {/* Right - Contact Info */}
          <div className="flex flex-col items-center space-y-20">
            {/* Hours */}
            <div className="flex flex-col items-center space-y-4">
              <Clock className="w-8 h-8 text-[#595959] stroke-[1]" />

              <p className="text-[32px] font-light leading-none tracking-[0.17em] text-foreground">{"木｜金｜土"}</p>
              <p className="text-[32px] font-light leading-none tracking-[0.17em] text-muted-foreground">
                14:00 - 18:00
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center space-y-4">
              <Phone className="w-8 h-8 text-[#595959] stroke-[1]" />

              <p className="text-[32px] font-light leading-none tracking-[0.17em] text-foreground">012-3456-789</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center space-y-4">
              <Mail className="w-8 h-8 text-[#595959] stroke-[1]" />

              <p className="text-[32px] font-light leading-none tracking-[0.17em] text-foreground">info@email.com</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center space-y-4">
              <MapPin className="w-8 h-8 text-[#595959] stroke-[1]" />

              <p className="text-[32px] font-light leading-none tracking-[0.17em] text-foreground">{"横浜"}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
