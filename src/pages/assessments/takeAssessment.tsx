import React from 'react';
import Questionnaire from '../../components/question-generation/questionGeneration';
import { mockQuestions } from '../../data';

const TakeAssessment: React.FC = () => {
  return (
    <div>
      <h1>Take Assessment</h1>
      <Questionnaire questions={mockQuestions} />
    </div>
  );
};

export default TakeAssessment;