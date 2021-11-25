import { combineReducers } from 'redux';

import exampleReducer from './modules/examples/reducer';

export default combineReducers({
  example: exampleReducer,
});
