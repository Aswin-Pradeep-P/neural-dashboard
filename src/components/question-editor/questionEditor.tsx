import React, { useState } from 'react';
import Button from '../button/button';
import FormInput from '../form-input/formInput';

import styles from './questionEditor.module.scss';
import { useCreateAssessment, useGetAnswer } from '../../api/assessment/assesment';
import CircularLoader from '../circular-loader/circularLoader';
import { useRecoilValue } from 'recoil';
import { selectedClass } from '../../atoms/selectedClass';
import { useNavigate } from 'react-router-dom';

interface Question {
  text: string;
  options?: string[];
  weightage: number;
  type: 'MCQ' | 'True-False' | 'Short-Answer' | 'Essay' | 'Assertion-Reason' | 'Case-Study';
  answer?: string;
}

interface QuestionEditorProps {
  questions: Question[];
  editableQuestions: Question[];
  setEditableQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  difficulty: any;
  subject: any;
  assessmentTopic: string;
}

const QuestionEditor: React.FC<QuestionEditorProps> = ({ editableQuestions, setEditableQuestions, difficulty, subject }) => {
  const { getAnswer, gettingAnswer } = useGetAnswer();
  const navigate = useNavigate();
  const [assessmentTopic, setAssessmentTopic] = useState('');
  const { createAssessment, creatingAssessment } = useCreateAssessment();
  const classSelected = useRecoilValue(selectedClass);
  const handleTextChange = (index: number, newText: string) => {
    const updatedQuestions = [...editableQuestions];
    updatedQuestions[index].text = newText;
    setEditableQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex: number, oIndex: number, newOption: string) => {
    const updatedQuestions = [...editableQuestions];
    if (updatedQuestions[qIndex].options) {
      updatedQuestions[qIndex].options![oIndex] = newOption;
    }
    setEditableQuestions(updatedQuestions);
  };

  const handleExpectedAnswerChange = (index: number, newAnswer: string) => {
    const updatedQuestions = [...editableQuestions];
    updatedQuestions[index].answer = newAnswer;
    setEditableQuestions(updatedQuestions);
  };

  const handleGenerateAnswer = async (index: number) => {
    getAnswer({
      data: {
        question: editableQuestions[index].text,
        type: editableQuestions[index].type,
        weightage: editableQuestions[index].weightage,
      },
      onCompleted: (data) => {
        handleExpectedAnswerChange(index, data);
      },
    });
  };

  return (
    <div>
      {editableQuestions.length > 0 ? (
        <>
          {creatingAssessment && <CircularLoader />}
          <div className={styles.filterContainer}>
            <FormInput onChange={(e) => setAssessmentTopic(e.target.value)} type="text" placeholder="Assessment Topic" style={{ width: '30%', marginRight: '10px' }} />
          </div>
          <div className={styles.questions}>
            {gettingAnswer && <CircularLoader />}
            {editableQuestions.map((question, qIndex) => (
              <div key={qIndex} style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Q{qIndex + 1}:</strong>
                </div>
                <FormInput
                  value={question.text}
                  onChange={(e) => handleTextChange(qIndex, e.target.value)}
                  className={styles.formInput}
                  multiline={true}
                  rows={2}
                />
                {(question.type === 'MCQ' ||
                  question.type === 'True-False' ||
                  question.type === 'Assertion-Reason') && (
                  <ol>
                    <div style={{ marginBottom: '5px' }}>
                      <strong>
                        Answer
                      </strong>
                    </div>
                    {question.options?.map((option, oIndex) => (
                      <li key={oIndex}>
                        <FormInput
                          type="text"
                          value={option}
                          onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                          style={{ width: '90%' }}
                          margin="dense"
                          variant="standard"
                        />
                      </li>
                    ))}
                  </ol>
                )}
                {(question.type === 'Short-Answer' || question.type === 'Essay' || question.type === 'Case-Study') && (
                  <div>
                    <FormInput
                      value={question.answer || ''}
                      onChange={(e) => handleExpectedAnswerChange(qIndex, e.target.value)}
                      className={styles.formInput}
                      multiline={true}
                      rows={4}
                      placeholder="Expected Answer"
                    />
                    <Button
                      label="Generate Answer"
                      onClick={() => handleGenerateAnswer(qIndex)}
                      variant="contained"
                      style={{ marginTop: '10px' }}
                    >
                      Generate Answer
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button
            label="Save"
            onClick={() => {
              createAssessment({
                data: {
                  name: assessmentTopic,
                  level: difficulty.value,
                  gradeId: classSelected.id,
                  subjectId: subject.value,
                  questions: editableQuestions.map((question) => ({
                    questionText: question.text,
                    options: question.options,
                    answer: question.answer,
                    type: question.type,
                    weightage: question.weightage
                  })),
                },
                onCompleted: () => {
                  setEditableQuestions([]);
                  navigate('/assessments');
                }
              });
            }}
            variant="contained"
          >
            Save
          </Button>
        </>
      ) : (
        <div className={styles.noQuestions}>No questions available.</div>
      )}
    </div>
  );
};

export default QuestionEditor;
