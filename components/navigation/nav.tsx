'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Home, MenuIcon, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { liVariants, navLinks, showUcsdUi, ulVariants } from '@/lib/data'

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

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  const visibleLinks = navLinks.filter(
    (link) => showUcsdUi || !('ucsdOnly' in link && link.ucsdOnly)
  )

  const renderNavLabel = (link: (typeof navLinks)[number]) => {
    if (link.href === '/') {
      return <Home size={18} aria-hidden="true" />
    }
    return link.label
  }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-ink flex justify-end">
        <ul className="hidden sm:flex">
          {visibleLinks.map((link) => {
            const active = isActive(link.href)
            const isHome = link.href === '/'
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-label={isHome ? 'Home' : undefined}
                  title={isHome ? 'Home' : undefined}
                  className={[
                    'font-bricolage text-sm font-semibold',
                    isHome
                      ? 'px-4 py-3 inline-flex items-center justify-center'
                      : 'px-5 py-3 inline-block',
                    'border-l border-white/5',
                    'transition-colors duration-200',
                    active
                      ? 'bg-mulberry text-silverSoft'
                      : 'text-silver/70 hover:bg-mulberry hover:text-silverSoft',
                  ].join(' ')}
                >
                  {renderNavLabel(link)}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden absolute left-2 top-1.5 z-[60] p-2 text-silver/80 hover:text-silverSoft"
        >
          <MenuIcon size={20} />
        </button>
        <Link
          href="/"
          className="sm:hidden font-bricolage text-sm font-semibold text-silver/80 py-3"
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
              className="absolute right-4 top-4 p-2 text-silver/70 hover:text-silverSoft"
            >
              <X size={22} />
            </button>
            <motion.ul
              animate="show"
              initial="hidden"
              variants={ulVariants}
              className="h-full flex flex-col items-center justify-center gap-8"
            >
              {visibleLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <motion.li
                    variants={liVariants}
                    key={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      aria-label={link.href === '/' ? 'Home' : undefined}
                      className={[
                        'font-bricolage font-semibold text-lg inline-flex items-center gap-2',
                        active
                          ? 'text-mulberry'
                          : 'text-silver/80 hover:text-mulberry',
                      ].join(' ')}
                    >
                      {renderNavLabel(link)}
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
