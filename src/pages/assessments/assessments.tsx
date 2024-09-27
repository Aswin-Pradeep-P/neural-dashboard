import React from 'react';
import { Card, CardContent, CardActions, IconButton, Menu, MenuItem, Button, Box, Typography, Grid, Grid2 } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

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
    <Box padding={4}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="contained" color="primary" onClick={handleCreateAssessment}>
          Create Assessment
        </Button>
      </Box>
      <Grid2 container spacing={2}>
        {assessments.map((assessment) => (
          <Grid2 key={assessment.id}>
            <Card sx={{ width: 300 }}> {/* Adjust the width value as needed */}
              <CardContent>
                <Typography variant="h6">{assessment.name}</Typography>
                <Typography color="textSecondary">Subject: {assessment.subject}</Typography>
                <Typography color="textSecondary">Created Date: {assessment.createdDate}</Typography>
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
                  <MenuItem onClick={handleShare}>Share</MenuItem>
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
