import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
} from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps<T extends ElementType> = ComponentProps<'div'> & {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>({
  as: Component = 'div' as T,
  className = '',
  ...props
}: CardProps<T>) => {
  return (
    // @ts-expect-error is everything ok here
    <Component
      className={twMerge(
        'bg-marketplace-shape-white p-6 rounded-card overflow-hidden',
        className,
      )}
      {...props}
    />
  )
}
