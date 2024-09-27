import { Paper } from '@mui/material';

import './styles.scss';

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <Paper elevation={16} className="dashboardContent">
        <Paper className="dashboardHeader">Header</Paper>
        <Paper className="statistics">Stats</Paper>
        <Paper className="charts">Charts</Paper>
      </Paper>
      <div>
        Leaderboard
      </div>
    </div>
  );
};

export default Dashboard;
