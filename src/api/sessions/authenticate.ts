import { api } from '@/libs/axios'

interface AuthenticateProps {
  email: string
  password: string
}

interface AuthenticateResponse {
  accessToken: string
}

export async function authenticate({ email, password }: AuthenticateProps) {
  const response = await api.post<AuthenticateResponse>('/sellers/sessions', {
    email,
    password,
  })

  return response.data
}
