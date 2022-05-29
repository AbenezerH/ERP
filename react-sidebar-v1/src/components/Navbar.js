import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './NavbarItem';
import { useNavigate } from "react-router-dom";
import Header from './Header';
const Navbar = () => {
  const Navigate=useNavigate();
    const drawerWidth=220;
  return (
    <>
    <Header />
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            paddingTop:5,
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
          {mainNavbarItems.map((item, index) => (
            <ListItem button key={item.id} onClick={() => Navigate(item.route)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </>
  )
}

export default Navbar