'use client'
import Link from 'next/link'
import { liVariants, navLinks, ulVariants } from '@/lib/data'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import IconButton from '../ui/icon-button'

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
      <nav className="fixed top-0 w-full h-16 border-b border-rule backdrop-blur-lg z-[50] font-inter bg-paper/90">
        <div className="md:container md:max-w-4xl flex items-center w-full h-full">
          <div className="flex items-center justify-center w-full relative">
            <div className="hidden sm:block">
              <ul className="flex items-center gap-x-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`font-roboto_condensed transition-colors ${
                        pathname === link.href
                          ? 'text-academic underline underline-offset-8 decoration-2'
                          : 'text-ink/70 hover:text-academic'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute left-2 sm:hidden">
              <IconButton
                size="icon"
                variant="ghost"
                className="z-[999]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon className="z-[999]" />
              </IconButton>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="h-full w-screen z-[50] fixed bg-paper"
            variants={navVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.ul
              animate="show"
              initial="hidden"
              variants={ulVariants}
              className="h-full flex flex-col items-center justify-evenly font-roboto_condensed text-2xl"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  variants={liVariants}
                  key={index}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    className={
                      pathname === link.href
                        ? 'text-academic underline underline-offset-8 decoration-2'
                        : 'text-ink hover:text-academic transition-colors'
                    }
                    href={link.href}
                  >
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
