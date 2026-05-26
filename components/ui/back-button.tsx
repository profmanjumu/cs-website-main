'use client'

import { usePathname, useRouter } from 'next/navigation'

import { ChevronLeftIcon } from 'lucide-react'

const BackButton = () => {
  const pathname = usePathname()
  const { back } = useRouter()
  if (pathname === '/') return null
  return (
    <button
      type="button"
      onClick={() => back()}
      aria-label="Go back"
      className="fixed top-14 left-3 z-[60] inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream border border-rule text-ink font-courier_prime text-[10px] tracking-[0.18em] uppercase shadow-sm hover:bg-cream2 hover:border-inkMuted transition-colors"
    >
      <ChevronLeftIcon size={14} />
      Back
    </button>
  )
}

export default BackButton
