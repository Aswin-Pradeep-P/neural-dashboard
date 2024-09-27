import { Grid2, Paper } from '@mui/material';
import { useState } from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import StudentCard from './components/student-card/studentCard';
import SearchInput from '../../components/search-input/searchInput';

import styles from './students.module.scss';
import { Padding } from '@mui/icons-material';

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
  { "name": "Jack Martinez", "rollNumber": 110, "email": "jack.martinez@example.com" },
  { "name": "Jack Martinez", "rollNumber": 110, "email": "jack.martinez@example.com" },
];

const Students = () => {
  const [searchString, setSearchString] = useState('');

  // const handleSearch = debounce(
  //   (queryString: string) => setSearchString(queryString),
  //   1000
  // );

  const handleSearchChange = (searchValue:string) => {
    setSearchString(searchValue);
    // handleSearch(searchValue);
  };

  const getStudentsList = () => studentData.filter(({ name, email }) => name.toLowerCase().includes(searchString.toLowerCase())
    || email.toLowerCase().includes(searchString.toLowerCase()));
  
  return (
    <div className={styles.studentsContainer}>
      <div className={styles.studentsWrapper}>
        <Paper elevation={16} className={styles.studentsContent}>
          <Paper className={styles.studentsHeader}><h1>Students</h1></Paper>
          <Paper className={styles.studentsSection}>
            <div className={styles.studentSearchFilterWrapper}>
              <SearchInput onChange={(e) => handleSearchChange(e.target.value)} value={searchString}  />
              <div className={styles.studentFilter}><FilterListIcon /></div>
            </div>
            <Grid2 container={true} gap={4} justifyContent="space-between">
              {getStudentsList().map(({ email, name, rollNumber }) => (
                <Grid2>
                  <StudentCard email={email} name={name} rollNumber={rollNumber} />
                </Grid2>
              ))}
            </Grid2>
          </Paper>
        </Paper>
      </div>
    </div>
  );
};

export default Students;
