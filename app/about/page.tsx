import Image from 'next/image'

import { ContactTiles } from '@/components/shell/contact-tiles'
import ClubLogos from '@/components/about/club-logos'
import PressFeatures from '@/components/about/press-features'

export default function AboutPage() {
  return (
    <main className="text-paper">
      <div className="px-6 sm:px-10 pt-[46px] pb-[30px] grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-[30px] items-end">
        <div>
          <h1 className="font-display font-light text-[72px] leading-[0.94] tracking-[-0.035em] text-paper m-0">
            About Me
          </h1>
          <p className="font-display font-light text-[23px] leading-[1.4] tracking-[-0.01em] text-vanilla mt-5 mb-0 max-w-[48ch]">
            Lecturer in Computer Science at SDSU.
            <br />
            STEM instructor at UCSD Sally Ride Science.
          </p>
        </div>
        <div className="justify-self-start lg:justify-self-end w-[250px]">
          <Image
            src="/ManjuFancy.jpg"
            alt="Portrait of Professor Manju"
            width={200}
            height={270}
            priority
            quality={90}
            className="w-[200px] h-[270px] object-cover object-[50%_18%] rounded-md"
            style={{
              boxShadow:
                '0 0 0 1px rgba(233,233,237,0.18), 0 14px 34px rgba(0,0,0,0.55)',
            }}
          />
        </div>
      </div>

      <div className="bg-liberty px-6 sm:px-10 pt-[22px] pb-6">
        <p className="eyebrow text-paper/70 m-0 mb-2">Biography</p>
        <h2 className="font-display font-normal text-[34px] tracking-[-0.025em] text-band m-0">
          Manju Muralidharan Priya
        </h2>
      </div>

      <div className="px-6 sm:px-10 pt-[34px] pb-1.5 grid grid-cols-1 md:grid-cols-2 gap-[26px]">
        <p className="font-body font-light text-[15px] leading-[1.75] text-cadet m-0">
          On campus, you&rsquo;ll find me in GMCS 538. I&rsquo;m the faculty advisor for Bolts Robotics and Girls Who Code, and I love nothing more than watching a student&rsquo;s first &ldquo;it works!&rdquo; moment.
        </p>
        <p className="font-body font-light text-[15px] leading-[1.75] text-cadet m-0">
          Off campus, you&rsquo;ll find me dabbling in ceramics, hiking, practicing Bharathnatyam (an Indian classical dance form), building Legos, or enjoying a smooth flat white and a sweet pastry at some local joint around town.
        </p>
      </div>

      <div className="px-6 sm:px-10 pt-7">
        <ContactTiles />
      </div>

      <ClubLogos />

      <PressFeatures />
    </main>
  )
}
