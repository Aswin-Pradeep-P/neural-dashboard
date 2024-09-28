import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import StudentReport from './components/student-report/studentReport';
import StudentProfile from '../student-profile/studentProfile';
import Header from '../../components/header/header';

import styles from './studentDashboard.module.scss';

const StudentDashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('Profile');
  console.log(location.pathname);

  const getStudentTab = () => {
    if (tab === 'Profile') {
      return <StudentProfile />;
    } else if (tab === 'Report') {
      return <StudentReport />;
    }
  };
  return (
    <div className={styles.studentDashboard}>
      {location.pathname === '/dashboard' && <Header />}
      <div className={styles.tabsContainer}>
        <div
          className={`${styles.tab} ${tab === 'Profile' ? styles.selectedTab : ''}`}
          onClick={() => setTab('Profile')}
        >
          Profile
        </div>
        <div
          className={`${styles.tab} ${tab === 'Report' ? styles.selectedTab : ''}`}
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
