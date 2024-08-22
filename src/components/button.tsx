import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center px-5 rounded-button font-medium cursor-pointer transition-colors',
  variants: {
    variant: {
      primary:
        'bg-marketplace-orange-base text-white hover:bg-marketplace-orange-base/90',
      outline:
        'bg-transparent border border-marketplace-orange-base text-marketplace-orange-base hover:bg-marketplace-orange-base/10',
    },
    size: {
      md: 'h-12',
      lg: 'h-14',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonVariants = VariantProps<typeof button>

type ButtonProps = ComponentProps<'button'> & ButtonVariants

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(button({ variant, size }), className)}
      {...props}
    />
  )
}
