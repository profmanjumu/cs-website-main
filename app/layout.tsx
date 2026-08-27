import type { Metadata } from 'next'
import { Outfit, Manrope } from 'next/font/google'
import './globals.css'
import { SiteRail } from '@/components/navigation/site-rail'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: "Manju's Classroom",
  description: 'SDSU Computer Science — Manju Muralidharan Priya',
}

const display = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
})

const body = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
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
          display.variable,
          body.variable,
          'min-h-screen bg-ground text-paper antialiased font-body font-light'
        )}
      >
        <div className="min-h-screen md:grid md:grid-cols-[210px_1fr]">
          <SiteRail />
          <div className="bg-surface min-h-screen min-w-0">{children}</div>
        </div>
      </body>
    </html>
  )
}
