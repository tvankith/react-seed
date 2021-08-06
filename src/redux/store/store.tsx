/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const logger = require('redux-logger').default;
  middleware.push(logger);
}
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

sagaMiddleware.run(rootSaga);
