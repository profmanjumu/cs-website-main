import { notFound } from 'next/navigation'

import HomePage from '@/components/home/home-page'

/**
 * Homepage hold: shows 404 until SITE_HOLD=false is set (e.g. in .env.local or on the host).
 * Default is hold mode so pushes to main stay hidden on production.
 */
export default function Home() {
  if (process.env.SITE_HOLD !== 'false') {
    notFound()
  }

  return <HomePage />
}
