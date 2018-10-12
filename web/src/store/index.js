import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { authReducer } from './auth/auth.reducer';

export const rootReducer = combineReducers({
  authReducer,
});
export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), thunk, createLogger({ collapsed: true })];

export const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(...middlewares)),
);
