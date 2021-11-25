import { combineReducers } from 'redux';

import exampleReducer from './examples/reducer';

export default combineReducers({
  example: exampleReducer,
});
