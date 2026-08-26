import { showUcsdUi } from '@/lib/data'

const clubs = [
  {
    name: 'Bolts Robotics - SDSU VexU',
    file: 'public/clubs/bolts-robotics.png',
    ucsdOnly: false,
  },
  {
    name: 'Girls Who Code - SDSU College Loop',
    file: 'public/clubs/girls-who-code.png',
    ucsdOnly: false,
  },
  {
    name: 'Sally Ride Science - UCSD',
    file: 'public/clubs/sally-ride-science.png',
    ucsdOnly: true,
  },
  {
    name: 'SDSU CS',
    file: 'public/clubs/sdsu-cs.png',
    ucsdOnly: false,
  },
] as const

const ClubLogos = () => {
  const visible = clubs.filter((c) => showUcsdUi || !c.ucsdOnly)

  return (
    <section className="mt-20">
      <span className="section-tag">Clubs</span>
      <h2 className="font-bricolage font-extrabold text-ink text-3xl sm:text-4xl mb-6">
        Clubs
      </h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {visible.map((club) => (
          <li
            key={club.name}
            className="bg-silverSoft border border-dashed border-plum/40 aspect-square flex flex-col items-center justify-center p-4 text-center gap-3"
          >
            <div
              className="w-14 h-14 rounded-full bg-slateRose/50 border border-plum/30"
              aria-hidden="true"
            />
            <span className="font-bricolage text-xs font-medium text-inkMuted leading-snug">
              {club.name}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 font-bricolage text-[10px] text-inkMuted/70">
        Drop logo files into the paths listed in CONTENT_TODO.md to replace these
        placeholders.
      </p>
    </section>
  )
}

export default ClubLogos
