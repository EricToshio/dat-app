import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './menu/Menu';
import Playground from './playground/Playground';
import { createBoard, joinMatch, WatchMatch } from './../requests';
import { connect } from 'react-redux';
import { storeMyKey } from '../store/actions';

const useStyles = makeStyles(theme => ({}));

const Hero = (props) => {
  const [page, setPage] = useState('menu');

  
  const playButtonClicked = async () => {
    const response = await createBoard();
    props.storeMyKey(response);
  };

  const handleOpponentKey = async (key) => {
    await joinMatch(key);
    setPage('playground');
  };
  const handleShareKey = async (keys) => {
    console.log(keys)
    //await WatchMatch(keys);
    //setPage('playground');
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
  storeMyKey: response => dispatch(storeMyKey(response))
});

const mapStateToProps = state => ({
  opponentKey: state.opponentKey,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hero);
