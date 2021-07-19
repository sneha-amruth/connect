import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navBar: {
    backgroundColor: "#ffff",
  },
  typographyStyle: {
    flex: 1,
    textDecoration: "none",
    color: "#ffff",
},
link: {
    textDecoration: "none",
},
iconStyle: {
    size: "medium",
    color: "#ffff"
},
paper: {
  position: 'absolute',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  border: '1px solid grey',
  borderRadius: "0.5rem",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
},

}));