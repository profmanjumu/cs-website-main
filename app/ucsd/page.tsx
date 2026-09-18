import { redirect } from 'next/navigation'

import OutreachHub from '@/components/hubs/ucsd-hub'
import { showUcsdUi } from '@/lib/data'

export default function OutreachHubPage() {
  if (!showUcsdUi) {
    redirect('/')
  }

  return (
    <main>
      <header className="page-gutter pt-8 pb-[22px]">
        <p className="eyebrow text-pink m-0 mb-3.5">Extended Studies</p>
        <h1 className="font-display font-light text-[60px] leading-[0.95] tracking-[-0.035em] text-paper m-0">
          Outreach
        </h1>
        <p className="font-display font-light text-[23px] text-vanilla mt-5 mb-0 max-w-[48ch]">
          STEAM programs — Lego Robotics and Game Programming.
        </p>
      </header>

      <OutreachHub />
    </main>
  )
}
