import styles from './studentDashboard.module.scss';
import { useState } from 'react';
import StudentReport from './components/student-report/studentReport';
import StudentProfile from '../student-profile/studentProfile';
import Paper from '@mui/material/Paper';

const StudentDashboard = () => {
  const [tab, setTab] = useState('Profile');

  const getStudentTab = () => {
    if (tab === 'Profile') {
      return <StudentProfile />;
    } else if (tab === 'Report') {
      return <StudentReport />;
    }
  };
  return (
    <div className={styles.studentDashboard}>
      <div className={styles.tabsContainer}>
        <div
          className={`${styles.tab} ${
            tab === 'Profile' ? styles.selectedTab : ''
          }`}
          onClick={() => setTab('Profile')}
        >
          Profile
        </div>
        <div
          className={`${styles.tab} ${
            tab === 'Report' ? styles.selectedTab : ''
          }`}
          onClick={() => setTab('Report')}
        >
          Report
        </div>
      </div>
      <div className={styles.student}>{getStudentTab()}</div>
    </div>
  );
};

export default StudentDashboard;
