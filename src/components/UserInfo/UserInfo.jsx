import React from 'react';
import { Typography, Card, CardHeader, Avatar } from "@material-ui/core";
import useStyles from './styles';
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux"; 
// import { followUser } from "../../actions/users";

export const UserInfo = ({ userId, currentUser, firstName, lastName, username, bio }) => {
    const classes = useStyles();
    // const dispatch = useDispatch();
   
    return (
        <div>
        <Card className={classes.card}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={currentUser ? classes.avatar : classes.otherAvatar} fontSize="small">
            {firstName?.charAt(0).toUpperCase()}{lastName?.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={<Typography variant="body2" component={Link} to={`/${userId}`} className={classes.usernName}>{username}</Typography>}
        subheader={bio}
      />
          {/* <CardActions className={classes.cardActions}>
            {!currentUser && <Button size="small" color="primary" onClick={ dispatch(followUser(userId))}> Follow </Button>}
          </CardActions> */}
         
        </Card>
        </div>
    )
}
