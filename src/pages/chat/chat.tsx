import { Box } from '@mui/material';
import React, { useState } from 'react';
import FormInput from '../../components/form-input/formInput';
import Button from '../../components/button/button';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    // Simulate system response
    const systemMessage = { sender: 'system', text: `You said: ${input}` };
    setMessages(prevMessages => [...prevMessages, userMessage, systemMessage]);

    setInput('');
  };

  return (
    <Box padding={4}>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: 'calc(100vh - 100px)', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '10px'
            }}
          >
            <div
              style={{
                maxWidth: '60%',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#FFF',
                boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
                textAlign: 'left'
              }}
            >
              <strong>{message.sender}:</strong> {message.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <FormInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{ flex: 1, padding: '10px' }}
        />
        <Button variant="contained" onClick={handleSend} label='Send' style={{ padding: '10px' }}>Send</Button>
      </div>
    </Box>
  );
};

export default Chat;