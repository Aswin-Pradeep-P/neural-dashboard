import React, { FC } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import LeaderCard, { LeaderCardProps } from '../leader-card/leaderCard';
import styles from './leaderBoard.module.scss';
import Paper from '@mui/material/Paper';
import Avatar from '../avatar/avatar';

export interface LeaderBoardPrps {
  leaderList: LeaderCardProps[];
}

const LeaderBoard: FC<LeaderBoardPrps> = ({ leaderList }) => {
  const firstLeader = leaderList[0];
  const remainingLeaders = leaderList.slice(1);
  console.log(remainingLeaders);
  return (
    <Paper className={styles.leaderBoardContainer}>
      <div className={styles.header}>
        <h1>LeaderBoard </h1>
        {/* <EmojiEventsIcon fontSize="large" /> */}
      </div>
      <Paper className={styles.topper}>
      <Avatar >{firstLeader.name}</Avatar>
      <div className={styles.rankHolder}>{firstLeader.rank}</div>
      <div className={styles.rankHolder}>{firstLeader.name}</div>
      <div className={styles.rankHolder}>{firstLeader.percentage}</div>
      </Paper>
      <div className={styles.leaderListWrapper}>
        {remainingLeaders.map((leader) => (
          <LeaderCard
            key={leader.id}
            id={leader.id}
            name={leader.name}
            percentage={leader.percentage}
            rank={leader.rank}
          />
        ))}
      </div>
    </Paper>
  );
};

export default LeaderBoard;
