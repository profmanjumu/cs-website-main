import Footer from '@/components/landing-page/footer'
import HeroStrip from '@/components/landing-page/hero-strip'
import Masthead from '@/components/landing-page/masthead'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-cream text-ink">
      <Masthead />
      <HeroStrip />
      <div className="flex-1" />
      <Footer />
    </main>
  )
}
