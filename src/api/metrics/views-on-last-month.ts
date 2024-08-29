import { api } from '@/libs/axios'

interface ViewsOnLastMonthResponse {
  amount: number
}

export async function getViewsOnLastMonth() {
  const response = await api.get<ViewsOnLastMonthResponse>(
    '/sellers/metrics/views',
  )

  return response.data
}
