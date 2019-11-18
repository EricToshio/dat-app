import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuButton from './../../components/MenuButton';
import classNames from 'classnames';
import CreatePage from './CreatePage';
import WatchPage from './WatchPage';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#14bdac',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRight: '2px solid #FFF',
    transition: 'all 0.3s ease',
  },
  containerCollapsed: {
    width: '30%',
  },
  optionsContainer: {
    display: 'flex',
    width: 0,
    transition: 'all 0.3s ease',
  },
  optionsContainerInflated: {
    width: '70%',
  },
  buttonWidth: {
    minWidth: '100px',
    height: '56px',
  },
}));

const Menu = (props) => {
  const classes = useStyles();
  const [playClicked, setPlayClicked] = useState(false);
  const [watchClicked, setWatchClicked] = useState(false);
  const [isMenuCollapsed, setMenuCollapsed] = useState(false);

  const resetStates = () => {
    setPlayClicked(false);
    setWatchClicked(false);
  }

  const onClickPlay = async () => {
    collapseMenu();
    resetStates();
    setPlayClicked(true);
    props.playButtonClicked();
  }

  const onClickWatch = () => {
    collapseMenu();
    resetStates();
    setWatchClicked(true);
  }
  
  const collapseMenu = () => {
    setMenuCollapsed(true);
  }

  const inflateMenu = () => {
    setMenuCollapsed(false);
  }

  const onClickStart = (opponentKey) => {
    props.startButtonClicked(opponentKey);
  }

  const onClickWatchKeys = (shareKey) => {
    props.watchButtonClicked(shareKey);
  }

  return (
    <>
      <div className={classes.root}>
        <div
          className={
            classNames(classes.container,
              {
                [classes.containerCollapsed]: isMenuCollapsed,
              }
            )
          }
        >
          <MenuButton
            onClick={onClickPlay}
            disabled={isMenuCollapsed && playClicked}
          >
            Play
          </MenuButton>
          <MenuButton
            onClick={onClickWatch}
            disabled={isMenuCollapsed && watchClicked}
          >
            Watch
          </MenuButton>
        </div>
        <div
          className={
            classNames(classes.optionsContainer,
              {
                [classes.optionsContainerInflated]: isMenuCollapsed,
              }
            )
          }
        >
          
          {playClicked && <CreatePage onClickStart={onClickStart} />}
          {watchClicked && <WatchPage onClickWatch={onClickWatchKeys} />}
        </div>
      </div>
    </>
  );
};

export default Menu;
