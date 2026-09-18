'use client'

import { useEffect, useState } from 'react'

function isOfficeOpen(now = new Date()) {
  const day = now.getDay()
  const mins = now.getHours() * 60 + now.getMinutes()
  return (day === 2 || day === 4) && mins >= 570 && mins <= 630
}

export function OfficeHoursPill() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isOfficeOpen())
  }, [])

  return (
    <p
      className="office-pill"
      role="status"
      aria-live="polite"
    >
      <span
        className={open ? 'office-pill-dot is-open' : 'office-pill-dot'}
        aria-hidden="true"
      />
      {open
        ? 'office hours: open now'
        : 'office hours: closed / back tue 9:30'}
    </p>
  )
}
