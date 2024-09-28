import { useRecoilValue } from 'recoil';
import styles from './header.module.scss';
import { Badge, Paper } from '@mui/material';
import { profileAtom } from '../../atoms/profile';

const Header = () => {
  const userInfo = useRecoilValue(profileAtom);
  return (
    <Paper className={styles.header}>
      <span>Hello {userInfo.name} 👋 </span>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}><img src='./header-avatar.jpg' /><h2>{userInfo.name} James</h2></button>
        <div className={styles.dropdownContent}>

          <a href="#">My Profile</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </Paper>
  );
};

export default Header;
