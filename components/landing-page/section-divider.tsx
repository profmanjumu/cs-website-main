export const SectionDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-5 h-full">
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <h2 className="sm:leading-loose font-display tracking-tight text-3xl md:text-4xl pt-24 md:pt-12 mb-24 text-vanilla">
            {children}
          </h2>
        </div>
      </div>
    </div>
  )
}
