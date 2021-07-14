import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useStyles from './styles';
import { Card, CardHeader, CardContent, Avatar, Typography, Grid, CircularProgress } from "@material-ui/core";
import { Navbar } from "../../Navbar/Navbar";
import { Post } from "../../Posts/Post/Post";

export const UserProfilePage = () => {
    const classes = useStyles();
    const { profileId } = useParams();
    const users = useSelector((state) => state.users);
     const posts = useSelector((state) => state.posts);

    const [profile, setProfile] = useState(users?.filter(user => user._id === profileId)[0]);
    const [currentUserPosts, setCurrentUserPosts] = useState(posts.filter(post => post.userId._id === profileId));


  useEffect(() => {
    setProfile(users?.filter(user => user._id === profileId)[0]);
  }, []);

  useEffect(() => {
    setCurrentUserPosts(posts.filter(post => post.userId._id === profileId));
  }, [profile])
    return (
        <>
        <Navbar />
        {profile.length ? <CircularProgress/>:
        <Grid container justifyContent="space-around" style={{margin: "1rem 0"}}>
        <Grid item xs={12} sm={4}>
        <Card className={classes.card} >
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" fontSize="large" className={classes.avatar}>
            {profile.firstName.charAt(0).toUpperCase()}{profile.lastName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={<Typography variant="h6">{profile.username}</Typography>}
        subheader={<Typography>{profile.followers.length}&nbsp;followers&nbsp;&nbsp;{profile.following.length}&nbsp;following</Typography>}
      />
        <CardContent className={classes.content}>
          <Typography variant="h6" color="textPrimary" component="p">{profile.firstName}&nbsp;{profile.lastName}</Typography>
          <Typography variant="h6" color="textSecondary" component="p">{profile.bio}</Typography>
        </CardContent>
        </Card>
        </Grid>
        </Grid> }
        {currentUserPosts.length === 0 ? <Typography variant="h6" style={{textAlign: "center", padding: "4rem"}}>No posts yet</Typography> : (
          <Grid container justifyContent="space-around" spacing={3} >
            <Grid className={classes.container} container justifyContent="space-around"  direction="column-reverse" alignItems="stretch" xs={12} sm={4}  >
                {currentUserPosts.map((post) => (
                    <Grid key={post._id} item>
                        <Post post={post} authData={profile._id}/>
                    </Grid>
                ))}
            </Grid>
            </Grid>)}
            
           
       
        </>
    )
}
