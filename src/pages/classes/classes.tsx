import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './classes.module.scss';
import ClassCard from '../../components/class-card/classCard';
import { Grid2 } from '@mui/material';
import { useRecoilValue, useRecoilState } from 'recoil';
import { profileAtom } from '../../atoms/profile';
import { selectedClass } from '../../atoms/selectedClass';

export interface ClassCardProps {
  classes: string;
}

const Class = () => {
    const navigate = useNavigate();
    const userInfo = useRecoilValue(profileAtom);
    const [, setClass] = useRecoilState(selectedClass);

   const handleClassClick = (item: any) => {
    setClass(item)
    navigate('/dashboard')
   }

  return (
    <div className={styles.classContainer}>
        <div className={styles.classWrapper}>
        <h2>Select your grade</h2>
      <Grid2 container={true} gap={4}>
        {userInfo.createdGrades.map((item: any) => (
          <div onClick={()=> handleClassClick(item) }>
            <ClassCard key={item.id} classes={item.name}  />
          </div>
        ))}
      </Grid2>
      </div>
    </div>
  );
};

export default Class;
