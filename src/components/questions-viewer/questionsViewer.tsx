import React, { useState } from 'react';
import Button from '../button/button';
import FormInput from '../form-input/formInput';

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
  const [chatInput, setChatInput] = useState('');

  const handleChatInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(event.target.value);
  };

  const handleChatSubmit = () => {
    console.log('Chat submitted:', chatInput);
    setChatInput('');
  };

  return (
    <div>
      <div className={styles.questions}>
        {questions.map((question, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <p>{question.text}</p>
            {(question.type === 'MCQ' || question.type === 'True-False' || question.type === 'Assertion-Reason') && (
              <ul>
                {question.options?.map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
              </ul>
            )}
            <Button variant="contained" label="Add" onClick={() => onAddToAssessment(question)}>
              Add
            </Button>
          </div>
        ))}
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
