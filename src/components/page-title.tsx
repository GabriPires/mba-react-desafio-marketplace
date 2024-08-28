interface PageTitleProps {
  title: string
  subtitle: string
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="flex flex-col mb-10 mt-16">
      <span className="font-title text-marketplace-gray-500 text-2xl leading-tight">
        {title}
      </span>
      <span className="text-sm text-marketplace-gray-300">{subtitle}</span>
    </div>
  )
}
