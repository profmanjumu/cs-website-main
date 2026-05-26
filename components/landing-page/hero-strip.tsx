import Link from 'next/link'

import { classOptions, type ClassOption } from '@/lib/data'

// Course meta is keyed by class name so it stays stable even if hrefs change
// (some courses point to internal slugs, others to external pages).
const courseMeta: Record<string, { title: string; meta: string }> = {
  'CS 577': { title: 'Data Science', meta: 'Mon-Fri \u00b7 Summer 2026' },
  'CS 210': { title: 'Data Structures', meta: 'Tu / Th \u00b7 Fall 2026' },
  'CS 460': { title: 'Algorithms', meta: 'Tu / Th \u00b7 Fall 2026' },
  
  'Lego Robotics': {
    title: 'Upper Elementary School',
    meta: 'Jul 20 \u2013 Jul 24 \u00b7 UCSD Extended Studies',
  },
  '2D & 3D Game Programming': {
    title: 'Middle School',
    meta: 'Jul 6 \u2013 Jul 10 \u00b7 Sally Ride Science Academy',
  },
}

const CourseRow = ({ c }: { c: ClassOption }) => {
  const m = courseMeta[c.name]
  const inner = (
    <>
      <div className="course-code">{c.name}</div>
      <div className="course-title-sm group-hover:text-terra transition-colors">
        {m?.title ?? 'Course'}
      </div>
      <div className="course-meta-sm">{m?.meta ?? ''}</div>
    </>
  )
  return c.external ? (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block course-row group"
    >
      {inner}
    </a>
  ) : (
    <Link href={c.href} className="block course-row group">
      {inner}
    </Link>
  )
}

const HeroStrip = () => {
  const sdsu = classOptions.filter((c) => c.org === 'SDSU')
  const outreach = classOptions.filter((c) => c.org !== 'SDSU')

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_1px_2fr] max-w-[1100px] mx-auto px-6 sm:px-12 md:min-h-[68vh] items-stretch">
      {/* LEFT — courses + office hours */}
      <div className="py-9 flex flex-col gap-7">
        <div>
          <span className="section-tag">SDSU</span>
          {sdsu.map((c) => (
            <CourseRow key={c.href} c={c} />
          ))}
        </div>

        {outreach.length > 0 && (
          <div>
            <span className="section-tag">Sally Ride Science Summer 2026</span>
            {outreach.map((c) => (
              <CourseRow key={c.href} c={c} />
            ))}
          </div>
        )}

        <div>
          <span className="section-tag">Office Hours</span>
          <div className="oh-block">
            <div className="oh-row">
              <strong>Where</strong>
              <span>GMCS 538</span>
            </div>
            <div className="oh-row">
            <strong>When</strong>
            <span>TBD</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-rule my-7 mx-4" />

      {/* RIGHT — hero copy + affiliations */}
      <div className="py-9 md:px-9 flex flex-col justify-center">
       
        <h2 className="font-playfair font-black text-ink leading-[1.05] tracking-[-1px] text-[30px] sm:text-[38px] lg:text-[52px] mb-4 anim-fade-up">
          Building Systems <br />
          that <em className="italic text-terra">actually matter</em>
        </h2>
        <p className="font-playfair italic text-[16px] text-inkMuted leading-[1.65] border-l-[3px] border-terra pl-4 mb-5 anim-fade-up">
          A classroom where assignments have side quests.
        </p>
        <hr className="ruling" />
        <p className="text-[14px] leading-[1.82] text-inkMuted mb-3 drop-cap anim-fade-up">
          Every course here is built around one idea: the best way to understand a system is to build one. No toy problems. Students design, argue, implement, and defend real solutions to real constraints and walk away with something to show for it.
        </p>
        <p className="text-[14px] leading-[1.82] text-inkMuted mb-3 anim-fade-up">
          Whether it&rsquo;s tracing Dijkstra&rsquo;s algorithm on a weighted graph, benchmarking data structures head-to-head, or finding a story buried in the dataset the work is the learning.
        </p>
        <hr className="ruling-double" />
        <div className="flex gap-2.5 flex-wrap mt-1.5 anim-fade-up">
          <Link href="#courses" className="btn-ink">
            View Courses
          </Link>
          <Link href="/about" className="btn-ghost">
            About Me
          </Link>
        </div>

        <div className="mt-8 anim-fade-up">
          <span className="section-tag">Affiliations</span>
          <div>
            <span className="pill pill-terra">Bolts Robotics</span>
            <span className="pill pill-olive">Girls Who Code</span>
            <span className="pill">Sally Ride Science</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroStrip
