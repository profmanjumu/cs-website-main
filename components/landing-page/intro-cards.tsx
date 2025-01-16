'use client'
import { people } from '@/lib/data'
import { IntroCard } from './intro-card'
import { SectionDivider } from './section-divider'

export const IntroCards = () => {
  return (
    <section className="container p-10 rounded-lg relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="sm:leading-loose font-roboto_condensed tracking-tight text-3xl text-center text-discordPurpleHover mb-5">
          Meet the Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {people.map((person, index) => (
            <IntroCard key={index} {...person} />
          ))}
        </div>
      </div>
    </section>
  )
}
