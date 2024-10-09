import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Base from '@routes/home';
import OwnProfile from '@routes/own-profile';
import Profile from '@routes/other-profile';
import Status from '@routes/status';
import Search from '@routes/search';
import { LoginAccount } from '@/auth/components/login-account';
import { CreateAccount } from '@/auth/components/create-account';
import { ForgotPassword } from '@/auth/components/forgot-password';
import { ResetPassword } from '@/auth/components/reset-password';
import { ProtectedRoutes } from './_protected-routes';
import Follow from '@/routes/follow';

export function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: '/',
          element: <Base />,
        },
        {
          path: '/profile',
          element: <OwnProfile />,
        },
      ]
    },
    {
      path: '/profileother',
      element: <Profile />,
    },
    {
      path: '/status',
      element: <Status />,
    },
    {
      path: '/search',
      element: <Search />,
    },
    {
      path: '/logout',
      element: <LoginAccount />,
    },
    {
      path: '/login',
      element: <LoginAccount />,
    },
    {
      path: '/register',
      element: <CreateAccount />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
    {
      path: '/follows',
      element: <Follow />,
    },
  ]);

  return <RouterProvider router={router} />;
}
