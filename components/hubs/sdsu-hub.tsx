'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import ClassTabs from '@/components/classes/class-tabs'
import { HubTabBar } from '@/components/hubs/hub-tab-bar'
import {
  courseNameFromParam,
  sdsuCourseDisplay,
} from '@/components/hubs/course-display'
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
  initialCourse?: string
}

export default function SdsuHub({ courses, initialCourse }: SdsuHubProps) {
  const router = useRouter()
  const tabs = courses.map((c) => c.name)
  const [activeName, setActiveName] = useState(
    () => courseNameFromParam(initialCourse, tabs)
  )
  const active =
    courses.find((c) => c.name === activeName) ?? courses[0] ?? null

  const [panelKey, setPanelKey] = useState(active?.slug ?? 'none')

  useEffect(() => {
    const names = courses.map((c) => c.name)
    const name = courseNameFromParam(initialCourse, names)
    if (name) setActiveName(name)
  }, [initialCourse, courses])

  useEffect(() => {
    if (active) setPanelKey(active.slug)
  }, [active])

  const onChange = (name: string) => {
    setActiveName(name)
    const param = sdsuCourseDisplay[name]?.param
    if (param) {
      router.replace(`/sdsu?course=${param}`, { scroll: false })
    }
  }

  if (!active) return null

  const display = sdsuCourseDisplay[active.name]

  return (
    <div>
      <HubTabBar tabs={tabs} active={activeName} onChange={onChange} />

      <header className="px-6 sm:px-10 pt-8 pb-[22px]">
        <p className="eyebrow text-pink m-0 mb-3.5">
          San Diego State University &middot; Computer Science
        </p>
        <h1 className="font-display font-light text-[60px] leading-[0.95] tracking-[-0.035em] text-paper m-0">
          {active.name}
        </h1>
        <p className="font-display font-light text-[26px] text-vanilla mt-2.5 mb-0">
          {display?.title ?? active.title}
        </p>
        <p className="font-body font-light text-[13px] text-cadet mt-1 mb-0">
          {display?.meta ?? 'Tu / Th \u00b7 Fall 2026'}
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
