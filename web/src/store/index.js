// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer } from './reducers';

/* const persistConfig = {
  key: 'root',
  storage,
};
 */

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), thunk, createLogger()];

export const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(...middlewares)),
);
