import {  Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar/navbar';
import Dashboard from '../pages/dashboard/dashboard';
import Students from '../pages/students/students';
import CreateAssessment from '../pages/assessments/createAssessment';
import Assessments from '../pages/assessments/assessments';
import Library from '../pages/library/library';
import Chat from '../pages/chat/chat';
import Planner from '../pages/planner/planner';
import TakeAssessment from '../pages/assessments/takeAssessment';
import StudentProfile from '../pages/student-profile/studentProfile';
import Questionnaire from '../components/question-generation/questionGeneration';
import { mockQuestions } from '../data';

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
          <Route path="/assessments/attempt" element={<TakeAssessment />} />
          <Route path="/library" element={<Library />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/students" element={<Students />} />
          <Route path='/students/:studentId' element={<StudentProfile />} />
          <Route path="/assesments" element={<Questionnaire questions={mockQuestions} />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;