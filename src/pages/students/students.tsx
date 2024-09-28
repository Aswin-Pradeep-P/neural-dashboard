import { Grid2, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';

import SearchInput from '../../components/search-input/searchInput';
import { useGetStudents } from '../../api/students/students';
import StudentCard from './components/student-card/studentCard';

import styles from './students.module.scss';
import Button from '../../components/button/button';

export interface Student {
  avgScore: number;
  dob: string;
  email: string;
  gender: string;
  id: string;
  name: string;
  phone: string;
  type: string;
}

const Students = () => {
  const [searchString, setSearchString] = useState('');

  const { getStudents, getStudentsResponse } = useGetStudents();

  useEffect(() => {
    getStudents();
  }, []);

  const getStudentsList = () => getStudentsResponse
    ?.filter(({ name, email }: Student) => name.toLowerCase().includes(searchString.toLowerCase())
    || email.toLowerCase().includes(searchString.toLowerCase()));
  
  return (
    <div className={styles.studentsContainer}>
      <div className={styles.studentsWrapper}>
        <Paper elevation={16} className={styles.studentsContent}>
          <Paper className={styles.studentsHeader}>
            <h1 className={styles.studh1}>Students</h1>
            <Button label="Invite Student"></Button>
          </Paper>
          <Paper className={styles.studentsSection}>
            <div className={styles.studentSearchFilterWrapper}>
              <SearchInput onChange={(e) => setSearchString(e.target.value)} value={searchString}  />
              <div className={styles.studentFilter}><FilterListIcon /></div>
            </div>
            <Grid2 container={true} gap={4} justifyContent="flex-start">
              {getStudentsList()?.map(({ email, gender, id,  name }: Student, index: number) => (
                <Grid2  style={{ width: 'calc(20% - 26px)' }}>
                  <StudentCard email={email} gender={gender} id={id} name={name} rollNumber={index+1} />
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
