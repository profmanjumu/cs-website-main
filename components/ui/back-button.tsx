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
      className="fixed top-14 left-3 z-[60] inline-flex items-center gap-1.5 px-3 py-1.5 bg-silverSoft border border-plum/40 text-ink font-bricolage text-sm font-semibold shadow-sm hover:bg-slateRose/40 hover:border-mulberry transition-colors"
    >
      <ChevronLeftIcon size={14} />
      Back
    </button>
  )
}

export default BackButton
