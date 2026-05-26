import Image from 'next/image'

import PressFeatures from '@/components/about/press-features'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Page header */}
      <header className="px-6 sm:px-12 pt-16 pb-8 border-b-[3px] border-double border-ink">
        <div className="max-w-5xl mx-auto text-center">
          <p className="eyebrow mb-3">
            San Diego State University &middot; Computer Science
          </p>
          <h1 className="font-playfair font-black tracking-[-1.5px] text-ink text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
            About Me
          </h1>
          <hr className="ruling-double" />
          <p className="font-courier_prime text-[10px] tracking-[0.25em] uppercase text-inkMuted">
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
              className="w-[260px] sm:w-[300px] md:w-[300px] lg:w-[360px] h-auto border border-rule shadow-sm"
            />
          </div>

          <div className="flex-1">
            <span className="section-tag">Biography</span>
            <h2 className="font-playfair font-black text-ink text-3xl sm:text-4xl mb-4">
              Manju Muralidharan Priya
            </h2>
            <p className="font-playfair italic text-inkMuted border-l-[3px] border-terra pl-4 mb-6">
              Lecturer in Computer Science at SDSU. STEAM educator. Faculty advisor for Bolts Robotics &amp; Girls Who Code.
            </p>

            <p className="font-playfair text-[15px] leading-[1.82] text-inkMuted mb-4 drop-cap">
              On campus, you&rsquo;ll find me in GMCS 538. I&rsquo;m the faculty advisor for Bolts Robotics and Girls Who Code, and I love nothing more than watching a student&rsquo;s first &ldquo;it works!&rdquo; moment.
            </p>
            <p className="font-playfair text-[15px] leading-[1.82] text-inkMuted mb-6">
              Off campus, I conduct STEAM workshops for Sally Ride Science (UCSD) in Lego Robotics, Circuit Theory and Python with Raspberry Pi. You&rsquo;ll also find me dabbling in ceramics, hiking, practicing Bharathnatyam (an Indian classical dance form), building Legos, or enjoying a smooth flat white and a sweet pastry at some local joint around town.
            </p>

            <hr className="ruling-double" />
            <div className="mt-2">
              <span className="pill pill-terra">Bolts Robotics - SDSU VexU</span>
              <span className="pill pill-olive">Girls Who Code - SDSU College Loop</span>
              <span className="pill">Sally Ride Science - UCSD</span>
            </div>
          </div>
        </section>

        <PressFeatures />
      </div>
    </main>
  )
}
