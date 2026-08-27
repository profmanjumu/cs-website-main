'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

import { HubTabBar } from '@/components/hubs/hub-tab-bar'
import { classOptions, courseMeta, type ClassOption } from '@/lib/data'

function ProgramPanel({ course }: { course: ClassOption }) {
  const meta = courseMeta[course.name]

  return (
    <div className="bg-surface-panel border border-[rgba(233,233,237,0.12)] rounded-md overflow-hidden">
      {meta?.image && (
        <div className="relative w-full aspect-video bg-surface-rail border-b border-[rgba(233,233,237,0.12)]">
          <Image
            src={meta.image}
            alt={course.name}
            fill
            sizes="(min-width: 768px) 800px, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 sm:p-8">
        <p className="font-body font-normal text-[16px] text-vanilla mb-1">{course.name}</p>
        <h2 className="font-display font-normal text-[34px] tracking-[-0.025em] text-paper mb-2">
          {meta?.title ?? 'Program'}
        </h2>
        <p className="font-body font-light text-[13px] text-cadet mb-4">{meta?.meta ?? ''}</p>
        {meta?.description && (
          <p className="font-body font-light text-[15px] leading-[1.75] text-cadet mb-6">
            {meta.description}
          </p>
        )}
        <a
          href={course.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View program page
        </a>
      </div>
    </div>
  )
}

export default function OutreachHub() {
  const programs = useMemo(
    () => classOptions.filter((c) => c.org === 'SRS'),
    []
  )
  const tabs = programs.map((c) => c.name)
  const [active, setActive] = useState(tabs[0] ?? '')
  const current = programs.find((c) => c.name === active) ?? programs[0]

  return (
    <div className="px-6 sm:px-10 pb-11">
      <span className="eyebrow text-pink inline-block mb-4">Summer 2026</span>
      <HubTabBar tabs={tabs} active={active} onChange={setActive} />
      {current && <ProgramPanel course={current} />}
    </div>
  )
}
