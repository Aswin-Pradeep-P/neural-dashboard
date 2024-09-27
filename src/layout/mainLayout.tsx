import {  Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar/navbar';
import Dashboard from '../pages/dashboard/dashboard';

import './styles.scss';


function MainLayout() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainLayout">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;