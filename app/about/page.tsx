import Image from 'next/image'

import ClubLogos from '@/components/about/club-logos'
import PressFeatures from '@/components/about/press-features'
import { ContactTiles } from '@/components/shell/contact-tiles'
import { Misregister } from '@/components/ui/misregister'

export default function AboutPage() {
  return (
    <main className="text-ink-text">
      <div className="px-6 sm:px-10 pt-[46px] pb-[30px] grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-[30px] items-end">
        <div>
          <h1 className="m-0">
            <Misregister text="About Me" />
          </h1>
          <p className="font-body font-normal text-[18px] leading-[1.45] text-ink-text mt-5 mb-0 max-w-[48ch]">
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
            className="w-[200px] h-[270px] object-cover object-[50%_18%]"
            style={{
              boxShadow: '0 0 0 1.5px var(--purple)',
            }}
          />
        </div>
      </div>

      <div className="px-6 sm:px-10">
        <p className="section-bar">Biography</p>
        <h2 className="font-display font-semibold text-[34px] tracking-[0.01em] text-ink-text m-0 pt-5">
          Manju Muralidharan Priya
        </h2>
      </div>

      <div className="px-6 sm:px-10 pt-[34px] pb-1.5 grid grid-cols-1 md:grid-cols-2 gap-[26px]">
        <p className="measure font-body font-normal text-[15px] leading-[1.75] text-ink-text m-0">
          On campus, you&rsquo;ll find me in GMCS 538. I&rsquo;m the faculty advisor for Bolts Robotics and Girls Who Code, and I love nothing more than watching a student&rsquo;s first &ldquo;it works!&rdquo; moment.
        </p>
        <p className="measure font-body font-normal text-[15px] leading-[1.75] text-ink-text m-0">
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
