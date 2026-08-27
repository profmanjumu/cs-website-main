'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeft } from '@phosphor-icons/react'

type BackButtonProps = {
  href?: string
  label?: string
}

const BackButton = ({ href, label = 'Back' }: BackButtonProps) => {
  const { back } = useRouter()

  const className =
    'btn-primary inline-flex items-center gap-2 text-[15px] no-underline'

  const inner = (
    <>
      <ArrowLeft size={18} aria-hidden="true" />
      {label}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    )
  }

  return (
    <button type="button" onClick={() => back()} aria-label={label} className={className}>
      {inner}
    </button>
  )
}

/** Shown on /cs210/topic-name/id pages generated from the Topics list. */
export function TopicPageBack() {
  const pathname = usePathname()
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length < 3) return null

  const slug = parts[0]
  const match = slug.match(/^cs(\d+)$/i)
  if (!match) return null

  return (
    <div className="sticky top-0 z-20 bg-surface px-6 sm:px-10 pt-6 pb-2">
      <BackButton href={`/sdsu?course=cs-${match[1]}`} label="Back to course" />
    </div>
  )
}

export default BackButton
