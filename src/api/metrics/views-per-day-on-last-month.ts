import { api } from '@/libs/axios'

interface ViewsPerDayProps {
  date: string
  amount: number
}

interface ViewsPerDayResponse {
  viewsPerDay: ViewsPerDayProps[]
}

export async function getViewPerDaysOnLastMonth() {
  const response = await api.get<ViewsPerDayResponse>(
    '/sellers/metrics/views/days',
  )

  return response.data
}
