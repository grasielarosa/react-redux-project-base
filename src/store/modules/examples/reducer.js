const initialState = {
  clickedButton: false,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CLICKED_BUTTON': {
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }

    default: {
      return state;
    }
  }
}
