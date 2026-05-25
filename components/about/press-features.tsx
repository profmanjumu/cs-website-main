import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

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

// Add as many entries as you'd like — they line up horizontally and the row
// becomes scrollable when the cards exceed the container width.
const pressFeatures: PressFeature[] = [
  {
    outlet: 'Sally Ride Science',
    headline:
      'For this Sally Ride Science instructor, STEAM inspiration is a two-way street',
    description:
      'Featured in Sally Ride Science: “STEAM inspiration is a two-way street” — where I talk about designing STEAM workshops and how I continually learn from my students.',
    date: 'March 2019',
    url: 'https://extendedstudies.ucsd.edu/UCSDExtendedStudies/media/Default/SallyRideScience/blog-archive/news-releases/19_3_19_For_this_Sally_Ride_Science_instructor_STEAM_inspiration_is_a_two_way_street_Sally_Ride_Science.pdf',
    image: {
      src: '/ManjuTeach.jpg',
      width: 1280,
      height: 556,
      alt: 'Manju leading a STEAM workshop with students',
    },
  },
  {
    outlet: 'Sally Ride Science Academy',
    headline:
      'Inspire. Explore. Create. | Sally Ride Science Academy Summer STEAM Program',
    description:
      'Featured instructor in the UC San Diego Sally Ride Science Summer Academy, leading hands-on robotics and programming camps that introduce middle-school students to STEM in a fun, project-based environment.',
    url: 'https://www.youtube.com/watch?v=C8K32Pc0Nno',
    image: {
      src: '/KidsLearn.jpg',
      width: 1280,
      height: 720,
      alt: 'Students participating in the Sally Ride Science Summer STEAM Program',
    },
  },
]

const PressFeatures = () => {
  if (pressFeatures.length === 0) return null

  return (
    <section className="mt-20">
      <h2 className="font-dm_serif_display text-3xl sm:text-4xl text-ink mb-2">
        Featured in
      </h2>
      <div className="h-px w-16 bg-academic mb-8" />

      <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4">
        {pressFeatures.map(
          ({ outlet, headline, description, date, url, image }) => (
            <li
              key={`${outlet}-${headline}`}
              className="snap-start shrink-0 w-[320px] sm:w-[360px] lg:w-[400px]"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-rule bg-card transition-colors duration-150 hover:border-ink"
              >
                {image && (
                  <div className="relative w-full aspect-video overflow-hidden bg-muted">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 360px, 320px"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex h-full flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-roboto_condensed text-xs uppercase tracking-[0.18em] text-inkMuted transition-colors group-hover:text-ink">
                      {outlet}
                    </span>
                    <ExternalLink
                      size={14}
                      aria-hidden="true"
                      className="shrink-0 text-inkMuted transition-colors group-hover:text-ink"
                    />
                  </div>

                  <div className="my-4 h-px w-full bg-rule" />

                  <h3 className="font-dm_serif_display text-lg leading-snug text-ink mb-3">
                    {headline}
                  </h3>

                  {description && (
                    <p className="font-dm_serif_display text-base leading-relaxed text-inkMuted flex-1">
                      {description}
                    </p>
                  )}

                  {date && (
                    <time className="mt-4 font-roboto_condensed text-sm text-inkMuted">
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
