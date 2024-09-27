import { useRecoilValue } from 'recoil';
import styles from './header.module.scss';
import { Badge, Paper } from '@mui/material';
import { profileAtom } from '../../atoms/profile';

const Header = () => {
  const userInfo = useRecoilValue(profileAtom);
  return (
    <Paper className={styles.header}>
      <span>Hello {userInfo.name} 👋 </span>
    </Paper>
  );
};

export default Header;
