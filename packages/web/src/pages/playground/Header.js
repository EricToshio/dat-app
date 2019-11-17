import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MenuButton from '../../components/MenuButton';
import TextField from '@material-ui/core/TextField';
import { encodeKeys } from '../../utils';

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

const Header = async (props) => {
  const classes = useStyles();
  const sharedKey = await encodeKeys(props.myKey,props.opponentKey);
  return (
    <div className={classes.root}>
      <TextField
        label=""
        variant="outlined"
        value={sharedKey}
        disabled
        className={classes.textField}
      />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    myKey: state.myKey,
    opponentKey: state.opponentKey,    
  }
}

export default connect(
  mapStateToProps,
)(Header);