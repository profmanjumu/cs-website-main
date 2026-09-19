'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { List, X } from '@phosphor-icons/react'

import { cn } from '@/lib/utils'

function BrandMark() {
  return (
    <span
      className="relative inline-block h-5 w-5 flex-none"
      aria-hidden="true"
    >
      <span className="absolute inset-0 rounded-full bg-coral mix-blend-multiply translate-x-[1.5px] translate-y-[1.5px]" />
      <span className="relative block h-full w-full rounded-full bg-purple" />
    </span>
  )
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about' },
  { label: 'SDSU hub', href: '/sdsu' },
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

function navLinkClass(active: boolean) {
  return cn(
    'font-mono text-[12px] uppercase tracking-[0.12em] text-ink-text hover:text-ink-text no-underline inline-flex items-center min-h-12 border-b-2',
    active ? 'border-coral' : 'border-transparent'
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

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

  const links = (layout: 'inline' | 'stack') => (
    <nav
      className={
        layout === 'inline'
          ? 'hidden md:flex items-center gap-6'
          : 'flex flex-col'
      }
      aria-label="Site"
    >
      {navItems.map((item) => {
        const active = isActive(item.href, pathname)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              navLinkClass(active),
              layout === 'stack' && 'w-full px-0'
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      <header className="site-header sticky top-0 z-50 flex items-center justify-between gap-3 bg-paper page-gutter border-b-[2.5px] border-purple">
        <Link
          href="/"
          className="flex items-center gap-2 min-h-12 text-ink-text hover:text-ink-text no-underline"
        >
          <BrandMark />
          <span className="font-display font-semibold text-[17px] uppercase leading-none tracking-[0.01em] text-ink-text">
            Manju&rsquo;s Classroom
          </span>
        </Link>

        {links('inline')}

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-12 h-12 -mr-1 text-ink-text"
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
        id="mobile-site-nav"
        className={cn(
          'md:hidden fixed inset-x-0 bottom-0 z-40 bg-paper page-gutter pt-4 pb-8 border-t-0',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        style={{ top: 'var(--site-header-height)' }}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <div
          className={cn(
            'nav-overlay h-full w-full',
            open ? 'opacity-100' : 'opacity-0'
          )}
        >
          {open ? links('stack') : null}
        </div>
      </div>
    </>
  )
}
