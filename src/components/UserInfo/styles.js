import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
    justifyContent: 'flex-end',
    color: "blue"

  },
}));