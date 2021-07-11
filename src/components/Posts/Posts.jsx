import React from "react";
import { Post } from "./Post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core"
import { useSelector } from "react-redux";

export const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();


    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}