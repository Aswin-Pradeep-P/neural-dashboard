import NotificationsIcon from '@mui/icons-material/Notifications';

import styles from './header.module.scss';
import { Badge, Paper } from '@mui/material';
import Avatar from '../avatar/avatar';

const Header = () => {
  return (
    <Paper className={styles.header}>
      {/* <Avatar>Martin maecus</Avatar> */}
      <span> Hello, Martin 👋</span>
    </Paper>
  );
};

export default Header;
