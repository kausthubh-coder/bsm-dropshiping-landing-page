import './App.css'
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { WhatYouLearnSection } from "@/components/WhatYouLearnSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <TestimonialsSection />
        <SocialProofSection />
        <WhatYouLearnSection />
      </main>
    </>
  )
}

export default App
