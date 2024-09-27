import NotificationsIcon from '@mui/icons-material/Notifications';

import './styles.scss';
import { Badge } from '@mui/material';

const Header = () => {
  return (
    <div className="header">
      <span> Hello, Saranya!</span>
      <Badge badgeContent={99}><NotificationsIcon /></Badge>
    </div>
  )
}

export default Header