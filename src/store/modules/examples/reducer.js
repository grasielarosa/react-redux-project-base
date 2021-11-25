import * as types from '../types';

const initialState = {
  clickedButton: false,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CLICKED_BUTTON_SUCCESS: {
      console.log('sucesso');
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }

    case types.CLICKED_BUTTON_FAILURE: {
      console.log('falhou a petição');
      return state;
    }

    case types.CLICKED_BUTTON_REQUEST: {
      console.log('requerendo');
      return state;
    }

    default: {
      return state;
    }
  }
}
