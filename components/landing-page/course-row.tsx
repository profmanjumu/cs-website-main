import Link from 'next/link'

import { metaLines } from '@/components/hubs/course-display'
import { classOptions, courseMeta, type ClassOption } from '@/lib/data'

type CourseRowProps = {
  name: string
  title: string
  meta?: string | readonly string[]
  href: string
}

function ghostNumber(name: string) {
  const digits = name.match(/\d+/)
  return digits ? digits[0] : name
}

export function CourseRow({ name, title, meta, href }: CourseRowProps) {
  return (
    <Link href={href} className="course-row">
      <span className="course-ghost" aria-hidden="true">
        {ghostNumber(name)}
      </span>
      <span className="course-row-copy">
        <span className="course-code">{name}</span>
        <span className="course-title">{title}</span>
      </span>
      <span className="course-meta">
        {metaLines(meta).map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    </Link>
  )
}

export function CourseList({ org }: { org: ClassOption['org'] }) {
  const list = classOptions.filter((c) => c.org === org)
  return (
    <div>
      {list.map((c) => {
        const meta = courseMeta[c.name]
        return (
          <CourseRow
            key={c.href}
            name={c.name}
            title={meta?.title ?? 'Course'}
            meta={meta?.meta}
            href={c.href}
          />
        )
      })}
    </div>
  )
}
