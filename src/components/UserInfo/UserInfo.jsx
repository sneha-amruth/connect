import React from 'react';
import { Typography, Card, CardContent, CardActions, Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import useStyles from './styles';


export const UserInfo = ({ currentUser, firstName, lastName, username, bio }) => {
    const classes = useStyles();
   
    return (
        <div>
        <Card className={classes.card}>
        <CardContent>
          <div className={classes.userInfo}>
            <AccountCircleIcon fontSize="large" color={currentUser ? "secondary" : "primary"}/>
            <Typography variant="body2" className={classes.usernName}>{username}</Typography>
          </div>
          <div><Typography variant="body1" color="textSecondary" component="p">{firstName}{" "}{lastName}</Typography></div>
          <div><Typography variant="h6" color="textPrimary" component="p">{bio}{" "}</Typography></div>
          </CardContent>
          <CardActions className={classes.cardActions}>
            {!currentUser && <Button size="small" color="primary" onClick={() => {}}> Follow </Button>}
          </CardActions>
         
        </Card>
        </div>
    )
}
