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
  correctAnswer?: string;
  score?: number;
}

interface QuestionnaireProps {
  questions: Question[];
  score: number;
}

const QuestionnaireSummary: React.FC<QuestionnaireProps> = ({ questions, score }) => {
  const [editableQuestions, setEditableQuestions] = useState<Question[]>([]);
  const { createStudentAssessment } = useCreateStudentAssessment();
  const navigate = useNavigate();

  useEffect(() => {
    setEditableQuestions(questions);
  }, [questions]);

  const handleRadioChange = (index: number, value: string) => {
    const updatedQuestions = [...editableQuestions];
    updatedQuestions[index].userAnswer = value;
    setEditableQuestions(updatedQuestions);
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedQuestions = [...editableQuestions];
    updatedQuestions[index].userAnswer = value;
    setEditableQuestions(updatedQuestions);
  };

  const isAnswerCorrect = (question: Question) => {
    return question.userAnswer === question.answer;
  };

  const getAnswerLabel = (question: Question) => {
    console.log(question.score);
    if(question.score === 0) {
      return '❌';
    }
    else if (question.score === 100) {
      return '✅';
    }
    else return `${question.score} / ${question.weightage}`;
  }

  const calculateTotalScore = () => {
    return editableQuestions.reduce((total, question) => {
      return total + (isAnswerCorrect(question) ? question.weightage : 0);
    }, 0);
  };

  const getImprovementArea = (question: Question) => {
    if (isAnswerCorrect(question)) {
      return 'Well done!';
    }
    return `Might need to spend more time on this question.`;
  };

  if (editableQuestions.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Total Score: {score}</h2>
      {editableQuestions.map((question, index) => (
        <div key={question.id} style={{ marginBottom: '20px' }}>
          <p>
            Question {index + 1}: {question.text}
            {question.userAnswer && (
              <span style={{ marginLeft: '10px' }}>
                {getAnswerLabel(question)}
              </span>
            )}
          </p>
          {question.type === 'MCQ' || question.type === 'True-False' || question.type === 'Assertion-Reason' ? (
            <div>
              <RadioButtonGroup
                label=''
                options={question.options!.map((option) => ({
                  value: option,
                  label: option,
                }))}
                onChange={(event) => handleRadioChange(index, event.target.value)}
                selectedValue={question.userAnswer as string}
                isDisabled={true}
              />
            </div>
          ) : (
            <div>
              <MultilineInput
                label=""
                value={question.userAnswer as string}
                onChange={(event) => handleInputChange(index, event.target.value)}
                disabled={true}
              />
            </div>
          )}
          <p>Improvement Area: {getImprovementArea(question)}</p>
        </div>
      ))}
      <Button label="Continue" onClick={() => navigate('/assessments')}>Submit</Button>
    </div>
  );
};

export default QuestionnaireSummary;
