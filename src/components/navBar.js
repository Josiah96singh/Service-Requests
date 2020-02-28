import React from 'react'
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import UserIconOutlined from '@material-ui/icons/AccountCircleOutlined';
import OutotecLogo from '../reusables/OLogo.png'
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar : {
      backgroundColor: 'white',
  },
logo: {
  width: 135,
  height: 43.54
},
  menuButton: {
    padding: 20
  },
  title: {
    flexGrow: 1,
    paddingLeft: 20,
    color: '#606060',
    fontWeight: 600
    },
    userlink: {
      flexDirection: 'flex-end',
      color: '#606060',
      fontWeight: 300
    },
    divider: {
      height: 'auto',
      
    }
}));

    function Navbar() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="absolute" style={{zIndex: 2, boxShadow: 'none', borderBottom: '1px solid #E8E8E8'}} className={classes.appBar}>
          <Toolbar>   
          <img className={classes.logo} src={OutotecLogo} alt='Outotec logo' />       
            <Typography variant="h6" className={classes.title}>
              Service Center
            </Typography>
            <Divider className={classes.divider} orientation='vertical' light flexItem/>
            <IconButton className={classes.menuButton} color="'#606060'">
            <UserIconOutlined />
          </IconButton>
            <Typography variant="p" className={classes.userlink}>
              Username
            </Typography>
            {/* <Button color="#C1C1C1">Username</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar;
