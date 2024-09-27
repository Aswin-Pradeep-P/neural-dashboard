import { useState } from 'react';
import { cloneDeep } from 'lodash'
import QuestionEditor from '../../components/question-editor/questionEditor';
import QuestionsViewer from '../../components/questions-viewer/questionsViewer';
import styles from './createAssessment.module.scss';
import { Grid2, Paper } from '@mui/material';

const CreateAssessment = () => {
  const [editableQuestions, setEditableQuestions] = useState<any[]>([]);

  const onAddToAssessment = (question: any) => {
    setEditableQuestions([...editableQuestions, cloneDeep(question)]);
  }
  return (
    <Grid2 container={true} className={styles.createAssessment} spacing={2}>
      <Paper className={styles.editSection}>
        <QuestionEditor editableQuestions={editableQuestions} setEditableQuestions={setEditableQuestions} questions={[]} />
      </Paper>
      <Paper className={styles.viewSection}>
        <QuestionsViewer questions={[]} onAddToAssessment={onAddToAssessment} />
      </Paper>
    </Grid2>
  )
}

export default CreateAssessment;