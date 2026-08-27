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
            className="rowlink grid grid-cols-[1fr_auto] gap-3.5 items-center py-2.5 no-underline shadow-[inset_0_-1px_0_rgba(233,233,237,0.1)] hover:text-inherit"
          >
            <span>
              <span className="block font-body font-medium text-[12px] tracking-[0.1em] uppercase text-vanilla">
                Topic {String(index + 1).padStart(2, '0')}
              </span>
              <span className="block text-[15px] text-paper">{link.name}</span>
            </span>
            <ArrowUpRight size={15} className="text-cadet shrink-0" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  )
}
