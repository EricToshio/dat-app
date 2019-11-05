import React, { useState }  from 'react';
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
  const handleInput = props.handleInput;
  const [key, setKey] = useState("");
  const classes = useStyles();
  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };
  const keyPress = (event) =>{
    if(event.keyCode === 13){
      handleInput(event.target.value);
    }
  };
  return (
    <TextField
      label="Key"
      variant="outlined"
      className={classes.root}
      value={key}
      onChange={handleKeyChange}
      onKeyDown={keyPress}
    />
  );
};

export default MenuTextField;