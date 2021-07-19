import { combineReducers } from "redux";
import posts from "./posts";
import auth from './auth';
import users from "./users";
import notifs from "./notifs";

export default combineReducers({
    posts,
    auth,
    users,
    notifs
})