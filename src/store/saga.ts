import { all } from 'redux-saga/effects';
import { userSagaWatcher } from 'store/reducers/user/saga';

export default function* rootSaga() {
  yield all([userSagaWatcher()]);
}
