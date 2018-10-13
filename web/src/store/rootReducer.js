import { combineReducers } from 'redux';

import { authReducer } from './auth/auth.reducer';
import { meReducer } from './me/me.reducer';

export const rootReducer = combineReducers({
  authReducer,
  meReducer,
});
