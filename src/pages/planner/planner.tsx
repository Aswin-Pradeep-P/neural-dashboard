import React, { useState } from 'react';
import FormInput from '../../components/form-input/formInput';
import Button from '../../components/button/button';

const Planner: React.FC = () => {
  const [plan, setPlan] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const prompts = [
    "Plan my week",
    "Create a workout schedule",
    "Organize my tasks",
  ];

  const handleSend = () => {
    // Simulate plan generation
    setPlan(`Generated plan for: ${message}`);
    setMessage('');
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: 'calc(100vh)' }}>
      <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}>
        <h2>Prompts</h2>
        <ul>
          {prompts.map((prompt, index) => (
            <li key={index}>{prompt}</li>
          ))}
        </ul>
        <FormInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          style={{ width: '100%', marginTop: '10px' }}
        />
        <Button label="Send" onClick={handleSend} style={{ marginTop: '10px' }}>
          Send
        </Button>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        <h2>Generated Plan</h2>
        <p>{plan}</p>
      </div>
    </div>
  );
};

export default Planner;