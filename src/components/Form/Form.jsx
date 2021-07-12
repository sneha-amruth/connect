import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';

export const Form = () => {
  const [postData, setPostData] = useState({ message: '' });
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    setPostData({message: ""});
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Post your message</Typography>
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ message: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="medium" type="submit">Post</Button>
      </form>
    </Paper>
  );
};

