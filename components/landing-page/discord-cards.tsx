'use client'
import { motion } from 'framer-motion'
import { SectionDivider } from './section-divider'

const discordIframes = [
  {
    name: 'CS 210',
    src: 'https://discord.com/widget?id=1183649805415743528&theme=dark',
  },

  {
    name: 'CS 460',
    src: 'https://discord.com/widget?id=1183649881026461747&theme=dark',
  },
  {
    name: 'CS 496',
    src: 'https://discord.com/widget?id=1328631404145152092&theme=dark',
  },
]

const DiscordCards = () => {
  return (
    <section className="container mb-12">
      <h1 className="sm:leading-loose font-roboto_condensed tracking-tight text-3xl text-center text-discordText mb-5 mt-10">
        Be part of the discussion
      </h1>
      <p className="font-dm_serif_display text-center text-slate-600 mb-10">
        Join the discord community, get help on homework, connect with peers and
        catch up on announcements.
      </p>
      <motion.ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center">
        {discordIframes.map((option, index) => (
          <motion.li key={index}>
            {' '}
            <h2 className="mb-1 font-roboto_condensed text-discordPurple font-semibold">
              {option.name}
            </h2>
            <iframe
              height="400"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              src={option.src}
            ></iframe>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default DiscordCards
