import { CharHistogramIcon } from '@/assets/icon/chart-histogram'
import { PackageIcon } from '@/assets/icon/package'
import { PlusSignIcon } from '@/assets/icon/plus-sign'
import logoImg from '@/assets/logomark.svg'

import { Button } from './button'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <header className="flex justify-between px-5 py-4 border-b border-marketplace-shape-shape">
      <img src={logoImg} alt="Logotipo do marketplace" className="w-14" />

      <nav className="flex items-center gap-2">
        <NavLink icon={CharHistogramIcon} title="Dashboard" to="/dashboard" />
        <NavLink icon={PackageIcon} title="Produtos" to="/products" />
      </nav>

      <div className="flex items-center gap-4">
        <Button>
          <PlusSignIcon className="size-5 mr-2" />
          Novo produto
        </Button>
        <div className="border border-marketplace-shape-shape rounded-xl overflow-hidden">
          <img
            src="https://github.com/GabriPires.png"
            alt="Foto do usuário"
            className="size-12"
          />
        </div>
      </div>
    </header>
  )
}
