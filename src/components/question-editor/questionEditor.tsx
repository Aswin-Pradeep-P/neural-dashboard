import React, { useState } from 'react';
import Button from '../button/button';
import FormInput from '../form-input/formInput';

import styles from './questionEditor.module.scss';

interface Question {
  text: string;
  options?: string[];
  weightage: number;
  type: 'MCQ' | 'True-False' | 'Short-Answer' | 'Essay' | 'Assertion-Reason' | 'Case-Study';
  expectedAnswer?: string;
}

interface QuestionEditorProps {
  questions: Question[];
  editableQuestions: Question[];
  setEditableQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

const QuestionEditor: React.FC<QuestionEditorProps> = ({ editableQuestions, questions, setEditableQuestions }) => {
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
    updatedQuestions[index].expectedAnswer = newAnswer;
    setEditableQuestions(updatedQuestions);
  };

  return (
    <div>
      {editableQuestions.length > 0 ? (
        <>
          <div className={styles.questions}>
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
                {(question.type === 'MCQ' || question.type === 'True-False' || question.type === 'Assertion-Reason') && (
                  <ul>
                    <div style={{ marginBottom: '5px' }}>
                      <strong>
                        A{qIndex + 1}.{qIndex + 1}:
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
                  </ul>
                )}
                {(question.type === 'Short-Answer' || question.type === 'Essay' || question.type === 'Case-Study') && (
                  <FormInput
                    value={question.expectedAnswer || ''}
                    onChange={(e) => handleExpectedAnswerChange(qIndex, e.target.value)}
                    className={styles.formInput}
                    multiline={true}
                    rows={4}
                    placeholder="Expected Answer"
                  />
                )}
              </div>
            ))}
          </div>
          <Button
            label="Save"
            onClick={() => {
              console.log(() => editableQuestions);
            }}
            variant='contained'
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
