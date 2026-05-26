'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MenuIcon, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { liVariants, navLinks, ulVariants } from '@/lib/data'

const navVariants = {
  hidden: { y: '-100vh', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.4 },
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
    const onResize = () => {
      if (window.innerWidth > 640) setIsMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-ink flex justify-center">
        {/* Desktop links */}
        <ul className="hidden sm:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    'font-courier_prime text-[10px] tracking-[0.18em] uppercase',
                    'px-5 py-3 inline-block border-r border-white/5',
                    'transition-colors duration-200',
                    active
                      ? 'bg-terra text-cream'
                      : 'text-cream/60 hover:bg-terra hover:text-cream',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden absolute left-2 top-1.5 z-[60] p-2 text-cream/80 hover:text-cream"
        >
          {isMenuOpen ? <MenuIcon size={20} /> : <MenuIcon size={20} />}
        </button>
        {/* Mobile wordmark center */}
        <Link
          href="/"
          className="sm:hidden font-courier_prime text-[10px] tracking-[0.2em] uppercase text-cream/80 py-3"
        >
          Manju&rsquo;s Classroom
        </Link>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed inset-0 z-[55] h-full w-screen bg-ink"
            variants={navVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 p-2 text-cream/70 hover:text-cream"
            >
              <X size={22} />
            </button>
            <motion.ul
              animate="show"
              initial="hidden"
              variants={ulVariants}
              className="h-full flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <motion.li
                    variants={liVariants}
                    key={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={[
                        'font-courier_prime tracking-[0.2em] uppercase text-lg',
                        active ? 'text-terra' : 'text-cream/80 hover:text-terra',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
