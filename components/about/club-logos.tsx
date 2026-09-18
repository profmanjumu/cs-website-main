const clubs = [
  {
    name: 'Bolts Robotics',
    meta: 'SDSU VexU',
    accent: 'border-coral',
  },
  {
    name: 'Girls Who Code',
    meta: 'SDSU College Loop',
    accent: 'border-coral',
  },
  {
    name: 'AWS Student Builder Group',
    meta: 'SDSU',
    accent: 'border-coral',
  },
  {
    name: 'Aztec Blockchain Group',
    meta: 'SDSU',
    accent: 'border-coral',
  },
] as const

const ClubLogos = () => {
  return (
    <section className="page-gutter pt-[30px]">
      <h6 className="eyebrow m-0 mb-3.5">Clubs</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 gap-x-5">
        {clubs.map((club) => (
          <div
            key={club.name}
            className={`border-l-[3px] ${club.accent} py-1 pl-3`}
          >
            <div className="font-body font-normal text-[17px] text-ink-text">
              {club.name}
            </div>
            <div className="font-mono text-[12px] text-ink-muted">{club.meta}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClubLogos
