import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Menu, MenuItem, Paper, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/button/button';
import styles from './createAssessment.module.scss'

const assessments = [
  { id: 1, name: 'Assessment 1', subject: 'Math', createdDate: '2023-10-01' },
  { id: 2, name: 'Assessment 2', subject: 'Science', createdDate: '2023-10-02' },
  // Add more assessments as needed
];

const Assessments: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedAssessment, setSelectedAssessment] = React.useState<null | number>(null);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedAssessment(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedAssessment(null);
  };

  const handleShare = () => {
    if (selectedAssessment !== null) {
      // Implement your share logic here
      alert(`Sharing assessment with id: ${selectedAssessment}`);
    }
    handleClose();
  };

  const handleCreateAssessment = () => {
    navigate('/assessments/create');
  };

  return (
    <Box padding={4} className={styles.assessmentWrapper}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button label="Create Assessment" onClick={handleCreateAssessment} />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assessments.map((assessment) => (
              <TableRow key={assessment.id}>
                <TableCell>{assessment.name}</TableCell>
                <TableCell>{assessment.subject}</TableCell>
                <TableCell>{assessment.createdDate}</TableCell>
                <TableCell>
                  <IconButton onClick={(event) => handleClick(event, assessment.id)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && selectedAssessment === assessment.id}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleShare}>Share</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Assessments;