import type { Metadata } from 'next'
import { Bricolage_Grotesque, Lora } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/navigation/nav'
import Footer from '@/components/landing-page/footer'
import { cn } from '@/lib/utils'
import BackButton from '@/components/ui/back-button'

export const metadata: Metadata = {
  title: "Manju's Classroom",
  description: 'SDSU Computer Science — Manju Muralidharan Priya',
}

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
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
          bricolage.variable,
          lora.variable,
          'flex flex-col min-h-screen bg-silver text-ink antialiased font-lora'
        )}
      >
        <Nav />
        <BackButton />
        {children}
        <Footer />
      </body>
    </html>
  )
}
