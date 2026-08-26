"use client"

import { useState } from "react"
import { NavBar, HeroSection } from "@/components/sections/hero"
import { ProcessSection } from "@/components/sections/process"
import { AppShowcaseSection } from "@/components/sections/app-showcase"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ResultsGallerySection } from "@/components/sections/results-gallery"
import { BonusSection } from "@/components/sections/bonus"
import { OfferSection } from "@/components/sections/offer"
import { FAQSection } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div className="min-h-screen bg-white selection:bg-purple-100 selection:text-[#5B2A86] antialiased overflow-x-hidden font-sans">
      <NavBar />
      <main>
        <HeroSection onReveal={() => setUnlocked(true)} />
        {unlocked && (
          <div className="animate-vsl-reveal">
            <ProcessSection />
            <AppShowcaseSection />
            <TestimonialsSection />
            <ResultsGallerySection />
            <BonusSection />
            <OfferSection />
            <FAQSection />
          </div>
        )}
      </main>
      {unlocked && <Footer />}
    </div>
  )
}
