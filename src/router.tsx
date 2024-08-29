import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layouts/auth'
import { MainLayout } from './pages/_layouts/main'
import { DashboardPage } from './pages/dashboard'
import { LoginPage } from './pages/login'
import { NewProductPage } from './pages/new-product'
import { ProductDetailsPage } from './pages/product-details'
import { ProductsPage } from './pages/products'
import { RegisterPage } from './pages/register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/products/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: '/products/new',
        element: <NewProductPage />,
      },
    ],
  },
])
