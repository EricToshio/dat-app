import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  externalCircle: {
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
    borderRadius: '50%',
    backgroundColor: 'rgb(242, 235, 211)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  internalCircle: {
    height: 'calc(100% - 30px)',
    width: 'calc(100% - 30px)',
    backgroundColor: '#14bdac',
    borderRadius: '50%',
  },
}));

const CirclePiece = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.externalCircle}>
      <div className={classes.internalCircle} />
    </div>
  );
};

export default CirclePiece;