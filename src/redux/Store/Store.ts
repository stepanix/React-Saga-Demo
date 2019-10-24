import { createStore, applyMiddleware } from 'redux';
import reducers from '../Reducers/index';
import createSagaMiddleware from 'redux-saga';
import appWatcherSagas from '../Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appWatcherSagas);

export default store;