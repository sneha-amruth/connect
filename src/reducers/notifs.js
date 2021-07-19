import { MY_NOTIFS } from "../constants/actionTypes";

export const notifs = (notifs = [], action) => {
    switch(action.type) {
        case MY_NOTIFS:
            return action.payload;
        
        default:
            return notifs; 
    }
}

export default notifs;