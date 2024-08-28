import { CalendarIcon } from '@/assets/icon/calendar'
import { SaleTagIcon } from '@/assets/icon/sale-tag'
import { StoreIcon } from '@/assets/icon/store'
import { UserMultipleIcon } from '@/assets/icon/user-multiple'
import { Card } from '@/components/card'

import { StatsCard } from './components/stats-card'

export function DashboardPage() {
  return (
    <div>
      <div className="flex flex-col">
        <span className="font-title text-marketplace-gray-500 text-2xl leading-tight">
          Últimos 30 dias
        </span>
        <span className="text-sm text-marketplace-gray-300">
          Confira as estatísticas da sua loja no último mês
        </span>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-10">
        <div className="flex flex-col gap-4">
          <StatsCard icon={SaleTagIcon} label="Produtos vendidos" value={24} />
          <StatsCard icon={StoreIcon} label="Produtos anunciados" value={56} />
          <StatsCard
            icon={UserMultipleIcon}
            label="Pessoas visitantes"
            value={1238}
          />
        </div>

        <Card>
          <div className="flex justify-between">
            <span className="font-title text-marketplace-gray-500 text-lg">
              Visitantes
            </span>
            <div className="flex items-center gap-2">
              <CalendarIcon className="size-4 text-marketplace-blue-dark" />
              <span className="text-marketplace-gray-300 text-xxs font-medium">
                26 de junho - 25 de julho
              </span>
            </div>
          </div>
          <div className="h-[266px] w-[719px]"></div>
        </Card>
      </div>
    </div>
  )
}
