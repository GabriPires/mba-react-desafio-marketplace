import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './pages/_layouts/auth'
import { LoginPage } from './pages/login'
import { RegisterPage } from './pages/register'

export const router = createBrowserRouter([{
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: '/',
      element: <LoginPage />,
    }, {
      path: '/register',
      element: <RegisterPage />,
    }],
}])
