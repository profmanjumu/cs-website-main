'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { TopicsType } from '@/lib/types'
import { liVariants, ulVariants } from '@/lib/data'
import { ExternalLinkIcon } from 'lucide-react'

export type TopicsProps = {
  topics: TopicsType[]
}

export const Topics = ({ topics }: TopicsProps) => {
  const pathname = usePathname()

  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={ulVariants}
      className="flex flex-col"
    >
      {topics.map((link, index) => (
        <motion.li
          variants={liVariants}
          key={index}
          className="course-row group"
        >
          <Link
            href={`${pathname}/${encodeURI(link.name.split(' ').join('-'))}/${link.id}`}
            className="flex items-center justify-between gap-4"
          >
            <div>
              <div className="course-code">
                Topic {String(index + 1).padStart(2, '0')}
              </div>
              <div className="course-title-sm group-hover:text-terra transition-colors">
                {link.name}
              </div>
            </div>
            <ExternalLinkIcon
              size={16}
              className="text-inkMuted shrink-0 group-hover:text-terra transition-colors"
            />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
