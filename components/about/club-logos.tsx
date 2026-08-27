const clubs = [
  {
    name: 'Bolts Robotics',
    meta: 'SDSU VexU',
    accent: 'border-lavender',
  },
  {
    name: 'Girls Who Code',
    meta: 'SDSU College Loop',
    accent: 'border-pink',
  },
  {
    name: 'AWS Student Builder Group',
    meta: 'SDSU',
    accent: 'border-cadet',
  },
  {
    name: 'Aztec Blockchain Group',
    meta: 'SDSU',
    accent: 'border-vanilla',
  },
] as const

const ClubLogos = () => {
  return (
    <section className="px-6 sm:px-10 pt-[30px]">
      <h6 className="eyebrow text-vanilla m-0 mb-3.5">Clubs</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 gap-x-5">
        {clubs.map((club) => (
          <div
            key={club.name}
            className={`border-l-[3px] ${club.accent} py-1 pl-3`}
          >
            <div className="font-body font-normal text-[17px] text-paper">
              {club.name}
            </div>
            <div className="text-[12px] text-cadet">{club.meta}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClubLogos
