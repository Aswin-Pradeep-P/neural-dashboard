import { Grid2, Paper } from '@mui/material';

import StudentCard from './components/student-card/studentCard';
import SearchInput from '../../components/search-input/searchInput';

import styles from './students.module.scss';

const studentData = [
  { "name": "Alice Smith", "rollNumber": 101, "email": "alice.smith@example.com" },
  { "name": "Bob Johnson", "rollNumber": 102, "email": "bob.johnson@example.com" },
  { "name": "Charlie Williams", "rollNumber": 103, "email": "charlie.williams@example.com" },
  { "name": "David Brown", "rollNumber": 104, "email": "david.brown@example.com" },
  { "name": "Ella Jones", "rollNumber": 105, "email": "ella.jones@example.com" },
  { "name": "Franklin Garcia", "rollNumber": 106, "email": "franklin.garcia@example.com" },
  { "name": "Grace Miller", "rollNumber": 107, "email": "grace.miller@example.com" },
  { "name": "Henry Davis", "rollNumber": 108, "email": "henry.davis@example.com" },
  { "name": "Isla Rodriguez", "rollNumber": 109, "email": "isla.rodriguez@example.com" },
  { "name": "Jack Martinez", "rollNumber": 110, "email": "jack.martinez@example.com" },
  { "name": "Katie Hernandez", "rollNumber": 111, "email": "katie.hernandez@example.com" },
  { "name": "Liam Wilson", "rollNumber": 112, "email": "liam.wilson@example.com" },
  { "name": "Mia Moore", "rollNumber": 113, "email": "mia.moore@example.com" },
  { "name": "Noah Taylor", "rollNumber": 114, "email": "noah.taylor@example.com" },
  { "name": "Olivia Anderson", "rollNumber": 115, "email": "olivia.anderson@example.com" },
  { "name": "Paul Thomas", "rollNumber": 116, "email": "paul.thomas@example.com" },
  { "name": "Quincy Jackson", "rollNumber": 117, "email": "quincy.jackson@example.com" },
  { "name": "Rachel White", "rollNumber": 118, "email": "rachel.white@example.com" },
  { "name": "Sam Harris", "rollNumber": 119, "email": "sam.harris@example.com" },
  { "name": "Tina Martin", "rollNumber": 120, "email": "tina.martin@example.com" },
  { "name": "Uma Thompson", "rollNumber": 121, "email": "uma.thompson@example.com" },
  { "name": "Victor Lewis", "rollNumber": 122, "email": "victor.lewis@example.com" },
  { "name": "Wendy Lee", "rollNumber": 123, "email": "wendy.lee@example.com" },
  { "name": "Xander Walker", "rollNumber": 124, "email": "xander.walker@example.com" },
  { "name": "Yara Hall", "rollNumber": 125, "email": "yara.hall@example.com" },
  { "name": "Zane Allen", "rollNumber": 126, "email": "zane.allen@example.com" },
  { "name": "Abby Young", "rollNumber": 127, "email": "abby.young@example.com" },
  { "name": "Ben King", "rollNumber": 128, "email": "ben.king@example.com" },
  { "name": "Cara Wright", "rollNumber": 129, "email": "cara.wright@example.com" },
  { "name": "Dan Scott", "rollNumber": 130, "email": "dan.scott@example.com" }
];

const Students = () => {
  return (
    <div className={styles.studentsContainer}>
      <Paper elevation={16} className={styles.studentsContent}>
        <Paper className={styles.studentsHeader}>Students</Paper>
        <Paper className={styles.studentsSection}>
          <div className={styles.studentSearchFilterWrapper}>
            <SearchInput onChange={() => { }} value='' />
            <div>Filter</div>
          </div>
          <Grid2 container={true} gap={4}>
            {studentData.map(({ email, name, rollNumber }) => (
              <Grid2>
                <StudentCard email={email} name={name} rollNumber={rollNumber} />
              </Grid2>
            ))}
          </Grid2>
        </Paper>
      </Paper>
    </div>
  );
};

export default Students;
