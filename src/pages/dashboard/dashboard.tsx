import { Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useRecoilValue } from 'recoil';

import styles from './dashboard.module.scss';
import { assessmentReport, dashboardCard, leaderData, moduleReport } from './constants';
import DashboardCard from '../../components/dashboardCard/dashboardCard';
import LeaderBoard from '../../components/leaderBoard/leaderBoard';
import Header from '../../components/header/header';
import { selectedClass } from '../../atoms/selectedClass';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <div className={styles.dashboardWrapper}>
        <Paper className={styles.dashboardContent}>
          <h1>Dashboard</h1>
          <Paper className={styles.dashboardHeader}></Paper>
          <Paper className={styles.dashboardCount}>
            {dashboardCard.map((card) => (
              <DashboardCard
                title={card.text}
                count={card.count}
                key={card.text}
              />
            ))}
          </Paper>
          <Paper className={styles.charts}>
            <h1>Reports</h1>
            <div className={styles.statistics}>
              <Paper className={styles.assessmentReport}>
                <h3>Assessment</h3>
                <PieChart series={assessmentReport} width={400} height={200} />
              </Paper>
              <Paper className={styles.modulesReport}>
                <h3>Module</h3>
                <PieChart series={moduleReport} width={400} height={200} />
              </Paper>
            </div>
          </Paper>
        </Paper>
      </div>
      <div>
        <LeaderBoard leaderList={leaderData} />
      </div>
    </div>
  );
};

export default Dashboard;
