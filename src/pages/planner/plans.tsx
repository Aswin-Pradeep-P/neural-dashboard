import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Card, CardActions, CardContent, Grid2, IconButton, Menu, MenuItem, Typography, Dialog, DialogActions, 
    DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

import Button from "../../components/button/button";
import Select from "../../components/select/select";
import { useGetLessonPlan, useGetLessonPlans } from "../../api/planner/planner";
import { profileAtom } from "../../atoms/profile";
import moment from "moment";
import { subjectId } from "../../constants";
import CircularLoader from "../../components/circular-loader/circularLoader";
import { planAtom } from "../../atoms/plan";

import styles from './plans.module.scss';


const Plans = () => {
    const navigate = useNavigate();

    const teacherProfile = useRecoilValue(profileAtom);
    const [selectedPlan, setSelectedPlan] = useState<null | number>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [subject, setSubject] = useState('');
    const [planName, setPlanName] = useState('');
    const [description, setDescription] = useState('');
    const { getLessonPlan, gettingLessonPlan } = useGetLessonPlan();
    const setPlan = useSetRecoilState(planAtom);


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

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleCreate = () => {
        // Simulate plan generation
        getLessonPlan({
          data: {
            session_id: moment().unix().toString(),
            message: description,
          },
          onCompleted: (data) => {
            setPlan(data);
            navigate('/planner/create');
            handleDialogClose();
          },
        });
      };

    return (
        <div>
            {gettingLessonPlan && <CircularLoader />}
            <Box display="flex" justifyContent="flex-end" mb={2}>
                <Button label="Create Plan" onClick={handleDialogOpen}></Button>
            </Box>
            <Grid2 container spacing={2}>
                {getLessonPlansResponse?.lessonPlans.map((plan: any) => (
                    <Grid2 key={plan.id}>
                        <Card sx={{ width: 300 }}> {/* Adjust the width value as needed */}
                            <CardContent>
                                <Typography variant="h6">{plan.name}</Typography>
                                <Typography color="textSecondary">Subject: {plan.subject.name}</Typography>
                                <Typography color="textSecondary">Created Date: {moment(plan.createdAt).format('DD-MM-YYYY')}</Typography>
                                <Button containerClass={styles.shareBtn} label="Share" onClick={handleShare}></Button>
                            </CardContent>
                            
                            {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
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
                            </CardActions> */}
                        </Card>
                    </Grid2>
                ))}
            </Grid2>

            <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="lg">
                <DialogTitle>Create Plan</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the details for the new plan.
                    </DialogContentText>
                    <div style={{width: 500}}>
                        <Select options={[
                            { value: subjectId, label: 'Math' },
                            { value: 'science', label: 'Science' },
                            { value: 'english', label: 'English' },
                        ]} label="Subject" value={subject}
                             onChange={(newValue: any) => setSubject(newValue)} />
                        <TextField
                            margin="normal"
                            label="Description"
                            type="text"
                            fullWidth
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button label="Cancel" onClick={handleDialogClose} />
                    <Button label="Create" onClick={handleCreate} />
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Plans;