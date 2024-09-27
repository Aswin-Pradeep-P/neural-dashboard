import React, { useEffect } from 'react';
import { Card, CardContent, CardActions, IconButton, Menu, MenuItem, Box, Typography, Grid, Grid2 } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import styles from './createAssessment.module.scss'
import Button from '../../components/button/button';
import { useGetAssessments } from '../../api/assessment/assesment';
import { capitalize } from 'lodash';
import { useRecoilValue } from 'recoil';
import { profileAtom } from '../../atoms/profile';

const assessments = [
  { id: 1, name: 'Assessment 1', subject: 'Math', createdDate: '2023-10-01' },
  { id: 2, name: 'Assessment 2', subject: 'Science', createdDate: '2023-10-02' },
  // Add more assessments as needed
];

const Assessments: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedAssessment, setSelectedAssessment] = React.useState<null | number>(null);
  const navigate = useNavigate();
  const { getAssessments, getAssessmentsResponse = {assessments: []} } = useGetAssessments();
  const profile = useRecoilValue(profileAtom)

  console.log(getAssessmentsResponse)

  useEffect(() => {
    getAssessments({
      onCompleted: (data) => {
        console.log(data);
      }
    });
  }, [])

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
    navigate('/assessments/create');
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
      {profile.type === 'teacher' && <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button label="Create Assessment" onClick={handleCreateAssessment}></Button>
      </Box>}
      <Grid2 container spacing={2}>
        {getAssessmentsResponse?.assessments?.map((assessment: any) => (
          <Grid2 key={assessment.id}>
            <Card sx={{ width: 300 }}> {/* Adjust the width value as needed */}
              <CardContent>
                <Typography variant="h6">{assessment.name}</Typography>
                <Typography color="textSecondary">Subject: {assessment.subject.name}</Typography>
                <Typography color="textSecondary">{assessment.grade.name}</Typography>
                <Typography color="textSecondary">Level: {capitalize(assessment.level)}</Typography>
                <Typography color="textSecondary">Created Date: {moment(assessment.createdAt).format('DD-MM-YYYY')}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
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
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Assessments;
