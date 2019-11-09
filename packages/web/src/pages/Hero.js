import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './menu/Menu';
import Playground from './playground/Playground';
import { createBoard, joinMatch } from './../requests';
import { connect } from 'react-redux';
import { storeMyKey } from '../store/actions';
import CreatePage from './menu/CreatePage';

const useStyles = makeStyles(theme => ({}));

const Hero = (props) => {
  const [page, setPage] = useState('menu');

  
  const optionClicked = async () => {
    setPage('create');
    const response = await createBoard();
    props.storeMyKey(response);
  };

  const handleOpponentKey = async (key) => {
    const response = await joinMatch(key);
    console.log(response);
    setPage('playground');
  };

  return (
    <>
      {page === 'menu' && <Menu optionClicked={optionClicked} />}
      {page === 'playground' && <Playground />}
      {page === 'create' && <CreatePage handleOpponentKey={handleOpponentKey} />}
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
