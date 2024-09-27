import { Grid2, Paper } from '@mui/material';

import styles from './studentProfile.module.scss';
import FormInput from '../../components/form-input/formInput';
import Avatar from '../../components/avatar/avatar';
import AssessmentCard from './components/assessment-card/assessmentCard';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetStudent } from '../../api/students/students';

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

const assessments = [
    { title: "Data Structures Midterm", score: 85, date: "2024-03-15" },
    { title: "Web Development Project", score: 92, date: "2024-04-10" },
    { title: "Algorithms Final Exam", score: 78, date: "2024-05-22" },
    { title: "Operating Systems Quiz", score: 88, date: "2024-02-27" },
    { title: "Database Design Assignment", score: 95, date: "2024-03-30" }
];

const achievements = ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'ef', 'kn', 'ek', 'aw', 'sd', 'er', 'ty', 'fg']


const StudentProfile = () => {
    const { studentId } = useParams();

    const { getStudent, getStudentResponse } = useGetStudent(studentId as string);

    useEffect(() => {
        getStudent();
    }, []);
    console.log(getStudentResponse);

    return (
        <div className={styles.studentProfileContainer}>
            <div className={styles.studentProfileContent}>
                <div className={styles.leftSection}>
                    <Paper className={styles.wrapper}>
                        <span className={styles.sectionTitle}>Personal Info</span>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Name</span>
                                <FormInput type="text" value={getStudentResponse?.name} />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Roll Number</span>
                                <FormInput type="text" value={student.rollNumber} disabled={true} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Date of birth</span>
                                <FormInput type="text" value="24/12/2006" />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Age</span>
                                <FormInput type="number" value={student.age} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Gender</span>
                                <FormInput type="text" value={getStudentResponse?.gender} />
                            </div>
                        </div>
                    </Paper>
                    <Paper className={styles.wrapper}>
                        <span className={styles.sectionTitle}>Contact Info</span>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Email</span>
                                <FormInput type="email" value={getStudentResponse?.email} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Contact Number</span>
                                <FormInput type="text" value={getStudentResponse?.phone} />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Parent Name</span>
                                <FormInput type="text" value={student.parent.name} />
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Parent Email</span>
                                <FormInput type="email" value={student.parent.email} />
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
                        <span className={styles.sectionTitle}>Achievements</span>
                        <Grid2 container={true} gap={1}>
                            {achievements.map((item) => (
                                <Grid2 key={item}><Avatar>{item}</Avatar></Grid2>
                            ))}
                        </Grid2>
                    </Paper>
                    <Paper className={styles.assessmentsWrapper}>
                        <span className={styles.sectionTitle}>Latest Assessments</span>
                        {assessments.map(({ date, score, title }) => (
                            <AssessmentCard score={score} submittedDate={date} title={title} key={title} />
                        ))}
                    </Paper>
                    <Paper className={styles.insightsWrapper}>
                        <div className={styles.insightSection}>
                            <span className={styles.sectionTitle}>Strengths</span>
                            <span>wlknclkdnclknclknc</span>
                        </div>
                        <div className={styles.insightSection}>
                            <span className={styles.sectionTitle}>Points to improve</span>
                            <span>wlknclkdnclknclknc</span>
                        </div>
                        <div className={styles.insightSection}>
                            <span className={styles.sectionTitle}>Note</span>
                            <span>wlknclkdnclknclknc</span>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;