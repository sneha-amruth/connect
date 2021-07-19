import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatar: {
    backgroundColor: pink[500],
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  otherAvatar: {
    backgroundColor: "#3f51b5",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
    padding: "0.6rem",
    margin: "1rem",
    borderRadius: "0"
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  usernName: {
    color: "black",
    fontWeight: "bold",
    textDecoration: "none"
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
    position: "absolute",
    right: 0,
    color: "blue"
  }, 
  followText: {
    color: "#3f51b5",
  },
  unfollowText: {
    color: pink[500],
  }
}));