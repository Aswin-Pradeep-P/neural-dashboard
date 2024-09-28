import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, IconButton, Menu, MenuItem, Box, Typography, Grid2 } from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import styles from './createAssessment.module.scss'
import Button from '../../components/button/button';
import { useGenerateAssessment, useGetAssessments } from '../../api/assessment/assesment';
import { capitalize } from 'lodash';
import DialogBox from './dialog';
import CircularLoader from '../../components/circular-loader/circularLoader';
import { useSetRecoilState } from 'recoil';
import { questionsAtom } from '../../atoms/questions';
import { useRecoilValue } from 'recoil';
import { profileAtom } from '../../atoms/profile';


const Assessments: React.FC = () => {
  const navigate = useNavigate();
  const profile = useRecoilValue(profileAtom)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedAssessment, setSelectedAssessment] = useState<null | number>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const setQuestions = useSetRecoilState<any[]>(questionsAtom);
  const [chatInput, setChatInput] = useState('');
  const [subject, setSubject] = useState(null);

  const { getAssessments, getAssessmentsResponse = {assessments: []} } = useGetAssessments();
  const { generateAssessment, generatingAssessment } = useGenerateAssessment();

  useEffect(() => {
    getAssessments({
      onCompleted: (data) => {
        // console.log(data);
      }
    });
  }, [])

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
        setOpenDialog(false);
        setQuestions(data.map((data: any) => ({ ...data, options: data.choices, text: data.question })));
        navigate('/assessments/create');
      },
    });
    // Call the API to generate the assessment
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedAssessment(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedAssessment(null);
  };

  const handleShare = () => {
    if(profile.type === 'student') {
      navigate(`/assessments/${selectedAssessment}`);
    }
    // if (selectedAssessment !== null) {
    //   // Implement your share logic here
    //   alert(`Sharing assessment with id: ${selectedAssessment}`);
    // }
    handleClose();
  };


  const handleCreateAssessment = () => {
    setOpenDialog(true);
  };

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

  const handleAssessmentAction = (id: number) => {

  }

  const getAssessmentText = () => {
    if(profile.type === 'teacher') {
      return 'Share';
    }
    else if (profile.type === 'student') {
      return 'Start';
    }
    else {
      return 'View'
    }
  }

  return (
    <Box className={styles.assessmentWrapper}>
      {generatingAssessment && <CircularLoader />}
      <Box display="flex" justifyContent="flex-start" mb={2}  style={{ marginBottom: '24px' }}>
      <h1 style={{ marginBottom: '0' }}>Assessments</h1>
      {profile.type === 'teacher' && <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button label="Create Assessment" onClick={handleCreateAssessment}></Button>
      </Box>}
      </Box>
      <Grid2 container={true} gap={4}>
        {getAssessmentsResponse?.assessments?.map((assessment: any) => (
          <Grid2 key={assessment.id}  style={{ width: 'calc(25% - 24px)' }}>
            <Card className={styles.assessmentCard}> {/* Adjust the width value as needed */}
              <CardContent>
                <Typography variant="h6" className={styles.assessmentName}>{assessment.name}</Typography>
                <Typography color="textSecondary">Subject: {assessment.subject.name}</Typography>
                <Typography color="textSecondary">{assessment.grade.name}</Typography>
                <Typography color="textSecondary">Level: {capitalize(assessment.level)}</Typography>
                <Typography color="textSecondary" style={{ marginBottom: '20px' }}>Created Date: {moment(assessment.createdAt).format('DD-MM-YYYY')}</Typography>
                <Button containerClass={styles.shareBtn} label={getAssessmentText()} onClick={handleShare}></Button>
              </CardContent>
              {/* <CardActions sx={{ justifyContent: 'flex-end' }} className={styles.cardActions}>
                <IconButton onClick={(event) => handleClick(event, assessment.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedAssessment === assessment.id}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleShare}>{getAssessmentText()}</MenuItem>
                </Menu>
              </CardActions> */}
            </Card>
          </Grid2>
        ))}
      </Grid2>
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
    </Box>
  );
};

export default Assessments;
