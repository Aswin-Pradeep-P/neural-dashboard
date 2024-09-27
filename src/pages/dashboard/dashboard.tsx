import { Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

import styles from './dashboard.module.scss';
import { assessmentReport, dashboardCard, leaderData } from './constants';
import DashboardCard from '../../components/dashboardCard/dashboardCard';
import LeaderBoard from '../../components/leaderBoard/leaderBoard';
import Header from '../../components/header/header';
import { useRecoilValue } from 'recoil';
import { profileAtom } from '../../atoms/profile';
import StudentDashboard from '../student-dashboard/studentDashboard';

const uData = [4000, 3000, 2000];
const pData = [2400, 1398, 9800];
const xLabels = [
  'Page A',
  'Page B',
  'Page C'
];

const Dashboard = () => {
  const profile = useRecoilValue(profileAtom);

  if(profile.type === 'student') {
    return <StudentDashboard />
  }

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
                <PieChart 
                  colors={['#25BF8B', '#D3EEE3']} 
                  series={assessmentReport} 
                  height={300} 
                  margin={{ top: 50, bottom: 10, left: 10, right:10 }}
                  slotProps={{
                    legend: {
                      direction: 'row',
                      position: { vertical: 'top', horizontal: 'middle' },
                      padding: 0
                    },
                  }}
                />
                </Paper>
              <Paper className={styles.modulesReport}>
                <h3>Module</h3>
                <BarChart
                  width={500}
                  height={300}
                  series={[
                    { data: pData, label: 'pv', id: 'pvId' },
                    { data: uData, label: 'uv', id: 'uvId' },
                  ]}
                  xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
              </Paper>
            </div>
          </Paper>
        </Paper>
      </div>
      <LeaderBoard leaderList={leaderData} />
    </div>
  );
};
export default Dashboard;
