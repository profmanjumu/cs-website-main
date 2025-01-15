'use client'

import { useTheme } from 'next-themes'

export default function CalendarPage() {
  const { theme } = useTheme()
  return (
    <main className="flex flex-col items-center justify-center pt-20 h-full bg-gradient-to-r from-blue-50 to-blue-200">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=mmuralidharanpriya%40sdsu.edu&ctz=America%2FLos_Angeles"
        width="1000"
        height="800"
      ></iframe>
    </main>
  )
}
