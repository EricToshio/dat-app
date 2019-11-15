import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '100%',
    width: '100%',
  },
  firstArm: {
    width: '100%',
    height: '20px',
    backgroundColor: 'rgb(84, 84, 84)',
    transform: 'rotate(45deg) translateY(-5px) translateX(-5px)',
    position: 'relative',
    top: '50%',
  },
  secondArm: {
    width: '100%',
    height: '20px',
    backgroundColor: 'rgb(84, 84, 84)',
    transform: 'rotate(135deg) translateY(20px) translateX(-20px)',
    position: 'relative',
    top: '50%',
  },
}));

const CrossPiece = (props) => {
  const classes = useStyles();
  return (
    <Zoom>
      <div className={classes.wrapper}>
        <div className={classes.firstArm} />
        <div className={classes.secondArm} />
      </div>
    </Zoom>
  );
};

export default CrossPiece;