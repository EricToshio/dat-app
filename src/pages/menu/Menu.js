import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuButton from './../../components/MenuButton';
import MenuTextField from './../../components/MenuTextField';
import DatService from '../../services/dat-service';

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
  const [playClicked, setPlayClicked] = useState(false);
  const [joinClicked, setJoinClicked] = useState(false);
  const [watchClicked, setWatchClicked] = useState(false);
  const [key, setKey] = useState("");

  const resetStates = () => {
    setPlayClicked(false);
    setJoinClicked(false);
    setWatchClicked(false);
  }

  const onClickPlay = () => {
    resetStates();
    setPlayClicked(true);
    //props.optionClicked();
  }

  const onJoinClicked = () => {
    resetStates();
    setJoinClicked(true);
  }

  const onWatchClicked = () => {
    resetStates();
    setWatchClicked(true);
  }

  const getDat = async () => {
    let dat = new DatService();
    let localDat = await dat.shareBoard();
    console.log("Sua chave de compartilhamento é dat://" + localDat.key.toString('hex'));
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <MenuButton onClick={onClickPlay}>
            Play
          </MenuButton>
          {playClicked && <MenuTextField handleInput={(key)=> getDat()}/>}
          <MenuButton onClick={onWatchClicked}>
            Watch
          </MenuButton>
          {watchClicked && <MenuTextField handleInput={(key)=>console.log(key)}/>}
        </div>
      </div>
    </>
  );
};

export default Menu;
