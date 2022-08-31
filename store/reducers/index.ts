import { combineReducers } from '@reduxjs/toolkit';

import userReducer, { UserState } from '../reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

export type TRootState = {
  user: UserState;
};

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends TRootState {}
}
