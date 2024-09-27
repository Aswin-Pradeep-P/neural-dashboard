import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatIcon from '@mui/icons-material/Chat';
import { Person } from '@mui/icons-material';

import styles from './navbar.module.scss';

const navItems =  [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', paths : ['/', '/dashboard'] },
    { name: 'Students', icon: <Person />, path: '/students', paths: ['/students'] },
    { name: 'Library', icon: <LibraryBooksIcon />, path: '/library', paths: ['/library'] },
    { name: 'Assessments', icon: <AssessmentIcon />, path: '/assessments', paths: ['/assessments', '/assessments/create'] },
    { name: 'Planner', icon: <ChatIcon />, path: '/planner', paths: ['/planner'] },
    { name: 'Chat', icon: <ChatIcon />, path: '/chat', paths: ['/chat'] } ]

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isCurrentUrl = (paths: string[]) => {
    return paths.includes(location.pathname)
  }

  return (
    <Drawer variant="permanent" className='home-nav'>
      <div className='header-logo'>
        <img src='/logo.svg' />
      </div>
      <List>
        {
          navItems.map((item) => (
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