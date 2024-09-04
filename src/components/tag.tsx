import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const tag = tv({
  base: 'bg-marketplace-gray-400 rounded-full px-2 py-1',
  variants: {
    variant: {
      available: 'bg-marketplace-blue-dark',
      sold: 'bg-marketplace-success',
      cancelled: 'bg-marketplace-gray-300',
    },
  },
})

type TagVariants = VariantProps<typeof tag>

type TagProps = ComponentProps<'div'> &
  TagVariants & {
    value: string
  }

export function Tag({ value, variant, className, ...props }: TagProps) {
  return (
    <div className={twMerge(tag({ variant }), className)} {...props}>
      <span className="text-marketplace-shape-white text-xxs font-medium uppercase block">
        {value}
      </span>
    </div>
  )
}
