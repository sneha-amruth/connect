import React from "react";
import useStyles from "./styles";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from "@material-ui/icons/Delete";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

export const Post = ({post, authData}) => {
    const postId = post._id;
    const classes = useStyles();
    const dispatch = useDispatch();
    const userIdPost = post.userId._id;

    return (
        <Card className={classes.card}>
        <CardContent>
          <div className={classes.userInfo}>
          <AccountCircleIcon/>
          <Typography variant="body2" className={classes.usernName}>{post.userId.username}</Typography>
          </div>
          <div><Typography variant="h6" color="textPrimary" component="p">{post.caption}</Typography></div>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="red" onClick={() => dispatch(likePost(post._id, post.likes.likesCount))}><FavoriteBorderIcon fontSize="small" /> &nbsp;{post.likes.likesCount}likes&nbsp; </Button>
           {authData === userIdPost && <Button size="small" color="primary" onClick={() => dispatch(deletePost(postId))}><DeleteIcon fontSize="small" /></Button>}
          </CardActions>
          <CardContent>
            <Typography variant="body2" style={{ color: "black" }}> {moment(post.createdAt).fromNow()}</Typography>
          </CardContent>
        </Card>
    )
}