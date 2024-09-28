import { useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';
import QuestionEditor from '../../components/question-editor/questionEditor';
import QuestionsViewer from '../../components/questions-viewer/questionsViewer';
import styles from './createAssessment.module.scss';
import { Grid2, Paper } from '@mui/material';
import { useGenerateAssessment } from '../../api/assessment/assesment';
import CircularLoader from '../../components/circular-loader/circularLoader';
import { useRecoilValue, useRecoilState } from 'recoil';
import { questionsAtom } from '../../atoms/questions';
import DialogBox from './dialog';
import Button from '../../components/button/button';
import { assessmentData } from '../../atoms/setAssessmentData';

const CreateAssessment = () => {
  const [editableQuestions, setEditableQuestions] = useState<any[]>([]);
  const [, setAssessmentData] = useRecoilState(assessmentData);
  const storedQuestions = useRecoilValue<any[]>(questionsAtom);
  const [questions, setQuestions] = useState<any[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const { generateAssessment, generatingAssessment } = useGenerateAssessment();
  const [difficulty, setDifficulty] = useState(null);
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    // console.log("storedQuestions", storedQuestions);
    storedQuestions?.length > 0 && setQuestions(storedQuestions);
  },[storedQuestions]);

  const onAddToAssessment = (question: any) => {
    setEditableQuestions([...editableQuestions, cloneDeep(question)]);
  };

  const onGenerateAssessment = (topic: string) => {
    const data: any = {
      topic: topic,
      difficulty,
      question_distribution: {
        MCQ: 2,
        'True/False': 1,
        'Short Answer': 1,
        Essay: 1,
        'Assertion-Reason': 1,
        'Case Study': 1,
      },
    };
    generateAssessment({
      data,
      onCompleted: (data) => {
        setAssessmentData({
          difficulty:difficulty,
          subject:subject,
          chatInput: chatInput
        })
        setQuestions(data.map((data: any) => ({ ...data, options: data.choices, text: data.question })));
        setOpenDialog(false);
      },
    });
    // Call the API to generate the assessment
  };

  const [chatInput, setChatInput] = useState('');

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  
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
    <Grid2 container={true} className={styles.createAssessment} spacing={2}>
      {generatingAssessment && <CircularLoader />}
      <div className={styles.btnWrapper}>
        <Button label="Regenerate" onClick={() => setOpenDialog(true)} />
      </div>
      <div className={styles.editor}>
        <Paper className={styles.viewSection}>
          <QuestionsViewer
            questions={questions}
            onAddToAssessment={onAddToAssessment}
          />
        </Paper>
        <Paper className={styles.editSection}>
          <QuestionEditor
            assessmentTopic=""
            difficulty={difficulty}
            subject={subject}
            editableQuestions={editableQuestions}
            setEditableQuestions={setEditableQuestions}
            questions={[]}
          />
        </Paper>
      </div>
      <DialogBox 
        open={openDialog} 
        onClose={handleCloseDialog} 
        difficulty={difficulty} 
        handleDifficultyChange={handleDifficultyChange}
        subject={subject}
        handleSubjectChange={handleSubjectChange}
        chatInput={chatInput}
        handleChatInputChange={handleChatInputChange}
        handleChatSubmit={handleChatSubmit}
      />
    </Grid2>
  );
};

export default CreateAssessment;
