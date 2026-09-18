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
    <main className="text-ink-text">
      <HomeConsoleEgg />
      <div className="px-6 sm:px-10 pt-[46px] pb-[26px] flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <h1 className="m-0">
          <Misregister text={"Manju\u2019s\nClassroom"} />
        </h1>
        <OfficeHoursPill />
      </div>

      <div className="px-6 sm:px-10">
        <p className="section-bar">Courses · Fall 2026</p>
        <div>
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

      <div className="px-6 sm:px-10 pt-[34px] pb-2.5 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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

      <div className="px-6 sm:px-10 pt-[30px] pb-5">
        <ContactTiles />
      </div>

      <div className="px-6 sm:px-10 pt-[22px] pb-6">
        <Link href="/sdsu" className="btn-primary">
          Enter the SDSU hub &rarr;
        </Link>
      </div>

      <p className="console-hint px-6 sm:px-10 pb-8">psst: open devtools</p>
    </main>
  )
}
