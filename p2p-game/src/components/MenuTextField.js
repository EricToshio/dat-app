import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#FFF',
    borderRadius: '24px',
    width: '600px',
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    '& .MuiOutlinedInput-root': {
      // '& fieldset': {
      //   borderColor: 'red',
      // },
      '& fieldset': {
        border: 'none',
      },
    },
  },
}));

const MenuTextField = (props) => {
  const classes = useStyles();
  return (
    <TextField
      label="Key"
      variant="outlined"
      className={classes.root}
    />
  );
};

export default MenuTextField;