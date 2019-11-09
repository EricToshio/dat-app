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

const convertCharToComponent = (pieceChar) => (
  piecesComponents[pieceChar]
);

const cells = ['1','2','3','4','5','6','7','8','9'];
const withBorderTop = ['4','5','6','7','8','9'];
const withBorderLeft = ['2','3','5','6','8','9'];
const withBorderBottom = ['1','2','3','4','5','6'];
const withBorderRight = ['1','2','4','5','7','8'];

const TicTacToeGrid = (props) => {
  const classes = useStyles();
  const { board } = props;
  const [playerCrossTurn, setPlayerCrossTurn] = useState(false);

  useEffect(() => {console.log("update")});

  const cellClicked = (item) => {
    props.onPlayerMove(
      {
        position: item,
        piece: playerCrossTurn ? "X" : "O",
      }
    );
    setPlayerCrossTurn(!playerCrossTurn);
  };

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
  }
}

export default connect(
  mapStateToProps,
  null,
)(TicTacToeGrid);
