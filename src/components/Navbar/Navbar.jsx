import React from 'react';
import { AppBar, Toolbar, Grid, Typography, IconButton, Button, Modal } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import brand from "../../assets/brand-img.png";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from "./styles";
import { LOGOUT } from "../../constants/actionTypes";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNotifications } from "../../actions/users";
import { Notification } from "../Notification/Notification";

export const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notifs = useSelector((state) => state.notifs);
    

    function getModalStyle() {
      const top = 30;
      const left = 73;
    
      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      dispatch(getNotifications());
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h4 id="simple-modal-title">Notifications</h4>
        <p id="simple-modal-description">
          <Notification notifs={notifs}/>
        </p>
      </div>
    )

    const logout = () => {
      dispatch({ type: LOGOUT });
      navigate('/auth');
      setUser(null);
    };

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    return (
      <>
        <Grid container className={classes.navBar}>
        <AppBar position="static">
           <Toolbar>
              <img src={brand} className={classes.image} alt="connect logo" height="60" />
             <Typography variant="h4" component={Link} to="/" className={classes.typographyStyle}>connect</Typography>
            {user?.userId ? 
            (<Grid item>
                <IconButton onClick={logout} className={classes.iconStyle} aria-label="logout"> <ExitToAppIcon /> </IconButton>
                <IconButton onClick={handleOpen} className={classes.iconStyle} aria-label="notifications"> <FavoriteBorderIcon/> </IconButton>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                {body}
              </Modal>
                <IconButton component={Link} to="/account" className={classes.iconStyle} aria-label="account"> <AccountCircleIcon /> </IconButton>
             </Grid>)
            :( <Button component={Link} to="/auth" variant="contained" color="primary">Login</Button>)
             }
           </Toolbar>
         </AppBar>
         </Grid>
       
         </>
    )
}