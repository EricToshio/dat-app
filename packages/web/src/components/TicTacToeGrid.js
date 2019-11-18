import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CirclePiece from './CirclePiece';
import CrossPiece from './CrossPiece';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    width: '600px',
    height: '600px',
    transform: 'translateX(-10px)',
  },
  gridItem: {
    height: '200px',
    width: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridBorderTop: {
    borderTop: '4px solid #0da192',
  },
  gridBorderBottom: {
    borderBottom: '4px solid #0da192',
  },
  gridBorderLeft: {
    borderLeft: '4px solid #0da192',
  },
  gridBorderRight: {
    borderRight: '4px solid #0da192',
  },
}));

const piecesComponents = {
  'X': <CrossPiece />,
  'O': <CirclePiece />,
  '': <div />,
};

const convertCharToComponent = pieceChar => piecesComponents[pieceChar];

const cells = ['1','2','3','4','5','6','7','8','9'];
const withBorderTop = ['4','5','6','7','8','9'];
const withBorderLeft = ['2','3','5','6','8','9'];
const withBorderBottom = ['1','2','3','4','5','6'];
const withBorderRight = ['1','2','4','5','7','8'];

const TicTacToeGrid = (props) => {
  const classes = useStyles();
  const { board } = props;
  const [playerCrossTurn, setPlayerCrossTurn] = useState(false);

  const nextPiece = () => {
    var numX = 0;
    var numO = 0;
    for (var pos in props.board){
      if (props.board[pos] == "X"){
        numX = numX + 1
      }
      if (props.board[pos] == "O"){
        numO = numO + 1
      }
    }
    if (numX <= numO){
      return "X"
    }else{
      return "O"
    }
  };

  const cellClicked = (item) => {
    if (isCellFilled(item) || props.isWatchMode) {
      console.log("nao pode clicar", props.isWatchMode);
      return;
    }
    props.onPlayerMove(
      {
        position: item,
        piece: nextPiece(),
      }
    );
    setPlayerCrossTurn(!playerCrossTurn);
  };

  const isCellFilled = (item) => {
    return board[item] !== '';
  }

  return (
    <div className={classes.gridContainer}>
      {cells.map(item => (
        <div
          key={item}
          className={classNames(classes.gridItem,{
            [classes.gridBorderTop]: withBorderTop.includes(item),
            [classes.gridBorderBottom]: withBorderBottom.includes(item),
            [classes.gridBorderLeft]: withBorderLeft.includes(item),
            [classes.gridBorderRight]: withBorderRight.includes(item),
          })}
          onClick={() => cellClicked(item)}
        >
          {convertCharToComponent(board[item])}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    board: state.board,
    isWatchMode: state.isWatchMode,
  }
}

export default connect(
  mapStateToProps,
  null,
)(TicTacToeGrid);
