'use client'
import Link from 'next/link'
import SearchDialog from '../search/search-dialog'
import { ModeToggle } from '../ui/theme-toggle'
import { liVariants, navLinks, ulVariants } from '@/lib/data'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Calculator from '../grade-calculator/calculator'
import IconButton from '../ui/icon-button'
import AboutPage from '@/app/about/page'

const navVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.5 },
  },
}

export const Nav = () => {
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false)
      }
    })
    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth > 640) {
          setIsMenuOpen(false)
        }
      })
    }
  }, [])

  return (
    <>
      <nav className="fixed top-0 w-full h-16 border-b border-muted-foreground backdrop-blur-lg z-[50] font-inter bg-discordPurple">
        <div className="md:container md:max-w-4xl flex items-center w-full h-full">
          <div className="flex items-center justify-between w-full">
            <div className="hidden sm:block">
              <ul className="flex items-center gap-x-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`ml-6 font-roboto_condensed text-gray-50 ${
                        pathname === link.href
                          ? 'underline opacity-100'
                          : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="ml-6">
                  <Calculator />
                </li>
              </ul>
            </div>
            <div className="sm:hidden block">
              <IconButton
                size="icon"
                variant="ghost"
                className="z-[999] ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon className="z-[999]" />
              </IconButton>
            </div>

            <div className="flex items-center gap-x-4 mr-2 md:mr-0"></div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="h-full w-screen z-[50] fixed bg-gradient-to-r from-blue-50 to-blue-200"
            variants={navVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.ul
              animate="show"
              initial="hidden"
              variants={ulVariants}
              className="h-full flex flex-col items-center justify-evenly"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  variants={liVariants}
                  key={index}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link className="text-secondary-foreground" href={link.href}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
