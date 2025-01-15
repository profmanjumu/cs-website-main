import React from 'react'
import { Separator } from '../ui/separator'

type TitleProps = {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className="mb-12 h-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="leading-loose font-roboto_condensed tracking-tight text-5xl text-discordPurple">
            {children}
          </h2>
          <Separator />
        </div>
      </div>
    </div>
  )
}

export default Title
