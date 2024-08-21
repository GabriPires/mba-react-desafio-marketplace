import { Outlet } from 'react-router-dom'
import logoImg from '@/assets/logo.svg'

export function AuthLayout() {
  return (
    <div
      className="grid grid-cols-2 gap-6 min-h-screen max-w-[1300px] mx-auto"
    >
      <div className="bg-hero bg-no-repeat bg-contain bg-center h-full">
        <img src={logoImg} alt="Logo do Marketplace" className="mt-12 ml-6" />
      </div>
      <Outlet />
    </div>
  )
}
