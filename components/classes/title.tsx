import React from 'react'

import BackButton from '@/components/ui/back-button'
import { Misregister } from '@/components/ui/misregister'

type TitleProps = {
  children: React.ReactNode
  eyebrow?: string
  backHref?: string
  backLabel?: string
}

const Title = ({ children, eyebrow, backHref, backLabel }: TitleProps) => {
  return (
    <div className="page-gutter pt-8 pb-[22px]">
      {backHref && (
        <div className="mb-5">
          <BackButton href={backHref} label={backLabel ?? 'Back'} />
        </div>
      )}
      <p className="eyebrow m-0 mb-3.5">
        {eyebrow ?? 'San Diego State University \u00b7 Computer Science'}
      </p>
      <h1 className="m-0">
        {typeof children === 'string' ? (
          <Misregister text={children} />
        ) : (
          children
        )}
      </h1>
    </div>
  )
}

export default Title
