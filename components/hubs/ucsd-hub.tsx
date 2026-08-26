'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

import { HubTabBar } from '@/components/hubs/hub-tab-bar'
import { classOptions, courseMeta, type ClassOption } from '@/lib/data'

function ProgramPanel({ course }: { course: ClassOption }) {
  const meta = courseMeta[course.name]

  return (
    <div className="bg-silverSoft border border-plum/30 overflow-hidden">
      {meta?.image && (
        <div className="relative w-full aspect-video bg-slateRose/30 border-b border-plum/20">
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
        <p className="course-code mb-1">{course.name}</p>
        <h2 className="font-bricolage font-extrabold text-2xl sm:text-3xl text-ink mb-2">
          {meta?.title ?? 'Program'}
        </h2>
        <p className="course-meta-sm mb-4">{meta?.meta ?? ''}</p>
        {meta?.description && (
          <p className="font-lora text-[15px] leading-[1.75] text-inkMuted mb-6">
            {meta.description}
          </p>
        )}
        <a
          href={course.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ink"
        >
          View on UCSD Extended Studies
        </a>
      </div>
    </div>
  )
}

export default function UcsdHub() {
  const programs = useMemo(
    () => classOptions.filter((c) => c.org === 'SRS'),
    []
  )
  const tabs = programs.map((c) => c.name)
  const [active, setActive] = useState(tabs[0] ?? '')
  const current = programs.find((c) => c.name === active) ?? programs[0]

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-12 py-10">
      <span className="section-tag">Sally Ride Science Summer 2026</span>
      <HubTabBar tabs={tabs} active={active} onChange={setActive} />
      {current && <ProgramPanel course={current} />}
    </div>
  )
}
