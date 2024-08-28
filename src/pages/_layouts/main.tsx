import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function MainLayout() {
  return (
    <div>
      <Header />
      <main className="max-w-[1030px] mx-auto mt-16">
        <Outlet />
      </main>
    </div>
  )
}
