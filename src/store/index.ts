import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducers } from './reducers/reducers';
import rootSaga from './saga';

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  //@ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
