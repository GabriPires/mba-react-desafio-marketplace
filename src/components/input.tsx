import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ControlProps = ComponentProps<'div'>

function Control({ className, ...props }: ControlProps) {
  return (
    <div className={twMerge('group flex flex-col', className)} {...props} />
  )
}

type LabelProps = ComponentProps<'label'>

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={twMerge(
        'text-marketplace-gray-300 uppercase text-xs font-medium group-focus-within:text-marketplace-orange-base',
        className,
      )}
      {...props}
    />
  )
}

type ContainerProps = ComponentProps<'div'>

function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={twMerge(
        'flex items-center h-12 border-b border-marketplace-gray-100 gap-2',
        className,
      )}
      {...props}
    />
  )
}

type FieldProps = ComponentProps<'input'>

function Field({ className, ...props }: FieldProps) {
  return (
    <input
      className={twMerge(
        'w-full h-full outline-none p-0.5 placeholder:text-marketplace-gray-200 text-marketplace-gray-400',
        className,
      )}
      {...props}
    />
  )
}

type IconProps = {
  icon: React.ElementType
  className?: string
}

function Icon({ icon: IconComponent, className }: IconProps) {
  return (
    <IconComponent
      className={twMerge(
        'w-6 h-6 text-marketplace-gray-200 size-6 group-focus-within:text-marketplace-orange-base',
        className,
      )}
    />
  )
}

export { Control, Container, Field, Label, Icon }
