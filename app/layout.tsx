import type { Metadata } from 'next'
import {
  Big_Shoulders_Display,
  Instrument_Sans,
  Martian_Mono,
} from 'next/font/google'
import './globals.css'
import { SiteRail } from '@/components/navigation/site-rail'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: "Manju's Classroom",
  description: 'SDSU Computer Science — Manju Muralidharan Priya',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const display = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-display',
  adjustFontFallback: false,
})

const body = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  adjustFontFallback: false,
})

const mono = Martian_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  adjustFontFallback: false,
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
          mono.variable,
          'min-h-dvh bg-paper text-ink-text antialiased font-body'
        )}
      >
        <div className="w-full min-h-dvh min-w-0 md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)]">
          <SiteRail />
          <div className="content-shell min-w-0 w-full">{children}</div>
        </div>
      </body>
    </html>
  )
}
