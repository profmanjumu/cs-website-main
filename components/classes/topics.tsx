'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { TopicsType } from '@/lib/types'
import { liVariants, ulVariants } from '@/lib/data'
import { ExternalLinkIcon } from 'lucide-react'
import { useState } from 'react'
import Syllabus from './syllabus'

export type TopicsProps = {
  topics: TopicsType[]
}

export const Topics = ({ topics }: TopicsProps) => {
  const pathname = usePathname()
  const [topicName, setTopicName] = useState(topics[0].name)
  return (
    <div className="flex flex-row items-center justify-between font-roboto_condensed p-5">
      <div className="flex flex-col items-start w-full md:w-64">
        <motion.ul
          initial="hidden"
          animate="show"
          variants={ulVariants}
          className="flex flex-col items-start gap-y-6"
        >
          {topics.map((link, index) => {
            return (
              <motion.li variants={liVariants} key={index} className="gap-y-4">
                <Link
                  className="opacity-60 hover:opacity-100 transition-colors duration-150 flex flex-row gap-2 items-center"
                  href={`${pathname}/${encodeURI(
                    link.name.split(' ').join('-')
                  )}/${link.id}`}
                >
                  <span>{link.name}</span>

                  <ExternalLinkIcon size={20} />
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </div>
  )
}
