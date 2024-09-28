import React, { FC } from 'react';

import LeaderCard from '../leader-card/leaderCard';
import styles from './leaderBoard.module.scss';
import Paper from '@mui/material/Paper';
import { Student } from '../../pages/students/students';

export interface LeaderBoardPrps {
  leaderList: Student[];
}

const LeaderBoard: FC<LeaderBoardPrps> = ({ leaderList = [] }) => {
  const firstLeader = leaderList && leaderList[0];
  const remainingLeaders = leaderList?.slice(1);

  return (
    <Paper className={styles.leaderBoardContainer}>
      <div className={styles.header}>
        <h1>Leaderboard </h1>
      </div>
      <Paper className={styles.topper}>
        <div className={styles.leaderAvatar}>
          <img src={`./avatars/${firstLeader?.gender.toLowerCase()}${Math.floor(Math.random() * 3) + 1}.svg`} alt='' />
        </div>
        {/* <div className={styles.rankHolder}>{firstLeader.rank}</div> */}
        <div className={styles.rankHolder}>{firstLeader?.name}</div>
        <div className={styles.rankHolder}>{`${firstLeader?.avgScore}%`}</div>
      </Paper>
      <div className={styles.leaderListWrapper}>
        {remainingLeaders?.map((leader, index) => (
          <LeaderCard
            key={leader.id}
            id={leader.id}
            name={leader.name}
            avgScore={leader.avgScore}
            rank={index + 2}
            gender={leader.gender}
          />
        ))}
      </div>
    </Paper>
  );
};

export default LeaderBoard;
