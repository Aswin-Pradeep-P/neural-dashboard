import React from 'react';

import Button from '../button/button';

import styles from './questionsViewers.module.scss'

interface Question {
  text: string;
  options?: string[];
  weightage: number;
  type: 'MCQ' | 'True-False' | 'Short-Answer' | 'Essay' | 'Assertion-Reason' | 'Case-Study';
}

interface QuestionsViewerProps {
  questions: Question[];
  onAddToAssessment: (question: Question) => void;
}

const QuestionsViewer: React.FC<QuestionsViewerProps> = ({ questions, onAddToAssessment }) => {
  return (
    <div className={styles.viewerWrapper}>
      <div className={styles.questions}>
        {questions.length === 0 ? (
          <div className={styles.noQuestions}>
            <p>Generate your first questionnaire!</p>
          </div>
        ) : (
          questions.map((question, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <p>{question.text}</p>
              {(question.type === 'MCQ' || question.type === 'True-False' || question.type === 'Assertion-Reason') && (
                <ol>
                  {question.options?.map((option, idx) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ol>
              )}
              <Button containerClass={styles.addBtn} variant="contained" label="Add" onClick={() => onAddToAssessment(question)}>
                Add
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QuestionsViewer;
