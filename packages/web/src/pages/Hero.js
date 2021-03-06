import React, { useState } from 'react';
import Menu from './menu/Menu';
import Playground from './playground/Playground';
import {
  createBoard,
  joinMatch,
  watchMatch,
  getShareKey,
} from './../requests';
import { connect } from 'react-redux';
import {
  storeMyKey,
  setWatchMode,
  setShareKey,
} from '../store/actions';

const Hero = (props) => {
  const [page, setPage] = useState('menu');

  const playButtonClicked = async () => {
    const response = await createBoard();
    props.storeMyKey(response);
  };

  const handleOpponentKey = async (key) => {
    await joinMatch(key);
    setPage('playground');
    getShareKey().then(responseData => {
      const { shareKey } = responseData;
      props.setShareKey(shareKey);
    })
  };

  const handleShareKey = async (shareKey) => {
    await watchMatch(shareKey);
    setPage('playground');
    props.setWatchMode(true);
    props.setShareKey(shareKey);
  };

  return (
    <>
      {page === 'menu' && 
        <Menu
          playButtonClicked={playButtonClicked}
          startButtonClicked={handleOpponentKey}
          watchButtonClicked={handleShareKey}
        />
      }
      {page === 'playground' && <Playground />}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  storeMyKey: response => dispatch(storeMyKey(response)),
  setWatchMode: watch => dispatch(setWatchMode(watch)),
  setShareKey: shareKey => dispatch(setShareKey(shareKey)),
});

const mapStateToProps = state => ({
  opponentKey: state.opponentKey,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hero);
