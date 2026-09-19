'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { InstagramLogo, LinkedinLogo, List, X } from '@phosphor-icons/react'

import { cn } from '@/lib/utils'

function BrandMark({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <span
      className={cn(
        'relative inline-block flex-none',
        size === 'sm' ? 'h-5 w-5' : 'h-11 w-11'
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          'absolute inset-0 rounded-full bg-coral mix-blend-multiply',
          size === 'sm'
            ? 'translate-x-[1.5px] translate-y-[1.5px]'
            : 'translate-x-[3px] translate-y-[3px]'
        )}
      />
      <span className="relative block h-full w-full rounded-full bg-purple" />
    </span>
  )
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about' },
  { label: 'SDSU hub', href: '/sdsu' },
] as const

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/manju.mu?igsh=MzRlODBiNWFlZA==',
    Icon: InstagramLogo,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manjumu/',
    Icon: LinkedinLogo,
  },
] as const

function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  if (href === '/sdsu') {
    return (
      pathname === '/sdsu' ||
      pathname.startsWith('/cs210') ||
      pathname.startsWith('/cs250') ||
      pathname.startsWith('/cs460') ||
      pathname.startsWith('/cs577')
    )
  }
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteRail() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const links = (
    <nav className="flex flex-col gap-0.5" aria-label="Site">
      {navItems.map((item) => {
        const active = isActive(item.href, pathname)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              'font-body text-[14px] px-2.5 min-h-12 inline-flex items-center no-underline transition-colors duration-150',
              active
                ? 'bg-purple text-paper-on-ink hover:text-paper-on-ink'
                : 'text-ink-text hover:text-ink-text hover:bg-paper-deep'
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )

  const elsewhere = (
    <div className="mt-auto flex flex-col gap-2.5">
      <span className="eyebrow">Elsewhere</span>
      <span className="flex gap-3">
        {socialLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:text-purple inline-flex items-center justify-center min-h-12 min-w-12"
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        ))}
      </span>
      <span className="font-mono text-[12px] text-ink-muted">&copy; 2026</span>
    </div>
  )

  return (
    <>
      <header className="md:hidden sticky top-0 z-50 flex items-center justify-between gap-3 bg-paper px-4 border-b-[1.5px] border-purple">
        <Link
          href="/"
          className="flex items-center gap-2 min-h-12 text-ink-text hover:text-ink-text no-underline"
        >
          <BrandMark size="sm" />
          <span className="font-display font-semibold text-[17px] uppercase leading-none tracking-[0.01em] text-ink-text">
            Manju&rsquo;s Classroom
          </span>
        </Link>
        <button
          type="button"
          className="flex items-center justify-center w-12 h-12 -mr-1 text-ink-text"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <List size={22} aria-hidden="true" />
          )}
        </button>
      </header>

      <div
        className={cn(
          'md:hidden fixed inset-0 z-40',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        {open ? (
          <button
            type="button"
            aria-label="Close menu"
            className="nav-overlay absolute inset-0 bg-ink-text/30"
            onClick={() => setOpen(false)}
          />
        ) : null}
        <div
          id="mobile-site-nav"
          className={cn(
            'nav-overlay absolute top-0 right-0 flex h-full w-[min(20rem,86vw)] flex-col gap-8 bg-paper px-6 pb-8 pt-16 border-l-[1.5px] border-purple',
            open ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {links}
          {elsewhere}
        </div>
      </div>

      <aside className="hidden md:flex w-full bg-paper flex-col gap-8 px-[22px] py-7 md:sticky md:top-0 md:h-dvh md:border-r-[1.5px] md:border-purple">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink-text hover:text-ink-text no-underline"
        >
          <BrandMark />
          <span className="font-display font-semibold text-[19px] uppercase leading-[1.1] tracking-[0.01em] text-ink-text">
            Manju&rsquo;s
            <br />
            Classroom
          </span>
        </Link>
        {links}
        {elsewhere}
      </aside>
    </>
  )
}
