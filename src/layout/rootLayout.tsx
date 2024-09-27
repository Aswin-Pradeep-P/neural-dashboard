import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login';
import MainLayout from './mainLayout';

const RootLayout = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
};

export default RootLayout;
