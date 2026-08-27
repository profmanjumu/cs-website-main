'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { InstagramLogo, LinkedinLogo, List, X } from '@phosphor-icons/react'

import { cn } from '@/lib/utils'

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

  const wordmark = (
    <Link href="/" className="flex items-center gap-2.5 text-paper hover:text-paper">
      <Image
        src="/sticker.png"
        alt=""
        width={44}
        height={44}
        className="w-11 h-auto flex-none"
        priority
      />
      <span className="font-display font-normal text-[19px] leading-[1.1] tracking-[-0.02em] text-paper">
        Manju&rsquo;s
        <br />
        Classroom
      </span>
    </Link>
  )

  const links = (
    <nav className="flex flex-col gap-0.5">
      {navItems.map((item) => {
        const active = isActive(item.href, pathname)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              'font-body text-[14px] px-2.5 py-2 rounded-sm no-underline transition-colors duration-150',
              active
                ? 'bg-vanilla text-ink hover:text-ink'
                : 'text-cadet hover:text-cadet hover:bg-[rgba(139,127,172,0.18)]'
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
      <span className="eyebrow text-cadet">Elsewhere</span>
      <span className="flex gap-3">
        {socialLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink hover:text-vanilla inline-flex"
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        ))}
      </span>
      <span className="text-[11px] text-cadet">&copy; 2026</span>
    </div>
  )

  return (
    <aside className="bg-surface-rail flex flex-col gap-8 px-[22px] py-7 md:sticky md:top-0 md:h-screen md:shadow-[inset_-1px_0_0_rgba(233,233,237,0.12)]">
      <div className="flex items-center justify-between gap-3">
        {wordmark}
        <button
          type="button"
          className="md:hidden text-cadet hover:text-paper p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>
      <div className={cn('flex-col gap-8 flex-1', open ? 'flex' : 'hidden md:flex')}>
        {links}
        {elsewhere}
      </div>
    </aside>
  )
}
