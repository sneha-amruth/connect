import React, {useEffect} from 'react'
import { Container, AppBar, Toolbar, Grow, Grid, Typography, IconButton } from "@material-ui/core";
import brand from "./assets/brand-img.png";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { Posts } from './components/Posts/Posts';
import { Form } from "./components/Form/Form";
import { getPosts } from "./actions/posts"
import useStyles from "./styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <>
    <Grid container className={classes.navBar}>
     <AppBar position="static">
        <Toolbar>
           <img src={brand} className={classes.image} alt="connect logo" height="60" />
          <Typography variant="h4" component={Link} to="/" className={classes.typographyStyle}>connect</Typography>
          <Grid item>
                <IconButton onClick={() => {}} className={classes.iconStyle} aria-label="logout"> <ExitToAppIcon /> </IconButton>
                <IconButton component={Link} to="/notifications" className={classes.iconStyle} aria-label="leaderboard"> <FavoriteBorderIcon/> </IconButton>
                <IconButton component={Link} to="/account" className={classes.iconStyle} aria-label="account"> <AccountCircleIcon /> </IconButton>
          </Grid>
        </Toolbar>
     </AppBar>
      </Grid>
    <Container maxwidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
                  <Form />
            </Grid>
        </Grid>
        <Grow in>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={8}>
                  <Posts />
              </Grid>
              {/* <Grid item xs={12} sm={4}>
                  <Form />
              </Grid> */}
          </Grid>
        </Grow>
    </Container>
    </>
  );
}
 
export default App
