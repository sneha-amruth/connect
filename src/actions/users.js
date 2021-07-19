import { ALL_USERS, MY_NOTIFS } from '../constants/actionTypes';
import { restAPICalls } from "../utils/CallRestAPI";

const { request } = restAPICalls();

export const getAllUsers = () => async(dispatch) =>  {
    try {
      const { data } = await request({
       method:  "GET",
       endpoint: `/api/user/`,
   });
      dispatch({ type: ALL_USERS, payload: data })
    } catch(err){
         console.log(err.message)
    }
 }

 export const followUser = (followUserId) => async(dispatch) =>  {
  try {
    const { data }  = await request({
     method:  "POST",
     endpoint: `/api/user/follow`,
     body: {
      following: followUserId
     }
 });
    dispatch({ type: ALL_USERS, payload: data })
  } catch(err){
       console.log(err.message)
  }
}
export const unFollowUser = (unFollowUserId) => async(dispatch) =>  {
  try {
    const { data }  = await request({
     method:  "POST",
     endpoint: `/api/user/unfollow`,
     body: {
      following: unFollowUserId
     }
 });
    dispatch({ type: ALL_USERS, payload: data })
  } catch(err){
       console.log(err.message)
  }
}

export const getNotifications = () => async(dispatch) =>  {
  try {
    const {data} = await request({
     method:  "GET",
     endpoint: `/api/notif`,
 });
    dispatch({ type: MY_NOTIFS, payload: data })
  } catch(err){
       console.log(err.message)
  }
}