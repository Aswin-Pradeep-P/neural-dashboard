import React from 'react';
import RadioButtonGroup from '../radio/radio';
import MultilineInput from '../multiline-input/multilineInput';

type QuestionType = 'MCQ' | 'True-False' | 'Short-Answer' | 'Essay' | 'Assertion-Reason' | 'Case-Study';

export interface Question {
  type: QuestionType;
  weightage: number;
  answer: string;
  options?: string[];
  text: string;
}

interface QuestionnaireProps {
  questions: Question[];
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ questions }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p>{question.text}</p>
          {question.type === 'MCQ' || question.type === 'True-False' || question.type === 'Assertion-Reason' ? (
            <div>
             <RadioButtonGroup label='' options={question.options!.map((option) => ({
              value: option,
              label: option,
             }))}
             onChange={(event) => console.log(event.target.value)} selectedValue={question.answer}
              />
            </div>
          ) : (
            <div>
              <MultilineInput label="" value={question.answer} onChange={(event) => console.log(event.target.value)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questionnaire;