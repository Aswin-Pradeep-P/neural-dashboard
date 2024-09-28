import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Grid2, Paper } from '@mui/material';

import AssessmentCard from './components/assessment-card/assessmentCard';
import { useGetLeaderboardStudents, useGetStudent } from '../../api/students/students';
import { profileAtom } from '../../atoms/profile';
import LeaderBoard from '../../components/leaderBoard/leaderBoard';

import styles from './studentProfile.module.scss';

const student = {
    name: "Alice Smith", //
    rollNumber: 101, //
    email: "alice.smith@example.com", //
    age: 20,
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
    }
};

const assessments = [
    { title: "Data Structures Midterm", score: 85, date: "2024-03-15" },
    { title: "Web Development Project", score: 92, date: "2024-04-10" },
    { title: "Algorithms Final Exam", score: 78, date: "2024-05-22" },
    { title: "Operating Systems Quiz", score: 88, date: "2024-02-27" },
    { title: "Database Design Assignment", score: 95, date: "2024-03-30" }
];

const achievements = [
    { src: '/images/consistentPerformer.svg', title: 'Consistent Performer' },
    { src: '/images/engagementChampion.svg', title: 'Engagement Champion' },
    { src: '/images/knowledgeSeeker.svg', title: 'Knowledge Seeker' },
    { src: '/images/perfectionist.svg', title: 'Perfectionist' },
    { src: '/images/problemSolving.svg', title: 'Problem Solving' },
    { src: '/images/quizMastery.svg', title: 'Quiz Mastery' },
    { src: '/images/skillMastery.svg', title: 'Skill Mastery' },
]


const StudentProfile = () => {
    const { studentId } = useParams();
    const profile = useRecoilValue(profileAtom)
    const id = studentId || profile.id;

    const { getStudent, getStudentResponse } = useGetStudent(id as string);
    const { getLeaderboardStudents, getLeaderboardStudentsResponse } = useGetLeaderboardStudents();

    useEffect(() => {
        getLeaderboardStudents();
    }, []);

    useEffect(() => {
        getStudent();
    }, []);

    return (
        <div className={styles.studentProfileContainer}>
            <div className={styles.studentProfileContent}>
                <div className={styles.leftSection}>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <Paper className={styles.wrapper}>
                            <span className={styles.sectionTitle}>Personal Info</span>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div className={styles.infoWrapper}>
                                        <span className={styles.label}>Name:</span>
                                        <span>{getStudentResponse?.name}</span>
                                    </div>
                                    <div className={styles.infoWrapper}>
                                        <span className={styles.label}>Roll Number:</span>
                                        <span>{getStudentResponse?.rollNumber}</span>
                                    </div>
                                    <div className={styles.infoWrapper}>
                                        <span className={styles.label}>Date of birth:</span>
                                        <span>{getStudentResponse?.dob || '24/12/2006'}</span>
                                    </div>
                                    <div className={styles.infoWrapper}>
                                        <span className={styles.label}>Age:</span>
                                        <span>{student.age}</span>
                                    </div>
                                    <div className={styles.infoWrapper}>
                                        <span className={styles.label}>Gender:</span>
                                        <span>{getStudentResponse?.gender}</span>
                                    </div>
                                </div>
                                <img style={{ width: '200px', borderRadius: '8px' }} src="../avatar.jpg" alt="avatar" />
                            </div>
                        </Paper>
                        <Paper className={styles.achievementsWrapper}>
                            <span className={styles.sectionTitle}>Achievements</span>
                            <Grid2 container={true} gap={1}>
                                {achievements.map(({ src, title }) => (
                                    <Grid2 key={title}>
                                        <img src={src} alt={title} title={title} />
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Paper>
                        <Paper className={styles.wrapper}>
                            <span className={styles.sectionTitle}>Contact Info</span>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Email:</span>
                                <span>{getStudentResponse?.email}</span>
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Contact Number:</span>
                                <span>{getStudentResponse?.phone}</span>
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Parent Name:</span>
                                <span>{student.parent.name}</span>
                            </div>
                            <div className={styles.infoWrapper}>
                                <span className={styles.label}>Parent Email:</span>
                                <span>{student.parent.email}</span>
                            </div>
                        </Paper>
                    </div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <Paper className={styles.wrapper}>
                            <span className={styles.sectionTitle}>Latest Assessments</span>
                            <Grid2 container rowSpacing={4}>
                                {assessments.map(({ date, score, title }) => (
                                    <Grid2 width={'50%'}>
                                        <AssessmentCard score={score} submittedDate={date} title={title} key={title} />
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Paper>
                    </div>
                </div>
                <LeaderBoard leaderList={getLeaderboardStudentsResponse} />
            </div>
        </div>
    );
}

export default StudentProfile;