import { Slot } from '@radix-ui/react-slot'
import { type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center px-5 rounded-button font-medium cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary:
        'bg-marketplace-orange-base text-white enabled:hover:bg-marketplace-orange-dark',
      outline:
        'bg-transparent border border-marketplace-orange-base text-marketplace-orange-base enabled:hover:border-marketplace-orange-dark enabled:hover:text-marketplace-orange-dark',
      link: 'bg-transparent text-marketplace-orange-base enabled:hover:text-marketplace-orange-dark p-0',
    },
    size: {
      md: 'h-10',
      lg: 'h-14',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonVariants = VariantProps<typeof button>

type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    asChild?: boolean
  }

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  asChild,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={twMerge(button({ variant, size }), className)}
      {...props}
    />
  )
}
