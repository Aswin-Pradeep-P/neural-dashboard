import React, { useState } from 'react';
import Button from '../button/button';
import FormInput from '../form-input/formInput';
import Select from '../select/select';

import styles from './questionsViewers.module.scss'
import { subjectId } from '../../constants';

interface Question {
  text: string;
  options?: string[];
  weightage: number;
  type: 'MCQ' | 'True-False' | 'Short-Answer' | 'Essay' | 'Assertion-Reason' | 'Case-Study';
}

interface QuestionsViewerProps {
  assessmentTopic: string;
  questions: Question[];
  onAddToAssessment: (question: Question) => void;
  onGenerateAssessment: (topic: string) => void;
  setDifficulty: any;
  setSubject: any;
  difficulty: any;
  subject: any;
}

const QuestionsViewer: React.FC<QuestionsViewerProps> = ({ questions, onAddToAssessment, onGenerateAssessment, setDifficulty, setSubject, difficulty, subject }) => {
  const [chatInput, setChatInput] = useState('');
  
  const handleDifficultyChange = (newValue: any) => {
    setDifficulty(newValue);
  };

  const handleSubjectChange = (newValue: any) => {
    setSubject(newValue);
  };


  const handleChatInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(event.target.value);
  };

  const handleChatSubmit = () => {
   onGenerateAssessment(chatInput);
  };

  return (
    <div>
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
              <Button variant="contained" label="Add" onClick={() => onAddToAssessment(question)}>
                Add
              </Button>
            </div>
          ))
        )}
      </div>
      <div style={{ display: 'flex', marginBottom: '20px', gap: '16px' }}>
        <Select
          value={difficulty}
          onChange={handleDifficultyChange}
          options={[
        { label: 'Easy', value: 'easy' },
        { label: 'Medium', value: 'medium' },
        { label: 'Hard', value: 'hard' }
          ]}
          placeholder="Select Difficulty"
        />
        <Select
          value={subject}
          onChange={handleSubjectChange}
          options={[
        { label: 'Math', value: subjectId },
        { label: 'Science', value: 'Science' },
        { label: 'History', value: 'History' },
        { label: 'Language', value: 'Language' }
          ]}
          placeholder="Select Subject"
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <FormInput
          type="text"
          value={chatInput}
          onChange={handleChatInputChange}
          placeholder="Type your assessment description..."
          style={{ width: '80%', marginRight: '10px' }}
          multiline={true}
          rows={2}
        />
        <Button variant="contained" label="Send" onClick={handleChatSubmit}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default QuestionsViewer;
