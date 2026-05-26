import React from 'react'

type TitleProps = {
  children: React.ReactNode
  eyebrow?: string
}

const Title = ({ children, eyebrow }: TitleProps) => {
  return (
    <div className="px-6 sm:px-12 pt-12 pb-6 border-b-[3px] border-double border-ink">
      <div className="max-w-5xl mx-auto text-center">
        <p className="eyebrow mb-3">
          {eyebrow ?? 'San Diego State University \u00b7 Computer Science'}
        </p>
        <h1 className="font-playfair font-black tracking-[-1.5px] text-ink text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
          {children}
        </h1>
        <hr className="ruling-double" />
        <p className="font-courier_prime text-[10px] tracking-[0.25em] uppercase text-inkMuted">
          Syllabus &nbsp;&middot;&nbsp; Topics &nbsp;&middot;&nbsp; Resources
        </p>
      </div>
    </div>
  )
}

export default Title
