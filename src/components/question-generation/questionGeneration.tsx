import React, { useEffect, useState } from 'react';
import RadioButtonGroup from '../radio/radio';
import MultilineInput from '../multiline-input/multilineInput';
import Button from '../button/button';
import { useCreateStudentAssessment } from '../../api/assessment/assesment';
import { useNavigate } from 'react-router-dom';

type QuestionType = 'MCQ' | 'True-False' | 'Short-Answer' | 'Essay' | 'Assertion-Reason' | 'Case-Study';

export interface Question {
  id?: string;
  type: QuestionType;
  weightage: number;
  answer: string;
  options?: string[];
  text: string;
  userAnswer?: string;
}

interface QuestionnaireProps {
  questions: Question[];
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ questions }) => {
  const [editableQuestions, setEditableQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { createStudentAssessment } = useCreateStudentAssessment();
  const navigate = useNavigate();

  useEffect(() => {
    setEditableQuestions(questions);
  }, [questions]);

  const handleRadioChange = (value: string) => {
    const updatedQuestions = [...editableQuestions];
    updatedQuestions[currentQuestionIndex].userAnswer = value;
    setEditableQuestions(updatedQuestions);
  };

  const handleInputChange = (value: string) => {
    const updatedQuestions = [...editableQuestions];
    updatedQuestions[currentQuestionIndex].userAnswer = value;
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
    createStudentAssessment({
      data: {
        questions: editableQuestions.map((question) => ({
          id: question.id,
          userAnswer: question.userAnswer,
        })),
      },
      onCompleted: (data) => {
        navigate('/assessments');
      }
    })
  };

  const currentQuestion = editableQuestions[currentQuestionIndex];

  if(editableQuestions.length === 0) {
    return null;
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <p>Question {currentQuestionIndex + 1}: {currentQuestion.text}</p>
        {currentQuestion.type === 'MCQ' || currentQuestion.type === 'True-False' || currentQuestion.type === 'Assertion-Reason' ? (
          <div>
            <RadioButtonGroup
              label=''
              options={currentQuestion.options!.map((option) => ({
                value: option,
                label: option,
              }))}
              onChange={(event) => handleRadioChange(event.target.value)}
              selectedValue={currentQuestion.userAnswer as string}
            />
          </div>
        ) : (
          <div>
            <MultilineInput
              label=""
              value={currentQuestion.userAnswer as string}
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
          <Button label="Submit" onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
