import { AUTH } from '../constants/actionTypes';
import { restAPICalls } from "../utils/CallRestAPI";

const { request } = restAPICalls();

export const login = (formData, router) => async(dispatch) =>  {
    try {
      const {data, token } = await request({
       method:  "POST",
       endpoint: `/api/user/login`,
       body: formData
   });
      const authData = {...data, token}
      dispatch({ type: AUTH, payload: authData });
      router('/');
     
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
