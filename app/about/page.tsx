'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { people3D, peopleCWP } from '@/lib/data'

import { Separator } from '@/components/ui/separator'
import { IntroCard } from '@/components/landing-page/intro-card'
export default function AboutPage() {
  const [projects, setProjects] = useState([
    {
      name: '3D Printing Workshops',
      description:
        'An Outreach Program in collaboration with Miramar Ranch Elementary School , to bring 3D Modelling and Printing workshop to upper elementary students. The experience report will be submitted to SIGCSE 24',
      teamMembers: people3D,
    },
    {
      name: 'SDSU CS Website',
      description:
        'A Course Repository is in development for all Lower division CS courses at SDSU.',
      teamMembers: peopleCWP,
    },
  ])

  return (
    <main className="py-16 w-full flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="font-roboto_condensed p-20 text-center container">
        <div className="flex items-center justify-center w-full p-3">
          <Image
            src="/Manju.jpeg"
            alt="headshot"
            width="192"
            height="192"
            className="h-24 w-24 rounded-full object-cover border-[0.2rem] border-white shadow-xl"
          />
        </div>

        <h1 className="text-3xl text-center mb-5 font-roboto_condensed text-discordText">
          Hello! I am{' '}
          <span className="font-dm_serif_display text-5xl text-slate-600">
            Manju
          </span>
          , a CS Lecturer @ SDSU.
        </h1>
        <p className="mb-10 text-slate-600 font-dm_serif_display text-lg">
          On Campus, you'll find me in GMCS 564. I'm the faculty advisor for
          Aztec Robotics, Girls Who Code & App Development Club.
        </p>
        <p className="mb-10 text-slate-600 font-dm_serif_display text-lg">
          Off campus, I conduct STEAM workshops for Sally Ride Science (UCSD),
          in Lego Robotics, Circuit Theory & Python with Raspberry Pi &
          Makey-Makey. You will also find me dabbling in ceramics, practicing
          Bharathnatyam (an Indian classical dance form), building Legos or
          enjoying a smooth Flat White and sharing a sweet pastry with my
          spirited 8 year old son, at some local joint around town.
        </p>
        <Separator />
        <h1 className="text-2xl mt-8 mb-4 font-roboto_condensed text-discordText text-center">
          Past Projects
        </h1>
        {projects.map((project, index) => (
          <section
            key={index}
            className="container p-10 rounded-lg bg-slate-700 mb-10"
          >
            <div className="mb-10 text-slate-100 font-roboto_condensed text-lg">
              <h3 className="text-xl font-semibold text-discordPurpleHover">
                {project.name}
              </h3>
              <p className="font-dm_serif_display text-slate-100">
                {project.description}
              </p>
              <h4 className="mt-4 mb-2 text-discordPurpleHover">
                In Collaboration with:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.teamMembers.map((member, idx) => (
                  <IntroCard key={idx} {...member} />
                ))}
              </div>
            </div>
          </section>
        ))}
        <Separator />
      </div>
    </main>
  )
}
