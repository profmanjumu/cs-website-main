import Link from 'next/link'

import { ContactTiles } from '@/components/shell/contact-tiles'
import { metaLines, sdsuCourseDisplay } from '@/components/hubs/course-display'
import { homeDescription, sdsuTabOrder } from '@/lib/data'

const courseRows = sdsuTabOrder.map((name) => ({
  name,
  ...sdsuCourseDisplay[name],
}))

export default function HomePage() {
  return (
    <main className="text-paper">
      <div className="px-6 sm:px-10 pt-[46px] pb-[26px]">
        <h1 className="font-display font-light text-[72px] leading-[0.94] tracking-[-0.035em] text-paper m-0 max-w-[12ch]">
          Manju&rsquo;s Classroom
        </h1>
      </div>

      <div className="bg-liberty px-6 sm:px-10 pt-6 pb-7">
        <p className="eyebrow text-paper/70 m-0 mb-3">Courses &middot; Fall 2026</p>
        <div className="flex flex-col">
          {courseRows.map((row) => (
            <Link
              key={row.name}
              href={`/sdsu?course=${row.param}`}
              className="rowlink grid grid-cols-[92px_1fr] sm:grid-cols-[92px_1fr_auto] gap-[18px] items-start sm:items-baseline py-[11px] no-underline shadow-[inset_0_-1px_0_rgba(233,233,237,0.16)] hover:text-inherit"
            >
              <span className="font-body font-normal text-[16px] text-vanilla">
                {row.name}
              </span>
              <span className="font-display font-normal text-[21px] text-band">
                {row.title}
              </span>
              <span className="text-[13px] text-paper/70 col-span-2 sm:col-span-1 sm:text-right">
                {metaLines(row.meta).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-6 sm:px-10 pt-[34px] pb-2.5">
        {homeDescription.body.map((para) => (
          <p
            key={para.slice(0, 40)}
            className="font-body font-light text-[15px] leading-[1.75] text-cadet m-0 mb-3 last:mb-0 max-w-[64ch]"
          >
            {para}
          </p>
        ))}
      </div>

      <div className="px-6 sm:px-10 pt-[30px] pb-5">
        <ContactTiles />
      </div>

      <div className="px-6 sm:px-10 pt-[22px] pb-11">
        <Link href="/sdsu" className="btn-primary">
          Enter the SDSU hub &rarr;
        </Link>
      </div>
    </main>
  )
}
