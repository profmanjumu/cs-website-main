import Link from 'next/link'

import { HomeConsoleEgg } from '@/components/home/home-console-egg'
import { OfficeHoursPill } from '@/components/home/office-hours-pill'
import { TerminalBlock } from '@/components/home/terminal-block'
import { sdsuCourseDisplay } from '@/components/hubs/course-display'
import { CourseRow } from '@/components/landing-page/course-row'
import { ContactTiles } from '@/components/shell/contact-tiles'
import { Misregister } from '@/components/ui/misregister'
import { homeDescription, sdsuTabOrder } from '@/lib/data'

const courseRows = sdsuTabOrder.map((name) => ({
  name,
  ...sdsuCourseDisplay[name],
}))

export default function HomePage() {
  return (
    <main className="w-full text-ink-text">
      <HomeConsoleEgg />
      <div className="home-hero page-gutter pt-10 pb-8">
        <h1 className="m-0">
          <Misregister text={"Manju\u2019s Classroom"} />
        </h1>
        <OfficeHoursPill />
      </div>

      <div className="page-gutter">
        <p className="section-bar">Courses · Fall 2026</p>
        <div className="course-index">
          {courseRows.map((row) => (
            <CourseRow
              key={row.name}
              name={row.name}
              title={row.title}
              meta={row.meta}
              href={`/sdsu?course=${row.param}`}
            />
          ))}
        </div>
      </div>

      <div className="home-intro page-gutter pt-10 pb-2.5">
        <div>
          {homeDescription.body.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="measure font-body font-normal text-[15px] leading-[1.75] text-ink-text m-0 mb-3 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>
        <TerminalBlock />
      </div>

      <div className="page-gutter pt-8 pb-5">
        <ContactTiles />
      </div>

      <div className="page-gutter pt-6 pb-6">
        <Link href="/sdsu" className="btn-primary">
          Enter the SDSU hub &rarr;
        </Link>
      </div>

      <p className="console-hint page-gutter pb-8">psst: open devtools</p>
    </main>
  )
}
