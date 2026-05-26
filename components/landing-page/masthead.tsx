import Link from 'next/link'

import { classOptions } from '@/lib/data'

const Masthead = () => {
  const sdsuClasses = classOptions.filter((c) => c.org === 'SDSU')
  const outreachClasses = classOptions.filter((c) => c.org !== 'SDSU')

  return (
    <header className="px-6 sm:px-12 border-b-[3px] border-double border-ink anim-fade-up">
      {/* Top meta strip */}
      <div className="flex flex-wrap items-center justify-between gap-x-6 py-2.5 border-b border-rule">
        <span className="meta"></span>
        <span className="meta hidden md:inline"> San Diego, CA</span>
        <span className="meta">Summer 2026</span>
      </div>

      {/* Main three-column masthead */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 py-5 text-center md:text-left">
        {/* Left — class roster (SDSU + Sally Ride Science) */}
        <div className="hidden md:block font-courier_prime text-[11px] tracking-[0.12em] text-inkMuted leading-[2.2]">
          {sdsuClasses.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="block hover:text-terra transition-colors"
            >
              {c.name} &middot; {c.org}
            </Link>
          ))}
          {outreachClasses.length > 0 && (
            <>
              <span className="block h-px w-10 bg-rule my-1" aria-hidden="true" />
              {outreachClasses.map((c) =>
                c.external ? (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-terra transition-colors"
                  >
                    {c.name} &middot; {c.org}
                  </a>
                ) : (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block hover:text-terra transition-colors"
                  >
                    {c.name} &middot; {c.org}
                  </Link>
                )
              )}
            </>
          )}
        </div>

        {/* Center — wordmark */}
        <h1 className="font-playfair font-black text-ink leading-[0.88] tracking-[-3px] text-[52px] sm:text-[72px] lg:text-[104px] whitespace-nowrap">
          Manju&rsquo;s
          <br />
          Classroom
        </h1>

        {/* Right — contact meta */}
        <div className="hidden md:block text-right font-courier_prime text-[11px] tracking-[0.12em] text-inkMuted leading-[2.2]">
          <span className="block">Office Hours: TBD</span>
          <span className="block">GMCS 538</span>
        </div>
      </div>

    </header>
  )
}

export default Masthead
