import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuButton from './../../components/MenuButton';
import MenuTextField from './../../components/MenuTextField';

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
}));

const Menu = (props) => {
  const classes = useStyles();
  const [createClicked, setCreateClicked] = useState(false);
  const [joinClicked, setJoinClicked] = useState(false);
  const [watchClicked, setWatchClicked] = useState(false);

  const resetStates = () => {
    setCreateClicked(false);
    setJoinClicked(false);
    setWatchClicked(false);
  }

  const onClickCreate = () => {
    resetStates();
    setCreateClicked(true);
    props.optionClicked();
  }

  const onJoinClicked = () => {
    resetStates();
    setJoinClicked(true);
  }

  const onWatchClicked = () => {
    resetStates();
    setWatchClicked(true);
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <MenuButton onClick={onClickCreate}>
            Create
          </MenuButton>
          <MenuButton onClick={onJoinClicked}>
            Join
          </MenuButton>
          {joinClicked && <MenuTextField />}
          <MenuButton onClick={onWatchClicked}>
            Watch
          </MenuButton>
          {watchClicked && <MenuTextField />}
        </div>
      </div>
    </>
  );
};

export default Menu;
