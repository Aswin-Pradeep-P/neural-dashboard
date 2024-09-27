import { Paper } from '@mui/material';

import './styles.scss';

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <div className='dashboard-wrapper'>
        <Paper elevation={16} className="dashboardContent">
          <Paper className="dashboardHeader">Header</Paper>
          <Paper className="statistics">Stats</Paper>
          <Paper className="charts">Charts</Paper>
        </Paper>
      </div>
      <div>
        Leaderboard
      </div>
    </div>
  );
};

export default Dashboard;
