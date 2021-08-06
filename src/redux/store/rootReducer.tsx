/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';
import authSlice from '../slices/auth.slice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
