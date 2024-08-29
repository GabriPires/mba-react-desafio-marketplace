import { api } from '@/libs/axios'

interface ProductsSoldOnLathMonthResponse {
  amount: number
}

export async function getProductsSoldOnLastMonth() {
  const response = await api.get<ProductsSoldOnLathMonthResponse>(
    '/sellers/metrics/products/sold',
  )

  return response.data
}
