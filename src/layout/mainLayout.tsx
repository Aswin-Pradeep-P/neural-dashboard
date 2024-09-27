import {  Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar/navbar';
import Dashboard from '../pages/dashboard/dashboard';
import Students from '../pages/students/students';
import CreateAssessment from '../pages/assessments/createAssessment';
import Assessments from '../pages/assessments/assessments';
import Library from '../pages/library/library';
import Chat from '../pages/chat/chat';

import './styles.scss';


function MainLayout() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainLayout">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessments/create" element={<CreateAssessment />} />
          <Route path="/library" element={<Library />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;