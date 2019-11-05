import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#FFF',
    minWidth: '250px',
    color: '#14bdac',
    margin: '8px',
  },
}));

const MenuButton = (props) => {
  const classes = useStyles();
  return (
    <Fab variant="extended" className={classes.root} {...props}>
      {props.children}
    </Fab>
  );
};

export default MenuButton;