import {  Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar/navbar';
import Dashboard from '../pages/dashboard/dashboard';
import Students from '../pages/students/students';
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
          <Route path="/students" element={<Students />} />
          <Route path="/assesments" element={<Questionnaire questions={mockQuestions} />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;