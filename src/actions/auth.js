import { AUTH, AUTH_ERROR } from '../constants/actionTypes';
import { restAPICalls } from "../utils/CallRestAPI";

const { request } = restAPICalls();

export const login = (formData, router) => async(dispatch) =>  {
    try {
      const {success, data, token, message } = await request({
       method:  "POST",
       endpoint: `/api/user/login`,
       body: formData
   });
   if(success){
      const authData = {...data, token}
      dispatch({ type: AUTH, payload: authData });
      router('/');
   } else {
    dispatch({ type: AUTH_ERROR, errors: true, errorText:  message});
    router('/auth');
   }
     
    } catch(err){
         console.log(err.message)
    }
  }

  export const signup = (formData, router) => async(dispatch) =>  {
    try {
      const {data, token } = await request({
       method:  "POST",
       endpoint: `/api/user/register`,
       body: formData
   });
      const authData = { email: data.email, userId: data._id, username: data.username, token}
      dispatch({ type: AUTH, payload: authData });
      router('/');
    } catch(err){
         console.log(err.message)
    }
  }
