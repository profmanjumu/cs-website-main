'use client'
import {
  externalLinks210,
  liVariants,
  ulVariants,
  externalLinks460,
} from '@/lib/data'
import { usePathname } from 'next/navigation'
import React from 'react'
import CategoryDivider from './category-divider'
import { ExternalLinkIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const ExternalLinks = () => {
  const pathname = usePathname()
  const urlKey = pathname.split('/')[2].split('-').join(' ')
  const csClass = pathname.split('/')[1]

  return (
    <section className="mb-12">
      <div className="flex flex-col container">
        <CategoryDivider isResources={true}>Resources</CategoryDivider>
        <motion.ul
          animate="show"
          initial="hidden"
          variants={ulVariants}
          className="flex flex-col gap-4"
        >
          {Object.entries(
            csClass === 'cs210' ? externalLinks210 : externalLinks460
          ).map(([key, values]) => {
            if (key === urlKey) {
              return values.map((link, index) => (
                <motion.li
                  variants={liVariants}
                  className="opacity-60 hover:opacity-100 transition-colors duration-150 "
                  key={index}
                >
                  <a
                    className="flex flex-row gap-2 items-center"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{link.name}</span>
                    <span>
                      <ExternalLinkIcon size={20} />
                    </span>
                  </a>
                </motion.li>
              ))
            } else {
              return null
            }
          })}
        </motion.ul>
      </div>
    </section>
  )
}

export default ExternalLinks
