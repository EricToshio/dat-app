import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TicTacToeGrid from '../../components/TicTacToeGrid';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#14bdac',
  },
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Playground = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TicTacToeGrid></TicTacToeGrid>
      </div>
    </div>
  );
};

export default Playground;