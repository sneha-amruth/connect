import React from "react";
import useStyles from "./styles";
import { Card, CardHeader, CardActions, CardContent, Avatar, Button, Typography } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from '@material-ui/icons/Favorite';

import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

export const Post = ({post, authData}) => {
    const postId = post._id;
    const classes = useStyles();
    const dispatch = useDispatch();;
    const userIdPost = post.userId._id;
    const isPostLiked = post.likes.likedUsers.find(user => user._id === authData);
    const canDelete = userIdPost === authData;

    return (
        <Card className={classes.card}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {post.userId.firstName.charAt(0).toUpperCase()}{post.userId.lastName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={post.userId.username}
        subheader={moment(post.createdAt).fromNow()}
      />
        <CardContent>
          <div><Typography variant="h6" color="textPrimary" component="p">{post.caption}</Typography></div>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="red" onClick={() => dispatch(likePost(post._id, post.likes.likesCount))}>
              { isPostLiked ?   <FavoriteIcon color="secondary"/> :
              <FavoriteBorderIcon fontSize="small" /> }
              &nbsp;{post.likes.likesCount}likes&nbsp;
            </Button>
           {canDelete && <Button size="small" color="primary" onClick={() => dispatch(deletePost(postId))}><DeleteIcon fontSize="small" /></Button>}
          </CardActions>
        </Card>
    )
}