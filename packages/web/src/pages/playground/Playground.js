import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TicTacToeGrid from './../../components/TicTacToeGrid';
import { connect } from 'react-redux';
import {
  changeBoardState,
  loadBoard,
} from './../../store/actions';

// const WebSocket = require('ws');

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#14bdac',
  },
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const WS_URL = 'ws://localhost:8080';

const Playground = (props) => {
  const classes = useStyles();
  const [reload, setReload] = useState(0);
  const [socket, setSocket] = useState(new WebSocket(WS_URL));

  useEffect(() => {
    console.log("chamou essa parada");
    socket.onopen = () => {
      console.log("Front-end app connected to server websocket");
    };
    socket.onmessage = evt => {
      // console.log("recebi alguma coisa", JSON.parse(evt.data));
      console.log("onmessage", evt.data);
      props.loadBoard(JSON.parse(evt.data));
      setReload((reload + 1) % 2);
    };
    socket.onclose = () => {
      console.log("desconectou");
      setSocket(new WebSocket(WS_URL));
    }
  }, []);

  const onPlayerMove = (move) => {
    props.changeBoardState(move);
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TicTacToeGrid
          onPlayerMove={onPlayerMove}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    board: state.board,
    myKey: state.myKey,
  }
}

const mapDispatchToProps = dispatch => ({
  changeBoardState: move => dispatch(changeBoardState(move)),
  loadBoard: board => dispatch(loadBoard(board)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playground);
