import { Grid2, Paper } from '@mui/material';

import StudentCard from './components/student-card/studentCard';
import SearchInput from '../../components/search-input/searchInput';

import styles from './students.module.scss';

const studentData = [
    { "name": "Alice Smith", "rollNumber": 101 },
    { "name": "Bob Johnson", "rollNumber": 102 },
    { "name": "Charlie Williams", "rollNumber": 103 },
    { "name": "David Brown", "rollNumber": 104 },
    { "name": "Ella Jones", "rollNumber": 105 },
    { "name": "Franklin Garcia", "rollNumber": 106 },
    { "name": "Grace Miller", "rollNumber": 107 },
    { "name": "Henry Davis", "rollNumber": 108 },
    { "name": "Isla Rodriguez", "rollNumber": 109 },
    { "name": "Jack Martinez", "rollNumber": 110 },
    { "name": "Katie Hernandez", "rollNumber": 111 },
    { "name": "Liam Wilson", "rollNumber": 112 },
    { "name": "Mia Moore", "rollNumber": 113 },
    { "name": "Noah Taylor", "rollNumber": 114 },
    { "name": "Olivia Anderson", "rollNumber": 115 },
    { "name": "Paul Thomas", "rollNumber": 116 },
    { "name": "Quincy Jackson", "rollNumber": 117 },
    { "name": "Rachel White", "rollNumber": 118 },
    { "name": "Sam Harris", "rollNumber": 119 },
    { "name": "Tina Martin", "rollNumber": 120 },
    { "name": "Uma Thompson", "rollNumber": 121 },
    { "name": "Victor Lewis", "rollNumber": 122 },
    { "name": "Wendy Lee", "rollNumber": 123 },
    { "name": "Xander Walker", "rollNumber": 124 },
    { "name": "Yara Hall", "rollNumber": 125 },
    { "name": "Zane Allen", "rollNumber": 126 },
    { "name": "Abby Young", "rollNumber": 127 },
    { "name": "Ben King", "rollNumber": 128 },
    { "name": "Cara Wright", "rollNumber": 129 },
    { "name": "Dan Scott", "rollNumber": 130 }
  ];

const Students = () => {
  return (
    <div className={styles.studentsContainer}>
      <Paper elevation={16} className={styles.studentsContent}>
        <Paper className={styles.studentsHeader}>Students</Paper>
        <Paper className={styles.studentsSection}>
            <div className={styles.studentSearchFilterWrapper}>
                <SearchInput onChange={() => {}} value='' />
                <div>Filter</div>
            </div>
            <Grid2 container={true} gap={4}>
                {studentData.map(({ name, rollNumber }) => (
                    <Grid2>
                        <StudentCard name={name} rollNumber={rollNumber} />
                    </Grid2>
                ))}
            </Grid2>
        </Paper>
      </Paper>
    </div>
  );
};

export default Students;
