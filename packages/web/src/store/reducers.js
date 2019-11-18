import {
  CHANGE_BOARD_STATE,
  STORE_MY_KEY,
  STORE_OPPONENT_KEY,
  LOAD_BOARD,
  SET_WATCH_MODE,
  SET_SHARE_KEY,
} from './actions'

const initialState = {
  board: {
    '1':'',
    '2':'',
    '3':'',
    '4':'',
    '5':'',
    '6':'',
    '7':'',
    '8':'',
    '9':'',
  },
  myKey: null,
  opponentKey: null,
  isWatchMode: false,
  shareKey: null,
}

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BOARD_STATE:
      const { position, piece } = action.payload;
      state.board[position] = piece;
      return {
        ...state,
      }

    case STORE_MY_KEY:
      const { key } = action.payload;
      return {
        ...state,
        myKey: key,
      }
    
    case STORE_OPPONENT_KEY:
      const opkey = action.payload;
      return {
        ...state,
        opponentKey: opkey,
      }
    
    case LOAD_BOARD:
      return {
        ...state,
        board: action.payload.board,
      }
    
    case SET_WATCH_MODE:
      return {
        ...state,
        isWatchMode: action.payload,
      }
    
    case SET_SHARE_KEY:
      return {
        ...state,
        shareKey: action.payload,
      }
      
    default:
      return state
  }
}

export default todos