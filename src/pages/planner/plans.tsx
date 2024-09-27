import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Card, CardActions, CardContent, Grid2, IconButton, Menu, MenuItem, Typography } from "@mui/material";

import Button from "../../components/button/button";
import { useGetLessonPlans } from "../../api/planner/planner";
import { profileAtom } from "../../atoms/profile";
import moment from "moment";

const Plans = () => {
    const navigate = useNavigate();

    const teacherProfile = useRecoilValue(profileAtom);
    const [selectedPlan, setSelectedPlan] = useState<null | number>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const { getLessonPlans, getLessonPlansResponse } = useGetLessonPlans(teacherProfile.id);

    useEffect(() => {
        getLessonPlans({
            onCompleted: (res) => {
                console.log(res);
            }
        });
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
        setAnchorEl(event.currentTarget);
        setSelectedPlan(id);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
        setSelectedPlan(null);
      };
    
      const handleShare = () => {
        if (selectedPlan !== null) {
          // Implement your share logic here
          alert(`Sharing plan with id: ${selectedPlan}`);
        }
        handleClose();
      };

    return (
        <div>
            <Box display="flex" justifyContent="flex-end" mb={2}>
                <Button label="Create Assessment" onClick={() => navigate('/planner/create')}></Button>
            </Box>
            <Grid2 container spacing={2}>
                {getLessonPlansResponse?.lessonPlans.map((plan: any) => (
                    <Grid2 key={plan.id}>
                        <Card sx={{ width: 300 }}> {/* Adjust the width value as needed */}
                            <CardContent>
                                <Typography variant="h6">{plan.name}</Typography>
                                <Typography color="textSecondary">Subject: {plan.subject.name}</Typography>
                                <Typography color="textSecondary">Created Date: {moment(plan.createdAt).format('DD-MM-YYYY')}</Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'flex-end' }}>
                                <IconButton onClick={(event) => handleClick(event, plan.id)}>
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl) && selectedPlan === plan.id}
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
        </div>
    );
}

export default Plans;