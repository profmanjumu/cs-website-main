'use client'

import { useEffect } from 'react'

export function HomeConsoleEgg() {
  useEffect(() => {
    console.log(
      '%cyou opened devtools. respect.',
      'color:#EE4B2E;font-size:14px;font-weight:600'
    )
    console.log(
      '%cbug on the site? email me, +coursenumber in the subject.',
      'color:#7A5F52'
    )
  }, [])

  return null
}
