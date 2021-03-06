import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography } from "@material-ui/core";
import { Posts } from '../Posts/Posts';
import { Form } from "../Form/Form";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch } from "react-redux"; 
import { getPosts } from "../../actions/posts";
import { getAllUsers } from "../../actions/users";
import { UserInfo } from "../UserInfo/UserInfo";
import { useSelector } from "react-redux";


export const Home = () => {
  const [currentUserId, setCurrentUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.userId);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentUserDetails = Object.values(users).filter(user => user._id === currentUserId)[0];
  const otherUsers = Object.values(users).filter(user => user._id !== currentUserId);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getPosts());
    setCurrentUserId(JSON.parse(localStorage.getItem('profile'))?.userId);
  }, [dispatch]);

    return (
        <>
        <Navbar />
        <Container maxwidth="lg">
        <Grid container direction="row" spacing={5} alignItems="stretch">
          <Grid item justifyContent="space-around" xs={12} sm={8} spacing={5}>
            <Grid item> <Form/> </Grid>
            <Grid item>  <Posts/> </Grid>
        </Grid>
        <Grid item  justifyContent="space-around" xs={12} sm={4} spacing={5}>
          <Grid item> {currentUserDetails && <UserInfo key={currentUserDetails._id} userId={currentUserDetails._id}  currentUser={true} firstName={currentUserDetails.firstName} lastName={currentUserDetails.lastName} username={currentUserDetails.username} bio={currentUserDetails.bio}/>}  </Grid>
          <Grid item> <Typography color="textSecondary" style={{margin: "1rem 0"}} variant="h6" > Suggestions For You </Typography></Grid>
          <Grid item>  
             {otherUsers.map((user) => (
                <UserInfo key={user._id} userId={user._id} currentUser={false} firstName={user.firstName} lastName={user.lastName} username={user.username} bio={user.bio}/>
              ))} </Grid>
        </Grid>
        </Grid>
       </Container>
    </>
    )
}