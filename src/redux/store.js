import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootRedcuer.js';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../sagas/root-saga.js';
import logger from 'redux-logger';

const sagaMiddleWare = createSagaMiddleWare();
const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleWare.run(rootSaga);

export default store;