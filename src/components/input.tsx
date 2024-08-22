import { type ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { AlertCircleIcon } from '@/assets/icon/alert-circle'

type ControlProps = ComponentProps<'div'> & {
  error?: string
}

function Control({ className, error, children, ...props }: ControlProps) {
  return (
    <div
      data-with-error={!!error}
      className={twMerge('group flex flex-col', className)}
      {...props}
    >
      {children}
      {error && (
        <div className="flex items-center mt-2 gap-1">
          <AlertCircleIcon className="size-4 text-marketplace-danger" />
          <span className="text-xs text-marketplace-danger">{error}</span>
        </div>
      )}
    </div>
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

const Field = forwardRef(
  ({ className, ...props }: FieldProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <input
        className={twMerge(
          'w-full h-full outline-none p-0.5 placeholder:text-marketplace-gray-200 text-marketplace-gray-400',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Field.displayName = 'Field'

type IconProps = {
  icon: React.ElementType
  className?: string
}

function Icon({ icon: IconComponent, className }: IconProps) {
  return (
    <IconComponent
      className={twMerge(
        'w-6 h-6 text-marketplace-gray-200 size-6 group-focus-within:text-marketplace-orange-base group-data-[with-error=true]:text-marketplace-danger',
        className,
      )}
    />
  )
}

export { Control, Container, Field, Label, Icon }
