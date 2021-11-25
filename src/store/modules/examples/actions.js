import * as types from '../types';

export function requestClick() {
  return {
    type: types.CLICKED_BUTTON_REQUEST,
  };
}

export function successClick() {
  return {
    type: types.CLICKED_BUTTON_SUCCESS,
  };
}

export function failureClick() {
  return {
    type: types.CLICKED_BUTTON_FAILURE,
  };
}
