import * as Select from '@radix-ui/react-select'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { AlertCircleIcon } from '@/assets/icon/alert-circle'
import { ArrowDownIcon } from '@/assets/icon/arrow-down'
import { TickIcon } from '@/assets/icon/tick'

type ControlProps = ComponentProps<'div'> & {
  error?: string
}

function Control({ error, className, children, ...props }: ControlProps) {
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

type ContainerProps = Select.SelectProps

function Container({ children, ...props }: ContainerProps) {
  return <Select.Root {...props}>{children}</Select.Root>
}

type TriggerProps = Select.SelectTriggerProps & {
  icon?: React.ElementType
  placeholder?: string
}

function Trigger({
  className,
  placeholder,
  icon: Icon,
  ...props
}: TriggerProps) {
  return (
    <Select.Trigger
      data-with-icon={!!Icon}
      className={twMerge(
        'grid grid-cols-[1fr_auto] data-[with-icon=true]:grid-cols-[auto_1fr_auto] items-center text-left h-12 border-b border-marketplace-gray-100 gap-2 outline-none data-[placeholder]:text-marketplace-gray-200',
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="size-6 text-marketplace-gray-200" />}
      <Select.Value placeholder={placeholder} />
      <div className="flex items-center">
        <Select.Icon>
          <ArrowDownIcon className="size-6 text-marketplace-gray-300" />
        </Select.Icon>
      </div>
    </Select.Trigger>
  )
}

type ContentProps = Select.SelectContentProps

function Content({ className, children, ...props }: ContentProps) {
  return (
    <Select.Portal>
      <Select.Content
        position="popper"
        className={twMerge(
          'bg-marketplace-shape-white rounded-lg overflow-hidden w-[var(--radix-select-trigger-width)] shadow-select mt-1',
          className,
        )}
        {...props}
      >
        <Select.Viewport>{children}</Select.Viewport>
      </Select.Content>
    </Select.Portal>
  )
}

function Item({ className, children, ...props }: Select.SelectItemProps) {
  return (
    <Select.Item
      className={twMerge(
        'cursor-pointer h-12 flex items-center relative data-[highlighted]:outline-none pl-4 pr-12 text-marketplace-gray-300 text-sm data-[state=checked]:text-marketplace-orange-base',
        className,
      )}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator>
        <TickIcon className="size-6 text-marketplace-orange-base absolute top-1/2 transform -translate-y-1/2 right-3" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

export { Control, Label, Container, Trigger, Content, Item }
