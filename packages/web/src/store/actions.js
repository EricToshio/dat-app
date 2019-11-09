/*
 * action types
 */

export const CHANGE_BOARD_STATE = 'CHANGE_BOARD_STATE';
export const STORE_MY_KEY = 'STORE_MY_KEY';
export const STORE_OPPONENT_KEY = 'STORE_OPPONENT_KEY';
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