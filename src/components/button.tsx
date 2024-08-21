import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'rounded-button h-12 font-medium cursor-pointer transition-colors',
  variants: {
    variant: {
      primary: 'bg-marketplace-orange-base text-white hover:bg-marketplace-orange-base/90',
      outline: 'bg-transparent border border-marketplace-orange-base text-marketplace-orange-base hover:bg-marketplace-orange-base/10',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonVariants = VariantProps<typeof button>

type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariants['variant']
}

export function Button({
  className,
  variant = 'primary',
  ...props
} : ButtonProps) {
  return (
    <button
      className={twMerge(button({ variant }), className)}
      {...props}
    />
  )
}
