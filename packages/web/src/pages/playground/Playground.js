import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TicTacToeGrid from './../../components/TicTacToeGrid';
import { connect } from 'react-redux';
import {
  changeBoardState,
  loadBoard,
} from './../../store/actions';
import { makeMove } from './../../requests';
import Header from './Header';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100vh - 70px)',
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
    socket.onopen = () => {
      console.log("Front-end app connected to server websocket");
    };
    socket.onmessage = evt => {
      props.loadBoard(JSON.parse(evt.data));
      setReload((reload + 1) % 2);
    };
    socket.onclose = () => {
      console.log("WebSocket disconnected");
      setSocket(new WebSocket(WS_URL));
    }
  }, []);

  const onPlayerMove = async (move) => {
    
    const { position, piece } = move;
    const resp = await makeMove(position, piece);
    if (resp.status == "ok"){
      props.changeBoardState(move);
      setReload((reload + 1) % 2);
    }else{
      console.log("nao e seu turno");
    }
  }

  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.container}>
          <TicTacToeGrid
            onPlayerMove={onPlayerMove}
          />
        </div>
      </div>
    </>
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
