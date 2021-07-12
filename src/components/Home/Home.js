import React, {useEffect} from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import { Posts } from '../Posts/Posts';
import { Form } from "../Form/Form";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch } from "react-redux"; 
import { getPosts } from "../../actions/posts";
import { UserInfo } from "../UserInfo/UserInfo";

export const Home = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

    return (
        <>
        <Navbar />
        <Container maxwidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
                  <Form />
            </Grid>
            <Grid item xs={12} sm={4}>
                  <UserInfo/>
            </Grid>
        </Grid>
        <Grow in>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={8}>
                  <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                 {/* <UserInfo/> */}
              </Grid>
          </Grid>
        </Grow>
    </Container>
    </>
    )
}