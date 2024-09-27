import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login';
import MainLayout from './mainLayout';
import Class from '../pages/classes/classes';
import { useEffect } from 'react';

const RootLayout = () => {
  useEffect(() => {
    window.addEventListener('error', (e) => {
      if (e.message === 'ResizeObserver loop limit exceeded'
      || e.message === 'ResizeObserver loop completed with undelivered notifications.') {
        const resizeObserverErrDiv = document.getElementById(
          'webpack-dev-server-client-overlay-div'
        );
        const resizeObserverErr = document.getElementById(
          'webpack-dev-server-client-overlay'
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute('style', 'display: none');
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute('style', 'display: none');
        }
      }
    });
  }, []);
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
