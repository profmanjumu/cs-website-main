'use client'

import Link from 'next/link'
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

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

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-surface-rail text-cadet">
      <div className="px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-start sm:justify-between gap-4">
        <p className="font-body font-medium text-xs text-cadet">
          &copy; {new Date().getFullYear()} Manju&rsquo;s Classroom
        </p>

        <ul className="flex items-center gap-5 sm:gap-6 m-0 p-0 list-none">
          {socialLinks.map(({ name, href, Icon }) => (
            <li key={name}>
              <Link
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:text-vanilla transition-colors duration-150"
              >
                <Icon size={22} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
