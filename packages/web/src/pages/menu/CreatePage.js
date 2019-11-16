import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuButton from './../../components/MenuButton';
import MenuTextField from './../../components/MenuTextField';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CopyToClipboard from '../../components/CopyToClipboard';
import { storeOpponentKey } from '../../store/actions';

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
    borderRadius: '4px',
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

const CreatePage = (props) => {
  const classes = useStyles();
  const [opKey, setOpKey] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setOpKey(value);
  }

  const onClick = () => {
    props.storeOpponentKey(opKey);
    props.onClickStart(opKey);
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.inputRow}>
            <TextField
              label=""
              variant="outlined"
              value={props.myKey}
              disabled
              className={classes.textField}
            />
            <CopyToClipboard>
              {({ copy }) => (
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={() => copy(props.myKey)}
                >
                  Copy
                </Button>
              )}
            </CopyToClipboard>
          </div>
          <div className={classes.inputRow}>
            <TextField
              label="Opponent Key"
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
              Start
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    myKey: state.myKey,
    opponentKey: state.opponentKey,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeOpponentKey: key => dispatch(storeOpponentKey(key)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePage);
