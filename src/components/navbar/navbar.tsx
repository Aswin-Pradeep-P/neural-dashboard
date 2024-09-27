import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatIcon from '@mui/icons-material/Chat';
import { Person } from '@mui/icons-material';

import styles from './navbar.module.scss';
import { useRecoilValue } from 'recoil';
import { profileAtom } from '../../atoms/profile';

const navItems =  [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', paths : ['/dashboard', '/dashboard'] },
    { name: 'Students', icon: <Person />, path: '/students', paths: ['/students'] },
    { name: 'Library', icon: <LibraryBooksIcon />, path: '/library', paths: ['/library'] },
    { name: 'Assessments', icon: <AssessmentIcon />, path: '/assessments', paths: ['/assessments', '/assessments/create'] },
    { name: 'Planner', icon: <ChatIcon />, path: '/planner', paths: ['/planner', '/planner/create'] },
    { name: 'Chat', icon: <ChatIcon />, path: '/chat', paths: ['/chat'] } ]

    const studentNavItems =  [
      { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', paths : ['/dashboard'] },
      { name: 'Assessments', icon: <AssessmentIcon />, path: '/assessments', paths: ['/assessments', '/assessments/create'] }]

      const parentNavItems =  [
        { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', paths : ['/dashboard'] },
        { name: 'Assessments', icon: <AssessmentIcon />, path: '/assessments', paths: ['/assessments', '/assessments/create'] }]

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const profile = useRecoilValue(profileAtom);

  const isCurrentUrl = (paths: string[]) => {
    return paths.includes(location.pathname)
  }

  const getItems = () => {
    if(profile.type === 'student') {
      return studentNavItems
    }
    if(profile.type === 'parent') {
      return parentNavItems;
    }
    return navItems;
  }

  return (
    <Drawer variant="permanent" className='home-nav'>
      <div className='header-logo'>
        <img src='/logo.svg' />
      </div>
      <List>
        {
          getItems().map((item) => (
            <ListItem key={item.name} className={isCurrentUrl(item.paths) ? styles.currentUrl : ''}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} onClick={() => navigate(item.path)} />
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
};

export default Navbar;