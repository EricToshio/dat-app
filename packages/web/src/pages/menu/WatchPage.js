import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#14bdac',
    height: '100vh',
    width: '100vw',
  },
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonWidth: {
    minWidth: '100px',
    height: '56px',
  },
  textField: {
    width: '400px',
    display: 'flex',
    backgroundColor: '#FFF',
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  button: {
    width: '200px',
    marginLeft: 8,
    backgroundColor: '#FFF',
  }
}));

const WatchPage = (props) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const value = e.target.value;
  }

  const onClick = () => {
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.inputRow}>
            <TextField
              label="Watch key"
              variant="outlined"
              className={classes.textField}
              onChange={handleChange}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={onClick}
              className={classes.button}
            >
              Watch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
