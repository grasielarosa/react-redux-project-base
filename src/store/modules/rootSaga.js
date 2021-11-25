import { all } from 'redux-saga/effects';

import example from './examples/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
