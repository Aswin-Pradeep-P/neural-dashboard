import {  Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar/navbar';
import ChatBot from '../components/chatbot/chatbot';
import Dashboard from '../pages/dashboard/dashboard';
import Students from '../pages/students/students';
import CreateAssessment from '../pages/assessments/createAssessment';
import Assessments from '../pages/assessments/assessments';
import Library from '../pages/library/library';
import Chat from '../pages/chat/chat';
import CreatePlan from '../pages/planner/createPlan';
import TakeAssessment from '../pages/assessments/takeAssessment';
import StudentDashboard from '../pages/student-dashboard/studentDashboard';
import Plans from '../pages/planner/plans';

import './styles.scss';

function MainLayout() {

  return (
    <div className="App">
      <Navbar />
      <ChatBot />
      <div className="mainLayout">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessments/create" element={<CreateAssessment />} />
          <Route path="/assessments/attempt" element={<TakeAssessment />} />
          <Route path="/library" element={<Library />} />
          <Route path="/planner" element={<Plans />} />
          <Route path="/planner/create" element={<CreatePlan />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/students" element={<Students />} />
          <Route path='/students/:studentId' element={<StudentDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;