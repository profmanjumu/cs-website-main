import React from 'react'
import { Button, ButtonProps } from './button'
import { cn } from '@/lib/utils'

type IconButtonProps = ButtonProps

const IconButton = (props: IconButtonProps) => {
  return (
    <Button
      className={cn(
        'bg-discordPurple hover:bg-discordPurpleHover text-gray-50',
        props.className
      )}
      size="icon"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default IconButton
