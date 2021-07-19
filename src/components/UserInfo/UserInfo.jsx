import React, { useState} from 'react';
import { Typography, Card, CardHeader, Avatar, CardActions, Button } from "@material-ui/core";
import useStyles from './styles';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { followUser, unFollowUser } from "../../actions/users";
import { useSelector } from "react-redux";

export const UserInfo = ({ userId, currentUser, firstName, lastName, username, bio }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentUserId = JSON.parse(localStorage.getItem('profile'))?.userId;
    const users = useSelector((state) => state.users);
    const currentUserDetails = Object.values(users).filter(user => user._id === currentUserId)[0];
    const followingUser =  currentUserDetails.following.some(user => user.userId === userId);
    const [isFollowing, setFollowing] = useState(followingUser);

    const handleFollow = () => {
      if(isFollowing){
        setFollowing(!isFollowing);
        dispatch(unFollowUser(userId));
      }
      else {
       setFollowing(!isFollowing);
       dispatch(followUser(userId));
      }
    }
   
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
          <CardActions className={classes.cardActions}>
            {!currentUser && <Button size="small" className={isFollowing ? classes.unfollowText: classes.followText} onClick={handleFollow}> {isFollowing ? "unfollow" : "follow"} </Button>}
          </CardActions>
         
        </Card>
        </div>
    )
}
