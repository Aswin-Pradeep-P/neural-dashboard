import Paper from '@mui/material/Paper';
import React, { FC } from 'react';
import styles from './leaderCard.module.scss';
import Avatar from '../avatar/avatar';

export interface LeaderCardProps {
  id: string;
  name: string;
  rank: number;
  percentage: string;
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

const LeaderCard: FC<LeaderCardProps> = ({ name, rank, percentage }) => {

  return (
    <Paper className={styles.leaderCard}>
      <Avatar>{name}</Avatar>
      <div className={styles.nameWrapper}>
        <span>{name}</span>
        <span>{percentage}</span>
      </div>
      <div className={styles.rank} style={{ backgroundColor: getColor(name) }}>
        {rank}
      </div>
    </Paper>
  );
};

export default LeaderCard;
