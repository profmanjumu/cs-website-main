import Link from 'next/link'

import { classOptions, courseMeta, type ClassOption } from '@/lib/data'

export function CourseRow({ c }: { c: ClassOption }) {
  const m = courseMeta[c.name]
  const inner = (
    <>
      <div className="course-code">{c.name}</div>
      <div className="course-title-sm group-hover:text-mulberry transition-colors">
        {m?.title ?? 'Course'}
      </div>
      <div className="course-meta-sm">{m?.meta ?? ''}</div>
    </>
  )
  return c.external ? (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block course-row group"
    >
      {inner}
    </a>
  ) : (
    <Link href={c.href} className="block course-row group">
      {inner}
    </Link>
  )
}

export function CourseList({ org }: { org: ClassOption['org'] }) {
  const list = classOptions.filter((c) => c.org === org)
  return (
    <div>
      {list.map((c) => (
        <CourseRow key={c.href} c={c} />
      ))}
    </div>
  )
}
