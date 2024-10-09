import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { CreateAccount } from '@/auth/components/create-account';
import { ForgotPassword } from '@/auth/components/forgot-password';
import { LoginAccount } from '@/auth/components/login-account'; 
import { ResetPassword } from '@/auth/components/reset-password';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginAccount />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  </Router>
);

export default AppRoutes;
