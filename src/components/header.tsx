import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { getProfile } from '@/api/seller/get-profile'
import { CharHistogramIcon } from '@/assets/icon/chart-histogram'
import { PackageIcon } from '@/assets/icon/package'
import { PlusSignIcon } from '@/assets/icon/plus-sign'
import { UserIcon } from '@/assets/icon/user'
import logoImg from '@/assets/logomark.svg'

import { Button } from './button'
import { NavLink } from './nav-link'

export function Header() {
  const navigate = useNavigate()

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await getProfile()

      return response.seller
    },
  })

  function handleNavigateToNewProduct() {
    navigate('/products/new')
  }

  return (
    <header className="flex justify-between px-5 py-4 border-b border-marketplace-shape-shape">
      <img src={logoImg} alt="Logotipo do marketplace" className="w-14" />

      <nav className="flex items-center gap-2">
        <NavLink icon={CharHistogramIcon} title="Dashboard" to="/dashboard" />
        <NavLink icon={PackageIcon} title="Produtos" to="/products" />
      </nav>

      <div className="flex items-center gap-4">
        <Button onClick={handleNavigateToNewProduct}>
          <PlusSignIcon className="size-5 mr-2" />
          Novo produto
        </Button>
        <div className="border border-marketplace-shape-shape rounded-xl overflow-hidden">
          {isLoadingProfile || !profile?.avatar ? (
            <div className="flex items-center justify-center size-12 bg-marketplace-shape-shape">
              <UserIcon className="size-8" />
            </div>
          ) : (
            <img
              src={profile.avatar.url}
              alt="Foto do usuário"
              className="size-12"
            />
          )}
        </div>
      </div>
    </header>
  )
}
