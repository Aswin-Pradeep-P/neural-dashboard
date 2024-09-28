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

const pData = [77, 92, 68, 89, 85];
const xLabels = [
  '2020',
  '2021',
  '2022',
  '2023',
  '2024'
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
                  colors={['#D3EEE3', '#25BF8B']} 
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
                <h3>Average Score</h3>
                <BarChart
                  colors={['#25BF8B']} 
                  width={500}
                  height={300}
                  series={[
                    { data: pData, label: 'Average Score', id: 'pvId' },
                  ]}
                  xAxis={[{ data: xLabels, scaleType: 'band' }]}
                  slotProps={{
                    legend: {
                      hidden: true
                    },
                  }}
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
