import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

// const token = JSON.parse(localStorage?.getItem("user"))?.token;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGU5ODAzYTcwNGViODAxNzczYWYxM2MiLCJpYXQiOjE2MjYwMDMxNjYsImV4cCI6MTYyNjA4OTU2Nn0.5pUzGVtpP0znyuSSzKl5lGVNf6I_4ExCrtFNVonGrRE"

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 
    "content-type": "application/json",
    'Authorization': token }
});

export const restAPICalls = () => {
    
    const request = async ({ method, endpoint, body = {} }) => {
      try {
        switch (method) {
          case "GET": {
            const res = await api.get(endpoint, body);
            return res.data;
          }
          case "POST": {
            const res = await api.post(endpoint, body);
            return res.data;
          }
          case "PUT": {
            const res = await api.put(endpoint, body);
            return res.data;
          }
          case "DELETE": {
            const res = await api.delete(endpoint);
            return res.data;
          }
          default:
            return null;
        }
      } catch (error) {
        console.error(error);
      }
    };
    return { request };
  };