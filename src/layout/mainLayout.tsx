import {  Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar/navbar';
import Dashboard from '../pages/dashboard/dashboard';
import Students from '../pages/students/students';
import Questionnaire from '../components/question-generation/questionGeneration';
import { mockQuestions } from '../data';

import './styles.scss';
import QuestionsViewer from '../components/questions-viewer/questionsViewer';
import QuestionEditor from '../components/question-editor/questionEditor';
import CreateAssessment from '../pages/assetments/createAssessment';
import Assessments from '../pages/assetments/assesments';


function MainLayout() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainLayout">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessments/create" element={<CreateAssessment />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;