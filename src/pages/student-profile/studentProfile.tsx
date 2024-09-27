import { Grid2, Paper } from '@mui/material';
import styles from './studentProfile.module.scss';
import FormInput from '../../components/form-input/formInput';
import Avatar from '../../components/avatar/avatar';

const student = {
    name: "Alice Smith", //
    rollNumber: 101, //
    email: "alice.smith@example.com", //
    age: 20,
    gender: "Female", //
    address: {
        street: "123 Main St",
        city: "Springfield",
        state: "IL",
        postalCode: "62704"
    },
    phone: "555-1234", //
    parent: {
        name: "John Smith",
        phone: "555-5678",
        email: "john.smith@example.com",
    },

    major: "Computer Science",
    year: "Junior",
    gpa: 3.8,
    // enrolledCourses: [
    //     { courseName: "Data Structures", courseCode: "CS201" },
    //     { courseName: "Web Development", courseCode: "CS305" },
    //     { courseName: "Algorithms", courseCode: "CS301" }
    // ],
    // hobbies: ["Reading", "Cycling", "Coding"],
};

const achievements = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'ef', 'kn', 'ef', 'aw', 'sd', 'er', 'ty', 'fg']


const StudentProfile = () => {
    return (
        <div className={styles.studentProfileContainer}>
            <Paper elevation={16} className={styles.studentProfileContent}>
                <div className={styles.leftSection}>
                    <Paper className={styles.personalInfoWrapper}>
                        <span>Personal Info</span>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Name</span>
                                <FormInput type="text" defaultValue={student.name} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Roll Number</span>
                                <FormInput type="text" defaultValue={student.rollNumber} />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Age</span>
                                <FormInput type="number" defaultValue={student.age} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Gender</span>
                                <FormInput type="text" defaultValue={student.gender} />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Gender</span>
                                <FormInput type="text" defaultValue={student.gender} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Parent Email</span>
                                <FormInput type="email" defaultValue={student.parent.email} />
                            </div>
                        </div>
                    </Paper>
                    <Paper className={styles.contactInfoWrapper}>
                        <span>Contact Info</span>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Email</span>
                                <FormInput type="email" defaultValue={student.email} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Contact Number</span>
                                <FormInput type="text" defaultValue={student.phone} />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Parent Name</span>
                                <FormInput type="text" defaultValue={student.parent.name} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Parent Email</span>
                                <FormInput type="email" defaultValue={student.parent.email} />
                            </div>
                        </div>
                    </Paper>
                </div>
                <div className={styles.rightSection}>
                    <Paper className={styles.userWrapper}>
                        <Avatar className={styles.userAvatar}>{student.name}</Avatar>
                        <div>{student.name}</div>
                    </Paper>
                    <Paper className={styles.achievementsWrapper}>
                        <span>Achievements</span>
                        <Grid2 container={true} gap={1}>
                            {achievements.map((item) => (
                                <Grid2><Avatar>{item}</Avatar></Grid2>
                            ))}
                        </Grid2>
                    </Paper>
                    <Paper className={styles.assessmentsWrapper}>
                        <span>Latest Assessments</span>
                        <div className={styles.assessmentCard}>
                            <span className={styles.assessmentName}>Assessment 1</span>
                        </div>
                        <div className={styles.assessmentCard}>
                            <span className={styles.assessmentName}>Assessment 1</span>
                        </div>
                        <div className={styles.assessmentCard}>
                            <span className={styles.assessmentName}>Assessment 1</span>
                        </div>
                        <div className={styles.assessmentCard}>
                            <span className={styles.assessmentName}>Assessment 1</span>
                        </div>
                        <div className={styles.assessmentCard}>
                            <span className={styles.assessmentName}>Assessment 1</span>
                        </div>
                        <div className={styles.assessmentCard}>
                            <span className={styles.assessmentName}>Assessment 1</span>
                        </div>
                        <div className={styles.assessmentCard}>
                            <span className={styles.assessmentName}>Assessment 1</span>
                        </div>
                        <div className={styles.assessmentCard}>
                            <span className={styles.assessmentName}>Assessment 1</span>
                        </div>
                    </Paper>
                    <Paper className={styles.insightsWrapper}>
                        <div className={styles.insightSection}>
                            <span>Strengths</span>
                            <span>wlknclkdnclknclknc</span>
                        </div>
                        <div className={styles.insightSection}>
                            <span>Points to improve</span>
                            <span>wlknclkdnclknclknc</span>
                        </div>
                        <div className={styles.insightSection}>
                            <span>Note</span>
                            <span>wlknclkdnclknclknc</span>
                        </div>
                    </Paper>
                </div>
            </Paper>
        </div>
    );
}

export default StudentProfile;