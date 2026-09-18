'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from '@phosphor-icons/react'
import { TopicsType } from '@/lib/types'

export type TopicsProps = {
  topics: TopicsType[]
  /** Base path for topic links (e.g. `/cs210`). Defaults to current pathname. */
  basePath?: string
}

export const Topics = ({ topics, basePath }: TopicsProps) => {
  const pathname = usePathname()
  const root = basePath ?? pathname

  return (
    <ul className="flex flex-col m-0 p-0 list-none">
      {topics.map((link, index) => (
        <li key={link.id}>
          <Link
            href={`${root}/${encodeURI(link.name.split(' ').join('-'))}/${link.id}`}
            className="rowlink grid grid-cols-[1fr_auto] gap-3.5 items-center min-h-12 no-underline border-b-[1.5px] border-purple hover:text-inherit hover:bg-paper-deep"
          >
            <span>
              <span className="block font-mono font-normal text-[12px] tracking-[0.1em] uppercase text-ink-muted">
                Topic {String(index + 1).padStart(2, '0')}
              </span>
              <span className="block text-[15px] text-ink-text">{link.name}</span>
            </span>
            <ArrowUpRight size={15} className="text-purple shrink-0" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  )
}
