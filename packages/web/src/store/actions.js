/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CHANGE_BOARD_STATE = 'CHANGE_BOARD_STATE';

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function changeBoardState(payload) {
    return {
        type: CHANGE_BOARD_STATE,
        payload,
    };
}