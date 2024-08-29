import { useQuery } from '@tanstack/react-query'

import { getProductsAvailableOnLastMonth } from '@/api/metrics/products-available-on-last-month'
import { getProductsSoldOnLastMonth } from '@/api/metrics/products-sold-on-last-month'
import { getViewsOnLastMonth } from '@/api/metrics/views-on-last-month'
import { CalendarIcon } from '@/assets/icon/calendar'
import { SaleTagIcon } from '@/assets/icon/sale-tag'
import { StoreIcon } from '@/assets/icon/store'
import { UserMultipleIcon } from '@/assets/icon/user-multiple'
import { Card } from '@/components/card'
import { PageTitle } from '@/components/page-title'

import { StatsCard } from './components/stats-card'
import { ViewsPerDayOnMonthGraphic } from './components/views-per-day-on-month-graphic'

export function DashboardPage() {
  const { data: viewsOnLastMonthData } = useQuery({
    queryKey: ['views-on-last-month'],
    queryFn: getViewsOnLastMonth,
  })

  const { data: productsSoldOnLastMonthData } = useQuery({
    queryKey: ['products-sold-on-last-month'],
    queryFn: getProductsSoldOnLastMonth,
  })

  const { data: productsAvailableOnLastMonthData } = useQuery({
    queryKey: ['products-available-on-last-month'],
    queryFn: getProductsAvailableOnLastMonth,
  })

  return (
    <div>
      <PageTitle
        title="Últimos 30 dias"
        subtitle="Confira as estatísticas da sua loja no último mês"
      />

      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col gap-4">
          <StatsCard
            icon={SaleTagIcon}
            label="Produtos vendidos"
            value={productsSoldOnLastMonthData?.amount ?? 0}
          />
          <StatsCard
            icon={StoreIcon}
            label="Produtos anunciados"
            value={productsAvailableOnLastMonthData?.amount ?? 0}
          />
          <StatsCard
            icon={UserMultipleIcon}
            label="Pessoas visitantes"
            value={viewsOnLastMonthData?.amount ?? 0}
          />
        </div>

        <Card className="col-span-3">
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
          <ViewsPerDayOnMonthGraphic />
        </Card>
      </div>
    </div>
  )
}
