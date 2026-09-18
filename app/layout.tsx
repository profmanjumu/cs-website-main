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

const display = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-display',
})

const body = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
})

const mono = Martian_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
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
          'bg-paper text-ink-text antialiased font-body'
        )}
      >
        <div className="md:grid md:grid-cols-[210px_1fr] md:items-start">
          <SiteRail />
          <div className="min-w-0">{children}</div>
        </div>
      </body>
    </html>
  )
}
