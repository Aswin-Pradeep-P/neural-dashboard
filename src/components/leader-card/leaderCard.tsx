import Paper from '@mui/material/Paper';
import React, { FC } from 'react';
import styles from './leaderCard.module.scss';

export interface LeaderCardProps {
  id: string;
  name: string;
  rank: number;
  avgScore: number;
  gender: string;
}

export const getColor = (id: string) => {
    let hash = 0;
    let i;
    let color = '#';

    for (i = 0; i < id.length; i += 1) {
      hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

const LeaderCard: FC<LeaderCardProps> = ({ name, rank, avgScore: percentage, gender }) => {
  console.log(gender);

  return (
    <Paper className={styles.leaderCard}>
      <div className={styles.rank}>
        {rank}
      </div>
      <div className={styles.leaderAvatar}>
        <img src={`./avatars/${gender.toLowerCase()}${Math.floor(Math.random() * 3) + 1}.svg`} alt='' />
      </div>
      <div className={styles.nameWrapper}>
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>

    </Paper>
  );
};

export default LeaderCard;
