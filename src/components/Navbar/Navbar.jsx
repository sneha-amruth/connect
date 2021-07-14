import { AppBar, Toolbar, Grid, Typography, IconButton, Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import brand from "../../assets/brand-img.png";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from "./styles";
import { LOGOUT } from "../../constants/actionTypes";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
      dispatch({ type: LOGOUT });
      navigate('/auth');
      setUser(null);
    };

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    return (
        <Grid container className={classes.navBar}>
        <AppBar position="static">
           <Toolbar>
              <img src={brand} className={classes.image} alt="connect logo" height="60" />
             <Typography variant="h4" component={Link} to="/" className={classes.typographyStyle}>connect</Typography>
            {user?.userId ? 
            (<Grid item>
                <IconButton onClick={logout} className={classes.iconStyle} aria-label="logout"> <ExitToAppIcon /> </IconButton>
                <IconButton component={Link} to="/notifications" className={classes.iconStyle} aria-label="leaderboard"> <FavoriteBorderIcon/> </IconButton>
                <IconButton component={Link} to="/account" className={classes.iconStyle} aria-label="account"> <AccountCircleIcon /> </IconButton>
          </Grid>)
            :( <Button component={Link} to="/auth" variant="contained" color="primary">Login</Button>)
             }
           </Toolbar>
        </AppBar>
         </Grid>
    )
}