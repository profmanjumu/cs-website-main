import Image from 'next/image'

import PressFeatures from '@/components/about/press-features'
import ClubLogos from '@/components/about/club-logos'
import { showUcsdUi } from '@/lib/data'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-silver text-ink">
      <header className="px-6 sm:px-12 pt-16 pb-8 border-b border-plum/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="eyebrow mb-3">
            San Diego State University &middot; Computer Science
          </p>
          <h1 className="font-bricolage font-extrabold tracking-[-1.5px] text-ink text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
            About Me
          </h1>
          <hr className="ruling-double" />
          <p className="font-bricolage text-xs font-medium tracking-wide text-inkMuted">
            Educator &nbsp;&middot;&nbsp; Mentor
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-12 pb-20">
        <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
          <div className="shrink-0 mx-auto md:mx-0">
            <Image
              src="/ManjuFancy.jpg"
              alt="Portrait of Professor Manju"
              width={682}
              height={1024}
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 300px, 70vw"
              priority
              quality={90}
              className="w-[260px] sm:w-[300px] md:w-[300px] lg:w-[360px] h-auto border border-plum/40 shadow-sm"
            />
          </div>

          <div className="flex-1">
            <span className="section-tag">Biography</span>
            <h2 className="font-bricolage font-extrabold text-ink text-3xl sm:text-4xl mb-4">
              Manju Muralidharan Priya
            </h2>
            <p className="font-lora italic text-inkMuted border-l-[3px] border-mulberry pl-4 mb-6">
              Lecturer in Computer Science at SDSU. STEAM educator. Faculty advisor for Bolts Robotics &amp; Girls Who Code.
            </p>

            <p className="font-lora text-[15px] leading-[1.82] text-inkMuted mb-4 drop-cap">
              On campus, you&rsquo;ll find me in GMCS 538. I&rsquo;m the faculty advisor for Bolts Robotics and Girls Who Code, and I love nothing more than watching a student&rsquo;s first &ldquo;it works!&rdquo; moment.
            </p>
            {/* Full UCSD / Sally Ride Science paragraph kept in code — shown when showUcsdUi is true */}
            {showUcsdUi ? (
              <p className="font-lora text-[15px] leading-[1.82] text-inkMuted mb-6">
                Off campus, I conduct STEAM workshops for Sally Ride Science (UCSD) in Lego Robotics, Circuit Theory and Python with Raspberry Pi. You&rsquo;ll also find me dabbling in ceramics, hiking, practicing Bharathnatyam (an Indian classical dance form), building Legos, or enjoying a smooth flat white and a sweet pastry at some local joint around town.
              </p>
            ) : (
              <p className="font-lora text-[15px] leading-[1.82] text-inkMuted mb-6">
                Off campus, you&rsquo;ll find me dabbling in ceramics, hiking, practicing Bharathnatyam (an Indian classical dance form), building Legos, or enjoying a smooth flat white and a sweet pastry at some local joint around town.
              </p>
            )}
          </div>
        </section>

        {showUcsdUi && <PressFeatures />}
        <ClubLogos />
      </div>
    </main>
  )
}
