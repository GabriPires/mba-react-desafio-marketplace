import { Card } from '@/components/card'

interface StatsCardProps {
  value: number
  label: string
  icon: React.ElementType
}

export function StatsCard({ icon: Icon, label, value }: StatsCardProps) {
  return (
    <Card className="flex gap-4 items-center p-3 pr-7">
      <div className="h-20 w-[86px] flex items-center justify-center bg-marketplace-blue-light rounded-xl">
        <Icon className="size-10 text-marketplace-blue-dark" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-marketplace-gray-400 font-title text-[28px] leading-tight">
          {Number(value).toLocaleString('pt-BR')}
        </span>
        <span className="text-marketplace-gray-300 text-xs leading-tight">
          {label}
        </span>
      </div>
    </Card>
  )
}
