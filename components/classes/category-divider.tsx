import React from 'react'

type CategoryDividerProps = {
  children: React.ReactNode
  isResources?: boolean
}

const CategoryDivider = ({ children, isResources }: CategoryDividerProps) => {
  return (
    <div className={`${isResources ? 'mb-0' : 'mb-12'} h-full`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left">
          <h2 className="leading-loose font-roboto_condensed tracking-tight text-4xl text-discordPurple">
            {children}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default CategoryDivider
