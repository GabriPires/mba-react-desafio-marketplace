import { api } from '@/libs/axios'

interface Avatar {
  id: string
  url: string
}

interface Owner {
  id: string
  name: string
  phone: string
  email: string
  avatar: Avatar | null
}

interface Category {
  id: string
  title: string
  slug: string
}

interface Attachment {
  id: string
  url: string
}

type Status = 'available' | 'sold' | 'cancelled'

export interface ProductProps {
  id: string
  title: string
  description: string
  priceInCents: number
  status: Status
  owner: Owner
  category: Category
  attachments: Attachment[]
}

interface GetProductsParams {
  productId: string
}

interface GetProductsResponse {
  product: ProductProps
}

export async function getProductById({ productId }: GetProductsParams) {
  const response = await api.get<GetProductsResponse>(`/products/${productId}`)

  return response.data
}
