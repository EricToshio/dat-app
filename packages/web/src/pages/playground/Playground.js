import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TicTacToeGrid from './../../components/TicTacToeGrid';
import { connect } from 'react-redux';
import { changeBoardState } from './../../store/actions';

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

const Playground = (props) => {
  console.log(props);
  const classes = useStyles();
  const onPlayerMove = (move) => {
    console.log("chamou");
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
  }
}

const mapDispatchToProps = dispatch => ({
  changeBoardState: move => dispatch(changeBoardState(move))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playground);
