import Link from 'next/link'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

// Swap the `href` values below in with the real links when you have them.
const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    Icon: SiInstagram,
  },
  {
    name: 'LinkedIn',
    href: '#',
    Icon: SiLinkedin,
  },
] as const

const Footer = () => {
  return (
    <footer className="w-full border-t border-rule mt-auto bg-paper">
      <div className="container max-w-5xl py-8 flex flex-col items-center gap-4">
        <ul className="flex items-center gap-8">
          {socialLinks.map(({ name, href, Icon }) => {
            const isExternal = href.startsWith('http')
            return (
              <li key={name}>
                <Link
                  href={href}
                  aria-label={name}
                  {...(isExternal && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  className="text-inkMuted hover:text-academic transition-colors duration-150"
                >
                  <Icon size={28} aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </ul>
        <p className="font-roboto_condensed text-sm text-inkMuted">
          © {new Date().getFullYear()} SDSU CS
        </p>
      </div>
    </footer>
  )
}

export default Footer
