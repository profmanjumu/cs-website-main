import Link from 'next/link'

import { externalLinks210, externalLinks460 } from '@/lib/data'

type ResourcesPanelProps = {
  slug: string
}

export default function ResourcesPanel({ slug }: ResourcesPanelProps) {
  const links =
    slug === 'cs210'
      ? externalLinks210
      : slug === 'cs460'
      ? externalLinks460
      : null

  if (!links || Object.keys(links).length === 0) {
    return (
      <p className="font-body font-normal text-[14px] text-ink-text m-0">
        No resources Added
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      {Object.entries(links).map(([topic, items]) => (
        <div key={topic}>
          <h6 className="eyebrow m-0 mb-2.5 pb-1.5 border-b-[1.5px] border-purple">
            {topic}
          </h6>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Link
                key={`${item.name}-${item.href}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-12 font-body font-normal text-[13px] text-ink-text no-underline px-2.5 border-[1.5px] border-purple hover:bg-paper"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
