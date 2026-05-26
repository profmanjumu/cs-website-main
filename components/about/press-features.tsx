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

const pressFeatures: PressFeature[] = [
  {
    outlet: 'Sally Ride Science',
    headline:
      'For this Sally Ride Science instructor, STEAM inspiration is a two-way street',
    description:
      'Featured in Sally Ride Science: “STEAM inspiration is a two-way street” — designing STEAM workshops and continually learning from my students.',
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
      'Inspire. Explore. Create. — Summer STEAM Program',
    description:
      'Featured instructor in the UC San Diego Sally Ride Science Summer Academy, leading hands-on robotics and programming camps that introduce middle-school students to STEM.',
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
      <span className="section-tag">Outreach &amp; Press</span>
      <h2 className="font-playfair font-black text-ink text-3xl sm:text-4xl mb-6">
        Featured in
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
        {pressFeatures.map(
          ({ outlet, headline, description, date, url, image }) => (
            <li key={`${outlet}-${headline}`} className="bg-cream">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden transition-colors hover:bg-cream2"
              >
                {image && (
                  <div className="relative w-full aspect-video overflow-hidden bg-cream2 border-b border-rule">
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
                    <span className="press-outlet">{outlet}</span>
                    <ExternalLink
                      size={14}
                      aria-hidden="true"
                      className="shrink-0 text-inkMuted transition-colors group-hover:text-terra"
                    />
                  </div>

                  <hr className="ruling" />

                  <h3 className="font-playfair italic text-lg leading-snug text-ink mb-3">
                    {headline}
                  </h3>

                  {description && (
                    <p className="font-playfair text-[15px] leading-relaxed text-inkMuted flex-1">
                      {description}
                    </p>
                  )}

                  {date && (
                    <time className="mt-4 font-courier_prime text-[10px] tracking-[0.15em] uppercase text-inkMuted">
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
