import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MenuButton from '../../components/MenuButton';
import Button from '@material-ui/core/Button';
import CopyToClipboard from '../../components/CopyToClipboard';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    height: '70px',
    width: '100vw',
    backgroundColor: '#14bdac',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { shareKey } = props;

  return (
    <div className={classes.root}>
      <CopyToClipboard>
        {({ copy }) => (
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => copy(shareKey)}
          >
            Copy
          </Button>
        )}
      </CopyToClipboard>
      <TextField
        label=""
        variant="outlined"
        value={shareKey}
        disabled
        className={classes.textField}
      />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    shareKey: state.shareKey,    
  }
}

export default connect(
  mapStateToProps,
)(Header);
