import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const dispatch = useDispatch();
  const [caption, setCaption] = useState('');

  const onContentChanged = e => setCaption(e.target.value);

  const handlePostSubmit = () => {
    if (caption) {
      dispatch(
        postAdded(caption)
      )
    setCaption('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
       
        <label htmlFor="postContent">Caption:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={caption}
          onChange={onContentChanged}
        />
        <button type="button" onClick={handlePostSubmit}>Post</button>
      </form>
    </section>
  )
}