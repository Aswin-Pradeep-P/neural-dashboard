import { Question } from "./components/question-generation/questionGeneration";

export const mockQuestions: Question[] = [
  {
    type: 'MCQ',
    weightage: 2,
    answer: 'Option 1',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    text: 'What is the capital of France?',
  },
  {
    type: 'True-False',
    weightage: 1,
    answer: 'True',
    options: ['True', 'False'],
    text: 'The sky is blue.',
  },
  {
    type: 'Short-Answer',
    weightage: 3,
    answer: '42',
    text: 'What is the answer to life, the universe, and everything?',
  },
  {
    type: 'Essay',
    weightage: 5,
    answer: '',
    text: 'Describe the theory of relativity.',
  },
  {
    type: 'Assertion-Reason',
    weightage: 4,
    answer: 'Both A and R are true and R is the correct explanation of A',
    options: [
      'Both A and R are true and R is the correct explanation of A',
      'Both A and R are true but R is not the correct explanation of A',
      'A is true but R is false',
      'A is false but R is true',
    ],
    text: 'Assertion (A): The earth revolves around the sun. Reason (R): The sun is at the center of the solar system.',
  },
  {
    type: 'Case-Study',
    weightage: 6,
    answer: '',
    text: 'Analyze the impact of climate change on polar bear populations.',
  },
];