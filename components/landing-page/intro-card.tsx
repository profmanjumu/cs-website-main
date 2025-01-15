import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { SectionDivider } from './section-divider'
import { GlobeIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type IntroCardProps = {
  name: string
  email: string
  image: string
  position?: string
  portfolioLink?: string
  discordName?: string
  officeHours?: string
}

export const IntroCard = ({
  name,
  image,
  email,
  position,
  portfolioLink,
  discordName,
  officeHours,
}: IntroCardProps) => {
  const [isPortfolioHovering, setIsPortfolioHovering] = useState(false)
  const [isDiscordHovering, setIsDiscordHovering] = useState(false)

  return (
    <Card className="min-w-[16rem]">
      <CardHeader className="flex items-center justify-center w-full p-3">
        {image ? (
          <Image
            src={image}
            alt="headshot"
            width="192"
            height="192"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.2rem] border-white shadow-xl"
          />
        ) : (
          <IoPersonCircleOutline className="w-24 h-24" />
        )}

        <CardTitle className="font-roboto_condensed text-lg text-discordText">
          {name}
        </CardTitle>

        <CardDescription className="font-dm_serif_display">
          {position}
        </CardDescription>
        <CardDescription className="font-dm_serif_display">
          {email}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        {portfolioLink && (
          <motion.a
            onMouseEnter={() => setIsPortfolioHovering(true)}
            onMouseLeave={() => setIsPortfolioHovering(false)}
            className="flex flex-row items-center gap-x-2"
            animate={{}}
            initial={{}}
            target="blank"
            href={portfolioLink}
          >
            <GlobeIcon size={20} />
            <AnimatePresence>
              {isPortfolioHovering && (
                <motion.span
                  className="font-roboto_condensed mr-2"
                  animate={{
                    x: 0,
                    transition: {
                      duration: 0.3,
                    },
                    opacity: 1,
                  }}
                  initial={{
                    opacity: 0,
                    x: '-50%',
                  }}
                  exit={{
                    x: '-50%',
                    transition: {
                      duration: 0.3,
                    },
                    opacity: 0,
                  }}
                >
                  Portfolio
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        )}
        {discordName && (
          <motion.a
            onMouseEnter={() => setIsDiscordHovering(true)}
            onMouseLeave={() => setIsDiscordHovering(false)}
            className="flex flex-row items-center gap-x-2"
            animate={{}}
            initial={{}}
          >
            {' '}
            <img src={'/discord.svg'} style={{ width: '25px' }} />
            <AnimatePresence>
              {isDiscordHovering && (
                <motion.span
                  className="font-roboto_condensed"
                  animate={{
                    x: 0,
                    transition: {
                      duration: 0.3,
                    },
                    opacity: 1,
                  }}
                  initial={{
                    opacity: 0,
                    x: '-50%',
                  }}
                  exit={{
                    x: '-50%',
                    transition: {
                      duration: 0.3,
                    },
                    opacity: 0,
                  }}
                >
                  {discordName}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        )}
      </CardFooter>
    </Card>
  )
}
