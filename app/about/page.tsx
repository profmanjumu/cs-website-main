import Image from 'next/image'
import PressFeatures from '@/components/about/press-features'

export default function AboutPage() {
  return (
    <main className="min-h-screen text-ink pt-40 pb-16">
      <div className="container max-w-4xl font-roboto_condensed">
        <section className="flex flex-col md:flex-row gap-10 md:gap-12 items-center md:items-start">
          <div className="shrink-0">
            <Image
              src="/ManjuFancy.jpg"
              alt="Portrait of Professor Manju"
              width={682}
              height={1024}
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 300px, 70vw"
              priority
              quality={90}
              className="w-[260px] sm:w-[300px] md:w-[300px] lg:w-[360px] h-auto rounded-2xl shadow-md ring-1 ring-rule"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="font-dm_serif_display text-4xl sm:text-5xl text-ink mb-2">
              About Me
            </h1>
            <div className="mx-auto md:mx-0 h-px w-16 bg-academic mb-8" />

            <div className="space-y-6 text-left">
              <p className="font-dm_serif_display text-lg leading-relaxed text-inkMuted">
                On Campus, you&apos;ll find me in GMCS 538. I&apos;m the
                faculty advisor for Bolts Robotics and Girls Who Code.
              </p>
              <p className="font-dm_serif_display text-lg leading-relaxed text-inkMuted">
                Off campus, I conduct STEAM workshops for Sally Ride Science
                (UCSD), in Lego Robotics, Circuit Theory &amp; Python with
                Raspberry Pi. You will also find me dabbling
                in ceramics, practicing Bharathnatyam (an Indian classical
                dance form), building Legos or enjoying a smooth Flat White
                and a sweet pastry, at
                some local joint around town.
              </p>
            </div>
          </div>
        </section>

        <PressFeatures />
      </div>
    </main>
  )
}
