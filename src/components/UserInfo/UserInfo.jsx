import React from 'react';
import { Typography, Paper } from "@material-ui/core";
import useStyles from './styles';


export const UserInfo = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
           
                <Typography variant="h6">My account</Typography>
                
                
          
            </Paper>
        </div>
    )
}
