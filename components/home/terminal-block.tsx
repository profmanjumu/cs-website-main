'use client'

import { useEffect, useState } from 'react'

const MOODS = [
  'grading in progress.',
  'rewriting the lab spec.',
  'office closed. inbox open.',
  'lecture notes, pass two.',
  'waiting on student builds.',
] as const

export function TerminalBlock() {
  const [mood, setMood] = useState<(typeof MOODS)[number]>(MOODS[0])

  useEffect(() => {
    const index = Math.floor(Math.random() * MOODS.length)
    setMood(MOODS[index])
  }, [])

  return (
    <pre className="terminal" aria-label="Terminal">
      <span className="terminal-prompt">~$</span>{' '}
      <span className="terminal-cmd">whoami</span>
      {'\n'}
      lecturer. builds things.
      {'\n'}
      <span className="terminal-prompt">~$</span>{' '}
      <span className="terminal-cmd">mood --today</span>
      {'\n'}
      {mood}
    </pre>
  )
}
