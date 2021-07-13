import { ALL_USERS } from '../constants/actionTypes';
import { restAPICalls } from "../utils/CallRestAPI";

const { request } = restAPICalls();

export const getAllUsers = () => async(dispatch) =>  {
    console.log("going to get ");
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

//  export const getUser = (userId) => async(dispatch) =>  {
//     try {
//       const { data } = await request({
//        method:  "GET",
//        endpoint: `/api/user/${userId}`,
//    });
//       dispatch({ type: GET_USER, payload: data })
//     } catch(err){
//          console.log(err.message)
//     }
//  }