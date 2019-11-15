import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';

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
    <Zoom>
      <div className={classes.externalCircle}>
        <div className={classes.internalCircle} />
      </div>
    </Zoom>
  );
};

export default CirclePiece;