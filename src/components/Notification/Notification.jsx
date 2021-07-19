import React from 'react';
// import { useSelector } from "react-redux";
import { Typography } from '@material-ui/core';


export const Notification = ({notifs}) => {
    // const users = useSelector((state) => state.users);
    // const [username, setUsername] = useState(null);

    // const getUsername = (notif) => {
    //   setUsername(users.filter(user => user._id.str === notif.notificationBy.str)[0].username);
    // }

    return (
        <div>
            {notifs.map(notif => (
                <>
                {/* {getUsername(notif)} */}
                {/* <Typography>{username} &nbsp; */}
                {/* {notif.activity === "follow" ? "followed you" : "liked your post"}</Typography> */}
                </>
            ))}
        </div>
    )
}
