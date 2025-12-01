import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProcessSection from '@/components/ProcessSection'
import WhoSection from '@/components/WhoSection'
import OutdoorsSection from '@/components/OutdoorsSection'
import SafetySection from '@/components/SafetySection'
import LandownersSection from '@/components/LandownersSection'
import BeliefsSection from '@/components/BeliefsSection'
import FaqSection from '@/components/FaqSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProcessSection />
      <WhoSection />
      <OutdoorsSection />
      <SafetySection />
      <LandownersSection />
      <BeliefsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

