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
      <p className="font-lora italic text-inkMuted">
        Resources for this course are not listed yet. See CONTENT_TODO.md.
      </p>
    )
  }

  return (
    <div className="space-y-6">
      {Object.entries(links).map(([topic, items]) => (
        <div key={topic}>
          <h3 className="font-bricolage text-sm font-semibold text-mulberry border-b border-mulberry pb-1.5 mb-3">
            {topic}
          </h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={`${item.name}-${item.href}`}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-lora text-[15px] text-ink hover:text-mulberry transition-colors underline underline-offset-2 decoration-plum/40"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
