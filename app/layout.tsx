import type { Metadata } from 'next'
import { Courier_Prime, DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/navigation/nav'
import { cn } from '@/lib/utils'
import BackButton from '@/components/ui/back-button'

export const metadata: Metadata = {
  title: "Manju's Classroom",
  description: 'SDSU Computer Science — Manju Muralidharan Priya',
}

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-courier-prime',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className="!scroll-smooth"
      lang="en"
      suppressHydrationWarning={true}
    >
      <head />
      <body
        className={cn(
          playfair.variable,
          courierPrime.variable,
          dmSans.variable,
          'flex flex-col min-h-screen bg-cream text-ink antialiased font-dm_sans'
        )}
      >
        <Nav />
        <BackButton />
        {children}
      </body>
    </html>
  )
}
