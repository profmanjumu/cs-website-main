import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'

const Header = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent className="flex md:flex-row flex-col items-center justify-between gap-4">
        <Image
          src="/headshot.svg"
          alt="headshot"
          width={150}
          height={150}
          className="object-cover p-1 rounded-full bg-gray-100"
          priority={true}
          quality={100}
        />

        <p className="md:text-lg  text-xs leading-4 tracking-tight"></p>
      </CardContent>
    </Card>
  )
}

export default Header
