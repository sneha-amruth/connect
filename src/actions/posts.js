import { restAPICalls } from "../utils/CallRestAPI";
import { FETCH_ALL, CREATE, DELETE, LIKE } from "../constants/actionTypes";

const { request } = restAPICalls();

export const getPosts = () => async(dispatch) =>  {
   try {
     const { data } = await request({
      method:  "GET",
      endpoint: `/api/posts/`,
  });
     dispatch({ type: FETCH_ALL, payload: data })
   } catch(err){
        console.log(err.message)
   }
}

export const createPost = (post) => async(dispatch) =>  {
 
  try {
    const { data } = await request({
     method:  "POST",
     endpoint: `/api/posts/`,
     body: {
       caption: post.message 
     },
 });
    dispatch({ type: CREATE, payload: data })
  } catch(err){
       console.log(err.message)
  }
}

export const deletePost = (postId) => async(dispatch) =>  {
  try {
     await request({
     method:  "DELETE",
     endpoint: `/api/posts/${postId}`,
 });
    dispatch({ type: DELETE, payload: postId })
  } catch(err){
       console.log(err.message)
  }
}

export const likePost = (postId, likesCount) => async(dispatch) =>  {
  try {
     const { data } = await request({
     method:  "POST",
     endpoint: `/api/posts/${postId}`,
     body: {
      likesCount
     }
 });
    dispatch({ type: LIKE, payload: data })
  } catch(err){
       console.log(err.message)
  }
}