import { api } from '@/libs/axios'

interface Category {
  id: string
  title: string
  slug: string
}

export interface GetCategoriesResponse {
  categories: Category[]
}

export async function getCategories() {
  const response = await api.get<GetCategoriesResponse>('/categories')

  return response.data
}
