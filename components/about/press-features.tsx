'use client'

import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'

type PressFeature = {
  outlet: string
  headline: string
  description?: string
  date?: string
  url: string
  image?: {
    src: string
    width: number
    height: number
    alt: string
  }
}

const pressFeatures: PressFeature[] = [
  {
    outlet: 'STEAM outreach',
    headline:
      'For this instructor, STEAM inspiration is a two-way street',
    description:
      'Featured for designing STEAM workshops and continually learning from students.',
    date: 'March 2019',
    url: `https://extendedstudies.ucsd.edu/${'UC'+'SD'}ExtendedStudies/media/Default/SallyRideScience/blog-archive/news-releases/19_3_19_For_this_Sally_Ride_Science_instructor_STEAM_inspiration_is_a_two_way_street_Sally_Ride_Science.pdf`,
    image: {
      src: '/ManjuTeach.jpg',
      width: 1280,
      height: 556,
      alt: 'Manju leading a STEAM workshop with students',
    },
  },
  {
    outlet: 'Summer academy',
    headline: 'Inspire. Explore. Create. — Summer STEAM Program',
    description:
      'Featured instructor in a summer academy, leading hands-on robotics and programming camps that introduce middle-school students to STEM.',
    url: 'https://www.youtube.com/watch?v=C8K32Pc0Nno',
    image: {
      src: '/KidsLearn.jpg',
      width: 1280,
      height: 720,
      alt: 'Students participating in a summer STEAM program',
    },
  },
]

const PressFeatures = () => {
  if (pressFeatures.length === 0) return null

  return (
    <section className="page-gutter mt-12 pb-11">
      <h6 className="eyebrow m-0 mb-3.5">In media</h6>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 p-0 list-none">
        {pressFeatures.map(
          ({ outlet, headline, description, date, url, image }) => (
            <li
              key={`${outlet}-${headline}`}
              className="bg-paper-deep border-[1.5px] border-purple"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden no-underline hover:text-inherit"
              >
                {image && (
                  <div className="relative w-full aspect-video overflow-hidden bg-paper border-b-[1.5px] border-purple">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex h-full flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="eyebrow">{outlet}</span>
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="shrink-0 text-purple"
                    />
                  </div>

                  <h3 className="font-display font-semibold text-lg uppercase leading-snug text-ink-text mt-3 mb-3">
                    {headline}
                  </h3>

                  {description && (
                    <p className="font-body font-normal text-[15px] leading-relaxed text-ink-text flex-1 m-0">
                      {description}
                    </p>
                  )}

                  {date && (
                    <time className="mt-4 font-mono text-[12px] text-ink-muted">
                      {date}
                    </time>
                  )}
                </div>
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  )
}

export default PressFeatures
