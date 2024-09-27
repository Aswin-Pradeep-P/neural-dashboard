import React from 'react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatIcon from '@mui/icons-material/Chat';
import { Person } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Drawer variant="permanent">
      <List>
        <ListItem>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" onClick={() => navigate('/')} />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Students" onClick={() => navigate('/students')} />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Subject Library" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Assessment" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;