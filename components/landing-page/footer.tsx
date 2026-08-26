import Link from 'next/link'
import { SiInstagram, SiLinkedin } from 'react-icons/si'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/manju.mu?igsh=MzRlODBiNWFlZA==',
    Icon: SiInstagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manjumu/',
    Icon: SiLinkedin,
  },
  // TikTok: add href in CONTENT_TODO.md when available, then uncomment:
  // {
  //   name: 'TikTok',
  //   href: 'TIKTOK_URL_HERE',
  //   Icon: SiTiktok,
  // },
] as const

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-ink text-silver/80">
      <div className="px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-center sm:text-left">
        <p className="font-bricolage text-xs font-medium text-silver/45">
          &copy; {new Date().getFullYear()} Manju&rsquo;s Classroom
        </p>

        <ul className="flex items-center gap-5 sm:gap-6">
          {socialLinks.map(({ name, href, Icon }) => (
            <li key={name}>
              <Link
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slateRose hover:text-silverSoft transition-colors duration-150"
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
