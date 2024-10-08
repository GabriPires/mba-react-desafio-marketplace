import { twMerge } from 'tailwind-merge'

interface PageTitleProps {
  title: string
  subtitle: string
  className?: string
}

export function PageTitle({ title, subtitle, className }: PageTitleProps) {
  return (
    <div className={twMerge('flex flex-col mb-10 mt-16', className)}>
      <span className="font-title text-marketplace-gray-500 text-2xl leading-tight">
        {title}
      </span>
      <span className="text-sm text-marketplace-gray-300">{subtitle}</span>
    </div>
  )
}
