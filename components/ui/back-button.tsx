'use client'

import { usePathname, useRouter } from 'next/navigation'

import React from 'react'
import { Button } from './button'
import { ChevronLeftIcon } from 'lucide-react'

const BackButton = () => {
  const pathname = usePathname()
  const { back } = useRouter()
  if (pathname === '/') return null
  return (
    <Button
      className="ml-4 fixed top-20 left-2 z-[999] bg-paper hover:bg-paperHover text-ink border border-rule shadow-sm transition-colors"
      onClick={() => back()}
      variant={null}
      size="icon"
    >
      <span>
        <ChevronLeftIcon />
      </span>
    </Button>
  )
}

export default BackButton
