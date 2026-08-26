import { redirect } from 'next/navigation'

import UcsdHub from '@/components/hubs/ucsd-hub'
import { showUcsdUi } from '@/lib/data'

export default function UcsdHubPage() {
  // Route + component kept in codebase; hide from visitors while showUcsdUi is false.
  if (!showUcsdUi) {
    redirect('/')
  }

  return (
    <main className="flex-1 bg-silver text-ink">
      <header className="px-6 sm:px-12 pt-14 pb-6 border-b border-plum/30">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-2">
            UCSD Extended Studies &middot; Sally Ride Science
          </p>
          <h1 className="font-bricolage font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
            UCSD
          </h1>
          <p className="font-lora italic text-inkMuted mt-3 border-l-[3px] border-stormy pl-4">
            Outreach STEAM programs — Lego Robotics and Game Programming.
          </p>
        </div>
      </header>

      <UcsdHub />
    </main>
  )
}
