import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import loginR from './reducers/login';
import stockExchangeR from './reducers/stockExchange';
import usersR from './reducers/users';
import usersScreensR from './reducers/usersScreens';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    loginR,
    stockExchangeR,
    usersR,
    usersScreensR,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
