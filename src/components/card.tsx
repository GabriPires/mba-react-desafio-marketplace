import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = ComponentProps<'div'>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        'bg-marketplace-shape-white p-6 col-span-3 rounded-card',
        className,
      )}
      {...props}
    />
  )
}
