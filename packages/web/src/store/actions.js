/*
 * action types
 */

export const CHANGE_BOARD_STATE = 'CHANGE_BOARD_STATE';
export const STORE_MY_KEY = 'STORE_MY_KEY';
export const STORE_OPPONENT_KEY = 'STORE_OPPONENT_KEY';
export const LOAD_BOARD = 'LOAD_BOARD';
export const SET_WATCH_MODE = 'SET_WATCH_MODE';
export const SET_SHARE_KEY = 'SET_SHARE_KEY';
/*
 * action creators
 */

export function changeBoardState(payload) {
  return {
    type: CHANGE_BOARD_STATE,
    payload,
  };
}

export function storeMyKey(payload) {
  return {
    type: STORE_MY_KEY,
    payload,
  };
}

export function storeOpponentKey(payload) {
  return {
    type: STORE_OPPONENT_KEY,
    payload,
  };
}

export function loadBoard(payload) {
  return {
    type: LOAD_BOARD,
    payload,
  }
}

export function setWatchMode(payload) {
  return {
    type: SET_WATCH_MODE,
    payload,
  }
}

export function setShareKey(payload) {
  return {
    type: SET_SHARE_KEY,
    payload,
  }
}