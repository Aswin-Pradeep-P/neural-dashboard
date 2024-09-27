import React, { FC } from 'react';
import QuizIcon from '@mui/icons-material/Quiz';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ScoreIcon from '@mui/icons-material/Score';
import PeopleIcon from '@mui/icons-material/People';
import styles from './dashboardCard.module.scss';

export interface DashboardCardProps {
  count: number | string;
  title: string;
}

const DashboardCard: FC<DashboardCardProps> = ({ count, title }) => {
  function getIconByText(text: string) {
    switch (text) {
      case 'No of students':
        return <PeopleIcon />;
      case 'Total assessments':
        return <QuizIcon />;
      case 'Assessment completed':
        return <ChecklistIcon />;
      case 'Average Score':
        return <ScoreIcon />;
      default:
        return null;
    }
  }
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.content}>
        {getIconByText(title)}
        <div className={styles.header}>
          <div className={styles.text}>{title}</div>
          <div className={styles.count}>{count}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
