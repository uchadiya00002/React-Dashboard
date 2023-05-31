import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography,  Avatar } from '@mui/material';

import './notification.scss';

const Notification = ({ isNotificationOpen, setIsNotificationOpen,handleToggleNotification}) => {

//   const handleToggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div className="notification-container">
      {/* <IconButton className="notification-icon" onClick={handleToggleDrawer}>
        <NotificationsIcon />
      </IconButton> */}

      <Drawer
        anchor="right"
        open={isNotificationOpen}
        onClose={handleToggleNotification}
        className="notification-drawer"
      >
        <div style={{backgroundColor:"#8884d8"
      ,
      display:"flex",
      alignItems:"center",
      color:"white",
      justifyContent:"space-between",
      padding: 15,

      
      }}>

          <Typography  variant="h6" className="">
            Notifications
          </Typography>
          <div style={{fontSize:22 ,cursor:"pointer"}} onClick  ={handleToggleNotification}>
            X
          </div>
        </div>
        <div className="notification-list">
          <List >
            {/* Add dummy notifications */}
            <ListItem button>
              <Avatar style={{
backgroundColor:"lightseagreen",
                    marginRight: 15,
              
            }} />
              <ListItemText primary="Notification 1" secondary="This is the first notification" />
            </ListItem>
            <ListItem button>
            <Avatar style={{

backgroundColor:"lightgreen",
                    marginRight: 15,
              

}} />
              <ListItemText primary="Notification 2" secondary="This is the second notification" />
            </ListItem>
            <ListItem button>
            <Avatar style={{


backgroundColor:"lightpink",
                    marginRight: 15,
             

}} />
              <ListItemText primary="Notification 3" secondary="This is the third notification" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Notification;
