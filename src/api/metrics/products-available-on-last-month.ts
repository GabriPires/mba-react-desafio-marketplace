import { api } from '@/libs/axios'

interface ProductsAvailableOnLathMonthResponse {
  amount: number
}

export async function getProductsAvailableOnLastMonth() {
  const response = await api.get<ProductsAvailableOnLathMonthResponse>(
    '/sellers/metrics/products/available',
  )

  return response.data
}
