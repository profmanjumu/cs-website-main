'use client'
import ClassCards from '@/components/landing-page/class-cards'
import DiscordCards from '@/components/landing-page/discord-cards'
import { IntroCards } from '@/components/landing-page/intro-cards'
import Title from '@/components/landing-page/title'
import { Separator } from '@radix-ui/react-separator'
export default async function Home() {
  return (
    <main className="flex flex-col items-center md:p-24 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full md:max-w-5xl">
        <Title />

        <ClassCards />
        <Separator />
        <IntroCards />
        <Separator />
        <DiscordCards />
      </div>
    </main>
  )
}
