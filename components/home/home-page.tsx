import Link from 'next/link'

import { homeDescription } from '@/lib/data'

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 bg-silver text-ink">
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-16 max-w-3xl mx-auto w-full text-center">
        <h1 className="font-bricolage font-extrabold text-ink tracking-[-2px] text-[48px] sm:text-[64px] lg:text-[80px] leading-[0.92] mb-8 anim-fade-up">
          Manju&rsquo;s Classroom
        </h1>

        <div className="w-full bg-silverSoft border border-plum/30 px-6 sm:px-8 py-6 text-left anim-fade-up mb-10">
          <p className="font-lora italic text-[16px] text-inkMuted leading-[1.65] border-l-[3px] border-mulberry pl-4 mb-4">
            {homeDescription.deck}
          </p>
          {homeDescription.body.map((para) => (
            <p
              key={para.slice(0, 40)}
              className="font-lora text-[15px] leading-[1.82] text-inkMuted mb-3 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="w-full max-w-sm anim-fade-up">
          <Link href="/sdsu" className="hub-cta block w-full">
            SDSU
          </Link>
          {/* UCSD CTA kept in codebase — re-enable with showUcsdUi:
          <Link href="/ucsd" className="hub-cta block w-full mt-4">UCSD</Link>
          */}
        </div>
      </div>
    </main>
  )
}
