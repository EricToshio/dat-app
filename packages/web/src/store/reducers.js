import {
  CHANGE_BOARD_STATE,
} from './actions'

const initialState = {
  board: {"1":"","2":"","3":"","4":"","5":"","6":"","7":"","8":"","9":""},
}

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BOARD_STATE:
      const { position, piece } = action.payload;
      state.board[position] = piece;
      return {
        ...state,
      }
    default:
      return state
  }
}

export default todos