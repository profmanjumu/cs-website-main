'use client'

import { useState } from 'react'

import ResourcesPanel from '@/components/classes/resources-panel'
import Syllabus from '@/components/classes/syllabus'
import { Topics } from '@/components/classes/topics'
import { OfficeHoursBlock } from '@/components/shell/contact-tiles'
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
}: ClassTabsProps) {
  const [active, setActive] = useState<TabId>('syllabus')

  return (
    <div className="pb-11">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-[26px] items-start px-6 sm:px-10">
        <div>
          <div className="flex flex-wrap gap-2 mb-5">
            {tabLabels.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={[
                  'font-body font-medium text-[13px] tracking-[0.06em] uppercase px-3.5 py-2 rounded-sm cursor-pointer',
                  active === tab.id
                    ? 'bg-[rgba(139,127,172,0.22)] border border-lavender text-paper'
                    : 'bg-transparent border border-[rgba(233,233,237,0.16)] text-cadet hover:text-paper',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-surface-panel border border-[rgba(233,233,237,0.12)] rounded-md px-[26px] py-6 min-h-[320px]">
            {active === 'syllabus' && <Syllabus courseSlug={slug} />}
            {active === 'topics' && (
              <div>
                <p className="font-body font-light text-[14px] leading-[1.7] text-cadet border-l-2 border-lavender pl-3 mb-[18px] max-w-[60ch]">
                  Each topic below is linked to the corresponding slides, video
                  lectures and external resources.
                </p>
                {topics.length > 0 ? (
                  <Topics topics={topics} basePath={`/${slug}`} />
                ) : (
                  <p className="font-body font-light text-[14px] text-cadet m-0">
                    No topics found for this course folder.
                  </p>
                )}
              </div>
            )}
            {active === 'resources' && <ResourcesPanel slug={slug} />}
          </div>
        </div>

        <aside>
          <h6 className="eyebrow text-cadet m-0 mb-2.5">Latest</h6>
          <div className="border border-[rgba(233,233,237,0.14)] rounded-md overflow-hidden">
            <div className="px-3 py-2.5 font-body font-medium text-[12px] tracking-[0.04em] text-lavender shadow-[inset_0_-1px_0_rgba(233,233,237,0.12)]">
              Discord &middot; {courseTitle}
            </div>
            {discordWidgetId ? (
              <iframe
                src={`https://discord.com/widget?id=${discordWidgetId}&theme=dark`}
                width="100%"
                height="350"
                frameBorder={0}
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                title={`${courseTitle} Discord`}
                className="bg-surface-panel"
              />
            ) : (
              <div className="px-[18px] py-[26px] text-left">
                <p className="font-body font-light text-[13px] leading-[1.6] text-cadet m-0">
                  Course Discord widget mounts here.
                </p>
              </div>
            )}
          </div>
          <div className="mt-[18px]">
            <OfficeHoursBlock />
          </div>
        </aside>
      </div>
    </div>
  )
}
