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
      <p className="font-body font-light text-[14px] text-cadet m-0">
        Resources for this course are not listed yet. See CONTENT_TODO.md.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      {Object.entries(links).map(([topic, items]) => (
        <div key={topic}>
          <h6 className="eyebrow text-vanilla m-0 mb-2.5 pb-1.5 shadow-[inset_0_-1px_0_rgba(222,192,174,0.4)]">
            {topic}
          </h6>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Link
                key={`${item.name}-${item.href}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-light text-[13px] text-cadet no-underline px-2.5 py-[5px] border border-[rgba(233,233,237,0.16)] rounded-sm hover:border-lavender hover:text-paper"
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
