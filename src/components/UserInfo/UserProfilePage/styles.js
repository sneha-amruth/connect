import { makeStyles, createStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

export default makeStyles((theme) =>
createStyles({
  avatar: {
    backgroundColor: pink[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  content: {
    marginLeft: "6rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  usernName: {
    margin: "0.2rem 0.3rem",
    fontWeight: "bold",
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    // padding: '0 2px 0 0',
    display: 'flex',
    justifyContent: 'space-between',
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
}))