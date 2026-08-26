'use client'

import { useEffect, useState } from 'react'

import ClassTabs from '@/components/classes/class-tabs'
import { HubTabBar } from '@/components/hubs/hub-tab-bar'
import { TopicsType } from '@/lib/types'

export type SdsuCourseBundle = {
  slug: string
  name: string
  title: string
  topics: TopicsType[]
  discordWidgetId: string
}

type SdsuHubProps = {
  courses: SdsuCourseBundle[]
}

export default function SdsuHub({ courses }: SdsuHubProps) {
  const tabs = courses.map((c) => c.name)
  const [activeName, setActiveName] = useState(tabs[0] ?? 'CS 210')
  const active =
    courses.find((c) => c.name === activeName) ?? courses[0] ?? null

  // Reset inner Syllabus/Topics/Resources tab when switching courses by remounting
  const [panelKey, setPanelKey] = useState(active?.slug ?? 'none')
  useEffect(() => {
    if (active) setPanelKey(active.slug)
  }, [active])

  if (!active) return null

  return (
    <div className="px-6 sm:px-12 pb-4 max-w-6xl mx-auto">
      <HubTabBar tabs={tabs} active={activeName} onChange={setActiveName} />

      <header className="text-center pt-2 pb-2 border-b border-plum/30 mb-2">
        <p className="eyebrow mb-3">
          San Diego State University &middot; Computer Science
        </p>
        <h1 className="font-bricolage font-extrabold tracking-[-1.5px] text-ink text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
          {active.name}
        </h1>
        <hr className="ruling-double" />
        <p className="font-bricolage text-xs font-medium tracking-wide text-inkMuted">
          Syllabus &nbsp;&middot;&nbsp; Topics &nbsp;&middot;&nbsp; Resources
        </p>
      </header>

      <ClassTabs
        key={panelKey}
        slug={active.slug}
        courseTitle={active.name}
        topics={active.topics}
        discordWidgetId={active.discordWidgetId}
        embedded
      />
    </div>
  )
}
