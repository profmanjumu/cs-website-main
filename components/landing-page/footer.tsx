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
] as const

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-ink text-cream/80">
      <div className="border-t-[3px] border-double border-ink" />
      <div className="px-6 sm:px-12 py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 text-center sm:text-left">
        <div className="font-playfair font-black text-xl tracking-tight text-cream">
          Manju&rsquo;s Classroom
        </div>

        <div className="font-courier_prime text-[10px] tracking-[0.15em] uppercase text-cream/40 leading-[2]">
         
          <br />
         
        </div>

        <ul className="flex items-center gap-5 sm:gap-6">
          {socialLinks.map(({ name, href, Icon }) => (
            <li key={name}>
              <Link
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand hover:text-cream transition-colors duration-150"
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
