import { api } from '@/libs/axios'

export interface ProfileProps {
  id: number
  name: string
  phone: string
  email: string
  avatar: {
    id: string
    url: string
  }
}

interface GetProfileResponse {
  seller: ProfileProps
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/sellers/me')

  return response.data
}
