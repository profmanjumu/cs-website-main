import React from 'react'

import BackButton from '@/components/ui/back-button'

type TitleProps = {
  children: React.ReactNode
  eyebrow?: string
  backHref?: string
  backLabel?: string
}

const Title = ({ children, eyebrow, backHref, backLabel }: TitleProps) => {
  return (
    <div className="px-6 sm:px-10 pt-8 pb-[22px]">
      {backHref && (
        <div className="mb-5">
          <BackButton href={backHref} label={backLabel ?? 'Back'} />
        </div>
      )}
      <p className="eyebrow text-pink m-0 mb-3.5">
        {eyebrow ?? 'San Diego State University \u00b7 Computer Science'}
      </p>
      <h1 className="font-display font-light text-[60px] leading-[0.95] tracking-[-0.035em] text-paper m-0">
        {children}
      </h1>
    </div>
  )
}

export default Title
