import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login';
import MainLayout from './mainLayout';
import Class from '../pages/classes/classes';

const RootLayout = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login type="login" />} />
      <Route path="/" element={<Login type="login" />} />
      <Route path="/signup" element={<Login type="signup" />} />
      <Route path="/class" element={<Class />} />
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
};

export default RootLayout;
