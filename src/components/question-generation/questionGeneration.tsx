import React, { useState } from 'react';
import RadioButtonGroup from '../radio/radio';
import MultilineInput from '../multiline-input/multilineInput';
import Button from '../button/button';

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
  const [editableQuestions, setEditableQuestions] = useState<Question[]>(questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleRadioChange = (value: string) => {
    const updatedQuestions = [...editableQuestions];
    updatedQuestions[currentQuestionIndex].answer = value;
    setEditableQuestions(updatedQuestions);
  };

  const handleInputChange = (value: string) => {
    const updatedQuestions = [...editableQuestions];
    updatedQuestions[currentQuestionIndex].answer = value;
    setEditableQuestions(updatedQuestions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < editableQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log(editableQuestions);
  };

  const currentQuestion = editableQuestions[currentQuestionIndex];

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <p>{currentQuestion.text}</p>
        {currentQuestion.type === 'MCQ' || currentQuestion.type === 'True-False' || currentQuestion.type === 'Assertion-Reason' ? (
          <div>
            <RadioButtonGroup
              label=''
              options={currentQuestion.options!.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(event) => handleRadioChange(event.target.value)}
              selectedValue={currentQuestion.answer}
            />
          </div>
        ) : (
          <div>
            <MultilineInput
              label=""
              value={currentQuestion.answer}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
        )}
      </div>
      <div>
        {currentQuestionIndex > 0 && <Button style={{ marginRight: '10px'}} label="Back" onClick={handleBack}>Back</Button>}
        {currentQuestionIndex < editableQuestions.length - 1 ? (
          <Button label="Next" onClick={handleNext}>Next</Button>
        ) : (
          <Button label="Next" onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;