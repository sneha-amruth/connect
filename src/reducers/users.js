import { ALL_USERS } from "../constants/actionTypes";

export const users = (users = [], action) => {
    switch(action.type) {
        case ALL_USERS:
            return action.payload;
        
        default:
            return users; 
    }
}

export default users;