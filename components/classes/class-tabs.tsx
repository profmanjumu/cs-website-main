'use client'

import { useState } from 'react'

import ResourcesPanel from '@/components/classes/resources-panel'
import Syllabus from '@/components/classes/syllabus'
import { Topics } from '@/components/classes/topics'
import { TopicsType } from '@/lib/types'

type TabId = 'syllabus' | 'topics' | 'resources'

type ClassTabsProps = {
  slug: string
  courseTitle: string
  topics: TopicsType[]
  discordWidgetId?: string
  /** When true, omit outer page padding (for embedding inside SDSU hub). */
  embedded?: boolean
}

const tabLabels: { id: TabId; label: string }[] = [
  { id: 'syllabus', label: 'Syllabus' },
  { id: 'topics', label: 'Topics' },
  { id: 'resources', label: 'Resources' },
]

export default function ClassTabs({
  slug,
  courseTitle,
  topics,
  discordWidgetId,
  embedded = false,
}: ClassTabsProps) {
  const [active, setActive] = useState<TabId>('syllabus')

  return (
    <div
      className={
        embedded
          ? 'pb-16 max-w-6xl mx-auto'
          : 'px-6 sm:px-12 pb-16 max-w-6xl mx-auto'
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 pt-4">
        <div>
          <div className="flex flex-wrap border-b border-plum/30 mb-6">
            {tabLabels.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={[
                  'font-bricolage text-sm font-bold px-5 py-3 border-b-2 -mb-px transition-colors',
                  active === tab.id
                    ? 'border-mulberry text-mulberry'
                    : 'border-transparent text-inkMuted hover:text-ink',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-silverSoft/60 border border-plum/20 p-4 sm:p-6 min-h-[280px]">
            {active === 'syllabus' && <Syllabus courseSlug={slug} />}
            {active === 'topics' && (
              <div>
                <p className="font-lora italic text-inkMuted border-l-[3px] border-mulberry pl-4 mb-6 max-w-prose">
                  Each topic below is linked to the corresponding slides, video
                  lectures and external resources.
                </p>
                {topics.length > 0 ? (
                  <Topics topics={topics} basePath={`/${slug}`} />
                ) : (
                  <p className="font-lora italic text-inkMuted">
                    No topics found for this course folder.
                  </p>
                )}
              </div>
            )}
            {active === 'resources' && <ResourcesPanel slug={slug} />}
          </div>
        </div>

        <aside>
          <span className="section-tag">Latest</span>
          <div className="border border-plum/30 bg-silverSoft overflow-hidden">
            <div className="px-3 py-2 border-b border-plum/20 font-bricolage text-xs font-semibold tracking-wide text-stormy">
              Discord &middot; {courseTitle}
            </div>
            {discordWidgetId ? (
              <iframe
                src={`https://discord.com/widget?id=${discordWidgetId}&theme=light`}
                width="100%"
                height="350"
                frameBorder={0}
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                title={`${courseTitle} Discord`}
                className="bg-white"
              />
            ) : (
              <div className="p-6 text-center">
                <p className="font-lora italic text-sm text-inkMuted">
                  Discord widget ID not set for{' '}
                  <code className="font-bricolage text-[11px]">{slug}</code>.
                  See CONTENT_TODO.md.
                </p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
