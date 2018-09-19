import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { productReducer } from './product';

export const rootReducer = combineReducers({
  authReducer,
  productReducer,
});
