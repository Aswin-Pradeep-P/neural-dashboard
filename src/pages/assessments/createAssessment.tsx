import { useState } from 'react';
import { cloneDeep, get } from 'lodash';
import QuestionEditor from '../../components/question-editor/questionEditor';
import QuestionsViewer from '../../components/questions-viewer/questionsViewer';
import styles from './createAssessment.module.scss';
import { Grid2, Paper } from '@mui/material';
import { useGenerateAssessment } from '../../api/assessment/assesment';
import CircularLoader from '../../components/circular-loader/circularLoader';

const CreateAssessment = () => {
  const [editableQuestions, setEditableQuestions] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);
  const { generateAssessment,generatingAssessment } = useGenerateAssessment();

  const onAddToAssessment = (question: any) => {
    setEditableQuestions([...editableQuestions, cloneDeep(question)]);
  };

  const onGenerateAssessment = (topic: string) => {
    const data:any = {
      "topic": topic,
      "difficulty": "Intermediate",
      "question_distribution": {
          "MCQ": 2,
          "True/False": 1,
          "Short Answer": 1,
          "Essay": 1,
          "Assertion-Reason": 1,
          "Case Study": 1
      },
    };
    generateAssessment({data, onCompleted: (data) => {
      setQuestions(data.map((data: any) => ({...data, options: data.choices, text: data.question})));
    }});
  // Call the API to generate the assessment
  }

  return (
    <Grid2 container={true} className={styles.createAssessment} spacing={2}>
      {generatingAssessment && <CircularLoader />}
      <Paper className={styles.viewSection}>
        <QuestionsViewer questions={questions} onAddToAssessment={onAddToAssessment} onGenerateAssessment={onGenerateAssessment} />
      </Paper>
      <Paper className={styles.editSection}>
        <QuestionEditor
          editableQuestions={editableQuestions}
          setEditableQuestions={setEditableQuestions}
          questions={[]}
        />
      </Paper>
    </Grid2>
  );
};

export default CreateAssessment;
