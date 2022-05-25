import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { hrNavbarItems } from './HrnavbarItem';
import { useNavigate } from "react-router-dom";import React from 'react'

const Hrnavbar = () => {
  const Navigate=useNavigate();
  const drawerWidth=220;
return (
  <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#101F33',
          color: 'rgb(255, 255, 255, 0.7)',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {hrNavbarItems.map((item, index) => (
          <ListItem button key={item.id} onclick={() => Navigate(item.route)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
)
}

export default Hrnavbar
